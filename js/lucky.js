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

window.addEventListener('DOMContentLoaded', function(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}, false);


//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,selIndian = document.querySelector('#selIndian')
		,data
	
	if (selIndian.value == '-1') {
		alert('인디안 부족을 고르세요.');
		return;
	}
	
	data = dataIndian[selIndian.value]
	
	postMsg += '[행운의 인디안 부적]\n\n';
	postMsg += '"' + data.result + ':"\n';
	postMsg += data.article + '\n\n';
	
	postMsg += 'http://goo.gl/1eJ1L\n';
	
	urlMsg = {
		title: '행운의 인디안 부적',
		desc: data.result,
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + data.img],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '인디인 부적',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "행운의 인디안 부적",
		url: "http://goo.gl/1eJ1L",
		appid: "funnyApp",
		appver: "1.0",
		appname: "행운의 인디안 부적",
		type: "link"
	});
}


// 남자
dataIndian = [
	{'img': 'indian0.png', 'result': '돈이 많이 생기게 하는 부적', 'article': '이 부적을 지닌 사람은 많은 돈이 생깁니다. \n길거리에서 돈을 줍는 깨알같은 행운이 있을 수도 있습니다.'},
	{'img': 'indian1.png', 'result': '6개월 안에 남친이 생기게 하는 부적', 'article': '혼자라구요? 이 부적을 지닌 사람은 6개월안에 멋진 남친이 생깁니다.'},
	{'img': 'indian2.png', 'result': '6개월 안에 여친이 생기게 하는 부적', 'article': '이 부적을 지닌 사람은 6개월안에 친구들이 부러워하는 예쁜 여자친구가 생깁니다.'},
	{'img': 'indian3.png', 'result': '대기업에 취직하게 하는 부적', 'article': '이 부적을 지닌 사람은 원하는 기업에 취직할 수 있습니다.'},
	{'img': 'indian4.png', 'result': '시험 95점 이상 받게 하는 부적', 'article': '이 부적을 지닌 사람은 시험에서 원하는 점수를 얻을수 있습니다.'},
	{'img': 'indian5.png', 'result': '아들 낳게 하는 부적', 'article': '이 부적을 지닌 사람은 건강하고 잘생긴 아들을 낳게 합니다.'},
	{'img': 'indian6.png', 'result': '딸 낳게 하는 부적', 'article': '이 부적을 지닌 사람은 예쁜 딸을 낳을수 있습니다.'},
	{'img': 'indian7.png', 'result': '아픈곳 낫게 하는 부적', 'article': '이 부적을 지닌 사람이 아프다면 빨리 낫을수 있습니다.'},
	{'img': 'indian8.png', 'result': '사업 성공하는 부적', 'article': '이 부적을 지닌 사람은 사업에서 성공할수 있습니다.'},
	{'img': 'indian9.png', 'result': '로또에 당첨되는 부적', 'article': '이 부적을 지닌 사람은 로또같은 큰 행운을 얻을수 있습니다.'},
	{'img': 'indian10.png', 'result': '큰 행운이 오는 부적', 'article': '이 부적을 지닌 사람은 큰 행운이 찾아옵니다.'},
	{'img': 'indian11.png', 'result': '가족이 화목하게 하는 부적', 'article': '이 부적을 지닌 사람의 가족은 화목하게 지냅니다.'},
	{'img': 'indian12.png', 'result': '회사에서 승진하는 부적', 'article': '이 부적을 지닌 사람은 회사에서 승진하게 됩니다.'},
	{'img': 'indian13.png', 'result': '유명인이 되는 부적', 'article': '이 부적을 지닌 사람은 유명해져 대중에게 존경을 받습니다.'},
	{'img': 'indian14.png', 'result': '시험에 합격하는 부적', 'article': '이 부적을 지닌 사람은 시험에 합격하게 됩니다.'},
	{'img': 'indian15.png', 'result': '이성에게 데시받는 부적', 'article': '이 부적을 지닌 사람은 이성에게 구애를 받을수 있습니다.'},
	{'img': 'indian16.png', 'result': '좋은 친구가 생기는 부적', 'article': '이 부적을 지닌 사람은 평생의 좋은친구를 만나게 됩니다.'},
	{'img': 'indian17.png', 'result': '칭찬 받는 부적', 'article': '이 부적을 지닌 사람은 칭찬을 들으며 \n하는 일마다 승승장구 하게 됩니다.'}
]































