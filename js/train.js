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
		,trainStr = [
			'첫',
			'두',
			'세',
			'네',
			'다섯',
			'여섯',
			'일곱',
			'여덞',
			'아홉',
			'열'
		]
		,train = process(1, 101)

	data.title = '설국열차';
	data.url = 'http://goo.gl/T9VG8G';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (train <= 30) {
		trainTxt = '일등석칸'
	} else if (train >= 70) {
		trainTxt = '꼬리칸'
	} else {
		trainTxt = train + '번째 칸'
	}
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님은 설국열차 ' + trainTxt + '에 탑승합니다.';
	data.post = post;
	
	data.desc = '설국열차는 약 100칸 입니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/train.png';

	sendData(data);
}


































