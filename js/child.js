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
	var  userName = document.querySelector('#userName').value
		,message
		,postMsg = ''
		,children = ''
		,count = 0
		
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	postMsg += '[내 자녀수 알아보기]\n';
	postMsg += userName + '님은 ';

	// 아들 있음
	if (getRandom(0, 3) != 0) {
		boyCount = dataBoy[Math.floor(Math.random() * dataBoy.length)]
		boy = boyCount['child']
		count += parseInt(boyCount['count'], 10)
	} else {
		boy = ''
	}

	// 딸 있음
	if (getRandom(0, 3) != 0) {
		girlCount = dataGirl[Math.floor(Math.random() * dataGirl.length)]
		girl = girlCount['child']
		count += parseInt(girlCount['count'], 10)
	} else {
		girl = ''
	}

	// 쌍둥이 있음
	if (getRandom(0, 20) == 0) {
		twinCount = dataTwin[Math.floor(Math.random() * dataTwin.length)]
		twin = twinCount['child']
		count += parseInt(twinCount['count'], 10)
	} else {
		twin = ''
	}
	
	if (boy != '') {
		children += boy;	
	}

	if (girl != '') {
		if (children != '') {
			children += ', ' + girl;	
		} else {
			children += girl;
		}
	}

	if (twin != '') {
		if (children != '') {
			children += ', ' + twin;
		} else {
			children += twin;
		}
	}

	if (count == 0) {
		children = '무자식';
		special = '';
	} else {
		specialCount = getRandom(0, count)
		scount = dataCount[specialCount]
		if (count == 1) {
			scount = '그 자녀'
		} else {
			if (specialCount == count-1) {
				scount = '막내'
			}
		}
		specialStr = dataSpecial[Math.floor(Math.random() * dataSpecial.length)]
		special = '특히 ' + scount + '는 ' + specialStr + '\n\n'
	}
	
	postMsg += children + ' 입니다.\n';	
	postMsg += special
	postMsg += 'http://goo.gl/en4KS';

	urlMsg = {
		title: '내 자녀수 알아보기',
		desc: children + ' 입니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/child.png' ],
		type:'article'
	}

	console.log(postMsg, urlMsg, count)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '내 자녀수 알아보기',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "내 자녀수 알아보기",
		url: "http://goo.gl/en4KS",
		appid: "funnyApp",
		appver: "1.0",
		appname: "내 자녀수 알아보기",
		type: "link"
	});
}

function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}

dataBoy = [
	{'child': '아들 하나', 'count':'1'},
	{'child': '아들 하나', 'count':'1'},
	{'child': '아들 하나', 'count':'1'},
	{'child': '아들 하나', 'count':'1'},
	{'child': '아들 하나', 'count':'1'},
	{'child': '아들 하나', 'count':'1'},
	{'child': '아들 하나', 'count':'1'},
	{'child': '아들 하나', 'count':'1'},
	{'child': '아들 둘', 'count':'2'},
	{'child': '아들 둘', 'count':'2'},
	{'child': '아들 둘', 'count':'2'},
	{'child': '아들 둘', 'count':'2'},
	{'child': '아들 둘', 'count':'2'},
	{'child': '아들 둘', 'count':'2'},
	{'child': '아들 셋', 'count':'3'},
	{'child': '아들 셋', 'count':'3'},
	{'child': '아들 넷', 'count':'4'},
	{'child': '아들 다섯', 'count':'5'}
]

dataGirl = [
	{'child': '딸 하나', 'count':'1'},
	{'child': '딸 하나', 'count':'1'},
	{'child': '딸 하나', 'count':'1'},
	{'child': '딸 하나', 'count':'1'},
	{'child': '딸 하나', 'count':'1'},
	{'child': '딸 하나', 'count':'1'},
	{'child': '딸 하나', 'count':'1'},
	{'child': '딸 하나', 'count':'1'},
	{'child': '딸 둘', 'count':'2'},
	{'child': '딸 둘', 'count':'2'},
	{'child': '딸 둘', 'count':'2'},
	{'child': '딸 둘', 'count':'2'},
	{'child': '딸 둘', 'count':'2'},
	{'child': '딸 둘', 'count':'2'},
	{'child': '딸 셋', 'count':'3'},
	{'child': '딸 셋', 'count':'3'},
	{'child': '딸 넷', 'count':'4'},
	{'child': '딸 다섯', 'count':'5'}
]

dataTwin = [
	{'child': '두 쌍둥이', 'count':'2'},
	{'child': '두 쌍둥이', 'count':'2'},
	{'child': '두 쌍둥이', 'count':'2'},
	{'child': '두 쌍둥이', 'count':'2'},
	{'child': '두 쌍둥이', 'count':'2'},
	{'child': '두 쌍둥이', 'count':'2'},
	{'child': '세 쌍둥이', 'count':'3'},
	{'child': '세 쌍둥이', 'count':'3'},
	{'child': '네 쌍둥이', 'count':'4'}
]

dataCount = [
	'첫째',
	'둘째',
	'셋째',
	'넷째',
	'다섯째',
	'여섯째',
	'일곱째',
	'여덞째',
	'아홉째',
	'열째',
	'열한째',
	'열둘째',
	'열셋째',
	'막내'
]

dataSpecial = [
	'무지막지하게 많은 돈을 법니다.',
	'공부를 배터지게 잘합니다.',
	'국제적인 효자입니다.',
	'오리지널 영어 천재입니다.',
	'천재적인 괴짜 과학자가 됩니다.',
	'세계적인 리듬체조 선수가 되어 4관왕을 달성합니다.',
	'인터넷 얼짱이 되어 항상 사생팬들이 집앞에 개떼처럼 모여있습니다.',
	'KPOP스타에서 우승하여 말만해도 공기반 소리반입니다.',
	'어마어마한 귀요미입니다.',
	'안티가 하나도 없는 레알 존경받는 정치인이 됩니다.',
	'유능한 청와대 대변인이 되어 워싱턴에서 금의환향합니다.',
	'몸짱이 되어 을지로를 평정합니다.',
	'장충동 V라인이 됩니다.',
	'신사동 명품 화성인이 됩니다.',
	'카스 얼짱이 됩니다.'
]

























