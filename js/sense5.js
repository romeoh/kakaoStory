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
	if (score <= 6) {
		resultTxt = '심한 치매상태인 것으로 생각됩니다. 속히 전문가에게 치료를 받으십시오.'
	} else if (score > 6 && score <= 11) {
		resultTxt = '치매일 가능성이 높습니다. 전문가에게 정밀검사를 받으십시오.'
	} else if (score > 11) {
		resultTxt = '정상적인 상태입니다.'
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

	data.title = '치매 진단 테스트';
	data.url = 'http://goo.gl/1MdU4J';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	s = Math.floor(score / 14 * 100)

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 치매 자가진단 테스트 점수는 "' + s + '점" 입니다.\n\n';
	post += '♥ 결과: "' + resultTxt +'"';

	data.post = post;
	
	data.desc = '간단한 치매 자가진단 테스트입니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/single2.png';

	sendData(data);
}


database = [
	{'obj': '올해가 몇 년도인지 알고 있다 ♥'},
	{'obj': '지금이 무슨 계절인지 알고 있다 ♥'},
	{'obj': '오늘이 몇 일인지 알고 있다 ♥'},
	{'obj': '오늘이 무슨 요일인지 알고 있다.♥'},
	{'obj': '집 주소를 말할 수 있다. ♥'},
	{'obj': '세 가지 물건의 이름을 말해주면 그 이름을 댈 수 있다. ♥'},
	{'obj': '"100-7"을 5회 연속해서 할 수 있다(예: 100-7=-7=-7...)♥'},
	{'obj': '현재 있는 장소의 이름을 이야기할 수 있다.♥'},
	{'obj': '종이를 뒤집고 반으로 접어서 달라는 요구를 실행할 수 있다.♥'},
	{'obj': '세 가지 물건을 보여주면 5 분 뒤에도 그 이름을 댈 수 있다.♥'},
	{'obj': '겹쳐진 오각형 두 개를 보여주면 똑같이 그릴 수 있다.♥'},
	{'obj': '“백문이 불여일견”을 따라서 말할 수 있다.♥'},
	{'obj': '옷을 왜 빨아 입는지 이유를 설명할 수 있다.♥'},
	{'obj': '길에서 주민등록증을 주웠다면 어떻게 돌려줄 것인지를 잘 알고 있다.♥'}
]






	









































































 























































