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

	data.title = '나를 좋아하는 사람의 성은?';
	data.url = 'http://goo.gl/q6HtBL';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	anidx = process(database)

	post += '[' + data.title + ']\n\n';
	post += database[anidx] + '씨 성을 가진 사람이 ' + userName + '님을 좋아하고 있습니다.\n';
	data.post = post;
	
	data.desc = database[anidx]['charac'];
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/firstname.png';

	sendData(data);
}


database = [
	'김',
	'이',
	'배',
	'박',
	'정',
	'백',
	'최',
	'강',
	'공',
	'구',
	'기',
	'김',
	'나',
	'남',
	'노',
	'독고',
	'류',
	'방',
	'변',
	'빙',
	'서',
	'신',
	'안',
	'옥',
	'왕',
	'장',
	'조',
	'진',
	'차',
	'추',
	'주',
	'하',
	'한',
	'홍'
]



























