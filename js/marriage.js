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

	data.title = '나는 몇번의 결혼을 하나';
	data.url = 'http://goo.gl/msnF7L';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
	} else if (sexType == 'girl') {
		database = dataGirl;
	}
	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 ' + database[idx];
	data.post = post;
	
	data.desc = '이번이 마지막이야.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/merriage.png';

	sendData(data);
}


database = [
	'한번도 결혼하지 않습니다.',
	'한번의 결혼을 합니다.',
	'두번 결혼합니다.',
	'세번 결혼합니다.',
	'네번 결혼합니다.',
	'다섯번 결혼합니다.',
	'여섯번 결혼합니다.',
	'일곱번 결혼합니다.',
	'열번 결혼합니다.',
	'스무번 결혼합니다.',
	'스물 다섯번 결혼합니다.',
	'서른번 결혼합니다.',
	'서른 다섯번 결혼합니다.'
]






























