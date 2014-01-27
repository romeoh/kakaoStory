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

	data.title = '누구에게 초콜렛을 받을까?';
	data.url = 'http://goo.gl/JwXV29';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	dataQ1 = process(dataQ)
	dataQ2 = process(dataQ)
	dataP1 = process(dataP)
	dataP2 = process(dataP)
	
	if (dataQ[dataQ1] === '0') {
		str += '남자에게 초콜렛을 한개도 못받고,\n'
	} else {
		str += '남자에게 ' + dataP[dataP1] + ' ' + dataQ[dataQ1] + ' 받고,\n'
	}

	if (dataQ[dataQ2] === '0') {
		str += '여자에게 초콜렛을 한개도 못받습니다.'
	} else {
		str += '여자에게 ' + dataP[dataP2] + ' ' + dataQ[dataQ2] + ' 받습니다.'
	}
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 이번 발렌타인데이에\n';
	post += str;
	data.post = post;
	
	data.desc = '사랑이 이루어 지는 발렌타인데이\n';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/balentine.png';

	sendData(data);
}


dataP = [
	'키세스 초콜렛을',
	'허쉬 초콜렛을',
	'가나 초콜렛을',
	'페레로로체 초콜렛을',
	'킨더 초콜렛을',
	'트윅스 초콜렛을',
	'자유시간을',
	'ABC 초콜렛을',
	'마켓오 초콜렛을',
	'드림카카오 초콜렛을',
	'크런키 초콜렛을'
]

dataQ = [
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































