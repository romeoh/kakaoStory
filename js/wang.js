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
		score = score + 1;
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
	if (score <= 5) {
		resultTxt = '친구들과 원만하게 지내고 있습니다.'
	} else if (score >= 4 && score <= 14) {
		resultTxt = '학교에서 따돌림 받고 있을 가능성이 높습니다. 주위에 알려 적극적인 도움을 받으세요.'
	} else if (score >= 15) {
		resultTxt = '학교에서 따돌림을 받을 가능성이 매우 높습니다. 전문가와 상담하시는 것이 좋겠습니다.'
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

	data.title = '학교 따돌림 테스트';
	data.url = 'http://goo.gl/Va1Byu';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	s = Math.floor(score / 24 * 100)

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 학교 따돌림 테스트 점수는 "' + s + '점" 입니다.\n\n';
	post += '♥ 결과: "' + resultTxt +'"';

	data.post = post;
	
	data.desc = '학교폭력 없는 세상! 깨알유머도 다양한 방법으로 적극 지원하겠습니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/wang.png';

	sendData(data);
}


database = [
	{'obj': '♥ 친구들이 별명을 부르며 놀리고 나를 비웃은 적이 있다.'},
	{'obj': '♥ 학교에 가도 친한 친구가 없다.'},
	{'obj': '♥ 친구들이 나를 따돌리고 소외시키며, 완전히 무시한 적이 있다.'},
	{'obj': '♥ 학교에 가기가 두려워 학교에 가기 싫다'},
	{'obj': '♥ 내가 하기 싫어하는 것을 강제로 시키는 친구가 있다.'},
	{'obj': '♥ 학교에서 다른 아이들로부터 위협이나 협박을 당한 적이 있다.'},
	{'obj': '♥ 학교에서 다른 아이들로부터 돈을 빼앗긴 적이 있다.'},
	{'obj': '♥ 다른 아이들로부터 이유 없이 몸을 얻어맞은 적이 있다.'},
	{'obj': '♥ 학교에서 다른 아이들과 어울리기 힘들다'},
	{'obj': '♥ 나를 도와주는 친구가 전혀 없다.'},
	{'obj': '♥ 나를 이유 없이 괴롭히는 친구가 있다.'},
	{'obj': '♥ 나에 대해 나쁘게 말하고 다녀서 다른 친구들이 나를 싫어하게 만드는 친구가 있다.'}
]
























 	
























































 























































