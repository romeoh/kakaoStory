var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataMale, dataFemale
	,ginung0, ginung1, ginung2

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
		,userName = document.querySelector('#userName').value
		,resultName, resultPhoto, resultMsg
		,message	//
		
		,like = dataLike[Math.floor(Math.random() * dataLike.length)]
		,hate = dataHate[Math.floor(Math.random() * dataHate.length)]
		,Fuel = dataFuel[Math.floor(Math.random() * dataFuel.length)]
		,manage = dataManage[Math.floor(Math.random() * dataManage.length)]
		,broken = dataBroken[Math.floor(Math.random() * dataBroken.length)]
		
		,postMsg = ''
		
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	ginung0 = ginung1 = ginung2 = undefined
	setRandom(dataGinung)

	postMsg += '[' + userName + ' 사용설명서]\n\n';
	postMsg += '- 좋아하는것: ' + like + '\n';
	postMsg += '- 싫어하는것: ' + hate + '\n';
	postMsg += '- 주연료: ' + Fuel + '\n';
	postMsg += '- 평상시 관리법: ' + manage + '\n';
	postMsg += '- 고장시 대처요령: ' + broken + '\n\n';
	postMsg += '[주요기능]\n';
	postMsg += '1. ' + dataGinung[ginung0] + '\n';
	postMsg += '2. ' + dataGinung[ginung1] + '\n';
	postMsg += '3. ' + dataGinung[ginung2] + '\n\n';
	
	postMsg += 'http://goo.gl/gSloK';
	
	urlMsg = {
		title: userName + ' 사용설명서',
		desc: manage,
		imageurl: ['http://romeoh.github.io/kakaoStory/img/manual.jpg'],
		type:'article'
	}
	console.log(postMsg, urlMsg)
	
	kakao.link("story").send({   
		post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '자기 사용설명서',
		urlinfo : JSON.stringify(urlMsg)
    });
}

function setRandom(data){
	var idx = Math.floor(Math.random() * data.length)
	if (ginung0 == undefined) {
		ginung0 = idx;
	}
	if (ginung1 == undefined) {
		if (ginung0 == idx) {
			setRandom(data)
		} else {
			ginung1 = idx;
		}
	}
	if (ginung2 == undefined) {
		if (ginung0 == idx || ginung1 == idx) {
			setRandom(data)
		} else {
			ginung2 = idx;
			return ginung2;
		}
	}
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "자기 사용설명서",
		url: "http://goo.gl/gSloK",
		appid: "funnyApp",
		appver: "1.0",
		appname: "자기 사용설명서",
		type: "link"
	});
}



dataLike = [
	'코뿔소',
	'강아지',
	'토끼',
	'술',
	'야동',
	'여행',
	'데이트',
	'뽀뽀하기',
	'코끼리',
	'동물원',
	'수영',
	'스키',
	'돼지고기',
	'하이애나',
	'돼지고기',
	'장어',
	'자기전에 라면먹기'
]

dataHate = [
	'양다리',
	'공부',
	'출근하기',
	'학교가기',
	'군대가기',
	'돈 빌려주기',
	'아침일찍 전화받기',
	'저녁늦게 불러내는것',
	'말대꾸 하는것',
	'짜증나게 말거는것',
	'술먹이는것',
	'반말하는것',
	'삿대질 하는것',
	'째려보는것',
	'욕하는것'
]

dataGinung = [
	'상담기능: 말을 잘들어줌',
	'스피치기능: 말을 많이해서 심심하지 않음',
	'청소기능: 청도를 잘함',
	'요리기능: 요리를 잘함',
	'싸이렌기능: 욕을 잘해서 호신용으로 사용가능',
	'호신기능: 싸움을 잘함',
	'파워기능: 힘이 좋고, 잔심부름을 잘함',
	'노예기능: 시키면 시키는 데로 다함',
	'노래재생기능: 노래를 잘 부름',
	'스피킹기능: 길거리에서 사랑한다고 소리지름',
	'레시피기능: 맛있는 음식 셔틀',
	'애교기능: 귀여워 죽을껄요~',
	'연기기능: 거짓말을 잘함',
	'녹음기능: 했던말 또하고 했던말 또함',
	'카톡기능: 카톡을 죽어라고 보냄'
]

dataFuel = [
	'밥',
	'커피',
	'스파케티',
	'라면',
	'불고기',
	'삼겹살',
	'소주',
	'카레밥',
	'스테이크',
	'샐러드',
	'피자',
	'막걸리',
	'돼지껍데기',
	'곱창'
]

dataManage = [
	'혼자만의 시간을 주면 오래 쓸수 있음',
	'팔짱끼고 다니기',
	'구박하면 튼튼해짐',
	'노래를 불러주면 충전됨',
	'이름 불러주는것 좋아함',
	'수시로 전화해줘야 오래씀',
	'수시로 카톡 보내야 좋아함',
	'수시로 칭찬해주면 기분 업됨',
	'명령어조로 말하면 오작동함',
	'사람 심리를 역이용하면 제명당함',
	'아픈곳 찌르지 않게 주의',
	'가끔 성격이 더러워질때는 모르는척 하세요.',
	'많은 관심을 가져주세요.'
]

dataBroken = [
	'예뻐해주기',
	'칭찬해주기',
	'말하는것 잘 들어주기',
	'모르는척 하기',
	'맛있는거 사주기',
	'영화보여주기',
	'여행가기',
	'빰 맞아 주면 금방 풀림',
	'무조건 잘못했다고 사과하기',
	'영화보여주기',
	'같이 술마시기',
	'경치좋은 카페 데려가기'
]












