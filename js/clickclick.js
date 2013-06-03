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
	,autoId
	,isChance = false
	,chanceTimeId
	,chanceTime

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
	M('#btnBoy').on('click', gameStart)
	M('#btnGirl').on('click', gameStart)

	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
	
}, false);

// 게임시작
function gameStart(evt, mp) {
	M('#game').css('display', 'block')
	M('#share').css('display', 'block')
	M('.btnBoxStart').css('display', 'none')

	// 클릭 버튼 
	M('#btnClick').on(evtStart, onPress)
	M('#btnClick').on(evtEnd, onRelease)

	// 자동 버튼
	M('#btnAuto').on('click', onAuto)
}


// 클릭 버튼 누름
function onPress(evt, mp) {
	if (evt) {
		evt.preventDefault();
		stopAuto();
	}

	// 찬스
	if(getRandom(0, 50) == 0){
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
	chanceTime = getRandom(5, 30)
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
function onAuto(){
	autoId = setInterval(press, 200);
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


// 남자
dataSexy = [
	{'img': 'coffee0.jpg', 'title': '상대방이 나의 시선을 의식할 때 까지 주구장창 죽도록 쳐다본다.', 'result': '이런 사람 중엔 오히려 성실한 성격의 사람이 많다고 합니다. \n자신의 마음을 상대방에게 알리려는 성격으로 거짓이 없고 솔직한 성격의 소유자이구요. \n앞으로 누군가 나를 주구장창 쳐다본다면 상대는 성실한 사람일 가능성이 매우 높다고 생각하세요.'},
	{'img': 'coffee0.jpg', 'title': '상대방에게 한번만 시선을 주고, 일부러 눈길을 돌린다.', 'result': '이성과 대화나 맘에 드는 이성에게 한번만 시선을 주고 일부러 눈길을 돌려 다시 보려고 들지 않는 사람일 수록 성적욕구가 강한 사람일 가능성이 매우 높습니다. \n상대에게 상당한 관심을 가지고 있지만 억압이란 것이 강하게 작용하여 스스로를 자제하는 타입들이라고 합니다..'},
	{'img': 'coffee0.jpg', 'title': '상대방이 눈치 채지 못하게 계속해서 곁눈질을 한다.', 'result': '곁눈질을 하는 사람은 상대방에게 관심이 있지만 그것을 들키고 싶지 않은 타입 입니다. \n자신이 보고 있다는 것을 눈치 채이지 않게 일부로 얼굴을 움직이지 않고 시선만 옆으로 보내는 타입으로 \n계속 곁눈질을 하는 사람은 상대에 대한 관심이나 욕구가 강할수록 더욱 곁눈질을 하게 됩니다.'},
	{'img': 'coffee0.jpg', 'title': '상대방을 향해 눈을 내리 깔았다가 다시 치켜 올려보기를 반복한다.', 'result': '시선을 옆으로 돌리지 않고 올려다 봤다 내려다 봤다를 반복한다면 그것은 상대방에 대한 존경과 신뢰가 담긴 표정입니다. \n만약 여성이 남성을 이런식으로 쳐다본다면 더욱 더 그 상대방을 존경하고 있다는 표시입니다. \n혹자들은 오히려 자신이 무시당하고 있다고 기분 나빠하지만 사실은 당신을 존중한다는 것을 명심하세요.'}
]




























