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
		,smurf = Math.floor(Math.random() * data.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	
	postMsg += '[나의 스머프 캐릭터]\n';
	postMsg += M('#userName').val() + '님은 스머프 마을에\n';
	postMsg += data[smurf]['name'] + '입니다.\n\n';
	
	postMsg += 'http://goo.gl/5yqyOY\n';

	urlMsg = {
		title: '개구쟁이 스머프',
		desc: data[smurf]['name'],
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + data[smurf]['photo'] ],
		type:'article'
	}
console.log(postMsg, urlMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : desc,
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "개구쟁이 스머프",
		url: "http://goo.gl/5yqyOY",
		appid: "funnyApp",
		appver: "1.0",
		appname: "개구쟁이 스머프",
		type: "link"
	});
}


function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}

data = [
	{'photo':'smurf1.png', 'name':'파파 스머프', 'talk':''},
	{'photo':'smurf2.png', 'name':'스머패트', 'talk':''},
	{'photo':'smurf3.png', 'name':'화가 스머프', 'talk':''},
	{'photo':'smurf4.png', 'name':'똘똘이 스머프', 'talk':''},
	{'photo':'smurf5.png', 'name':'편리 스머프', 'talk':''},
	{'photo':'smurf6.png', 'name':'조화 스머프', 'talk':''},
	{'photo':'smurf7.png', 'name':'낭만 스머프', 'talk':''},
	{'photo':'smurf8.png', 'name':'투덜이 스머프', 'talk':''},
	{'photo':'smurf9.png', 'name':'시인 스머프', 'talk':''},
	{'photo':'smurf10.png', 'name':'익살이 스머프', 'talk':''},
	{'photo':'smurf11.png', 'name':'자연이 스머프', 'talk':''},
	{'photo':'smurf12.png', 'name':'사세트 스머프', 'talk':''},
	{'photo':'smurf13.png', 'name':'요리사 스머프', 'talk':''},
	{'photo':'smurf14.png', 'name':'욕심이 스머프', 'talk':''},
	{'photo':'smurf15.png', 'name':'게으름이 스머프', 'talk':''},
	{'photo':'smurf16.png', 'name':'껑충이 스머프', 'talk':''},
	{'photo':'smurf17.png', 'name':'허영이 스머프', 'talk':''},
	{'photo':'smurf18.png', 'name':'할아버지 스머프', 'talk':''},
	{'photo':'smurf19.png', 'name':'덩치스머프', 'talk':''},
	{'photo':'smurf20.png', 'name':'퍼피', 'talk':''},
	{'photo':'smurf21.png', 'name':'빅노우스', 'talk':''},
	{'photo':'smurf22.png', 'name':'가가멜', 'talk':''},
	{'photo':'smurf23.png', 'name':'아즈라엘', 'talk':''}
]
































