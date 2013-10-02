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
		,str = ''

	data.title = '나의 자숙기간';
	data.url = 'http://goo.gl/xsbgQr';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	year = process(0, 10);
	month = process(0, 12);
	comeback = process(database);

	if (year === 0) {
		str += ''
	} else {
		str += year + '년'
	}
	if (str.indexOf('년') != -1) {
		str += ' ';
	}
	if (month === 0) {
		str += ''
	} else {
		str += month + '개월'
	}
	if (str != '') {
		str += '의 자숙기간을 거쳐\n';
	} else {
		str = '1년의 자숙기간을 거쳐'
	}
	str = str.replace(/년 의/g, '년의');
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 \n';
	post += str;
	post += database[comeback] + ' 컴백합니다.';
	data.post = post;
	
	data.desc = '공인으로써 항상 모범을 보이겠습니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/self.png';

	sendData(data);
}


database = [
	'MBC 무릎팍도사로',
	'SBS 런닝맨으로',
	'SBS 힐링캠프로',
	'KBS 위기탈출 넘버원으로',
	'SBS 화신으로',
	'KBS 1대100으로',
	'MBC TV특종! 놀라운세상으로',
	'KBS 비타민으로',
	'MBC 라디오스타로',
	'SBS 한밤의 TV연예로',
	'KBS 해피투게더3로',
	'SBS 자기야로',
	'KBS 뮤직뱅크로',
	'MBC 나혼자 산다로',
	'SBS 금요일엔 수다다로',
	'KBS 접속!무비월드로',
	'MBC 쇼!음악중심으로',
	'SBS 스타주니어쇼 붕어빵으로',
	'MBC 우리결혼했어요로',
	'SBS 놀라운 대회 스타킹으로',
	'MBC 무한도전으로',
	'KBS 불후의 명곡으로',
	'KBS 출발 드림팀으로',
	'MBC 신비한TV 서프라이즈로',
	'SBS 도전 1000곡으로',
	'KBS 전국노래자랑으로',
	'KBS 해피선데이로',
	'SBS 인기가요로',
	'KBS 개그콘서트로',
	'KBS 가요무대로',
	'KBS 국악한마당으로',
	'MBC 뉴스데스크로',
	'SBS 8시뉴스로',
	'KBS 9시뉴스로',
	'MBC 마감뉴스로',
	'SBS 그것이 알고싶다로',
	'MBC 시사매거진 2580으로',
	'KBS 긴급출동 24시로'
]































