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
		

	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}
	
	postMsg += '[애인구함]\n\n';
	
	if (boySelect.className == 'checked') {
		// 남자일 경우
		data = dataGirl[Math.floor(Math.random() * dataGirl.length)]
	} else if (girlSelect.className == 'checked') {
		// 여자 경우
		data = dataBoy[Math.floor(Math.random() * dataBoy.length)]
	}
	postMsg += data + '\n\n';
	postMsg += 'http://goo.gl/DrQFt \n\n';
	
	urlMsg = {
		title: '애인구함',
		desc: data,
		imageurl: ['http://romeoh.github.io/kakaoStory/img/wanted.png' ],
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

//console.log(getRandom(10, 20))
function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}
// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "애인구함",
		url: "http://goo.gl/DrQFt",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}



// 
dataBoy = [
	'절대복종',
	'일편단심',
	'유부녀 절대사절',
	'초보자환영',
	'경력자사절',
	'상시대기',
	'조건없음',
	'얼굴안봄',
	'150cm이상환영',
	'동반솔로탈출',
	'무한애정행각',
	'나이, 학력, 외모 제한없음',
	'주7일 데이트',
	'솔로입니다. 언제든지 작업해주세요.',
	'무조건 급구!!',
	'총각이 썩어가고 있습니다.',
	'모든재산 공개',
	'핸드폰 비번 공개',
	'현상금: 1,000만원',
	'선착순 1명',
	'반품불가',
	'체력보장'
]

dataGirl = [
	'절대복종',
	'일편단심',
	'유부남 절대사절',
	'초보자환영',
	'경력자사절',
	'상시대기',
	'조건없음',
	'얼굴안봄',
	'160cm이상환영',
	'동반솔로탈출',
	'무한애정행각',
	'나이, 학력, 외모 제한없음',
	'주7일 데이트',
	'솔로입니다. 언제든지 작업해주세요.',
	'무조건 급구!!',
	'지금 저는 최고 절정기 입니다.',
	'핸드폰 비번 공개',
	'현상금: 1,000만원',
	'반품불가',
	'선착순 1명'
]































