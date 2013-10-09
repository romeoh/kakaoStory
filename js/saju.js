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

	data.title = '관상';
	data.url = 'http://goo.gl/gWKOkz';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	sajuIdx = process(dataSaju)
	picIdx = process(dataPic)
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님의 얼굴은 ' + database[idx] + ' 입니다.\n\n';
	post += dataSaju[sajuIdx];
	data.post = post;
	
	data.desc = '귀하다. ' + dataSaju[sajuIdx];
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/'+dataPic[picIdx];

	sendData(data);
}


database = [
	'고양이상',
	'구렁이상',
	'너구리상',
	'호랑이상',
	'이리상',
	'황새상',
	'일본 원숭이상',
	'원숭이상',
	'동영상',
	'밉상',
	'돌상',
	'말상',
	'밥상',
	'화상',
	'궁상',
	'진상',
	'곰팡이상'
]

dataPic = [
	'saju1.png',
	'saju2.png',
	'saju3.png',
	'saju4.png',
	'saju5.png',
	'saju6.png'
]


dataSaju = [
	'천지를 개벽할 관상이로구나',
	'도화살이 있는 관상이구나',
	'난세를 헤쳐나갈 관상이구나',
	'천하를 통일할 관상이구나',
	'큰재물을 얻을 관상이구나',
	'미남, 미녀를 옆에 둘 관상이구나',
	'좋은 음식을 많이 먹을 관상이구나',
	'관직에 나갈 관상이구나',
	'천기누설을 알아낼 관상이구나',
	'왕이 될 관상이구나',
	'천하를 얻을 관상이구나',
	'백성을 이롭게할 관상이구나'
]



























