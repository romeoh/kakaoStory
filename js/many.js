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

	data.title = '나 때문에 싸우는 사람은 몇명인가?';
	data.url = 'http://goo.gl/6IgL9x';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
		sex = '여자'
	} else if (sexType == 'girl') {
		database = dataGirl
		sex = '남자'
	}
	idx = process(database)
	n = process(0, 3)
	if (n === 0) {
		m = process(0, 3)
	} else if (n === 1) {
		m = process(0, 7)
	} else {
		m = process(0, 30)
	}

	post += '[' + data.title.replace(/나/, userName).replace(/사람은/, sex+'는') + ']\n\n';
	if (m === 0) {
		post += userName + '님을 차지하기 위해 싸우는 ' + sex + '는 단 한명도 없습니다.\n';
		post += '나가서 싸우십시오.';
		img = 'many.png'
	} else if (m === 1) {
		post += userName + '님을 좋아하는 ' + sex + '는 ' + database[idx]['name'] + ' 닮은사람 단 한명입니다.';
		img = database[idx]['photo']
	} else {
		post += userName + '님을 차지하기 위해 싸우는 ' + sex + '는 ' + m + '명입니다.\n\n';
		post += '훗날, 그 중에 ' + userName + '님은 ' + database[idx]['name'] + ' 닮은사람과 사랑을 이룹니다.';
		img = database[idx]['photo']
	}
	data.post = post;
	
	data.desc = '나 때문에 그만 좀 싸워!!';
	data.img = 'http://romeoh.github.io/kakaoStory/images/feature/' + img;

	sendData(data);
}



dataGirl = [
	{'photo': 'featureB1.png', 'name': '정준영을'},
	{'photo': 'featureB2.png', 'name': '허각을'},
	{'photo': 'featureB3.png', 'name': '주원을'},
	{'photo': 'featureB4.png', 'name': '서인국을'},
	{'photo': 'featureB5.png', 'name': '이종석을'},
	{'photo': 'featureB6.png', 'name': '타오를'},
	{'photo': 'featureB7.png', 'name': '시우민을'},
	{'photo': 'featureB8.png', 'name': '엘을'},
	{'photo': 'featureB9.png', 'name': '스윙스를'},
	{'photo': 'featureB10.png', 'name': '승리를'},
	{'photo': 'featureB11.png', 'name': '양상국을'},
	{'photo': 'featureB12.png', 'name': '김성규를'},
	{'photo': 'featureB13.png', 'name': '송영길을'},
	{'photo': 'featureB14.png', 'name': '최효종을'},
	{'photo': 'featureB15.png', 'name': '정형돈을'},
	{'photo': 'featureB16.png', 'name': '김경진을'},
	{'photo': 'featureB17.png', 'name': '김제동을'},
	{'photo': 'featureB18.png', 'name': '존박을'},
	{'photo': 'featureB19.png', 'name': '민호를'}
]

// 여자
dataBoy = [
	{'photo': 'featureG1.png', 'name': '정유미를'},
	{'photo': 'featureG2.png', 'name': '곽지민을'},
	{'photo': 'featureG3.png', 'name': '남보라를'},
	{'photo': 'featureG4.png', 'name': '클라라를'},
	{'photo': 'featureG5.png', 'name': '유하나를'},
	{'photo': 'featureG6.png', 'name': '구하라를'},
	{'photo': 'featureG7.png', 'name': '정은지를'},
	{'photo': 'featureG8.png', 'name': '허민을'},
	{'photo': 'featureG9.png', 'name': '한보름을'},
	{'photo': 'featureG10.png', 'name': '태연을'},
	{'photo': 'featureG11.png', 'name': '서효림을'},
	{'photo': 'featureG12.png', 'name': '전소민을'},
	{'photo': 'featureG13.png', 'name': '민아를'},
	{'photo': 'featureG14.png', 'name': '맹승지를'},
	{'photo': 'featureG15.png', 'name': '김지민을'},
	{'photo': 'featureG16.png', 'name': '김혜선을'},
	{'photo': 'featureG17.png', 'name': '오나미를'},
	{'photo': 'featureG18.png', 'name': '박지선을'},
	{'photo': 'featureG19.png', 'name': '김영희를'}
]
































