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

	data.title = '미래애인 외모점수';
	data.url = 'http://goo.gl/30aQEX';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	
	if (sexType === 'boy') {
		pt = '여친'
		st = '여성스러움'
		it = 'partner1.png'
	} else if (sexType === 'girl') {
		pt = '남친'
		st = '남자다움'
		it = 'partner2.png'
	}

	value = process(0, 3);
	if (value == '0') {
		faceScore = process(0, 100)
		bodyScore = process(0, 100)
	} else if (value == '1') {
		faceScore = process(0, 50)
		bodyScore = process(0, 50)
	} else if (value == '2') {
		faceScore = process(50, 100)
		bodyScore = process(50, 100)
	}
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 미래 ' + pt + ' 얼굴 점수는 ' + faceScore + '점 입니다.\n';
	post += '몸매점수는 ' + bodyScore + '점 입니다.';

	data.post = post;
	
	data.desc = '사람이 속마음이 더 중요하지..';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + it;

	sendData(data);
}































