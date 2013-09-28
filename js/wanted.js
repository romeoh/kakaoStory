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

	data.title = '애인구함';
	data.url = 'http://goo.gl/DrQFt';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataGirl;
	} else if (sexType == 'girl') {
		database = dataBoy
	}
	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += database[idx];
	data.post = post;
	
	data.desc = database[idx];
	data.img = 'http://romeoh.github.io/kakaoStory/img/wanted.png';

	sendData(data);
}


// 
dataBoy = [
	'절대복종',
	'일편단심',
	'유부녀 절대사절',
	'초보자환영',
	'경력자사절',
	'상시대기',
	'조건없음',
	'얼굴안봄',
	'150cm이상환영',
	'동반솔로탈출',
	'무한애정행각',
	'나이, 학력, 외모 제한없음',
	'주7일 데이트',
	'솔로입니다. 언제든지 작업해주세요.',
	'무조건 급구!!',
	'총각이 썩어가고 있습니다.',
	'모든재산 공개',
	'핸드폰 비번 공개',
	'현상금: 1,000만원',
	'선착순 1명',
	'반품불가',
	'체력보장'
]

dataGirl = [
	'절대복종',
	'일편단심',
	'유부남 절대사절',
	'초보자환영',
	'경력자사절',
	'상시대기',
	'조건없음',
	'얼굴안봄',
	'160cm이상환영',
	'동반솔로탈출',
	'무한애정행각',
	'나이, 학력, 외모 제한없음',
	'주7일 데이트',
	'솔로입니다. 언제든지 작업해주세요.',
	'무조건 급구!!',
	'지금 저는 최고 절정기 입니다.',
	'핸드폰 비번 공개',
	'현상금: 1,000만원',
	'반품불가',
	'선착순 1명'
]































