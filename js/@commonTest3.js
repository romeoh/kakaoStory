// 테스트 리스트 처리
if (M('[data-list]').selector.length > 0) {
	var  currentApp = M('[data-list]').data('list')
		,alist = appList
		,savedName = M.storage('io.github.romeoh.user.name')
		,nameStr0 = savedName
		,nameStr1 = uniValue(savedName) ? savedName + '은' : savedName + '는'
		,nameStr2 = uniValue(savedName) ? savedName + '과' : savedName + '와'

	if (savedName) {
		alist = appList
					.replace(/@나는@/g, '@' + nameStr1 + '@')
					.replace(/@나에게@/g, '@' + nameStr0 + '에게@')
					.replace(/@당신의@/g, '@' + nameStr0 + '의@')
					.replace(/@나의@/g, '@' + nameStr0 + '의@')
					.replace(/@나와@/g, '@' + nameStr2 + '@')
					.replace(/@내@/g, '@' + nameStr0 + '@')
					.replace(/@말괄량이@/g, '@' + nameStr0 + '@')
	}

	// 이달의 운세 처리
	var  d = new Date()
		,month = d.getMonth() + 1
		,date = d.getDate()

	if (date > 15) {
		if (month == 12) {
			month = 1;
		} else {
			month = month + 1;
		}
	}

	alist = alist.replace(/@/g, '').replace(/이달의/, month + '월의');


	M('[data-list]')
		.html(alist)
	M('[data-app="' + currentApp + '"]').prepend('span', {
		'className': 'ico sel'
	})
	
	M('#eventContainer')
		.before('div', {
			'className': 'listbox'
		})
		.before('a', {
			'id': 'viewCategory'
		})
	
	var  category = M.storage('io.github.romeoh.user.category') || 'all'
		,str = ''
		,categoryText

	M.storage('io.github.romeoh.user.category', category);
	if (category === 'all') {
		M('[data-page]').css('display', 'block')
	} else {
		M('[data-page]').css('display', 'none')
		M('[data-' + category + ']').css('display', 'block');
	}
	M('[data-new]').css('display', 'block');

	str += '<ul>'
	str += '<li data-category="all">모두</li>'
	str += '<li data-category="hot">인기</li>'
	str += '<li data-category="recommand">추천</li>'
	str += '<li data-category="me">자기애</li>'
	str += '<li data-category="love">연애</li>'
	str += '<li data-category="game">게임</li>'
	str += '<li data-category="fun">재미</li>'
	str += '<li data-category="heart">심리테스트</li>'
	str += '</ul>'

	M('.listbox')
		.html(str)
	
	categoryText = M('[data-category="' + category + '"]')
		.addClass('sel')
		.text()
	
	M('#viewCategory')
		//.attr('href', '#')
		.addClass('btn_rlist')
		.data('isopen', 'false')
		.text(categoryText)
		.on('click', listBoxListener)

	M('[data-category]').on('click', function(evt, mp){
		M('[data-category]').removeClass('sel')
		category = mp.addClass('sel').data('category')
		M('#viewCategory')
			.removeClass('sel')
			.data('isopen', 'false')
			.text(mp.text())
		M('.listbox').css('display', 'none');
		M.storage('io.github.romeoh.user.category', category);
		M('[data-page]').css('display', 'none')
		
		if (category === 'all') {
			M('[data-page]').css('display', 'block')
		} else {
			M('[data-' + category + ']').css('display', 'block');
		}
		M('[data-new]').css('display', 'block');
	})

	if (M('#snsBox').selector.length > 0) {
		var  appNo = M('[data-list]').data('list')
			,appName = M('[data-app="' + appNo + '"]').data('page')

		M('#snsBox').append('div', {
			'className': 'fb-like'
		})
		M('.fb-like')
			.data('href', 'http://romeoh.github.io/kakaoStory/html/' + appName + '.html')
			.data('width', '450')
			.data('layout', 'button_count')
			.data('showFaces', 'true')
			.data('send', 'true')
	}
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/ko_KR/all.js#xfbml=1&appId=519730578083610";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
}


var eventList = M.storage('event_list') || 'EVENT';

// 이벤트 리스트 처리
M.storage('event_list', eventList);
if (eventList === 'EVENT') {
	M('#btnEvent').addClass('on');
	M('#eventContainer').css('display', 'block');
	M('#replyContainer').css('display', 'none');
} else if(eventList === 'REPLY') {
	M('#btnReply').addClass('on');
	M('#eventContainer').css('display', 'none');
	M('#replyContainer').css('display', 'block');
	M('#viewCategory').css('display', 'none');
}

