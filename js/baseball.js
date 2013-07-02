var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,teamArr = [
		{'key':'A', 'logo':'team_a.png', 'name':'기아 타이거즈'},
		{'key':'B', 'logo':'team_b.png', 'name':'넥센 히어로즈'},
		{'key':'C', 'logo':'team_c.png', 'name':'두산 베어스'},
		{'key':'D', 'logo':'team_d.png', 'name':'롯데 자이언츠'},
		{'key':'E', 'logo':'team_e.png', 'name':'삼성 라이온즈'},
		{'key':'F', 'logo':'team_f.png', 'name':'SK 와이번스'},
		{'key':'G', 'logo':'team_g.png', 'name':'NC 다이노스'},
		{'key':'H', 'logo':'team_h.png', 'name':'LG 트윈스'},
		{'key':'I', 'logo':'team_i.png', 'name':'한화 이글스'}
	]
	,myTeam
	,yourTeam
	,correct = []
	,myAnswer = []
	,round
	,strike
	,ball
	,out
	

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
	M('[data-sel-team]').on('click', function(evt, mp){
		toStep2(mp);
	})

	M('#btnPlay').on('click', function(){
		toStep3();
	})

	M('#btnStory').on('click', function(){
		executeKakaoStoryLink()
	})
	M('#btnKakao').on('click', function(){
		executeURLLink()
	})
}, false);

// 상대편 선정
function toStep2(mp) {
	myTeam = parseInt(mp.data('sel-team'), 10)
	M('[data-match-team="1"] img').attr('src', '../imgApp/'+teamArr[myTeam]['logo'])
	M('[data-match-team="1"] p').text(teamArr[myTeam]['name'])

	yourTeam = getYourTeam()
	randomTeam()
	M('#step1').css('display', 'none')
	M('#step2').css('display', 'block')
}

function getYourTeam() {
	var yourTeam = getRandom(0, 8);
	if (myTeam === yourTeam) {
		return getYourTeam();
	} else {
		return yourTeam;
	}
}

function randomTeam() {
	var  idx = 0
		,intervaId

	intervaId = setInterval(function(){
		if (idx == 8) {
			idx = 0
		} else {
			idx++;
		}
		M('[data-match-team="0"] img').attr('src', '../imgApp/'+teamArr[idx]['logo'])
		M('[data-match-team="0"] p').text(teamArr[idx]['name'])
	}, 100)

	setTimeout(function(){
		clearInterval(intervaId)
		intervaId = null;
		M('[data-match-team="0"] img').attr('src', '../imgApp/'+teamArr[yourTeam]['logo'])
		M('[data-match-team="0"] p').text(teamArr[yourTeam]['name'])
		M('#btnPlayBox').css('display', 'block')
		//console.log(myTeam, yourTeam)
	}, 1000);
}

// 경기시작
function toStep3(mp) {
	M('#step2').css('display', 'none')
	M('#step3').css('display', 'block')

	round = 0
	getCorrect(10);
	nextRound(round);
	//console.log(correct)
	
}

function getCorrect(length){
	var idx = Math.floor(Math.random() * length)

	if (correct[0] == undefined) {
		correct.push(idx);
	}
	if (correct[1] == undefined) {
		if (correct[0] == idx) {
			getCorrect(length)
		} else {
			correct.push(idx);
		}
	}
	if (correct[2] == undefined) {
		if (correct[0] == idx || correct[1] == idx) {
			getCorrect(length)
		} else {
			correct.push(idx);
			return correct;
		}
	}
}

function nextRound() {
	var str = ''
	
	round++

	str += '<span>' + round + '회 </span>';
	str += '<input text="text" class="inputName number" maxlength="1" data-first> ';
	str += '<input text="text" class="inputName number" maxlength="1" data-second> ';
	str += '<input text="text" class="inputName number" maxlength="1" data-third> ';
	str += '<p data-result class="result"></p>';
	str += '<button data-play="' + round + '" class="button submit">확인</button>';
	
	M('#roundCount').append('li', {
		'data-count': round
	})
	M('[data-count="' + round + '"]').html(str);
	M('#roundInfo').text( 10-round +'회 남았습니다.');

	// 확인
	M('[data-play="' + round + '"]').on('click', function(evt, mp){
		var  firstNum = parseInt(M('[data-count="' + round + '"] [data-first]').val(), 10)
			,secondNum = parseInt(M('[data-count="' + round + '"] [data-second]').val(), 10)
			,thirdNum = parseInt(M('[data-count="' + round + '"] [data-third]').val(), 10)
			,resultTxt
		
		if (firstNum === '' || secondNum === '' || thirdNum === '') {
			alert('숫자를 모두 입력하세요.');
			return false;
		}
		if (!M.isNumber(firstNum) || !M.isNumber(secondNum) || !M.isNumber(thirdNum)) {
			alert('숫자만 입력하세요.');
			return false;
		}
		if (firstNum === secondNum || firstNum === thirdNum || secondNum === thirdNum) {
			alert('중복되는 숫자를 사용할수 없습니다.');
			return false;
		}

		mp.css('display', 'none')
		
		myAnswer.length = 0;
		myAnswer.push(firstNum)
		myAnswer.push(secondNum)
		myAnswer.push(thirdNum)
		checkNumber(myAnswer, correct)

		if (out === 3) {
			resultTxt = '결과: 3O'
			if (round === 9) {
				youLost()
			} else {
				nextRound();
			}
		} else if (strike === 3) {
			resultTxt = '결과: ' + strike + 'S'
			youWin();
		} else {
			resultTxt = '결과: ' + strike + 'S ' + ball + 'B'
			if (round === 9) {
				youLost()
			} else {
				nextRound();
			}
		}
		mp.prev()
			.css('display', 'block')
			.text(resultTxt)
		
	})
}

