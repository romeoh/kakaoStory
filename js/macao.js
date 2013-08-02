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
	M('#tbutton').on('keyup', function(evt, mp){
		if (M('#tarea').val() == '') {
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

function requestTimeline() {
	var sendData = {}

	sendData.category_id = 'movie'
	//sendData.thread_idx = 2
	//sendData.from = 2
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
			var from
			data = M.json(data).body
			command = data['commands']
			for (var i=0; i<command.length; i++) {
				M('#timeline').append('li', {
					'data-feed': command[i]['command_idx'],
					'data-category': data['category_idx'],
					'data-thread': data['thread_idx'],
					'data-id': data['category_id'],
					'data-command': command[i]['command_idx'],
					'className': 'feed'
				})
				var  str = ''
				str += '<div class="idx">@' + command[i]['command_idx'] + '</div>';
				str += '<div class="content">' + command[i]['content'] + '<p class="time">' + M.dynamicDate(command[i]['reg_date']) + '</p></div>';
				str += '<ul class="menu">';
				str += '	<li data-good="' + command[i]['command_idx'] + '"><img src="../imgApp/ico_good.png" alt=""><p>' + M.toCurrency(command[i]['good']) + '</p></li>';
				str += '	<li data-bad="' + command[i]['command_idx'] + '"><img src="../imgApp/ico_bad.png" alt=""><p>' + M.toCurrency(command[i]['bad']) + '</p></li>';
				str += '	<li data-favorite="' + command[i]['command_idx'] + '"><img src="../imgApp/ico_kas.png" alt=""><p>' + M.toCurrency(command[i]['favorite']) + '</p></li>';
				str += '	<li data-delete="' + command[i]['command_idx'] + '"><img src="../imgApp/ico_del.png" alt=""></li>';
				str += '</ul>';
				M('[data-feed="' + command[i]['command_idx'] + '"]').html(str)
				
				from = command[i]['command_idx']
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
				change()
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
		}
	})
}

// 좋아요.
function change(type, category, thread, command, id) {
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
			var data = M.json(data)['body']
			M('[data-good="' + data['command_idx'] + '"] p').text(data['good'])
			M('[data-bad="' + data['command_idx'] + '"] p').text(data['bad'])
			M('[data-favorite="' + data['command_idx'] + '"] p').text(data['favorite'])
		}
	})
}
macao()
function macao(_key, _value) {
	var value = {
		'good': [],
		'bad': [],
		'favorite': [],
		'feed': []
	}
	macao = M.json(M.storage('io.github.romeoh.macao'))

	if (macao === 'null') {
		M.storage('io.github.romeoh.macao', M.json(value))
	}
}



function regist() {

}










//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,dataRan = Math.floor(Math.random() * data.length)
		,artcle = data[dataRan]['article']
	
	postMsg += '[625전쟁 상식]\n\n';
	postMsg += artcle + '\n';
	postMsg += '출처: 위키백과\n\n';
	
	postMsg += '상식 더보기: http://goo.gl/6HS2G\n';
	
	urlMsg = {
		title: '625전쟁 상식',
		desc: '우리역사 바로 알아보기',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/flag.png'],
		type:'article'
	}
	console.log(postMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '625전쟁 63주년',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "우리역사 바로 알아보기",
		url: "http://goo.gl/6HS2G",
		appid: "funnyApp",
		appver: "1.0",
		appname: "625전쟁 상식",
		type: "link"
	});
}

































