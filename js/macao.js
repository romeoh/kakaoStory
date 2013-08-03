var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,macao

if (os == 'ios' || os == 'android') {
	//init();
} else {
	var  adTop = document.querySelector('#adTop')
		,adMiddle = document.querySelector('#adMiddle')
	//document.querySelector('body').removeChild(adTop)
	//document.querySelector('body').removeChild(adMiddle)
}

window.addEventListener('DOMContentLoaded', function(){
	ready()
}, false);

function ready() {
	//requestCategory();
	requestTimeline();

	// 카카오테스트
	M('#goTest').on('click', function(){
		window.location.href = 'http://goo.gl/pxiUqd'
	})

	// 새글쓰기버튼
	M('#write').on('click', function(){
		if (M('#new').css('display') == 'none') {
			M('#new').css('display', 'block')
		} else {
			M('#new').css('display', 'none')
		}
	})

	// 새글
	M('#tarea').on('keyup', function(evt, mp){
		M('#tinfo').html('<b>'+mp.val().length+'</b>/160')
	})

	// 등록
	M('#tbutton').on('click', function(evt, mp){
		if (M('#tarea').val() == '') {
			alert('어떤 생각이세요?');
			return;
		}
		regist()
	})
}

function requestCategory() {
	var sendData = {}
	sendData.type = 'category'

	bodyData = {
		'body':sendData,
		'head':{}
	}

	$.ajax({
		 'url': 'http://romeoh78.appspot.com/api/macao/get'
		,'contentType': 'text/plain'
		,'data': M.json(bodyData)
		,'type': 'POST'
		,'success': function(data){
			console.log(data)
		}
	})
}

// timeline
function requestTimeline() {
	var sendData = {}

	sendData.category_id = 'movie'
	sendData.thread_idx = 1
	sendData.from = 50
	sendData.count = 20

	bodyData = {
		'body':sendData,
		'head':{}
	}

	$.ajax({
		 'url': 'http://romeoh78.appspot.com/api/macao/timeline'
		,'contentType': 'text/plain'
		,'data': M.json(bodyData)
		,'type': 'POST'
		,'success': function(data){
			var  from
			data = M.json(data).body
			command = data['commands']
			for (var i=0; i<command.length; i++) {
				var feedIdx = data['category_idx'] + '' + data['thread_idx'] + '' + command[i]['command_idx']
				M('#timeline').append('li', {
					'data-feed': feedIdx,
					'data-category': data['category_idx'],
					'data-thread': data['thread_idx'],
					'data-id': data['category_id'],
					'data-command': command[i]['command_idx'],
					'className': 'feed'
				})
				var  str = ''
				str += '<div class="idx">@' + feedIdx + '</div>';
				str += '<div class="content" data-feed-li="' + feedIdx + '"><p data-content="' + feedIdx + '">' + command[i]['content'] + '</p><p class="time">' + M.dynamicDate(command[i]['reg_date']) + '</p></div>';
				str += '<ul class="menu" data-menu="' + feedIdx + '">';
				str += '	<li data-good="' + feedIdx + '"><img src="../imgApp/ico_good.png" alt=""><p>' + M.toCurrency(command[i]['good']) + '</p></li>';
				str += '	<li data-bad="' + feedIdx + '"><img src="../imgApp/ico_bad.png" alt=""><p>' + M.toCurrency(command[i]['bad']) + '</p></li>';
				str += '	<li data-favorite="' + feedIdx + '"><img src="../imgApp/ico_kas.png" alt=""><p>' + M.toCurrency(command[i]['favorite']) + '</p></li>';
				str += '	<li data-delete="' + feedIdx + '"><img src="../imgApp/ico_del.png" alt=""></li>';
				str += '</ul>';
				M('[data-feed="' + feedIdx + '"]').html(str)
				
				from = command[i]['command_idx']

				changeVal = macao('feed').join('|')
				if (new RegExp('^(?:' + changeVal + ')$', 'i').test(feedIdx)) {
					M('[data-delete="' + feedIdx + '"]').css('display', 'block');
					M('[data-menu="' + feedIdx + '"]').addClass('my')
				}
			
			}

			// 버튼
			M('[data-good]').on('click', function(evt, mp){
				var  type = 'good'
					,that = mp.parent().parent()
					,category = parseInt(that.data('category'), 10)
					,thread =  parseInt(that.data('thread'), 10)
					,command =  parseInt(that.data('command'), 10)
					,id = that.data('id')

				M.storage('io.github.romeoh.macao')
				change(type, category, thread, command, id)
			})
			M('[data-bad]').on('click', function(evt, mp){
				var  type = 'bad'
					,that = mp.parent().parent()
					,category = parseInt(that.data('category'), 10)
					,thread =  parseInt(that.data('thread'), 10)
					,command =  parseInt(that.data('command'), 10)
					,id = that.data('id')
					
				change(type, category, thread, command, id)
			})
			M('[data-favorite]').on('click', function(evt, mp){
				var  type = 'favorite'
					,that = mp.parent().parent()
					,category = parseInt(that.data('category'), 10)
					,thread =  parseInt(that.data('thread'), 10)
					,command =  parseInt(that.data('command'), 10)
					,id = that.data('id')
					
				change(type, category, thread, command, id)
			})
			M('[data-delete]').on('click', function(evt, mp){
				var  type = 'command'
					,that = mp.parent().parent()
					,category_idx = that.data('category')
					,thread_idx = that.data('thread')
					,command_idx = that.data('command')
				
				deleteFeed(type, category_idx, thread_idx, command_idx)
			})
			M('#btnMore').on('click', function(evt, mp){
				idx = ''
				console.log(from)
				requestTimeline(idx, from)
			})

			if (data['has_next'] === false) {
				M('#btnMore').css('display', 'none');
				M('.btnBox').html('마지막입니다.');
			}

			// 리스트 누름
			M('[data-feed-li]').on('click', function(evt, mp){
				M('#new').css('display', 'block');
				M('#tarea').val( M('#tarea').val() + '@' + mp.parent().data('feed') + ' ');
				M('#tinfo').html('<b>' + M('#tarea').val().length + '</b>/160');
				M.scroll(0);
			})
		}
	})
}

