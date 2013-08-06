var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataMale, dataFemale



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
	var  userName = document.querySelector('#userName').value
		,idx = Math.floor(Math.random()*30)
		,resultName, resultPhoto, resultMsg
		,message
		,postMsg = ''
		,urlMsg = {}
		,data
		,matchRate = Math.floor(Math.random()*50 + 50)
	
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
		// 여자일 경우 여자 연예인
		data = dataFemale;
	} else if (girlSelect.className == 'checked') {
		// 남자일 경우 남자 연예인
		data = dataMale;
	}
	
	postMsg += '미래에 ' + userName + '님과 닮을 연예인을 찾았습니다.\n\n'
	postMsg += '이름: ' + data[idx]['name'] + '\n'
	postMsg += '매치율: ' + matchRate + '%\n'
	postMsg += '특히 닮을곳: ' + data[idx]['point'] + '\n\n'
	postMsg += 'http://goo.gl/1945x'

	urlMsg = {
		title: '닮을꼴 연예인 찾기',
		desc: data[idx]['name'] + '님과 ' + matchRate + '% 닮았습니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/imgFuture/' + data[idx]['photo'] ],
		type:'article'
	}

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '닮을꼴 연예인 찾기',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "미래에 나와 닮을 연예인을 찾아보자.",
		url: "http://goo.gl/1945x",
		appid: "funnyApp",
		appver: "1.0",
		appname: "닮을꼴 연예인 찾기",
		type: "link"
	});
}


dataMale = [
	{'name': '고두심', 'photo': 'f01.jpeg', 'point':'품위있게 늙으시네요.'},
	{'name': '김수미', 'photo': 'f02.jpeg', 'point':'눈 모양이 똑같아요.'},
	{'name': '양희은', 'photo': 'f03.jpeg', 'point':'쩌렁쩌렁한 목소리'},
	{'name': '황신혜', 'photo': 'f04.jpeg', 'point':'포토샵 미모'},
	{'name': '인순이', 'photo': 'f05.jpeg', 'point':'이 나이까지 힙합모자 쓰고 다니십니다.'},
	{'name': '윤여정', 'photo': 'f06.jpeg', 'point':'부잣집 시어머니'},
	{'name': '이미영', 'photo': 'f07.jpeg', 'point':'얄미운 시어머니'},
	{'name': '박원숙', 'photo': 'f08.jpeg', 'point':'나이 들어도 명품백이 잘어울려요'},
	{'name': '김용림', 'photo': 'f09.jpeg', 'point':'못되게 늙음'},
	{'name': '이미자', 'photo': 'f10.jpeg', 'point':'대한민국 최고의 목소리'},
	{'name': '김자옥', 'photo': 'f11.jpeg', 'point':'공주는 외로워'},
	{'name': '김영옥', 'photo': 'f12.jpeg', 'point':'피부관리 좀 하세요'},
	{'name': '노사연', 'photo': 'f13.jpeg', 'point':'한때 국민 꽃사슴'},
	{'name': '엄앵란', 'photo': 'f14.jpeg', 'point':'목소리 듣기 싫음'},
	{'name': '선우용녀', 'photo': 'f15.jpeg', 'point':'나이 들어도 귀여우세요'},
	{'name': '나문희', 'photo': 'f16.jpeg', 'point':'국민엄마'},
	{'name': '현미', 'photo': 'f17.jpeg', 'point':'못생겼음'},
	{'name': '강부자', 'photo': 'f18.jpeg', 'point':'국민 할머니'},
	{'name': '하춘화', 'photo': 'f19.jpeg', 'point':'튀어나올듯 동그란 큰 눈'},
	{'name': '전원주', 'photo': 'f20.jpeg', 'point':'못생겼어도 돈은많다'},
	{'name': '김혜자', 'photo': 'f21.jpeg', 'point':'한국의 오드리 헵번'},
	{'name': '사미자', 'photo': 'f22.jpeg', 'point':'잊혀져가는 얼굴'},
	{'name': '이영애', 'photo': 'f23.jpeg', 'point':'이렇게 늙으면 최고'},
	{'name': '김혜수', 'photo': 'f24.jpeg', 'point':'나이 들어도 글래머'},
	{'name': '고소영', 'photo': 'f25.jpeg', 'point':'남편 잘 만나셨네요.'},
	{'name': '박해미', 'photo': 'f26.jpeg', 'point':'오케이'},
	{'name': '배종옥', 'photo': 'f27.jpeg', 'point':'실물이 더 예쁨'},
	{'name': '이선희', 'photo': 'f28.jpeg', 'point':'작지만 넘치는 카리스마'},
	{'name': '신은경', 'photo': 'f29.jpeg', 'point':'이정도면 양호'},
	{'name': '박미선', 'photo': 'f30.jpeg', 'point':'남편 잘 만나셨네요.'}
]

