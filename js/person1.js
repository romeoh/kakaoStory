var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,selList = null

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
	
	M('#btnStory').on('click', executeKakaoStoryLink)
	M('#btnKakao').on('click', executeURLLink)

	M('.checkList').on('click', function(evt, mp){
		M('.checkList').removeClass('sel')
		mp.addClass('sel');
		selList = mp.data('value')
	})
}, false);



//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
	
	if (selList === null) {
		alert('보기중 하나를 선택하세요.');
		return false;
	}
	result = dataList[selList]

	if (M('#userName').val() !== '') {
		result = result.replace(/당신은/gi, M('#userName').val()+'님은');
	}

	postMsg += '[성격 심리테스트]\n\n';
	postMsg += '# 당신이 뜻밖의 수익을 얻었을 때 이를 지출하는 형태를 보고 성격을 알 수 있는 심리 테스트 입니다.\n\n';
	postMsg += '# ' + result + '\n\n';
	
	postMsg += 'http://goo.gl/Kgh3l\n';
	
	urlMsg = {
		title: '성격 심리테스트',
		desc: '심리테스트',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/person1.png'],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '뜻밖의 수익으로 보는 나의 성격은',
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
		msg: "성격 심리테스트",
		url: "http://goo.gl/Kgh3l",
		appid: "funnyApp",
		appver: "1.0",
		appname: "성격 심리테스트",
		type: "link"
	});
}


dataList = [
	'당신은 이성적이고 지혜로운 성격이군요. 예의도 바르고 성실하기 때문에 윗사람으로부터 칭찬을 많이 받습니다. 하지만 때로는 지나치게 냉정한 면도 있으니 좀 더 너그러운 마음을 갖는 것이 좋겠어요.',
	'당신은 밝고 명랑하며 긍정적인 성격의 소유자입니다. 순진한 어린아이 같은 면도 있어요. 사람들에게 인기가 많은 타입이지만, 지나친 어리광을 부리거나 억지를 쓰기도 하므로 이 점은 고치는 것이 좋겠어요.',
	'당신은 현실주의자 입니다. 꿈이나 목표를 정할 때에도 자신의 능력을 잘 알기 때문에 이룰 수 있는 목표를 세우네요. 하지만 때로는 지나치게 깐깐하고 반듯하여 접근을 막기도 하므로 좀 더 유들유들한 태도로 사람을 대하는 편이 좋겠어요.',
	'다정하고 상냥한 성격입니다. 가족이나 친구, 선후배 등 모든 사람들을 따뜻하게 대합니다. 특히 봉사 정신이 강해서 여러 사람에게 베푸는 것을 굉장히 좋아합니다.'
]































