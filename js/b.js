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
		
		,day = process(100, 4000)
		,week = Math.round(day / 7)
		,month = Math.round(day / 30)
		,year = Math.round(month / 12)

	data.title = 'B급 인생';
	data.url = 'http://goo.gl/g0wLJR';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님은 A급 인생이 되기까지 약 ' + M.toCurrency(day) + '일 정도 남았습니다.\n\n';
	post += M.toCurrency(day) + '일은 \n';
	post += '약 ' + week + '주이며,\n';
	post += '약 ' + month + '개월이고,\n';
	if (year) {
		post += '약 ' + year + '년 정도 됩니다.';
	} else {
		post += '1년 이하 입니다.';
	}
	data.post = post;
	
	data.desc = '기대하라.\n' + month + '개월 뒤에 세상을 정복하겠노라.\n';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/b.png';

	sendData(data);
}



































