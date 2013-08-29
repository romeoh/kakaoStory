var  who
	,whoIdx
	,zoomType
	,sexType
	,hash =  decodeURIComponent(window.location.hash.split('#')[1])
	,platform

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
	
}

function action(_data) {
	var  data = _data || {}
		,media = data.media || 'story'
		,sexType = data.sexType || null	//boy or girl
		,userName = data.userName || null
		,color = data.color || null
		,alphabet = data.alphabet || null
		,coffee = data.coffee || null
		,bornYear = data.bornYear || null
		,bornMonth = data.bornMonth || null
		,bornDate = data.bornDate || null
		,blood = data.blood || null
		,post = ''

	platform = data.media

	data.title = '아줌마/아저씨 테스트';
	data.url = 'http://goo.gl/U5T02V';

	if (media == 'talk') {
		sendData(data);
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
	
	params = 'n=' + userName + '&w=' + zoomType
	page = 'http://romeoh.github.io/kakaoStory/html/zooma.html#' + encodeURIComponent(params)
	getShortUrl(page);
}

//  카카오 스토리
function executeKakaoStoryLink(url){
	var  resultName, resultPhoto, resultMsg
		,message
		,post = ''
		,timages
		,data = {}
		,userName = M('#userName').val()

	data.media = platform

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
	
	post += '[아줌마/아저씨 테스트]\n\n';
	
	if (hash == 'undefined') {
		//console.log('단독')
		post += userName + '님은 ' + zoomStr + '\n\n';
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
				post += data['n'] + '님과 ' + userName + '님 모두 아저씨입니다.\n\n';
				timages = 'zooma1.png'
			} else if (zoomType === '2') {
				post += data['n'] + '님은 아저씨지만,\n';
				post += userName + '님은 아저씨가 아닙니다.\n\n';
				timages = 'zooma2.png'
			} else if (zoomType === '3') {
				post += data['n'] + '님은 아저씨이고,\n';
				post += userName + '님은 아줌마 입니다.\n\n';
				timages = 'zooma3.png'
			} else if (zoomType === '4') {
				post += data['n'] + '님은 아저씨지만,\n';
				post += userName + '님은 아줌마가 아닙니다.\n\n';
				timages = 'zooma4.png'
			}

		// 아저씨아님
		} else if (data['w'] == '2') { 
			if (zoomType === '1') {
				post += data['n'] + '님은 아저씨가 아니지만,\n';
				post += userName + '님은 아저씨 입니다\n\n';
				timages = 'zooma1.png'
			} else if (zoomType === '2') {
				post += data['n'] + '님과 ' + userName + '님 모두 아저씨가 아닙니다.\n\n';
				timages = 'zooma2.png'
			} else if (zoomType === '3') {
				post += data['n'] + '님은 아저씨가 아니지만,\n';
				post += userName + '님은 아줌마 입니다.\n\n';
				timages = 'zooma3.png'
			} else if (zoomType === '4') {
				post += data['n'] + '님은 아저씨가 아니고,\n';
				post += userName + '님도 아줌마가 아닙니다.\n\n';
				timages = 'zooma4.png'
			}

		// 아줌마
		} else if (data['w'] == '3') { 
			if (zoomType === '1') {
				post += data['n'] + '님은 아줌마이고,\n';
				post += userName + '님도 아저씨 입니다.\n\n';
				timages = 'zooma1.png'
			} else if (zoomType === '2') {
				post += data['n'] + '님은 아줌마지만,\n';
				post += userName + '님은 아저씨가 아닙니다.\n\n';
				timages = 'zooma2.png'
			} else if (zoomType === '3') {
				post += data['n'] + '님과 ' + userName + '님 모두 아줌마 입니다.\n\n';
				timages = 'zooma3.png'
			} else if (zoomType === '4') {
				post += data['n'] + '님은 아줌마지만,\n';
				post += userName + '님은 아줌마가 아닙니다.\n\n';
				timages = 'zooma4.png'
			}

		//아줌마 아님
		} else if (data['w'] == '4') { 
			if (zoomType === '1') {
				post += data['n'] + '님은 아줌마가 아니지만,\n';
				post += userName + '님은 아저씨 입니다.\n\n';
				timages = 'zooma1.png'
			} else if (zoomType === '2') {
				post += data['n'] + '님은 아줌마가 아니고,\n';
				post += userName + '님도 아저씨가 아닙니다.\n\n';
				timages = 'zooma2.png'
			} else if (zoomType === '3') {
				post += data['n'] + '님은 아줌마가 아니지만,\n';
				post += userName + '님은 아줌마입니다.\n\n';
				timages = 'zooma3.png'
			} else if (zoomType === '4') {
				post += data['n'] + '님과 ' + userName + '님 모두 아줌마가 아닙니다.\n\n';
				timages = 'zooma4.png'
			}
		}
	}
	
	post += url;
	data.post = post;
	
	data.desc = userName + '님은 ' + who + '\n그럼 나는?';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + timages;

	sendData(data);
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
































