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
	postMsg += selMonth.value + '월 ' + selDate.value + '일이 제 생일인거 아시죠?\n';
	postMsg += '이번엔 그냥 ' + data[dataRan]['price'] + '짜리 ' + data[dataRan]['present'] + '하나로 만족할께요~^^\n\n';
	
	postMsg += 'http://goo.gl/MVQ5y\n';
	
	urlMsg = {
		title: '받고싶은 생일선물',
		desc: '우리우정 ' + data[dataRan]['price']+'정도는 되잖아.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/'+data[dataRan]['photo']],
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
		msg: "받고싶은 생일선물",
		url: "http://goo.gl/MVQ5y",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}



// 남자
dataM = [
	{'photo':'birthM0.jpg',  'price':'58만 5천원', 'present': '구찌 홀스빗 모카신'},
	{'photo':'birthM1.jpg',  'price':'51만 8천원', 'present': '구찌 하이테크 레이스업 스니커즈'},
	{'photo':'birthM2.jpg',  'price':'41만 천원', 'present': '버버리 장지갑'},
	{'photo':'birthM3.jpg',  'price':'63만 7천원', 'present': '까르띠에 벨트'},
	{'photo':'birthM4.jpg',  'price':'49만 천원', 'present': '까르띠에 반지갑'},
	{'photo':'birthM5.jpg',  'price':'2,490만원', 'present': '두카티 하이퍼모타드'},
	{'photo':'birthM6.jpg',  'price':'350만원', 'present': '르벨로 데다차이스트라다 자전거'},
	{'photo':'birthM7.jpg',  'price':'56만원', 'present': '르벨로 햄스테드 홀돌백'},
	{'photo':'birthM8.jpg',  'price':'100만 3천원', 'present': '구찌 서류가방'},
	{'photo':'birthM9.jpg',  'price':'112만 5천원', 'present': '구찌 시그니처 숄더백'},
	{'photo':'birthM10.jpg', 'price':'24만 천원', 'present': '기어3 바이샌'},
	{'photo':'birthM11.jpg', 'price':'117만 5천원', 'present': '돌체앤가바나 서류가방'},
	{'photo':'birthM12.jpg', 'price':'47만 7천원', 'present': '돌체앤가바나 투포겟 힙색'},
	{'photo':'birthM13.jpg', 'price':'192만 6천원', 'present': '랑방 브리프백'},
	{'photo':'birthM14.jpg', 'price':'125만 4천원', 'present': '발렌시아가 크로스백'},
	{'photo':'birthM15.jpg', 'price':'177만원', 'present': '발렌시아가 백팩'},
	{'photo':'birthM16.jpg', 'price':'173만원', 'present': '발리 빅사이즈 서류가방'},
	{'photo':'birthM17.jpg', 'price':'287만원', 'present': '보텐가벤타 븨프 케이스'},
	{'photo':'birthM18.jpg', 'price':'185만 2천원', 'present': '에스티 듀퐁'},
	{'photo':'birthM19.jpg', 'price':'68만 8천원', 'present': '골든구스 하이탑 스니커즈'},
	{'photo':'birthM20.jpg', 'price':'55만원', 'present': '구찌 화이트 스니커즈'},
	{'photo':'birthM21.jpg', 'price':'49만 5천원', 'present': '돌체앤가바나 양각 펌핑뉴 스니커즈'},
	{'photo':'birthM22.jpg', 'price':'56만 천원', 'present': '디스퀘어드2 스니커즈'},
	{'photo':'birthM23.jpg', 'price':'15만원', 'present': '구찌 핸드폰줄'},
	{'photo':'birthM24.jpg', 'price':'17만 5천원', 'present': '디스퀘어드2 캡모자'},
	{'photo':'birthM25.jpg', 'price':'20만원', 'present': '페라가모 실크넥타이'},
	{'photo':'birthM26.jpg', 'price':'52만 천원', 'present': '디스퀘어드2 청바지'},
	{'photo':'birthM27.jpg', 'price':'28만 7천원', 'present': '몽끌레어 면티'},
	{'photo':'birthM28.jpg', 'price':'59만 7천원', 'present': '돌체앤가바나 런어웨이 슬림'},
	{'photo':'birthM29.jpg', 'price':'30만 6천원', 'present': '돌체앤가바나 면티'}
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
































