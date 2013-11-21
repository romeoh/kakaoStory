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
		resultTxt = '정상입니다.'
	} else if (score > 6 && score <= 11) {
		resultTxt = '사이코패스 증상이 어느정도 있습니다.'
	} else if (score > 11) {
		resultTxt = '사이코패스 증상이 있습니다. 전문가와 상의해보세요.'
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

	data.title = '사이코패스 진단 테스트';
	data.url = 'http://goo.gl/6NeUlP';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	s = Math.floor(score / 20 * 100)

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 사이코패스 자가 테스트 점수는 "' + s + '점" 입니다.\n\n';
	post += '♥ 결과: "' + resultTxt +'"';

	data.post = post;
	
	data.desc = '사이코패스 진단 테스트입니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/single2.png';

	sendData(data);
}


database = [
	{'obj': '말 잘하는것을 매력으로 생각한다.♥'},
	{'obj': '자기의 가치에 대해 자랑하고 다닌다.♥'},
	{'obj': '거짓말을 입에 달고산다.♥'},
	{'obj': '속임수를 경멸하거나 극단적으로 싫어한다.♥'},
	{'obj': '범죄를 저질러도 양심에 가책을 느끼지 않는다.♥'},
	{'obj': '감동적인걸 봐도 감동인지 모른다.♥'},
	{'obj': '매사에 냉담하고 남이 말하는 것에 공감하지 않는다.♥'},
	{'obj': '책임감이 없거나 부족하다.♥'},
	{'obj': '일상생활에 정신적 자극이 필요하고 지루함이 많다.♥'},
	{'obj': '기생충처럼 남에게 빌붙어 산다.♥'},
	{'obj': '나쁜행동을 자제할 능력이 부족하다.♥'},
	{'obj': '어렸을때 잔인한 짓을 많이 했다.♥'},
	{'obj': '현실성이 부족한 목표를 길게 끌며 그것을 할수 있다고 믿는다.♥'},
	{'obj': '매사에 충동적이다.♥'},
	{'obj': '무책임하다.♥'},
	{'obj': '청소년기에 비행을 경험했다.♥'},
	{'obj': '약속을 잘 깬다.♥'},
	{'obj': '성적인 행동을 서슴치 않는다.♥'},
	{'obj': '많고 짧은 연애를 한다.♥'},
	{'obj': '범죄적 재능을 타고 나거나 재능을 이용하려고 한다.♥'}
]

























	









































































 























































