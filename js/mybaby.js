var  userName
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataDrink, dataMount, dataAction

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
	var  sexType
		,userName = document.querySelector('#userName').value
		,resultName, resultPhoto, resultMsg
		,message
		,postMsg = ''
		,dataJobRan = Math.floor(Math.random() * dataJob.length)
		,ran0 = Math.floor(Math.random() * dataStar.length)
		,ran1 = Math.floor(Math.random() * dataStar.length)
		,ran2 = Math.floor(Math.random() * dataStar.length)
		,ran3 = Math.floor(Math.random() * dataStar.length)
		,ran4 = Math.floor(Math.random() * dataStar.length)
	
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}
	
	if (userName == '') {
		alert('아기 이름을 입력해 주세요.');
		return false;
	}
	
	if (boySelect.className == 'checked') {
		// 남자일 경우
		photo = 'babyBoy.jpg';
	} else if (girlSelect.className == 'checked') {
		// 여자일 경우
		photo = 'babyGirl.jpg';
	}

	postMsg += userName + '아기는 10년뒤 ' + dataJob[dataJobRan] + '\n\n';
	postMsg += '성격: ' + dataStar[ran0] + '\n';
	postMsg += '지능: ' + dataStar[ran1] + '\n';
	postMsg += '키: ' + dataStar[ran2] + '\n';
	postMsg += '외모: ' + dataStar[ran3] + '\n';
	postMsg += '매력도: ' + dataStar[ran4] + '\n\n';
	postMsg += 'http://goo.gl/D9B88\n';



	urlMsg = {
		title: '10년뒤 내 아기모습',
		desc: userName + ' 아기는 ' + dataJob[dataJobRan],
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + photo ],
		type:'article'
	}
console.log(urlMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '10년뒤 내 아기모습',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "10년뒤 내 아기모습",
		url: "http://goo.gl/D9B88",
		appid: "funnyApp",
		appver: "1.0",
		appname: "10년뒤 내 아기모습",
		type: "link"
	});
}




dataJob = [
	'천재 바이얼리니스트가 됩니다.',
	'천재 골퍼가 됩니다.',
	'천재 축구선수가 됩니다.',
	'천재 야구선수가 됩니다.',
	'천재 피겨스케이터가 됩니다.',
	'천재 수영선수가 됩니다.',
	'천재 체조선수가 됩니다.',
	'천재 과학자가 됩니다.',
	'천재 수학자가 됩니다.',
	'최고 얼짱이 됩니다.',
	'천재 연기자가 됩니다.',
	'천재 컴퓨터 프로그래머가 됩니다.'
]

dataStar = [
	'☆☆☆☆☆',
	'★☆☆☆☆',
	'★★★☆☆',
	'★★★★☆',
	'★★★★★'
]


































