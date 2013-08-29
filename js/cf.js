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

	data.title = '나와 어울리는 CF';
	data.url = 'http://goo.gl/eK1NU';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	productIdx = process(dataProduct)
	partnerIdx = process(dataPartner)
	priceIdx = process(dataPrice)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님, CF섭외가 들어왔습니다.\n';
	post += '제품명: ' + dataProduct[productIdx]['product'] + '\n'
	post += '출연료: ' + dataPrice[priceIdx] + '\n'
	post += '함께 출연할 연예인: ' + dataPartner[partnerIdx];
	data.post = post;
	
	data.desc = dataProduct[productIdx]['product'];
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + dataProduct[productIdx]['photo'];

	sendData(data);
}

// 남자
dataProduct = [
	{'photo': 'cf1.jpg', 'product': '바나나맛 우유'},
	{'photo': 'cf2.jpg', 'product': '쿠팡'},
	{'photo': 'cf3.jpg', 'product': '포카리스웨트'},
	{'photo': 'cf4.jpg', 'product': '캐논 EOS 100D'},
	{'photo': 'cf5.jpg', 'product': '동원참치'},
	{'photo': 'cf6.jpg', 'product': '갤럭시 S4'},
	{'photo': 'cf7.jpg', 'product': 'LG U플러스 LTE'},
	{'photo': 'cf8.jpg', 'product': '베스킨라빈스'},
	{'photo': 'cf9.jpg', 'product': '코웨이'},
	{'photo': 'cf10.jpg', 'product': '피자헛'},
	{'photo': 'cf11.jpg', 'product': '세븐'},
	{'photo': 'cf12.jpg', 'product': '팔도비빔면'},
	{'photo': 'cf13.jpg', 'product': '삼성화재 슈퍼플러스'},
	{'photo': 'cf14.jpg', 'product': '대한항공'},
	{'photo': 'cf15.jpg', 'product': '뚜레쥬르'},
	{'photo': 'cf16.jpg', 'product': '베가아이언'},
	{'photo': 'cf17.jpg', 'product': '기아 K5'},
	{'photo': 'cf18.jpg', 'product': '맥심 T.O.P'},
	{'photo': 'cf19.jpg', 'product': 'LG 휘센'},
	{'photo': 'cf20.jpg', 'product': '미에로화이바'},
	{'photo': 'cf21.jpg', 'product': '파리바게뜨'},
	{'photo': 'cf22.jpg', 'product': '샤프란'},
	{'photo': 'cf23.jpg', 'product': '새우깡'},
	{'photo': 'cf24.jpg', 'product': '비씨카드'},
	{'photo': 'cf25.jpg', 'product': '현대카드'},
	{'photo': 'cf26.jpg', 'product': '미스터피자'},
	{'photo': 'cf27.jpg', 'product': '한국타이어'},
	{'photo': 'cf28.jpg', 'product': '참붕어빵'},
	{'photo': 'cf29.jpg', 'product': '블랙야크'},
	{'photo': 'cf30.jpg', 'product': '11번가'},
	{'photo': 'cf31.jpg', 'product': '박카스'}
]

// 파트너
dataPartner = [
	'이승기',
	'전지현',
	'김연아',
	'손연제',
	'원빈',
	'장동건',
	'유재석',
	'박명수',
	'노홍철',
	'원빈',
	'수지',
	'이병헌',
	'김수현',
	'고현정',
	'다비치 강민경',
	'김태희',
	'싸이',
	'송중기',
	'유아인',
	'고아라',
	'황정민',
	'손예진',
	'한효주',
	'단독출연'
]

// 출연료
dataPrice = [
	'100 만원',
	'500 만원',
	'1,000 만원',
	'5,000 만원',
	'1억원',
	'2억원',
	'5억원',
	'10억원',
	'12억원',
	'15억원',
	'20억원',
	'쌀한가마니',
	'단감 10박스',
	'라면 20박스',
	'문화상품권 10장',
	'스케치북 20권',
	'출연료는 없음'
]
































