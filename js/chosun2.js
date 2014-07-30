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

	data.title = '조선시대 직업';
	data.url = 'http://goo.gl/3MLueU';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 조선시대 직업은 ' + database[idx] + '';
	data.post = post;
	
	data.desc = '직업에 귀천이 어디 있겠는가';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/chosun.png';

	sendData(data);
}


database = [
	'임금 이었습니다.',
	'왕이었습니다.',
	'영의정 이었습니다.',
	'좌의정 이었습니다.',
	'병조판서 였습니다.',
	'이조판서 였습니다.',
	'형조판서 였습니다.',
	'판금부 부사였습니다.',
	'도승지 였습니다.',
	'한의사였습니다.',
	'사또였습니다.',
	'암행어사 였습니다.',
	'이방이었습니다.',
	'백정이었습니다.',
	'망나니였습니다.',
	'거지였습니다.',
	'도둑이었습니다.',
	'사기꾼이었습니다.',
	'주막의 주모였습니다.',
	'농부였습니다.',
	'어부였습니다.',
	'공노비였습니다.',
	'사노비였습니다.',
	'노비였습니다.',
	'추노였습니다.',
	'기생이었습니다.',
	'관심병자 였습니다.'
]































