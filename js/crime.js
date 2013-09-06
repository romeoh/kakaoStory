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

	data.title = '내 주위에 변태는 몇명인가?';
	data.url = 'http://goo.gl/Ju0mNm';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 주위에는 ' + database[idx] + '';
	data.post = post;
	
	data.desc = '댓글 다는 사람은 안변태~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/crime.png';

	sendData(data);
}


database = [
	'변태가 한명도 없습니다.',
	'1명의 변태가 있습니다.',
	'2명의 변태가 있습니다.',
	'3명의 변태가 있습니다.',
	'4명의 변태가 있습니다.',
	'5명의 변태가 있습니다.',
	'6명의 변태가 있습니다.',
	'7명의 변태가 있습니다.',
	'8명의 변태가 있습니다.',
	'9명의 변태가 있습니다.',
	'10명의 변태가 있습니다.',
	'30명의 변태가 있습니다.',
	'50명의 변태가 있습니다.',
	'모두 변태입니다.'
]































