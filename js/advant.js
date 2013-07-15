var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,jogeun0, jogeun1, jogeun2, jogeun3

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
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	
	setRandom(data)
	console.log(data[jogeun0])
	console.log(data[jogeun1])
	console.log(data[jogeun2])
	console.log(data[jogeun3])
	
	postMsg += '[나의 장점/단점]\n\n';
	postMsg += userName + '님은 \n';
	postMsg += data[jogeun0]['constinue'] + ', ';
	postMsg += data[jogeun1]['constinue'] + ', ';
	postMsg += data[jogeun2]['last'] + ', \n\n';
	postMsg += '단 한가지 아쉬운점... \n';
	postMsg += data[jogeun3]['fault'] + '\n';
	
	postMsg += 'http://goo.gl/AigRi';
	
	urlMsg = {
		title: '나의 장점/단점',
		desc: data[jogeun3]['fault'],
		imageurl: ['http://romeoh.github.io/kakaoStory/img/'],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
		post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '나의 장점/단점',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "나의 장점/단점",
		url: "http://goo.gl/AigRi",
		appid: "funnyApp",
		appver: "1.0",
		appname: "나의 장점/단점",
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































