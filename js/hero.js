var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,data
	,lottoNum = []
	,bonus

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
	var  sexType
		,userName = document.querySelector('#userName').value
		,postMsg = ''
		,age = getRandom(5, 100)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	hero = Math.floor(Math.random() * dataHero.length)
	action = Math.floor(Math.random() * dataAction.length)

	postMsg += '[슈퍼 히어로]\n';
	postMsg += M('#userName').val() + '의 초능력은 ' + dataHero[hero] + '\n';
	postMsg += '이 능력으로 ' + M('#userName').val() + '님은 ' + dataAction[action] + '\n\n';
	
	postMsg += 'http://goo.gl/ZuEM0\n';

	urlMsg = {
		title: '슈퍼 히어로',
		desc: dataAction[action],
		imageurl: ['http://romeoh.github.io/kakaoStory/img/hero.png' ],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '내 정체를 비밀로 해줘..',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "슈퍼 히어로",
		url: "http://goo.gl/ZuEM0",
		appid: "funnyApp",
		appver: "1.0",
		appname: "슈퍼 히어로",
		type: "link"
	});
}


function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}


dataHero = [
	'20톤 파워의 무쇠주먹을 가지고 있습니다.',
	'마하 1.5의 속도로 하늘을 날수 있습니다.',
	'투명인간이 될수 있습니다.',
	'두팔이 27m까지 늘어나는 능력을 가졌습니다.',
	'손에서 얼음을 발사하여 모든것을 얼려버릴수 있습니다.',
	'30톤의 물건을 들수 있을만큼 힘이 좋습니다.',
	'눈에서 레이저가 나갑니다.',
	'물체를 관통하여 볼수 있는 천리안을 가졌습니다.',
	'세상의 모든 소리를 다 들을수 있는 슈퍼 귀를 가졌습니다.',
	'손에서 거미줄을 발사할수 있습니다.',
	'손에서 레이저를 쏠수 있습니다.',
	'미래를 예측하는 능력을 가졌습니다.',
	'모래로 변신할수 있습니다.',
	'액체인간이라서 상처가 금방 치유됩니다.',
	'말을 엄청 빨리 할수 있습니다.',
	'수중에서 호흡하지 않고 24시간을 버틸수 있습니다.',
	'물위에서 뛰어다닐수 있습니다.',
	'세상의 모든 개들과 대화할수 있습니다.',
	'늑대인간으로 변신할수 있습니다.'
]

dataAction = [
	'지구를 구해서 영웅이 됩니다.',
	'한반도를 통일시켜 민족의 영웅이 됩니다.',
	'막말하는 일본인을 혼내줍니다.',
	'지구에 처들어온 외계인을 무찌릅니다.',
	'방송에 출연하여 인기를 얻습니다.',
	'애인에게 멋잇게 보입니다.',
	'지구의 평화를 지킵니다.',
	'악의 무리 저그황제를 무찌릅니다.',
	'화성인을 지구인으로 만듭니다.',
	'인터넷의 영웅이 됩니다.',
	'유투브에 나와서 많은 돈을 법니다.',
	'서울의 좀도둑을 모두 잡습니다.'
]































