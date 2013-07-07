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
		,adMiddle = document.querySelector('#adMiddle')
	document.querySelector('body').removeChild(adTop)
	document.querySelector('body').removeChild(adBottom)
	document.querySelector('body').removeChild(adMiddle)
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
		,sexType
		,part = ''
	
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}

	if (M('#userName').val() == '') {
		alert('이름을 입력하세요.');
		return false;
	}
	
	if (boySelect.className == 'checked') {
		// 남자
		partner = dataGirl[Math.floor(Math.random() * dataGirl.length)]
		part = '아내';
	} else if (girlSelect.className == 'checked') {
		// 여자
		partner = dataBoy[Math.floor(Math.random() * dataBoy.length)]
		part = '남편';
	}

	postMsg += '[미래 애인 추적기]\n\n';
	postMsg += M('#userName').val() + '님의 미래의 ' + part + '는\n';
	postMsg += partner['name'] + '입니다.\n\n';
	postMsg += 'http://goo.gl/lmysH\n';

	
	urlMsg = {
		title: '미래의 ' + part,
		desc: '미리 알아보는 내 미래의 ' + part,
		imageurl: ['http://romeoh.github.io/kakaoStory/imgEnter/' + partner['photo']],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : partner['name'] + '입니다.',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

function getRandom(min, max){
	return Math.floor((Math.random() * (max-min) + min))
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "미래 애인 추적기",
		url: "http://goo.gl/lmysH",
		appid: "funnyApp",
		appver: "1.0",
		appname: "미래 애인 추적기",
		type: "link"
	});
}


dataBoy = [
	{'name':'조정석', 'photo':'boy1.png'},
	{'name':'장혁', 'photo':'boy2.png'},
	{'name':'원빈', 'photo':'boy3.png'},
	{'name':'강동원', 'photo':'boy4.png'},
	{'name':'현빈', 'photo':'boy5.png'},
	{'name':'공유', 'photo':'boy6.png'},
	{'name':'조인성', 'photo':'boy7.png'},
	{'name':'소지섭', 'photo':'boy8.png'},
	{'name':'이준기', 'photo':'boy9.png'},
	{'name':'류승범', 'photo':'boy10.png'},
	{'name':'송승헌', 'photo':'boy11.png'},
	{'name':'송중기', 'photo':'boy12.png'},
	{'name':'박재범', 'photo':'boy13.png'},
	{'name':'김현중', 'photo':'boy14.png'},
	{'name':'탑', 'photo':'boy15.png'},
	{'name':'김제동', 'photo':'boy16.jpg'},
	{'name':'김영철', 'photo':'boy17.jpg'},
	{'name':'옥동자', 'photo':'boy18.jpg'}
]


dataGirl = [
	{'name':'아이유', 'photo':'girl1.png'},
	{'name':'수지', 'photo':'girl2.png'},
	{'name':'홍진영', 'photo':'girl3.png'},
	{'name':'김태희', 'photo':'girl4.png'},
	{'name':'송혜교', 'photo':'girl5.png'},
	{'name':'송지효', 'photo':'girl6.png'},
	{'name':'이민정', 'photo':'girl7.png'},
	{'name':'아이비', 'photo':'girl8.png'},
	{'name':'임수정', 'photo':'girl9.png'},
	{'name':'한지민', 'photo':'girl10.png'},
	{'name':'김세아', 'photo':'girl11.png'},
	{'name':'김하늘', 'photo':'girl12.png'},
	{'name':'성유리', 'photo':'girl13.png'},
	{'name':'민아', 'photo':'girl14.png'},
	{'name':'문근영', 'photo':'girl15.png'},
	{'name':'오나미', 'photo':'girl16.jpg'},
	{'name':'박지선', 'photo':'girl17.jpg'},
	{'name':'정주리', 'photo':'girl18.jpg'},
	{'name':'신봉선', 'photo':'girl19.jpg'}
]













































