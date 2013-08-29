var  who
	,whoIdx
	,hash =  decodeURIComponent(window.location.hash.split('#')[1])
	,names = []
	,w
	,platform

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
	data.title = '가문의 영광';
	data.url = 'http://goo.gl/fnLTih';


	if (media == 'talk') {
		sendData(data);
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
		,data = {}
		,post = ''

	data.title = '가문의 영광';
	data.url = '';
	data.media = platform;
	
	if (hash == 'undefined') {
		post += '시조: ' + userName + ' (나)\n';
		appname = '시조: ' + userName
	} else {
		//console.log('연결')
		for (var i=0; i<names.length; i++) {
			if (i==0) {
				post += '시조: ' + names[i] + '\n';
			} else {
				n = i + 1
				if (i == names.length-1) {
					me = ' (나)'
				} else {
					me = ''
				}
				post += n + '대손: ' + names[i] + me + '\n';
			}
		}
		appname = n + '대손: ' + names[names.length-1]
	}
	if (w != '') {
		post += '\n-잠깐만요~ 우리 ' + appname.replace(':', '') + '언니, 후손들에게 한말씀 하실께요: \n';
		post += '♡ ' + w.replace('&w=', '');
	}
	
	post += '\n이 가문의 후손되기: ' + url;
	
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
	data.post = post;

	data.desc = desc;
	data.img = 'http://romeoh.github.io/kakaoStory/img/family.png';

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
































