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

	data.title = '크리스마스때 내가 받을 선물';
	data.url = 'http://goo.gl/Hw6joa';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy;
	} else if (sexType == 'girl') {
		database = dataGirl;
	}
	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 이번 크리스마스때 ' + database[idx] + ' 선물로 받게 됩니다.\n';
	data.post = post;
	
	data.desc = '메리 크리스마스~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/christmas.png';

	sendData(data);
}



dataBoy = [
	'여자친구를',
	'갤럭시 S5와 갤럭시 기어를',
	'쿠키런 크리스탈 500개를',
	'화이트골드 목걸이를',
	'여친에게 지갑을',
	'여친에게 로션을',
	'훈녀에게 프로포즈를',
	'아디다스 저지를',
	'노스페이스 파카를',
	'파나소닉 헤드폰을',
	'무선이어폰을',
	'여자친구의 키스를',
	'방학숙제를',
	'욕을',
	'엄마에게 야단을',
	'현금 20만원을',
	'가방을',
	'정장 한벌을',
	'크리스마스 특집 "나홀로집에"를',
	'니콘 DSLR 카메라를',
	'뉴발 운동화를',
	'나이키 손목시계를',
	'아이패드를',
	'니 키만한 곰인형을',
	'커플시계를',
	'노트북을',
	'손편지를',
	'더위사냥 아이스크림 1개를',
	'농심 뿌셔뿌셔 2개를',
	'무한도전 달력을',
	'쿠키런 크리스탈 5개를',
	'진정한 친구의 주먹을',
	'바나나맛 우유 2개를',
	'자일리톨 껌 한통을',
	'뒤늦게 빼빼로 2통을'
]

dataGirl = [
	'남자친구를',
	'갤럭시 S5와 갤럭시 기어를',
	'쿠키런 크리스탈 500개를',
	'화이트골드 목걸이를',
	'남친에게 지갑을',
	'남친에게 로션을',
	'훈남에게 프로포즈를',
	'아디다스 저지를',
	'노스페이스 파카를',
	'파나소닉 헤드폰을',
	'무선이어폰을',
	'남자친구의 키스를',
	'방학숙제를',
	'욕을',
	'엄마에게 야단을',
	'현금 20만원을',
	'가방을',
	'정장 한벌을',
	'크리스마스 특집 "나홀로집에"를',
	'니콘 DSLR 카메라를',
	'뉴발 운동화를',
	'나이키 손목시계를',
	'아이패드를',
	'니 키만한 곰인형을',
	'커플시계를',
	'노트북을',
	'손편지를',
	'더위사냥 아이스크림 1개를',
	'농심 뿌셔뿌셔 2개를',
	'무한도전 달력을',
	'쿠키런 크리스탈 5개를',
	'진정한 친구의 주먹을',
	'바나나맛 우유 2개를',
	'자일리톨 껌 한통을',
	'뒤늦게 빼빼로 2통을'
]
































