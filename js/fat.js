var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')



window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
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
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,standardkg
		,fatrate
		,bmi
		,msg

	if (M('#cm').val() == '') {
		alert('키를 입력해 주세요.');
		return false;
	}
	if (!M.isNumber( M('#cm').val() )) {
		alert('키는 숫자만 입력가능합니다.');
		return false;
	}
	if (M('#cm').val() < 110) {
		alert('정확하지 않은 키 입니다.');
		return false;
	}

	if (M('#kg').val() == '') {
		alert('체중을 입력해 주세요.');
		return false;
	}
	if (!M.isNumber( M('#kg').val() )) {
		alert('체중은 숫자만 입력가능합니다.');
		return false;
	}

	if (M('#cm').val() > 150) {
		standardkg = (M('#cm').val() - 100) * 0.9
	} else {
		standardkg = (M('#cm').val() - 110)
	}

	bmi = Math.round( M('#kg').val() / (M('#cm').val() * M('#cm').val()) * 1000000 ) / 100
	if (bmi < 20) {
		msg = '저체중입니다.'
	}
	if (bmi > 20 && bmi < 24) {
		msg = '정상체중입니다.'
	}
	if (bmi > 24 && bmi < 30) {
		msg = '경도비만입니다.'
	}
	if (bmi > 30) {
		msg = '비만입니다.'
	}
	
	postMsg += '[비만도 계산기]\n\n';
	postMsg += '나의 신체질량지수(BMI)는 ' + bmi + ' ' + msg + '\n';
	postMsg += 'http://goo.gl/kMeq9 \n\n';
	postMsg += '신체질량지수(BMI)는 질병관리본부에서 제공하는 표준계산법입니다.\n';

	urlMsg = {
		title: '비만도 계산기',
		desc: msg,
		imageurl: ['http://romeoh.github.io/kakaoStory/img/fat.png' ],
		type:'article'
	}
	
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : 'BMI:' + bmi,
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "비만도 계산기",
		url: "http://goo.gl/kMeq9",
		appid: "funnyApp",
		appver: "1.0",
		appname: "비만도 계산기",
		type: "link"
	});
}

function getRandom(min, max){
	return Math.floor((Math.random() * (max-min) + min))
}




dataArea = [
	'유럽 러시아를',
	'유럽 영국을',
	'유럽 네델란드를',
	'유럽 독일을',
	'유럽 체코를',
	'유럽 오스트리아를',
	'유럽 스페인을',
	'유럽 프랑스를',
	'유럽 그리스를',
	'유럽 룩셈부르크를',
	'유럽 덴마크를',
	'유럽 루마니아를',
	'유럽 마케도니아를',
	'유럽 이탈리아를',
	'유럽 포르투갈을',
	'유럽 폴란드를',
	'유럽 헝가리를',
	'유럽 핀란드를',
	
	'아프리카 남아프리카 공화국을',
	'아프리카 케냐를',
	'아프리카 에디오피아를',
	'아프리카 이집트를',
	'아프리카 가나를',
	'아프리카 나이지리아 아부지를',
	'아프리카 르완다를',
	'아프리카 말리를',
	'아프리카 마다가스카르를',
	'아프리카 모잠비크를',
	'아프리카 보츠와나를',
	'아프리카 수단을',
	'아프리카 앙골라를',
	'아프리카 세네갈을',
	'아프리카 코모로를',
	'아프리카 콩고를',
	'아프리카 탄자니아를',
	'아프리카 튀니지를',
	'아프리카 카메룬을',
	'아프리카 짐바브웨를',
	'아프리카 우간다를',
	'아프리카 리비아를',
	'아프리카 가봉을',
	
	'아시아 네팔',
	'아시아 동티모르를',
	'아시아 말레이시아를',
	'아시아 몽골을',
	'아시아 방글라데시를',
	'아시아 부탄을',
	'아시아 스리랑카를',
	'아시아 라오스를',
	'아시아 몰디브를',
	'아시아 미얀마를',
	'아시아 베트남을',
	'아시아 싱가포르를',
	'아시아 중국을',
	'아시아 인도네시아를',
	'아시아 우즈베키스탄을',
	'아시아 파키스탄을',
	'아시아 필리핀을',
	'아시아 일본을',
	'아시아 인도를',
	
	'중동 레바논을',
	'중동 사우디아라비아를',
	'중동 아랍에미리트를',
	'중동 아프가니스탄을',
	'중동 이라크를',
	'중동 이스라엘을',
	'중동 쿠웨이트를',
	'중동 팔레스타인을',
	'중동 터키를',
	'중동 이란을',
	'중동 요르단을',
	'중동 시리아를',
	
	'오세아니아 호주를',
	'오세아니아 파푸아뉴기니를',
	'오세아니아 바누아투를',
	'오세아니아 솔로몬제도를',
	'오세아니아 뉴질랜드를',
	'오세아니아 피지를',
	
	'남미 도미니카공화국을',
	'남미 바하마를',
	'남미 브라질을',
	'남미 과테말라를',
	'남미 베네수엘라를',
	'남미 볼리비아를',
	'남미 아르헨티나를',
	'남미 아이티를',
	'남미 에콰도르를',
	'남미 온두라스를',
	'남미 우루과이를',
	'남미 칠레를',
	'남미 콜롬비아를',
	
	'북미 미국을',
	'북미 캐나다를'
]

dataMsg = [
	'인생의 쓴맛을 느낍니다.',
	'인생의 달콤함을 느낍니다.',
	'인생무상을 경험합니다.',
	'세상이 넓다는것을 알게 됩니다.',
	'배낭을 도둑맞아 걸어서 귀국합니다.',
	'애인을 사귑니다.',
	'수공예품을 팔아서 큰 돈을 법니다.',
	'진정 회춘하게 됩니다.',
	'황혼을 너무 감동적으로 준비하게 됩니다.',
	'가정이 파탄납니다.',
	'그 나라로 귀화합니다.',
	'인생의 새로운 파트너를 만납니다.',
	'좋은 친구를 사귑니다.',
	'자서전을 씁니다.',
	'여행수필을 씁니다.'
]




























