var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	
	,dataDrink, dataMount, dataAction
	,img

if (os == 'ios' || os == 'android') {
	
} else {
	//var  adTop = document.querySelector('#adTop')
	//	,adBottom = document.querySelector('#adBottom')
	//document.querySelector('body').removeChild(adTop)
	//document.querySelector('body').removeChild(adBottom)
}

window.addEventListener('DOMContentLoaded', ready, false);

function ready(){
	initLayout();
}

function initLayout(){
	
}









//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
	
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}
	
	if (boySelect.className == 'checked') {
		// 남자일 경우
		postMsg += '[내 남친의 조건]\n\n';
		dataRan = Math.floor(Math.random() * dataFemale.length)
		data = dataFemale[dataRan]
		img = 'http://romeoh.github.io/kakaoStory/img/loverMan.jpg'
	} else if (girlSelect.className == 'checked') {
		// 여자일 경우
		postMsg += '[내 여친의 조건]\n\n';
		dataRan = Math.floor(Math.random() * dataMale.length)
		data = dataMale[dataRan]
		img = 'http://romeoh.github.io/kakaoStory/img/loverWoman.jpg'
	}
	
	postMsg += '내 이상형이요? 딴건 안봅니다.\n';
	postMsg += data + '\n\n';
	postMsg += 'http://goo.gl/VbOvP\n';
	
	urlMsg = {
		title: '내 이상형의 조건',
		desc: '딴건 안봅니다.',
		imageurl: [img],
		type:'article'
	}
	console.log(postMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '내 이상형의 조건',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "딴건 안봅니다.",
		url: "http://goo.gl/VbOvP",
		appid: "funnyApp",
		appver: "1.0",
		appname: "내 이상형의 조건",
		type: "link"
	});
}






































