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

	data.title = '키스하는데 걸리는 시간';
	data.url = 'http://goo.gl/xSCsJr';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	s = process(0, 5);
	if (s === 0) {
		kd = process(0, 2);
	} else if (s === 1) {
		kd = process(0, 7);
	} else if (s === 2) {
		kd = process(0, 30);
	} else if (s === 3) {
		kd = process(0, 90);
	} else if (s === 3) {
		kd = process(0, 180);
	} else {
		kd = process(0, 500);
	}
	
	if (sexType === 'boy') {
		f = '여자친구'
	} else {
		f = '남자친구'
	}
	post += '[' + data.title + ']\n\n';
	if (kd === 0) {
		post += userName + '님은 ' + f + '와 처음 만나면 \n보통 그날 바로 키스를 합니다.';
	} else if (kd === 1) {
		post += userName + '님은 ' + f + '와 처음 만나면 \n보통 다음날 바로 키스를 합니다.';
	} else {
		post += userName + '님은 ' + f + '와 처음만나서 \n첫키스하는데 평균 ' + kd + '일이 걸립니다.';
	}
	data.post = post;
	
	data.desc = '키스하는데 얼마나 걸리나?';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/kissTime.png';

	sendData(data);
}

