// 이벤트 버튼 리스너
M('#btnEvent').on('click', function(){
	eventList = 'EVENT';
	M.storage('event_list', eventList);
	M('#btnEvent').addClass('on');
	M('#btnReply').removeClass('on');
	M('#eventContainer').css('display', 'block');
	M('#replyContainer').css('display', 'none');
	M('#viewCategory').css('display', 'block');
})

M('#btnReply').on('click', function(){
	eventList = 'REPLY';
	M.storage('event_list', eventList);
	M('#btnReply').addClass('on');
	M('#btnEvent').removeClass('on');
	M('#eventContainer').css('display', 'none');
	M('#replyContainer').css('display', 'block');
	M('#viewCategory').css('display', 'none');
	M('#viewCategory').removeClass('sel');
	M('.listbox').css('display', 'none');
})


function listBoxListener(evt, mp){
	if (M('#viewCategory').data('isopen') === 'false') {
		M('#viewCategory')
			.data('isopen', 'true')
			.addClass('sel')

		M('.listbox').css('display', 'block')

	} else {
		M('#viewCategory')
			.data('isopen', 'false')
			.removeClass('sel')

		M('.listbox').css('display', 'none')
	}
}

M('#btnMacao').on('click', function(){
	window.location.href = 'http://goo.gl/HMF8gs'
})
M('#btnMain').on('click', function(){
	randomUrl()
})

function randomUrl(){
	idx = getRandom(1, totalApp)
	url = M('[data-app="' + idx + '"]').first().attr('href')
	//console.log(url)
	window.location.href = url
}
function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}


/*var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"

if (os === 'android') {
	idx = getRandom(0, 4)
	eventTxt = [
		'<a href="http://goo.gl/BNYgT">힙합테마[카톡스킨]을 무료로 드려요~</a>',
		'<a href="http://goo.gl/WrRJr">부암동산책[카톡스킨]을 무료로 드려요~</a>',
		'<a href="http://goo.gl/otEy6">불타는금요일[카톡스킨]을 무료로 드려요~</a>',
		'<a href="http://goo.gl/qldVb">수줍은앨리스[카톡스킨]을 무료로 드려요~</a>'
	]
	M('nav')
		.css('display', 'block')
		.html(eventTxt[idx])
}
*/
eventTxt = ['<a href="http://goo.gl/A2UOmW">깨유 페이스북 페이지 오픈했단깨유~</a>']
M('nav')
		.css('display', 'block')
		//.html(eventTxt[0])


M('#userName')
	.on('change', function(evt, mp){
		M.storage('io.github.romeoh.user.name', mp.val())
	})
	.val( M.storage('io.github.romeoh.user.name') || '' )

M('#boyBox a').on('click', function(){
	M('#boyBox a').addClass('checked')
	M('#girlBox a').removeClass('checked')
})
M('#girlBox a').on('click', function(){
	M('#boyBox a').removeClass('checked')
	M('#girlBox a').addClass('checked')
})

M('#btnStory').on('click', function(){
	var data = {}
	data.media = 'story'
	validation(data)
});
M('#btnTwitter').on('click', function(){
	var data = {}
	data.media = 'twitter'
	validation(data)
});
M('#btnFacebook').on('click', function(){
	var data = {}
	data.media = 'facebook'
	validation(data)
});
M('#btnMe2day').on('click', function(){
	var data = {}
	data.media = 'me2day'
	validation(data)
});
M('#btnKakao').on('click', function(){
	var data = {}
	data.media = 'talk'
	action(data);
});