dataFemale = [
	{'name': '최민수', 'photo': 'm01.jpeg', 'point':'넌 나에게 모욕감을 줬어.'},
	{'name': '이문세', 'photo': 'm02.jpeg', 'point':'길고 날씬한 얼굴'},
	{'name': '유동근', 'photo': 'm03.jpeg', 'point':'애인'},
	{'name': '임재범', 'photo': 'm04.jpeg', 'point':'노래부르기전에 생수 마시는 모습'},
	{'name': '송해', 'photo': 'm05.jpeg', 'point':'포근한 뱃살'},
	{'name': '조용필', 'photo': 'm06.jpeg', 'point':'나이가 들어도 가왕의 명성은 시들지 않습니다.'},
	{'name': '오현경', 'photo': 'm07.jpeg', 'point':'편안한 눈가의 주름'},
	{'name': '이경규', 'photo': 'm08.jpeg', 'point':'뻐드렁니'},
	{'name': '최민식', 'photo': 'm09.jpeg', 'point':'우수에 찬 눈빛'},
	{'name': '송창식', 'photo': 'm10.jpeg', 'point':'친근감 있는 눈가 주름'},
	{'name': '조영남', 'photo': 'm11.jpeg', 'point':'나이들어서도 톡톡한 개성은 여전하네요.'},
	{'name': '나훈아', 'photo': 'm12.jpeg', 'point':'터프한 상남자의 모습'},
	{'name': '이덕화', 'photo': 'm13.jpeg', 'point':'쾌활한 웃음 소리'},
	{'name': '김영철', 'photo': 'm14.jpeg', 'point':'명품 애꾸눈 연기'},
	{'name': '김갑수', 'photo': 'm15.jpeg', 'point':'예술에 대한 열정'},
	{'name': '태진아', 'photo': 'm16.jpeg', 'point':'친구랑 다투기'},
	{'name': '전영록', 'photo': 'm17.jpeg', 'point':'늙지 않을듯..'},
	{'name': '김용건', 'photo': 'm18.jpeg', 'point':'턱과 목의 불분명한 경계선'},
	{'name': '이순재', 'photo': 'm19.jpeg', 'point':'야동을 못끊어요.'},
	{'name': '안성기', 'photo': 'm20.jpeg', 'point':'눈주위에 날개처럼 활짝 핀 주름'},
	{'name': '송대관', 'photo': 'm21.jpeg', 'point':'친구랑 다투기'},
	{'name': '배철수', 'photo': 'm22.jpeg', 'point':'머리카락과 콧털 깔맞춤'},
	{'name': '최불암', 'photo': 'm23.jpeg', 'point':'목소리가 제대로 나오지 않아요. 파~'},
	{'name': '전광열', 'photo': 'm24.jpeg', 'point':'허리에 칼을 차고 다닙니다.'},
	{'name': '최종원', 'photo': 'm25.jpeg', 'point':'안경위로 넘어서 쳐다 봄'},
	{'name': '박영규', 'photo': 'm26.jpeg', 'point':'말할때 손을 좌우로 흔들어야 함'},
	{'name': '설운도', 'photo': 'm27.jpeg', 'point':'핸썸한 얼굴...하지만 훌러덩~'},
	{'name': '허경영', 'photo': 'm28.jpeg', 'point':'당신은 공중부양 성공합니다.'},
	{'name': '신구', 'photo': 'm29.jpeg', 'point':'호탕하게 웃는 모습'},
	{'name': '김흥국', 'photo': 'm30.jpeg', 'point':'덥수룩한 콧털'}
]
















