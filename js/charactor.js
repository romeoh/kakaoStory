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
	document.querySelector('body').removeChild(adTop)
	document.querySelector('body').removeChild(adBottom)
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
		,dataCharactorRan = Math.floor(Math.random() * dataCharactor.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	postMsg += '[나에게 어울리는 예능 캐릭터]\n\n';
	postMsg += userName + '님의 캐릭터는 ' + dataCharactor[dataCharactorRan]['corner'] + dataCharactor[dataCharactorRan]['nickName'] + ' ' + dataCharactor[dataCharactorRan]['name'] + '입니다.\n';
	postMsg += '다 필요없고, ' + userName + '님이 더 ' + dataCharactor[dataCharactorRan]['article'] + '\n\n';
	postMsg += 'http://goo.gl/TxVbO';

	urlMsg = {
		title: '나에게 어울리는',
		desc: userName + '님은 ' + dataCharactor[dataCharactorRan]['nickName'] + '입니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + dataCharactor[dataCharactorRan]['photo'] ],
		type:'article'
	}
console.log(urlMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '나의 예능 캐릭터',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "나에게 어울리는",
		url: "http://goo.gl/TxVbO",
		appid: "funnyApp",
		appver: "1.0",
		appname: "나의 예능 캐릭터",
		type: "link"
	});
}


dataCharactor = [
	{'nickName': '먹방지존', 'name': '윤후', 'corner': '아빠어디가?! ', 'article': '잘 먹을거 같습니다.', 'photo': 'charactor0.jpg'},
	{'nickName': '성선비', 'name': '성준', 'corner': '아빠어디가?! ', 'article': '선비같습니다.', 'photo': 'charactor1.jpg'},
	{'nickName': '의리남', 'name': '민국', 'corner': '아빠어디가?! ', 'article': '의리 있어 보입니다.', 'photo': 'charactor2.jpg'},
	{'nickName': '쿨가이', 'name': '준수', 'corner': '아빠어디가?! ', 'article': '쿠~울 합니다.', 'photo': 'charactor3.jpg'},
	{'nickName': '허당', 'name': '이승기', 'corner': '', 'article': '엉뚱해 보입니다.', 'photo': 'charactor4.jpg'},
	{'nickName': '유느님', 'name': '유재석', 'corner': '런닝맨 ', 'article': '전설입니다.', 'photo': 'charactor5.jpg'},
	{'nickName': '은초딩', 'name': '은지원', 'corner': '', 'article': '유치합니다.', 'photo': 'charactor6.jpg'},
	{'nickName': '배신의 아이콘', 'name': '이광수', 'corner': '런닝맨 ', 'article': '못 미덥습니다.', 'photo': 'charactor7.jpg'},
	{'nickName': '능력자', 'name': '김종국', 'corner': '런닝맨 ', 'article': '멋집니다.', 'photo': 'charactor8.jpg'},
	{'nickName': '깝권', 'name': '조권', 'corner': '2AM ', 'article': '깝칩니다.', 'photo': 'charactor9.jpg'},
	{'nickName': '망했어요', 'name': '차태현', 'corner': '1박2일 ', 'article': '불쌍합니다.', 'photo': 'charactor10.jpg'},
	{'nickName': '돌직구', 'name': '한혜진', 'corner': '힐링캠프 ', 'article': '무섭습니다.', 'photo': 'charactor11.jpg'},
	{'nickName': '달인', 'name': '김병만', 'corner': '정글의 법칙 ', 'article': '야생스럽습니다.', 'photo': 'charactor12.jpg'},
	{'nickName': '거지도령', 'name': '광희', 'corner': '우결 ', 'article': '그~지 같습니다.', 'photo': 'charactor13.jpg'},
	{'nickName': '소녀동', 'name': '강호동', 'corner': '우리동네 예체능 ', 'article': '소녀감성입니다.', 'photo': 'charactor14.jpg'},
	{'nickName': '건방진도사', 'name': '유세윤', 'corner': '무릅팍도사 ', 'article': '시건방집니다.', 'photo': 'charactor15.jpg'},
	{'nickName': '사기본능', 'name': '노홍철', 'corner': '무한도전 ', 'article': '야비합니다.', 'photo': 'charactor16.jpg'},
	{'nickName': '배신계의 샛별', 'name': '성규', 'corner': '더 지니어스 ', 'article': '못 미덥습니다.', 'photo': 'charactor17.jpg'},
	{'nickName': '호주출신개그맨', 'name': '쌤 해밍턴', 'corner': '진짜사나이 ', 'article': '이국적입니다.', 'photo': 'charactor18.jpg'},
	{'nickName': '탁구의 신', 'name': '조달환', 'corner': '우리동네 예체능 ', 'article': '잘칠거 같습니다.', 'photo': 'charactor19.jpg'},
	{'nickName': '빈티싱글남', 'name': '김광규', 'corner': '나혼자산다 ', 'article': '웃껴보입니다.', 'photo': 'charactor20.jpg'},
	{'nickName': '정과장', 'name': '정준하', 'corner': '무한도전 ', 'article': '혐오 스럽습니다.', 'photo': 'charactor21.jpg'}
	
]
