// 전역변수 관리
function macao(_key, _value) {
	var value = {
		'good': [],
		'bad': [],
		'favorite': [],
		'feed': []
	}
	_macao = M.json(M.storage('io.github.romeoh.macao'))

	if (_macao === 'null') {
		M.storage('io.github.romeoh.macao', M.json(value))
	}

	// getter
	if (_value == undefined) {
		return _macao[_key]
	}
	_macao[_key].push(_value);
	M.storage('io.github.romeoh.macao', M.json(_macao))
}


// 좋아요.
function change(type, category, thread, command, id) {
	var  changeVal = macao(type).join('|')
		,feedIdx = category +''+ thread +''+ command
	
	if (type != 'favorite') {
		if (new RegExp('^(?:' + changeVal + ')$', 'i').test(feedIdx)) {
			alert('이미 적용했습니다.')
			return false;
		}
	}

	var sendData = {}
	sendData.type = type
	sendData.category_idx = category
	sendData.thread_idx = thread
	sendData.command_idx = command
	sendData.category_id = id

	bodyData = {
		'body':sendData,
		'head':{}
	}

	$.ajax({
		 'url': 'http://romeoh78.appspot.com/api/macao/change'
		,'contentType': 'text/plain'
		,'data': M.json(bodyData)
		,'type': 'POST'
		,'success': function(data){
			var  data = M.json(data)['body']
				,feedIdx = data['category_idx'] + '' + data['thread_idx'] + '' + data['command_idx']

			M('[data-good="' + feedIdx + '"] p').text(data['good'])
			M('[data-bad="' + feedIdx + '"] p').text(data['bad'])
			M('[data-favorite="' + feedIdx + '"] p').text(data['favorite'])
			macao(type, feedIdx)
			if (type === 'favorite') {
				var postMsg = ''
				postMsg += '[막카오 스토리]\n';
				postMsg += '@' + feedIdx + ' ' + M('[data-content="' + feedIdx + '"]').text() + '\n\n';
				postMsg += '막카오스토리 바로가기: http://goo.gl/HMF8gs\n';

				urlMsg = {
					title: '막카오 스토리',
					desc: '카스에서는 하지 못했던말, 잘난척, 있는척, 이제 막카오에서 마음대로 하자!!',
					imageurl: ['http://romeoh.github.io/kakaoStory/img/macao.png'],
					type:'article'
				}
				kakao.link("story").send({   
			        post : postMsg,
			        appid : 'funnyApp',
					appver : '1.0',
					appname : '가벼운 익명트위터',
					urlinfo : JSON.stringify(urlMsg)
			    });

				console.log(postMsg, urlMsg)
			}
		}
	})
}

// 등록
function regist() {
	var sendData = {}
	sendData.type = 'command'
	sendData.category_id = 'movie'
	sendData.thread_idx = 1
	sendData.commnad_content = M('#tarea').val();

	bodyData = {
		'body':sendData,
		'head':{}
	}

	$.ajax({
		 'url': 'http://romeoh78.appspot.com/api/macao/add'
		,'contentType': 'text/plain'
		,'data': M.json(bodyData)
		,'type': 'POST'
		,'success': function(data){
			var  data = M.json(data)['body']
				,feedValue = data['category_idx'] + '' + data['thread_idx'] + '' + data['command_idx']
			macao('feed', feedValue);
			window.location.reload(true);
		}
	})
}

// 삭제
function deleteFeed(type, category_idx, thread_idx, command_idx) {
	var sendData = {}
	sendData.type = type
	sendData.category_idx = parseInt(category_idx, 10)
	sendData.thread_idx = parseInt(thread_idx, 10)
	sendData.command_idx = parseInt(command_idx, 10)

	bodyData = {
		'body':sendData,
		'head':{}
	}

	$.ajax({
		 'url': 'http://romeoh78.appspot.com/api/macao/del'
		,'contentType': 'text/plain'
		,'data': M.json(bodyData)
		,'type': 'POST'
		,'success': function(data){
			var  data = M.json(data)['head']
			if (data['rst'] == true) {
				window.location.reload(true);
			} else {
				alert('삭제하지 못했습니다.')	;
			}
		}
	})
}







































