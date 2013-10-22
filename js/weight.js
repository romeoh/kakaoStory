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

	data.title = '나의 미래 몸무게';
	data.url = 'http://goo.gl/ccTXD2';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	g = process(0, 3)
	if (g === 0) {
		w = process(40, 70)
		t = process(150, 180)
	} else if (g === 1) {
		w = process(30, 90)
		t = process(140, 190)
	} else if (g === 2) {
		w = process(30, 250)
		t = process(130, 210)
	}

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 미래 몸무게는 ' + w + 'kg 이며,\n';
	post += '키는 ' + t + 'cm 입니다.';
	data.post = post;
	
	data.desc = '나의 몸무게와 키는?';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/weight.png';

	sendData(data);
}






