// 승리
function youWin() {
	console.log('승리')
	M('#roundCount').append('li', {
		'data-text':''
	})
	str = '<p>' + teamArr[myTeam]['name'] + '이(가) ' + teamArr[yourTeam]['name'] + '을(를) 이겼습니다. <br>순위에 반영되었습니다.</p>'
	M('[data-text]').html(str);
	winner = teamArr[myTeam]['key']
	loser = teamArr[yourTeam]['key']
}

// 패배
function youLost() {
	console.log('패배')
	M('#roundCount').append('li', {
		'data-text':''
	})
	str = '<p>' + teamArr[myTeam]['name'] + '이(가) ' + teamArr[yourTeam]['name'] + '에게 패배했습니다. <br>순위에 반영되었습니다.</p>'
	M('[data-text]').html(str);
	winner = teamArr[yourTeam]['key']
	loser = teamArr[myTeam]['key']
}

function checkNumber(my, correct) {
	strike = 0
	ball = 0
	out = 0

	if (my[0] === correct[0]) {
		strike++
	}
	if (my[1] === correct[1]) {
		strike++
	}
	if (my[2] === correct[2]) {
		strike++
	}

	if (my[0] === correct[1]) {
		ball++
	}
	if (my[0] === correct[2]) {
		ball++
	}
	if (my[1] === correct[0]) {
		ball++
	}
	if (my[1] === correct[2]) {
		ball++
	}
	if (my[2] === correct[0]) {
		ball++
	}
	if (my[2] === correct[1]) {
		ball++
	}
	if (strike === 0 && ball === 0) {
		out = 3
	}

	console.log(correct, myAnswer)
	console.log(strike, ball, out)
}

function getVs() {
	sendData = {}
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
			getVs();
		}
	})
}


function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
	
	postMsg += '[ 숫자야구 ]\n\n';
	postMsg += '올여름 전국민은 광탭질(성대결)에 빠져든다.\n\n';

	if (team === 'boy') {
		if (scoreBoy > scoreGirl) {
			postMsg += '지금 오빠팀이 ' + M.toCurrency(scoreSub) + '탭 앞서고 있어요.\n';
			postMsg += '언니팀들을 완전히 따돌려 버려요!!!\n\n';
		} else {
			postMsg += '지금 오빠팀이 ' + M.toCurrency(scoreSub) + '탭 뒤지고 있어요.\n';
			postMsg += '어서 와서 오빠팀의 무너진 자존심을 살려주세요!!!\n\n';
		}
		postMsg += '* 현재점수 *\n';
		postMsg += '오빠팀: ' + M.toCurrency(scoreBoy) + '탭\n';
		postMsg += '언니팀: ' + M.toCurrency(scoreGirl) + '탭\n\n';
		postMsg += '탭!탭!탭! 참여하기: http://goo.gl/Aii0g\n';
	} else {
		if (scoreBoy > scoreGirl) {
			postMsg += '지금 언니팀이 ' + M.toCurrency(scoreSub) + '탭 뒤지고 있어요.\n';
			postMsg += '어서 언니팀의 무서움을 보여줘요!!!\n\n';
		} else {
			postMsg += '지금 언니팀이 ' + M.toCurrency(scoreSub) + '탭 앞서고 있어요.\n';
			postMsg += '오빠팀에 지는건 절대 용서할수 없어요!!!\n\n';
		}
		postMsg += '* 현재점수 *\n';
		postMsg += '언니팀: ' + M.toCurrency(scoreGirl) + '탭\n';
		postMsg += '오빠팀: ' + M.toCurrency(scoreBoy) + '탭\n\n';
		postMsg += '탭!탭!탭! 참여하기: http://goo.gl/bC2F0\n';
	}
	
	
	urlMsg = {
		title: '탭!탭!탭!',
		desc: '게임방법: "탭!탭!탭!" 버튼을 마구마구 탭하는 남녀 성대결',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/tab.png'],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '전국민 광탭질!',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: '탭!탭!탭!',
		url: 'http://goo.gl/qIIMX',
		appid: "funnyApp",
		appver: "1.0",
		appname: "탭!탭!탭!",
		type: "link"
	});
}






























