var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,data
	,lottoNum = []
	,bonus



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
		desc = '인생은 60부터.ㅠㅠ'
	}

	postMsg += '[나의 얼굴나이]\n';
	postMsg += M('#userName').val() + '님의 얼굴나이는 ' + age + '세 입니다.\n\n';
	
	postMsg += 'http://goo.gl/yi3PU\n';

	urlMsg = {
		title: '나의 얼굴나이',
		desc: age + ' 이어즈 올드~\n' + desc,
		imageurl: ['http://romeoh.github.io/kakaoStory/img/age.png' ],
		type:'article'
	}
console.log(postMsg, urlMsg, desc)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '깨알유머:',
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


































