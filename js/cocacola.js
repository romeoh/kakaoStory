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

	data.title = '코카콜라 메세지를 전해보세요';
	data.url = 'http://goo.gl/xH7Wio';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	
	fname = M('#fname').val()

	if (fname == '') {
		idx1 = process(database1)
		d1 = database1[idx1]
	} else {
		d1 = fname
	}
	idx2 = process(database2)
	d2 = database2[idx2]

	post += '[' + data.title + ']\n\n';
	post += d1 + ' ' + d2;
	data.post = post;
	
	data.desc = '소중한 사람에게 메세지를 전해보세요.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/cocacola.png';

	sendData(data);
}


database1 = [
	'친구야',
	'자기야',
	'너와나',
	'우리가족',
	'우리반',
	'우리학교',
	'엄마아빠',
	'카스친구'
]

database2 = [
	'힘내자',
	'사랑해',
	'영원하자',
	'행복해',
	'웃어요',
	'아름다워',
	'고마워',
	'잘될거야',
	'최고야',
	'응원할게',
	'재미있어',
	'귀여워',
	'능력자',
	'멋있다',
	'함께하자',
	'포에버',
	'재미있어'
]






























