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
		,data, dataRan
	
	if (selMonth.value == '') {
		alert('태어난 월을 선택하세요.');
		return;
	}
	if (selDate.value == '') {
		alert('태어난 일을 선택하세요.');
		return;
	}
	if (selSex.value == '') {
		alert('성별을 선택하세요.');
		return;
	}
	
	if (selSex.value == 1) {
		data = dataF
	}
	if (selSex.value == 2) {
		data = dataM
	}
	dataRan = Math.floor(Math.random() * data.length)

	postMsg += '[받고싶은 생일선물]\n';
	postMsg += '내 입으로 말하기 부끄럽지만 \n' + selMonth.value + '월 ' + selDate.value + '일이 제 생일이에요.\n';
	postMsg += '경제도 어렵고 하니깐 \n그냥 간단하게 ' + data[dataRan]['price'] + '짜리 ' + data[dataRan]['present'] + '하나로 퉁칠께요~^^\n\n';
	
	postMsg += 'http://goo.gl/LR7Lf\n';
	
	urlMsg = {
		title: '우리우정 ' + data[dataRan]['price']+'정도는 되잖아.',
		desc: selMonth.value + '월 ' + selDate.value + '일',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/'+data[dataRan]['photo']],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '받고싶은 생일선물',
		urlinfo : JSON.stringify(urlMsg)
    });
}


// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "받고싶은 생일선물",
		url: "http://goo.gl/LR7Lf",
		appid: "funnyApp",
		appver: "1.0",
		appname: "받고싶은 생일선물",
		type: "link"
	});
}



// 남자
dataM = [
	{'photo':'birthM0.jpg',  'price':'', 'present': ''},
	{'photo':'birthM1.jpg',  'price':'', 'present': ''},
	{'photo':'birthM2.jpg',  'price':'', 'present': ''},
	{'photo':'birthM3.jpg',  'price':'', 'present': ''},
	{'photo':'birthM4.jpg',  'price':'', 'present': ''},
	{'photo':'birthM5.jpg',  'price':'', 'present': ''},
	{'photo':'birthM6.jpg',  'price':'', 'present': ''},
	{'photo':'birthM7.jpg',  'price':'', 'present': ''},
	{'photo':'birthM8.jpg',  'price':'', 'present': ''},
	{'photo':'birthM9.jpg',  'price':'', 'present': ''},
	{'photo':'birthM10.jpg', 'price':'', 'present': ''},
	{'photo':'birthM11.jpg', 'price':'', 'present': ''},
	{'photo':'birthM12.jpg', 'price':'', 'present': ''},
	{'photo':'birthM13.jpg', 'price':'', 'present': ''},
	{'photo':'birthM14.jpg', 'price':'', 'present': ''},
	{'photo':'birthM15.jpg', 'price':'', 'present': ''},
	{'photo':'birthM16.jpg', 'price':'', 'present': ''},
	{'photo':'birthM17.jpg', 'price':'', 'present': ''},
	{'photo':'birthM18.jpg', 'price':'', 'present': ''},
	{'photo':'birthM19.jpg', 'price':'', 'present': ''},
	{'photo':'birthM20.jpg', 'price':'', 'present': ''},
	{'photo':'birthM21.jpg', 'price':'', 'present': ''},
	{'photo':'birthM22.jpg', 'price':'', 'present': ''},
	{'photo':'birthM23.jpg', 'price':'', 'present': ''},
	{'photo':'birthM24.jpg', 'price':'', 'present': ''},
	{'photo':'birthM25.jpg', 'price':'', 'present': ''},
	{'photo':'birthM26.jpg', 'price':'', 'present': ''},
	{'photo':'birthM27.jpg', 'price':'', 'present': ''},
	{'photo':'birthM28.jpg', 'price':'', 'present': ''},
	{'photo':'birthM29.jpg', 'price':'', 'present': ''}
]

//여자
dataF = [
	{'photo':'birthF0.jpg',  'price':'38만 9천원', 'present': '프라다 반지갑'},
	{'photo':'birthF1.jpg',  'price':'110만원', 'present': '프라다 숄더백'},
	{'photo':'birthF2.jpg',  'price':'128만 2천원', 'present': '프라다 토트겸 숄더백'},
	{'photo':'birthF3.jpg',  'price':'111만 3천원', 'present': '버버리 토트백'},
	{'photo':'birthF4.jpg',  'price':'26만 6천원', 'present': '프라다 벨트'},
	{'photo':'birthF5.jpg',  'price':'46만 3천원', 'present': '구찌 스웨이드 스니커즈'},
	{'photo':'birthF6.jpg',  'price':'135만원', 'present': '구찌 클래식 라지 보스톤백'},
	{'photo':'birthF7.jpg',  'price':'237만 5천원', 'present': '구찌 숄더백'},
	{'photo':'birthF8.jpg',  'price':'108만원', 'present': '에뜨로 숄더백'},
	{'photo':'birthF9.jpg',  'price':'9만 5천원', 'present': '에뜨로 헤어핀'},
	{'photo':'birthF10.jpg', 'price':'13만원', 'present': '에뜨로 스카프'},
	{'photo':'birthF11.jpg', 'price':'92만원', 'present': '칼린 제시카'},
	{'photo':'birthF12.jpg', 'price':'203만 7천원', 'present': '토즈 쇼퍼백'},
	{'photo':'birthF13.jpg', 'price':'180만 2천원', 'present': '토즈 숄더백'},
	{'photo':'birthF14.jpg', 'price':'72만원', 'present': '페라가모 데님숄더'},
	{'photo':'birthF15.jpg', 'price':'52만 2천원', 'present': '페라가모 지퍼 장지갑'},
	{'photo':'birthF16.jpg', 'price':'152만원', 'present': '페라가모 토트백'},
	{'photo':'birthF17.jpg', 'price':'48만 6천원', 'present': '페라가모 정장구두'},
	{'photo':'birthF18.jpg', 'price':'64만 3천원', 'present': '펜디 미니 클러치겸 숄더백'},
	{'photo':'birthF19.jpg', 'price':'113만 7천원', 'present': '펜디 숄더백'},
	{'photo':'birthF20.jpg', 'price':'213만 8천원', 'present': '꼴로에 마르씨백'},
	{'photo':'birthF21.jpg', 'price':'91만 6천원', 'present': '이자벨마랑 바틱 오버 바스켓'},
	{'photo':'birthF22.jpg', 'price':'25만 9천원', 'present': '이자벨마랑 면티'},
	{'photo':'birthF23.jpg', 'price':'248만 6천원', 'present': '프로엔자슐러 판초백'},
	{'photo':'birthF24.jpg', 'price':'261만 7천원', 'present': '몽끌레어 순모 패딩점퍼'},
	{'photo':'birthF25.jpg', 'price':'21만 6천원', 'present': '토리버치 샌들'},
	{'photo':'birthF26.jpg', 'price':'46만 8천원', 'present': '토리버치 도로시슈즈'},
	{'photo':'birthF27.jpg', 'price':'71만 8천원', 'present': '프리마클라쎄 지오클래식'},
	{'photo':'birthF28.jpg', 'price':'41만 9천원', 'present': '돌체앤가바나 젤리슈즈'},
	{'photo':'birthF29.jpg', 'price':'107만 8천원', 'present': '돌체앤가바나 쇼퍼백'}
]
































