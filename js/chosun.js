var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,lottoNum = []
	,bonus

window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}


//  카카오 스토리
function executeKakaoStoryLink(){
	var  userName = document.querySelector('#userName').value
		,postMsg = ''
		,born = getRandom(1392, 1910)
		,age = getRandom(20, 80)
		,idx = Math.floor(Math.random() * data.length)
		,nameIdx = Math.floor(Math.random() * dataName.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	postMsg += '[타임인조선]\n';
	postMsg += M('#userName').val() + '님은 조선시대 ' + data[idx]['title'] + '\n\n';
	postMsg += '조선시대 이름: ' + dataName[nameIdx] + '\n';
	postMsg += '생존기간: ' + born +' ~ ' + (born+age) + '\n\n';
	
	postMsg += 'http://goo.gl/1cvuIf\n';

	urlMsg = {
		title: '조선시대 계급',
		desc: data[idx]['desc'],
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
		msg: "타임인조선",
		url: "http://goo.gl/1cvuIf",
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
	{'title':'임금이었습니다.', 'photo':'chosun1.png', 'desc':'안녕~ 난 임금이야'},
	{'title':'양반이었습니다.', 'photo':'chosun2.png', 'desc':'천한것들...'},
	{'title':'중인이었습니다.', 'photo':'chosun3.png', 'desc':'순위권~'},
	{'title':'상인이었습니다.', 'photo':'chosun4.png', 'desc':'짚신 공구해여~'},
	{'title':'수공업자였습니다.', 'photo':'chosun5.png', 'desc':'오타쿠~'},
	{'title':'농민이었습니다.', 'photo':'chosun6.png', 'desc':'풍년일세~'},
	{'title':'공노비였습니다.', 'photo':'chosun7.png', 'desc':'쥔님~ 뿌잉뿌잉~'},
	{'title':'사노비였습니다.', 'photo':'chosun8.png', 'desc':'예~ 마님~'},
	{'title':'백정이었습니다.', 'photo':'chosun9.png', 'desc':'웰던으로요~'},
	{'title':'무당이었습니다.', 'photo':'chosun10.png', 'desc':'정성이 부족해~'},
	{'title':'창기였습니다.', 'photo':'chosun11.png', 'desc':'만능 엔터테이너'},
	{'title':'광대였습니다.', 'photo':'chosun12.png', 'desc':'넌 다음에 뭘로 태어날래?'},
	{'title':'국모였습니다.', 'photo':'chosun13.png', 'desc':'안녕 난 조선의 국모야~'}
]

dataName = [
	'옹식이',
	'옹돌이',
	'쇠돌이',
	'개똥이',
	'돌쇠',
	'마당이',
	'개떡이',
	'순냥이',
	'칠년이',
	'언국이',
	'쌍석이',
	'만놈이',
	'용득이',
	'삼년이',
	'삼래',
	'칠떡이',
	'언년이',
	'개단이',
	'순득이',
	'순창이',
	'만갑이'
]
































