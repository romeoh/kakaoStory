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

	data.title = '10년뒤 내 아기모습';
	data.url = 'http://goo.gl/D9B88';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		photo = 'babyBoy.jpg';
	} else if (sexType == 'girl') {
		photo = 'babyGirl.jpg';
	}
	idx = process(dataJob)
	starIdx0 = process(dataStar)
	starIdx1 = process(dataStar)
	starIdx2 = process(dataStar)
	starIdx3 = process(dataStar)
	starIdx4 = process(dataStar)
	
	post += '[' + data.title + ']\n\n';
	post += userName + ' 아기는 10년뒤 ' + dataJob[idx] + '\n\n';
	post += '성격: ' + dataStar[starIdx0] + '\n';
	post += '지능: ' + dataStar[starIdx1] + '\n';
	post += '키: ' + dataStar[starIdx2] + '\n';
	post += '외모: ' + dataStar[starIdx3] + '\n';
	post += '매력도: ' + dataStar[starIdx4];
	data.post = post;
	
	data.desc = userName + ' 아기는 ' + dataJob[idx];
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + photo;

	sendData(data);
}


dataJob = [
	'천재 바이얼리니스트가 됩니다.',
	'천재 골퍼가 됩니다.',
	'천재 축구선수가 됩니다.',
	'천재 야구선수가 됩니다.',
	'천재 피겨스케이터가 됩니다.',
	'천재 수영선수가 됩니다.',
	'천재 체조선수가 됩니다.',
	'천재 과학자가 됩니다.',
	'천재 수학자가 됩니다.',
	'최고 얼짱이 됩니다.',
	'천재 연기자가 됩니다.',
	'천재 컴퓨터 프로그래머가 됩니다.'
]

dataStar = [
	'☆☆☆☆☆',
	'★☆☆☆☆',
	'★★★☆☆',
	'★★★☆☆',
	'★★★☆☆',
	'★★★★☆',
	'★★★★☆',
	'★★★★☆',
	'★★★★☆',
	'★★★★★',
	'★★★★★',
	'★★★★★',
	'★★★★★',
	'★★★★★'
]


































