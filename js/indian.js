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

	data.title = '나의 인디언식 이름은';
	data.url = 'http://goo.gl/Ppey0';

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
	
	post += '[' + data.title + ']\n\n';
	post += '나의 인디언식 이름은\n';
	post += selYear.value + ' ' + selMonth.value + dateType + selDate.value + ' 입니다.\n\n';
	post += '뭐.. 참고로 생일은 ' + mon + ' ' + date + ' 입니다.';
	data.post = post;
	
	data.desc = '리멤버!! ' + mon + ' ' + date;
	data.img = 'http://romeoh.github.io/kakaoStory/img/indian.jpg';

	sendData(data);
}

































