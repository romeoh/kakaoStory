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
		,val = ''

	data.title = '내가 하루에 쓸수있는 돈';
	data.url = 'http://goo.gl/p3TY9G';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	level = process(0, 3)
	if (level == 0) {
		oc = M.toCurrency(process(0, 1))
		ot = M.toCurrency(process(1, 100))
	} else if (level == 1) {
		oc = M.toCurrency(process(0, 100))
		ot = M.toCurrency(process(1, 9999))
	} else if (level == 2) {
		oc = M.toCurrency(process(0, 999))
		ot = M.toCurrency(process(1, 9999))
	}
	
	
	if (oc === 0) {
		val += ''
	} else {
		val += ' ' + oc + '억'
	}
	if (ot === 0) {
		val += ''
	} else {
		val += ' ' + ot + '만'
	}
	
	post += '[' + data.title + ']\n\n';
	post += '만약에 맘껏 돈을 쓸수 있다면,\n';
	post += userName + '님은 하루에 최대' + val + '원까지 쓸수 있습니다.\n\n';
	post += '뭐 하실래요?';
	data.post = post;
	
	data.desc = '뭘해야 하루에' + val + '원을 쓸수 있을까?\n';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/money.png';

	sendData(data);
}































