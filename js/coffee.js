var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataDrink, dataMount, dataAction
	,img

if (os == 'ios' || os == 'android') {
	//init();
} else {
	var  adTop = document.querySelector('#adTop')
		,adBottom = document.querySelector('#adBottom')
	document.querySelector('body').removeChild(adTop)
	document.querySelector('body').removeChild(adBottom)
}

window.addEventListener('DOMContentLoaded', function(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}, false);


//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,selAlpha = document.querySelector('#selAlpha')
		,data
	
	if (selAlpha.value == '') {
		alert('주문 하시겠어요?');
		return;
	}
	
	data = dataAlpha[selAlpha.value]
	
	postMsg += '[커피로 알아보는 연예 심리테스트]\n\n';
	postMsg += '주문하신 ' + data.coffee + ' 나오셨습니다.\n';
	postMsg += data.result + '\n\n';
	
	postMsg += 'http://goo.gl/DC9X8\n';
	
	urlMsg = {
		title: '색깔로 알아보는 심리테스트',
		desc: '나는 ' + data.result + '입니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + data.img],
		type:'article'
	}
	console.log(postMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : data.alpha,
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "뭐 내세울게 있나요?",
		url: "http://goo.gl/DC9X8",
		appid: "funnyApp",
		appver: "1.0",
		appname: "색깔로 알아보는 심리테스트",
		type: "link"
	});
}


// 남자
dataAlpha = [
	{'img': 'coffee0.jpg', 'coffee': '아이스모카', 'result': '아주 매혹적인 분이십니당~ 하지만 정작 본인은 모르고 계세요~ \n자기가 그렇게 매력적인 사람이라고는 생각도 못하고있죠 ^^'},
	{'img': 'coffee1.jpg', 'coffee': '카푸치노', 'result': '아주 정열적이고 낙천저긴 분이세요~\n야심이 있는 타입이라고 할까요? 하지만 때로는 그냥 지나쳐버리는 경우도 많아요.\n그래서 이걸 잘 제어해줄사람을 좋아합니다~'},
	{'img': 'coffee2.jpg', 'coffee': '아메리카노', 'result': '아주 적극적이면서도 책임감이 강한 분이시군요 ^^\n로맨틱한 연애를 추구하고 있지는 않나요?? 그런것같은데??'},
	{'img': 'coffee3.jpg', 'coffee': '녹차 프라프치노', 'result': '뒤에서 상대를 후원해주거나 받쳐주는 그런타입이에요 \n사려가 깊고 성실한 성격이기 때문에 일에서도 연애에서도 언제나 \n키다리아저씨처럼 ^^'},
	{'img': 'coffee4.jpg', 'coffee': '카페오레', 'result': '마음이 편안한 남녀 관계를 추구하는 분이시군요.\n'},
	{'img': 'coffee5.jpg', 'coffee': '녹차라떼', 'result': '이것저것 걱정이 많으신 타입이네요. \n연애에 있어서도 내성적이라 상대방이 적극적으로 다가와주길 바라고있습니다. '}
]

 
 
 
 
 






























