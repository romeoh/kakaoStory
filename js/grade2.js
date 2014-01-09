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

	data.title = '새학기 당신의 등수를 알려드립니다.';
	data.url = 'http://goo.gl/YOZXaR';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	
	post += '[' + data.title + ']\n\n';
	post += '새학기 ' + userName + '님의\n';
	post += '성적 등수는 ' + process(1, 50) + '등입니다.\n';
	post += '일진 등수는 ' + process(1, 50) + '등입니다.\n';
	post += '인기 등수는 ' + process(1, 50) + '등입니다.\n';
	post += '비호감 등수는 ' + process(1, 50) + '등입니다.\n\n';
	post += '※ 이 글 본사람 다하기!!\n';
	post += '안하면 커플은 깨지고 솔로는 평ㅋ솔ㅋ※\n';
	post += userName + '님은 인기 급상승!!';

	data.post = post;
	
	data.desc = '1등만 인정받는 더러운 세상!!';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/grade2.png';

	sendData(data);
}






























