var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataDrink, dataMount, dataAction



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
		,dataCharactorRan = Math.floor(Math.random() * dataCharactor.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	postMsg += '[나의 롤모델]\n\n';
	postMsg += userName + '님의 롤모델은 ' + dataCharactor[dataCharactorRan]['nickName'] + dataCharactor[dataCharactorRan]['name'] + '입니다.\n';
	postMsg += dataCharactor[dataCharactorRan]['article'] + '\n\n';
	postMsg += 'http://goo.gl/HaHyR';

	urlMsg = {
		title: '나의 롤모델',
		desc: '나의 롤모델은 ' + dataCharactor[dataCharactorRan]['nickName'] + dataCharactor[dataCharactorRan]['name'] + '입니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + dataCharactor[dataCharactorRan]['photo'] ],
		type:'article'
	}
console.log(postMsg)
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
		msg: "나의 롤모델",
		url: "http://goo.gl/HaHyR",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}


dataCharactor = [
	{'nickName': '국민MC ', 'name': '유재석', 'article': '아~ 진행하고 싶어~', 'photo': 'role0.jpg'},
	{'nickName': '구라구라 ', 'name': '김구라', 'article': '아~ 욕하고 싶어~', 'photo': 'role1.jpg'},
	{'nickName': '버럭 ', 'name': '이경규', 'article': '아~ 성질내고 싶어~', 'photo': 'role2.jpg'},
	{'nickName': '달인 ', 'name': '김병만', 'article': '아~ 차력하고 싶어~', 'photo': 'role3.jpg'},
	{'nickName': '천하장사 ', 'name': '강호동', 'article': '아~ 누구하나 업치고 싶어~', 'photo': 'role4.jpg'},
	{'nickName': '국민약골 ', 'name': '이윤석', 'article': '아~ 건강해지고 싶어~', 'photo': 'role5.jpg'},
	{'nickName': '국민진상 ', 'name': '정형돈', 'article': '아~ 사람답게 살고 싶어~', 'photo': 'role6.jpg'},
	{'nickName': '시건방 ', 'name': '유세윤', 'article': '아~ 비꼬고 싶어~', 'photo': 'role7.jpg'},
	{'nickName': '촌뜨기 ', 'name': '양상국', 'article': '아~ 세련되고 싶어~', 'photo': 'role8.jpg'},
	{'nickName': '만인의 연인 ', 'name': '신봉선', 'article': '아~ 인기 많아지고 싶어', 'photo': 'role9.jpg'},
	{'nickName': '버럭 ', 'name': '박명수', 'article': '아~ 호통치고 싶어', 'photo': 'role10.jpg'},
	{'nickName': '먹깨비 ', 'name': '정준하', 'article': '아~ 배고파~', 'photo': 'role11.jpg'},
	{'nickName': '사기본능 ', 'name': '노홍철', 'article': '아~ 사기치고 싶어~', 'photo': 'role12.jpg'},
	{'nickName': '다이어트 ', 'name': '김신영', 'article': '아~ 날씬해지고 싶어~', 'photo': 'role13.jpg'},
	{'nickName': '털보 ', 'name': '이혁재', 'article': '아~ 깨끗해지고 싶어~', 'photo': 'role14.jpg'},
	{'nickName': '엄친아 ', 'name': '이승기', 'article': '아~ 엄마친구 아들로 입양되고 싶어~', 'photo': 'role15.jpg'},
	{'nickName': '느끼남 ', 'name': '류승룡', 'article': '아~ 섹시해지고 싶어~', 'photo': 'role16.jpg'}
	
]
































