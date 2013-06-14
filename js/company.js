var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataMale, dataFemale
	,jogeun0, jogeun1, jogeun2 

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
	var  sexType, userName
		,age = document.getElementById('userAge').value
		,userName = document.querySelector('#userName').value
		,resultName, resultPhoto, resultMsg
		,message	//
		
		,companyIdx = Math.floor(Math.random() * dataCompany.length)
		,dataUpjongIdx = Math.floor(Math.random() * dataUpjong.length)
		,dataPayIdx = Math.floor(Math.random() * dataPay.length)
		,dataAreaIdx = Math.floor(Math.random() * dataArea.length)
		,dataLevelIdx = Math.floor(Math.random() * dataLevel.length)
		,postMsg = ''
		,urlMsg = {
			title: dataCompany[companyIdx]['name'] + ' 인사팀',
			desc: dataCompany[companyIdx]['name'] + '에서 ' + userName + '님을 스카웃 하려 합니다.',
			imageurl: ['http://romeoh.github.io/kakaoStory/imgCom/' + dataCompany[companyIdx]['photo']],
			type:'article'
		}
	
	setRandom(dataJogun)
	postMsg += dataCompany[companyIdx]['name'] + '에서 ' + userName + '님을 ' + dataUpjong[dataUpjongIdx] + ' 스카웃 하려 합니다.\n\n';
	postMsg += '[대우]\n';
	postMsg += '1. 연봉: ' + dataPay[dataPayIdx] + '\n';
	postMsg += '2. 근무지: ' + dataArea[dataAreaIdx] + '\n';
	postMsg += '3. 직급: ' + dataLevel[dataLevelIdx] + '\n\n';
	postMsg += '[조건]\n';
	postMsg += '1. '+dataJogun[jogeun0]+'\n';
	postMsg += '2. '+dataJogun[jogeun1]+'\n';
	postMsg += '3. '+dataJogun[jogeun2]+'\n\n';
	postMsg += 'http://goo.gl/QWPHM';
	
	if (age == '') {
		alert('생년을 입력해 주세요.');
		return false;
	}
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	kakao.link("story").send({   
		post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '냉철한 대기업 인재 사냥꾼',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

function setRandom(data){
	var idx = Math.floor(Math.random() * data.length)
	if (jogeun0 == undefined) {
		jogeun0 = idx;
	}
	if (jogeun1 == undefined) {
		if (jogeun0 == idx) {
			setRandom(data)
		} else {
			jogeun1 = idx;
		}
	}
	if (jogeun2 == undefined) {
		if (jogeun0 == idx || jogeun1 == idx) {
			setRandom(data)
		} else {
			jogeun2 = idx;
			return jogeun2;
		}
	}
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "냉철한 대기업 인재 사냥꾼",
		url: "http://goo.gl/QWPHM",
		appid: "funnyApp",
		appver: "1.0",
		appname: "냉철한 대기업 인재 사냥꾼",
		type: "link"
	});
}


dataCompany = [
	{'name': '삼성전자', 'photo': 'group_logo_samsung.gif'},
	{'name': '한국전력공사', 'photo': 'group_logo_kepco.gif'},
	{'name': '현대자동차', 'photo': 'group_logo_hyundai_motor.gif'},
	{'name': 'SK텔레콤', 'photo': 'group_logo_sk.gif'},
	{'name': 'LG전자', 'photo': 'group_logo_lg.gif'},
	{'name': '대한주택공사', 'photo': 'group_logo_knhc.gif'},
	{'name': '롯데제과', 'photo': 'group_logo_lotte.gif'},
	{'name': '한국도로공사', 'photo': 'group_logo_freeway.gif'},
	{'name': '포스코', 'photo': 'group_logo_posco.gif'},
	{'name': '한국토지공사', 'photo': 'group_logo_iklc.gif'},
	{'name': 'GS칼텍스', 'photo': 'group_logo_gs.gif'},
	{'name': '현대중공업', 'photo': 'group_logo_hhi.gif'},
	{'name': 'KT', 'photo': 'group_logo_kt.gif'},
	{'name': '금호아시아나', 'photo': 'group_logo_kumho.gif'},
	{'name': '한진중공업', 'photo': 'group_logo_hanjin.gif'},
	{'name': '한화금융', 'photo': 'group_logo_hanwha.gif'},
	{'name': '두산중공업', 'photo': 'group_logo_doosan.gif'},
	{'name': '하이닉스', 'photo': 'group_logo_hynix.gif'},
	{'name': '한국철도공사', 'photo': 'group_logo_korail.gif'},
	{'name': '한국가스공사', 'photo': 'group_logo_kogas.gif'},
	{'name': 'STX', 'photo': 'group_logo_stx.gif'},
	{'name': '신세계', 'photo': 'group_logo_shinsegae.gif'},
	{'name': 'CJ그룹', 'photo': 'group_logo_cj.gif'},
	{'name': 'LS홀딩스', 'photo': 'group_logo_lsholdings.gif'},
	{'name': '동부증권', 'photo': 'group_logo_dongburo.gif'},
	{'name': '대림건설', 'photo': 'group_logo_daelim.gif'},
	{'name': '현대그룹', 'photo': 'group_logo_hyundaigroup.gif'},
	{'name': '대우조선해양', 'photo': 'group_logo_dsme.gif'},
	{'name': 'KCC', 'photo': 'kcc_logo.gif'},
	{'name': 'GM대우', 'photo': 'group_logo_gmdaewoo.gif'}
]

