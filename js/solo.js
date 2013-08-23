var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,data
	,lottoNum = []
	,bonus



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
		,solor = Math.floor(Math.random() * data.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	postMsg += '[나는 언제까지 솔로인가?]\n\n';
	postMsg += M('#userName').val() + '님은 ' + data[solor]['when'] + '까지만 솔로입니다.\n\n';
	postMsg += '그 후로 부터는 쭉~ 커플입니다.\n\n';
	
	postMsg += 'http://goo.gl/GOIAaR\n';

	urlMsg = {
		title: '나는 언제까지 솔로인가?',
		desc: '조금만 참자!!\n' + data[solor]['when'] + '까지만...',
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/solo.png' ],
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
		msg: "나는 언제까지 솔로인가?",
		url: "http://goo.gl/GOIAaR",
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
	{'when': '남북이 통일되는 날'},
	{'when': '일본이 역사를 진심으로 반성하는 날'},
	{'when': '이번 여름'},
	{'when': '올해'},
	{'when': '내년'},
	{'when': '이번 달'},
	{'when': '다음 달'},
	{'when': '로또에 당첨되는 날'},
	{'when': '이번 추석'},
	{'when': '내년 발렌타인데이'},
	{'when': '내년 화이트데이'},
	{'when': '갤럭시S8이 출시되는 날'},
	{'when': '아이폰9S가 출시되는 날'},
	{'when': '올해 첫눈 오는날'},
	{'when': '다음 대통령선거 날'},
	{'when': '내년 만우절'},
	{'when': '퇴직금 받는 날'},
	{'when': '이번 수능일'},
	{'when': '이번 크리스마스'},
	{'when': '이번 생애'}
] 
































