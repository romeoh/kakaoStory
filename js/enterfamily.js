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

	data.title = '연예인가족';
	data.url = 'http://goo.gl/ZxYUD7';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		f1 = '형'
		f2 = '누나'
	} else if (sexType == 'girl') {
		f1 = '오빠'
		f2 = '언니'
	}

	// 손윗
	if (process(0,2) == '0') {
		f = f1
		fdata = dataBrother
		fIdx = process(fdata);
	} else {
		f = f2
		fdata = dataSyster
		fIdx = process(fdata);
	}
	
	// 동생
	if (process(0,2) == '0') {
		l = '여동생'
		ldata = dataLastGirl
		lIdx = process(ldata);
	} else {
		l = '남동생'
		ldata = dataLastBoy
		lIdx = process(ldata);
	}
	fatherIdx = process(dataFather);
	motherIdx = process(dataMother);
	myIdx = process(dataMy);
	
	post += '[' + data.title + ']\n';
	post += '우리 연예인 가족을 소개할께요.\n\n';
	post += '- 아빠: ' + dataFather[fatherIdx] + '\n';
	post += '- 엄마: ' + dataMother[motherIdx] + '\n';
	post += '- ' + f + ': ' + fdata[fIdx] + '\n';
	post += '- 나: ' + userName + ' (' + dataMy[myIdx] + ')\n';
	post += '- ' + l + ': ' + ldata[lIdx];

	data.post = post;
	
	data.desc = '햄볶는 우리 가족!';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/enterfamily.png';

	sendData(data);
}


dataFather = [
	'신구',
	'이순재',
	'최불암',
	'유희열',
	'유재석',
	'신동엽',
	'정우성',
	'송해',
	'설운도',
	'최민식',
	'태진아',
	'조영남',
	'유동근',
	'임현식',
	'이경규',
	'이덕화',
	'임재범',
	'조용필',
	'최민수',
	'이문세',
	'유인촌',
	'전영록',
	'백일섭',
	'나훈아',
	'김흥국'
]

dataMother = [
	'강부자',
	'이미자',
	'양희경',
	'박원숙',
	'김을동',
	'양희은',
	'나문희',
	'윤여정',
	'김자옥',
	'황신혜',
	'주현미',
	'김혜자',
	'김수미',
	'사미자',
	'고두심',
	'전원주',
	'엄앵란',
	'노사연',
	'선우용여',
	'하춘화',
	'심수봉',
	'현미'
]

dataBrother = [
	'이준',
	'김준수',
	'송중기',
	'탑',
	'미르',
	'최강창민',
	'김수현',
	'디오',
	'박유천',
	'헨리',
	'남우현',
	'키',
	'백현',
	'진영',
	'엘',
	'윤두준',
	'양요섭'
]

dataSyster = [
	'홍진영',
	'클라라',
	'김그림',
	'태연',
	'나나',
	'니콜',
	'아이유',
	'정은지',
	'민아',
	'박신혜',
	'가인',
	'박한별',
	'정은채',
	'윤아',
	'한승연',
	'김재경',
	'보라',
	'손나은',
	'소유',
	'안소희',
	'에일리',
	'민아',
	'수영',
	'유이',
	'제시카',
	'구혜선',
	'김현아',
	'리세',
	'소진',
	'신보라',
	'산다라박',
	'강민경'
]

dataLastBoy = [
	'천보근',
	'강찬희',
	'한서진',
	'이유비',
	'정윤석',
	'여진구',
	'임시완',
	'이원근',
	'이민호'
]

dataLastGirl = [
	'갈소원',
	'이채미',
	'박민하',
	'박유빈',
	'유해정',
	'김유정',
	'김소현',
	'진지희',
	'서지희'
]

dataMy = [
	'연기자 지망생',
	'가수 지망생',
	'모델 지망생',
	'코미디언 지망생',
	'아나운서 지망생',
	'댄서 지망생',
	'야구선수 지망생',
	'축구선수 지망생',
	'작곡가 지망생'
]






























