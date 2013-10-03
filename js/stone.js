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

	data.title = '나의 탄생석 알아보기';
	data.url = 'http://goo.gl/lYsA3C';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = bornMonth - 1
	
	post += '[' + data.title + ']\n\n';
	post += bornMonth + '월에 태어난 ' + userName + '님의 탄생석은 ';
	post += '"' + database[idx]['stone'].replace(/은/g, '').replace(/는/g, '') + '" 입니다.\n';
	post += database[idx]['stone'] + ' ' + database[idx]['mean'] + ' 상징합니다.';
	post += '';
	data.post = post;
	
	data.desc = userName + '님의 탄생석은 "' + database[idx]['stone'].replace(/은/g, '').replace(/는/g, '') + '" 입니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[idx]['photo'];

	sendData(data);
}



database = [
	{'month':'1', 'stone':'가넷은', 'photo':'stone1.png', 'mean':'진실과 우정을'},
	{'month':'2', 'stone':'자수정은', 'photo':'stone2.png', 'mean':'평화와 성실을'},
	{'month':'3', 'stone':'애쿼머린은', 'photo':'stone3.png', 'mean':'총명을'},
	{'month':'4', 'stone':'다이아몬드는', 'photo':'stone4.png', 'mean':'고귀를'},
	{'month':'5', 'stone':'에메랄드는', 'photo':'stone5.png', 'mean':'행복을'},
	{'month':'6', 'stone':'진주는', 'photo':'stone6.png', 'mean':'건강과 부귀를'},
	{'month':'7', 'stone':'루비는', 'photo':'stone7.png', 'mean':'용기와 정의를'},
	{'month':'8', 'stone':'페리도트는', 'photo':'stone8.png', 'mean':'부부의 화합을'},
	{'month':'9', 'stone':'사파이어는', 'photo':'stone9.png', 'mean':'진리와 불변을'},
	{'month':'10', 'stone':'오팔은', 'photo':'stone10.png', 'mean':'희망과 순결을'},
	{'month':'11', 'stone':'토파즈는', 'photo':'stone11.png', 'mean':'우정을'},
	{'month':'12', 'stone':'터키석은', 'photo':'stone12.png', 'mean':'성공과 승리를'}
]
































