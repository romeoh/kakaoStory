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

	data.title = '내 아기 혈액형 알아보기';
	data.url = 'http://goo.gl/po4gKm';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (M('#me').val() === '-1') {
		alert('나의 혈액형을 선택하세요.');
		return false;
	}
	if (M('#you').val() === '-1') {
		alert('상대방의 혈액형을 선택하세요.');
		return false;
	}

	me = M('#me').val()
	you = M('#you').val()
	if (me < you) {
		key = me + '' + you
	} else {
		key = you + '' + me
	}
	result = database[key]

	post += '[' + data.title + ']\n\n';
	post += '내 아기의 혈액형은 \n';
	post += result + '의 확률입니다.';
	data.post = post;
	
	data.desc = result;
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/childBlood.png';

	sendData(data);
}

database = {
	'11': 'A형: 75%, O형: 25%',
	'12': 'A형: 100%',
	'13': 'AB형, A형, B형, O형: 25%',
	'14': 'B형: 50%, AB형: 50%',
	'15': 'A형: 50%, B형: 25%, AB형: 각 25%',
	'16': 'O형: 50%, A형: 50%',
	'22': 'A형: 100%',
	'23': 'A형: 50%, AB형: 50%',
	'24': 'AB형: 100%',
	'25': 'A형: 50%, AB형: 50%',
	'26': 'A형: 100%',
	'33': 'B형: 75%, O형: 25%',
	'34': 'B형: 100%',
	'35': 'AB형: 25%, A형: 25%, B형: 50%',
	'36': 'O형: 50%, B형: 50%',
	'44': 'B형: 100%',
	'45': 'B형: 50%, AB형: 50%',
	'46': 'B형: 100%',
	'55': 'A형: 25%, AB형: 50%, B형:25%',
	'56': 'A형: 50%, B형:50%',
	'66': 'O형: 100%'
}









































