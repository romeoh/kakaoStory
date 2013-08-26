var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,hash =  decodeURIComponent(window.location.hash.split('#')[1])
	,dataIdx
	,paramData = {
		'n':[],
		'b':[]
	}

if (hash != 'undefined') {
	var str = ''

	paramData['n'] = hash.split('&')[0].split('=')[1].split('|')
	paramData['b'] = hash.split('&')[1].split('=')[1].split('|')
	
	str += '<dl>';
	str += '	<dt>[LOL 동맹현황]</dt>';
	
	for (var i=0; i<paramData['n'].length; i++) {
		str += '	<dd>이름: ' + paramData['n'][i] + ', 챔피언: ' + paramData['b'][i] + '</dd>';
	}
	str += '</dl>';
	M('#result')
		//.css('display', '')
		//.html(str)

}

window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', makeUrl, false);
	btnKakao.addEventListener('click', executeURLLink, false);
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
	var  postMsg = ''

	postMsg += '[꽃보다 ' + M('#ban').val() + '반]\n\n';
	
	if (hash == 'undefined' || paramData['b'][0] != M('#ban').val()) {
		postMsg += '나는 ' + M('#ban').val() + '반이다.\n';
		postMsg += M('#ban').val() + '반이면 공유!!\n\n';
	} else {
		for (var i=0; i<paramData['n'].length-1; i++) {
			postMsg += ', ' + paramData['n'][i];
		}
		postMsg = postMsg.replace(', ', '') + ''
		postMsg = uniValue(postMsg) ? postMsg + '과 ' : postMsg + '와 '
		postMsg += '나는 ' + M('#ban').val() + '반이다.\n\n';
	}
	
	postMsg += url;
	
	urlMsg = {
		title: '꽃보다 ' + M('#ban').val() + '반',
		desc: M('#ban').val() + '반이면 닥치고 공유!!',
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/ban' + M('#ban').val() + '.png' ],
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
		msg: "꽃보다 우리반",
		url: "http://goo.gl/yGRU4N",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}



function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
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



data = [
	'섹시한',
	'귀여운',
	'멋쟁이',
	'의리의',
	'최고의',
	'멋있는',
	'영원한',
	'재미있는'
]



















