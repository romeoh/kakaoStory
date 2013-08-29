var  hash =  decodeURIComponent(window.location.hash.split('#')[1])
	,dataIdx
	,paramData = {
		'n':[],
		'b':[]
	}
	,platform

if (hash != 'undefined') {
	var str = ''

	paramData['n'] = hash.split('&')[0].split('=')[1].split('|')
	paramData['b'] = hash.split('&')[1].split('=')[1].split('|')
}

window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	//btnStory.addEventListener('click', makeUrl, false);
	//btnKakao.addEventListener('click', executeURLLink, false);
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

	data.title = '꽃보다 우리반';
	data.url = 'http://goo.gl/yGRU4N';
	platform = data.media

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	userName = document.querySelector('#userName').value
	dataIdx = Math.floor(Math.random() * data.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	if (M('#ban').val() == '-1') {
		alert('반을 선택해 주세요.');
		return false;
	}
	
	if (paramData['b'][0] == M('#ban').val()) {
		param = setParam();
	} else {
		param = 'n=' + userName + '&b=' + M('#ban').val()
	}
	
	page = 'http://romeoh.github.io/kakaoStory/html/ban.html#' + encodeURIComponent(param);
	getShortUrl(page);
}


function makeUrl() {
	userName = document.querySelector('#userName').value
	dataIdx = Math.floor(Math.random() * data.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	if (M('#ban').val() == '-1') {
		alert('반을 선택해 주세요.');
		return false;
	}
	
	if (paramData['b'][0] == M('#ban').val()) {
		param = setParam();
	} else {
		param = 'n=' + userName + '&b=' + M('#ban').val()
	}
	
	page = 'http://romeoh.github.io/kakaoStory/html/ban.html#' + encodeURIComponent(param);
	getShortUrl(page);
}

function setParam() {
	paramData['n'].push(M('#userName').val());
	paramData['b'].push(M('#ban').val());
	paramN = '';
	paramC = '';
	
	for (var i=0; i<paramData['n'].length; i++) {
		paramN += '|' + paramData['n'][i];
		paramC += '|' + paramData['b'][i];
	}
	paramN = paramN.replace('|', '');
	paramC = paramC.replace('|', '');
	return 'n=' + paramN + '&b=' + paramC;
}

//  카카오 스토리
function executeKakaoStoryLink(url){
	var  post = ''
		,idx = Math.floor(Math.random() * database.length)

	data = {}
	data.media = platform

	post += '[꽃보다 ' + M('#ban').val() + '반]\n\n';
	
	if (hash == 'undefined' || paramData['b'][0] != M('#ban').val()) {
		post += '나는 ' + database[idx] + M('#ban').val() + '반이다.\n\n';
		post += M('#ban').val() + '반이면 공유!!\n\n';
	} else {
		for (var i=0; i<paramData['n'].length-1; i++) {
			post += ', ' + paramData['n'][i];
		}
		post = post.replace(', ', '') + ''
		post = uniValue(post) ? post + '과 ' : post + '와 '
		post += '나는 ' + database[idx] + M('#ban').val() + '반이다.\n\n';
		post += M('#ban').val() + '반이면 공유!!\n\n';
	}
	post += url;
	data.post = post;
	
	data.desc = M('#ban').val() + '반이면 닥치고 공유!!';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/ban' + M('#ban').val() + '.png';

	sendData(data);
}

function urlParser() {
	return names.split(',');
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



database = [
	'섹시한 ',
	'귀여운 ',
	'멋쟁이 ',
	'의리있는 ',
	'최고의 ',
	'멋있는 ',
	'영원한 ',
	'재미있는 '
]



















