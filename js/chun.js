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

	data.title = '나의 천생연분의 초성';
	data.url = 'http://goo.gl/H19wSd';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	firstIdx = process(dataFirst)
	secondIdx = process(dataSecond)
	thirdIdx = process(dataThird)

	post += '[' + data.title + ']\n\n';
	post += userName + '님과 천생연분의 초성은\n';
	post += dataFirst[firstIdx] + ' ' + dataSecond[secondIdx] + ' ' + dataThird[thirdIdx] + ' 입니다.';
	data.post = post;
	
	data.desc = '빨리 나타나라고~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/chun.png';

	sendData(data);
}


dataFirst = [
	'ㄱ',
	'ㄱ',
	'ㄱ',
	'ㄱ',
	'ㄱ',
	'ㄴ',
	'ㄷ',
	'ㅁ',
	'ㅁ',
	'ㅂ',
	'ㅂ',
	'ㅂ',
	'ㅅ',
	'ㅇ',
	'ㅇ',
	'ㅇ',
	'ㅇ',
	'ㅈ',
	'ㅊ',
	'ㅎ',
	'ㅎ'
]

dataSecond = [
	'ㄱ',
	'ㄴ',
	'ㄹ',
	'ㅁ',
	'ㅂ',
	'ㅅ',
	'ㅇ',
	'ㅈ',
	'ㅊ',
	'ㅌ',
	'ㅎ'
]

dataThird = [
	'ㄱ',
	'ㄴ',
	'ㄷ',
	'ㄹ',
	'ㅁ',
	'ㅂ',
	'ㅅ',
	'ㅇ',
	'ㅈ',
	'ㅊ',
	'ㅌ',
	'ㅎ'
]




























