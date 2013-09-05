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

	data.title = '이번주의 행운';
	data.url = 'http://goo.gl/rf22aX';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	d = new Date()
	month = d.getMonth() + 1
	week = getWeekOfMonth(d)
	colorIdx = process(dataColor)
	jewelyIdx = process(dataJewely)
	smellIdx = process(dataSmell)
	flowerIdx = process(dataFlower)
	
	post += userName + '님의 ' + month + '월 ' + week + '주의 행운\n';
	post += '------------------------\n';
	post += '✦ 행운의 숫자는: ' + process(0, 9) + '\n';
	post += '✦ 행운의 칼라는: ' + dataColor[colorIdx] + '\n';
	post += '✦ 행운의 보석은: ' + dataJewely[jewelyIdx] + '\n';
	post += '✦ 행운의 향기은: ' + dataSmell[smellIdx] + '\n';
	post += '✦ 행운의 꽃은: ' + dataFlower[flowerIdx];
	data.post = post;
	
	data.desc = month + '월 ' + week + '주의 행운';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/number.png';

	sendData(data);
}

function getWeekOfMonth(_date) {
	var  selectedDayOfMonth = _date.getDate()
		,first = new Date(_date.getFullYear() + '/' + (_date.getMonth() + 1) + '/01')
		,monthFirstDateDay = first.getDay()
		,weekStr = ['첫번째', '두번째', '세번째', '네번째', '다섯번째']
		,weekNum = Math.ceil((selectedDayOfMonth + monthFirstDateDay) / 7) - 1

	return weekStr[weekNum];
 }

dataColor = [
	'파란색',
	'빨간색',
	'주황색',
	'노란색',
	'검정색',
	'흰색',
	'연두색',
	'하늘색',
	'금색',
	'은색',
	'황토색',
	'회색',
	'녹색',
	'보라색',
	'남색',
	'분홍색'
]

dataJewely = [
	'가넷',
	'자수정',
	'애쿼머린',
	'다이아몬드',
	'에메랄드',
	'진주',
	'루비',
	'페리도트',
	'사파이어',
	'오팔',
	'토파즈',
	'터키석'
]

dataSmell = [
	'로즈마리향',
	'히야신스향',
	'에리카향',
	'자스민향',
	'카밀레향',
	'라벤다향',
	'백합향',
	'민트향',
	'바닐라향',
	'라일락향',
	'복숭아향',
	'라임향'
]

dataFlower = [
	'히야신스',
	'카네이션',
	'민들레',
	'장미',
	'은방울꽃',
	'해바라기',
	'연꽃',
	'헤몬꽃',
	'제비꽃',
	'튤립',
	'아네모네',
	'수선화'
]































