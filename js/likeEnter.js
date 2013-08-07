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
	,ename
	,mylike
	,thum
	
window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	init()
	initStart();

	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	//btnKakao.addEventListener('click', executeURLLink, false);
	M('[data-id="btnKakao"]').on('click', executeURLLink)
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
		likes.ename = ename
		likes.result = '좋아합니다.'
		myLikes.push(likes)
		if (current < totalLength) {
			choice()
		} else {
			choiceResult()
		}
	})
	M('#btnHate').on('click', function(){
		likes.ename = ename
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
	edata = data[likesList[current]]
	ename = edata['ename']
	photo = thum = edata['photo']
	current++;
	//M('#ask').text(ename.replace('을', '').replace('를', ''))
	str = ''
	str += '<img src="../img/' + photo + '" alt=""><p>' + ename.replace('을', '').replace('를', '') + '</p>'
	M('#ask').html(str)
}

function choiceResult() {
	var  str = '<li>' + M('#userName').val() + '님은 </li>'

	M('#game').css('display', 'none');
	M('#likeResult').css('display', 'block');
	for (var i=0; i<totalLength; i++) {
		n = i+1
		str += '<li>' + n + '. ' + myLikes[i]['ename'] + ' ' + myLikes[i]['result'] + '</li>';
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
	
	postMsg += '[연예인 좋아! 싫어!]\n\n';
	postMsg += M('#userName').val() + '님은 \n';
	for (var i=0; i<totalLength; i++) {
		n = i+1
		postMsg += n + '. ' + myLikes[i]['ename'] + ' ' + myLikes[i]['result'] + '\n';
	}
	postMsg += '\nhttp://goo.gl/ft3k0z\n';

	urlMsg = {
		title: '연예인 좋아! 싫어!',
		desc: '그들은 날 좋아할까?',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + thum ],
		type:'article'
	}
console.log(postMsg, urlMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '좋아요! 싫어요!',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "연예인 좋아! 싫어!",
		url: "http://goo.gl/ft3k0z",
		appid: "funnyApp",
		appver: "1.0",
		appname: "연예인 좋아! 싫어!",
		type: "link"
	});
}


data = [
	{'photo':'vacationGirl1.png', 'ename':'클라라를'},
	{'photo':'vacationGirl2.png', 'ename':'이다희를'},
	{'photo':'vacationGirl3.png', 'ename':'아이유를'},
	{'photo':'vacationGirl4.png', 'ename':'고아성을'},
	{'photo':'vacationGirl5.png', 'ename':'걸스데이 민아를'},
	{'photo':'vacationGirl6.png', 'ename':'박하선을'},
	{'photo':'vacationGirl7.png', 'ename':'정유미를'},
	{'photo':'vacationGirl8.png', 'ename':'걸스데이 유라를'},
	{'photo':'vacationGirl9.png', 'ename':'에일리를'},
	{'photo':'vacationGirl10.png', 'ename':'소이현을'},
	{'photo':'vacationGirl11.png', 'ename':'전소민을'},
	{'photo':'vacationGirl12.png', 'ename':'하연수를'},
	{'photo':'vacationGirl13.png', 'ename':'홍진영을'},
	{'photo':'vacationGirl14.png', 'ename':'크레용팝 소율을'},
	{'photo':'vacationGirl15.png', 'ename':'소녀시대 제시카를'},
	{'photo':'vacationGirl16.png', 'ename':'고준희를'},
	{'photo':'vacationGirl17.png', 'ename':'에이핑크 박초롱을'},
	{'photo':'vacationGirl18.png', 'ename':'백아연을'},
	{'photo':'vacationBoy1.png', 'ename':'이종석을'},
	{'photo':'vacationBoy2.png', 'ename':'이현우를'},
	{'photo':'vacationBoy3.png', 'ename':'최진혁을'},
	{'photo':'vacationBoy4.png', 'ename':'양요섭을'},
	{'photo':'vacationBoy5.png', 'ename':'엠블랙 이준을'},
	{'photo':'vacationBoy6.png', 'ename':'이승기를'},
	{'photo':'vacationBoy7.png', 'ename':'김수현을'},
	{'photo':'vacationBoy8.png', 'ename':'박기웅을'},
	{'photo':'vacationBoy9.png', 'ename':'엠블랙 이기광을'},
	{'photo':'vacationBoy10.png', 'ename':'인피니트 엘을'},
	{'photo':'vacationBoy11.png', 'ename':'로이킴을'},
	{'photo':'vacationBoy12.png', 'ename':'이민호를'},
	{'photo':'vacationBoy13.png', 'ename':'주원을'},
	{'photo':'vacationBoy14.png', 'ename':'JYJ 준수를'},
	{'photo':'vacationBoy15.png', 'ename':'JYJ 유천을'},
	{'photo':'vacationBoy16.png', 'ename':'송중기를'},
	{'photo':'vacationBoy17.png', 'ename':'존박을'},
	{'photo':'vacationBoy18.png', 'ename':'윤두준을'}
]

	





























