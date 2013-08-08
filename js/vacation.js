var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')



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
	var  sexType
		,userName = document.querySelector('#userName').value
		,postMsg = ''
		,who
		,place = Math.floor(Math.random() * dataPlace.length)
		,long = Math.floor(Math.random() * dataLong.length)
	
	//idx < 10 ? idx = '0' + idx : idx
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}

	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	if (boySelect.className == 'checked') {
		data = dataBoy
		who = Math.floor(Math.random() * dataBoy.length)
	} else if (girlSelect.className == 'checked') {
		data = dataGirl
		who = Math.floor(Math.random() * dataGirl.length)
	}
	console.log(data[who]['name'])
	
	postMsg += '[함께 휴가가는 연예인]\n';
	postMsg += M('#userName').val() + '님은 ' + data[who]['name'] + '\n';
	postMsg += dataPlace[place]['place'] + '에 ' + dataLong[long]['long'] + ' 여행갑니다.\n\n';
	postMsg += '축하합니다.\n\n';
	postMsg += 'http://goo.gl/pxiUqd\n';

	urlMsg = {
		title: '함께 휴가가는 연예인',
		desc: data[who]['name']+' 포레버~\n거기서 그냥 사세요.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + data[who]['photo'] ],
		type:'article'
	}
console.log(postMsg, urlMsg)
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
		msg: "함께 휴가가는 연예인",
		url: "http://goo.gl/pxiUqd",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}


function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}

dataBoy = [
	{'photo':'vacationGirl1.png', 'name':'클라라와'},
	{'photo':'vacationGirl2.png', 'name':'이다희와'},
	{'photo':'vacationGirl3.png', 'name':'아이유와'},
	{'photo':'vacationGirl4.png', 'name':'고아성과'},
	{'photo':'vacationGirl5.png', 'name':'걸스데이 민아와'},
	{'photo':'vacationGirl6.png', 'name':'박하선과'},
	{'photo':'vacationGirl7.png', 'name':'정유미와'},
	{'photo':'vacationGirl8.png', 'name':'걸스데이 유라와'},
	{'photo':'vacationGirl9.png', 'name':'에일리와'},
	{'photo':'vacationGirl10.png', 'name':'소이현과'},
	{'photo':'vacationGirl11.png', 'name':'전소민과'},
	{'photo':'vacationGirl12.png', 'name':'하연수와'},
	{'photo':'vacationGirl13.png', 'name':'홍진영과'},
	{'photo':'vacationGirl14.png', 'name':'크레용팝 소율과'},
	{'photo':'vacationGirl15.png', 'name':'소녀시대 제시카와'},
	{'photo':'vacationGirl16.png', 'name':'고준희와'},
	{'photo':'vacationGirl17.png', 'name':'에이핑크 박초롱과'},
	{'photo':'vacationGirl18.png', 'name':'백아연과'}
]

dataGirl = [
	{'photo':'vacationBoy1.png', 'name':'이종석과'},
	{'photo':'vacationBoy2.png', 'name':'이현우와'},
	{'photo':'vacationBoy3.png', 'name':'최진혁과'},
	{'photo':'vacationBoy4.png', 'name':'양요섭과'},
	{'photo':'vacationBoy5.png', 'name':'엠블랙 이준과'},
	{'photo':'vacationBoy6.png', 'name':'이승기와'},
	{'photo':'vacationBoy7.png', 'name':'김수현과'},
	{'photo':'vacationBoy8.png', 'name':'박기웅과'},
	{'photo':'vacationBoy9.png', 'name':'엠블랙 이기광과'},
	{'photo':'vacationBoy10.png', 'name':'인피니트 엘과'},
	{'photo':'vacationBoy11.png', 'name':'로이킴과'},
	{'photo':'vacationBoy12.png', 'name':'이민호와'},
	{'photo':'vacationBoy13.png', 'name':'주원과'},
	{'photo':'vacationBoy14.png', 'name':'JYJ 준수와'},
	{'photo':'vacationBoy15.png', 'name':'JYJ 유천과'},
	{'photo':'vacationBoy16.png', 'name':'송중기와'},
	{'photo':'vacationBoy17.png', 'name':'존박과'},
	{'photo':'vacationBoy18.png', 'name':'윤두준과'}
]

dataPlace = [
	{'place':'경포대 해수욕장'},
	{'place':'해운대 해수욕장'},
	{'place':'일본 후쿠시마'},
	{'place':'일본 오키나와'},
	{'place':'중국 상하이'},
	{'place':'미국 하와이'},
	{'place':'제주도'},
	{'place':'인도네시아 발리'},
	{'place':'필리핀 세부'},
	{'place':'영국 런던'},
	{'place':'프랑스 파리'},
	{'place':'그리스'},
	{'place':'아프리카 케냐'},
	{'place':'개성공단'},
	{'place':'비무장지대 DMZ'},
	{'place':'대만'},
	{'place':'피지'},
	{'place':'호주 시드니'},
	{'place':'말레이시아 쿠알라룸푸르'}
]

dataLong = [
	{'long':'당일치기로'},
	{'long':'1박 2일 동안'},
	{'long':'2박 3일 동안'},
	{'long':'3박 4일 동안'},
	{'long':'4박 5일 동안'},
	{'long':'5박 6일 동안'},
	{'long':'일주일 동안'},
	{'long':'이주일 동안'},
	{'long':'한달 동안'},
	{'long':'두달 동안'},
	{'long':'3개월간'},
	{'long':'6개월간'},
	{'long':'1년 동안'},
	{'long':'2년 동안'},
	{'long':'5년 동안'},
	{'long':'10년 동안'}
]































