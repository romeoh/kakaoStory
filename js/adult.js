var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataMale, dataFemale
	,present0, present1, present2

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
	var  sexType, userName
		,age = document.getElementById('userAge').value
		,resultName, resultPhoto, resultMsg
		,message	//
		
		,postMsg = ''
		,urlMsg = {
			title: ' 인사팀',
			desc: '에서 ',
			imageurl: ['http://romeoh.github.io/kakaoStory/imgCom/'],
			type:'article'
		}
	
	setRandom(dataPresent)

	postMsg += '성년의 날 받고싶은 선물 3가지\n';
	postMsg += '[5월 20일 월요일]\n\n';
	postMsg += '1. '+dataPresent[present0]['present']+'\n';
	postMsg += '2. '+dataPresent[present1]['present']+'\n';
	postMsg += '3. '+dataPresent[present2]['present']+'\n\n';
	postMsg += 'http://goo.gl/QWPHM';
	

	if (age == '') {
		alert('생년을 입력해 주세요.');
		return false;
	}
	
	console.log(postMsg)

	kakao.link("story").send({   
		post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '냉철한 대기업 인재 사냥꾼',
		urlinfo : JSON.stringify(urlMsg)
    });
}

function setRandom(data){
	var idx = Math.floor(Math.random() * data.length)
	if (present0 == undefined) {
		present0 = idx;
	}
	if (present1 == undefined) {
		if (present0 == idx) {
			setRandom(data)
		} else {
			present1 = idx;
		}
	}
	if (present2 == undefined) {
		if (present0 == idx || present1 == idx) {
			setRandom(data)
		} else {
			present2 = idx;
			return present2;
		}
	}
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "냉철한 대기업 인재 사냥꾼",
		url: "http://goo.gl/QWPHM",
		appid: "funnyApp",
		appver: "1.0",
		appname: "냉철한 대기업 인재 사냥꾼",
		type: "link"
	});
}



dataPresent = [
	{'present':'향수1', 'photo':'0'},
	{'present':'향수2', 'photo':'0'},
	{'present':'향수3', 'photo':'0'},
	{'present':'향수4', 'photo':'0'},
	{'present':'향수5', 'photo':'0'},
	{'present':'향수6', 'photo':'0'},
	{'present':'향수7', 'photo':'0'},
	{'present':'향수8', 'photo':'0'},
	{'present':'향수9', 'photo':'0'},
	{'present':'향수10', 'photo':'0'},
	{'present':'향수11', 'photo':'0'},
	{'present':'향수12', 'photo':'0'},
]










