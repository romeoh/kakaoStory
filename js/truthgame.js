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
	total = 0
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
	//M('.countinfo').text((current+1) + '/' + total)
	//current++;
}

function choiceResult() {
	//console.log(score, database[current]['obj'])
	M('#game').css('display', 'none');
	M('#likeResult').css('display', 'block');
	
	if (score === 1) {
		resultTxt = database[current]['yes']
	} else {
		resultTxt = database[current]['no']
	}
	resultTxt = resultTxt.replace('{1}', M('#userName').val())
	M('#myResult').html(resultTxt + '<br><br>아래 SNS로 고백해보세요.');
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

	data.title = '진실게임';
	data.url = 'http://goo.gl/n0bpBh';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	s = Math.floor(score / 14 * 100)

	post += '[' + data.title + ']\n\n';
	post += '♥ 질문: ' + database[current]['obj'] + '\n\n';
	post += '♥ ' + userName + '님의 답변:\n';
	post += '- ' + resultTxt;

	data.post = post;
	
	data.desc = '이게 내 마음이야.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/truthgame.png';

	sendData(data);
}


database = [
	{'obj': '카스에 좋아하는 사람이 있나요?', 'yes': '{1}님은 카스에 좋아하는 사람이 있습니다.', 'no': '{1}님은 카스에 좋아하는 사람이 없습니다.'},
	{'obj': '요즘 무척 힘드나요?', 'yes': '{1}님은 요즘 무척 힘들어하고 있습니다.', 'no': '{1}님은 요즘 힘들지 않습니다.'},
	{'obj': '요즘 사랑하고 싶은가요?', 'yes': '{1}님은 요즘 사랑을 하고싶어합니다.', 'no': '{1}님은 사랑을 하고싶어하지 않습니다.'},
	{'obj': '요즘 사귀는 사람이 있나요?', 'yes': '{1}님은 요즘 사귀는 사람이 있습니다.', 'no': '{1}님은 사귀는 사람이 없습니다.'},
	{'obj': '요즘 가끔 가출하고 싶은 생각이 드나요?', 'yes': '{1}님은 요즘 가끔 가출을 하고 싶은 생각이 듭니다.', 'no': '{1}님은 가출하고 싶은 생각이 없습니다.'},
	{'obj': '카스에 미워하는 친구가 있나요?', 'yes': '{1}님은 카스에 미워하는 친구가 있습니다.', 'no': '{1}님은 카스에 미워하는 친구가 없습니다.'},
	{'obj': '그 친구한테 미안하다는 생각이 드나요?', 'yes': '{1}님은 그 친구에게 미안하다고 말하고 싶어합니다.', 'no': '{1}님은 미안한 친구가 없습니다.'},
	{'obj': '그 친구한테 사랑한다고 말하고 싶은가요?', 'yes': '{1}님은 그 친구에게 사랑한다고 말하고 싶어합니다.', 'no': '{1}님은 사랑한다고 말하고 싶은 친구가 없습니다.'},
	{'obj': '부모님께 사랑한다고 말하고 싶은가요?', 'yes': '{1}님은 부모님께 사랑한다고 말하고 싶어합니다.', 'no': '{1}님은 부모님께 사랑한다고 말하고 싶지 않습니다.'},
	{'obj': '짝사랑하는 사람이 있나요?', 'yes': '{1}님은 요즘 짝사랑하는 사람이 있습니다.', 'no': '{1}님은 짝사랑 하는 사람이 없습니다.'},
	{'obj': '짝사랑 하는 선생님이 있나요?', 'yes': '{1}님은 짝사랑하는 선생님이 있습니다.', 'no': '{1}님은 짝사랑 하는 선생님이 없습니다.'},
	{'obj': '요즘 학교 가기가 싫은가요?', 'yes': '{1}님은 요즘 학교가기가 싫습니다.', 'no': '{1}님은 학교가기 싫지 않습니다.'},
	{'obj': '나를 짝사랑하는 사람이 있나요?', 'yes': '{1}님을 짝사랑하는 사람이 있습니다.', 'no': '{1}님을 짝사랑하는 사람은 없습니다.'},
	{'obj': '나는 인기가 많은거 같은가요?', 'yes': '{1}님은 인기가 많다고 생각합니다.', 'no': '{1}님은 인기가 없다고 생각합니다.'},
	{'obj': '그 사람과 키스하고 싶은가요?', 'yes': '{1}님은 그 사람과 키스하고 싶어합니다.', 'no': '{1}님은 키스하고 싶은 사람이 없습니다.'},
	{'obj': '난 훈남/훈녀인것 같은가요?', 'yes': '{1}님은 훈남/훈녀인거 같습니다.', 'no': '{1}님은 흔남/흔녀인거 같습니다.'},
	{'obj': '그 사람이 나한테 고백하면 받아 줄건가요?', 'yes': '그사람이 {1}님에게 고백하면 받아줄것입니다.', 'no': '그사람이 {1}님에게 고백하면 받아주지 않을겁니다.'},
	{'obj': '그 친구한테 실망했나요?', 'yes': '{1}님은 그 친구에게 실망했습니다.', 'no': '{1}님은 실망한 친구가 없습니다.'},
	{'obj': '나는 얼굴이 평균이상이라 생각하나요?', 'yes': '{1}님의 얼굴은 평균 이상입니다.', 'no': '{1}님의 얼굴은 평균 이하입니다.'},
	{'obj': '성형수술 하고싶은 곳이 있나요?', 'yes': '{1}님은 성형수술하고 싶은곳이 있습니다.', 'no': '{1}님은 성형수술하고 싶은곳이 없습니다.'},
	{'obj': '친구가 돈 빌려 달라면 빌려줄수 있나요?', 'yes': '친구가 {1}님에게 돈 빌려달라면 빌려줍니다.', 'no': '친구가 {1}님에게 돈 빌려달라면 절대 안 빌려줍니다.'},
	{'obj': '난 키스 해본적 있나요?', 'yes': '{1}님은 키스해본적 있습니다.', 'no': '{1}님은 키스해본적 없습니다.'},
	{'obj': '우리반에 관심있는 사람이 있나요?', 'yes': '{1}님은 우리반에 관심있는 사람이 있습니다.', 'no': '{1}님은 우리반에 관심있는 사람이 없습니다.'},
	{'obj': '난 친구 뒷담화한적 있나요?', 'yes': '{1}님은 친구 뒷담화를 한적 있습니다.', 'no': '{1}님은 뒷담화 한적 없습니다.'},
	{'obj': '야동을 본적있나요?', 'yes': '{1}님은 야동을 본적 있습니다.', 'no': '{1}님은 야동을 본적 없습니다.'}
]






	









































































 























































