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

	data.title = '2014년 당신이 얻게될 3가지';
	data.url = 'http://goo.gl/gcQ9Ft';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	db = shuffle(database)
	last = shuffle(dabalast)

	post += '[' + data.title + ']\n\n';
	post += userName + '님이 얻게될 3가지는 \n';
	post += db[0] + ', ' + db[1] + ', 그리고 ' + last[0] + ' 입니다.';
	data.post = post;
	
	data.desc = '올해는 뭔가 잘 풀릴거같은 기분좋은 느낌';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/three.png';

	sendData(data);
}

database = [
	'자유',
	'지혜',
	'아름다움',
	'젊음',
	'행복',
	'경험',
	'정직',
	'친구',
	'감각',
	'인기',
	'지능',
	'사랑',
	'돈',
	'힘',
	'시간',
	'매력',
	'즐거움',
	'승리',
	'성공',
	'재치',
	'욕망',
	'건강',
	'행운',
	'영혼'
]

dabalast = [
	'새 애인',
	'무개념',
	'쩔음',
	'드립',
	'빅 머니',
	'새 오빠',
	'뻘짓',
	'크리스탈',
	'조삼모사',
	'택배'
]
































