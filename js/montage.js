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

	data.title = '현상수배';
	data.url = 'http://goo.gl/dSNme7';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	point = shuffle(dataPoint)
	dataIdx = process(database)
	moneyIdx = process(dataMoney)
	
	post += '[' + data.title + ']\n';
	post += '현상금: ' + dataMoney[moneyIdx] + '\n\n';
	post += '<인적사항>\n';
	post += '이름: ' + userName + '\n\n';
	post += '<사건개요>\n';
	post += database[dataIdx] + '\n\n';
	post += '<특징>\n';
	post += point[0] + ', ';
	post += point[1] + ', ';
	post += point[2];

	twit += '[' + data.title + ']\n';
	twit += '현상금: ' + dataMoney[moneyIdx] + '\n';
	twit += '이름: ' + userName + '\n';
	twit += database[dataIdx] + '\n';
	twit += '<특징>\n';
	twit += point[0] + ', ';
	twit += point[1] + ', ';
	twit += point[2];

	data.twit = twit;
	data.post = post;
	
	data.desc = '자기 카스에 자기를 현상수배하는 이 불편한 진실';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/montage.png';

	sendData(data);
}


database = [
	'노상방뇨',
	'초등학생한테 2,000원을 훔쳐 달아남',
	'초등학교 앞에서 바바리입고 다님',
	'여적죄',
	'너무 섹시해서 신고 들어옴',
	'길거리에서 소리침',
	'술마시고 추태부림',
	'너무 잘나서 이성들을 힘들게 한죄',
	'친구 뒷담화했음',
	'부모님 말을 듣지 않음',
	'지하철에서 큰소리로 욕했음',
	'길거리에서 헌팅하다 실패함',
	'맘에드는 이성에게 찝쩍거림',
	'이성에게 집착했음',
	'친구를 디스함',
	'친구에게 언제까지 어깨춤을 추게함',
	'그냥 신고들어왔음, 이유모름',
	'스마트폰 중동',
	'예능 프로그램에서 쓸데없이 눈물을 흘림',
	'가끔 친구들을 맨붕에 빠지게함'
]

dataMoney = [
	'2만원',
	'5만원',
	'10만원',
	'20만원',
	'50만원',
	'100만원',
	'200만원',
	'500만원',
	'1,000만원',
	'5,000만원',
	'1억원',
	'2억원',
	'5억원',
	'10억원',
	'20억원',
	'30억원',
	'100억원'
]

dataPoint = [
	'얼굴이 가름하고 미인형 스타일',
	'등문신 있음',
	'낮에는 정장, 밤에는 속옷만 입고 다님',
	'변장을 잘함',
	'신분을 감추기 위하여 안경을 씀',
	'사람이 아님',
	'남장여자임',
	'사각턱',
	'넓적한 얼굴',
	'머릿숱이 적음',
	'눈이 찢어짐',
	'못생겼음',
	'비호감 얼굴',
	'호수같은 눈빛',
	'엉덩이가 섹시함',
	'도자기 피부',
	'웃을때 매력있음',
	'개성있는 말투',
	'허스키한 목소리가 매력적임',
	'매우 튼실한 몸',
	'겨드랑이에서 냄새남',
	'헤어스타일이 독특함',
	'눈썹이 비대칭',
	'자연미인',
	'너무 잘났음',
	'패션센스가 매우 뛰어남',
	'이성에서 호감가는 스타일',
	'까칠한 매력의 소유자',
	'욱하는 성격',
	'조각미남',
	'눈웃음이 멋짐',
	'순수한 내면',
	'노래를 잘함',
	'살인미소 보유',
	'인사성이 밝음',
	'애교로 보는사람들이 코피 흘리게 함'
]
































