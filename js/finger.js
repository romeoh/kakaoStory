var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,nowDeg = 0
	,derection = 1
	,pointId = null
	,countId = null
	,thisCount = 4
	,score = 0
	,combo = 0
	,intro0 = intro1 = intro2 = intro3 = intro4 = intro5 = null
	,actionId = null
	,successRage = false
	,successResult = false
	,actionId0 = actionId1 = actionId2 = null


if (os == 'ios' || os == 'android') {
	
} else {
	var  adTop = document.querySelector('#adTop')
		,adBottom = document.querySelector('#adBottom')
	document.querySelector('body').removeChild(adTop)
	document.querySelector('body').removeChild(adBottom)
}


window.addEventListener('load', ready, false);

function ready(){
	window.scrollTo(0, 0);
	$('#btnReply').on('click', function(){
		gameReady();
		hidePop();
		pointPlay();
		resetScore();
		knifeReset();
	})
	$('#btnShare').on('click', function(){
		var postMsg = ''
		postMsg += '[손가락 루이16세]\n\n';
		postMsg += '최고점수: ' + score + '점 획득!!\n';
		postMsg += combo + ' 콤보를 달성했습니다.\n\n';
		
		postMsg += '다시 도전하기 http://goo.gl/u3vjV\n';
		
		urlMsg = {
			title: '[웹게임] 손가락 루이16세',
			desc: '최고점수: ' + score + '점, ' + combo + ' 콤보 달성',
			imageurl: ['http://romeoh.github.io/kakaoStory/imgFinger/finger.jpg'],
			type:'article'
		}
		console.log(postMsg, urlMsg)

		kakao.link("story").send({   
	        post : postMsg,
	        appid : 'funnyApp',
			appver : '1.0',
			appname : '손가락 루이 16세',
			urlinfo : JSON.stringify(urlMsg)
	    });
	})
	
	introGame();
}

/*
 * 인트로
 */
function introGame(){
	intro0 = setTimeout(knifePlay, 500, '.3');
	intro1 = setTimeout(knifeReset, 1400);
	intro2 = setTimeout(viewPopInfo, 1700);
	intro3 = setTimeout(hidePop, 3700);
	intro4 = setTimeout(pointPlay, 3700);
	intro5 = setTimeout(gameReady, 3700);
}

/*
 * 인트로 취소
 */
function introKill(){
	clearTimeout(intro0);
	clearTimeout(intro1);
	clearTimeout(intro2);
	clearTimeout(intro3);
	clearTimeout(intro4);
	clearTimeout(intro5);
	intro0 = intro1 = intro2 = intro3 = intro4 = intro5 = null;
	knifeReset('0.1');
	hidePop();
	pointPlay();
	gameReady();
}

/*
 * 게임초기화
 */
function resetGame(){
	score = 0;
	combo = 0;
	M('#score').text('score: ' + score);
	M('#combo').text('');
	successRage = false;
}

/*
 * 게임 준비완료
 */
function gameReady(){
	$('#pointer').on('touchstart', gameStart);
}

function nextGame(flag){
	//console.log('nextGame', combo, flag)
	if (flag === 0 && combo >= 2) {
		console.log('공유하기')
		setTimeout(function(){
			viewPopShare();
			$('#pointer').off('touchstart');
			$('#pointer').off('touchend');
		}, 2000);
		return;
	} else if (flag === 1) {
		$('#pointer').off('touchstart');
		$('#pointer').off('touchend');
		setTimeout(gameReady, 2000)
	}
	
	setTimeout(function(){
		knifeReset();
		hidePop();
		pointPlay();
		if (flag === 0) {
			resetScore();
		}
		//gameReady();
	}, 2000)
}

function gameStart(evt){
	evt.preventDefault();
	successResult = null
	$('#pointer').off('touchend');
	$('#pointer').on('touchend', gameEnd);
	countPlay();
	pointPause();
	actionId0 = setTimeout(action, 3000);	//카운트 3초후 action 칼떨어짐
}

// 랜덤시간후 knifePlay
function action(){
	var speed;

	actionId1 = setTimeout(function(){
		successRage = true;
		speed = 0.4 - combo * 0.02
		knifePlay('.3', actionResult)
		goPlay();
		//knifePlay('.8', actionResult);
	}, getRan());
}

// knifePlay후 결과반환
function actionResult(){
	successRage = false;

	// 카운트 만료
	if (thisCount == 1) {
		gameStop();
		resultTxt = '실패';
		actionId2 = setTimeout(viewPopResult, 100, resultTxt);	// 성공유무 팝업보기
		nextGame(0);
		console.log('빠름 실패')
	} else if (thisCount == 0) {
		//console.log('카운트만료')
		if (successResult === true) {
			resultTxt = '성공';
			actionId2 = setTimeout(viewPopResult, 100, resultTxt);	// 성공유무 팝업보기
			setScore();
			nextGame(1);
			console.log('성공')
		} else if (successResult === null) {
			resultTxt = '실패';
			actionId2 = setTimeout(viewPopResult, 100, resultTxt);	// 성공유무 팝업보기
			$('#pointer').off('touchend');
			nextGame(0);
			console.log('늦었음 실패')
		} else {
			gameStop();
			resultTxt = '실패';
			actionId2 = setTimeout(viewPopResult, 100, resultTxt);	// 성공유무 팝업보기
			nextGame(0);
			console.log('대기중 실패')
		}
	} else {
		resultTxt = '실패';
		gameStop();
		countKill();
		pointPlay();
		console.log('무시')
	}

	//console.log('최종결과: ',resultTxt)
}

