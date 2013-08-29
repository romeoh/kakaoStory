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

	data.title = '내 이름 연상단어';
	data.url = 'http://goo.gl/nzwC5';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	data.title = userName+', 하면 연상되는 단어';
	words = shuffle(dataWord, 5)
	matchRate0 = process(50, 100)
	matchRate1 = process(40, matchRate0)
	matchRate2 = process(30, matchRate1)
	matchRate3 = process(10, matchRate2)
	matchRate4 = process(0, matchRate3)

	post += '[' + data.title + ']\n\n';
	post += '1위: ' + words[0] + ' (' + matchRate0 + '%)\n';
	post += '2위: ' + words[1] + ' (' + matchRate1 + '%)\n';
	post += '3위: ' + words[2] + ' (' + matchRate2 + '%)\n';
	post += '4위: ' + words[3] + ' (' + matchRate3 + '%)\n';
	post += '5위: ' + words[4] + ' (' + matchRate4 + '%)';
	data.post = post;
	
	data.desc = words[0];
	data.img = 'http://romeoh.github.io/kakaoStory/img/dog.jpg';

	sendData(data);
}


dataWord = [
	'볼이트니스킨발라',
	'난방고양이',
	'오즈의맙소사',
	'빨간망또라이',
	'선녀와사겼꾼',
	'난앓라요',
	'바람과함께살빠지다',
	'마이클쪼다',
	'피바다연하',
	'오즈의 연하',
	'니 이모를 찾아',
	'짱구는 옷말려',
	'빵꾸똥꾸',
	'넌강동희였어',
	'환갑포청천',
	'미션임파썩을',
	'백살공주와칠순난장이',
	'루돌프가슴커',
	'무즙파워라이드',
	'친정간금자씨',
	'센과치히로의생사불명',
	'오드리될뻔',
	'달마다하자',
	'아침마담',
	'동갑내기 가장하기',
	'홈런왕 편승엽',
	'닭둘기튀김',
	'상두야2차가자',
	'피부암유리',
	'간꽁치',
	'시베리안허숙희',
	'옷사마빈라덴',
	'건넛집토토로',
	'백마탄환자',
	'SG원넓이',
	'영구교실',
	'이웃집또털어',
	'안졸리나졸리지',
	'이쑤신장군',
	'무한도발',
	'수비고양이',
	'초보파이',
	'여자라서햄볶아요',
	'광복절반사',
	'피부암통키',
	'반만고양이',
	'말걸지마',
	'추격60분',
	'축구왕숏다리',
	'오사마빈모뎀',
	'순데렐라',
	'선녀와사기꾼',
	'체험살해현장',
	'마약팔이소녀',
	'양들의뒷북',
	'발광머리앤',
	'명란젓코난',
	'사담후시딘',
	'꼬출든낭자',
	'껌은고양이',
	'북한탐정김정일',
	'오량진',
	'부릅뜨니숲이었어',
	'니콜키크드만',
	'오드리햇반',
	'핸젤과그랬데',
	'이웃집토넘쳐',
	'살인의추석',
	'반지하의제왕',
	'아놀드슈왈츠가제네냐',
	'똥낀도너츠',
	'악의공룡둘리',
	'황홀해서새벽까지',
	'켈로그콘프로토스',
	'짱구는못질중',
	'식후세번양아치짓',
	'클레오빡돌아',
	'미안하다관심없다',
	'글래머웨이터'
]































































































