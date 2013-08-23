var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,data
	,lottoNum = []
	,bonus
	,trainStr = [
		'첫',
		'두',
		'세',
		'네',
		'다섯',
		'여섯',
		'일곱',
		'여덞',
		'아홉',
		'열'
	]


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
		,train = getRandom(1, 101)
		,trainTxt
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	if (train <= 30) {
		trainTxt = '일등석칸'
	} else if (train >= 70) {
		trainTxt = '꼬리칸'
	} else {
		trainTxt = train + '번째 칸'
	}

	postMsg += '[설국열차]\n';
	postMsg += M('#userName').val() + '님은 설국열차 ' + trainTxt + '에 탑승합니다.\n\n';
	
	postMsg += 'http://goo.gl/T9VG8G\n';

	urlMsg = {
		title: '설국열차',
		desc: '설국열차는 약 100칸 입니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/train.png' ],
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
		msg: "설국열차",
		url: "http://goo.gl/T9VG8G",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}


function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}


































