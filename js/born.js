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
	var  sexType
		,userName = document.querySelector('#userName').value
		,postMsg = ''
		,dataRan = Math.floor(Math.random() * data.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	postMsg += '[내가 세상에 태어난 이유]\n\n';
	postMsg += userName + '님이 세상에 태어난 이유는 \n';
	postMsg += data[dataRan]['result'] + '\n';
	postMsg += 'http://goo.gl/8ns8E\n';

	urlMsg = {
		title: '내가 세상에 태어난 이유',
		desc: data[dataRan]['result'],
		imageurl: ['http://romeoh.github.io/kakaoStory/img/cake.jpg' ],
		type:'article'
	}
console.log(urlMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '내가 세상에 태어난 이유',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "내가 세상에 태어난 이유",
		url: "http://goo.gl/8ns8E",
		appid: "funnyApp",
		appver: "1.0",
		appname: "내가 세상에 태어난 이유",
		type: "link"
	});
}


data = [
	{'result': '돈을 많이 벌어서 잘먹고 잘살기 위해서 입니다.'},
	{'result': '취직하기 위해서 입니다.'},
	{'result': '영화배우가 되기 위해서 입니다.'},
	{'result': '부모님이 시켜서 입니다.'},
	{'result': '월급을 많이 받고 싶어서 입니다.'},
	{'result': '결혼하고 싶어서 입니다.'},
	{'result': '해외여행을 하고 싶어서 입니다.'},
	{'result': '별 이유 없습니다.'},
	{'result': '내 의지가 아니었습니다.'},
	{'result': '생일빵을 받고 싶어서 입니다.'},
	{'result': '애인이랑 무인도에 놀러가고 싶어서 입니다.'},
	{'result': '우리나라를 전쟁에서 구하고 싶어서 입니다.'},
	{'result': '부모님의 실수였습니다.'},
	{'result': '연예인을 만나보고 싶어서 입니다.'},
	{'result': '최고의 가수가 되고 싶어서 입니다.'},
	{'result': '짜장면을 먹고 싶어서 입니다.'},
	{'result': '우주 여행을 하고싶어서 입니다.'},
	{'result': '군대에 가보고 싶어서 입니다.'},
	{'result': '축구 선수가 되고 싶어서 입니다.'},
	{'result': '모태솔로를 벗어나기 위해서 입니다.'},
	{'result': '국가 기밀입니다.'},
	{'result': '일진이 되고 싶어서 입니다.'},
	{'result': '주차요원이 되고 싶어서 입니다.'},
	{'result': '사랑받기 위해 태어났습니다.'},
	{'result': '욕먹고 싶어서 태어났습니다.'},
	{'result': '해적이 되고 싶어서 입니다.'}
]
































