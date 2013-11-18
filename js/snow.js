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

	data.title = '첫눈 오는날 나는 뭘하고 있을까?';
	data.url = 'http://goo.gl/jtH4H4';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	what = database[idx]
	if (sexType == 'boy') {
		
	} else if (sexType == 'girl') {
		what = what.replace(/여자친구/, '남자친구')
	}
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 첫 눈이 오는날 \n';
	post += what;
	data.post = post;
	
	data.desc = what;
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/snow.png';

	sendData(data);
}



database = [
	'여자친구와 한강을 거닙니다.',
	'여자친구와 63빌딩 스카이라운지에서 스테이크를 먹습니다.',
	'전망 좋은 커피숖에서 여자친구와 앉아 있습니다.',
	'여자친구와 단둘이 차에서 음악을 듣습니다.',
	'여자친구와 단둘이 겨울바다를 거닙니다.',
	'여자친구와 길거리에서 눈을 맞습니다.',
	'여자친구와 눈싸움을 합니다.',
	'여자친구와 여행을 갑니다.',
	'여자친구에게 프로포즈를 합니다.',
	'프로포즈를 받습니다.',
	'여자친구와 크게 싸웁니다.',
	'친구들과 눈을 맞습니다.',
	'친구와 사소하게 다툽니다.',
	'친구들과 눈싸움을 합니다.',
	'친구들와 영화를 봅니다.',
	'친구들과 영화를 봅니다.',
	'엄마와 싸웁니다.',
	'아무일도 일어나지 않습니다. 그냥 평소와 같습니다.',
	'집에서 밀린 숙제를 합니다.',
	'집에서 뉴스로 첫눈소식을 듣습니다.',
	'혼자 음악을 듣습니다.',
	'혼자서 한강을 거닙니다.',
	'혼자서 영화를 봅니다.',
	'혼자서 눈을 맞습니다.',
	'혼자서 빼빼로를 먹습니다.',
	'추워서 집에 있습니다.',
	'집에서 혼자 영화 "나홀로집에"를 봅니다.'
]

































