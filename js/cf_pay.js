var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
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

window.addEventListener('DOMContentLoaded', function(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}, false);


//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,dataRan = Math.floor(Math.random() * data.length)
		,artcle = data[dataRan]['article']
	
	postMsg += '그에게 짜기만 했던 시간\n\n';
	postMsg += '"누가 내' + artcle + '에 소금쳤어!!!"\n\n';
	postMsg += artcle + '의 반전\n\n';
	
	postMsg += 'http://goo.gl/WQrwI\n';
	
	urlMsg = {
		title: 'CF 패러디',
		desc: '누가 내' + artcle + '에 소금쳤어!!!',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/cf_pay_thum.png'],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '누가 내 시급에 소금쳤어!!',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "CF 패러디",
		url: "http://goo.gl/WQrwI",
		appid: "funnyApp",
		appver: "1.0",
		appname: "누가 내 시급에 소금쳤어!!",
		type: "link"
	});
}


data = [
	{'article': '월급'},
	{'article': '결혼'},
	{'article': '가정'},
	{'article': '회사'},
	{'article': '밥'},
	{'article': '카카오 스토리'},
	{'article': '카톡'},
	{'article': '집'},
	{'article': '용돈'},
	{'article': '스마트폰'},
	{'article': '궁뎅이'},
	{'article': '다리'},
	{'article': '마음'},
	{'article': '연애'},
	{'article': '첫사랑'},
	{'article': '시험'},
	{'article': '멘탈'},
	{'article': '양말'},
	{'article': '패션'},
	{'article': '나이'},
	{'article': '이름'},
	{'article': '인생'},
	{'article': '친구한테'},
	{'article': '연금'},
	{'article': '사진'}
]




































