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

	data.title = '비만도 계산기';
	data.url = 'http://goo.gl/kMeq9';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (M('#cm').val() == '') {
		alert('키를 입력해 주세요.');
		return false;
	}
	if (!M.isNumber( M('#cm').val() )) {
		alert('키는 숫자만 입력가능합니다.');
		return false;
	}
	if (M('#cm').val() < 110) {
		alert('정확하지 않은 키 입니다.');
		return false;
	}

	if (M('#kg').val() == '') {
		alert('체중을 입력해 주세요.');
		return false;
	}
	if (!M.isNumber( M('#kg').val() )) {
		alert('체중은 숫자만 입력가능합니다.');
		return false;
	}

	if (M('#cm').val() > 150) {
		standardkg = (M('#cm').val() - 100) * 0.9
	} else {
		standardkg = (M('#cm').val() - 110)
	}

	bmi = Math.round( M('#kg').val() / (M('#cm').val() * M('#cm').val()) * 1000000 ) / 100
	if (bmi < 20) {
		msg = '저체중입니다.'
	}
	if (bmi > 20 && bmi < 24) {
		msg = '정상체중입니다.'
	}
	if (bmi > 24 && bmi < 30) {
		msg = '경도비만입니다.'
	}
	if (bmi > 30) {
		msg = '비만입니다.'
	}
	
	post += '[' + data.title + ']\n\n';
	post += '나의 신체질량지수(BMI)는 ' + bmi + ' ' + msg + '\n\n';
	post += '신체질량지수(BMI)는 질병관리본부에서 제공하는 표준계산법입니다.';
	data.post = post;
	
	data.desc = msg;
	data.img = 'http://romeoh.github.io/kakaoStory/img/fat.png';

	sendData(data);
}


























