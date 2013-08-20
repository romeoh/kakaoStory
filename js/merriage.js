var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataDrink, dataMount, dataAction



window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  sexType
		,userName = document.querySelector('#userName').value
		,resultName, resultPhoto, resultMsg
		,message
		,postMsg = ''
		,dataIdx = Math.floor(Math.random() * data.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	postMsg += '[나는 몇번의 결혼을 하나]\n';
	postMsg += userName + '님은 ' + data[dataIdx] + '\n\n';
	postMsg += 'http://goo.gl/msnF7L';

	urlMsg = {
		title: '나는 몇번의 결혼을 하나',
		desc: '이번이 마지막이야.',
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/merriage.png' ],
		type:'article'
	}
console.log(postMsg, urlMsg)
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
		msg: "나는 몇번의 결혼을 하나",
		url: "http://goo.gl/msnF7L",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}




data = [
	'한번도 결혼하지 않습니다.',
	'한번의 결혼을 합니다.',
	'한번의 결혼을 합니다.',
	'한번의 결혼을 합니다.',
	'두번 결혼합니다.',
	'두번 결혼합니다.',
	'세번 결혼합니다.',
	'네번 결혼합니다.',
	'다섯번 결혼합니다.',
	'여섯번 결혼합니다.',
	'일곱번 결혼합니다.',
	'열번 결혼합니다.',
	'스무번 결혼합니다.',
	'스물 다섯번 결혼합니다.'
]






























