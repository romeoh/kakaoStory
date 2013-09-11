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

	data.title = '연예인과 외모대결';
	data.url = 'http://goo.gl/QR0VEv';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
	} else if (sexType == 'girl') {
		database = dataGirl;
	}
	idx = process(database);
	meVal = getRandom(0, 99);
	youVal = getRandom(0, 99);
	getGraph(meVal);

	post += '[' + data.title + ']\n\n';
	post += database[idx]['name'] + ': ' + getGraph(youVal) + ' (' + youVal + '점)\n';
	post += userName + ': ' + getGraph(meVal) + ' (' + meVal + '점)\n\n';

	if (meVal > youVal) {
		post += '후후, ' + database[idx]['name'].replace(/　/g, '') + ' 쯤이야..';
	} else if (meVal < youVal) {
		post += '아깝다. ' + database[idx]['name'].replace(/　/g, '') + '한테 지다니..';
	} else {
		post += '오~ 막강한데..';
	}
	
	data.post = post;
	
	data.desc = '오직 얼굴만으로 승부를 건다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/feature/' + database[idx]['photo'];

	sendData(data);
}

function getGraph(value){
	return dataGraph[Math.round(value/10)];
}



// 남자
dataBoy = [
	{'photo': 'featureB1.png', 'name': '정준영'},
	{'photo': 'featureB2.png', 'name': '허　각'},
	{'photo': 'featureB3.png', 'name': '주　원'},
	{'photo': 'featureB4.png', 'name': '서인국'},
	{'photo': 'featureB5.png', 'name': '이종석'},
	{'photo': 'featureB6.png', 'name': '타　오'},
	{'photo': 'featureB7.png', 'name': '시우민'},
	{'photo': 'featureB8.png', 'name': '　엘　'},
	{'photo': 'featureB9.png', 'name': '스윙스'},
	{'photo': 'featureB10.png', 'name': '승　리'},
	{'photo': 'featureB11.png', 'name': '양상국'},
	{'photo': 'featureB12.png', 'name': '김성규'},
	{'photo': 'featureB13.png', 'name': '송영길'},
	{'photo': 'featureB14.png', 'name': '최효종'},
	{'photo': 'featureB15.png', 'name': '정형돈'},
	{'photo': 'featureB16.png', 'name': '김경진'},
	{'photo': 'featureB17.png', 'name': '김제동'},
	{'photo': 'featureB18.png', 'name': '존　박'},
	{'photo': 'featureB19.png', 'name': '민　호'}
]

// 여자
dataGirl = [
	{'photo': 'featureG1.png', 'name': '정유미'},
	{'photo': 'featureG2.png', 'name': '곽지민'},
	{'photo': 'featureG3.png', 'name': '남보라'},
	{'photo': 'featureG4.png', 'name': '클라라'},
	{'photo': 'featureG5.png', 'name': '유하나'},
	{'photo': 'featureG6.png', 'name': '구하라'},
	{'photo': 'featureG7.png', 'name': '정은지'},
	{'photo': 'featureG8.png', 'name': '허　민'},
	{'photo': 'featureG9.png', 'name': '한보름'},
	{'photo': 'featureG10.png', 'name': '태　연'},
	{'photo': 'featureG11.png', 'name': '서효림'},
	{'photo': 'featureG12.png', 'name': '전소민'},
	{'photo': 'featureG13.png', 'name': '민　아'},
	{'photo': 'featureG14.png', 'name': '맹승지'},
	{'photo': 'featureG15.png', 'name': '김지민'},
	{'photo': 'featureG16.png', 'name': '김혜선'},
	{'photo': 'featureG17.png', 'name': '오나미'},
	{'photo': 'featureG18.png', 'name': '박지선'},
	{'photo': 'featureG19.png', 'name': '김영희'}
]

dataGraph = [
	'□□□□□□□□□□',
	'■□□□□□□□□□',
	'■■□□□□□□□□',
	'■■■□□□□□□□',
	'■■■■□□□□□□',
	'■■■■■□□□□□',
	'■■■■■■□□□□',
	'■■■■■■■□□□',
	'■■■■■■■■□□',
	'■■■■■■■■■□',
	'■■■■■■■■■■'
]
































