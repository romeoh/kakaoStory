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
		,selAlpha = document.querySelector('#selAlpha')
		,data
	
	if (selAlpha.value == '') {
		alert('떠오르는 알바벳을 고르세요.');
		return;
	}
	
	data = dataAlpha[selAlpha.value]
	
	postMsg += '[색깔로 알아보는 심리테스트]\n\n';
	postMsg += '나는 ' + data.alpha + '을 좋아하는\n';
	postMsg += data.result + '입니다.\n\n';
	
	postMsg += 'http://goo.gl/DC9X8\n';
	
	urlMsg = {
		title: '색깔로 알아보는 심리테스트',
		desc: '나는 ' + data.result + '입니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + data.img],
		type:'article'
	}
	console.log(postMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : data.alpha,
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "뭐 내세울게 있나요?",
		url: "http://goo.gl/DC9X8",
		appid: "funnyApp",
		appver: "1.0",
		appname: "색깔로 알아보는 심리테스트",
		type: "link"
	});
}


// 남자
dataAlpha = [
	{'img': 'alpha0.jpg', 'alpha': 'A', 'result': '금방 싫증내는 사람'},
	{'img': 'alpha1.jpg', 'alpha': 'B', 'result': '편안한 사람'},
	{'img': 'alpha2.jpg', 'alpha': 'C', 'result': '싸가지가 없는 사람'},
	{'img': 'alpha3.jpg', 'alpha': 'D', 'result': '좋아하고 싶은 사람'},
	{'img': 'alpha4.jpg', 'alpha': 'E', 'result': '못된 사람'},
	{'img': 'alpha5.jpg', 'alpha': 'F', 'result': '재수없는 사람'},
	{'img': 'alpha6.jpg', 'alpha': 'G', 'result': '결혼하고 싶은 사람'},
	{'img': 'alpha7.jpg', 'alpha': 'H', 'result': '부드러운 사람'},
	{'img': 'alpha8.jpg', 'alpha': 'I', 'result': '자기가 맡은일에 충실한 사람'},
	{'img': 'alpha9.jpg', 'alpha': 'J', 'result': '귀여운 사람'},
	{'img': 'alpha10.jpg', 'alpha': 'K', 'result': '섹시한 사람'},
	{'img': 'alpha11.jpg', 'alpha': 'L', 'result': '잔인한 사람'},
	{'img': 'alpha12.jpg', 'alpha': 'M', 'result': '꽃 같이 아름다운 사람'},
	{'img': 'alpha13.jpg', 'alpha': 'N', 'result': '자기 주장이 강한 사람'},
	{'img': 'alpha14.jpg', 'alpha': 'O', 'result': '외모가 완벽한 사람'},
	{'img': 'alpha15.jpg', 'alpha': 'P', 'result': '죽도록 싫은 사람'},
	{'img': 'alpha16.jpg', 'alpha': 'Q', 'result': '똑똑한 사람'},
	{'img': 'alpha17.jpg', 'alpha': 'R', 'result': '모범적인 사람'},
	{'img': 'alpha18.jpg', 'alpha': 'S', 'result': '막말을 잘하는 사람'},
	{'img': 'alpha19.jpg', 'alpha': 'T', 'result': '스타일이 좋은 사람'},
	{'img': 'alpha20.jpg', 'alpha': 'U', 'result': '사랑스러운 사람'},
	{'img': 'alpha21.jpg', 'alpha': 'V', 'result': '씩씩한 사람'},
	{'img': 'alpha22.jpg', 'alpha': 'W', 'result': '식탐이 많은 사람'},
	{'img': 'alpha23.jpg', 'alpha': 'X', 'result': '친구하고 싶은 사람'},
	{'img': 'alpha24.jpg', 'alpha': 'Y', 'result': '장난기가 많은 사람'},
	{'img': 'alpha25.jpg', 'alpha': 'Z', 'result': '잠이 많은 사람'}
]































