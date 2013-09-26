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

	data.title = '조선시대 노비식 이름짓기';
	data.url = 'http://goo.gl/B5BA7F';

	if (media == 'talk') {
		sendData(data);
		return false;
	}


	var  optMon = document.querySelectorAll('#selMonth option')
		,optDate = document.querySelectorAll('#selDate option')

	for (var i=0; i<optMon.length; i++) {
		if (optMon[i].selected) {
			monIdx = i
			mon = i + '월'
		}
	}
	for (var i=0; i<optDate.length; i++) {
		if (optDate[i].selected) {
			dateIdx = i
			date = i + '일'
		}
	}

	monthType = M('#selMonth option').selector[monIdx].getAttribute('data-type')
	if (monthType === '0') {
		dateType = M('#selDate option').selector[dateIdx].getAttribute('data-ta')
	} else {
		dateType = M('#selDate option').selector[dateIdx].getAttribute('data-tb')
	}
	uname = selMonth.value + selDate.value;
	cname = uniValue(uname) ? uname + '아' : uname + '야';
	dname = uniValue(uname) ? uname + '이' : uname + '';
	command = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += '나의 조선시대 노비식 이름은\n';
	post += dname + ' 였습니다.\n\n';
	post += cname + database[command];
	data.post = post;
	
	data.desc = '저놈의 노비문서, 내가 찢어버리고 말테닷!! \n아이고 서러워ㅠㅠ';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/chosunName.png';

	sendData(data);
}


database = [
	'~~ 가서 물한잔 떠오너라',
	', 네 이노옴~',
	'~~ 이리오너라',
	', 마당은 쓸었느냐?',
	', 썩 이리오지 못할까?',
	'~~ 마님이 부르신다~',
	', 육조거리에 가서 생선 한마리 사오너라~',
	', 읍내에가서 막걸리 한말 받아오너라~',
	', 네놈이 내게서 도망을 가? \n고얀놈~',
	', 썩 물러나지 못할까?',
	'~~ 뒷산에서 나무좀 베어오너라~',
	', 네놈은 주는거 없이 밉구나, \n허허~'
]






























