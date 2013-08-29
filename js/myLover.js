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

	data.title = '내 이상형의 조건';
	data.url = 'http://goo.gl/VbOvP';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
		data.title = '내 남친의 조건';
		photo = 'loverMan.jpg'
	} else if (sexType == 'girl') {
		database = dataGirl;
		data.title = '내 여친의 조건';
		photo = 'loverWoman.jpg'
	}
	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += '내 이상형이요? 딴건 안봅니다.\n';
	post += database[idx]
	data.post = post;
	
	data.desc = '딴건 안봅니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + photo;

	sendData(data);
}


// 내 여친은
dataGirl = [
	'키만 크면됩니다.',
	'몸매만 예쁘면 됩니다.',
	'날씬하기만 하면 됩니다.',
	'얼굴만 예쁘면 됩니다.',
	'눈만 크면 됩니다.',
	'머리만 길면 됩니다.',
	'청순하기만 하면 됩니다.',
	'쎅시하기만 하면 됩니다.',
	'부잣집 외동딸이면 됩니다.',
	'피부만 하야면 됩니다.',
	'일편단심이기만 하면 됩니다.',
	'돈만 잘벌면 됩니다.',
	'짧은 치마만 잘 어울리면 됩니다.',
	'바느질과 십자수만 잘하면 됩니다.',
	'요리만 잘하면 됩니다.',
	'옷만 잘입으면 됩니다.'
]

// 내 남친은
dataBoy = [
	'키만 크면됩니다.',
	'돈만 많으면 됩니다.',
	'재벌2세면 충분합니다.',
	'BMW 한대만 있으면 되요~',
	'얼굴만 잘생기면 됩니다.',
	'근육질이면 됩니다.',
	'자상하기만 하면 됩니다.',
	'유머감각만 있으면 됩니다.',
	'목소리만 좋으면 됩니다.',
	'섹시한 엉덩이면 충분합니다.',
	'밥만 잘 사주면 됩니다.',
	'노래만 잘 부르면 됩니다.',
	'요리만 잘하면 됩니다.',
	'항상 옆에만 있으면 됩니다.',
	'옷만 잘입으면 됩니다.',
	'나를 잘 이끌어 주면 됩니다.'
]



































