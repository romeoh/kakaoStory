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

	data.title = '나의 고백의 성공확률';
	data.url = 'http://goo.gl/dOrlSz';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	per = process(0, 101)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님이 고백하면 성공할 확률이 ' + per + '% 입니다.';
	data.post = post;
	
	data.desc = '그래, 용기를 내보는거야.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/goback.png';

	sendData(data);
}
































