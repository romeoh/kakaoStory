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
	postMsg += '# 곤란한 상황에서는 재빠른 판단력이 요구됩니다. \n이럴 때 당신이 어떻게 행동하는지 생각해 봅시다. \n이것은 일 처리에 있어서도 그대로 이어지거든요.\n\n';
	postMsg += '# ' + result + '\n\n';
	
	postMsg += 'http://goo.gl/bv6Lt\n';
	
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
		appname : '나는 일을 어떻게 처리하는 타입 일까?',
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
		url: "http://goo.gl/bv6Lt",
		appid: "funnyApp",
		appver: "1.0",
		appname: "성격 심리테스트",
		type: "link"
	});
}


dataList = [
	'생각하기 전에 행동하는 타입인 당신은 일 처리가 빠르지만, 실수가 많기 때문에 효율성이 높지 않습니다.',
	'일 처리 속도가 매우 느린 당신은 일을 시작하기 전에 할 일이 너무나도 많습니다. 예를 들어 시험 공부 전에 책상 정리하고 계획 짜느라 시간을 다 보내는 건 아닌지. 하지만 계획적으로 일을 시작하기 때문에 시간적인 여유가 있다면 일은 성공적으로 마칠 수 있습니다.',
	'당신은 실수를 용납하지 않는 완벽주의자 입니다. 매우 꼼꼼하게 일의 모든 과정을 하나하나 계획하며 행동합니다. 하지만 그만큼 업무에 대한 스트레스도 많이 받습니다.',
	'일에 대한 흥미가 별로 없는 당신은 늘 적당히 하다가 다른 사람에게 넘겨 버리는 편입니다. 책임감이 없는 사람은 신뢰 받기 힘들기 때문에 주의해야 합니다.'
]































