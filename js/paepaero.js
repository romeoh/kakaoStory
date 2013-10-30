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
		,str = ''

	data.title = '빼빼로 몇개를 받을까?';
	data.url = 'http://goo.gl/sgYsfF';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	dataQ1 = process(dataQ)
	dataQ2 = process(dataQ)
	dataP1 = process(dataP)
	dataP2 = process(dataP)
	
	if (dataQ[dataQ1] === '0') {
		str += '남자에게 빼빼로를 한개도 못받고,\n'
	} else {
		str += '남자에게 ' + dataP[dataP1] + ' ' + dataQ[dataQ1] + ' 받고,\n'
	}

	if (dataQ[dataQ2] === '0') {
		str += '여자에게 빼빼로를 한개도 못받습니다.'
	} else {
		str += '여자에게 ' + dataP[dataP2] + ' ' + dataQ[dataQ2] + ' 받습니다.'
	}
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 \n';
	post += str;
	data.post = post;
	
	data.desc = '얘들아~ 기대할께!!\n';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/paepaero.png';

	sendData(data);
}


dataP = [
	'빼빼로를',
	'가래떡을',
	'나무젓가락을',
	'꿀밤을',
	'젓가락을',
	'모나미 볼펜을',
	'초콜렛을',
	'사탕을',
	'빼빼로 인형을',
	'빗자루를',
	'촛대를',
	'누드 빼빼로를',
	'아몬드 빼빼로를',
	'딸기맛 빼빼로를',
	'오리지날 빼빼로를',
	'엿 만'
]

dataQ = [
	'0',
	'0',
	'0',
	'0',
	'0',
	'0',
	'0',
	'1개',
	'1개',
	'1개',
	'1개',
	'1개',
	'1개',
	'1개',
	'1개',
	'2개',
	'2개',
	'2개',
	'2개',
	'2개',
	'3개',
	'3개',
	'3개',
	'4개',
	'4개',
	'4개',
	'5개',
	'5개',
	'5개',
	'7개',
	'7개',
	'8개',
	'8개',
	'10개',
	'12개',
	'15개',
	'21개',
	'26개',
	'31개',
	'39개',
	'52개',
	'76개',
	'112개',
	'197개',
	'483개',
	'1320개'
]































