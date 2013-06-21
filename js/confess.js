var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataDrink, dataMount, dataAction
	,img

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
	boySelect.addEventListener('click', function(){
		boySelect.className = 'checked';
		girlSelect.className = '';
	}, false);
	girlSelect.addEventListener('click', function(){
		boySelect.className = '';
		girlSelect.className = 'checked';
	}, false);
}, false);



//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,sexType

	
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}

	if (M('#userName').val() == '') {
		alert('이름을 입력하세요.');
		return false;
	}
	
	if (boySelect.className == 'checked') {
		// 남자
		img = 'confess1.png'
	} else if (girlSelect.className == 'checked') {
		// 여자
		img = 'confess2.png'
	}
	storyFirst = dataFirst[Math.floor(Math.random() * dataFirst.length)]
	storySecond = dataSecond[Math.floor(Math.random() * dataSecond.length)]
	storyThird = dataThird[Math.floor(Math.random() * dataThird.length)]


	postMsg += '[나에게 고백할 사람]\n\n';
	postMsg += getRandom(1, 6) + '개월 뒤 ' + M('#userName').val() + '님에게 고백할 사람의 초성은 \n\n';
	postMsg += storyFirst + ' ' + storySecond + ' ' + storyThird + ' 입니다.\n\n';
	
	postMsg += 'http://goo.gl/D3Yy8\n';
	
	urlMsg = {
		title: '나에게 고백할 사람',
		desc: '정말이야? 전혀 눈치 못챘어...',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + img],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '내일까지 이야기 할께~',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

function getRandom(min, max){
	return Math.floor((Math.random() * (max-min) + min))
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "나에게 고백할 사람",
		url: "http://goo.gl/D3Yy8",
		appid: "funnyApp",
		appver: "1.0",
		appname: "나에게 고백할 사람",
		type: "link"
	});
}


dataFirst = [
	'ㄱ',
	'ㄱ',
	'ㄱ',
	'ㄱ',
	'ㄱ',
	'ㄴ',
	'ㄷ',
	'ㅁ',
	'ㅁ',
	'ㅂ',
	'ㅂ',
	'ㅂ',
	'ㅅ',
	'ㅇ',
	'ㅇ',
	'ㅇ',
	'ㅇ',
	'ㅈ',
	'ㅊ',
	'ㅎ',
	'ㅎ'
]

dataSecond = [
	'ㄱ',
	'ㄴ',
	'ㄷ',
	'ㄹ',
	'ㅁ',
	'ㅂ',
	'ㅅ',
	'ㅇ',
	'ㅈ',
	'ㅊ',
	'ㅌ',
	'ㅎ'
]

dataThird = [
	'ㄱ',
	'ㄴ',
	'ㄷ',
	'ㄹ',
	'ㅁ',
	'ㅂ',
	'ㅅ',
	'ㅇ',
	'ㅈ',
	'ㅊ',
	'ㅌ',
	'ㅎ'
]
































