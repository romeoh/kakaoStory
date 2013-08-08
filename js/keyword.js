var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,jogeun0, jogeun1, jogeun2, jogeun3, jogeun4



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
		,space = ''
		,userNameLength = 36 - userName.length
		,word = []
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	setRandom(data)
	word.push(data[jogeun0]['key'])
	word.push(data[jogeun1]['key'])
	word.push(data[jogeun2]['key'])
	word.push(data[jogeun3]['key'])
	word.push(data[jogeun4]['key'])
	for (var i=0; i<userNameLength; i++) {
		space += ' ';
	}

	//console.log(userName.length, space.length)

	postMsg += '[나의 연관검색어]\n\n';
	postMsg += '┏━━━━━━━━━━━━━━━━━━━━━━━━\n';
	postMsg += '┃' + userName + space + '▼ [검색]\n';
	postMsg += '┡━━━━━━━━━━━━━━━━━━━━━━━━\n';

	for (var i=0; i<5; i++) {
		postMsg += '│' + userName + ' ' + word[i] + ' \n';
		if (i != 4) {
			postMsg += '├────────────────────────\n';
		}
	}
	postMsg += '└────────────────────────\n\n';
	
	postMsg += 'http://goo.gl/uAj2cA';
	
	urlMsg = {
		title: '나의 연관검색어',
		desc: '악플금지!!\n안보인다 막말마라 추적하면 다나온다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/keyword.png'],
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
		msg: "나의 연관검색어",
		url: "http://goo.gl/uAj2cA",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
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
	if (jogeun3 == undefined) {
		if (jogeun0 == idx || jogeun1 == idx || jogeun2 == idx) {
			setRandom(data)
		} else {
			jogeun3 = idx;
			return jogeun3;
		}
	}
	if (jogeun4 == undefined) {
		if (jogeun0 == idx || jogeun1 == idx || jogeun2 == idx || jogeun3 == idx) {
			setRandom(data)
		} else {
			jogeun4 = idx;
			return jogeun4;
		}
	}
}


data = [
	{'key':'키'},
	{'key':'공항장애'},
	{'key':'야동'},
	{'key':'클라라 스캔들'},
	{'key':'욕'},
	{'key':'단신'},
	{'key':'머리크기'},
	{'key':'실제성격'},
	{'key':'멘붕'},
	{'key':'초딩몸매'},
	{'key':'입냄새'},
	{'key':'비호감'},
	{'key':'나이'},
	{'key':'동안'},
	{'key':'카카오톡주소'},
	{'key':'폐인'},
	{'key':'냄새'},
	{'key':'프로필'},
	{'key':'어장관리'},
	{'key':'썰렁'},
	{'key':'얼짱'},
	{'key':'폭풍노안'},
	{'key':'아이큐'},
	{'key':'내꺼야'},
	{'key':'재산'},
	{'key':'애교'},
	{'key':'억대연봉'},
	{'key':'안습'},
	{'key':'매너손'},
	{'key':'잠옷패션'},
	{'key':'공항패션'},
	{'key':'과거사진'},
	{'key':'성형전 사진'},
	{'key':'음모론'},
	{'key':'모태솔로'},
	{'key':'바람기'},
	{'key':'술주정'},
	{'key':'몸무게'},
	{'key':'속도위반'},
	{'key':'연락처'},
	{'key':'저질몸매'},
	{'key':'망언'},
	{'key':'몸개그'},
	{'key':'동영상'},
	{'key':'실제키'},
	{'key':'노출'},
	{'key':'개드립'},
	{'key':'변태'},
	{'key':'나온 방송'},
	{'key':'스타일'},
	{'key':'혈액형'},
	{'key':'삼각관계'},
	{'key':'못친소'},
	{'key':'깔창'}
]






















































































