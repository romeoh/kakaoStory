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

	data.title = '조르기';
	data.url = 'http://goo.gl/WVZ57N';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	n = process(1, 30);
	idx = process(database);
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 친구리스트에서 ' + n + '번째 친구에게 필독을 걸어서\n';
	post += database[idx];
	data.post = post;
	
	data.desc = '나 이거 사주세염~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/bell.png';

	sendData(data);
}


database = [
	'"🍔 사줘"라고 말해보세요.',
	'"🍗 사줘"라고 말해보세요.',
	'"🍰 사줘"라고 말해보세요.',
	'"🍝 사줘"라고 말해보세요.',
	'"🍭 사줘"라고 말해보세요.',
	'"🍙 사줘"라고 말해보세요.',
	'"🍕 사줘"라고 말해보세요.',
	'"🍮 사줘"라고 말해보세요.',
	'"🍩 사줘"라고 말해보세요.',
	'"🎂 사줘"라고 말해보세요.',
	'"🍬 사줘"라고 말해보세요.',
	'"🍦 사줘"라고 말해보세요.',
	'"🌽 사줘"라고 말해보세요.'
]





























