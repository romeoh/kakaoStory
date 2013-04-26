var  userName
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataMale, dataFemale

//window.addEventListener("load", initPage, false);
//function initPage(){
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
//}

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
	
	postMsg += '미래에 김철수 님과 닮을 연예인을 찾았습니다.\n\n'
	postMsg += '이름: 이경규\n'
	postMsg += '매치율: 98%\n'
	postMsg += '특히 닮은곳: 뻐드렁니\n'
	postMsg += ''

	urlMsg = {
		title: '닮을꼴 연예인 찾기',
		desc: data[idx]['name'] + '님과 ' + matchRate + '% 닮았습니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/imgFuture/' + data[idx]['photo'] ],
		type:'article'
	}
	console.log(urlMsg)
	return
	kakao.link("story").send({   
        post : resultName + '씨가 ' + userName + '님과 커피를 마시고 싶어 합니다. \n받아주실꺼죠? \n\nhttp://goo.gl/RPVB5',
        appid : 'funnyApp',
		appver : '1.0',
		appname : '연예인과 커피한잔',
		urlinfo : JSON.stringify({title: resultName + '씨로부터 메세지', desc: userName + '님 ' + message, imageurl:['https://raw.github.com/romeoh/kakaoStory/gh-pages/img/'+resultPhoto], type:'article'})
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "커피한잔 하실래요?",
		url: "http://goo.gl/RPVB5",
		appid: "funnyApp",
		appver: "1.0",
		appname: "연예인과 커피한잔",
		type: "link"
	});
}


dataMale = [
	{'name': '고두심', 'photo': 'f01.jpeg', 'point':''},
	{'name': '김수미', 'photo': 'f02.jpeg', 'point':''},
	{'name': '양희은', 'photo': 'f03.jpeg', 'point':''},
	{'name': '황신혜', 'photo': 'f04.jpeg', 'point':''},
	{'name': '인순이', 'photo': 'f05.jpeg', 'point':''},
	{'name': '윤여정', 'photo': 'f06.jpeg', 'point':''},
	{'name': '이미영', 'photo': 'f07.jpeg', 'point':''},
	{'name': '박원숙', 'photo': 'f08.jpeg', 'point':''},
	{'name': '김용림', 'photo': 'f09.jpeg', 'point':''},
	{'name': '이미자', 'photo': 'f10.jpeg', 'point':''},
	{'name': '김자옥', 'photo': 'f11.jpeg', 'point':''},
	{'name': '김영옥', 'photo': 'f12.jpeg', 'point':''},
	{'name': '노사연', 'photo': 'f13.jpeg', 'point':''},
	{'name': '엄앵란', 'photo': 'f14.jpeg', 'point':''},
	{'name': '선우용녀', 'photo': 'f15.jpeg', 'point':''},
	{'name': '나문희', 'photo': 'f16.jpeg', 'point':''},
	{'name': '현미', 'photo': 'f17.jpeg', 'point':''},
	{'name': '강부자', 'photo': 'f18.jpeg', 'point':''},
	{'name': '하춘화', 'photo': 'f19.jpeg', 'point':''},
	{'name': '전원주', 'photo': 'f20.jpeg', 'point':''},
	{'name': '김혜자', 'photo': 'f21.jpeg', 'point':''},
	{'name': '사미자', 'photo': 'f22.jpeg', 'point':''},
	{'name': '이영애', 'photo': 'f23.jpeg', 'point':''},
	{'name': '김혜수', 'photo': 'f24.jpeg', 'point':''},
	{'name': '고소영', 'photo': 'f25.jpeg', 'point':''},
	{'name': '박해미', 'photo': 'f26.jpeg', 'point':''},
	{'name': '배종옥', 'photo': 'f27.jpeg', 'point':''},
	{'name': '이선희', 'photo': 'f28.jpeg', 'point':''},
	{'name': '신은경', 'photo': 'f29.jpeg', 'point':''},
	{'name': '박미선', 'photo': 'f30.jpeg', 'point':''}
]

dataFemale = [
	{'name': '최민수', 'photo': 'm01.jpeg', 'point':'넌 나에게 모욕감을 줬어.'},
	{'name': '이문세', 'photo': 'm02.jpeg', 'point':'길고 날씬한 얼굴'},
	{'name': '유동근', 'photo': 'm03.jpeg', 'point':'애인'},
	{'name': '임재범', 'photo': 'm04.jpeg', 'point':'노래부르기전에 생수 마시는 모습'},
	{'name': '송해', 'photo': 'm05.jpeg', 'point':'포근한 뱃살'},
	{'name': '조용필', 'photo': 'm06.jpeg', 'point':''},
	{'name': '오현경', 'photo': 'm07.jpeg', 'point':''},
	{'name': '이경규', 'photo': 'm08.jpeg', 'point':''},
	{'name': '최민식', 'photo': 'm09.jpeg', 'point':''},
	{'name': '송창식', 'photo': 'm10.jpeg', 'point':''},
	{'name': '조영남', 'photo': 'm11.jpeg', 'point':''},
	{'name': '나훈아', 'photo': 'm12.jpeg', 'point':''},
	{'name': '이덕화', 'photo': 'm13.jpeg', 'point':''},
	{'name': '김영철', 'photo': 'm14.jpeg', 'point':''},
	{'name': '김갑수', 'photo': 'm15.jpeg', 'point':''},
	{'name': '태진아', 'photo': 'm16.jpeg', 'point':''},
	{'name': '전영록', 'photo': 'm17.jpeg', 'point':''},
	{'name': '김용건', 'photo': 'm18.jpeg', 'point':''},
	{'name': '이순재', 'photo': 'm19.jpeg', 'point':''},
	{'name': '안성기', 'photo': 'm20.jpeg', 'point':''},
	{'name': '송대관', 'photo': 'm21.jpeg', 'point':''},
	{'name': '배철수', 'photo': 'm22.jpeg', 'point':''},
	{'name': '최불암', 'photo': 'm23.jpeg', 'point':''},
	{'name': '전광열', 'photo': 'm24.jpeg', 'point':''},
	{'name': '최종원', 'photo': 'm25.jpeg', 'point':''},
	{'name': '박영규', 'photo': 'm26.jpeg', 'point':''},
	{'name': '설운도', 'photo': 'm27.jpeg', 'point':''},
	{'name': '허경영', 'photo': 'm28.jpeg', 'point':''},
	{'name': '신구', 'photo': 'm29.jpeg', 'point':''},
	{'name': '김흥국', 'photo': 'm30.jpeg', 'point':''}
]
















