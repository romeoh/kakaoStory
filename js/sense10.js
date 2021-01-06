var  data
	,score = 0
	,total
	,current = 0
	,resultTxt
	
window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	init()
	M('[data-id="btnKakao"]').on('click', function(){
		var d = {}
		d.media = 'talk'
		action(d)
	})
}

// 초기화
function init() {
	//database = shuffle(database);
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
	choice();
}

function choice() {
	var answerButtons = []
	likes = {}
	title = database[current]['ask']
	answer = database[current]['answer']
	M('#ask').text(title)
	M('.countinfo').text((current+1) + '/' + total)

	answer.forEach(function(val, i) {
		answerButtons.push('<li><a data-select="' + val.score + '"><span>' + val.text + '</span></a></li>')
	})
	M('#answerList').html(answerButtons.join(''))
	M('[data-select]').on('click', function(e) {
		score = score + parseInt(e.currentTarget.getAttribute('data-select'))
		current++;
		console.log(score)
		if (current < total) {
			choice()
		} else {
			choiceResult()
		}
	})
}

function choiceResult() {
	if (score <= 20) {
		resultTxt = '남들이 보는 당신은 소심하고 우유부단합니다.\n본인의 일도 누군가가 대신해서 결정해줘야만하고, 타인이나 어떤 일에 연루되는 것을 피하는 사람입니다.\n또한 걱정을 사서하는 타입이기도 합니다.\n당신을 잘 모르는 사람들은 당신을 지루하다고 생각하기도 합니다.'
	} else if (score > 21 && score <= 30) {
		resultTxt = '남들이 보는 당신은 집요하며 깐깐한 사람으로 신중하고 조심스러워하며 느리지만 발전하는 편입니다.\n당신이 무슨 일인가 충동적으로 하는 모습을 본다면 친구들이 충격을 받을지도 모릅니다.\n무슨일이든 꼼꼼히 계획하며 다음 결정을 하는 것을 선호합니다.\n깐깐하기 때문에 NO라고 말할 수 있는 사람이기도 합니다.'
	} else if (score > 31 && score <= 40) {
		resultTxt = '남들이 보는 당신은 현명하고 신중하며 현실적입니다.\n사람을 사귈 때 급하거나 가볍게 접근하지 않으며 가까워진 사람에게는 매우 잘해주며 자신도 같은 대우를 해주기를 기대합니다.\n당신의 참 모습을 아는 사람들은 당신의 신뢰를 흔드는 것이 어렵다는 것과 그 신뢰가 무너지면 다시 되돌리기 어렵다는 것을 알고 있을 겁니다.'
	} else if (score > 41 && score <= 50) {
		resultTxt = '남들이 보는 당신은 매우 매력있는 타입이기도하며, 때로는 이성적이면서도 즐거운 사람이라고 생각합니다.\n주위의 이목을 사로잡는 사람이지만 적당한 눈치도 있으며 교만해지지 않는 사람이기도 합니다.\n또한 다정하며 친절하고, 이해심이 많아 다른 사람을 도울 줄 아는 분위기 메이커 역할을 하기도 합니다.'
	} else if (score > 51 && score <= 60) {
		resultTxt = '남들이 보는 당신은 변덕스러우며, 충동적인 사람이라고 생각합니다.\n또한 리더형으로 빠른 결정을 내릴 줄 아는 사람이기도 합니다. 무엇이든 시도해볼 줄 아는 과감한 모험형 타입으로 겁이 없으며 호기심이 매우 많습니다.\n당신의 친구들은 당신이 발하는 강렬함에 이끌립니다.'
	} else if (score > 61) {
		resultTxt = '남들이 보는 당신은 취급 주의형이라고 생각하며\n약간 허영심이 있고, 남을 지배하고 싶은 욕구가 강합니다.\n남이 해주는 칭찬에 약하지만 막상 본인은 남들에게 칭찬을 잘 해주지 못하는 양면의 성격이 있습니다.\n의외로 당신의 당당한 성격을 부러워하고 우러러보는 사람들이 있지만 당신은 그러한 사람들을 잘 보지 못합니다.'
	}

	M('#game').css('display', 'none');
	M('#likeResult').css('display', 'block');
	
	//M('#myResult').html('결과가 나왔습니다. <br>아래 SNS로 확인해보세요.^^');
	var userName = M('#userName').val()
	M('#myResult').html(resultTxt.replace(/\n/g, '<br>').replace(/당신/g, userName + '님'));
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

	data.title = '남들이 생각하는 나는?';
	data.url = 'http://goo.gl/6NeUlP';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	s = Math.floor(score / 20 * 100)

	post += '[' + data.title + ']\n';
	//post += userName + '님의 사이코패스 자가 테스트 점수는 "' + s + '점" 입니다.\n\n';
	post += '♥ 결과: "' + resultTxt.replace(/당신/g, userName + '님') +'"';

	data.post = post;
	
	data.desc = '사이코패스 진단 테스트입니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/single2.png';

	sendData(data);
}


