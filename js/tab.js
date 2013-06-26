var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,totalCount = 0
	,count = 1
	,hasTouch = 'ontouchstart' in window
	,evtStart = hasTouch ? evtStart = 'touchstart' : evtStart = 'mousedown'
	,evtEnd = hasTouch ? evtEnd = 'touchend' : evtEnd = 'mouseup'
	,autoId = null
	,isChance = false
	,chanceTimeId
	,chanceTime
	,isAuto = false
	,team

if (os == 'ios' || os == 'android') {
	//init();
} else {
	var  adTop = document.querySelector('#adTop')
		,adBottom = document.querySelector('#adBottom')
		,adMiddle = document.querySelector('#adMiddle')
	document.querySelector('body').removeChild(adTop)
	document.querySelector('body').removeChild(adBottom)
	document.querySelector('body').removeChild(adMiddle)
}

window.addEventListener('DOMContentLoaded', function(){
	// 게임시작
	M('#btnBoy').on('click', function(){
		team = 'boy'
		gameStart()
	})
	M('#btnGirl').on('click', function(){
		team = 'girl'
		gameStart()
	})

	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
	
	getVs()
}, false);

function getVs() {
	$.ajax({
		 'url': 'http://romeoh78.appspot.com/api/vs/get/ing'
		,'contentType': 'text/plain'
		,'data': '{"body" : {}, "head" : {}}'
		//,'dataType': 'json'
		,'type': 'POST'
		,'success': function(data){
			var  data = M.json(data).body
				,round = data['round']
				,boy = data['boy']
				,girl = data['girl']
				,sdate = data['s_date']
				,edate = data['e_date']
				,smonth = sdate.substr(5, 2)
				,sday = sdate.substr(8, 2)
				,shour = sdate.substr(11, 2)
				,emonth = edate.substr(5, 2)
				,eday = edate.substr(8, 2)
				,ehour = edate.substr(11, 2)
				,str = ''
				,sub
			
			M('#scoreBoard').text( round + '경기 (' + smonth + '월 ' + sday + '일 04시 ~ ' + emonth + '월 ' + emonth + '일 04시)')
			if (boy > girl) {
				str += '<div id="reload"></div>';
				str += '<div class="team0">';
				str += '	<p class="title">오빠팀 스코어보드</p>';
				str += '	<p class="score">' + M.toCurrency(boy) + ' 탭</p>';
				str += '</div>';
				str += '<div class="team1">';
				str += '	<p class="title">언니팀 스코어보드</p>';
				str += '	<p class="score">' + M.toCurrency(girl) + ' 탭</p>';
				str += '</div>';
				sub = boy - girl
				M('#info').text('현재 오빠팀이 ' + M.toCurrency(sub) + '탭 앞서고 있습니다.')
			} else {
				str += '<div id="reload"></div>';
				str += '<div class="team0">';
				str += '	<p class="title">언니팀 스코어보드</p>';
				str += '	<p class="score">' + M.toCurrency(girl) + ' 탭</p>';
				str += '</div>';
				str += '<div class="team1">';
				str += '	<p class="title">오빠팀 스코어보드</p>';
				str += '	<p class="score">' + M.toCurrency(boy) + ' 탭</p>';
				str += '</div>';
				sub = girl - boy
				M('#info').text('현재 언니팀이 ' + M.toCurrency(sub) + '탭 앞서고 있습니다.')
			}
			M('#board').html(str);
			M('#reload').on('click', function(){
				M('#scoreBoard').text('')
				M('#board').text('')
				M('#info').text('')
				getVs();
			})
		}
	})
}


// 게임시작
function gameStart() {
	M('#game').css('display', 'block')
	M('#share').css('display', 'block')
	M('.btnBoxStart').css('display', 'none')

	// 클릭 버튼 
	M('#btnClick').on(evtStart, function(){
		M('#btnAuto').text('자동클릭')
		isAuto = false;
		clearInterval(autoId)
		autoId = null;

		onPress();
	})
	M('#btnClick').on(evtEnd, onRelease)

	// 자동 버튼
	M('#btnAuto').on('click', onAuto)

	//  버튼
	M('#btnSubmit').on('click', onSubmit)
}


