var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,data
	,lottoNum = []
	,bonus

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
	var  userName = document.querySelector('#userName').value
		,postMsg = ''
		,first = Math.floor(Math.random() * dataFirst.length)
		,last = Math.floor(Math.random() * dataLast.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	postMsg += '[태어나서 처음한말, 죽기전에 마지막말]\n\n';
	postMsg += M('#userName').val() + '님이 태어나서 처음 한말은 \n';
	postMsg += '"' + dataFirst[first] + '" 이며,\n\n';
	postMsg += '죽기전에 하는 마지막말은 \n';
	postMsg += '"' + dataLast[last] + '" 입니다.\n\n';
	
	postMsg += 'http://goo.gl/Jr6q0\n';

	urlMsg = {
		title: '태어나서 처음한말, 죽기전에 마지막말',
		desc: dataLast[last],
		imageurl: ['http://romeoh.github.io/kakaoStory/img/age.png' ],
		type:'article'
	}
console.log(postMsg, urlMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "태어나서 처음한말, 죽기전에 마지막말",
		url: "http://goo.gl/Jr6q0",
		appid: "funnyApp",
		appver: "1.0",
		appname: "태어나서 처음한말, 죽기전에 마지막말",
		type: "link"
	});
}


function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}


dataFirst = [
	'응애~',
	'뿌잉~',
	'오잉?',
	'Day One',
	'이제 시작이다!!',
	'인생 뭐있냐?',
	'출바~알~',
	'에공~ 고생 시작이구만~',
	'이거 흥미로운데~',
	'나 지금 떨고있니?',
	'날 내버려둬~',
	'거울 좀 주세요~',
	'GO! GO~',
	'대~ 한민국~'
]

dataLast = [
	'잘지내~',
	'굿바이~',
	'꺢~',
	'으악~',
	'이런 신발끈~',
	'이 게시판~',
	'아~ 사과나무 안 심었다~',
	'담에 봐~',
	'잘 살다 갑니다~',
	'역시 난 멋쪘어~',
	'그래도 지구는 돌겠네~',
	'난 혼자 못 가~',
	'뜨악~',
	'깨꾸딱~'
]































