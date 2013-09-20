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

	data.title = '나의 겁주기 신공';
	data.url = 'http://goo.gl/8TAZnZ';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	monIdx = process(dataMon)
	skilIdx = process(dataSkil)
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님의 겁주기 신공입니다.\n\n';
	post += '겁주기 지수: ' + dataMon[monIdx] + '\n';
	post += '전공 겁주기: ' + dataSkil[skilIdx];
	data.post = post;
	
	data.desc = '니 오늘 몇건 했니?\n한건도 몬했다고? 너 밥먹기 시르니?';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/monster1.png';

	sendData(data);
}

dataMon = [
	'☆☆☆☆☆',
	'★☆☆☆☆',
	'★★☆☆☆',
	'★★★☆☆',
	'★★★★☆',
	'★★★★★'
]

dataSkil = [
	'그 사람이 없는 곳에서 뒷담화로 겁주기',
	'감동적인 비디오라며 깜놀 비디오 보내주기',
	'생각에 잠겼을때 뒤통수 쳐서 깜놀래키기',
	'바이킹 탈때 몰래 안전벨트 풀어놓고, 공중에서 알려주기',
	'선생님이 너 때문에 화났다고 구라쳐서 겁주기',
	'늙어보이는 형 델꼬가서 일진이라며 겁주기',
	'캠핑가서 단체비 잊어버렸다고 겁주기',
	'쿵후3단, 태권도4단, 합기도 2단이라고 구라쳐서 겁주기',
	'자전거 뒤에 태우고 핸들 흔들어 겁주기',
	'잠들려고 할때 고함 질러서 겁주기',
	'문뒤에 숨어있다가 갑자기 고함 질러서 겁주기',
	'헤드락 걸어서 항복하라며 겁주기',
	'영화보다 쓰러져서 거품 무는척 연기하며 겁주기',
	'암바 걸어서 푸는 방법 모른다며 겁주기',
	'높은 곳에서 아래 쳐다보고 있을때 뒤에서 고함 질러서 겁주기',
	'핸드폰 잠깐 빌려서 잊어 버렸다고 겁주기',
	'내 이빨에서 독침 발사된다고 구라쳐서 겁주기',
	'친구한테 전화해서 돈이 인출되었다고 당황시켜서 겁주기'
]






























