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
		,idx = Math.floor(Math.random() * data.length)
		,picIdx = Math.floor(Math.random() * dataPic.length)
		,sajuIdx = Math.floor(Math.random() * dataSaju.length)
		,postMsg = ''
		,age = getRandom(5, 100)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	postMsg += '[관상]\n\n';
	postMsg += M('#userName').val() + '님의 얼굴은 ' + data[idx] + ' 입니다.\n\n';
	postMsg += dataSaju[sajuIdx] + '\n\n';
	
	postMsg += 'http://goo.gl/gWKOkz\n';

	urlMsg = {
		title: '관상',
		desc: '귀하다. ' + dataSaju[sajuIdx],
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/'+dataPic[picIdx] ],
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
		msg: "관상",
		url: "http://goo.gl/gWKOkz",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}


function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}


data = [
	'고양이상',
	'구렁이상',
	'너구리상',
	'호랑이상',
	'이리상',
	'황새상',
	'일본 원숭이상',
	'원숭이상',
	'진상',
	'곰팡이상'
]

dataPic = [
	'saju1.png',
	'saju2.png',
	'saju3.png',
	'saju4.png',
	'saju5.png',
	'saju6.png'
]


dataSaju = [
	'천지를 개벽할 관상이로구나',
	'도화살이 있는 관상이구나',
	'난세를 헤쳐나갈 관상이구나',
	'천하를 통일할 관상이구나',
	'큰재물을 얻을 관상이구나',
	'미남, 미녀를 옆에 둘 관상이구나',
	'좋은 음식을 많이 먹을 관상이구나',
	'관직에 나갈 관상이구나',
	'천기누설을 알아낼 관상이구나',
	'왕이 될 관상이구나',
	'천하를 얻을 관상이구나',
	'백성을 이롭게할 관상이구나'
]



























