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
		,dataRan = Math.floor(Math.random() * data.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	
	postMsg += '[3년뒤 나의 외제차]\n';
	postMsg += '3년뒤 ' + userName + '님의 애마는 ' + data[dataRan]['car'] + '입니다.\n\n';
	postMsg += 'http://goo.gl/Vbd2u\n';

	urlMsg = {
		title: '3년뒤 나의 외제차',
		desc: data[dataRan]['car'],
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + data[dataRan]['photo'] ],
		type:'article'
	}
console.log(postMsg, urlMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '3년뒤 나의 외제차',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "3년뒤 나의 외제차",
		url: "http://goo.gl/Vbd2u",
		appid: "funnyApp",
		appver: "1.0",
		appname: "3년뒤 나의 외제차",
		type: "link"
	});
}


data = [
	{'photo': 'overCar0.jpg',  'car': '크라이슬러 크로스파이어'},
	{'photo': 'overCar1.jpg',  'car': 'BMW Z4'},
	{'photo': 'overCar2.jpg',  'car': '벤츠 SLK클래스 AMG'},
	{'photo': 'overCar3.jpg',  'car': '미니 쿠퍼 로드스터'},
	{'photo': 'overCar4.jpg',  'car': 'G2X'},
	{'photo': 'overCar5.jpg',  'car': '아우디 TT RS 로드스'},
	{'photo': 'overCar6.jpg',  'car': '혼다 CR-V'},
	{'photo': 'overCar7.jpg',  'car': '지프 컴패스'},
	{'photo': 'overCar8.jpg',  'car': '포드 이스케이프'},
	{'photo': 'overCar9.jpg',  'car': '토요타 라브4'},
	{'photo': 'overCar10.jpg', 'car': '닛산 뉴 로그 플러스'},
	{'photo': 'overCar11.jpg', 'car': '미쓰비시 RVR'},
	{'photo': 'overCar12.jpg', 'car': '토요타 프리우스'},
	{'photo': 'overCar13.jpg', 'car': '푸조 208 5도어'},
	{'photo': 'overCar14.jpg', 'car': '시트로엥 DS5'},
	{'photo': 'overCar15.jpg', 'car': '혼다 CR-Z'},
	{'photo': 'overCar16.jpg', 'car': '혼다 인사이트'},
	{'photo': 'overCar17.jpg', 'car': '스마트 포투 쿠페'},
	{'photo': 'overCar18.jpg', 'car': '벤츠 E클래스'},
	{'photo': 'overCar19.jpg', 'car': '혼다 어코드'},
	{'photo': 'overCar20.jpg', 'car': '토요타 캠리'},
	{'photo': 'overCar21.jpg', 'car': '렉서스 ES 하이브리드'},
	{'photo': 'overCar22.jpg', 'car': '포드 퓨전'},
	{'photo': 'overCar23.jpg', 'car': '폭스바겐 파사트'},
	{'photo': 'overCar24.jpg', 'car': '아우디 A7'},
	{'photo': 'overCar25.jpg', 'car': '재규어 XF'},
	{'photo': 'overCar26.jpg', 'car': '폭스바겐 CC'},
	{'photo': 'overCar27.jpg', 'car': 'BMW 5시리즈'},
	{'photo': 'overCar28.jpg', 'car': '푸조 508'},
	{'photo': 'overCar29.jpg', 'car': '닛산 알티마'}
]
