database = [
	{
		ask		: '하루 중 기분이 가장 좋은 시간대는?',
		answer	: [
			 {score: 2, text: '아침'}
			,{score: 4, text: '오후나 이른 저녁'}
			,{score: 6, text: '늦은 밤'}
		]
	},{
		ask		: '나는 걸을때, 보통',
		answer	: [
			 {score: 7, text: '머리를 들고, 정면을 바라보며 덜 빠르게 걷는다.'}
			,{score: 6, text: '보폭을 넓게, 빨리 걷는다.'}
			,{score: 4, text: '보폭을 좁게, 빨리 걷는다.'}
			,{score: 2, text: '바닥을 보며 덜 빠르게 걷는다.'}
			,{score: 1, text: '아주 느리게 걷는다.'}
		]
	},{
		ask		: '나는 사람들과 이야기할 때, 보통',
		answer	: [
			 {score: 7, text: '상대방을 터치하며'}
			,{score: 6, text: '내 몸을 만지작 거리거나 내 머리를 만지며'}
			,{score: 5, text: '한 손이나 양 손을 허리에 올리고'}
			,{score: 4, text: '내 팔짱을 끼고 서서'}
			,{score: 2, text: '두 손을 마주 잡고'}
		]
	},{
		ask		: '나는 재밌을 일이 생겼을때, 보통',
		answer	: [
			 {score: 6, text: '즐거움을 숨기지 않고 크게 웃는다.'}
			,{score: 5, text: '가벼운 미소를 짓는다.'}
			,{score: 4, text: '웃지만 크지 않게 웃는다.'}
			,{score: 3, text: '소리를 내지 않으며 웃는다.'}
		]
	},{
		ask		: '내가 좋아하는 색깔은?',
		answer	: [
			 {score: 7, text: '검정'}
			,{score: 6, text: '빨강 또는 주황'}
			,{score: 5, text: '노랑 또는 연파랑'}
			,{score: 4, text: '녹색'}
			,{score: 3, text: '진파랑 또는 보라'}
			,{score: 2, text: '하양'}
			,{score: 1, text: '갈색 또는 회색'}
		]
	},{
		ask		: '나는 사람들이 많이 모이는 장소에서, 보통',
		answer	: [
			 {score: 6, text: '관종처럼 등장해서 관종처럼 논다.'}
			,{score: 4, text: '차분히 들어가서 사람구경 한다.'}
			,{score: 2, text: '시선 끌지 않도록 조용히 있는다.'}
		]
	},{
		ask		: '나는 무언가에 집중한 채 열심히 하다가 방해 받으면',
		answer	: [
			 {score: 6, text: '휴식의 기회를 반갑게 맞이한다.'}
			,{score: 4, text: '짜증이 나지만 티를 내지 않는다.'}
			,{score: 2, text: '짜증이나서 투덜거린다.'}
		]
	},{
		ask		: '내가 잠들기 직전 취하는 포즈는, 보통',
		answer	: [
			 {score: 7, text: '몸을 똑바로 펴고 누운 포즈'}
			,{score: 6, text: '엎드린 채로 몸을 쭉 편 포즈'}
			,{score: 4, text: '옆으로 누워 웅크린 포즈'}
			,{score: 2, text: '한 팔을 베고 있는 포즈'}
			,{score: 1, text: '머리를 이불 밑에 넣은 포즈'}
		]
	},{
		ask		: '나는 평소에 자주 꾸는 꿈은?',
		answer	: [
			 {score: 6, text: '꿈을 잘 꾸지 않는다.'}
			,{score: 5, text: '날아오르거나 떠오르는 꿈'}
			,{score: 4, text: '떨어지는 꿈'}
			,{score: 3, text: '무언가를 찾는 꿈'}
			,{score: 2, text: '싸우거나 애쓰는 꿈'}
			,{score: 1, text: '기분 좋은 느낌의 꿈'}
		]
	}
]

























	









































































 























































