var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,macao
,ClevisURL = {

// URL Pattern
_patterns : {
	url : '(?:\\b(?:(?:(?:(ftp|https?|mailto|telnet):\\/\\/)?(?:((?:[\\w$\\-'
		+ '_\\.\\+\\!\\*\\\'\\(\\),;\\?&=]|%[0-9a-f][0-9a-f])+(?:\\:(?:[\\w$'
		+ '\\-_\\.\\+\\!\\*\\\'\\(\\),;\\?&=]|%[0-9a-f][0-9a-f])+)?)\\@)?((?'
		+ ':[\\d]{1,3}\\.){3}[\\d]{1,3}|(?:[a-z0-9]+\\.|[a-z0-9][a-z0-9\\-]+'
		+ '[a-z0-9]\\.)+(?:biz|com|info|name|net|org|pro|aero|asia|cat|coop|'
		+ 'edu|gov|int|jobs|mil|mobi|museum|tel|travel|ero|gov|post|geo|cym|'
		+ 'arpa|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|'
		+ 'bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bw|by|bz|ca|cc|cd|cf|cg|ch'
		+ '|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|e'
		+ 'r|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|'
		+ 'gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it'
		+ '|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|l'
		+ 't|lu|lv|ly|ma|mc|me|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|'
		+ 'mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph'
		+ '|pk|pl|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|s'
		+ 'i|sk|sl|sm|sn|sr|st|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|'
		+ 'tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|za|zm'
		+ '|zw)|localhost)\\b(?:\\:([\\d]+))?)|(?:(file):\\/\\/\\/?)?([a-z]:'
		+ '))(?:\\/((?:(?:[\\w$\\-\\.\\+\\!\\*\\(\\),;:@=ㄱ-ㅎㅏ-ㅣ가-힣]|%['
		+ '0-9a-f][0-9a-f]|&(?:nbsp|lt|gt|amp|cent|pound|yen|euro|sect|copy|'
		+ 'reg);)*\\/)*)([^\\s\\/\\?:\\"\\\'<>\\|#]*)(?:[\\?:;]((?:\\b[\\w]+'
		+ '(?:=(?:[\\w\\$\\-\\.\\+\\!\\*\\(\\),;:=ㄱ-ㅎㅏ-ㅣ가-힣]|%[0-9a-f]'
		+ '[0-9a-f]|&(?:nbsp|lt|gt|amp|cent|pound|yen|euro|sect|copy|reg);)*'
		+ ')?\\&?)*))*(#[\\w\\-ㄱ-ㅎㅏ-ㅣ가-힣]+)?)?)',
	querystring: new RegExp('(\\b[\\w]+(?:=(?:[\\w\\$\\-\\.\\+\\!\\*\\(\\),;'
		+ ':=ㄱ-ㅎㅏ-ㅣ가-힣]|%[0-9a-f][0-9a-f]|&(?:nbsp|lt|gt|amp|cent|poun'
		+ 'd|yen|euro|sect|copy|reg);)*)?)\\&?', 'gi')
},

/**
 * _process : 정규식 컴파일 후 검색
 * @param   (string)		string		  문자열
 * @param   (string)		modifiers	   정규식 수식어
 * @return  (mixed)						 정규식 결과 = [ array | null ]
 */
_process : function (string, modifiers) {
	if ( ! string) throw new Error(1, '입력값이 비어 있습니다.');

	var p = new RegExp(ClevisURL._patterns.url, modifiers);
	return string.match(p);
},

/**
 * collect : 문장에서 여러 URL 주소 검색
 * @param   (string)		text			URL 을 찾을 문장
 * @return  (array)						 배열로 리턴
 */
collect : function (text) {
	var r = ClevisURL._process(text, 'gmi');
	return (r) ? r : [];
},

/**
 * parse : 하나의 URL 주소를 분석
 * @param   (string)		url			 URL 주소
 * @return  (object)						객체로 리턴
 */
parse : function (url, type) {
	var r = ClevisURL._process(url, 'mi');

	if ( ! r) return {};

	// HTTP 인증정보
	if (r[2]) r[2] = r[2].split(':');

	// 쿼리스트링 분석
	if (r[9]) {
		r[9] = r[9].match(ClevisURL._patterns.querystring);
		for (var n = 0; n < r[9].length; n++) {
			r[9][n] = (r[9][n] ? r[9][n].replace(/\&$/, '').split('=') : []);
			if (r[9][n].length == 1)
				r[9][n][1] = '';
		}
	}

	// 프로토콜이 없을 경우 추가
	if ( ! r[1] && ! r[5]) {
		// 도메인이 없는 경우 로컬 파일 주소로 설정
		if ( ! r[3]) r[5] = 'file';

		// E-Mail 인지 체크
		else if (r[0].match(new RegExp('^('+ r[2][0] +'@'+ r[3] +')$')))
			r[1] = 'mailto';

		// 기타 기본 포트를 기준으로 프로토콜 설정.
		// 포트가 없을 경우 기본적으로 http 로 설정
		else {
			switch (r[4]) {
				case 21:	r[1] = 'ftp'; break;
				case 23:	r[1] = 'telnet'; break;
				case 443:   r[1] = 'https'; break;
				case 80:
				default:	r[1] = 'http'; break;
			}
		}

		r[0] = (r[1] ? r[1] +'://' : r[5] +':///')
			+ r[0];
	}

	return {
		'url'	   : r[0],					 // 전체 URL
		'protocol'  : (r[1] ? r[1] : r[5]),	 // [ftp|http|https|mailto|telnet] | [file]
		'userid'	: (r[2] ? r[2][0] : ''),	// 아이디 : HTTP 인증 정보
		'userpass'  : (r[2] ? r[2][1] : ''),	// 비밀번호
		'domain'	: (r[3] ? r[3] : ''),	   // 도메인주소
		'port'	  : (r[4] ? r[4] : ''),	   // 포트
		'drive'	 : (r[6] ? r[6] : ''),	   // 'file' 프로토콜인 경우
		'directory' : (r[7] ? r[7] : ''),	   // 하위 디렉토리
		'filename'  : (r[8] ? r[8] : ''),	   // 파일명
		'querys'	: (r[9] ? r[9] : ''),	   // 쿼리스트링
		'anchor'	: (r[10] ? r[10] : '')	  // Anchor
	};
}
};// END: ClevisURL;

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
function requestTimeline(_idxNext) {
	var sendData = {}

	sendData.category_id = 'movie';
	sendData.thread_idx = 1;
	if (_idxNext != undefined) {
		sendData.from = _idxNext;
	}
	sendData.count = 20;

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
			data = M.json(data).body;
			idxNext = data.idx_next;
			command = data['commands'];
			for (var i=0; i<command.length; i++) {
				var  feedIdx = data['category_idx'] + '' + data['thread_idx'] + '' + command[i]['command_idx']
					,content = command[i]['content']
					,urlParser = ClevisURL.collect(content)
					,urlTxt
					
					if (urlParser[0]) {
						urlTxt = urlParser[0].replace('http://', '').replace('https://', '').replace('www.', '');
						urlTxt = content.replace(urlParser, '<a href="'+urlParser+'" target="_blank">'+urlTxt+'</a>')
					} else {
						urlTxt = content
					}

				M('#timeline').append('li', {
					'data-feed': feedIdx,
					'data-category': data['category_idx'],
					'data-thread': data['thread_idx'],
					'data-id': data['category_id'],
					'data-command': command[i]['command_idx'],
					'className': 'feed'
				})
				var  str = '';
				str += '<div class="idx" data-feed-li-title="' + feedIdx + '">@' + feedIdx + '</div>';
				str += '<div class="content" data-feed-li="' + feedIdx + '"><p data-content="' + feedIdx + '">' + urlTxt + '</p><p class="time">' + M.dynamicDate(command[i]['reg_date']) + '</p></div>';
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
				//idx = ''
				//console.log(from)
				requestTimeline(idxNext)
			})

			if (data['has_next'] === false) {
				M('#btnMore').css('display', 'none');
				M('.btnBox').html('마지막입니다.');
			}

			// 리스트 누름
			M('[data-feed-li-title]').on('click', function(evt, mp){
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








































