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

	data.title = '생일로 알아보는 2021년 운세';
	data.url = 'https://bit.ly/3plx1H3';

	if (media == 'talk') {
		sendData(data);
		return false;
	}


	var  optMon = document.querySelectorAll('#selMonth option')
		,optDate = document.querySelectorAll('#selDate option')

	for (var i=0; i<optMon.length; i++) {
		if (optMon[i].selected) {
			monIdx = i
			mon = i + '월'
		}
	}
	for (var i=0; i<optDate.length; i++) {
		if (optDate[i].selected) {
			dateIdx = i
			date = i + '일'
		}
	}

	monthType = M('#selMonth option').selector[monIdx].getAttribute('data-type')
	if (monthType === '0') {
		dateType = M('#selDate option').selector[dateIdx].getAttribute('data-ta')
	} else {
		dateType = M('#selDate option').selector[dateIdx].getAttribute('data-tb')
	}
	uname = selMonth.value + selDate.value;
	cname = uniValue(uname) ? uname + '아' : uname + '야';
	dname = uniValue(uname) ? uname + '이' : uname + '';
	command = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 2021년 운세는\n\n';
	post += dname + '\n\n';
	data.post = post;
	
	data.desc = '';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/chosunName.png';

	sendData(data);
}































