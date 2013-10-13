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

	data.title = '나의 애인 닮은 연예인';
	data.url = 'http://goo.gl/9B3HHj';

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
	idx = process(database)
	m = process(dataMuch)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 ' + s + '는 ' + database[idx]['name'] + ' ' + dataMuch[m] + '\n';
	post += '축하합니다.';
	data.post = post;
	
	data.desc = '일딴 빨리 만나길..';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[idx]['photo'];

	sendData(data);
}

dataBoy = [
	{'photo':'weddingG1.png', 'name':'신애를'},
	{'photo':'weddingG2.png', 'name':'사오리를'},
	{'photo':'weddingG3.png', 'name':'솔비를'},
	{'photo':'weddingG4.png', 'name':'서인영을'},
	{'photo':'weddingG5.png', 'name':'조여정을'},
	{'photo':'weddingG6.png', 'name':'황보를'},
	{'photo':'weddingG7.png', 'name':'이현지를'},
	{'photo':'weddingG8.png', 'name':'화요비를'},
	{'photo':'weddingG9.png', 'name':'손담비를'},
	{'photo':'weddingG10.png', 'name':'이윤지를'},
	{'photo':'weddingG11.png', 'name':'태연을'},
	{'photo':'weddingG12.png', 'name':'김신영을'},
	{'photo':'weddingG13.png', 'name':'이시영을'},
	{'photo':'weddingG14.png', 'name':'황정음을'},
	{'photo':'weddingG15.png', 'name':'유이를'},
	{'photo':'weddingG16.png', 'name':'김나영을'},
	{'photo':'weddingG17.png', 'name':'가인을'},
	{'photo':'weddingG18.png', 'name':'황우슬혜를'},
	{'photo':'weddingG19.png', 'name':'서현을'},
	{'photo':'weddingG20.png', 'name':'빅토리아를'},
	{'photo':'weddingG21.png', 'name':'박소현을'},
	{'photo':'weddingG22.png', 'name':'함은정을'},
	{'photo':'weddingG23.png', 'name':'권리세를'},
	{'photo':'weddingG24.png', 'name':'강소라를'},
	{'photo':'weddingG25.png', 'name':'윤세아를'},
	{'photo':'weddingG26.png', 'name':'한선화를'},
	{'photo':'weddingG27.png', 'name':'오연서를'},
	{'photo':'weddingG28.png', 'name':'고준희를'},
	{'photo':'weddingG29.png', 'name':'정인을'},
	{'photo':'weddingG30.png', 'name':'손나은을'},
	{'photo':'weddingG31.png', 'name':'정유미를'},
	{'photo':'weddingG32.png', 'name':'이소연을'}
]

dataGirl = [
	{'photo':'weddingB1.png', 'name':'알렉스를'},
	{'photo':'weddingB2.png', 'name':'정형돈을'},
	{'photo':'weddingB3.png', 'name':'앤디를'},
	{'photo':'weddingB4.png', 'name':'크라운J를'},
	{'photo':'weddingB5.png', 'name':'이휘재를'},
	{'photo':'weddingB6.png', 'name':'김현중을'},
	{'photo':'weddingB8.png', 'name':'환희를'},
	{'photo':'weddingB9.png', 'name':'마르코를'},
	{'photo':'weddingB10.png', 'name':'강인을'},
	{'photo':'weddingB11.png', 'name':'신성록'},
	{'photo':'weddingB12.png', 'name':'전진을'},
	{'photo':'weddingB13.png', 'name':'김용준을'},
	{'photo':'weddingB14.png', 'name':'박재정을'},
	{'photo':'weddingB15.png', 'name':'이석훈을'},
	{'photo':'weddingB16.png', 'name':'조권을'},
	{'photo':'weddingB17.png', 'name':'이선호를'},
	{'photo':'weddingB18.png', 'name':'정용화를'},
	{'photo':'weddingB19.png', 'name':'닉쿤을'},
	{'photo':'weddingB20.png', 'name':'김원준을'},
	{'photo':'weddingB21.png', 'name':'이장우를'},
	{'photo':'weddingB22.png', 'name':'데이비드 오를'},
	{'photo':'weddingB23.png', 'name':'이특을'},
	{'photo':'weddingB24.png', 'name':'줄리엔 강을'},
	{'photo':'weddingB25.png', 'name':'황광희를'},
	{'photo':'weddingB26.png', 'name':'이준을'},
	{'photo':'weddingB27.png', 'name':'정진운을'},
	{'photo':'weddingB28.png', 'name':'조정치를'},
	{'photo':'weddingB29.png', 'name':'태민을'},
	{'photo':'weddingB30.png', 'name':'정준영을'},
	{'photo':'weddingB31.png', 'name':'윤한을'}
]



 dataMuch = [
	'아주 똑같습니다.',
	'매우 닮았습니다.',
	'아주 비슷합니다.',
	'똑같습니다.',
	'닮았습니다.',
	'조금 닮았습니다.',
	'약간 닮았습니다.',
	'몇군데 닮았습니다.'
]




























