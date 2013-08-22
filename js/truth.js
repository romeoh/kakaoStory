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
}, false);


//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,selTruth = document.querySelector('#selTruth')
		,answer = getRandom(0, 2)
	
	if (selTruth.value == '-1') {
		alert('진실의 입에 물어보세요.');
		return;
	}
	
	result = data[selTruth.value]
	if (answer === 0) {
		answer = result['yes']
		desc = '축하합니다.'
	} else {
		answer = result['no']
		desc = '힘내요.'
	}

	postMsg += '[진실의 입]\n\n';
	postMsg += '진실의 입에 물어봤습니다.\n';
	postMsg += '진실의 입아~ "' + result['title'] + '"\n\n\n';
	postMsg += '진실의 입의 답: "' + answer + '"\n\n';
	
	postMsg += 'http://goo.gl/mJYRGS\n';
	
	urlMsg = {
		title: '진실의 입',
		desc: desc,
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/truth.png'],
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
		msg: "진실의 입",
		url: "http://goo.gl/mJYRGS",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}

function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}


data = [
	{'title': '나는 예쁘니?', 'yes':'네, 아주 예쁩니다.', 'no':'아니요. 미안합니다.'},
	{'title': '나는 잘생겼냐?', 'yes':'네, 아주 잘생겼습니다.', 'no':'아니요. 죄송합니다.'},
	{'title': '나는 섹시하냐?', 'yes':'네, 아주 섹시합니다.', 'no':'아니요. ㅋㅋㅋ'},
	{'title': '내 여친은 예쁠것인가?', 'yes':'네, 완전 예쁩니다.', 'no':'아니요. 기대 마세요.'},
	{'title': '내 남친은 잘 생겼을것인가?', 'yes':'네, 완전 잘생겼습니다.', 'no':'아니요. 그냥 혼자 사세요.'},
	{'title': '나는 원하는 대학에 갈것인가?', 'yes':'네, 그 대학에 갑니다.', 'no':'아니요. 기술을 배워보세요.'},
	{'title': '사람들이 나를 진심으로 좋아하나?', 'yes':'네, 진심으로 좋아합니다.', 'no':'아니요. 뒤를 조심하세요.'},
	{'title': '기말고사 성적이 오를 것인가?', 'yes':'네, 성적이 오릅니다.', 'no':'아니요. 말 안할래요.'},
	{'title': '연봉 1억을 달성 할것인가?', 'yes':'네, 1억을 훨씬 넘깁니다.', 'no':'아니요. 힘들겠는데요.'},
	{'title': '나는 장수할것인가?', 'yes':'네, 무지막지하게 오래삽니다.', 'no':'아니요. 건강 챙기세요.'},
	{'title': '나는 바람둥이인가?', 'yes':'네, 여기저기 떡밥을 깝니다.', 'no':'아니요. 한명이라도 사귀면 훈륭합니다.'}
]































