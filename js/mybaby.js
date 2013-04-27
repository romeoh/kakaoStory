var  userName
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataDrink, dataMount, dataAction

//window.addEventListener("load", initPage, false);
//function initPage(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
	boySelect.addEventListener('click', function(){
		boySelect.className = 'checked';
		girlSelect.className = '';
	}, false);
	girlSelect.addEventListener('click', function(){
		boySelect.className = '';
		girlSelect.className = 'checked';
	}, false);
//}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  sexType
		,userName = document.querySelector('#userName').value
		,resultName, resultPhoto, resultMsg
		,message
		,postMsg = ''
		,dataDrinkRan = Math.floor(Math.random() * dataDrink.length)
		,dataMountRan = Math.floor(Math.random() * dataMount.length)
		,dataActionRan = Math.floor(Math.random() * dataAction.length)
	
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}
	
	if (userName == '') {
		alert('아기 이름을 입력해 주세요.');
		return false;
	}
	
	postMsg += '김철수는 10년뒤 천재바이얼리니스트가 됩니다.';
	postMsg += '성격: ★★☆☆☆';
	postMsg += '지능: ';
	postMsg += '키: ';
	postMsg += '외모: ';
	postMsg += '매력도: ';
	postMsg += '';


	postMsg += userName + '님의 주량은 ' + dataDrink[dataDrinkRan]['name'] + ' ' + dataMount[dataMountRan] + '입니다.\n\n';
	postMsg += '주량: ' + dataDrink[dataDrinkRan]['name'] + ' ' + dataMount[dataMountRan] + '\n';
	postMsg += '주사: ' + dataAction[dataActionRan] + '\n\n';
	postMsg += 'http://goo.gl/BCCnn';

	urlMsg = {
		title: '나의 주량 알아보기',
		desc: userName + '님의 주량은 ' + dataDrink[dataDrinkRan]['name'] + ' ' + dataMount[dataMountRan] + '입니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/imgDrink/' + dataDrink[dataDrinkRan]['photo'] ],
		type:'article'
	}

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '나와 스캔들날 연예인',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "커피한잔 하실래요?",
		url: "http://goo.gl/FSBT3",
		appid: "funnyApp",
		appver: "1.0",
		appname: "연예인과 커피한잔",
		type: "link"
	});
}




dataMale = [
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
]

dataMount = [
	'한잔',
	'두잔',
	'세잔',
	'한병',
	'두병',
	'세병',
	'네병',
	'다섯병',
	'열병',
	'한짝',
	'두짝',
	'세짝',
	'무제한'
]

dataAction = [
	'옆사람에게 뽀뽀함',
	'옆사람을 포옹함',
	'했던말 계속함',
	'엄마생각하며 울기',
	'끊임없이 웃음',
	'똥폼잡음',
	'줄담배 피기',
	'조용히 잠자기',
	'없어져서 친구들이 찾으러 다님',
	'조용히 집에감',
	'화장실에서 우엑~',
	'옆테이블에 시비걸기',
	'큰소리로 노래부름',
	'골든벨 울리기'
]






























