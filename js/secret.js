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

	data.title = '1학기 우리반의 비밀';
	data.url = 'http://goo.gl/OOIJx7';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	anidx = process(database)
	idx = process(1, 30)

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 1학기 친구 중 ' + idx + '번은 사실 ' + database[anidx] + '\n';
	data.post = post;
	
	data.desc = '당신이 모르던 비밀';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/secret.png';

	sendData(data);
}


database = [
	'왕따였습니다.',
	'천재였습니다.',
	'바보였습니다.',
	'재벌 2세였습니다.',
	'영웅이었습니다.',
	'몬스터였습니다.',
	'아이돌 연습생이었습니다.',
	'피카츄였습니다.',
	'타요 버스였습니다.',
	'재벌이었습니다.',
	'성형수술을 했습니다.',
	'부모님이 연예인이었습니다.',
	'연예인과 사귑니다.',
	'외국인이었습니다.',
	'나이가 훨씬 많습니다.',
	'나이가 훨씬 적습니다.',
	'이름이 박규였습니다.',
	'이름이 병진이었습니다.'
]



























