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

	data.title = '내 애인은 태어나기는 한 걸까?';
	data.url = 'http://goo.gl/QRYWAE';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	//idx = process(database)
	rate1 = getRandom(0, 3);
	rate2 = getRandom(0, 5);
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 애인은 ';
	if (rate1 == 0) {
		post += '아직 태어나지 않았습니다.';
	} else {
		if (rate2 == 0) {
			post += getRandom(1, 5) + '년 전에 태어났습니다.';
		} else if (rate2 == 1 || rate2 == 2) {
			post += getRandom(5, 20) + '년 전에 태어났습니다.';
		} else if (rate2 == 3) {
			post += getRandom(20, 60) + '년 전에 태어났습니다.';
		} else {
			post += getRandom(60, 600) + '년 전에 태어났습니다.';
		}
	}
	data.post = post;
	
	data.desc = '내 애인은 태어나기는 한 걸까?';
	data.img = 'http://romeoh.github.io/kakaoStory/images/insideout/insideout2.png';

	sendData(data);
}


database = []































