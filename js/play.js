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

	data.title = '나는 몇다리까지 걸치나';
	data.url = 'http://goo.gl/msnF7L';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 ' + database[idx];
	data.post = post;
	
	data.desc = '기다려 꼭 돌아갈께~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/play2.png';

	sendData(data);
}


database = [
	'한다리도 걸치지 못합니다.',
	'한명만 바라봅니다.',
	'양다리까지 걸칩니다.',
	'최대 세 다리까지 걸칩니다.',
	'최대 네 다리까지 걸칩니다.',
	'최대 오 다리까지 걸칩니다.',
	'최대 육 다리까지 걸칩니다.',
	'최대 칠 다리까지 걸칩니다.',
	'최대 십 다리까지 걸칩니다.',
	'최대 이십 다리까지 걸칩니다.'
]






























