var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,data
	,lottoNum = []
	,bonus



window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
	if (M.storage('io.github.romeoh.user.name')) {
		M('h2').text(M.storage('io.github.romeoh.user.name') + ' 길들이기')
	} else {
		M('h2').text('말괄량이 길들이기');
	}
}


//  카카오 스토리
function executeKakaoStoryLink(){
	var  sexType
		,postMsg = ''
		,userName = M('#userName').val()
		,tomIdx = Math.floor(Math.random() * dataTom.length)
		,foodIdx = Math.floor(Math.random() * dataFood.length)
		,nameStr = uniValue(userName) ? userName + '은' : userName + '는'
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	postMsg += '[' + userName + ' 길들이기]\n\n';
	postMsg += nameStr + ' ' + dataTom[tomIdx] + '\n';
	postMsg += '(참고) ' + userName + ' 길들이기 음식: ' + dataFood[foodIdx] + '\n\n';
	
	postMsg += 'http://goo.gl/WhJ2Xc\n';

	urlMsg = {
		title: M('#userName').val() + ' 길들이기',
		desc: dataFood[foodIdx] + ' 사줘~ 뿌잉뿌잉~\n',
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/tomboy.png' ],
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
		msg: "말괄량이 길들이기",
		url: "http://goo.gl/WhJ2Xc",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}


function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}

dataTom = [
	'커피를 사주면 아주 순해집니다.',
	'밥을 사주면 말을 아주 잘 듣습니다.',
	'소개팅을 시켜주면 바로 길듭니다.',
	'예뻐해주면 말을 아주 잘 듣습니다.',
	'음료수를 사주면 아주 순해집니다.',
	'영화 보여주면 아주 착해집니다.',
	'같이 술 마셔주면 완전 순한 양이 됩니다.',
	'칭찬해주면 바로 친해질 수 있습니다.',
	'맛있는거 사주면 말을 아주 잘 듣습니다.',
	'뺨을 한대 맞아주면 영원한 우정으로 발전합니다.',
	'카스에 댓글을 달아주면 아주 착해집니다.',
	'빕스에 데려가 주면 아주 착해집니다.',
	'선물을 사주면 말을 아주 잘 듣습니다.',
	'뺨에 뽀뽀를 해주면 엄청 귀여워 집니다.',
]

dataFood = [
	'밥',
	'커피',
	'스파케티',
	'라면',
	'불고기',
	'삼겹살',
	'소주',
	'카레밥',
	'스테이크',
	'샐러드',
	'피자',
	'막걸리',
	'돼지껍데기',
	'곱창'
]






























