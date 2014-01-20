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

	data.title = '나에게 어울리는 쿠키맛은?';
	data.url = 'http://goo.gl/t4gk9B';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)

	post += '[' + data.title + ']\n\n';
	post += userName + '님과 어울리는 쿠키는 "' + database[idx]['cookie'] + '"입니다.\n\n';
	post += '🍪 체력: ' + database[idx]['che'] + '\n';
	post += '🍪 능력: ' + database[idx]['nung'] + '\n';
	post += '🍪 도전: ' + database[idx]['do'] + '\n';
	post += '🍪 구매: ' + database[idx]['cristal'] + '';
	data.post = post;
	
	data.desc = '달려달려~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/cookies/' + database[idx]['photo'];

	sendData(data);
}


database = [
	{'photo':'cookie1.png',  'che':'90', 'nung':'이단점프와 슬라이드 가능', 'do':'기본 캐릭터', 'cristal':'기본 캐릭터', 'cookie':'용감한 쿠키군'},
	{'photo':'cookie2.png',  'che':'90', 'nung':'좀더 많은 경험치 획득', 'do':'30000점 달성', 'cristal':'크리스탈 3개', 'cookie':'명랑한 쿠키양'},
	{'photo':'cookie3.png',  'che':'100', 'nung':'보너스타임 시간 연장', 'do':'친구 3명', 'cristal':'크리스탈 15개', 'cookie':'딸기맛 쿠키'},
	{'photo':'cookie4.png',  'che':'100', 'nung':'체력이 천천히 줄어드는 장수체력', 'do':'레벨 8 달성', 'cristal':'크리스탈 15개', 'cookie':'쿠키앤크림 쿠키'},
	{'photo':'cookie5.png',  'che':'100', 'nung':'아이템 효과 지속시간이 길어짐', 'do':'펫 5개 이상 보유', 'cristal':'크리스탈 15개', 'cookie':'구름맛 쿠키'},
	{'photo':'cookie6.png',  'che':'100', 'nung':'코인 획득량 증가', 'do':'점수 180,000점 달성', 'cristal':'크리스탈 15개', 'cookie':'버터크림 초코쿠키'},
	{'photo':'cookie7.png',  'che':'110', 'nung':'코인 13~20%, 경험치 3~10% 추가획득', 'do':'황금 종 모으기 이벤트에서 300개 획득', 'cristal':'없음', 'cookie':'산타맛 쿠키'},
	{'photo':'cookie8.png',  'che':'130', 'nung':'회복 물약을 먹었을 때 더 많은 체력 회복', 'do':'레벨 15 달성', 'cristal':'크리스탈 50개', 'cookie':'커피맛 쿠키'},
	{'photo':'cookie9.png',  'che':'130', 'nung':'더 빨리 달리기', 'do':'점수 300,000점 달성', 'cristal':'크리스탈 50개', 'cookie':'보더맛 쿠키'},
	{'photo':'cookie10.png', 'che':'130', 'nung':'장애물에 부딪혔을 때 체력이 덜 줄어드는 강인함', 'do':'젤리레벨 15 달성', 'cristal':'크리스탈 50개', 'cookie':'공주맛 쿠키'},
	{'photo':'cookie11.png', 'che':'130', 'nung':'광속질주 아이템을 먹었을 때 더 빨리, 오래 달리기', 'do':'체력레벨 15 달성', 'cristal':'크리스탈 50개', 'cookie':'용사맛 쿠키'},
	{'photo':'cookie12.png', 'che':'130', 'nung':'장애물 던져버리기', 'do':'점수 450,000점 달성', 'cristal':'크리스탈 50개', 'cookie':'근육맛 쿠키'},
	{'photo':'cookie13.png', 'che':'130', 'nung':'쓰러졌다가도 자꾸 부활하기', 'do':'친구 50명', 'cristal':'크리스탈 50개', 'cookie':'좀비맛 쿠키'},
	{'photo':'cookie14.png', 'che':'140', 'nung':'자석효과', 'do':'레벨 30 달성', 'cristal':'크리스탈 99개', 'cookie':'천사맛 쿠키'},
	{'photo':'cookie15.png', 'che':'150', 'nung':'3단 이상의 점프하기', 'do':'점수 600,000점 달성', 'cristal':'크리스탈 99개', 'cookie':'닌자맛 쿠키'},
	{'photo':'cookie16.png', 'che':'140', 'nung':'유령으로 부활하기', 'do':'친구 100명', 'cristal':'크리스탈 99개', 'cookie':'해적맛 쿠키'},
	{'photo':'cookie17.png', 'che':'140', 'nung':'연기점수 추가획득', 'do':'레벨 45 달성', 'cristal':'크리스탈 119개', 'cookie':'피겨여왕맛 쿠키'},
	{'photo':'cookie18.png', 'che':'140', 'nung':'머리 위에 게이지가 꽉 차면 무적 히어로로 변신', 'do':'친구 150명', 'cristal':'크리스탈 119개', 'cookie':'히어로맛 쿠키'},
	{'photo':'cookie19.png', 'che':'140', 'nung':'점프 일정횟수(만렙 시 22회) 달성시 응원단이 등장해 장애물을 제거해주며 코인과 젤리를 생성', 'do':'만렙인 펫을 12개 보유', 'cristal':'크리스탈 149개', 'cookie':'치어리더맛 쿠키'},
	{'photo':'cookie20.png', 'che':'140', 'nung':'별사탕을 발사하여 장애물을 일정확률로 파괴', 'do':'레벨 8 쿠키 10개 보유', 'cristal':'크리스탈 149개', 'cookie':'특전사맛 쿠키'},
	{'photo':'cookie21.png', 'che':'150', 'nung':'쿠키들의 원혼을 일정량(최소 17개) 흡수 시 슈퍼 악마로 변신', 'do':'레벨 50 달성', 'cristal':'크리스탈 119개', 'cookie':'악마맛 쿠키'},
	{'photo':'cookie22.png', 'che':'160', 'nung':'3단 이상의 점프를 하며 공중에 있는 경우 슬라이드 버튼을 누르면 순간이동 착지 및 슬라이드', 'do':'젤리 레벨 40달성', 'cristal':'크리스탈 129개', 'cookie':'의적맛 쿠키'},
	{'photo':'cookie23.png', 'che':'150', 'nung':'2단 점프 9회시 구미호로 변신하여 곰젤리를 유혹하여 추가점수 획득', 'do':'레벨 55 달성', 'cristal':'크리스탈 129개', 'cookie':'구미호맛 쿠키'},
	{'photo':'cookie24.png', 'che':'150', 'nung':'매직미사일 발사, 대마법 발동', 'do':'만렙인 펫을 16개 보유', 'cristal':'크리스탈 119개', 'cookie':'마법사맛 쿠키'},
	{'photo':'cookie25.png', 'che':'160', 'nung':'보호막 자력 생성', 'do':'+9 강화 보물 5개 보유', 'cristal':'크리스탈 149개', 'cookie':'요정맛 쿠키'},
	{'photo':'cookie26.png', 'che':'140', 'nung':'슬라이드 지속시간에 따라 음표젤리를 발사', 'do':'보물을 20개 이상 보유', 'cristal':'크리스탈 119개', 'cookie':'락스타맛 쿠키'},
	{'photo':'cookie27.png', 'che':'140', 'nung':'체리폭탄을 던져 장애물을 파괴하며 체리젤리를 생성', 'do':'9+ 보물을 8개 이상 보유', 'cristal':'크리스탈 119개', 'cookie':'체리맛 쿠키'},
	{'photo':'cookie28.png', 'che':'140', 'nung':'7번 이단 점프를 할때마다 연주가 바뀜', 'do':'레벨 57 달성', 'cristal':'크리스탈 119개', 'cookie':'음유시인맛 쿠키'},
	{'photo':'cookie29.png', 'che':'140', 'nung':'일정시간마다 장애물을 부수고 눈꽃젤리를 생성하는 스노우콘 소환수를 소환', 'do':'S급 보물 12개보유', 'cristal':'크리스탈 119개', 'cookie':'눈설탕맛 쿠키'}
]



























