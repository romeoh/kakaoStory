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

	data.title = '나의 매력포인트';
	data.url = 'http://goo.gl/lzbc5';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
		photo = 'pointerMale.jpg'
	} else if (sexType == 'girl') {
		database = dataGirl;
		photo = 'pointerFemale.jpg'
	}
	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += '뭐 딴건 내세울것 없구요.\n';
	post += database[idx]
	data.post = post;
	
	data.desc = '딴건 없어요.';
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + photo;

	sendData(data);
}


// 남자
dataBoy = [
	'자랑할껀 훤칠한 키 밖에 없네요.',
	'돈이 많습니다.',
	'신의 직장에 다녀요.',
	'감성발라드 보이스!',
	'고급차 소유주입니다.',
	'유머감각의 소유자입니다.',
	'강남 스타일 입니다.',
	'목소리가 좋아요.',
	'몸매 짱입니다.',
	'섹시한 엉덩이의 소유자입니다.',
	'눈빛이 깊어요.',
	'피부가 좋아요.',
	'귀여움쟁이 입니다. 뿌잉뿌잉~',
	'지적인 매너남입니다.',
	'집이 잘살아요.'
]

// 여자
dataGirl = [
	'섹시한 몸매에요.',
	'한가인정도 닮았데요.',
	'눈빛이 매혹적이에요.',
	'돈이 많아요.',
	'연예인 부럽지 않게 인기쟁이에요.',
	'섹시한 다리의 소유자에요.',
	'귀여움 종결자에요.',
	'패셔니스타에요.',
	'화장빨 죽여요.',
	'얼굴로 먹고 살아요.',
	'베이글녀에요.',
	'피부짱이에요.',
	'애교쟁이에요',
	'요리를 잘해요.'
]

