// 터치종료
function gameEnd(){
	if (successRage) {
		successResult = true;
	} else {
		successResult = false;
	}

	actionResult()
}

// 게임 강제종료
function gameStop() {
	clearTimeout(actionId0)
	clearTimeout(actionId1)
	clearTimeout(actionId2)
	actionId0 = actionId1 = actionId2 = null
}

// 다시하기
function replay(){
	knifeReset();
	hidePop();
}

/*
 * 스코어/콤보
 */
function setScore(){
	score = score + ranScore();
	combo++;
	M('#score').text('score: ' + score);
	M('#combo').text(combo + ' combo');
}

function resetScore(){
	score = 0
	combo = 0
	M('#score').text('score: 0');
	M('#combo').text('');
}

/*
 * 카운트제어
 */
function goPlay(){
	killPop();
	M('#popCount')
		.css('display', 'block')
		.css('scale', '1.5')
		.text('GO')
		.animate({
			 'scale': '.3'
			,'time': '.3s'
		}, function(evt, mp){
			mp.css('display', 'none')
		})
}

function countPlay(){
	thisCount = 4;
	killPop();
	M('#popCount').css('display', 'block')
	countAnimate()
	countId = setInterval(countAnimate, 1000)
}

function countAnimate() {
	thisCount--;
	if (thisCount == 0) {
		countTxt = 'GO'
		clearInterval(countId)
		countId = null
		countKill();
		return;
	} else {
		countTxt = thisCount
	}
	M('#popCount')
		.css('scale', '0.1')
		.text(countTxt)
		.animate({
			 'scale': '1'
			,'time': '.3s'
		})
}

function countKill(){
	if (countId != null) {
		clearInterval(countId);
		countId = null
	}
	M('#popCount').css('display', 'none')
	//pointPlay();
}

/*
 * 안내 팝업
 */
function viewPopInfo(){
	killPop();
	M('#popup .info')
		.css('display', 'block')
	M('#popup')
		.css('display', 'block')
		.css('scale', '.1')
		.animate({
			 'scale': '1'
			,'time': '.3s'
		})
}

/*
 * 결과팝업
 */
function viewPopResult(result){
	killPop();
	if (!result) {
		result = '성공'
	}
	M('#popup .result')
		.css('display', 'block')
		.text(result)
	M('#popup')
		.css('display', 'block')
		.css('scale', '.1')
		.animate({
			 'scale': '1'
			,'time': '.3s'
		})
}

/*
 * 공유팝업
 */
function viewPopShare(){
	killPop();
	M('#resultScore').text(M.toCurrency(score) + '점 / ' + combo + '콤보')
	M('#popup .share')
		.css('display', 'block')
	M('#popup')
		.css('display', 'block')
		.css('scale', '.1')
		.animate({
			 'scale': '1'
			,'time': '.3s'
		})
}

/*
 * 팝업 해제
 */
function hidePop(){
	M('#popup')
		.animate({
			 'scale': '0'
			,'time': '.3s'
		}, function(){
			//killPop()
		})
}

function killPop(){
	countKill();
	M('#popup .info').css('display', 'none')
	M('#popup .result').css('display', 'none')
	M('#popup .share').css('display', 'none')
	M('#popup').css('display', 'none')
}

/*
 * knife 제어
 */
function knifePlay(speed, cb){
	if (!speed) {
		speed = '1'
	}
	M('#knife').animate({
		 'top':'12px'
		,'time': speed + 's' //.25s
	}, function(){
		if (typeof cb == 'function') {
			if (!successResult) {
				cb();
			}
		}
	})
}

function knifeReset(speed, cb){
	if (!speed) {
		speed = '2'
	}
	M('#knife').animate({
		 'top':'-195px'
		,'time': speed + 's'
	}, function(){
		if (typeof cb == 'function') {
			cb();
		}
	})
}

/*
 * 포인트 동작제어
 */
function pointPlay() {
	$('#pointer')
		.css('display', 'block')
		.animate({
			 'opacity': '1'
			,'time':'.3s'
		})
	if (pointId != null) {
		clearInterval(pointId)
		pointId = null;
	}
	pointId = setInterval(pointAnimate, 80);
}

function pointAnimate(){
	$('#pointer').css({'transform': 'rotate('+nowDeg+'deg)'});
	if (nowDeg >= 90) {
		derection = -1
	} else if (nowDeg <= 0) {
		derection = 1
	}
	if (derection == 1) {
		nowDeg = nowDeg + 1
	} else {
		nowDeg = nowDeg - 1
	}
}

function pointStop(){
	$('#pointer')
		.animate({
			 'opacity': '.1'
			,'time':'.3s'
		}, function(){
			$(this).css('display', 'none');
		})

	clearInterval(pointId);
	pointId = null;
}

function pointPause(){
	clearInterval(pointId);
	pointId = null;
}


/*
 * 렌덤시간 가져옴
 */
function getRan(){
	return Math.floor(Math.random() * 4000)
}

function ranScore(){
	return Math.floor(Math.random() * 50) + 100
}































