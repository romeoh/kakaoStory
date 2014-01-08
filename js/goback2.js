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

	data.title = '커플이 될 확률';
	data.url = 'http://goo.gl/NVZTWY';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	per = process(0, 101)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님이 지금 맘속으로 생각하는 그분과 커플이 될 확률은 ' + per + '% 입니다.';
	data.post = post;
	
	data.desc = '축하합니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/goback.png';

	sendData(data);
}
































