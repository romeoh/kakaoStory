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

	data.title = '벨튀';
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
	
	data.desc = '잡히면 안된다.\n튀어!튀어!!';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/bell.png';

	sendData(data);
}


database = [
	'"시끄럽다"고 말해보세요.',
	'"당신은 나 죽으면 슬퍼해줄 유일한 사람입니다." 라고 말해보세요.',
	'"좀 짱이신듯" 이라고 말해보세요.',
	'"볼수록 잘생겼단 말이야"라고 말해보세요.',
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
	'"💋 이거 선물이야"라고 말해보세요.'
]





























