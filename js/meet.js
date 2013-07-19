var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataMale, dataFemale

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

window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,str = ''
		,birthYear = parseInt( M('#userAge').val(), 10)
		,firstYear
	
	if( isNaN(birthYear)){
		M('#userAge').val('')
		alert('생년을 입력하세요.')
		return false
	}
	if( M('#userName').val() == ''){
		alert('이름을 입력하세요.')
		return false
	}
	firstYear = birthYear + 17
	for (var i=0; i<53; i++) {
		var value = getRandom(0, 99)
		str += (firstYear + i) +'년('+(18+i)+'세) ' + getGraph(value) + ' '+value+'%\n'
	}
	//console.log(str)
	postMsg += '[이성을 만나는 시기]\n\n';
	postMsg += M('#userName').val() + '님이 이성을 만나는 시기입니다.\n\n';
	postMsg += str;

	postMsg += '\nhttp://goo.gl/HoznT';
	
	urlMsg = {
		title: '이성을 만나는 시기',
		desc: '이성을 만나는 시기',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/relationLover.jpg'],
		type:'article'
	}

	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
		post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '이성을 만나는 시기',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}


// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "이성을 만나는 시기",
		url: "http://goo.gl/HoznT",
		appid: "funnyApp",
		appver: "1.0",
		appname: "이성을 만나는 시기",
		type: "link"
	});
}

function getRandom(min, max){
	return Math.floor((Math.random() * (max-min) + min))
}

function getGraph(value){
	return data[Math.round(value/10)];
}

data = [
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









