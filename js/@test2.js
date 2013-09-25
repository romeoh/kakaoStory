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

	data.title = '나에게 고백할 사람';
	data.url = 'http://goo.gl/D3Yy8';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		img = 'confess1.png'
		sex = '여자'
	} else if (sexType == 'girl') {
		img = 'confess2.png'
		sex = '남자'
	}
	firstIdx = process(dataFirst)
	secondIdx = process(dataSecond)
	thirdIdx = process(dataThird)
	
	post += '[' + data.title + ']\n\n';
	post += process(1, 6) + '개월 뒤 ' + M('#userName').val() + '님에게 고백할 ' + sex + '의 초성은 \n\n';
	post += dataFirst[firstIdx] + ' ' + dataSecond[secondIdx] + ' ' + dataThird[thirdIdx] + ' 입니다.';
	data.post = post;
	
	data.desc = '정말이야? 전혀 눈치 못챘어...\n내일까지 이야기 할께~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + img;

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
































