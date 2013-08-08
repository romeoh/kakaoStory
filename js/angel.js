var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,who
	,whoIdx
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,hash =  decodeURIComponent(window.location.hash.split('#')[1])

if (hash != 'undefined') {
	params = hash.split('&')
	data = {}
	for (var key in params) {
		values = params[key].split('=')
		data[values[0]] = values[1]
	}
	if (data['w'] === '0') {
		nwho = '천사'
	} else {
		nwho = '악마'
	}
	str = ''
	str += data['n'] + '님은 ' + nwho + '입니다.<br>'
	str += '<b class="blue">그럼 나는 천사일까요? 악마일까요?</b>'
			
	M('#result')
		.css('display', '')
		.html(str)
}



window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', makeUrl, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}

function makeUrl() {
	userName = document.querySelector('#userName').value
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	whoIdx = getRandom(0, 2);
	if (whoIdx === 0) {
		who = '천사'
	} else {
		who = '악마'
	}

	params = 'n=' + userName + '&w=' + whoIdx
	page = 'http://romeoh.github.io/kakaoStory/html/angel.html#' + encodeURIComponent(params)
	getShortUrl(page);
}

//  카카오 스토리
function executeKakaoStoryLink(url){
	var  resultName, resultPhoto, resultMsg
		,message
		,postMsg = ''
		,timages
	
	postMsg += '[천사/악마 검증기]\n\n';
	
	if (hash == 'undefined') {
		//console.log('단독')
		postMsg += userName + '님은 ' + who + '입니다.\n\n';
		if (whoIdx === 0) {
			timages = 'angel.png'
		} else {
			timages = 'evil.png'
		}
	} else {
		//console.log('연결')
		params = hash.split('&')
		data = {}
		for (var key in params) {
			values = params[key].split('=')
			data[values[0]] = values[1]
		}
		if (data['w'] === '0') {
			if (whoIdx === 0) {
				postMsg += data['n'] + '님과 ' + userName + '님 모두 천사입니다.\n\n';
				postMsg += '축하합니다.\n\n';
				timages = 'angel.png'
			} else {
				postMsg += data['n'] + '님은 천사지만,\n';
				postMsg += userName + '님은 악마입니다.\n\n';
				timages = 'evil.png'
			}
		} else {
			if (whoIdx === 0) {
				postMsg += data['n'] + '님은 악마지만, \n';
				postMsg += userName + '님은 천사입니다.\n\n';
				timages = 'angel.png'
			} else {
				postMsg += data['n'] + '님과 ' + userName + '님 모두 악마입니다.\n\n';
				timages = 'evil.png'
			}
		}
	}
	
	postMsg += url;
	
	urlMsg = {
		title: '천사/악마 검증기',
		desc: userName + '님은 ' + who + '입니다.\n그럼 나는?',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + timages ],
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
		msg: "천사/악마 검증기",
		url: "http://goo.gl/AigRi",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}



function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}

function getShortUrl(url) {
	var tdata = '{"longUrl": "' + url + '"}';
	$.support.cors = true;

	$.ajax({
		url: "https://www.googleapis.com/urlshortener/v1/url",
		type: "POST",
		dataType: "json",
		data: tdata,
		contentType: "application/json",
		success: function (result) {
			var shortUrl  = result.id;
			executeKakaoStoryLink(shortUrl)
			//return ;
		},
		error : function(request,status,error) {
			//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		} 
	});
}
































