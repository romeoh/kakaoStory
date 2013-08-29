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

	data.title = '싱글만 해보세요.';
	data.url = 'http://goo.gl/97oVx7';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
		post += '나란 남자, \n';
	} else if (sexType == 'girl') {
		database = dataGirl
		post += '나란 여자, \n';
	}
	me = shuffle(database)
	end = process(dataEnd)
	
	post += database[0]['constinue'] + ' ';
	post += database[1]['constinue'] + ' ';
	post += database[2]['last'] + ' 싱글...\n' + dataEnd[end];
	data.post = post;
	
	data.desc = '커플은 여기 클릭도 하지 말어!!';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/single2.png';

	sendData(data);
}



dataBoy = [
	{'constinue':'잘생기고', 'last':'잘생겼지만'},
	{'constinue':'훤칠하고', 'last':'훤칠하지만'},
	{'constinue':'스마트하고', 'last':'스마트하지만'},
	{'constinue':'센스있고', 'last':'센스있지만'},
	{'constinue':'귀엽고', 'last':'귀엽지만'},
	{'constinue':'샤프하고', 'last':'샤프하지만'},
	{'constinue':'터프하고', 'last':'터프하지만'},
	{'constinue':'남자답고', 'last':'남자답지만'},
	{'constinue':'능력있고', 'last':'능력있지만'},
	{'constinue':'섹시하고', 'last':'섹시하지만'},
	{'constinue':'귀티나고', 'last':'귀티나지만'},
	{'constinue':'착하고', 'last':'착하지만'},
	{'constinue':'자상하고', 'last':'자상하지만'},
	{'constinue':'돈많고', 'last':'돈많지만'},
	{'constinue':'유머있고', 'last':'유머있지만'}
]
dataGirl = [
	{'constinue':'예쁘고', 'last':'예쁘지만'},
	{'constinue':'스마트하고', 'last':'스마트하지만'},
	{'constinue':'센스있고', 'last':'센스있지만'},
	{'constinue':'귀엽고', 'last':'귀엽지만'},
	{'constinue':'여성스럽고', 'last':'여성스럽지만'},
	{'constinue':'능력있고', 'last':'능력있지만'},
	{'constinue':'섹시하고', 'last':'섹시하지만'},
	{'constinue':'귀티나고', 'last':'귀티나지만'},
	{'constinue':'착하고', 'last':'착하지만'},
	{'constinue':'돈많고', 'last':'돈많지만'},
	{'constinue':'유머있고', 'last':'유머있지만'},
	{'constinue':'세련되고', 'last':'세련되지만'}
]
dataEnd = [
	'젠장...',
	'이런...',
	'왜죠?',
	'망할...',
	'헐~',
	'미스테리...',
	'에잇...'
]































