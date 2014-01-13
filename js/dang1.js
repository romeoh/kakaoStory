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

	data.title = '당신이 생각하는 닮은 연예인';
	data.url = 'http://goo.gl/A3wL9v';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
		s = '여자친구'
	} else if (sexType == 'girl') {
		database = dataGirl;
		s = '남자친구'
	}
	idx1 = process(database)
	idx2 = process(database)
	idx3 = process(dataRel)
	
	post += '[' + data.title + ']\n\n';
	post += '당신이 생각하는 당신과 닮은 연예인은 ' + database[idx1]['name'].replace(/와/g, '').replace(/과/g, '') + ' 이지만,\n';
	post += dataRel[idx3] + ' ' + userName + '님을 ' + database[idx2]['name'] + ' 닮았다 생각합니다.';
	data.post = post;
	
	data.desc = '일딴 빨리 만나길..';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[idx1]['photo'];

	sendData(data);
}

dataGirl = [
	{'photo':'weddingG1.png', 'name':'신애와'},
	{'photo':'weddingG2.png', 'name':'사오리와'},
	{'photo':'weddingG3.png', 'name':'솔비와'},
	{'photo':'weddingG4.png', 'name':'서인영과'},
	{'photo':'weddingG5.png', 'name':'조여정과'},
	{'photo':'weddingG6.png', 'name':'황보와'},
	{'photo':'weddingG7.png', 'name':'이현지와'},
	{'photo':'weddingG8.png', 'name':'화요비와'},
	{'photo':'weddingG9.png', 'name':'손담비와'},
	{'photo':'weddingG10.png', 'name':'이윤지와'},
	{'photo':'weddingG11.png', 'name':'태연과'},
	{'photo':'weddingG12.png', 'name':'김신영과'},
	{'photo':'weddingG13.png', 'name':'이시영과'},
	{'photo':'weddingG14.png', 'name':'황정음과'},
	{'photo':'weddingG15.png', 'name':'유이와'},
	{'photo':'weddingG16.png', 'name':'김나영과'},
	{'photo':'weddingG17.png', 'name':'가인과'},
	{'photo':'weddingG18.png', 'name':'황우슬혜와'},
	{'photo':'weddingG19.png', 'name':'서현과'},
	{'photo':'weddingG20.png', 'name':'빅토리아와'},
	{'photo':'weddingG21.png', 'name':'박소현과'},
	{'photo':'weddingG22.png', 'name':'함은정과'},
	{'photo':'weddingG23.png', 'name':'권리세와'},
	{'photo':'weddingG24.png', 'name':'강소라와'},
	{'photo':'weddingG25.png', 'name':'윤세아와'},
	{'photo':'weddingG26.png', 'name':'한선화와'},
	{'photo':'weddingG27.png', 'name':'오연서와'},
	{'photo':'weddingG28.png', 'name':'고준희와'},
	{'photo':'weddingG29.png', 'name':'정인과'},
	{'photo':'weddingG30.png', 'name':'손나은과'},
	{'photo':'weddingG31.png', 'name':'정유미와'},
	{'photo':'weddingG32.png', 'name':'이소연과'}
]

dataBoy = [
	{'photo':'weddingB1.png', 'name':'알렉스와'},
	{'photo':'weddingB2.png', 'name':'정형돈과'},
	{'photo':'weddingB3.png', 'name':'앤디와'},
	{'photo':'weddingB4.png', 'name':'크라운J와'},
	{'photo':'weddingB5.png', 'name':'이휘재와'},
	{'photo':'weddingB6.png', 'name':'김현중과'},
	{'photo':'weddingB8.png', 'name':'환희와'},
	{'photo':'weddingB9.png', 'name':'마르코와'},
	{'photo':'weddingB10.png', 'name':'강인과'},
	{'photo':'weddingB11.png', 'name':'신성록'},
	{'photo':'weddingB12.png', 'name':'전진과'},
	{'photo':'weddingB13.png', 'name':'김용준과'},
	{'photo':'weddingB14.png', 'name':'박재정과'},
	{'photo':'weddingB15.png', 'name':'이석훈과'},
	{'photo':'weddingB16.png', 'name':'조권과'},
	{'photo':'weddingB17.png', 'name':'이선호와'},
	{'photo':'weddingB18.png', 'name':'정용화와'},
	{'photo':'weddingB19.png', 'name':'닉쿤과'},
	{'photo':'weddingB20.png', 'name':'김원준과'},
	{'photo':'weddingB21.png', 'name':'이장우와'},
	{'photo':'weddingB22.png', 'name':'데이비드 오와'},
	{'photo':'weddingB23.png', 'name':'이특과'},
	{'photo':'weddingB24.png', 'name':'줄리엔 강과'},
	{'photo':'weddingB25.png', 'name':'황광희와'},
	{'photo':'weddingB26.png', 'name':'이준과'},
	{'photo':'weddingB27.png', 'name':'정진운과'},
	{'photo':'weddingB28.png', 'name':'조정치와'},
	{'photo':'weddingB29.png', 'name':'태민과'},
	{'photo':'weddingB30.png', 'name':'정준영과'},
	{'photo':'weddingB31.png', 'name':'윤한과'}
]



 dataRel = [
	'당신의 친구들은',
	'당신의 엄마는',
	'당신의 선생님은',
	'당신의 학교 일진은',
	'당신의 할머니는',
	'당신의 학교 교장선생님은',
	'당신의 체육 선생님은',
	'당신의 국어 선생님은',
	'당신의 학교 학생주임 선생님은',
	'당신의 학교 학생 회장은',
	'당신의 학교 얼짱은',
	'당신의 아빠는',
	'당신의 베스트 프렌드는',
	'이 글을 보는 사람들은',
	'당신의 카스 친구들은'
]




























