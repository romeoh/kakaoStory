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
}, false);


//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,optMon = document.querySelectorAll('#selMonth option')
		,optDate = document.querySelectorAll('#selDate option')
		,monIdx
		,dateIdx
		,monthType
		,dateType
		,mon, date
	
	if (selYear.value == '') {
		alert('태어난 년을 선택하세요.');
		return;
	}
	if (selMonth.value == '') {
		alert('태어난 월을 선택하세요.');
		return;
	}
	if (selDate.value == '-') {
		alert('태어난 일을 선택하세요.');
		return;
	}

	for (var i=0; i<optMon.length; i++) {
		if (optMon[i].selected) {
			monIdx = i
			mon = i + '월'
		}
	}
	for (var i=0; i<optDate.length; i++) {
		if (optDate[i].selected) {
			dateIdx = i
			date = i + '일'
		}
	}
	monthType = M('#selMonth option').selector[monIdx].getAttribute('data-type')
	if (monthType === '0') {
		dateType = M('#selDate option').selector[dateIdx].getAttribute('data-ta')
	} else {
		dateType = M('#selDate option').selector[dateIdx].getAttribute('data-tb')
	}
	
	postMsg += '[인디언식 이름 짓기]\n';
	postMsg += '나의 인디언식 이름은\n';
	postMsg += selYear.value + ' ' + selMonth.value + dateType + selDate.value + ' 입니다.\n\n';
	postMsg += '뭐.. 참고로 생일은 ' + mon + ' ' + date + ' 입니다.\n\n';
	
	postMsg += 'http://goo.gl/Ppey0\n';
	
	urlMsg = {
		title: '인디언식 이름 짓기',
		desc: '리멤버!! ' + mon + ' ' + date ,
		imageurl: ['http://romeoh.github.io/kakaoStory/img/indian.jpg'],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : selYear.value + ' ' + selMonth.value + dateType + selDate.value,
		urlinfo : JSON.stringify(urlMsg)
    });
}


// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "인디언식 이름 짓기",
		url: "http://goo.gl/Ppey0",
		appid: "funnyApp",
		appver: "1.0",
		appname: "인디언식 이름 짓기",
		type: "link"
	});
}


































