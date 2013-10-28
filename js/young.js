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

	data.title = '나의 연상연하 나이차이';
	data.url = 'http://goo.gl/IRRDYp';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	du = process(0, 4)
	if (du == 0) {
		au = process(1, 4)
	} else if (du == 1) {
		au = process(1, 12)
	} else if (du == 2) {
		au = process(1, 30)
	} else {
		au = process(1, 50)
	}
	dd = process(0, 4)
	if (dd == 0) {
		ad = process(1, 4)
	} else if (dd == 1) {
		ad = process(1, 12)
	} else if (dd == 2) {
		ad = process(1, 30)
	} else {
		ad = process(1, 50)
	}


	post += '[' + data.title + ']\n\n';
	post += userName + '님은\n'
	post += '최대 연상 ' + au + '살까지 사귀고,\n'
	post += '최대 연하 ' + ad + '살까지 사귑니다.'
	data.post = post;
	
	data.desc = '나는 몇살차이까지 사귈까?';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/young.png';

	sendData(data);
}
































