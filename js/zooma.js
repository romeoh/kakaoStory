var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,who
	,whoIdx
	,zoomType
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,sexType
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
	if (data['w'] === '1') {
		nwho = '아저씨 입니다.'
	} else if (data['w'] === '2') {
		nwho = '아저씨가 아닙니다.'
	} else if (data['w'] === '3') {
		nwho = '아줌마 입니다.'
	} else if (data['w'] === '4') {
		nwho = '아줌마가 아닙니다.'
	}
	str = ''
	str += '<b class="blue">' + data['n'] + '님은 ' + nwho + '</b><br>'
	str += '그럼 나는 아저씨/아줌마 일까요?'
			
	M('#result')
		.css('display', '')
	M('.result').html(str)
}



window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	boySelect.addEventListener('click', function(){
		boySelect.className = 'checked';
		girlSelect.className = '';
		sexType = 'girl'
	}, false);
	girlSelect.addEventListener('click', function(){
		boySelect.className = '';
		girlSelect.className = 'checked';
		sexType = 'boy'
	}, false);

	btnStory.addEventListener('click', makeUrl, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}

function makeUrl() {
	userName = document.querySelector('#userName').value
	
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}

	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	whoIdx = getRandom(0, 2);
	
	// 아줌마, 아저씨
	if (sexType == 'boy'){
		// 아저씨
		if (whoIdx === 0) {
			zoomType = '1'
			who = '아저씨입니다.'
		} else {
			zoomType = '2'
			who = '아저씨가 아닙니다.'
		}
	} else {
		// 아줌마
		if (whoIdx === 0) {
			zoomType = '3'
			who = '아줌마입니다..'
		} else {
			zoomType = '4'
			who = '아줌마가 아닙니다.'
		}
	}
	
	//console.log(sexType)
	params = 'n=' + userName + '&w=' + zoomType
	page = 'http://romeoh.github.io/kakaoStory/html/zooma.html#' + encodeURIComponent(params)
	getShortUrl(page);
}

//  카카오 스토리
function executeKakaoStoryLink(url){
	var  resultName, resultPhoto, resultMsg
		,message
		,postMsg = ''
		,timages

	if (zoomType === '1') {
		zoomStr = '아저씨입니다.'
	} else if (zoomType === '2') {
		zoomStr = '아저씨가 아닙니다.'
	} else if (zoomType === '3') {
		zoomStr = '아줌마 입니다.'
	} else if (zoomType === '4') {
		zoomStr = '아줌마가 아닙니다.'
	} else {

	}
	
	postMsg += '[아줌마/아저씨 테스트]\n\n';
	
	if (hash == 'undefined') {
		//console.log('단독')
		postMsg += userName + '님은 ' + zoomStr + '\n\n';
		if (sexType == 'boy'){
			// 아저씨
			if (whoIdx === 0) {
				timages = 'zooma1.png'
			} else {
				timages = 'zooma2.png'
			}
		} else {
			// 아줌마
			if (whoIdx === 0) {
				timages = 'zooma3.png'
			} else {
				timages = 'zooma4.png'
			}
		}

		// if (whoIdx === 0) {
		// 	timages = 'zooma1.png'
		// } else {
		// 	timages = 'zooma1.png'
		// }
	} else {
		//console.log('연결')
		params = hash.split('&')
		data = {}
		for (var key in params) {
			values = params[key].split('=')
			data[values[0]] = values[1]
		}

		// 아저씨
		if (data['w'] == '1') {

			if (zoomType === '1') {
				postMsg += data['n'] + '님과 ' + userName + '님 모두 아저씨입니다.\n\n';
				timages = 'zooma1.png'
			} else if (zoomType === '2') {
				postMsg += data['n'] + '님은 아저씨지만,\n';
				postMsg += userName + '님은 아저씨가 아닙니다.\n\n';
				timages = 'zooma2.png'
			} else if (zoomType === '3') {
				postMsg += data['n'] + '님은 아저씨이고,\n';
				postMsg += userName + '님은 아줌마 입니다.\n\n';
				timages = 'zooma3.png'
			} else if (zoomType === '4') {
				postMsg += data['n'] + '님은 아저씨지만,\n';
				postMsg += userName + '님은 아줌마가 아닙니다.\n\n';
				timages = 'zooma4.png'
			}

		// 아저씨아님
		} else if (data['w'] == '2') { 
			if (zoomType === '1') {
				postMsg += data['n'] + '님은 아저씨가 아니지만,\n';
				postMsg += userName + '님은 아저씨 입니다\n\n';
				timages = 'zooma1.png'
			} else if (zoomType === '2') {
				postMsg += data['n'] + '님과 ' + userName + '님 모두 아저씨가 아닙니다.\n\n';
				timages = 'zooma2.png'
			} else if (zoomType === '3') {
				postMsg += data['n'] + '님은 아저씨가 아니지만,\n';
				postMsg += userName + '님은 아줌마 입니다.\n\n';
				timages = 'zooma3.png'
			} else if (zoomType === '4') {
				postMsg += data['n'] + '님은 아저씨가 아니고,\n';
				postMsg += userName + '님도 아줌마가 아닙니다.\n\n';
				timages = 'zooma4.png'
			}

		// 아줌마
		} else if (data['w'] == '3') { 
			if (zoomType === '1') {
				postMsg += data['n'] + '님은 아줌마이고,\n';
				postMsg += userName + '님도 아저씨 입니다.\n\n';
				timages = 'zooma1.png'
			} else if (zoomType === '2') {
				postMsg += data['n'] + '님은 아줌마지만,\n';
				postMsg += userName + '님은 아저씨가 아닙니다.\n\n';
				timages = 'zooma2.png'
			} else if (zoomType === '3') {
				postMsg += data['n'] + '님과 ' + userName + '님 모두 아줌마 입니다.\n\n';
				timages = 'zooma3.png'
			} else if (zoomType === '4') {
				postMsg += data['n'] + '님은 아줌마지만,\n';
				postMsg += userName + '님은 아줌마가 아닙니다.\n\n';
				timages = 'zooma4.png'
			}

		//아줌마 아님
		} else if (data['w'] == '4') { 
			if (zoomType === '1') {
				postMsg += data['n'] + '님은 아줌마가 아니지만,\n';
				postMsg += userName + '님은 아저씨 입니다.\n\n';
				timages = 'zooma1.png'
			} else if (zoomType === '2') {
				postMsg += data['n'] + '님은 아줌마가 아니고,\n';
				postMsg += userName + '님도 아저씨가 아닙니다.\n\n';
				timages = 'zooma2.png'
			} else if (zoomType === '3') {
				postMsg += data['n'] + '님은 아줌마가 아니지만,\n';
				postMsg += userName + '님은 아줌마입니다.\n\n';
				timages = 'zooma3.png'
			} else if (zoomType === '4') {
				postMsg += data['n'] + '님과 ' + userName + '님 모두 아줌마가 아닙니다.\n\n';
				timages = 'zooma4.png'
			}
		}
	}
	
	postMsg += url;
	
	urlMsg = {
		title: '아줌마/아저씨 테스트',
		desc: userName + '님은 ' + who + '\n그럼 나는?',
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/' + timages ],
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
		msg: "아줌마/아저씨 테스트",
		url: "http://goo.gl/U5T02V",
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
































