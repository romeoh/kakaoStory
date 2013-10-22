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
		,fName = M('#fName').val()

	data.title = '친구와 외모대결';
	data.url = 'http://goo.gl/zx4c7m';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (fName == '') {
		alert('친구 이름을 입력하세요.');
		return false;
	}
	if (fName.length == 3) {
		fNameStr = fName.substr(1);
	} else {
		fNameStr = fName;
	}
	fNameStr = uniValue(fNameStr) ? fNameStr + '아' : fNameStr + '야';
	
	meVal = getRandom(0, 99);
	youVal = getRandom(0, 99);
	getGraph(meVal);

	post += '[' + data.title + ']\n\n';
	post += userName + ': ' + getGraph(meVal) + ' (' + meVal + '점)\n';
	post += fName + ': ' + getGraph(youVal) + ' (' + youVal + '점)\n\n';

	if (meVal > youVal) {
		post += fNameStr + ', 봤냐? 넌 나한테 안돼!!';
	} else if (meVal < youVal) {
		post += fNameStr + ' 미안하다.\n너의 외모는 막강하구나.';
	} else {
		post += '역시 우리는 라이벌이었어.';
	}
	
	data.post = post;
	
	data.desc = '오직 얼굴만으로 승부를 건다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/feature3.png';

	sendData(data);
}

function getGraph(value){
	return dataGraph[Math.round(value/10)];
}



dataGraph = [
	'□□□□□□□□□□',
	'■□□□□□□□□□',
	'■■□□□□□□□□',
	'■■■□□□□□□□',
	'■■■■□□□□□□',
	'■■■■■□□□□□',
	'■■■■■■□□□□',
	'■■■■■■■□□□',
	'■■■■■■■■□□',
	'■■■■■■■■■□',
	'■■■■■■■■■■'
]
































