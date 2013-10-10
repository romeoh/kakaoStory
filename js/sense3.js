var  data
	,score = 0
	,total
	,current = 0
	,resultTxt
	
window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	init()
	initStart();
	M('[data-id="btnKakao"]').on('click', function(){
		var d = {}
		d.media = 'talk'
		action(d)
	})
}

// 초기화
function init() {
	database = shuffle(database);
	total = database.length
	initStart();
}


function initStart() {
	M('#btnStart').click(function(){
		if (M('#userName').val() == '') {
			alert('이름을 입력하세요.');
			return;
		}
		start()
	})
}


function start(flag) {
	M('#start').css('display', 'none');
	M('#game').css('display', 'block');
	
	M('#btnLike').on('click', function(){
		score++;
		if (current < total) {
			choice()
		} else {
			choiceResult()
		}
	})
	M('#btnHate').on('click', function(){
		if (current < total) {
			choice()
		} else {
			choiceResult()
		}
	})
	choice();
}

function choice() {
	likes = {}
	title = database[current]['obj']
	M('#ask').text(title)
	M('.countinfo').text((current+1) + '/' + total)
	current++;
}

function choiceResult() {
	if (score <= 5) {
		resultTxt = '정상적입니다.'
	} else if (score > 5 && score <= 7) {
		resultTxt = '조울증을 의심해볼 수 있습니다.'
	} else if (score > 7) {
		resultTxt = '전문가와 상담이 필요합니다.'
	}

	M('#game').css('display', 'none');
	M('#likeResult').css('display', 'block');
	
	M('#myResult').html('결과가 나왔습니다. <br>아래 SNS로 확인해보세요.^^');
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
		,twit = ''

	data.title = '조울증 테스트';
	data.url = 'http://goo.gl/K3atYI';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	s = Math.floor(score / 10 * 100)

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 조울증 자가진단 테스트 점수는 "' + s + '점" 입니다.\n\n';
	post += '♥ 결과: "' + resultTxt +'"';

	data.post = post;
	
	data.desc = '간단한 조울증 자가진단 테스트입니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/sense2.png';

	sendData(data);
}


database = [
	{'obj': '잠을 청하지만 자꾸만 뒤척이게 되고 잠이 안온다.'},
	{'obj': '성적 욕구가 심하다는 느낌이 있다.'},
	{'obj': '한가지 일에 집중하는 것이 어렵고 산만하다.'},
	{'obj': '몸이 쳐지고 무기력하며 움직이기가 싫다.'},
	{'obj': '깊게 무언가를 생각하지 않고 일을 막 벌린다.'},
	{'obj': '식욕이 안땡긴다.'},
	{'obj': '생각은 많은데 정리가 안된다.'},
	{'obj': '갑자기 말이 많아지고 빨라지는 것을 느낀다.'},
	{'obj': '감정을 주체하기 어려워 소리를 지르거나 그러고 싶다.'},
	{'obj': '사소한 일에 감정의 변화가 빠르게 일어난다.'}
]
































 























































