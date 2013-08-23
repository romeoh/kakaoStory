var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,me
	,data
	,jogeun0, jogeun1, jogeun2, jogeun3

window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
	boySelect.addEventListener('click', function(){
		boySelect.className = 'checked';
		girlSelect.className = '';
		me = 'boy'
		data = dataBoy
	}, false);
	girlSelect.addEventListener('click', function(){
		boySelect.className = '';
		girlSelect.className = 'checked';
		me = 'girl'
		data = dataGirl
	}, false);
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  resultName, resultPhoto, resultMsg
		,end = dataEnd[Math.floor(Math.random() * dataEnd.length)]
		,postMsg = ''
	
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}

	if (me == 'boy') {
		postMsg += '나란 남자, \n';
	} else {
		postMsg += '나란 여자, \n';
	}
	
	jogeun0 = undefined
	jogeun1 = undefined
	jogeun2 = undefined
	jogeun3 = undefined

	setRandom(data)
	//console.log(data[jogeun0])
	//console.log(data[jogeun1])
	//console.log(data[jogeun2])
	//console.log(data[jogeun3])
	
	postMsg += data[jogeun0]['constinue'] + ' ';
	postMsg += data[jogeun1]['constinue'] + ' ';
	postMsg += data[jogeun2]['last'] + ' 싱글...\n' + end + '\n\n';
	
	
	postMsg += 'http://goo.gl/97oVx7';
	
	urlMsg = {
		title: '싱글만 해보세요.',
		desc: '커플은 여기 클릭도 하지 말어!!',
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/single2.png'],
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
		msg: "싱글만 해보세요.",
		url: "http://goo.gl/97oVx7",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}

function setRandom(data){
	var idx = Math.floor(Math.random() * data.length)

	if (jogeun0 == undefined) {
		jogeun0 = idx;
	}
	if (jogeun1 == undefined) {
		if (jogeun0 == idx) {
			setRandom(data)
		} else {
			jogeun1 = idx;
		}
	}
	if (jogeun2 == undefined) {
		if (jogeun0 == idx || jogeun1 == idx) {
			setRandom(data)
		} else {
			jogeun2 = idx;
			return jogeun2;
		}
	}
	if (jogeun3 == undefined) {
		if (jogeun0 == idx || jogeun1 == idx || jogeun2 == idx) {
			setRandom(data)
		} else {
			jogeun3 = idx;
			return jogeun3;
		}
	}
}


dataBoy = [
	{'constinue':'잘생기고', 'last':'잘생겼지만'},
	{'constinue':'훤칠하고', 'last':'훤칠하지만'},
	{'constinue':'스마트하고', 'last':'스마트하지만'},
	{'constinue':'센스있고', 'last':'센스있지만'},
	{'constinue':'귀엽고', 'last':'귀엽지만'},
	{'constinue':'샤프하고', 'last':'샤프하지만'},
	{'constinue':'터프하고', 'last':'터프하지만'},
	{'constinue':'남자답고', 'last':'남자답지만'},
	{'constinue':'능력있고', 'last':'능력있지만'},
	{'constinue':'섹시하고', 'last':'섹시하지만'},
	{'constinue':'귀티나고', 'last':'귀티나지만'},
	{'constinue':'착하고', 'last':'착하지만'},
	{'constinue':'자상하고', 'last':'자상하지만'},
	{'constinue':'돈많고', 'last':'돈많지만'},
	{'constinue':'유머있고', 'last':'유머있지만'}
]
dataGirl = [
	{'constinue':'예쁘고', 'last':'예쁘지만'},
	{'constinue':'스마트하고', 'last':'스마트하지만'},
	{'constinue':'센스있고', 'last':'센스있지만'},
	{'constinue':'귀엽고', 'last':'귀엽지만'},
	{'constinue':'여성스럽고', 'last':'여성스럽지만'},
	{'constinue':'능력있고', 'last':'능력있지만'},
	{'constinue':'섹시하고', 'last':'섹시하지만'},
	{'constinue':'귀티나고', 'last':'귀티나지만'},
	{'constinue':'착하고', 'last':'착하지만'},
	{'constinue':'돈많고', 'last':'돈많지만'},
	{'constinue':'유머있고', 'last':'유머있지만'},
	{'constinue':'세련되고', 'last':'세련되지만'}
]
dataEnd = [
	'젠장...',
	'이런...',
	'왜죠?',
	'망할...',
	'헐~',
	'미스테리...',
	'에잇...'
]































