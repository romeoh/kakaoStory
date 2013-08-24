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
		,day = getRandom(100, 4000)
		,week = Math.round(day / 7)
		,month = Math.round(day / 30)
		,year = Math.round(month / 12)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	
	postMsg += '[B급 인생]\n\n';
	postMsg += M('#userName').val() + '님은 A급 인생이 되기까지 약 ' + M.toCurrency(day) + '일 정도 남았습니다.\n\n';
	postMsg += M.toCurrency(day) + '일은 \n';
	postMsg += '약 ' + week + '주이며,\n';
	postMsg += '약 ' + month + '개월이고,\n';
	if (year) {
		postMsg += '약 ' + year + '년 정도 됩니다.\n\n';
	} else {
		postMsg += '1년 이하 입니다.\n\n';
	}
	postMsg += 'http://goo.gl/g0wLJR\n';

	urlMsg = {
		title: 'B급 인생',
		desc: '기대하라.\n' + month + '개월 뒤에 세상을 정복하겠노라.\n',
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/b.png' ],
		type:'article'
	}
console.log(postMsg, urlMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '깨알유머: B급유머',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "B급 인생",
		url: "http://goo.gl/g0wLJR",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}


function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}


































