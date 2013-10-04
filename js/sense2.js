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
	if (score > 0 && score <= 10) {
		resultTxt = '아주 정상적입니다.'
	} else if (score > 10 && score <= 15) {
		resultTxt = '4차원에 가깝습니다.'
	} else if (score > 15 && score <= 20) {
		resultTxt = '4차원입니다. 화성인 출연확정!!'
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

	data.title = '4차원 테스트';
	data.url = 'http://goo.gl/RQaAyd';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	s = Math.floor(score / 20 * 100)

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 4차원 테스트 점수는 "' + s + '점" 입니다.\n\n';
	post += '♥ 결과: "' + resultTxt +'"';

	data.post = post;
	
	data.desc = '재미있고, 간단한 4차원 테스트';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/sense.png';

	sendData(data);
}


database = [
	{'obj': '콘푸로스트를 우유없이 먹어본 적♥'},
	{'obj': '라면을 스프없이 먹어본 적♥'},
	{'obj': '뿌셔뿌셔 끓여먹어본 적♥'},
	{'obj': '집에 혼자 있을 때 미친듯이 춤춰본 적♥'},
	{'obj': '거울보고 자기자신과 가위바위보 해본 적♥'},
	{'obj': '개와 눈싸움 해본 적♥'},
	{'obj': '왼손, 오른손 나눠서 가위바위보 해본 적♥'},
	{'obj': '자기 손에 그림 그려본 적♥'},
	{'obj': '자기 발을 간지럽혀본 적♥'},
	{'obj': '5분이상 멍때려본 적♥'},
	{'obj': '자기자신과 문자해본 적♥'},
	{'obj': '선풍기에 입 대고 아~~ 해본 적♥'},
	{'obj': '뮤직비디오나 드라마의 배우를 따라해본 적♥'},
	{'obj': '손으로 이빨 닦아본 적♥'},
	{'obj': '영화 한편을 세번 이상 본 적♥'},
	{'obj': '집에 혼자 있을 때 투명인간과 싸우는 척 해본 적♥'},
	{'obj': '똑같은 게임을 3시간을 해본 적♥'},
	{'obj': '사우나에서 잠수해본 적♥'},
	{'obj': '찜질방 65도 이상 참기 해본 적♥'},
	{'obj': '콘푸로스트 같은걸 흰우유 말고 다른 우유 맛에 먹어본 적♥'}
]
























 























































