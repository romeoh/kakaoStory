var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	

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
		,idx = Math.floor(Math.random()*50) + 1
		,resultName, resultPhoto, resultMsg
		,message
		,postMsg = ''
		,test1 = getRandom(1, 99)
		,test2 = getRandom(1, 99)
		,test3 = getRandom(1, 99)
		,test4 = getRandom(1, 99)
		,test5 = getRandom(1, 99)
		,total = Math.round( (test1 + test2 + test3 + test4 + test5) / 5 )
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	
	postMsg += '[연애의 온도]\n';
	postMsg += userName + '님의 연애의 온도: \n\n';
	postMsg += '첫만남 : ' + test1 + '도씨 (' + getString(test1, 0) + ')\n';
	postMsg += '고백 : ' + test2 + '도씨 (' + getString(test2, 1) + ')\n';
	postMsg += '시킨쉽 : ' + test3 + '도씨 (' + getString(test3, 2) + ')\n';
	postMsg += '권태기 : ' + test4 + '도씨 (' + getString(test4, 3) + ')\n';
	postMsg += '이별 : ' + test5 + '도씨 (' + getString(test5, 4) + ')\n\n';
	postMsg += '연애의 온도 : ' + total + '도씨\n\n';

	
	postMsg += 'http://goo.gl/Xr6KF';
	
	urlMsg = {
		title: '연애의 온도',
		desc: total + '도씨',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/fick.png'],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
		post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '연애의 온도',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

function getString(str, idx) {
	if (str <= 35) {
		return strData[idx][0]
	}
	if (str > 35 && str <= 45) {
		return strData[idx][1]
	}
	if (str > 45 && str <= 55) {
		return strData[idx][2]
	}
	if (str > 55 && str <= 65) {
		return strData[idx][3]
	}
	if (str > 65) {
		return strData[idx][4]
	}
}

strData = [
	['매우 소극적으로 대쉬', '소극적으로 대쉬', '적당한 시기에 대쉬', '적극적으로 대쉬', '매우 적극적으로 대쉬'],
	['매우 소극적으로 고백', '소극적으로 고백', '적당한 시기에 고백', '적극적으로 고백', '매우 적극적으로 고백'],
	['매우 소극적 스킨십', '소극적 스킨십', '적당한 시기에 스킨십', '적극적으로 스킨십', '매우 적극적으로 스킨십'],
	['이미 다른 이성을 찾음', '매우 무관심', '상대방에게 별로 관심 없음', '극복하기 위해 노력함', '극복하기 위해 매우 노력함'],
	['이미 다른 이성이 있는 경우가 많음', '냉정하게 이별함', '차분하게 이별함', '상대방을 배려함', '상대방을 매우 배려함']
]

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "연애의 온도",
		url: "http://goo.gl/Xr6KF",
		appid: "funnyApp",
		appver: "1.0",
		appname: "연애의 온도",
		type: "link"
	});
}

function getRandom(min, max){
	return Math.floor((Math.random() * (max-min) + min))
}

data = [
	{'constinue':'키가 크고', 'last':'휀칠하게 키가 크지만', 'fault':'키가...Y.Y'},
	{'constinue':'진정한 시대의 얼짱이고', 'last':'얼굴만은 자신있지만', 'fault':'얼굴이 죄송합니다.T.T'},
	{'constinue':'돈이 많고', 'last':'가진 돈이 많지만', 'fault':'돈이 없어요.'},
	{'constinue':'인기가 많고', 'last':'인기가 많지만', 'fault':'사람들한테 왕따 당해요.'},
	{'constinue':'머리가 좋고', 'last':'머리가 엄청 좋지만', 'fault':'머리에 든게 없어요.'},
	{'constinue':'유머가 있고', 'last':'유머러스 하지만', 'fault':'유머 감각이 없어요.'},
	{'constinue':'싸움을 잘하고', 'last':'누구와 싸움에서 지지는 않지만', 'fault':'싸움을 못해요.'},
	{'constinue':'노래를 잘하고', 'last':'노래를 정말 잘하지만', 'fault':'음치박치에요.'},
	{'constinue':'매너 있고', 'last':'매너 짱이지만', 'fault':'매너가 똥이랍니다.'},
	{'constinue':'배려심이 많고', 'last':'배려심이 아주 많지만', 'fault':'배려심이 없어요.'},
	{'constinue':'일편단심 스타일이고', 'last':'한사람만 바라보는 일편단심 스타일 이지만', 'fault':'바람둥이에요.'},
	{'constinue':'옷을 잘 입고', 'last':'돋보이는 패셔니스타지만', 'fault':'패션이 촌스러워요.'},
	{'constinue':'몸매가 좋고', 'last':'몸매에 자신있지만', 'fault':'몸매가 나빠요..'},
	{'constinue':'섹시 하고', 'last':'섹시가 철철 넘치지만', 'fault':'섹시하지 않아요.'},
	{'constinue':'능력 있고', 'last':'능력 있지만', 'fault':'능력없는 백수랍니다.'},
	{'constinue':'세련 되고', 'last':'온몸이 세련되어 보이지만', 'fault':'촌스러워요.'},
	{'constinue':'영리해 보이고', 'last':'똑똑해 보이지만', 'fault':'띨 해보여요~'}
]































