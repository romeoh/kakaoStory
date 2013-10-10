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

	data.title = '나는 제명(除命)에 죽나?';
	data.url = 'http://goo.gl/MCMFBk';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	m = process(0, 5)
	age = process(5, 30)

	if (m === 0) {
		str = '빨리 죽습니다.'
	} else {
		str = '더 삽니다.'
	}

	post += '[' + data.title + ']\n\n';
	post += userName + '님은 제명보다 ' + age + '년 ' + str;
	data.post = post;
	
	data.desc = '내가 제명에 못살아~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/life.png';

	sendData(data);
}
































