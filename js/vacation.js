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

	data.title = '함께 휴가가는 연예인';
	data.url = 'http://goo.gl/pxiUqd';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
	} else if (sexType == 'girl') {
		database = dataGirl;
	}
	idx = process(database)
	longIdx = process(dataLong)
	placeIdx = process(dataPlace)
	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님은 ' + database[idx]['name'] + '\n';
	post += dataPlace[placeIdx]['place'] + '에 ' + dataLong[longIdx]['long'] + ' 여행갑니다.\n\n';
	post += '축하합니다.';
	data.post = post;
	
	data.desc = database[idx]['name'] + ' 포레버~\n거기서 그냥 사세요.';
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + database[idx]['photo'];

	sendData(data);
}

dataBoy = [
	{'photo':'vacationGirl1.png', 'name':'클라라와'},
	{'photo':'vacationGirl2.png', 'name':'이다희와'},
	{'photo':'vacationGirl3.png', 'name':'아이유와'},
	{'photo':'vacationGirl4.png', 'name':'고아성과'},
	{'photo':'vacationGirl5.png', 'name':'걸스데이 민아와'},
	{'photo':'vacationGirl6.png', 'name':'박하선과'},
	{'photo':'vacationGirl7.png', 'name':'정유미와'},
	{'photo':'vacationGirl8.png', 'name':'걸스데이 유라와'},
	{'photo':'vacationGirl9.png', 'name':'에일리와'},
	{'photo':'vacationGirl10.png', 'name':'소이현과'},
	{'photo':'vacationGirl11.png', 'name':'전소민과'},
	{'photo':'vacationGirl12.png', 'name':'하연수와'},
	{'photo':'vacationGirl13.png', 'name':'홍진영과'},
	{'photo':'vacationGirl14.png', 'name':'크레용팝 소율과'},
	{'photo':'vacationGirl15.png', 'name':'소녀시대 제시카와'},
	{'photo':'vacationGirl16.png', 'name':'고준희와'},
	{'photo':'vacationGirl17.png', 'name':'에이핑크 박초롱과'},
	{'photo':'vacationGirl18.png', 'name':'백아연과'}
]

dataGirl = [
	{'photo':'vacationBoy1.png', 'name':'이종석과'},
	{'photo':'vacationBoy2.png', 'name':'이현우와'},
	{'photo':'vacationBoy3.png', 'name':'최진혁과'},
	{'photo':'vacationBoy4.png', 'name':'양요섭과'},
	{'photo':'vacationBoy5.png', 'name':'엠블랙 이준과'},
	{'photo':'vacationBoy6.png', 'name':'이승기와'},
	{'photo':'vacationBoy7.png', 'name':'김수현과'},
	{'photo':'vacationBoy8.png', 'name':'박기웅과'},
	{'photo':'vacationBoy9.png', 'name':'엠블랙 이기광과'},
	{'photo':'vacationBoy10.png', 'name':'인피니트 엘과'},
	{'photo':'vacationBoy11.png', 'name':'로이킴과'},
	{'photo':'vacationBoy12.png', 'name':'이민호와'},
	{'photo':'vacationBoy13.png', 'name':'주원과'},
	{'photo':'vacationBoy14.png', 'name':'JYJ 준수와'},
	{'photo':'vacationBoy15.png', 'name':'JYJ 유천과'},
	{'photo':'vacationBoy16.png', 'name':'송중기와'},
	{'photo':'vacationBoy17.png', 'name':'존박과'},
	{'photo':'vacationBoy18.png', 'name':'윤두준과'}
]

dataPlace = [
	{'place':'경포대 해수욕장'},
	{'place':'해운대 해수욕장'},
	{'place':'일본 후쿠시마'},
	{'place':'일본 오키나와'},
	{'place':'중국 상하이'},
	{'place':'미국 하와이'},
	{'place':'제주도'},
	{'place':'인도네시아 발리'},
	{'place':'필리핀 세부'},
	{'place':'영국 런던'},
	{'place':'프랑스 파리'},
	{'place':'그리스'},
	{'place':'아프리카 케냐'},
	{'place':'개성공단'},
	{'place':'비무장지대 DMZ'},
	{'place':'대만'},
	{'place':'피지'},
	{'place':'호주 시드니'},
	{'place':'말레이시아 쿠알라룸푸르'}
]

dataLong = [
	{'long':'당일치기로'},
	{'long':'1박 2일 동안'},
	{'long':'2박 3일 동안'},
	{'long':'3박 4일 동안'},
	{'long':'4박 5일 동안'},
	{'long':'5박 6일 동안'},
	{'long':'일주일 동안'},
	{'long':'이주일 동안'},
	{'long':'한달 동안'},
	{'long':'두달 동안'},
	{'long':'3개월간'},
	{'long':'6개월간'},
	{'long':'1년 동안'},
	{'long':'2년 동안'},
	{'long':'5년 동안'},
	{'long':'10년 동안'}
]































