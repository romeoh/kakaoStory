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

	data.title = '내 주위에 진정한 친구는 몇명있나?';
	data.url = 'http://goo.gl/BF9v8t';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	
	f1 = process(0, 10)
	f2 = process(0, 50)
	f3 = process(0, 6)
	f4 = process(0, 6)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님 주위에는\n';
	if (f1 === 0) {
		post += '죽을때까지 함께하는 진정한 친구는 없습니다.\n';
	} else {
		post += '죽을때까지 함께하는 진정한 친구는 ' + f1 + '명 있습니다.\n';
	}
	
	if (f2 === 0) {
		post += '그냥 껍데기만 친구는 없습니다.\n';
	} else {
		post += '그냥 껍데기만 친구는 ' + f2 + '명 있습니다.\n';
	}

	if (f3 === 0) {
		post += userName + '님 없을때 뒷담화하는 친구는 없습니다.\n';
	} else {
		post += userName + '님 없을때 뒷담화하는 친구는 ' + f3 + '명 있습니다.\n';
	}

	if (f4 === 0) {
		post += '곧 배신할 친구는 없습니다.';
	} else {
		post += '곧 배신할 친구는 ' + f4 + '명 있습니다.';
	}
	data.post = post;
	
	data.desc = '괜찮타~ 칭구아이가~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/friend.png';

	sendData(data);
}
































