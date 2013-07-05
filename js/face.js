var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	
if (os == 'ios' || os == 'android') {
	//init();
} else {
	var  adTop = document.querySelector('#adTop')
		,adBottom = document.querySelector('#adBottom')
		,adMiddle = document.querySelector('#adMiddle')
	document.querySelector('body').removeChild(adTop)
	document.querySelector('body').removeChild(adBottom)
	document.querySelector('body').removeChild(adMiddle)
}

window.addEventListener('DOMContentLoaded', function(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}, false);



//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,type = getRandom(0, 3)

	if (type === 0) {
		data = dataHigh
	} else if (type === 1) {
		data = dataMiddle
	} else {
		data = dataLow
	}
		
	if (M('#userName').val() == '') {
		alert('이름을 입력하세요.');
		return false;
	}
	
	skin = data[Math.floor(Math.random() * data.length)]
	eye = data[Math.floor(Math.random() * data.length)]
	nose = data[Math.floor(Math.random() * data.length)]
	mouse = data[Math.floor(Math.random() * data.length)]
	line = data[Math.floor(Math.random() * data.length)]

	ave = Math.floor((getScore(skin) + getScore(eye) + getScore(nose) + getScore(mouse) + getScore(line)) / 5 * 100) / 100

	postMsg += '[내 얼굴 부위별 점수]\n';
	postMsg += M('#userName').val() + '님의 얼굴 부위별 점수입니다.\n\n';
	postMsg += '피부: ' + skin + '\n';
	postMsg += '눈: ' + eye + '\n';
	postMsg += '코: ' + nose + '\n';
	postMsg += '입: ' + mouse + '\n';
	postMsg += '턱선: ' + line + '\n';
	postMsg += '총점: ' + ave + ' (5.0 만점)\n\n';
	
	postMsg += 'http://goo.gl/Q5o37\n';
	
	urlMsg = {
		title: '내 얼굴 부위별 점수',
		desc: '얼굴만으로 무릅을 꿃게하리라.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/face.png'],
		type:'article'
	}
	console.log(type, postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '평균 ' + ave,
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

function getRandom(min, max){
	return Math.floor((Math.random() * (max-min) + min))
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
// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "내 얼굴 부위별 점수",
		url: "http://goo.gl/Q5o37",
		appid: "funnyApp",
		appver: "1.0",
		appname: "내 얼굴 부위별 점수",
		type: "link"
	});
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
































