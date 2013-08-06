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
	,names = []
	,w

if (hash != 'undefined') {
	names = hash.split('=')[1].split(',')
	
	var str = ''

	str += '<dl>';
	str += '	<dt>[우리 가문의 족보]</dt>';
	
	for (var i=0; i<names.length; i++) {
		if (i==0) {
			str += '	<dd>시조: ' + names[i] + '</dd>';
		} else {
			n = i + 1
			str += '	<dd>' + n + '대손: ' + names[i] + '</dd>';
		}
	}
	str += '</dl>';
	
			
	M('#result')
		.css('display', '')
		.html(str)
} else {
	M('#btnStory').html('<span><em class="ico_star_check"></em> 새로운 가문 만들기</span>')
}



window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', makeUrl, false);
	btnKakao.addEventListener('click', executeURLLink, false);

	M('#speech').on('change', function(evt, mp){
		if (mp.val() === '2') {
			M('#direct').css('display', 'block')
		} else {
			M('#direct')
				.css('display', 'none')
				.val('')
		}
	})
}

function makeUrl() {
	userName = document.querySelector('#userName').value
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	if (M('#speech').val() == '-1' || M('#speech').val() == '1') {
		w = ''
	} else if (M('#speech').val() == '2') {
		if (M('#direct').val() == '') {
			alert('후손들에게 직접 유언을 남기세요.');
			return false
		}
		w = '&w=' + M('#direct').val()
	} else {
		w = '&w=' + M('#speech').val()
	}
	if (names.length === 0) {
		namesParam = userName.replace(',', '');
	} else {
		namesParam = names + ',' + userName.replace(',', '');
	}
	names.push(userName.replace(',', ''));
	page = 'http://romeoh.github.io/kakaoStory/html/family.html#n=' + encodeURIComponent(namesParam);
	getShortUrl(page);
}

//  카카오 스토리
function executeKakaoStoryLink(url){
	var  resultName, resultPhoto, resultMsg
		,message
		,postMsg = ''
		,timages
		,userName = document.querySelector('#userName').value
		,appname
		,desc

	postMsg += '[가문의 영광]\n\n';
	
	if (hash == 'undefined') {
		postMsg += '시조: ' + userName + ' (나)\n';
		appname = '시조: ' + userName
	} else {
		//console.log('연결')
		for (var i=0; i<names.length; i++) {
			if (i==0) {
				postMsg += '시조: ' + names[i] + '\n';
			} else {
				n = i + 1
				if (i == names.length-1) {
					me = ' (나)'
				} else {
					me = ''
				}
				postMsg += n + '대손: ' + names[i] + me + '\n';
			}
		}
		appname = n + '대손: ' + names[names.length-1]
	}
	if (w != '') {
		postMsg += '\n-잠깐만요~ 우리 ' + appname.replace(':', '') + '언니, 후손들에게 한말씀 하실께요: \n';
		postMsg += '♡ ' + w.replace('&w=', '') + '\n';
	}
	
	postMsg += '\n이 가문의 후손되기: ' + url + '\n';
	
	if (names.length < 3) {
		desc = '신진가문'
	} else if (names.length < 6) {
		desc = '평민가문'
	} else if (names.length < 9) {
		desc = '양반가문'
	} else if (names.length < 12) {
		desc = '명문가문'
	} else if (names.length < 15) {
		desc = '귀족가문'
	} else {
		desc = '로얄패밀리'
	}
	urlMsg = {
		title: '가문의 영광',
		desc: desc,
		imageurl: ['http://romeoh.github.io/kakaoStory/img/family.png' ],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
		post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : appname,
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "가문의 영광",
		url: "http://goo.gl/fnLTih",
		appid: "funnyApp",
		appver: "1.0",
		appname: "가문의 영광",
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
































