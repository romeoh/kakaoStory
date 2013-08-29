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

	data.title = userName + ' 사용설명서';
	data.url = 'http://goo.gl/gSloK';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	likeIdx = process(dataLike)
	hateIdx = process(dataHate)
	fuelIdx = process(dataFuel)
	manageIdx = process(dataManage)
	brokenIdx = process(dataBroken)
	ginung = shuffle(dataGinung, 3)
	
	post += '[' + data.title + ']\n\n';
	post += '- 좋아하는것: ' + dataLike[likeIdx] + '\n';
	post += '- 싫어하는것: ' + dataHate[hateIdx] + '\n';
	post += '- 주연료: ' + dataFuel[fuelIdx] + '\n';
	post += '- 평상시 관리법: ' + dataManage[manageIdx] + '\n';
	post += '- 고장시 대처요령: ' + dataBroken[brokenIdx] + '\n\n';
	post += '[주요기능]\n';
	post += '1. ' + ginung[0] + '\n';
	post += '2. ' + ginung[1] + '\n';
	post += '3. ' + ginung[2];
	data.post = post;
	
	data.desc = dataManage[manageIdx];
	data.img = 'http://romeoh.github.io/kakaoStory/img/manual.jpg';

	sendData(data);
}


dataLike = [
	'코뿔소',
	'강아지',
	'토끼',
	'술',
	'야동',
	'여행',
	'데이트',
	'뽀뽀하기',
	'코끼리',
	'동물원',
	'수영',
	'스키',
	'돼지고기',
	'하이애나',
	'돼지고기',
	'장어',
	'자기전에 라면먹기'
]

dataHate = [
	'양다리',
	'공부',
	'출근하기',
	'학교가기',
	'군대가기',
	'돈 빌려주기',
	'아침일찍 전화받기',
	'저녁늦게 불러내는것',
	'말대꾸 하는것',
	'짜증나게 말거는것',
	'술먹이는것',
	'반말하는것',
	'삿대질 하는것',
	'째려보는것',
	'욕하는것'
]

dataGinung = [
	'상담기능: 말을 잘들어줌',
	'스피치기능: 말을 많이해서 심심하지 않음',
	'청소기능: 청도를 잘함',
	'요리기능: 요리를 잘함',
	'싸이렌기능: 욕을 잘해서 호신용으로 사용가능',
	'호신기능: 싸움을 잘함',
	'파워기능: 힘이 좋고, 잔심부름을 잘함',
	'노예기능: 시키면 시키는 데로 다함',
	'노래재생기능: 노래를 잘 부름',
	'스피킹기능: 길거리에서 사랑한다고 소리지름',
	'레시피기능: 맛있는 음식 셔틀',
	'애교기능: 귀여워 죽을껄요~',
	'연기기능: 거짓말을 잘함',
	'녹음기능: 했던말 또하고 했던말 또함',
	'카톡기능: 카톡을 죽어라고 보냄'
]

dataFuel = [
	'밥',
	'커피',
	'스파케티',
	'라면',
	'불고기',
	'삼겹살',
	'소주',
	'카레밥',
	'스테이크',
	'샐러드',
	'피자',
	'막걸리',
	'돼지껍데기',
	'곱창'
]

dataManage = [
	'혼자만의 시간을 주면 오래 쓸수 있음',
	'팔짱끼고 다니기',
	'구박하면 튼튼해짐',
	'노래를 불러주면 충전됨',
	'이름 불러주는것 좋아함',
	'수시로 전화해줘야 오래씀',
	'수시로 카톡 보내야 좋아함',
	'수시로 칭찬해주면 기분 업됨',
	'명령어조로 말하면 오작동함',
	'사람 심리를 역이용하면 제명당함',
	'아픈곳 찌르지 않게 주의',
	'가끔 성격이 더러워질때는 모르는척 하세요.',
	'많은 관심을 가져주세요.'
]

dataBroken = [
	'예뻐해주기',
	'칭찬해주기',
	'말하는것 잘 들어주기',
	'모르는척 하기',
	'맛있는거 사주기',
	'영화보여주기',
	'여행가기',
	'빰 맞아 주면 금방 풀림',
	'무조건 잘못했다고 사과하기',
	'영화보여주기',
	'같이 술마시기',
	'경치좋은 카페 데려가기'
]












