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

	data.title = '상대방이 보는 당신의 첫인상';
	data.url = 'http://goo.gl/j61fbZ';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	val = process(0, 3);
	if (val == 0) {
		idx0 = process(5, 11);
		idx1 = process(5, 11);
		idx2 = process(5, 11);
		idx3 = process(5, 11);
		idx4 = process(5, 11);
	} else if (val == 1) {
		idx0 = process(0, 6);
		idx1 = process(0, 6);
		idx2 = process(0, 6);
		idx3 = process(0, 6);
		idx4 = process(0, 6);
	} else {
		idx0 = process(0, 11);
		idx1 = process(0, 11);
		idx2 = process(0, 11);
		idx3 = process(0, 11);
		idx4 = process(0, 11);
	}
	s0 = getScore(idx0);
	s1 = getScore(idx1);
	s2 = getScore(idx2);
	s3 = getScore(idx3);
	s4 = getScore(idx4);
	a = Math.round((Number(s0) + Number(s1) + Number(s2) + Number(s3) + Number(s4)) / 5);

	post += '[' + data.title + ']\n';
	post += '────────────────────\n'
	post += '상대방이 느끼는 ' + userName + '님의 첫인상입니다.\n\n';
	post += '💏 미소: ' + database[idx0] + ' ' + s0 + '점\n';
	post += '💏 말투: ' + database[idx1] + ' ' + s1 + '점\n';
	post += '💏 패션: ' + database[idx2] + ' ' + s2 + '점\n';
	post += '💏 외모: ' + database[idx3] + ' ' + s3 + '점\n';
	post += '💏 호감: ' + database[idx4] + ' ' + s4 + '점\n\n';
	post += '호감도: ' + a + '점';
	data.post = post;
	
	data.desc = '5초만에 느끼는 당신의 첫인상입니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/firstmeet.png';

	sendData(data);
}

function getScore(val) {
	if (val == 10) {
		s = val + '0';
	} else if (val == 0) {
		s = process(0,10);
	} else {
		s = val + '' + process(0,10);
	}
	return s;
}

database = [
	'□□□□□□□□□□',
	'■□□□□□□□□□',
	'■■□□□□□□□□',
	'■■■□□□□□□□',
	'■■■■□□□□□□',
	'■■■■■□□□□□',
	'■■■■■■□□□□',
	'■■■■■■■□□□',
	'■■■■■■■■□□',
	'■■■■■■■■■□',
	'■■■■■■■■■■'
]































