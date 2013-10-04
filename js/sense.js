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
	if (score > 0 && score <= 6) {
		resultTxt = '아주 정상적입니다. 너무 정상적이어서 매력이 없군요.'
	} else if (score > 7 && score <= 12) {
		resultTxt = '매우 정상적인 사람입니다. 약간의 뻘짓으로 매력을 발산하는군요.'
	} else if (score > 13 && score <= 18) {
		resultTxt = '가끔 뻘짓을 하지만 평범하고, 정상적이니 걱정마세요.'
	} else if (score > 19 && score <= 24) {
		resultTxt = '자주 뻘짓을 해서 주위 사람들을 당황시킵니다.'
	} else if (score > 25 && score <= 30) {
		resultTxt = '헉! 살다~살다~ 당신같은 뻘짓 대마왕은 첨봐!!!'
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

	data.title = '뻘짓 테스트';
	data.url = 'http://goo.gl/eZm1sl';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	s = Math.floor(score / 30 * 100)

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 뻘짓 테스트 점수는 "' + s + '점" 입니다.\n\n';
	post += '♥ 결과: "' + resultTxt +'"';

	data.post = post;
	
	data.desc = '나는 얼마나 뻘짓의 대마왕인가?';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/sense.png';

	sendData(data);
}


database = [
	{'obj': '밥 먹다 졸은 적♥'},
	{'obj': '침대에서 자다가 떨어진 적♥'},
	{'obj': '인형이랑 말 걸면서 논 적♥'},
	{'obj': '젓가락 짝짝이로 집은 적♥'},
	{'obj': '양말 짝짝이로 신은 적♥'},
	{'obj': '냉장고 문턱으로 열어본 적♥'},
	{'obj': '물건 찾으면서 이름 불러본 적♥'},
	{'obj': '이불위에서 춤춘 적♥'},
	{'obj': '가방 챙겼는데 알고보니 다른날 시간표대로 챙겨본 적♥'},
	{'obj': '집안일 도우려다 오히려 방해된 적♥'},
	{'obj': '변기에 칫솔 빠뜨린 적♥'},
	{'obj': '세수하다 옷다 젖은 적♥'},
	{'obj': '머리카락으로 매듭지어본 적♥'},
	{'obj': '심심해서 화장실에 비누질한 적♥'},
	{'obj': '비누 밟고 넘어진 적♥'},
	{'obj': '방금 양치했는데 까먹고 또 양치한 적♥'},
	{'obj': '집안에서 넘어진 적♥'},
	{'obj': '집안에서 기어다닌 적♥'},
	{'obj': '신발 좌우 반대로 신어본 적♥'},
	{'obj': '너무 웃다가 머리 바닥에 부딪힌 적♥'},
	{'obj': '문틀에 매달린 적♥'},
	{'obj': '선풍기에 얼굴대고 미친듯이 웃어본 적♥'},
	{'obj': '이불을 멍석마치 마냥 말려본 적♥'},
	{'obj': '빨래 널다 떨어뜨려 더러워진 적♥'},
	{'obj': '창문 넘어가 본 적♥'},
	{'obj': '벌레잡아서 가지고 논 적♥'},
	{'obj': '일주일이상 방콕해본 적♥'},
	{'obj': '현관비밀번호 몰라서 못 들어간 적♥'},
	{'obj': '변기에 핸드폰 떨어뜨린 적♥'},
	{'obj': '옷장 열고 패션쇼해본 적♥'}
]




























































