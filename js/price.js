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
}


//  카카오 스토리
function executeKakaoStoryLink(){
	var  sexType
		,userName = document.querySelector('#userName').value
		,postMsg = ''
		,price = Math.floor(Math.random() * data.length)
		,fast = Math.floor(Math.random() * data[price]['value'])
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	//console.log(data[price]['price'], valueData[fast], data[price]['value'])
	postMsg += '[당신의 감정가]\n';
	postMsg += M('#userName').val() + '님의 공시지가는 ' + data[price]['price'] + '이며,\n';
	postMsg += '급매물시 ' + valueData[fast] + ' 입니다.\n\n';
	
	postMsg += 'http://goo.gl/DkT8fE\n';

	urlMsg = {
		title: '당신의 감정가',
		desc: 'but, ' + valueData[fast],
		imageurl: ['http://romeoh.github.io/kakaoStory/img/price.png' ],
		type:'article'
	}
console.log(postMsg, urlMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : data[price]['price'],
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "당신의 감정가",
		url: "http://goo.gl/DkT8fE",
		appid: "funnyApp",
		appver: "1.0",
		appname: "당신의 감정가",
		type: "link"
	});
}


function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}


data = [
	{'value':'0', 'price': '천원'},
	{'value':'1', 'price': '2천원'},
	{'value':'2', 'price': '5천원'},
	{'value':'3', 'price': '8천원'},
	{'value':'4', 'price': '만원'},
	{'value':'5', 'price': '2만원'},
	{'value':'6', 'price': '5만원'},
	{'value':'7', 'price': '10만원'},
	{'value':'8', 'price': '50만원'},
	{'value':'9', 'price': '100만원'},
	{'value':'10', 'price': '300만원'},
	{'value':'11', 'price': '500만원'},
	{'value':'12', 'price': '천만원'},
	{'value':'13', 'price': '2천만원'},
	{'value':'14', 'price': '5천만원'},
	{'value':'15', 'price': '7천만원'},
	{'value':'16', 'price': '1억원'},
	{'value':'17', 'price': '2억원'},
	{'value':'18', 'price': '5억원'},
	{'value':'19', 'price': '10억원'},
	{'value':'20', 'price': '50억원'},
	{'value':'21', 'price': '100억원'},
	{'value':'22', 'price': '300억원'},
	{'value':'23', 'price': '500억원'},
	{'value':'24', 'price': '1,000억원'},
	{'value':'25', 'price': '3,000억원'},
	{'value':'26', 'price': '5,000억원'},
	{'value':'27', 'price': '1조원'},
	{'value':'28', 'price': '100조원'},
	{'value':'29', 'price': '1000조원'}
]

valueData = [
	'무료',
	'10원',
	'20원',
	'50원',
	'80원',
	'100원',
	'200원',
	'500원',
	'700원',
	'900원',
	'천원',
	'2천원',
	'5천원',
	'8천원',
	'만원',
	'2만원',
	'5만원',
	'10만원',
	'50만원',
	'100만원',
	'300만원',
	'500만원',
	'천만원',
	'2천만원',
	'5천만원',
	'7천만원',
	'1억원',
	'2억원',
	'5억원',
	'10억원',
	'50억원',
	'100억원',
	'300억원',
	'500억원',
	'1,000억원',
	'3,000억원',
	'5,000억원',
	'1조원',
	'100조원',
	'1000조원'
]






























