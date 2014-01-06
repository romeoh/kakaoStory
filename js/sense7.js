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
	if (score <= 4) {
		resultTxt = '정상입니다.'
	} else if (score > 4 && score <= 9) {
		resultTxt = '감성이 풍부한 사람으로 아직 중2병은 아닙니다.'
	} else if (score > 9 && score <= 14) {
		resultTxt = '아직 철이 덜 든 사람으로 중2병이 시작되는 단계입니다.'
	} else if (score > 15) {
		resultTxt = '매우 혼돈을 격고 있는 중2병입니다.\n너무 심할 경우 상담을 받아보길 권합니다.'
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

	data.title = '중2병 진단 테스트';
	data.url = 'http://goo.gl/n85Ic5';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	s = Math.floor(score / 20 * 100)

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 중2병 자가 진단 테스트 점수는 "' + s + '점" 입니다.\n\n';
	post += '♥ 결과: "' + resultTxt +'"';

	data.post = post;
	
	data.desc = '중2병 자가 진단 테스트입니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/single2.png';

	sendData(data);
}


database = [
	{'obj': '나는 남들과 다르다고 생각한다'},
	{'obj': '내가 마음만 먹으면 뭐든지 할 수 있다고 생각한다'},
	{'obj': '많은 시간 망상에 빠져 내가 만화의 주인공이라고 생각할 때가 자주 있다'},
	{'obj': '자신이 우울증에 걸렸다고 생각한다'},
	{'obj': '미니홈피나 블로그에 상당히 오글거리는 멘트를 많이 적어 놓는다'},
	{'obj': '유난히 이성 앞에서 허세를 많이 부린다'},
	{'obj': '허구적인 소설을 많이 쓴다'},
	{'obj': '혼자서 중얼거린다'},
	{'obj': '칼을 소지하고 다니는걸 자랑스럽게 여긴다'},
	{'obj': '파멸, 광기, 피, 등등...만화나 영화에서나 나올법한 멘트를 거리낌없이 내뱉는다'},
	{'obj': '자신보다 약한사람에게는 한없이 강해지고 자신보다 강한사람에게는 한없이 약해진다'},
	{'obj': '뭐든지 네거티브하게 보는 성향이 깊다'},
	{'obj': '무슨뜻인지 알지도 못하면서 우선 내뱉고 자랑스럽게 여기는 경향이 깊다'},
	{'obj': '나는 남들보다 불행한 사람이라고 생각한다'},
	{'obj': '나는 큰 상처를 가지고 있다'},
	{'obj': '온라인상에서 ....을 많이 붙인다'},
	{'obj': '주먹으로 벽을 치거나 가래침 뱉는걸 자랑스럽게 여긴다'},
	{'obj': '깡패는 나의 우상이다'},
	{'obj': '자살을 자주 생각한다'},
	{'obj': '언제나 무뚝뚝한 표정으로 남들을 바라본다'}
]









﻿


































	









































































 























































