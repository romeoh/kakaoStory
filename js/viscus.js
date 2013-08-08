var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')



window.addEventListener('DOMContentLoaded', function(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}, false);


//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,userName = document.querySelector('#userName').value
		,dataRan = Math.floor(Math.random() * data.length)
		,viscus = data[dataRan]['viscus']
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	postMsg += '[내장 나이 알아보기]\n\n';
	postMsg += userName + '님의 내장중 가장 건강한것은 ' + viscus + '입니다.\n';
	postMsg += userName + '님의 ' + viscus + '나이는 ' + getRandom(5, 40) + '세 입니다.\n\n';
	
	postMsg += 'http://goo.gl/AatVA\n';
	
	urlMsg = {
		title: '내장 나이 알아보기',
		desc: userName + '님은 ' + viscus + '미인입니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/viscus.png'],
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

function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "내장 나이 알아보기",
		url: "http://goo.gl/AatVA",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}


data = [
	{'viscus':'우폐', 'article': ''},
	{'viscus':'간', 'article': ''},
	{'viscus':'담낭', 'article': ''},
	{'viscus':'췌장', 'article': ''},
	{'viscus':'상행결장', 'article': ''},
	{'viscus':'심장', 'article': ''},
	{'viscus':'좌폐', 'article': ''},
	{'viscus':'횡격막', 'article': ''},
	{'viscus':'비장', 'article': ''},
	{'viscus':'위', 'article': ''},
	{'viscus':'횡행결장', 'article': ''},
	{'viscus':'소장', 'article': ''},
	{'viscus':'S상결장', 'article': ''},
	{'viscus':'방광', 'article': ''},
	{'viscus':'신장', 'article': ''},
	{'viscus':'하행결장', 'article': ''},
	{'viscus':'항문관', 'article': ''},
	{'viscus':'요관', 'article': ''},
	{'viscus':'장골', 'article': ''}
]




































