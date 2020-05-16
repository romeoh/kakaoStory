function action(_data) {
	var  data = _data || {}
		,media = data.media || 'story'
		,sexType = data.sexType || null	//boy or girl
		,userName = data.userName || null
		,color = data.color || null
		,alphabet = data.alphabet || null
		,coffee = data.coffee || null
		,bornYear = data.bornYear || null
		,bornMonth = data.bornMonth || null
		,bornDate = data.bornDate || null
		,blood = data.blood || null
		,post = ''

	data.title = '별자리로 보는 2020년 나의운명';
	data.url = 'http://goo.gl/b33j0A';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = getStar(selMonth.value, selDate.value)
	starName = dataBlood[idx]['name']
	birth = dataBlood[idx]['date']
	img = dataBlood[idx]['img']
	color = dataBlood[idx]['color']
	place = dataBlood[idx]['place']
	talk = dataBlood[idx]['talk']
	point = dataBlood[idx]['point']

	post += '[' + data.title + ']\n';
	post += '🐝 ' + point + '\n\n'
	post += '- 별자리이름: ' + starName + ' (' + birth + ')\n'
	post += '- 행운색상: ' + color + '\n'
	post += '- 행운장소: ' + place + '\n'
	post += '- 행운격언: ' + talk + ''
	data.post = post;
	
	data.desc = starName + ' (' + birth + ')';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/blood2014.png';

	sendData(data);
}



function getStar(month, date){
	switch(month){
		case '1':
			if (date >= 21) {
				return 0;
			} else {
				return 11;
			}
		break;
		case '2':
			if (date >= 19) {
				return 1;
			} else {
				return 0;
			}
		break;
		case '3':
			if (date >= 21) {
				return 2;
			} else {
				return 1;
			}
		break;
		case '4':
			if (date >= 20) {
				return 3;
			} else {
				return 2;
			}
		break;
		case '5':
			if (date >= 21) {
				return 4;
			} else {
				return 3;
			}
		break;
		case '6':
			if (date >= 22) {
				return 5;
			} else {
				return 4;
			}
		break;
		case '7':
			if (date >= 23) {
				return 6;
			} else {
				return 5;
			}
		break;
		case '8':
			if (date >= 23) {
				return 7;
			} else {
				return 6;
			}
		break;
		case '9':
			if (date >= 23) {
				return 8;
			} else {
				return 7;
			}
		break;
		case '10':
			if (date >= 23) {
				return 9;
			} else {
				return 8;
			}
		break;
		case '11':
			if (date >= 23) {
				return 10;
			} else {
				return 9;
			}
		break;
		case '12':
			if (date >= 22) {
				return 11;
			} else {
				return 10;
			}
		break;

	}
}

// 남자
dataBlood = [
	{'name': '물병자리', 'date':'1/20~2/18', 'img':'star0.jpg', 'color':'노랑', 'place':'백화점', 'talk':'천리길도 한걸음부터', 'point':'안정적인 흐름이 지속되는 한해!'},
	{'name': '물고기자리', 'date':'2/19~3/20', 'img':'star1.jpg', 'color':'감색', 'place':'마트', 'talk':'그날의 일은 그날에 끝내는 것이 좋다.', 'point':'변화가 무척 많은 한해'},
	{'name': '양자리', 'date':'3/21~4/19', 'img':'star2.jpg', 'color':'검정', 'place':'터미널', 'talk':'고생끝에 낙이 온다.', 'point':'안정 속에서 변화를 가져올 수 있는 시기'},
	{'name': '황소자리', 'date':'4/20~5/20', 'img':'star3.jpg', 'color':'갈색', 'place':'공항', 'talk':'구르는 돌에는 이끼가 끼지 않는다.', 'point':'운이 다운되다가 좋아지는 형세'},
	{'name': '쌍둥이자리', 'date':'5/21~6/21', 'img':'star4.jpg', 'color':'주황', 'place':'시장', 'talk':'세 사람이 모이면 제갈량의 지혜가 있다.', 'point':'운의 흐름이 크게 변하는 시기'},
	{'name': '게자리', 'date':'6/22~7/22', 'img':'star5.jpg', 'color':'녹색', 'place':'음식점', 'talk':'유종의 미를 거두어야 한다.', 'point':'큰 변동이 없는 시기'},
	{'name': '사자자리', 'date':'7/23~8/22', 'img':'star6.jpg', 'color':'귤색', 'place':'레스토랑', 'talk':'정신일도 하사불성', 'point':'바라는것이 어느정도 완성되는 때'},
	{'name': '처녀자리', 'date':'8/23~9/22', 'img':'star7.jpg', 'color':'녹색', 'place':'카페', 'talk':'어떤 오르막길도 반드시 내리막길이 있다.', 'point':'리더가 될만한 부분이 보이는 때'},
	{'name': '천칭자리', 'date':'9/23~10/22', 'img':'star8.jpg', 'color':'파랑', 'place':'가구점', 'talk':'자신을 낮추어야 남을 다스릴 수 있다.', 'point':'복잡한 일이 많이 생기는 시기'},
	{'name': '전갈자리', 'date':'10/23~11/22', 'img':'star9.jpg', 'color':'녹색', 'place':'카페', 'talk':'어떤 오르막길도 반드시 내리막길이 있다.', 'point':'노력으로 변화하는 부분이 많은 시기'},
	{'name': '사수자리', 'date':'11/23~12/21', 'img':'star10.jpg', 'color':'빨강', 'place':'헬스클럽', 'talk':'듣는 것은 많이, 말하는 것은 반으로,', 'point':'안정적인 마인드가 필요한 시기'},
	{'name': '염소자리', 'date':'12/22~1/20', 'img':'star11.jpg', 'color':'회색', 'place':'산', 'talk':'평판은 최선의 소개장이다.', 'point':'성과가 많아지는 시기'}
]
































