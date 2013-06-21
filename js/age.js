var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,data
	,lottoNum = []
	,bonus

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
	var  sexType
		,userName = document.querySelector('#userName').value
		,postMsg = ''
		,age = getRandom(5, 100)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	if (age <= 20) {
		desc = '봤냐?'
	} else if (age > 20 && age <= 35) {
		desc = '선방했네..'
	} else {
		desc = '나이는 숫자에 불과하다!!'
	}

	postMsg += '[나의 얼굴나이]\n';
	postMsg += M('#userName').val() + '의 얼굴나이는 ' + age + '세 입니다.\n\n';
	
	postMsg += 'http://goo.gl/yi3PU\n';

	urlMsg = {
		title: '나의 얼굴나이',
		desc: age + ' 이어즈 올드~' ,
		imageurl: ['http://romeoh.github.io/kakaoStory/img/age.png' ],
		type:'article'
	}
console.log(postMsg, urlMsg, desc)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : desc,
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "나의 얼굴나이",
		url: "http://goo.gl/yi3PU",
		appid: "funnyApp",
		appver: "1.0",
		appname: "나의 얼굴나이",
		type: "link"
	});
}


function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}


































