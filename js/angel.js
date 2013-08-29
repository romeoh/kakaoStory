var  who
	,whoIdx
	,hash =  decodeURIComponent(window.location.hash.split('#')[1])
	,platform

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


function action(_data) {
	userName = document.querySelector('#userName').value
	platform = _data.media

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
	var  data = {}
		,post = ''
	
	data.title = '천사/악마 검증기';
	data.url = '';
	data.media = platform

	post += '[' + data.title + ']\n\n';
	if (hash == 'undefined') {
		//console.log('단독')
		post += userName + '님은 ' + who + '입니다.\n\n';
		if (whoIdx === 0) {
			timages = 'angel.png'
		} else {
			timages = 'evil.png'
		}
	} else {
		//console.log('연결')
		params = hash.split('&')
		database = {}
		for (var key in params) {
			values = params[key].split('=')
			database[values[0]] = values[1]
		}
		if (database['w'] === '0') {
			if (whoIdx === 0) {
				post += database['n'] + '님과 ' + userName + '님 모두 천사입니다.\n\n';
				post += '축하합니다.\n\n';
				timages = 'angel.png'
			} else {
				post += database['n'] + '님은 천사지만,\n';
				post += userName + '님은 악마입니다.\n\n';
				timages = 'evil.png'
			}
		} else {
			if (whoIdx === 0) {
				post += database['n'] + '님은 악마지만, \n';
				post += userName + '님은 천사입니다.\n\n';
				timages = 'angel.png'
			} else {
				post += database['n'] + '님과 ' + userName + '님 모두 악마입니다.\n\n';
				timages = 'evil.png'
			}
		}
	}
	post += url;
	data.post = post;
	
	data.desc = userName + '님은 ' + who + '입니다.\n그럼 나는?';
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + timages;

	sendData(data);

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
































