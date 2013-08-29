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

	data.title = '내 얼굴 부위별 점수';
	data.url = 'http://goo.gl/Q5o37';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	type = process(0, 3)
	if (type === 0) {
		database = dataHigh
	} else if (type === 1) {
		database = dataMiddle
	} else {
		database = dataLow
	}

	skin = database[process(database)]
	eye = database[process(database)]
	nose = database[process(database)]
	mouse = database[process(database)]
	line = database[process(database)]
	ave = Math.floor((getScore(skin) + getScore(eye) + getScore(nose) + getScore(mouse) + getScore(line)) / 5 * 100) / 100
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님의 얼굴 부위별 점수입니다.\n\n';
	post += '* 피부: ' + skin + '\n';
	post += '* 눈: ' + eye + '\n';
	post += '* 코: ' + nose + '\n';
	post += '* 입: ' + mouse + '\n';
	post += '* 턱선: ' + line + '\n';
	post += '* 총점: ' + ave + ' (5.0 만점)';
	data.post = post;
	
	data.desc = '얼굴만으로 무릎을 꿇게하리라.';
	data.img = 'http://romeoh.github.io/kakaoStory/img/face.png';

	sendData(data);
}
function getScore(key){
	if (key === '수') {
		return 5
	}
	if (key === '우') {
		return 4
	}
	if (key === '미') {
		return 3
	}
	if (key === '양') {
		return 2
	}
	if (key === '가') {
		return 1
	}
}


dataHigh = [
	'수',
	'수',
	'수',
	'수',
	'수',
	'우',
	'우',
	'우',
	'우',
	'미',
	'미',
	'양',
	'가'
]
dataMiddle = [
	'수',
	'우',
	'미',
	'양',
	'가'
]
dataLow = [
	'수',
	'우',
	'미',
	'미',
	'양',
	'양',
	'양',
	'양',
	'가',
	'가',
	'가',
	'가',
	'가',
	'가'
]
































