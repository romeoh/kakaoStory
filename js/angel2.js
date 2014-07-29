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

	data.title = '천사/악마 판독기';
	data.url = 'http://goo.gl/JwXV29';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	database = process(0, 2)
	if (database == 0) {
		str = '천사입니다.'
		img = 'angel.png'
	} else {
		str = '악마입니다.'
		img = 'evil.png'
	}
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 ';
	post += str;
	data.post = post;
	
	data.desc = '니가 누구냐에 따라..\n';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/'+img;

	sendData(data);
}
































