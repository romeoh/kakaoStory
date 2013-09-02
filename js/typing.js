var  startTime
	,endTime
	,sample
	,word
	,title
	,author
	,round = 0
	,newAve
	,newCur

window.addEventListener('DOMContentLoaded', init, false);
function init() {
	newAve = M.storage('io.github.romeoh.user.ave') || 0
	newCur = M.storage('io.github.romeoh.user.cur') || 100
	M('.high .txt').text(newAve)
	M('.cur .txt').text(newCur)

	sample = shuffle(database)
	nextRound();
	M('.del').on('click', function(){
		M.storage('io.github.romeoh.user.ave', '')
		M.storage('io.github.romeoh.user.cur', '')
		M('.high .txt').text('0')
		M('.cur .txt').text('100')
	})
}

function nextRound() {
	if (round >= sample.length) {
		sample = shuffle(database)
		round = 0
	}
	newAve = M.storage('io.github.romeoh.user.ave') || 0
	newCur = M.storage('io.github.romeoh.user.cur') || 100

	startTime = new Date().getTime();
	word = sample[round]['word']
	title = sample[round]['title']
	author = sample[round]['author']

	M('#sample')
		.data('value', word)
		.text(word)
	M('#myword')
		.data('value', '')
		.html('마지막에 "스페이스"를 누르세요')
	M('#inType').val('')
}


M('#inType')
	.on('keyup', checkValue)
	.on('focus', function(){
		M.scroll(210);
		M('#myword').html('');
	})

function checkValue(evt, mp) {
	var  textArr = []
		,errorIdx = 0

	sampleValue = M('#sample').data('value')
	myValue = M('#inType').val().substr(0, M('#inType').val().length-1)
	mp.data('value', myValue)
	for (var i=0; i<myValue.length; i++) {
		if (sampleValue[i] != myValue[i]) {
			textArr.push('<span>' + myValue[i] + '</span>')
			errorIdx++
		} else {
			textArr.push(myValue[i])
		}
	}
	M('#myword')
		.data('value', myValue)
		.html(textArr.join(''))

	if (sampleValue.length <= myValue.length) {
		endTime = new Date().getTime()
		totalTime = endTime - startTime
		aveTime = Math.floor( sampleValue.length / totalTime * 10000000 ) / 100
		cuRate = 100 - (Math.floor( errorIdx / myValue.length * 10000 ) / 100)
		allRate = Math.floor( (Number(cuRate) + Number(M('.cur .txt').text())) / 2 *100 ) / 100

		M('.ave .txt').text(aveTime)
		M('.cur .txt').text(allRate)

		if (newAve < aveTime) {
			M.storage('io.github.romeoh.user.ave', aveTime)
			M('.high .txt').text(aveTime)
			M('.newAve').css('display', 'inline-block');
		} else {
			M('.newAve').css('display', 'none');
		}
		if (!M.storage('io.github.romeoh.user.cur') || newCur < allRate) {
			M.storage('io.github.romeoh.user.cur', allRate)
		}

		round++
		nextRound()
	}
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

	data.title = '타자연습';
	data.url = 'http://goo.gl/cmTCK9';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (typeof aveTime == 'undefined') {
		alert('빨간 사각형을 눌러 시작하세요.')
		return
	}
	database = shuffle(database)
	
	post += '[' + data.title + ']\n\n';
	post += '평균타수: ' + aveTime + '\n';
	post += '정확도: ' + allRate + '%\n';
	post += '최고 타수: ' + M.storage('io.github.romeoh.user.ave');
	data.post = post;
	
	data.desc = '평균타수: ' + aveTime;
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/typing.png';

	sendData(data);
}


