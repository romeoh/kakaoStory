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

	data.title = '개그콘서트 캐릭터';
	data.url = 'http://goo.gl/cGx4dk';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	anidx = process(database)
	mat = process(30, 100)

	post += '[' + data.title + ']\n\n';
	post += userName + '님과 어울리는 개그콘서트 캐릭터는 "' + database[anidx]['charac'] + '"입니다.\n';
	post += '매치율: ' + mat + '%\n\n';
	post += '대사 쓰기: ';
	data.post = post;
	
	data.desc = database[anidx]['charac'];
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[anidx]['photo'];

	sendData(data);
}


database = [
	{'photo':'gaecon1.png', 'charac':'시청률의 제왕의 박대표'},
	{'photo':'gaecon2.png', 'charac':'시청률의 제왕의 아이돌'},
	{'photo':'gaecon3.png', 'charac':'황해의 실장'},
	{'photo':'gaecon4.png', 'charac':'황해의 남자직원'},
	{'photo':'gaecon5.png', 'charac':'황해의 사장'},
	{'photo':'gaecon6.png', 'charac':'황해의 고객님'},
	{'photo':'gaecon7.png', 'charac':'두근두근의 남친'},
	{'photo':'gaecon8.png', 'charac':'두근두근의 여친'},
	{'photo':'gaecon9.png', 'charac':'두근두근의 여동생'},
	{'photo':'gaecon10.png', 'charac':'뿜엔터테인먼트의 사장'},
	{'photo':'gaecon11.png', 'charac':'뿜엔터테인먼트의 신보라'},
	{'photo':'gaecon12.png', 'charac':'뿜엔터테인먼트의 박지민'},
	{'photo':'gaecon13.png', 'charac':'뿜엔터테인먼트의 선생님'},
	{'photo':'gaecon14.png', 'charac':'뿜엔터테인먼트의 자나'},
	{'photo':'gaecon15.png', 'charac':'편하게있어의 과장'},
	{'photo':'gaecon16.png', 'charac':'놈놈놈의 여친'},
	{'photo':'gaecon17.png', 'charac':'안생겨요의 송영길'},
	{'photo':'gaecon18.png', 'charac':'안생겨요의 유민상'},
	{'photo':'gaecon19.png', 'charac':'끝사랑의 정사장님'},
	{'photo':'gaecon20.png', 'charac':'끝사랑의 김여사'},
	{'photo':'gaecon21.png', 'charac':'깐죽거리잔혹사의 유단자'},
	{'photo':'gaecon22.png', 'charac':'고조쇼의 고조할아버지'}
]



























