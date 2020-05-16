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
		
	
	data.title = '2020년 나는 몇 반이 되나?';
	data.url = 'http://goo.gl/xx4PdH';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	ban = process(1, 8);
	h = process(dataHyung);
	t = process(dataTeacher);
	p = process(dataPart);
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 2020년 새학년에 ' + ban + '반이 됩니다.\n';
	post += '담임선생님은 ' + dataHyung[h] + ' ' + dataTeacher[t] + ' 선생님이시며,\n';
	post += '새 짝꿍은 ' + dataPart[p];
	
	data.post = post;
	
	data.desc = '이번 학년에는 모든것이 잘될꺼야~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/nextban.png';

	sendData(data);
}


dataHyung = [
	'무서운',
	'자상한',
	'인자하신',
	'인기많은',
	'예쁜',
	'잘 생긴',
	'엄청 무서운',
	'엄청 자상한',
	'미친',
	'엄청 웃긴'
]

dataTeacher = [
	'남자',
	'여자'
]

dataPart = [
	'나의 절친입니다.',
	'처음 만나는 친구입니다.',
	'우리동네 사는 친구입니다.',
	'울 학교 일진입니다.',
	'나의 베프입니다.',
	'비호감입니다.',
	'호감가는 친구입니다.',
	'찐따입니다.',
	'엄청 착합니다.',
	'나와 많이 친해집니다.',
	'울집 옆집에 사는 친구입니다.',
	'몰랐던 친구입니다.',
	'인기 많은 친구입니다.',
	'공부 잘하는 친구입니다.',
	'노래 잘하는 친구입니다.',
	'엄청 웃긴 친구입니다.',
	'잘 웃어주는 친구입니다.',
	'나의 고민들 잘 들어주는 친구입니다.',
	'나와 손발이 잘 맞는 친구입니다.',
	'나와 별로 안맞는 친구입니다.',
	'별로 친해지지 않습니다.',
	'내가 좋아하던 친구입니다.'
]





























