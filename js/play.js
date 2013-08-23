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

	postMsg += '[나는 몇다리까지 걸치나]\n';
	postMsg += userName + '님은 ' + data[dataIdx] + '\n\n';
	postMsg += 'http://goo.gl/msnF7L';

	urlMsg = {
		title: '나는 몇다리까지 걸치나',
		desc: '기다려 꼭 돌아갈께~',
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/play2.png' ],
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
		msg: "나는 몇다리까지 걸치나",
		url: "http://goo.gl/msnF7L",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}




data = [
	'한다리도 걸치지 못합니다.',
	'한명만 바라봅니다.',
	'양다리까지 걸칩니다.',
	'최대 세 다리까지 걸칩니다.',
	'최대 네 다리까지 걸칩니다.',
	'최대 오 다리까지 걸칩니다.',
	'최대 육 다리까지 걸칩니다.',
	'최대 칠 다리까지 걸칩니다.',
	'최대 십 다리까지 걸칩니다.',
	'최대 이십 다리까지 걸칩니다.'
]






























