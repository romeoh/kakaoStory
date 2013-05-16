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
		,urlMsg
	
	if (age == '') {
		alert('생년을 입력해 주세요.');
		return false;
	}
	if (age > 1994) {
		postMsg += '내가 성년이 되었을때 꼭 받고싶은 선물 3가지\n';
		//console.log('받고싶을 선물')
	} else if (age < 1993) {
		postMsg += '성년의 날 못 받았던 선물 3가지\n';
	} else {
		postMsg += '성년의날 받고싶은 선물 3가지\n';
	}

	setRandom(dataPresent)

	postMsg += '[5월 20일 월요일]\n\n';
	postMsg += '1. '+dataPresent[present0]['present']+'\n';
	postMsg += '2. '+dataPresent[present1]['present']+'\n';
	postMsg += '3. '+dataPresent[present2]['present']+'\n\n';
	postMsg += 'http://goo.gl/HZtpR';
	
	urlMsg = {
			title: '성년의날 받고싶은 선물 3가지',
			desc: '성년의 날 받고싶은 선물 3가지',
			imageurl: ['http://romeoh.github.io/kakaoStory/img/' + dataPresent[present0]['photo']],
			type:'article'
		}

	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
		post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '5월 20일',
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
		msg: "성년의 날 받고싶은 선물 3가지",
		url: "http://goo.gl/HZtpR",
		appid: "funnyApp",
		appver: "1.0",
		appname: "성년의 날",
		type: "link"
	});
}



dataPresent = [
	{'photo':'present0.jpg', 'present':'향수'},
	{'photo':'present1.jpg', 'present':'장미꽃'},
	{'photo':'present2.jpg', 'present':'손편지'},
	{'photo':'present3.jpg', 'present':'키스'},
	{'photo':'present4.jpg', 'present':'손목시계'},
	{'photo':'present5.jpg', 'present':'BMW'},
	{'photo':'present6.jpg', 'present':'타워팰리스'},
	{'photo':'present7.jpg', 'present':'돈봉투'},
	{'photo':'present8.jpg', 'present':'산악자전거'},
	{'photo':'present9.jpg', 'present':'운동화'},
	{'photo':'present10.jpg', 'present':'상품권'},
	{'photo':'present11.jpg', 'present':'카네이션'},
	{'photo':'present12.jpg', 'present':'백과사전'},
	{'photo':'present13.jpg', 'present':'과자세트'},
	{'photo':'present14.jpg', 'present':'인삼세트'},
	{'photo':'present15.jpg', 'present':'사과상자'},
	{'photo':'present16.jpg', 'present':'커플속옷'},
	{'photo':'present17.jpg', 'present':'카톡메세지'},
	{'photo':'present18.jpg', 'present':'립스틱'},
	{'photo':'present19.jpg', 'present':'화장품'},
	{'photo':'present20.jpg', 'present':'면도기'},
	{'photo':'present21.jpg', 'present':'화환'},
	{'photo':'present22.jpg', 'present':'생선세트'},
	{'photo':'present23.jpg', 'present':'국내산 농산물세트'},
	{'photo':'present24.jpg', 'present':'한우세트'},
	{'photo':'present25.jpg', 'present':'굴비세트'},
	{'photo':'present26.jpg', 'present':'곶감세트'},
	{'photo':'present27.jpg', 'present':'성형수술'},
	{'photo':'present28.jpg', 'present':'갈비세트'}
]










