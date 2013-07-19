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
		result = result.replace(/당신/gi, M('#userName').val()+'님');
	}

	postMsg += '[성격 심리테스트]\n\n';
	postMsg += '- 장밋빛 미래를 위한 나의 노력은 무엇인가?\n';
	postMsg += '# 미래에 사용하고 싶은 색상은 꿈을 위해 준비하는 당신의 현재 모습을 보여줍니다.\n\n';
	postMsg += '(결과) ' + result + '\n\n';
	
	postMsg += 'http://goo.gl/r5fTS\n';
	
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
		appname : '장밋빛 미래를 위한 나의 노력은 무엇인가?',
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
		url: "http://goo.gl/r5fTS",
		appid: "funnyApp",
		appver: "1.0",
		appname: "성격 심리테스트",
		type: "link"
	});
}


dataList = [
	'지금 당신이 꿈꾸고 있는 미래는 어떤것 인가요? 욕심 많고 하고 싶은 것도 많은 당신은 그 꿈을 성취할 수 있을 겁니다. 다만, 꿈을 꿨다면 노력을 해야 합니다. 노력 없이 얻을 수 있는 것은 아무것도 없습니다.',
	'아직 꿈이 확실하지 않은 당신은 현재 아무런 노력도 하지 않고 있습니다. 당신이 그렇게 시간을 보낼 때 다른 사람들은 꿈을 이루기 위해 엄청난 투자를 하고 있다는 것을 잊지 마세요. 밝은 미래는 지금 당신의 노력에 달려있습니다.',
	'당신의 꿈을 이루기 위해 넘어야 할 산은 매우 높습니다. 하지만 긍정적인 생각을 가지고 포기하지 않는다면 아무리 어렵고 불가능해 보이는 꿈이라도 반드시 이뤄질 것입니다.',
	'직업이나 일에 대한 욕심보다는 편하게 살고 싶어하는 당신은 친구들보다 일찍 결혼할 수도 있습니다. 하지만 결혼생활이 무조건 편할 것이라는 생각은 버리는 것이 좋아요.'
]































