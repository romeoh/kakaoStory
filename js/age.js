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

	data.title = '나의 얼굴나이';
	data.url = 'http://goo.gl/yi3PU';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	age = process(5, 100)
	if (age <= 20) {
		desc = '봤냐?'
	} else if (age > 20 && age <= 35) {
		desc = '선방했네..'
	} else {
		desc = '인생은 60부터.ㅠㅠ'
	}

	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님의 얼굴나이는 ' + age + '세 입니다.';
	data.post = post;
	
	data.desc = age + ' 이어즈 올드~\n' + desc;
	data.img = 'http://romeoh.github.io/kakaoStory/img/age.png';

	sendData(data);
}
































