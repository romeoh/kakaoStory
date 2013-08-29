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

	data.title = '나의 전투력';
	data.url = 'http://goo.gl/SWjv9m';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	level = process(1, 10000)
	fightIdx = process(dataFight)
	line = process(1, 100)
	team = process(1, 30)
	img = process(1, 10)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 전투력은 ' + M.toCurrency(level) + '입니다. \n';
	post += '서열: ' + line + '위\n';
	post += '필살기: ' + dataFight[fightIdx] + '\n';
	post += '최대 1:' + team + '까지 대적 가능';
	
	data.post = post;
	
	data.desc = dataFight[fightIdx];
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/god' + img + '.png';

	sendData(data);
}


dataFight = [
	'텔레포트',
	'리뉴얼 속사',
	'리뉴얼 돌려차기',
	'좌익새',
	'작두걸이',
	'우익새',
	'회축',
	'칼떨구기',
	'진회축',
	'삼단회축',
	'난염각',
	'호미걸이',
	'리뉴얼 태권도',
	'가드캔슬',
	'용잡이',
	'청룡의 각',
	'브라질리언 킥',
	'통배치기'
]






























