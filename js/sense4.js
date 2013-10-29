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
		resultTxt = '스트레스 상황에 적절히 대처하고 있습니다.'
	} else if (score > 5 && score <= 10) {
		resultTxt = '오랫동안 스트레스로 인해 어려움을 겪었던 것 같습니다. \n힘들다고 생각하면 전문가에게 도움을 요청할 수 있습니다.'
	} else if (score > 10) {
		resultTxt = '스트레스에 대한 반응이 위험한 상태인 것 같습니다. 속히 전문가에게 치료를 받으십시오.'
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

	data.title = '스트레스 자가진단 테스트';
	data.url = 'http://goo.gl/aowKjE';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	s = Math.floor(score / 30 * 100)

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 스트레스 자가진단 테스트 점수는 "' + s + '점" 입니다.\n\n';
	post += '♥ 결과: "' + resultTxt +'"';

	data.post = post;
	
	data.desc = '간단한 스트레스 자가진단 테스트입니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/single2.png';

	sendData(data);
}


database = [
	{'obj': '피곤이 잘 풀리지 않는다.♥'},
	{'obj': '목이 아플 때가 있다.♥'},
	{'obj': '어지럼증을 느낄 때가 있다.♥'},
	{'obj': '갑자기 숨쉬기가 힘들어질 때가 있다.♥'},
	{'obj': '귀에서 소리가 들릴 때가 있다.♥'},
	{'obj': '혓바닥이 하얗게 되어 있을 때가 있다.♥'},
	{'obj': '머리가 무겁다.♥'},
	{'obj': '손바닥이나 겨드랑이에 땀이 날 때가 있다.♥'},
	{'obj': '이따금 코가 막힐 때가 있다.♥'},
	{'obj': '배가 팽팽하거나 아프거나 한다.♥'},
	{'obj': '아침에 기분 좋게 일어나기 어렵다.♥'},
	{'obj': '기둥을 붙들고 서 있고 싶을 때가 있다.♥'},
	{'obj': '가슴이 아파오는 수가 있다.♥'},
	{'obj': '좋아하던 음식을 별로 먹지 않고 있다.♥'},
	{'obj': '어깨가 아프다.♥'},
	{'obj': '최근 몸무게가 줄었다.♥'},
	{'obj': '손발이 찰 때가 있다.♥'},
	{'obj': '입안에 염증이 생길 때가 있다.♥'},
	{'obj': '새벽에 일찍 잠이 깨어버린다.♥'},
	{'obj': '쉽게 피로를 느낀다.♥'},
	{'obj': '일할 의욕이 잘 생기지 않는다.♥'},
	{'obj': '감기에 자주 걸린다.♥'},
	{'obj': '식사 후에 위가 무거워진다.♥'},
	{'obj': '저녁에 쉽게 잠들지 못한다.♥'},
	{'obj': '사람을 만나는 것이 두려울 때가 있다.♥'},
	{'obj': '눈이 피로하다.♥'},
	{'obj': '꿈을 많이 꾸거나 선잠을 잔다.♥'},
	{'obj': '가끔씩 가슴이 두근거릴 때가 있다.♥'},
	{'obj': '등이나 배가 아픈 적이 있다.♥'},
	{'obj': '사소한 일에도 화가 난다.♥'}
]































































 























































