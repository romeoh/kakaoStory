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

	data.title = '다음달에 애인이 생길 확률';
	data.url = 'http://goo.gl/dfAPTw';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	rate = process(0, 100);

	post += '[' + data.title + ']\n\n';
	post += userName + '님은 다음달에 \n';
	post += '애인이 생길 확률이 ' + rate + '% 입니다.';
	data.post = post;
	
	data.desc = '행운을 빌어요~^^';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/couple_rate.png';

	sendData(data);
}































