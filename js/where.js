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
		,userName = document.querySelector('#userName').value
		,job = dataJob[Math.floor(Math.random() * dataJob.length)]
		,distance = getRandom(1, 300)
	
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	if (boySelect.className == 'checked') {
		postMsg += '[내 남친은 어디있나?]\n\n';
		postMsg += userName + '님의 남친의 직업은 ' + job + '입니다.\n';

	} else if (girlSelect.className == 'checked') {
		postMsg += '[내 여친은 어디있나?]\n\n';
		postMsg += userName + '님의 여친의 직업은 ' + job + '입니다.\n';
	}
	
	postMsg += '현재 ' + userName + '님과 ' + distance + 'km 떨어진곳에 있으며,\n';
	postMsg += getRandom(1, 36) + '개월 뒤 처음으로 만날 예정입니다.\n\n';
	postMsg += 'http://goo.gl/IJ4B5\n';

	urlMsg = {
		title: '내반쪽은 어디있나?',
		desc: distance + 'km 전방에 있습니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/where.jpg' ],
		type:'article'
	}

	console.log(postMsg, urlMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '내반쪽은 어디있나?',
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
		msg: "내반쪽은 어디있나?",
		url: "http://goo.gl/IJ4B5",
		appid: "funnyApp",
		appver: "1.0",
		appname: "내반쪽은 어디있나?",
		type: "link"
	});
}



dataJob = [
	'의사',
	'판사',
	'국회의원',
	'검사',
	'공무원',
	'청소부',
	'군인',
	'백수',
	'고시생',
	'편의점 알바생',
	'컴퓨터 프로그래머',
	'디자이너',
	'펀드매니저',
	'경찰',
	'도둑놈',
	'사기꾼',
	'이마트 캐셔',
	'경비원',
	'간호사',
	'선생님',
	'건달',
	'조직폭려배 행동대장',
	'학생',
	'당구장 알바생',
	'택배기사',
	'종합병원 환자',
	'예술가',
	'사업가',
	'슈퍼마켓 판매원',
	'호프집 알바생',
	'거지'
]






