database = [
	{'author':'t윤미래', 'title':'t윤미래', 'word':'내 손끝에 그대가 스치면 차가웠던 심장에 온기가 번지죠'},
	{'author':'김예림', 'title':'Rain', 'word':'지금 막 눈물이 흐르려고 해요'},
	{'author':'린', 'title':'이 노래 좋아해', 'word':'우리 둘만 아는 이야기 그댈 사랑해요'},
	{'author':'효린', 'title':'미치게 만들어', 'word':'듣고 있나요 내 마음을 보고 있나요 내 눈물을'},
	{'author':'백지영', 'title':'울고만있어', 'word':'나홀로 수천번을 불러보지만 너를 사랑해 왜 대답이 없어'},
	{'author':'선미', 'title':'24시간이 모자라', 'word':'24시간이 모자라 너와 함께 있으면 너와 눈을 맞추면'},
	{'author':'EXO', 'title':'으르렁', 'word':'나 으르렁 으르렁 으르렁 대 너 물러서지 않으면 다쳐도 몰라'},
	{'author':'틴탑', 'title':'장난아냐', 'word':'나 정말 괴로워 오늘 그 애와 헤어졌단 말야 이번엔 뭔가 느낌이 달라'},
	{'author':'투빅', 'title':'사랑하고 있습니다.', 'word':'눈물이 다 말라도 가슴이 다 닳아도 내가 그댈 사랑하고 있습니다'},
	{'author':'G드래곤', 'title':'black', 'word':'사랑의 본명은 분명히 증오 희망은 실망과 절망의 부모'},
	{'author':'MC몽', 'title':'죽을 만큼 아파서', 'word':'어느 새 내 눈물을 가려버린 빗물 머리에서 발끝까지 소름이 끼칠 듯'},
	{'author':'박진영', 'title':'사랑이 제일 낫더라', 'word':'가까이 가면 갈수록 왜 점점 더 멀어지는지'},
	{'author':'백지영', 'title':'울고만있어', 'word':'숨죽여 니 이름을 되뇌어도 대답이 없고 너를 향해 뻗은 내 두 손은 텅 빈자리야'},
	{'author':'', 'title':'', 'word':'그대가 먼저 용길 내줘 달콤하게 속삭여줘 날 사랑한다고'},
	{'author':'', 'title':'', 'word':'조금 더 참아줄래 조금 더 기다릴래 네 맘을 모르는 내가 아닌걸 알아'},
	{'author':'', 'title':'', 'word':'머리에서부터 발 끝까지 하나도 빠짐없이'},
	{'author':'', 'title':'', 'word':'그대 생각에 바뀌어 버린 낮과 밤'},
	{'author':'', 'title':'', 'word':'눈 앞이 어지러워져 머리는 소란스러워'},
	{'author':'', 'title':'', 'word':'순간이라도 그댈 볼 때면'},
	{'author':'', 'title':'', 'word':'얼마나 시간이 지나가야지 날 사랑 할 까요'},
	{'author':'', 'title':'', 'word':'어디 있어도 무얼 하고 있어도'},
	{'author':'', 'title':'', 'word':'걸음이 흔들거려져 들킬지 몰라 숨 죽여'},
	{'author':'', 'title':'', 'word':'눈물이 늘 많은 나라서 말도 못 하는 바보라서 가슴이 아파'},
	{'author':'', 'title':'', 'word':'그래도 난 좋은데 행복해 할 수 있는데'},
	{'author':'', 'title':'', 'word':'어디 있는지 무얼 하고 있는지'},
	{'author':'', 'title':'', 'word':'숨이 딱 멎을거 같아 숨쉴 수가 없어'},
	{'author':'', 'title':'', 'word':'마침 딱 분위기좋아 두 눈은 감을래'},
	{'author':'', 'title':'', 'word':'우리 분위기 정말 장난 아냐'},
	{'author':'', 'title':'', 'word':'나 정말 괴로워 오늘 그 애와 헤어졌단 말야'},
	{'author':'', 'title':'', 'word':'이번엔 뭔가 느낌이 달라'},
	{'author':'', 'title':'', 'word':'그 앤 너무 잘 났어 한마디도 안 지네'},
	{'author':'', 'title':'', 'word':'그 매력에 빠졌어 나만 이렇게 비참해'},
	{'author':'', 'title':'', 'word':'싸우는 것도 지쳤어 주위에서 모두 말해'},
	{'author':'', 'title':'', 'word':'너와 난 미쳤어 내일이면 다시 볼 거면서 왜 그러는데'},
	{'author':'', 'title':'', 'word':'얘기 좀 해 란 내 말에 너는 혀가 꼬인 말투로'},
	{'author':'', 'title':'', 'word':'날 쳐다보며 둘러댔지'},
	{'author':'', 'title':'', 'word':'왜 내가 널 좋아한지 나도 잘 모르겠지만'},
	{'author':'', 'title':'', 'word':'그래도 이건 아니지 내 여자가'},
	{'author':'', 'title':'', 'word':'왜 날 두고 다른 사람 찾아 왜 그럼 난 뭐니'},
	{'author':'', 'title':'', 'word':'네 생일이 되던 그때 네가 좋아하던 모카 케익'},
	{'author':'', 'title':'', 'word':'누구였니란 내 말에 너는 아버지가 일 끝나고 데려다 준거라 했지'},
	{'author':'', 'title':'', 'word':'만약에 말야 우리 조금 어렸었다면 지금 어땠었을까'},
	{'author':'', 'title':'', 'word':'세월에 닫혀진 우리의 연이 더는 허락되어 지지 않아도'},
	{'author':'', 'title':'', 'word':'세상에 닫혀진 우리의 날이 이젠 바랜 기억 뿐 일 지라도'},
	{'author':'', 'title':'', 'word':'가슴 속에 들어간 사람 자꾸만 떠올라서'},
	{'author':'', 'title':'', 'word':'머리 속 가득한 사람 멀리해도 보여'},
	{'author':'', 'title':'', 'word':'조금의 미동도 없는 그 입술 이 내 가슴에 비수를'},
	{'author':'', 'title':'', 'word':'애써 눈물을 감추려 힘없이 여민 옷깃은'},
	{'author':'', 'title':'', 'word':'남루해진 우리 사일 보듯이 그 어떤 의미도'}
]































