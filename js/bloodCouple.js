var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')

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
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}, false);


//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,data
	
	if (M('#selBloodGirl').val() == '') {
		alert('여자분의 혈액형을 선택하세요.');
		return;
	}
	if (M('#selBloodBoy').val() == '') {
		alert('남자분의 혈액형을 선택하세요.');
		return;
	}
	
	result = dataBloor[M('#selBloodGirl').val()][M('#selBloodBoy').val()][0]
console.log(result)
	postMsg += '[혈액형 궁합]\n';
	postMsg += result.w + '형 여자와 ' + result.m + '형 남자의\n'
	postMsg += '궁합지수은 ' + result.percent + '입니다.\n'
	postMsg += result.result + '\n\n'
	
	postMsg += 'http://goo.gl/iNzJa\n';
	
	urlMsg = {
		title: '혈액형 궁합',
		desc: result.w + '형 여자와 ' + result.m + '형 남자',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/'+result.photo],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '혈액형 궁합',
		urlinfo : JSON.stringify(urlMsg)
    });
}


// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "혈액형 궁합",
		url: "http://goo.gl/iNzJa",
		appid: "funnyApp",
		appver: "1.0",
		appname: "혈액형 궁합",
		type: "link"
	});
}


dataBloor = [
	// 여자A
	[
		[{'photo':'bl0.jpg', 'percent':'70%', 'w':'A', 'm':'A', result:'처음에는 서로 탐색전, 남자가 초반에는 리드를 하지만 교제를 하면서 주도권은 여자에게로 넘어갑니다.\n2년정도 교제하면 자연스럽게 결혼까지 갈수도 있는 커플입니다.'}],
		[{'photo':'bl1.jpg', 'percent':'20%', 'w':'A', 'm':'B', result:'남자는 적극적이고, 여자는 수동적입니다. \n남자가 행동력 강하게 리드하지만 남자위주의 플랜과 행동들과 서로의 결점때문에 서로 잘될 가능성은 낮습니다.'}],
		[{'photo':'bl2.jpg', 'percent':'95%', 'w':'A', 'm':'O', result:'서로 호의를 갖고 있어도 시간이 걸리지만 \nO형이 주도권을 잡고 잘 이루어갈수 있는 커플입니다.'}],
		[{'photo':'bl3.jpg', 'percent':'65%', 'w':'A', 'm':'AB', result:'여자가 먼저 고백을 하지 않는 이상 진전이 어렵습니다. \n많은 대화를 하는 데이트를 좋아하고, \n서로 너무 신중해서 결국은 잘 이루어지지 않을지도 모릅니다.'}]
	],

	// 여자B
	[
		[{'photo':'bl4.jpg', 'percent':'25%', 'w':'B', 'm':'A', result:'주로 B형이 주도권을 잡고 A형 남성을 이끄는 경향이 많습니다. \n서로의 가치관이 달라 잘 되기 어려울 수 있습니다.'}],
		[{'photo':'bl5.jpg', 'percent':'65%', 'w':'B', 'm':'B', result:'서로 마음이 잘 맞고 금방 친해집니다.\n주도권 따위 의식은 하지 않으며 활발하게 움직이는걸 좋아합니다.\n커플로는 좋은 궁합이지만 지출이 많은 편입니다.'}],
		[{'photo':'bl6.jpg', 'percent':'75%', 'w':'B', 'm':'O', result:'B형 여성이 좋아져서 먼저 접근을 합니다. \n이곳저곳 많이 다녀서 차분해질 여유도 없을 정도로 활동적입니다. \n단, 서로 바람기만 잘 다스린다면은 결혼까지 갈수도 있습니다.'}],
		[{'photo':'bl7.jpg', 'percent':'80%', 'w':'B', 'm':'AB', result:'B형 여성이 자신의 매력으로 남성을 끌여들여 시작을 합니다. \nB형여자가 상당히 매력녀입니다.\nB형여성의 일방적인 데이트가 될지라도 은근히 궁합이 잘 맞아 결혼해서도 잘 살수 있는 커플입니다.'}]
	],

	// 여자O
	[
		[{'photo':'bl8.jpg', 'percent':'90%',  'w':'O', 'm':'A', result:'서로 좋은 인상에 호감을 갖습니다. \n표면적으로는 A형 남자가 리드를 하는것 처럼 보이지만 A형남자는 조심성이 많은 편입니다.\n그래서 사실은 O형인 여성이 주도권을 가지고 있습니다.'}],
		[{'photo':'bl9.jpg', 'percent':'80%',  'w':'O', 'm':'B', result:'O형 여성이 먼저 접근하는 경향이 많습니다. \nO형 여자가 확실하게 B형 남자를 잡습니다. \n잘될 가능성이 상당히 높지만 여자가 많이 노력을 해야합니다.'}],
		[{'photo':'bl10.jpg', 'percent':'40%', 'w':'O', 'm':'O', result:'주도권때문에 서로 많이 싸울수 있습니다.\n분위기에 따라서 급 달아올랐다가 금방 꺼지는게 단점입니다.'}],
		[{'photo':'bl11.jpg', 'percent':'40%', 'w':'O', 'm':'AB', result:'남성이 여성에게에게 교묘한 말씨로 접근합니다.\n평범하게 밥도 먹고 데이트를 하지만 서로를 이해하기 여려워서 서로 많이 힘들어 할수도 있습니다.'}]
	],

	// 여자AB
	[
		[{'photo':'bl12.jpg', 'percent':'50%', 'w':'AB', 'm':'A', result:'접접을 찾는게 어렵고 찾더라도 시간이 오래 걸릴수 있습니다.\n잡고 잡히는 그런 관계 속에서 서로 잘 맞지 않는다고 느끼면서\n 매너리즘에 빠지면 잘될 가능성도 낮아지는 커플입니다.'}],
		[{'photo':'bl13.jpg', 'percent':'85%', 'w':'AB', 'm':'B', result:'엉뚱하며, 우연찮게 친해집니다. \n남자가 확실한 리드를 하고, 부부로서의 궁합도 애인으로서의 궁합도 매우 좋습니다.'}],
		[{'photo':'bl14.jpg', 'percent':'35%', 'w':'AB', 'm':'O', result:'O형 남자는 역시 적극적입니다. \n하지만 여자때문에 데이트가 적고 서로를 이해하기 힘든 부분이 나타나기 시작합니다.'}],
		[{'photo':'bl15.jpg', 'percent':'90%', 'w':'AB', 'm':'AB', result:'자연스럽게 서로 가까워지게 됩니다. \n서로 누가 리드하는건 관심없고 의식도 하지 않습니다.'}]
	]
]










































