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

	data.title = '나의 우결 상대는?';
	data.url = 'http://goo.gl/Jp9Qdh';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
	} else if (sexType == 'girl') {
		database = dataGirl;
	}
	idx = process(database)
	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님이 "우리결혼했어요"에 \n';
	post += '함께 출연할 상대는 "' + database[idx]['name'] + '" 입니다.\n\n';
	post += '축하합니다.';
	data.post = post;
	
	data.desc = '진짜로 이어지시길..';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[idx]['photo'];

	sendData(data);
}

dataBoy = [
	{'photo':'weddingG1.png', 'name':'신애'},
	{'photo':'weddingG2.png', 'name':'사오리'},
	{'photo':'weddingG3.png', 'name':'솔비'},
	{'photo':'weddingG4.png', 'name':'서인영'},
	{'photo':'weddingG5.png', 'name':'조여정'},
	{'photo':'weddingG6.png', 'name':'황보'},
	{'photo':'weddingG7.png', 'name':'이현지'},
	{'photo':'weddingG8.png', 'name':'화요비'},
	{'photo':'weddingG9.png', 'name':'손담비'},
	{'photo':'weddingG10.png', 'name':'이윤지'},
	{'photo':'weddingG11.png', 'name':'태연'},
	{'photo':'weddingG12.png', 'name':'김신영'},
	{'photo':'weddingG13.png', 'name':'이시영'},
	{'photo':'weddingG14.png', 'name':'황정음'},
	{'photo':'weddingG15.png', 'name':'유이'},
	{'photo':'weddingG16.png', 'name':'김나영'},
	{'photo':'weddingG17.png', 'name':'가인'},
	{'photo':'weddingG18.png', 'name':'황우슬혜'},
	{'photo':'weddingG19.png', 'name':'서현'},
	{'photo':'weddingG20.png', 'name':'빅토리아'},
	{'photo':'weddingG21.png', 'name':'박소현'},
	{'photo':'weddingG22.png', 'name':'함은정'},
	{'photo':'weddingG23.png', 'name':'권리세'},
	{'photo':'weddingG24.png', 'name':'강소라'},
	{'photo':'weddingG25.png', 'name':'윤세아'},
	{'photo':'weddingG26.png', 'name':'한선화'},
	{'photo':'weddingG27.png', 'name':'오연서'},
	{'photo':'weddingG28.png', 'name':'고준희'},
	{'photo':'weddingG29.png', 'name':'정인'},
	{'photo':'weddingG30.png', 'name':'손나은'},
	{'photo':'weddingG31.png', 'name':'정유미'},
	{'photo':'weddingG32.png', 'name':'이소연'}
]

dataGirl = [
	{'photo':'weddingB1.png', 'name':'알렉스'},
	{'photo':'weddingB2.png', 'name':'정형돈'},
	{'photo':'weddingB3.png', 'name':'앤디'},
	{'photo':'weddingB4.png', 'name':'크라운J'},
	{'photo':'weddingB5.png', 'name':'이휘재'},
	{'photo':'weddingB6.png', 'name':'김현중'},
	{'photo':'weddingB8.png', 'name':'환희'},
	{'photo':'weddingB9.png', 'name':'마르코'},
	{'photo':'weddingB10.png', 'name':'강인'},
	{'photo':'weddingB11.png', 'name':'신성록'},
	{'photo':'weddingB12.png', 'name':'전진'},
	{'photo':'weddingB13.png', 'name':'김용준'},
	{'photo':'weddingB14.png', 'name':'박재정'},
	{'photo':'weddingB15.png', 'name':'이석훈'},
	{'photo':'weddingB16.png', 'name':'조권'},
	{'photo':'weddingB17.png', 'name':'이선호'},
	{'photo':'weddingB18.png', 'name':'정용화'},
	{'photo':'weddingB19.png', 'name':'닉쿤'},
	{'photo':'weddingB20.png', 'name':'김원준'},
	{'photo':'weddingB21.png', 'name':'이장우'},
	{'photo':'weddingB22.png', 'name':'데이비드 오'},
	{'photo':'weddingB23.png', 'name':'이특'},
	{'photo':'weddingB24.png', 'name':'줄리엔 강'},
	{'photo':'weddingB25.png', 'name':'황광희'},
	{'photo':'weddingB26.png', 'name':'이준'},
	{'photo':'weddingB27.png', 'name':'정진운'},
	{'photo':'weddingB28.png', 'name':'조정치'},
	{'photo':'weddingB29.png', 'name':'태민'},
	{'photo':'weddingB30.png', 'name':'정준영'},
	{'photo':'weddingB31.png', 'name':'윤한'}
]



 




























