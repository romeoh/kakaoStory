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

	data.title = '나의 주량 알아보기';
	data.url = 'http://goo.gl/BCCnn';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(dataDrink)
	mountIdx = process(dataMount)
	actionIdx = process(dataAction)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 주량은 ' + dataDrink[idx]['name'] + ' ' + dataMount[mountIdx] + '입니다.\n\n';
	post += '주량: ' + dataDrink[idx]['name'] + ' ' + dataMount[mountIdx] + '\n';
	post += '주사: ' + dataAction[mountIdx];
	data.post = post;
	
	data.desc = userName + '님의 주량은 ' + dataDrink[idx]['name'] + ' ' + dataMount[mountIdx] + '입니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/imgDrink/' + dataDrink[idx]['photo'];

	sendData(data);
}


dataDrink = [
	{'name':'소주', photo:'d01.jpg'},
	{'name':'맥주', photo:'d02.jpg'},
	{'name':'막걸리', photo:'d03.jpg'},
	{'name':'예거마이스터', photo:'d04.jpg'},
	{'name':'로얄살루트 21년산', photo:'d05.jpg'},
	{'name':'발렌타인 30년산', photo:'d06.jpg'},
	{'name':'잭다니엘', photo:'d07.jpg'},
	{'name':'스카치블루', photo:'d08.jpg'},
	{'name':'위스키', photo:'d09.jpg'},
	{'name':'시바스리갈', photo:'d10.jpg'}
]

dataMount = [
	'한잔',
	'두잔',
	'세잔',
	'한병',
	'두병',
	'세병',
	'네병',
	'다섯병',
	'열병',
	'한짝',
	'두짝',
	'세짝',
	'무제한'
]

dataAction = [
	'옆사람에게 뽀뽀함',
	'옆사람을 포옹함',
	'했던말 계속함',
	'엄마생각하며 울기',
	'끊임없이 웃음',
	'똥폼잡음',
	'줄담배 피기',
	'조용히 잠자기',
	'없어져서 친구들이 찾으러 다님',
	'조용히 집에감',
	'화장실에서 우엑~',
	'옆테이블에 시비걸기',
	'큰소리로 노래부름',
	'골든벨 울리기'
]






























