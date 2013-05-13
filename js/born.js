var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataDrink, dataMount, dataAction

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
		,dataCharactorRan = Math.floor(Math.random() * dataCharactor.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	postMsg += '[내가 세상에 태어난 이유]\n\n';
	postMsg += userName + '님이 세상에 태어난 이유는 입니다.\n';
	postMsg += 'http://goo.gl/HaHyR';

	urlMsg = {
		title: '내가 세상에 태어난 이유',
		desc: '엄마가 시켜서 입니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' ],
		type:'article'
	}
console.log(postMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '내가 세상에 태어난 이유',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "나의 롤모델",
		url: "http://goo.gl/HaHyR",
		appid: "funnyApp",
		appver: "1.0",
		appname: "나의 롤모델",
		type: "link"
	});
}


dataCharactor = [
	{'result': ''}
	
]
































