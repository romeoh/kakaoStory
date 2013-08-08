var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
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
		,userName = document.querySelector('#userName').value
		,dataProductRan = Math.floor(Math.random() * dataProduct.length)
		,dataPartnerRan = Math.floor(Math.random() * dataPartner.length)
		,dataPriceRan = Math.floor(Math.random() * dataPrice.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	
	postMsg += '[나와 어울리는 CF]\n\n';
	postMsg += userName + '님, CF섭외가 들어왔습니다.\n';
	postMsg += '제품명: ' + dataProduct[dataProductRan]['product'] + '\n'
	postMsg += '출연료: ' + dataPrice[dataPriceRan] + '\n'
	postMsg += '함께 출연할 연예인: ' + dataPartner[dataPriceRan] + '\n\n'
	
	postMsg += 'http://goo.gl/eK1NU\n';
	
	urlMsg = {
		title: '나와 어울리는 CF',
		desc: dataProduct[dataProductRan]['product'],
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + dataProduct[dataProductRan]['photo'] ],
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
		msg: "나와 어울리는 CF",
		url: "http://goo.gl/eK1NU",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}


// 남자
dataProduct = [
	{'photo': 'cf1.jpg', 'product': '바나나맛 우유'},
	{'photo': 'cf2.jpg', 'product': '쿠팡'},
	{'photo': 'cf3.jpg', 'product': '포카리스웨트'},
	{'photo': 'cf4.jpg', 'product': '캐논 EOS 100D'},
	{'photo': 'cf5.jpg', 'product': '동원참치'},
	{'photo': 'cf6.jpg', 'product': '갤럭시 S4'},
	{'photo': 'cf7.jpg', 'product': 'LG U플러스 LTE'},
	{'photo': 'cf8.jpg', 'product': '베스킨라빈스'},
	{'photo': 'cf9.jpg', 'product': '코웨이'},
	{'photo': 'cf10.jpg', 'product': '피자헛'},
	{'photo': 'cf11.jpg', 'product': '세븐'},
	{'photo': 'cf12.jpg', 'product': '팔도비빔면'},
	{'photo': 'cf13.jpg', 'product': '삼성화재 슈퍼플러스'},
	{'photo': 'cf14.jpg', 'product': '대한항공'},
	{'photo': 'cf15.jpg', 'product': '뚜레쥬르'},
	{'photo': 'cf16.jpg', 'product': '베가아이언'},
	{'photo': 'cf17.jpg', 'product': '기아 K5'},
	{'photo': 'cf18.jpg', 'product': '맥심 T.O.P'},
	{'photo': 'cf19.jpg', 'product': 'LG 휘센'},
	{'photo': 'cf20.jpg', 'product': '미에로화이바'},
	{'photo': 'cf21.jpg', 'product': '파리바게뜨'},
	{'photo': 'cf22.jpg', 'product': '샤프란'},
	{'photo': 'cf23.jpg', 'product': '새우깡'},
	{'photo': 'cf24.jpg', 'product': '비씨카드'},
	{'photo': 'cf25.jpg', 'product': '현대카드'},
	{'photo': 'cf26.jpg', 'product': '미스터피자'},
	{'photo': 'cf27.jpg', 'product': '한국타이어'},
	{'photo': 'cf28.jpg', 'product': '참붕어빵'},
	{'photo': 'cf29.jpg', 'product': '블랙야크'},
	{'photo': 'cf30.jpg', 'product': '11번가'},
	{'photo': 'cf31.jpg', 'product': '박카스'}
]

// 파트너
dataPartner = [
	'이승기',
	'전지현',
	'김연아',
	'손연제',
	'원빈',
	'장동건',
	'유재석',
	'박명수',
	'노홍철',
	'원빈',
	'수지',
	'이병헌',
	'김수현',
	'고현정',
	'다비치 강민경',
	'김태희',
	'싸이',
	'송중기',
	'유아인',
	'고아라',
	'황정민',
	'손예진',
	'한효주',
	'단독출연'
]

// 출연료
dataPrice = [
	'100 만원',
	'500 만원',
	'1,000 만원',
	'5,000 만원',
	'1억원',
	'2억원',
	'5억원',
	'10억원',
	'12억원',
	'15억원',
	'20억원',
	'쌀한가마니',
	'단감 10박스',
	'라면 20박스',
	'문화상품권 10장',
	'스케치북 20권',
	'출연료는 없음'
]
































