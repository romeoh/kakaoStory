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

	data.title = '내 주위에 미남/미녀는 몇명인가?';
	data.url = 'http://goo.gl/feJNad';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	pidx = process(1, 3)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 주위에는 ' + database[idx] + '';
	data.post = post;
	
	data.desc = '보기 좋구나~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/partner' + pidx + '.png';

	sendData(data);
}


database = [
	'미남,미녀가 한명도 없습니다.',
	'딱 1명의 미남이 있습니다.',
	'2명의 미남이 있습니다.',
	'3명의 미남이 있습니다.',
	'5명의 미남이 있습니다.',
	'10명의 미남이 있습니다.',
	'15명의 미남이 있습니다.',
	'20명의 미남이 있습니다.',
	'30명의 미남이 있습니다.',

	'딱 1명의 미녀가 있습니다.',
	'2명의 미녀가 있습니다.',
	'3명의 미녀가 있습니다.',
	'5명의 마녀가 있습니다.',
	'10명의 미녀가 있습니다.',
	'15명의 미녀가 있습니다.',
	'20명의 미녀가 있습니다.',
	'30명의 미녀가 있습니다.',

	'2명의 미녀와 1명의 미남이 있습니다.',
	'2명의 미녀와 2명의 미남이 있습니다.',
	'3명의 미녀와 1명의 미남이 있습니다.',
	'3명의 마녀와 2명의 미남이 있습니다.',
	'3명의 미녀와 3명의 미남이 있습니다.',
	'4명의 미녀와 1명의 미남이 있습니다.',
	'4명의 마녀와 2명의 미남이 있습니다.',
	'4명의 미녀와 3명의 미남이 있습니다.',
	'4명의 마녀와 4명의 미남이 있습니다.',
	
	'3명의 미남/미녀가 있습니다.',
	'5명의 미남/미녀가 있습니다.',
	'6명의 미남/미녀가 있습니다.',
	'10명의 미남/미녀가 있습니다.',
	'13명의 미남/미녀가 있습니다.',
	'15명의 미남/미녀가 있습니다.',
	'21명의 미남/미녀가 있습니다.',
	'28명의 미남/미녀가 있습니다.',
	'32명의 미남/미녀가 있습니다.',
	'35명의 미남/미녀가 있습니다.',
	'37명의 미남/미녀가 있습니다.',
	'41명의 미남/미녀가 있습니다.',
	'44명의 미남/미녀가 있습니다.',
	'49명의 미남/미녀가 있습니다.',
	'51명의 미남/미녀가 있습니다.',
	'모두 미남/미녀입니다.'
]































