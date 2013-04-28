var  userName
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataDrink, dataMount, dataAction

//window.addEventListener("load", initPage, false);
//function initPage(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
//}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  sexType
		,userName = document.querySelector('#userName').value
		,resultName, resultPhoto, resultMsg
		,message
		,postMsg = ''
		,dataHumanRan = Math.floor(Math.random() * dataHuman.length)
		,dataAreaRan = Math.floor(Math.random() * dataArea.length)
		,dataLongRan = Math.floor(Math.random() * dataLong.length)
		,dataPointRan = Math.floor(Math.random() * dataPoint.length)
		,dataLikeRan = Math.floor(Math.random() * dataLike.length)
		,dataHateRan = Math.floor(Math.random() * dataHate.length)
		
	
	if (userName == '') {
		alert('아기 이름을 입력해 주세요.');
		return false;
	}

	postMsg += userName + ' 아기는 전생에 ' + dataHuman[dataHumanRan]['name'] + ' 이었습니다.\n\n';
	postMsg += '생존지역: ' + dataArea[dataAreaRan] + '\n';
	postMsg += '생존기간: ' + dataLong[dataLongRan] + '\n';
	postMsg += '특징: ' + dataPoint[dataPointRan] + '\n';
	postMsg += '좋아했던것: ' + dataLike[dataLikeRan] + '\n';
	postMsg += '싫어했던것: ' + dataHate[dataHateRan] + '\n\n';
	postMsg += 'http://goo.gl/uxpnz';

	urlMsg = {
		title: '내아기 전생 알아보기',
		desc: '내아기는 ' + dataHuman[dataHumanRan]['name'] + ' 이었습니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + dataHuman[dataHumanRan]['photo'] ],
		type:'article'
	}

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '내아기 전생 알아보기',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "내아기 전생 알아보기",
		url: "http://goo.gl/uxpnz",
		appid: "funnyApp",
		appver: "1.0",
		appname: "내아기 전생 알아보기",
		type: "link"
	});
}




dataHuman = [
	{'name':'세종대왕', photo:'before01.jpg'},
	{'name':'이순신 장군', photo:'before02.jpg'},
	{'name':'안중근 의사', photo:'before03.jpg'},
	{'name':'아인슈타인', photo:'before04.jpg'},
	{'name':'찰리 채플린', photo:'before05.jpg'},
	{'name':'링컨 대통령', photo:'before06.jpg'},
	{'name':'레오나르도 다빈치', photo:'before07.jpg'},
	{'name':'민족의 시조 단군', photo:'before08.jpg'},
	{'name':'평범한 농부', photo:'before09.jpg'},
	{'name':'가난한 서민', photo:'before10.jpg'},
	{'name':'마릴린 먼로', photo:'before11.jpg'},
	{'name':'오드리햅번', photo:'before12.jpg'},
	{'name':'엘비스 프레슬리', photo:'before13.jpg'},
	{'name':'알레스카 김상덕', photo:'before14.jpg'}
]

dataArea = [
	'한국',
	'미국',
	'중국',
	'유럽',
	'아프리카',
	'일본',
	'외계',
	'안드로메다',
	'두메산골'
]

dataLong = [
	'34년',
	'36년',
	'42년',
	'44년',
	'48년',
	'51년',
	'52년',
	'58년',
	'64년',
	'66년',
	'68년',
	'70년',
	'101년',
	'112년',
	'210년',
	'1300년'
]

dataPoint = [
	'망해가던 나라를 구했습니다.',
	'잘살던 나라를 말아먹었습니다.',
	'새로운 나라를 만들었습니다.',
	'무식한 사람들을 계몽했습니다.',
	'적군을 무찔러 나라를 지켰습니다.',
	'나라를 배반하고 이웃나라에 나라를 팔아버렸습니다.',
	'평생 100억원을 벌었습니다.',
	'못사는 사람들을 도와줬습니다.',
	'세계최고의 코메디언 이었습니다.',
	'너무 잘생겨서 모두가 부러워했습니다.',
	'바람둥이 였습니다.',
	'모든 재산을 사회에 기부했습니다.',
	'노예를 해방시켰습니다.'
]


dataLike = [
	'먹는것',
	'자는것',
	'이성교제',
	'쇼핑',
	'거짓말',
	'짜장면',
	'엄마',
	'외제차',
	'친구 괴롭히기',
	'엄마 괴롭히기',
	'TV보는것'
]

dataHate = [
	'당근',
	'엄마친구 아들',
	'엄마친구 딸',
	'친구들이 놀리는것',
	'공부하기',
	'운동하기',
	'일찍 일어나기',
	'일찍 자기',
	'밥 먹는거',
	'조용히 앉아있기'
]




