dataUpjong = [
	'기업가치평가전문가로',
	'투자상담사로',
	'경비직으로',
	'기능직으로',
	'생산직으로',
	'단순노무직으로',
	'비서직으로',
	'청소요원으로',
	'회장직으로',
	'계열사사장직으로',
	'전산직으로',
	'공해방지전문가으로',
	'인터넷담당중역으로',
	'배달직으로',
	'텔레커뮤니케이션/무선통신기술자로',
	'트럭운전사로',
	'다이어트프로그래머로',
	'정보시스템감리사로',
	'헬스케어전문가로',
	'여행상품기획가로',
	'데이터베이스관리자로',
	'감정평가사로',
	'국제법학자로',
	'생명공학엔지니어로',
	'노인작업치료사로',
	'컴퓨터프로그래머로',
	'이벤트기획자로',
	'정책보좌관으로',
	'보험계리사로',
	'외환딜러로',
	'컨벤션기획자로',
	'유텔인터내셔널으로',
	'큐레이터로',
	'소믈리에(와인 감별사)로',
	'아쿠아리스트로',
	'항공기정비사로'
]

dataPay = [
	'연봉 1억원',
	'연봉 2억원',
	'연봉 3억원',
	'연봉 5억원',
	'연봉 10억원',
	'연봉 20억원',
	'연봉 30억원',
	'연봉 50억원',
	'연봉 100억원',
	'연봉 200억원',
	'연봉 300억원',
	'연봉 500억원',
	'연봉 1,000억원',
	'연봉 1,000만원',
	'연봉 2,000만원',
	'연봉 3,000만원',
	'연봉 5,000만원',
	'시급 4,860원',
	'시급 5,000원',
	'시급 10,000원',
	'시급 15,000원',
	'시급 20,000원'
]


dataArea = [
	'수도권',
	'서울',
	'강남',
	'여의도',
	'경기도',
	'충청도',
	'전라도',
	'경상도',
	'제주도',
	'강원도',
	'두메산골',
	'마을 읍내',
	'미국 워싱턴 현지',
	'중국 베이징 현지',
	'일본 도쿄 현지',
	'아프리카 케냐 현지',
	'재택근무'
]

dataLevel = [
	'말단사원',
	'인턴사원',
	'사원',
	'대리',
	'주임',
	'과장',
	'부장',
	'차장',
	'상무',
	'전무',
	'이사',
	'대표이사'
]

dataJogun = [
	'주 7일 근무',
	'4대 보험',
	'스톡옵션 제공',
	'야근간식 무제한 제공',
	'개인비서 제공',
	'의전차량 제공',
	'항공기 퍼스트 클래스 이용권 제공',
	'인터넷되는 노트북 지급',
	'지하철 경로석 이용권 지급',
	'개인 경호원 제공',
	'무제한 법인 카드 지급',
	'개인 동시통역관 지원',
	'타워팰리스 지급',
	'와이파이 되는 최신 스마트폰 지급',
	'햄버거와 콜라 무한 제공',
	'개그콘서트 방청권 매주 지급'
]