function validation(_data) {
	var data = _data || {}

	M.storage('io.github.romeoh.user.platform', data.media);
	if (M('#boyBox a').selector.length > 0) {
		if (!M('#boyBox a').hasClass('checked') && !M('#girlBox a').hasClass('checked')) {
			alert('성별을 선택해 주세요.');
			return false;
		}
		if (M('#boyBox a').hasClass('checked')) {
			data.sexType = 'boy'
		} else if (M('#girlBox a').hasClass('checked')) {
			data.sexType = 'girl'
		}
		M.storage('io.github.romeoh.user.sexType', data.sexType);
	}

	if (M('#userName').selector.length > 0) {
		if (M('#userName').val() === '') {
			alert('이름을 입력해 주세요.');
			return false;
		}
		data.userName = M('#userName').val()
	}
	if (M('#selColor').selector.length > 0) {
		if (M('#selColor').val() === '-1') {
			alert('좋아하는 색상을 선택해 주세요.');
			return false;
		}
		data.color = M('#selColor').val()
	}
	if (M('#selAlpha').selector.length > 0) {
		if (M('#selAlpha').val() === '-1') {
			alert('떠오르는 알파벳을 선택해 주세요.');
			return false;
		}
		data.alphabet = M('#selAlpha').val()
	}
	if (M('#selCoffee').selector.length > 0) {
		if (M('#selCoffee').val() === '-1') {
			alert('커피를 주문해 주세요.');
			return false;
		}
		data.coffee = M('#selCoffee').val()
	}
	if (M('#userAge').selector.length > 0) {
		if (M('#userAge').val() === '') {
			alert('생년을 입력해 주세요.');
			return false;
		}
		data.bornYear = M('#userAge').val();
		M.storage('io.github.romeoh.user.bornYear', M('#userAge').val());
	}
	if (M('#selYear').selector.length > 0) {
		if (M('#selYear').val() === '-1') {
			alert('생년을 선택해 주세요.');
			return false;
		}
		data.bornYear = M('#selYear').val();
		M.storage('io.github.romeoh.user.bornYear', M('#selYear').val());
	}
	if (M('#selMonth').selector.length > 0) {
		if (M('#selMonth').val() === '-1') {
			alert('태어난 달을 선택해주세요.');
			return false;
		}
		data.bornMonth = M('#selMonth').val()
		M.storage('io.github.romeoh.user.bornMonth', M('#selMonth').val());
	}
	if (M('#selDate').selector.length > 0) {
		if (M('#selDate').val() === '-1') {
			alert('태어난 날을 선택해주세요.');
			return false;
		}
		data.bornDate = M('#selDate').val()
		M.storage('io.github.romeoh.user.bornDate', M('#selDate').val());
	}
	if (M('#selBlood').selector.length > 0) {
		if (M('#selBlood').val() === '-1') {
			alert('혈액형을 선택해주세요.');
			return false;
		}
		data.blood = M('#selBlood').val()
	}
	if (M('#selSex').selector.length > 0) {
		if (M('#selSex').val() === '-1') {
			alert('성별을 선택해주세요.');
			return false;
		}
		data.sexType = M('#selSex').val()
	}
	if (M('#selActor').selector.length > 0) {
		if (M('#selActor').val() === '-1') {
			alert('상대연기자를 선택해주세요.');
			return false;
		}
		data.actor = M('#selActor').val()
	}
	if (M('#selTall').selector.length > 0) {
		if (M('#selTall').val() === '-1') {
			alert('나의 키를 선택해주세요.');
			return false;
		}
		data.tall = M('#selTall').val()
	}
	if (M('#selIndian').selector.length > 0) {
		if (M('#selIndian').val() === '-1') {
			alert('인디안 부족을 고르세요.');
			return false;
		}
		data.indian = M('#selIndian').val()
	}

	action(data);
}

function uniValue(_val) {
	if (!_val) {
		return;
	}

	var  lastChar = _val.substr(_val.length-1)
		,uniValue = lastChar.charCodeAt(0) - 0xAC00
		,jong = uniValue % 28
		,jung = ( (uniValue - jong) / 28 ) % 21
		,cho = parseInt( ( (uniValue - jong) / 28 ) % 21, 10)
	if (jong === 0) {
		return false;
	}
	return true;
}

var bannerData;
function showad() {
	return; 
	function getRandom(min, max){
		return Math.floor(Math.random() * (max-min) + min)
	}
	if ( getRandom(0, 5) !== 0) {
		return false
	}
	
	if (os === 'ios') {
		return false;
	}
	bannerData = dataBanner[Math.floor(Math.random() * dataBanner.length)]
	if (M('#goStore').selector.length != 0) {
		return false;
	}
	M('body').append('div', {
		'id': 'goStore'
	})
	M('#goStore')
		.css('left', M.screen().width/2 - 150 + 'px')
		.html('<iframe src="'+bannerData['url']+'"></iframe>')
}

function closeBanner(){
	M('#goStore').animate({
		 'opacity':'0'
		,'time': '.3s'
	}, function(evt, mp){
		mp.css('display', 'none')
	})
	console.log('closeBanner()')
}

function goStore() {
	/*M('#goStore').animate({
		 'opacity':'0'
		,'time': '.3s'
	}, function(evt, mp){
		mp.css('display', 'none')
	})*/
	window.location.href = bannerData['link']
	console.log('goStore()')
}

