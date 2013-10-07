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
		score = score + 4;
		if (current < total) {
			choice()
		} else {
			choiceResult()
		}
	})
	M('#btn2').on('click', function(){
		score = score + 2;
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
	if (score <= 29) {
		resultTxt = '정상적입니다.'
	} else if (score >= 30 && score <= 33) {
		resultTxt = '편집성향이 있는 것 같습니다. 힘들다고 생각하면 전문가에게 도움을 요청할 수 있습니다.'
	} else if (score >= 34 && score <= 36) {
		resultTxt = '편집 성향이 상당히 있는 것 같습니다. 전문가에게 도움을 요청하십시오.'
	} else if (score >= 37) {
		resultTxt = '편집 성향이 매우 심한 것 같습니다. 속히 전문가에게 치료를 받으십시오.'
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

	data.title = '편집증 테스트';
	data.url = 'http://goo.gl/sNtQUL';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	s = Math.floor(score / 80 * 100)

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 편집증 테스트 점수는 "' + s + '점" 입니다.\n\n';
	post += '♥ 결과: "' + resultTxt +'"';

	data.post = post;
	
	data.desc = '편집증: 현재 사용되는 의미와는 혼돈스러운 면이 있으나 과거 편집증(paranoia)으로 불렸던 질환으로, 괴이하지 않은 망상이 주 증상이며, 다른 정신과적 질환보다는 사회적 직업적 기능이 상대적으로 유지되는 경향을 보인다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/pana.png';

	sendData(data);
}


database = [
	{'obj': '♥ 분명히 남들이 나에 대한 말을 하고 있다.'},
	{'obj': '♥ 나는 이유 없이 벌 받는 때가 자주 있었다.'},
	{'obj': '♥ 나의 가족들은 지나치게 내 흠을 잡는다.'},
	{'obj': '♥ 누군가 나를 미행하는 느낌이 들 때가 있다.'},
	{'obj': '♥ 사람들은 남의 일에 진정한 관심을 가지지 못한다.'},
	{'obj': '♥ 사람들은 자신에게 이득이 된다면 다소 옳지 못한 수단도 쓸 것이다.'},
	{'obj': '♥ 나는 종종 사람들 때문에 실망한다.'},
	{'obj': '♥ 내 생각을 훔쳐내어 자기 것으로 하려는 사람이 있다.'},
	{'obj': '♥ 확실히 내 팔자는 억세고 사납다.'},
	{'obj': '♥ 나에게 원한을 품고 있는 사람이 있다.'},
	{'obj': '♥ 사람들이 친구를 사귀는 것은 대개 자신에게 이로운 것이 있을 것 같기 때문이다.'},
	{'obj': '♥ 남이 나에게 잘 해 줄 때는 숨은 의도가 있지 않나 확인해 본다.'},
	{'obj': '♥ 다른 사람은 아무도 믿지 않는 것이 가장 안전하다. '},
	{'obj': '♥ 사람들이 나에 대해서 모욕하는 말을 한다.'},
	{'obj': '♥ 종종 낯선 사람들이 나를 흠잡듯이 쳐다보는 것 같다.'},
	{'obj': '♥ 단지 사람들은 자신이 먼저 생각해 내지 못했다는 이유로 나의 좋은 생각을 시기한다.'},
	{'obj': '♥ 누군가 내 생각에 영향을 끼치려고 하고 있다.'},
	{'obj': '♥ 사람들은 속 마음은 싫으면서 남을 돕는 척 한다.'},
	{'obj': '♥ 어디를 가나 사람들이 나를 지켜보는 느낌이 들어 괴롭다.'},
	{'obj': '♥ 예상치 않게 친하게 구는 사람을 경계하는 편이다.'}
]












 	
























































 























































