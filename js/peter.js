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
	
	M('#btn1').on('click', function(){
		score = score + 2;
		if (current < total) {
			choice()
		} else {
			choiceResult()
		}
	})
	M('#btn2').on('click', function(){
		score++;
		if (current < total) {
			choice()
		} else {
			choiceResult()
		}
	})
	M('#btn3').on('click', function(){
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
	if (score > 0 && score <= 10) {
		resultTxt = '아주 정상적입니다.'
	} else if (score > 10 && score <= 20) {
		resultTxt = '피터팬 증후군을 의심할 수 있습니다.'
	} else if (score > 20) {
		resultTxt = '피터팬 증후군입니다. 전문가와 상담을 요구합니다.'
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

	data.title = '피터팬 증후군 테스트';
	data.url = 'http://goo.gl/Qabeuk';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	s = Math.floor(score / 40 * 100)

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 피터팬 증후군 테스트 점수는 "' + s + '점" 입니다.\n\n';
	post += '♥ 결과: "' + resultTxt +'"';

	data.post = post;
	
	data.desc = '피터팬 증후군: 육체적으로나 나이로는 이미 성인이 되었지만 자신의 마음은 항상 동심의 세계, 낭만을 가지고 있는 어린이로 남아있고 싶어하는 하나의 정체성 장애를 겪는 질환';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/peter.png';

	sendData(data);
}


database = [
	{'obj': '♥ 자신이 실수했음에도 변명을 늘어 놓는다.'},
	{'obj': '♥ 기념일을 잘 기억하지 못한다.'},
	{'obj': '♥ 모임에서 돋보이기 위해 노력한다.'},
	{'obj': '♥ 상대방을 배려하지 않는 언행과 말투를 가지고 있다.'},
	{'obj': '♥ 타인에게는 배려하지만 가족이나 배우자에게는 잘 배려하지 않는다.'},
	{'obj': '♥ 자신과 관련된 사람이 불만을 표현하기 전까지는 관심을 잘 갖지 않는다.'},
	{'obj': '♥ 자기가 하고 싶은 일만 한다.'},
	{'obj': '♥ 자신의 감정을 표현하는 법을 잘 모르거나 서툴다.'},
	{'obj': '♥ 자신의 주장과 다른 이야기는 잘 듣지 않는다.'},
	{'obj': '♥ 부모님과의 사이가 멀다.'},
	{'obj': '♥ 화를 잘 낸다.'},
	{'obj': '♥ 자신이 좋아하는 사람 때문에 부모와 트러블을 겪은 적이 있다.'},
	{'obj': '♥ 자신이 좋아하지 않는 일이나 공부를 부모님에 의해서 하고 있다.'},
	{'obj': '♥ 성실함이 결여되어 있다.'},
	{'obj': '♥ 허풍이 심하다.'},
	{'obj': '♥ 재미있는 것이 있으면 보고 또 본다.'},
	{'obj': '♥ 여성과 남성의 일을 구분한다.'},
	{'obj': '♥ 자신의 부족한 점을 남에게 잘 이야기하지 않는다.'},
	{'obj': '♥ 감정적이다.'},
	{'obj': '♥ 새로운 변화를 싫어한다.'}
]











































 























































