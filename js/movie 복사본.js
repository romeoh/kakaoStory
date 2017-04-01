var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,selList = null



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

	postMsg += '[심리 테스트] 힘든 일을 극복하는 방법\n\n';
	postMsg += '# 당신이 어려움에 처했을 때 어떤 방법으로 탈출구를 찾아내는지 알려주는 심리 테스트 입니다. \n기분이 좋지 않을 때 먹는 음식은 스트레스를 해소할 수 있는 음식 입니다.\n이 음식을 통해서 당신이 힘든 일을 어떻게 해결해 나가는지 알 수 있습니다.\n\n';
	postMsg += '# ' + result + '\n\n';
	
	postMsg += 'http://goo.gl/cfNQe\n';
	
	urlMsg = {
		title: '힘든 일을 극복하는 방법',
		desc: '심리테스트',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/movie.png'],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '음식으로 알아보는 나의 심리테스트',
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
		msg: "힘든 일을 극복하는 방법",
		url: "http://goo.gl/cfNQe",
		appid: "funnyApp",
		appver: "1.0",
		appname: "심리테스트",
		type: "link"
	});
}


dataList = [
	'당신은 일을 해결하고 극복하기 위한 방법과 도와줄 주변 사람들을 척척 찾아냅니다. \n하지만 그 해결 과정에서 스트레스를 많이 받을 것입니다.',
	'당신은 친구를 붙잡고 하소연 하는 성격입니다. \n하지만 정작 친구의 힘든 일에는 귀를 기울이지 않는 이기적인 면이 잇습니다. \n매사가 불평, 불만이면 그만큼 힘든 일도 많이 생기는 법이니 좀 더 긍정적인 생각을 하는 편이 좋겠습니다.',
	'당신은 어려운 일이 생기면 재빨리 숨어 버리는 타입입니다. \n연락도 되지 않아서 주변 사람들에게 걱정을 끼치기도 합니다. \n이런 행동이 반복되면 있던 친구들도 떠날 수가 있으니 조심 해야겠어요.',
	'당신은 주변에 말하지 않고 혼자서 척척 해결해 내는 타입입니다. \n누군가의 도움이 절실 할때 마땅한 친구가 없을 수도 있으니 조심하세요.'
]































