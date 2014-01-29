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

	data.title = '전생 사망 진단서';
	data.url = 'http://goo.gl/7aldrR';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx1 = process(data1);
	idx2 = process(data2);
	data3 = process(1000, 2000) + '년 ' + process(1, 12) + '월 ' + process(1, 30) + '일';
	idx4 = process(data4);
	idx5 = process(data5);
	idx6 = process(data6);
	idx7 = process(data7);
	idx8 = process(data8);
	idx9 = process(data9);

	
	post += '[' + data.title + ']\n\n';
	post += '🎃 현재의 이름: ' + userName + '\n';
	post += '🎃 전생의 이름: ' + data1[idx1] + '\n';
	post += '🎃 전생종족: ' + data2[idx2] + '\n';
	post += '🎃 사망시간: ' + data3 + '\n';
	post += '🎃 사망장소: ' + data4[idx4] + '\n';
	post += '🎃 전생직업: ' + data5[idx5] + '\n';
	post += '🎃 전생연봉: ' + data6[idx6] + '\n';
	post += '🎃 사망원인: ' + data7[idx7] + '\n';
	post += '🎃 마지막 남긴 한마디: ' + data8[idx8] + '\n';
	post += '🎃 주위의 평가: ' + data9[idx9] + '';
	data.post = post;
	
	data.desc = '정말이야? 전혀 눈치 못챘어...\n내일까지 이야기 할께~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/samang.png';

	sendData(data);
}


// 이름
data1 = [
	'득구',
	'꼽등이',
	'개똥이',
	'박거성',
	'진상',
	'존나세',
	'철수',
	'나짜증',
	'존무식',
	'순덕이',
	'관종철',
	'스티브',
	'셀리',
	'말자',
	'백원만',
	'나관종',
	'나공유',
	'너똘만',
	'똘끼찬'
]

// 종족
data2 = [
	'남자사람',
	'여자사람',
	'거북이',
	'토끼',
	'꽃사슴',
	'독사',
	'고래',
	'똥개',
	'애완견',
	'고냥이',
	'말',
	'양',
	'쥐',
	'바퀴벌레',
	'구름',
	'하나님',
	'부처님',
	'왕'
]

// 시간
//data3 = []

// 장소
data4 = [
	'동네 PC방 12번 자리',
	'동네 PC방 24번 자리',
	'동네 PC방 4번 자리',
	'미술관옆 동물원',
	'운동장',
	'체육관',
	'수영장 화장실',
	'교무실',
	'학교 뒷산',
	'롯데월드 바이킹',
	'맥도날드',
	'KBS 방송국앞',
	'친구집',
	'지하철역',
	'문방구',
	'떡볶이집',
	'이마트 시식창구',
	'백화점 에스컬레이터'
]

// 전생직업
data5 = [
	'백정',
	'심부름꾼',
	'사또',
	'임금',
	'백수',
	'주부',
	'바람둥이',
	'가수',
	'주모',
	'막나니',
	'영의정',
	'재벌2세',
	'판매원',
	'후궁',
	'사기꾼',
	'명나라 공주'
]

// 전생연봉
data6 = [
	'연봉 1억원',
	'연봉 1000만원',
	'몽둥이 50대',
	'욕바가지',
	'쌀 한가마니',
	'건담 프라모델',
	'연봉 3000만원',
	'생선 4마리, 꿀 한통',
	'호박 4통',
	'제철과일 1바구니',
	'꽃 한다발',
	'금화 50개',
	'은화 10개',
	'당나귀 1마리',
	'뗄감 3지게',
	'연필 4자루',
	'크리스탈 100개',
	'캔디크러시 사가 하트 2개',
	'손가락 욕 3번'
]

// 사망원인
data7 = [
	'맞아 죽음',
	'짜증나 죽음',
	'배고파 죽음',
	'열받아 죽음',
	'웃겨 죽음',
	'화나 죽음',
	'겁나 죽음',
	'재미있어 죽음',
	'늙어 죽음',
	'불쌍해 죽음'
]

// 마지막 남긴 한마디
data8 = [
	'꽥~',
	'잘지내~',
	'으악',
	'헐',
	'대박',
	'관심좀..',
	'내카스에 느낌좀요',
	'내카스에 힘내요좀요',
	'안뇽~',
	'죽기싫어',
	'나간다',
	'Let it go',
	'에잇',
	'잘 살다 갑니다.',
	'청산~~',
	'태산이 높다하되 하늘아래 뫼이로다',
	'',
	'',
	''
]

// 평가
data9 = [
	'그놈 참..',
	'★★★★★',
	'불합격',
	'전 캐스팅 하지 않겠습니다.',
	'합격드릴께요.',
	'모두 존경했습니다.',
	'모두 좋아했습니다.',
	'팬이 많았습니다.',
	'이런 사람도 있었어?',
	'별로 친하지 않았음',
	'대단한 사람이야',
	'물건이구만..'
]































