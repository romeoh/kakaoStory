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

	data.title = '을의 연애';
	data.url = 'http://goo.gl/bYvEen';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	push = process(0, 100);
	pull = 100 - push;
	if (push > pull) {
		score = 100 - (push - pull);
	} else {
		score = 100 - (pull - push);
	}
	if (score > 70) {
		commant = '적절한 시점에 밀고 당기기를 잘하는 연애고수!!'
	} else if (score < 30) {
		commant = '한가지에 치우쳐서 상대에게 끌려가는 스타일입니다.'
	} else {
		commant = '더 노력하면 밀당고수가 될 수 있습니다.'
	}
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 밀당 점수입니다.\n';
	post += '◇ 밀기: ' + push + '점\n';
	post += '◇ 당기기: ' + pull + '점\n';
	post += '◆ 밀당 총점: ' + score + '점입니다.\n\n';
	post += '※ 밀당 평가: ' + commant;
	data.post = post;
	
	data.desc = '나의 밀당점수: ' + score + '점';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/second.png';

	sendData(data);
}


