// 클릭 버튼 누름
function onPress(evt, mp) {
	if (evt) {
		evt.preventDefault();
		stopAuto();
	}

	// 찬스
	if(getRandom(0, 100) == 0){
		chanceMode();
	}
	M('#btnClick')
		.removeClass('purple')
		.addClass('purpleAct')
}
function onRelease(evt, mp) {
	M('#btnClick')
		.addClass('purple')
		.removeClass('purpleAct')

	totalCount += count;
	M('#counter')
		.text(M.toCurrency(totalCount))
		.data('count', totalCount)

	if (totalCount > 14) {
		M('#btnAuto').addClass('blue')
	}
	if (totalCount > 19) {
		M('#btnSubmit').addClass('blue')
	}
}

function chanceMode() {
	if (isChance) {
		return;
	}
	isChance = true;
	count = getRandom(2, 10);
	chanceTimeId = setInterval(chanceCount, 1000);
	chanceTime = getRandom(3, 15)
	setTimeout(normalMode, chanceTime * 1000);
	M('#btnClick').text('찬스! 지금부터 '+count+'배! ('+chanceTime+'초간)')
	console.log('chance')
}

function chanceCount(){
	M('#btnClick').text('찬스! 지금부터 '+count+'배! ('+chanceTime+'초간)')
	chanceTime--;
	if (chanceTime === 0){
		normalMode();
		clearInterval(chanceTimeId)
		chanceTimeId = null;	
	}
}

function normalMode() {
	isChance = false;
	count = 1;
	M('#btnClick').text('클릭! 클릭! 클릭!');
}
// 자동 카운트
function onAuto(evt, mp){
	if (totalCount < 15) {
		return false
	}
	if (isAuto) {
		mp.text('자동클릭')
		isAuto = false;
		clearInterval(autoId)
		autoId = null;
	} else {
		mp.text('수동클릭')
		isAuto = true;
		autoId = setInterval(press, 200);
	}
}

function press(){
	onPress()
	setTimeout(function(){
		onRelease();
	}, 100);
}

function stopAuto(){
	clearInterval(autoId)
	autoId = null
}

function onSubmit(){
	if (totalCount < 20) {
		return false
	}
	var  sendData = {}
		,bodyData = {}

	sendData.category = team
	sendData.count = totalCount

	bodyData = {
		'body':sendData,
		'head':{}
	}

	$.ajax({
		 'url': 'http://romeoh78.appspot.com/api/vs/add'
		,'contentType': 'text/plain'
		,'data': M.json(bodyData)
		,'type': 'POST'
		,'success': function(data){
			getVs()
			totalCount = 0
			M('#btnAuto').removeClass('blue')
			M('#btnSubmit').removeClass('blue')
			M('#counter').text('0')
		}
	})
}

function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
	
	for (var i=0; i<radioList.length; i++) {
		if (radioList[i].checked) {
			selected = i
		}
	}
	
	if (selected === '') {
		alert('당신의 행동을 선택하세요.');
		return;
	}
	


	data = dataSexy[selected]
	
	postMsg += '[섹시한여성을 봤을때 당신의 행동은?]\n\n';
	postMsg += data.title + '\n\n';
	postMsg += '(결과)\n';
	postMsg += data.result + '\n\n';
	
	postMsg += 'http://goo.gl/wb8IF\n';
	
	urlMsg = {
		title: '[섹시한여성을 봤을때 당신의 행동은?]',
		desc: '공공장소에서 섹시한 여성을 봤을때 어떤 행동을 하나요?',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/sexy.jpg'],
		type:'article'
	}
	console.log(postMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '심리테스트',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: '섹시한여성을 봤을때 당신의 행동은?',
		url: 'http://goo.gl/wb8IF',
		appid: "funnyApp",
		appver: "1.0",
		appname: "심리테스트",
		type: "link"
	});
}






























