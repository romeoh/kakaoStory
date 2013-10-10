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

	data.title = '나의 튜닝점수';
	data.url = 'http://goo.gl/sLU9oD';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		t1 = '☆ 헤어발: '
		t2 = '☆ 사진발: '
		t3 = '☆ 조명발: '
	} else if (sexType == 'girl') {
		t1 = '☆ 화장발: '
		t2 = '☆ 사진발: '
		t3 = '☆ 조명발: '
	}
	level = process(0, 3)
	if (level === 0) {
		s1 = process(0, 50);
		s2 = process(0, 50);
		s3 = process(0, 50);
	} else if (level === 1) {
		s1 = process(50, 100);
		s2 = process(50, 100);
		s3 = process(50, 100);
	} else {
		s1 = process(0, 100);
		s2 = process(0, 100);
		s3 = process(0, 100);
	}
	total = Math.round( (s1 + s2 + s3)/3 )
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 튜닝 점수입니다.\n\n';
	post += t1 + s1 + '점\n';
	post += t2 + s2 + '점\n';
	post += t3 + s3 + '점\n';
	post += '--------------\n';
	post += '★ 총점: ' + total + '점 입니다.';
	data.post = post;
	
	data.desc = '맨손으로 승부걸지 마라.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/tuning.png';

	sendData(data);
}































