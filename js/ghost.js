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
		,ghost = getRandom(1, 100)
		,idx = Math.floor(Math.random() * data.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	postMsg += '[나에게 붙어있는 귀신]\n\n';
	postMsg += M('#userName').val() + '님에게 붙어있는 귀신은 모두 ' + ghost + '마리 입니다.\n\n';
	postMsg += '그 중에 갑은 ' + data[idx]['name'] + ' 입니다.\n\n';
	
	postMsg += 'http://goo.gl/qy9Yj2\n';

	urlMsg = {
		title: '나에게 붙어있는 귀신',
		desc: data[idx]['name'],
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/' + data[idx]['photo'] ],
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
		msg: "나에게 붙어있는 귀신",
		url: "http://goo.gl/qy9Yj2",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}


function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}

data = [
	{'photo':'ghost1.png', 'name':'달걀귀신'},
	{'photo':'ghost2.png', 'name':'처녀귀신'},
	{'photo':'ghost3.png', 'name':'드라큐라'},
	{'photo':'ghost4.png', 'name':'강시'},
	{'photo':'ghost5.png', 'name':'마성터널귀신'},
	{'photo':'ghost6.png', 'name':'옥수역귀신'},
	{'photo':'ghost7.png', 'name':'몽달귀신'},
	{'photo':'ghost8.png', 'name':'물귀신'},
	{'photo':'ghost9.png', 'name':'식신귀신'},
	{'photo':'ghost10.png', 'name':'도깨비'},
	{'photo':'ghost11.png', 'name':'저승사자'},
	{'photo':'ghost12.png', 'name':'좀비'},
	{'photo':'ghost13.png', 'name':'여고귀신'},
	{'photo':'ghost14.png', 'name':'봉천동귀신'}
]
