dataBanner = [
	{'url': 'bnnr_hippop.html', 'link': 'http://goo.gl/BNYgT'},
	{'url': 'bnnr_buam.html', 'link': 'http://goo.gl/WrRJr'},
	{'url': 'bnnr_dance.html', 'link': 'http://goo.gl/otEy6'},
	{'url': 'bnnr_alice.html', 'link': 'http://goo.gl/qldVb'}
]


function sendData(_obj) {
	var  obj = _obj || {}
		,media = obj.media || 'story'
		,id = obj.id || 'gaeyou'
		,ver = obj.ver || '1.0'
		,app = obj.app || '깨알유머:'
		,title = obj.title || ''
		,url = obj.url || ''
	
	if (media == 'talk') {
		var  msg = obj.msg || title || ''

		kakao.link('talk').send({
			msg: msg,
			url: url,
			appid: id,
			appver: ver,
			appname: app,
			type: 'link'
		});
		//return false;

		test  = '♥♥ [카톡친구 초대] ♥♥\n'
		test += 'appId: ' + id + '\n'
		test += 'appVersion: ' + ver + '\n'
		test += 'appName: ' + app + '\n'
		test += 'msg: \n'
		test += '-----------\n'
		test += msg + '\n'
		test += '-----------\n'
		test += 'url: ' + url + '\n'
		test += '--------------------------------------------\n'
		console.log(test)
		return false;
	}

	if (media == 'story') {
		var  post = obj.post || ''
			,desc = obj.desc || ''
			,img = obj.img || ''
			,urlinfo = {
				'title': title,
				'desc': desc,
				'imageurl': [img],
				'type': 'article'
			}
		post = post + '\n\n' + url;
		
		kakao.link("story").send({   
	        appid : id,
			appver : ver,
			appname : app,
	        post : post,
			urlinfo : M.json(urlinfo)
	    });
		//return false;
		
		test  = '♥♥ [카스로 공유] ♥♥\n'
		test += 'appId: ' + id + '\n'
		test += 'appVersion: ' + ver + '\n'
		test += 'appName: ' + app + '\n'
		test += 'post: \n'
		test += '-----------\n'
		test += post + '\n'
		test += '-----------\n'
		test += 'title: ' + title + '\n'
		test += 'desc: ' + desc + '\n'
		test += 'img: ' + img + '\n'
		test += '--------------------------------------------\n'
		console.log(test);
		
		return false;
	}

	if (media == 'twitter') {
		var  str = ''
			,post = obj.twit || obj.post || ''
			,urlLength = url.length + 5
			,postLength = post.length + urlLength + 1
			,textLimit = 140
		
		if (postLength >= textLimit) {
			twit = post.substr(0, (textLimit-urlLength)) + '...\n' + url;
		} else {
			twit = post + '\n' + url;
		}
		twit = twit.replace(/\n\n/g, '\n')

		str += 'https://twitter.com/intent/tweet?text=';
		str += encodeURIComponent(twit);
		top.location.href = str;
		//return false;

		test  = '♥♥ [트위터로 공유] ♥♥\n'
		test += 'twit: \n'
		test += '-----------\n'
		test += twit + '\n'
		test += '-----------\n'
		console.log(test)
		return false;
	}

	if (media == 'me2day') {
		var  str = ''
			,post =  obj.twit || obj.post || ''
			,tag = obj.tag || '미투데이를 더 재미있게 깨알유머 SNS 테스트 심리테스트'
			,urlLength = url.length + 5
			,postLength = post.length + urlLength + 1
			,textLimit = 150

		if (postLength >= textLimit) {
			me2 = post.substr(0, (textLimit-urlLength)) + '...\n' + url;
		} else {
			me2 = post + '\n' + url;
		}
		me2 = me2.replace(/\n\n/g, '\n')

		str += 'http://me2day.net/posts/new';
		str += '?new_post[body]=';
		str += encodeURIComponent(me2)
		str += '&new_post[tags]='
		str += encodeURIComponent(tag)
		top.location.href = str;
		//return false;

		test  = '♥♥ [미투데이로 공유] ♥♥\n'
		test += 'post: \n'
		test += '-----------\n'
		test += me2 + '\n'
		test += '-----------\n'
		console.log(test)
		return false;
	}

	// facebook sharer
	if (media == 'facebookSharer') {//
		var  str = ''
			,post = obj.post || ''
			,img = obj.img || ''
		
		str += 'http://www.facebook.com/sharer.php';
		str += '?s=100';
		str += '&p[title]=' + encodeURIComponent( post.replace(/\[.+\]/g, '') );
		str += '&p[summary]=' + encodeURIComponent( title );
		str += '&p[url]=' + encodeURIComponent(url);
		str += '&p[images][0]=' + encodeURIComponent(img);
		top.location.href = str;
		return false;
	}

	// facebook open API
	if (media == 'facebook') {//API
		M('body').prepend('script', {
			'src':'https://connect.facebook.net/en_US/all.js',
			'type': 'text/javascript',
			'id': 'facebookScript'
		})

		M('#facebookScript').on('load', function(evt, mp){
			var  obj = _obj || {}
				,mode = obj.mode || 'real'
				,feed = obj.feed || 'feed'
				,method = obj.method || 'post'
				,img = obj.img || ''
				,photo = obj.photo || obj.img || ''
				,post = obj.post || ''
				,scope = obj.scope || 'publish_actions, user_photos'
				,success = obj.success || null
				,error = obj.error || null
				,faceappid
				,message = {}

			post = post + '\n\n' + url;

			if (mode == 'real') {
				faceappid = '575459299155222';
			} else {
				faceappid = '199304076906232';
			}

			if (feed == 'feed') {
				message = {
					'message': post,
					'picture': photo
				}
			} else if (feed == 'photo') {
				message = {
					'message': post,
					'url': photo
				}
			}

			FB.init({
				'appId'     : faceappid, // App ID
				'channelUrl': '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
				'status'    : true, // check login status
				'cookie'    : true, // enable cookies to allow the server to access the session
				'xfbml'     : true  // parse XFBML
			})

			FB.login(function(response) {
				if (response.authResponse) {
					FB.api(/me/ + feed, method, message, function (response) {
						console.log(response);
						if (!response || response.error) {
							//if (error) {
							alert('죄송합니다.\n오류가 발생했습니다.');
								//error();
							//}
						} else {
							//if (success) {
							alert('페이스북에 등록 되었습니다.');
								//success();
							//}
						}
					});
				}
			}, {'scope': scope});

			//return false;
			test  = '♥♥ [페이스북으로 공유] ♥♥\n'
			test += 'feed: ' + feed + '\n'
			test += 'method: ' + method + '\n'
			test += 'photo: ' + photo + '\n'
			test += 'message: \n'
			test += '-----------\n'
			test += post + '\n'
			test += '-----------\n'
			console.log(test)

		})
		return false;
	}

	if (media == 'band') {
		var  src = ''
			,post = obj.post || ''
			,urlLength = url.length + 3
			,postLength = post.length + urlLength + 1
			,textLimit = 300

		bandPost += '[' + app + ']\n'
		bandPost += title + ': ' + post

		if (postLength >= textLimit) {
			b = bandPost.substr(0, (textLimit-urlLength)) + '...' + url;
		} else {
			b = bandPost + ' ' + url;
		}

		src += 'bandapp://create/post?text=';
		src += encodeURIComponent(bandPost);
		src += '#Intent;package=com.nhn.android.band;end;';
		top.location = str;
		return false;
	}
}

