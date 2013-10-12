var  platform
	,uName
	,kurl
	,ktitle

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

	data.title = '카카오스토리 주소만들기';
	data.url = 'http://goo.gl/uIDOIF';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	platform = _data.media;
	kasid = M('#kasid').val();
	uName = userName;
	kurl = data.url;
	ktitle = data.title

	if (kasid === '') {
		alert('카카오스토리 아이디를 입력하세요.')
		return
	}

	page = 'http://romeoh.github.io/kakaoStory/html/urlrink.html#' + encodeURIComponent(kasid);
	getShortUrl(page);
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

function executeKakaoStoryLink(url){
	var  data = {}
		,post = ''

	data.title = ktitle;
	data.url = '';
	data.media = platform;

	post += '[' + data.title + ']\n\n';
	post += uName + '님의 카카오스토리 주소입니다. \n';
	post += '친구들에게 복사해서 알려주세요~ \n\n';
	post += '★ ' + uName + '님의 카스주소: ' + url + '\n\n\n';
	post += '카스주소만들기: ' + kurl;
	data.post = post;
	
	data.desc = '나만의 카카오스토리 주소를 가지자.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/url.png';

	sendData(data);
}






























