var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,settleData = []

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
		,postMsg = ''
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	settle(dataWord, 5);
	matchRate0 = randomRange(50, 100)
	matchRate1 = randomRange(40, matchRate0)
	matchRate2 = randomRange(30, matchRate1)
	matchRate3 = randomRange(10, matchRate2)
	matchRate4 = randomRange(0, matchRate3)
	
	postMsg += '['+userName+', 하면 연상되는 단어]\n\n';
	postMsg += '1위: ' + dataWord[settleData[0]] + ' (' + matchRate0 + '%)\n';
	postMsg += '2위: ' + dataWord[settleData[1]] + ' (' + matchRate1 + '%)\n';
	postMsg += '3위: ' + dataWord[settleData[2]] + ' (' + matchRate2 + '%)\n';
	postMsg += '4위: ' + dataWord[settleData[3]] + ' (' + matchRate3 + '%)\n';
	postMsg += '5위: ' + dataWord[settleData[4]] + ' (' + matchRate4 + '%)\n\n';
	postMsg += 'http://goo.gl/nzwC5';
	
	urlMsg = {
		title: '내이름 연상단어',
		desc: dataWord[settleData[0]],
		imageurl: ['http://romeoh.github.io/kakaoStory/img/dog.jpg'],
		type:'article'
	}

	console.log(postMsg, urlMsg)
	
	kakao.link("story").send({   
		post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '내이름 연상단어',
		urlinfo : JSON.stringify(urlMsg)
    });
}

function settle(data, leng) {
	ranValue = Math.floor(Math.random() * data.length)
	if (settleData.length === 0) {
		settleData.push(ranValue);
		settle(data, leng)
	} else {
		if (settleData.length >= leng) {
			return settleData;
		} else {
			for (var i=0; i<settleData.length; i++) {
				if (settleData[i] === ranValue) {
					settle(data, leng);
					break;
				}
			}
			
			if (settleData.length <= leng-1) {
				settleData.push(ranValue);
				settle(data, leng)
			}
		}
	}
	return settleData
}

function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "내이름 연상단어",
		url: "http://goo.gl/nzwC5",
		appid: "funnyApp",
		appver: "1.0",
		appname: "내이름하면 떠오르는 단어",
		type: "link"
	});
}


dataWord = [
	'볼이트니스킨발라',
	'난방고양이',
	'오즈의맙소사',
	'빨간망또라이',
	'선녀와사겼꾼',
	'난앓라요',
	'바람과함께살빠지다',
	'마이클쪼다',
	'피바다연하',
	'오즈의 연하',
	'니 이모를 찾아',
	'짱구는 옷말려',
	'빵꾸똥꾸',
	'넌강동희였어',
	'환갑포청천',
	'미션임파썩을',
	'백살공주와칠순난장이',
	'루돌프가슴커',
	'무즙파워라이드',
	'친정간금자씨',
	'센과치히로의생사불명',
	'오드리될뻔',
	'달마다하자',
	'아침마담',
	'동갑내기 가장하기',
	'홈런왕 편승엽',
	'닭둘기튀김',
	'상두야2차가자',
	'피부암유리',
	'간꽁치',
	'시베리안허숙희',
	'옷사마빈라덴',
	'건넛집토토로',
	'백마탄환자',
	'SG원넓이',
	'영구교실',
	'이웃집또털어',
	'안졸리나졸리지',
	'이쑤신장군',
	'무한도발',
	'수비고양이',
	'초보파이',
	'여자라서햄볶아요',
	'광복절반사',
	'피부암통키',
	'반만고양이',
	'말걸지마',
	'추격60분',
	'축구왕숏다리',
	'오사마빈모뎀',
	'순데렐라',
	'선녀와사기꾼',
	'체험살해현장',
	'마약팔이소녀',
	'양들의뒷북',
	'발광머리앤',
	'명란젓코난',
	'사담후시딘',
	'꼬출든낭자',
	'껌은고양이',
	'북한탐정김정일',
	'오량진',
	'부릅뜨니숲이었어',
	'니콜키크드만',
	'오드리햇반',
	'핸젤과그랬데',
	'이웃집토넘쳐',
	'살인의추석',
	'반지하의제왕',
	'아놀드슈왈츠가제네냐',
	'똥낀도너츠',
	'악의공룡둘리',
	'황홀해서새벽까지',
	'켈로그콘프로토스',
	'짱구는못질중',
	'식후세번양아치짓',
	'클레오빡돌아',
	'미안하다관심없다',
	'글래머웨이터'
]































































