function process(_min, _max){
	var data, min, max

	if ( getDataType(_min) === 'object' || getDataType(_min) === 'array' ) {
		data = _min;
		return Math.floor(Math.random() * data.length);
	} else {
		min = _min;
		max = _max;
		return Math.floor(Math.random() * (max-min) + min)
	}
}

function shuffle(array, length) {
	var counter = array.length,
		length = length || counter,
		temp,
		index

	while (counter > 0) {
		index = Math.floor(Math.random() * counter);
		counter--;
		temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}
	array.length = length;
	return array;
}

function getDataType(_value) {
	if (typeof _value === 'string') {
		return 'string';
	}
	if (typeof _value === 'number') {
		return 'number';
	}
	if (_value.constructor === Object) {
		return 'object';
	}
	if (_value.constructor === Array) {
		return 'array';
	}
	if (_value.constructor === Function) {
		return 'function';
	}
	if (_value.constructor === Boolean) {
		return 'boolean';
	}
	return undefined;
}


// 랭킹 컨텐츠
window.addEventListener('hashchange', function(){
	window.location.reload();
})

window.addEventListener('load', initPoll, false);
function initPoll() {
	if (M('[data-poll]').selector.length > 0) {
		var  hash = window.location.hash.replace('#', '')
			,cuRank 
			,str = ''

		if (hash === '') {
			window.location.hash = rankList[0]['idx'];
			window.location.reload();
			return false;
		}
		for (var i=0; i<rankList.length; i++) {
			if (rankList[i]['idx'] == hash) {
				cuRank = rankList[i];
				continue;
			}
		}
		if (cuRank == undefined) {
			window.location.hash = rankList[0]['idx'];
			window.location.reload();
			return false;
		}

		M('#rankTitle h2').html(cuRank['title'].replace(/ VS /g, ' <span class="vs">VS</span> '));
		M('#question').html('<span class="ico_q">Q</span>' + cuRank['q']);
		
		if (cuRank['type'] === 'A') {
			// A 타입 (사진)
			M('#pollType').addClass('poll_content')
			for (var i=0; i<cuRank['list'].length; i++) {
				if (i != 0) {
					str += '<div class="ico_ent ico_vs">VS</div>';
				}
				str += '<div class="plist">';
				str += '	<span><img src="' + cuRank['list'][i]['photo'] + '" width="80px"></span>';
				str += '	<p>' + cuRank['list'][i]['title'] + '</p>';
				str += '	<div class="btn_poll pround" data-a="' + i + '"><div class="inner_poll">투표하기</div></div>';
				str += '</div>';
				//console.log(cuRank['list'][i])
			}
			M('#pcontent').html(str)
		} else {
			// B타입 (리스트)
			M('#pollType').addClass('poll_content_list')
			for (var i=0; i<cuRank['list'].length; i++) {
				str += '<div class="plist" data-b="' + i + '">';
				str += '	<div class="inner_item">';
				str += '		<span class="txt_g">' + cuRank['list'][i]['title'] + '</span>';
				str += '		<span class="check_item"><span class="ico_ent ico_check"></span></span>';
				str += '	</div>';
				str += '</div>';
			}
			str += '<div class="btn_poll pround" data-submit-b=""><div class="inner_poll">투표하기</div></div>';
			M('#pcontent').html(str)
		}
		M('[data-poll]').data('poll', cuRank['idx']);
	}


	// 랭킹 리스트 처리
	if (M('[data-rank-list]').selector.length > 0) {
		var  str = ''

		for (var i=0; i<rankList.length; i++) {
			str += '<li data-rank-idx="' + rankList[i]['idx'] + '" ';
			if (i<5){
				str += 'data-new ';
			}
			if (rankList[i]['hot'] === 'true') {
				str += 'data-hot ';
			}
			str += 'data-' + rankList[i]['category'];
			str += '>';
			if (hash === rankList[i]['idx']) {
				str += '<span class="ico sel"></span>';
			}
			str += '<a href="' + rankList[i]['url'] + '">' + rankList[i]['title'] + '</a> ';
			if (i<5) {
				str += '<span class="ico new"></span>';
			}
			if (rankList[i]['hot'] === 'true') {
				str += '<span class="ico hot"></span>';
			}
			str += '</li>';
		}
		M('[data-rank-list]').html(str);
	}


	/* Ranking */
	var polldata = M.storage('io.github.romeoh.poll') || '{}'
	polldata = M.json(polldata);
	M('[data-a]').on('click', function(evt, mp){
		var  poll = mp.data('a')
		
		checkPoll()
		submitPoll(poll);
	})

	M('[data-b]').on('click', function(evt, mp){
		M('[data-b]').removeClass('on')
		mp.addClass('on');
		M('[data-submit-b]').data('submit-b', mp.data('b'))
	})

	M('[data-submit-b]').on('click', function(evt, mp){
		var poll = mp.data('submit-b')
		if(!checkPoll()) {
			return false;
		}
		if (poll === '') {
			alert('한가지를 선택해주세요.');
			return false;
		}
		submitPoll(poll)
	})

	function checkPoll() {
		var pollIndex = M('[data-poll]').data('poll')
		
		if (polldata[pollIndex]) {
			alert('이미 투표한 랭킹입니다.');
			return false;
		}
		polldata[pollIndex] = 'true';
		console.log(polldata)
		M.storage('io.github.romeoh.poll', M.json(polldata));
	}

	function submitPoll(poll) {
		var pollIndex = M('[data-poll]').data('poll')
		//M.storage('io.github.romeoh.poll', )
		//console.log(pollIndex)
		M('.tinfo')
			.css('display', 'block')
			.html('<div><span class="ico i"></span> 반영되었습니다. <br>감사합니다. 아래 SNS로 결과를 확인하세요.</div>')
		
		console.log(poll)
	}
}









