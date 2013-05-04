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
	document.querySelector('body').removeChild(adTop)
	document.querySelector('body').removeChild(adBottom)
}

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
	
	postMsg += '[나의 매려포인트]\n\n';
	if (boySelect.className == 'checked') {
		// 여자일 경우
		dataRan = Math.floor(Math.random() * dataMale.length)
		data = dataMale[dataRan]
		img = 'http://romeoh.github.io/kakaoStory/img/loverWoman.jpg'
	} else if (girlSelect.className == 'checked') {
		// 남자일 경우
		dataRan = Math.floor(Math.random() * dataFemale.length)
		data = dataFemale[dataRan]
		img = 'http://romeoh.github.io/kakaoStory/img/loverMan.jpg'
	}
	
	postMsg += '뭐 딴건 내세울것 없구요.\n';
	postMsg += data + '\n\n';
	postMsg += 'http://goo.gl/lzbc5\n';
	
	urlMsg = {
		title: '나의 매력포인트',
		desc: '특별히 내세울게 없네요.',
		imageurl: [img],
		type:'article'
	}
	console.log(urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '나의 매력포인트',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "뭐 내세울게 있나요?",
		url: "http://goo.gl/lzbc5",
		appid: "funnyApp",
		appver: "1.0",
		appname: "나의 매력포인트",
		type: "link"
	});
}



// 남자
dataMale = [
	'자랑할껀 훤칠한 키 밖에 없네요.',
	'돈자랑은 조금 하고싶네요.',
	'이 정도 직장이면 판,검사 안부러워요.',
	'노래로 여자좀 울렸어요.',
	'내 차는 좀 브릴리언트 해요.',
	'내가 입만 열면 여자들 웃느라 눈가에 주금이 자글자글해져요.',
	'나의 강남삘 스타일에 여자애들 애간장 좀 태우죠.',
	'나의 부드러운 목소리만 들으면 여자애들 그냥 잠들어 버려요.',
	'나의 백만불짜리 몸매는 좀 쩔어요.',
	'제 쎅시한 엉덩이 때문에 길거리를 걸어다니기 힘들어요.',
	'나의 호수같은 눈빛에 다들 빠지고 싶어하더라구요.',
	'내 백옥같은 피부를 여자들이 부러워해요.',
	'내 아기같은 귀여움에 누나들 지갑은 항상 오픈이에요.',
	'백과사전같은 해박함에 여자들이 끊이지 않아요.',
	'궁전처럼 좀 넓은 집에 살고있어요.'
]

// 여자
dataFemale = [
	'쎅시한 몸매에 남자들이 가만두질 않네요.',
	'한가인 닮았다나..',
	'내 눈만 마주치면 남자들이 정신줄을 놔요.',
	'가진게 돈 밖에 없어요.',
	'클럽가면 보통 핸드폰번호 20개씩 들어와요.',
	'제 날씬한 다리 훔쳐보느라 길가던 남자들 여럿 넘어졌죠.',
	'귀여미 한번 하면 남자들 눈이 충혈 되버려요.',
	'맘 먹구 옷한번 차려입고 나가면 일대 혼란이 와요.',
	'화장한번 살짝해주면 남정네들 정신 못차려요.',
	'그냥 얼굴로 먹고 사는 편이에요.',
	'글래머스한 몸매에 여럿 쓰러졌죠.',
	'빚나는 애기피부에 여럿 남자 눈멀어버렸어요.',
	'제 애교 한방에 몇남자 사망선고 받았어요.',
	'길거리 걸어가면 캐스팅제의 때문에 가끔 짜증도 나요. 바쁜데..',
	'제 요리솜씨, 맛집이에요.'
]

































