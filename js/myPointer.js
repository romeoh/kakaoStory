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
	boySelect.addEventListener('click', function(){
		boySelect.className = 'checked';
		girlSelect.className = '';
	}, false);
	girlSelect.addEventListener('click', function(){
		boySelect.className = '';
		girlSelect.className = 'checked';
	}, false);
}, false);

//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
	
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}
	
	postMsg += '[나의 매력포인트]\n\n';
	if (boySelect.className == 'checked') {
		// 여자일 경우
		dataRan = Math.floor(Math.random() * dataMale.length)
		data = dataMale[dataRan]
		img = 'http://romeoh.github.io/kakaoStory/img/pointerMale.jpg'
	} else if (girlSelect.className == 'checked') {
		// 남자일 경우
		dataRan = Math.floor(Math.random() * dataFemale.length)
		data = dataFemale[dataRan]
		img = 'http://romeoh.github.io/kakaoStory/img/pointerFemale.jpg'
	}
	
	postMsg += '뭐 딴건 내세울것 없구요.\n';
	postMsg += data + '\n\n';
	postMsg += 'http://goo.gl/lzbc5\n';
	
	urlMsg = {
		title: '나의 매력포인트',
		desc: '딴건 없어요.',
		imageurl: [img],
		type:'article'
	}
	console.log(urlMsg)

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
		msg: "나의 매력포인트",
		url: "http://goo.gl/lzbc5",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}



// 남자
dataMale = [
	'자랑할껀 훤칠한 키 밖에 없네요.',
	'돈이 많습니다.',
	'신의 직장에 다녀요.',
	'감성발라드 보이스!',
	'고급차 소유주입니다.',
	'유머감각의 소유자입니다.',
	'강남 스타일 입니다.',
	'목소리가 좋아요.',
	'몸매 짱입니다.',
	'섹시한 엉덩이의 소유자입니다.',
	'눈빛이 깊어요.',
	'피부가 좋아요.',
	'귀여움쟁이 입니다. 뿌잉뿌잉~',
	'지적인 매너남입니다.',
	'집이 잘살아요.'
]

// 여자
dataFemale = [
	'섹시한 몸매에요.',
	'한가인정도 닮았데요.',
	'눈빛이 매혹적이에요.',
	'돈이 많아요.',
	'연예인 부럽지 않게 인기쟁이에요.',
	'섹시한 다리의 소유자에요.',
	'귀여움 종결자에요.',
	'패셔니스타에요.',
	'화장빨 죽여요.',
	'얼굴로 먹고 살아요.',
	'베이글녀에요.',
	'피부짱이에요.',
	'애교쟁이에요',
	'요리를 잘해요.'
]

































