var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,data
	,likesList
	,totalLength = 10
	,current = 0
	,myLikes = []
	,likes = {}
	,title
	,mylike
	

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
	init()
	initStart();

	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}

// 초기화
function init() {
	likesList = []
	arr16 = []
	arr8 = []
	arr4 = []
	arr2 = []
	arr1 = []
	cuRound = 0
	cuStage = 32
}


function initStart() {
	M('#userName').on('keyup', function(evt, mp){
		//M('h1').text('연예인 이상형 '+mp.val()+'컵')
	})

	M('#btnStart').click(function(){
		if (M('#userName').val() == '') {
			alert('이름을 입력하세요.');
			return;
		}
		insertLikes(data, totalLength)
		start(0)
	})
}


function start(flag) {
	M('#start').css('display', 'none');
	M('#game').css('display', 'block');
	
	M('#btnLike').on('click', function(){
		likes.title = title
		likes.result = '좋아합니다.'
		myLikes.push(likes)
		if (current < totalLength) {
			choice()
		} else {
			choiceResult()
		}
	})
	M('#btnHate').on('click', function(){
		likes.title = title
		likes.result = '싫어합니다.'
		myLikes.push(likes)
		if (current < totalLength) {
			choice()
		} else {
			choiceResult()
		}
	})
	choice();
}

function choice() {
	likes = {}
	title = data[likesList[current]]['obj']
	current++;
	M('#ask').text(title.replace('을', '').replace('를', ''))
}

function choiceResult() {
	var  str = '<li>' + M('#userName').val() + '님은 </li>'

	M('#game').css('display', 'none');
	M('#likeResult').css('display', 'block');
	for (var i=0; i<totalLength; i++) {
		n = i+1
		str += '<li>' + n + '. ' + myLikes[i]['title'] + ' ' + myLikes[i]['result'] + '</li>';
	}
	M('#myResult').html(str)
}

function insertLikes(data, leng) {
	ranValue = Math.floor(Math.random() * data.length)
	if (likesList.length === 0) {
		likesList.push(ranValue);
		insertLikes(data, leng)
	} else {
		if (likesList.length >= leng) {
			return likesList;
		} else {
			for (var i=0; i<likesList.length; i++) {
				if (likesList[i] === ranValue) {
					return insertLikes(data, leng);
					break;
				}
			}
			
			if (likesList.length <= leng-1) {
				likesList.push(ranValue);
				return insertLikes(data, leng)
			}
		}
	}
	return likesList
	
}

function getRanNum(arr, val){
	for (var arrVal in arr) {
		val
	}
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  sexType
		,userName = document.querySelector('#userName').value
		,postMsg = ''
	
	postMsg += '[나의 취향을 알려드릴께요.]\n\n';
	postMsg += M('#userName').val() + '님은 \n';
	for (var i=0; i<totalLength; i++) {
		n = i+1
		postMsg += n + '. ' + myLikes[i]['title'] + ' ' + myLikes[i]['result'] + '\n';
	}
	postMsg += '\nhttp://goo.gl/ft3k0z\n';

	urlMsg = {
		title: '나의 취향 공유하기',
		desc: '데이트 신청하실 때 참고하세요.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/like.png' ],
		type:'article'
	}
console.log(postMsg, urlMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '싫어요! 좋아요!',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "나의 취향 공유하기",
		url: "http://goo.gl/ft3k0z",
		appid: "funnyApp",
		appver: "1.0",
		appname: "나의 취향 공유하기",
		type: "link"
	});
}


data = [
	{'obj': '치킨을'},
	{'obj': '아이돌을'},
	{'obj': '바람둥이를'},
	{'obj': '나쁜남자(여자)를'},
	{'obj': '비타500를'},
	{'obj': '무한도전을'},
	{'obj': '런닝맨을'},
	{'obj': '유재석을'},
	{'obj': '구글을'},
	{'obj': 'HOT6를'},
	{'obj': '피자를'},
	{'obj': '성형수술을'},
	{'obj': '카톡을'},
	{'obj': '카카오스토리를'},
	{'obj': '맥주를'},
	{'obj': '소주를'},
	{'obj': '삼겹살을'},
	{'obj': '스테이크를'},
	{'obj': '샐러드를'},
	{'obj': '루이비똥을'},
	{'obj': '프라다를'},
	{'obj': '야식을'},
	{'obj': '와인을'},
	{'obj': '야구를'},
	{'obj': '놀이공원을'},
	{'obj': '라디오를'},
	{'obj': '메이플스토리를'},
	{'obj': '박명수를'},
	{'obj': '컵라면을'},
	{'obj': '신보라를'},
	{'obj': '내숭을'},
	{'obj': '박규리를'},
	{'obj': '홍석천을'},
	{'obj': '소개팅을'},
	{'obj': '클럽을'},
	{'obj': '장근석을'},
	{'obj': '돈을'},
	{'obj': '식혜를'},
	{'obj': '다큐멘터리를'},
	{'obj': '눈오는날을'},
	{'obj': '이승기를'},
	{'obj': '생크림케잌을'},
	{'obj': '내 키를'},
	{'obj': '단발머리를'},
	{'obj': '미니스커트를'},
	{'obj': '근육질을'},
	{'obj': '영화를'},
	{'obj': '찜질방을'},
	{'obj': '팥빙수를'},
	{'obj': '된장녀를'},
	{'obj': '가죽자켓을'},
	{'obj': '오토바이를'},
	{'obj': '바나나맛우유를'},
	{'obj': '치즈를'},
	{'obj': '바나나보트를'},
	{'obj': '이성친구를'},
	{'obj': '셀카찍기를'},
	{'obj': '티아라를'},
	{'obj': '결혼을'},
	{'obj': '수영을'},
	{'obj': '키스를'},
	{'obj': '스킨십을'},
	{'obj': '손연재를'},
	{'obj': '문신을'},
	{'obj': '뱀을'},
	{'obj': '송승헌을'},
	{'obj': '드라마를'},
	{'obj': '아이폰을'},
	{'obj': '걸그룹을'},
	{'obj': '웹툰을'},
	{'obj': '슈퍼스타K를'},
	{'obj': '안드로이드를'},
	{'obj': '크리스피크림을'},
	{'obj': '맹승지를'},
	{'obj': '일본을'},
	{'obj': '페이스북을'},
	{'obj': '순대를'},
	{'obj': '아이유를'},
	{'obj': '오나미를'}
]































