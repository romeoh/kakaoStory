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

	data.title = '연애의 기술';
	data.url = 'http://goo.gl/U5nKXJ';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		img = 'confess1.png'
		sex = '운명녀'
		sex2 = '훈녀를'
	} else if (sexType == 'girl') {
		img = 'confess2.png'
		sex = '운명남'
		sex2 = '훈남을'
	}
	idx1 = process(database)
	idx2 = process(database)
	idx3 = process(database)
	idx4 = process(database)
	idx5 = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 ' + sex + '의 스펙입니다.\n\n';
	post += '- 성격: ' + database[idx1] + '\n';
	post += '- 재력: ' + database[idx2] + '\n';
	post += '- 외모: ' + database[idx3] + '\n';
	post += '- 유머: ' + database[idx4] + '\n';
	post += '- 무드: ' + database[idx5] + '\n\n';

	post += '※ 흔치 않은 ' + sex2 + ' 만나는군요.';

	data.post = post;
	
	data.desc = '흔치 않은 ' + sex2 + ' 만나는군요.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/skil.png';

	sendData(data);
}



database = [
	'☆☆☆☆☆',
	'★☆☆☆☆',
	'★★☆☆☆',
	'★★☆☆☆',
	'★★★☆☆',
	'★★★☆☆',
	'★★★★☆',
	'★★★★☆',
	'★★★★☆',
	'★★★★☆',
	'★★★★★',
	'★★★★★',
	'★★★★★',
	'★★★★★'
]

































