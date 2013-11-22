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

	data.title = '살풀이';
	data.url = 'http://goo.gl/0EkXpa';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	dx1 = process(database);
	dx2 = process(database);
	dx3 = process(database);
	dx4 = process(database);
	dx5 = process(database);
	dx6 = process(database);
	dx7 = process(database);
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 살풀이입니다.\n';
	
	post += '♚ 재살: ' + database[dx1] + '\n';
	post += '  -격렬한 싸움이나 사고에 휩슬림\n\n';
	
	post += '♛ 월살: ' + database[dx2] + '\n';
	post += '  -장애나 병액 등으로 불운이 생김\n\n';

	post += '♜ 원진살: ' + database[dx3] + '\n';
	post += '  -서로 미워함\n\n';

	post += '♝ 역마살: ' + database[dx4] + '\n';
	post += '  -여기저기 돌아다님\n\n';

	post += '♞ 도화살: ' + database[dx5] + '\n';
	post += '  -주색, 성욕, 이성에 대한 지나친 관심\n\n';

	post += '♟ 화개살: ' + database[dx6] + '\n';
	post += '  -유혹에 쉽게 빠져 불륜, 도박, 술꾼이 될수 있음\n\n';

	post += '✙ 과숙살: ' + database[dx7] + '\n';
	post += '  -외롭고 고독함\n\n';
	data.post = post;
	
	data.desc = '살풀이';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/sal.png';

	sendData(data);
}


database = [
	'☆☆☆☆☆ (전혀없음)',
	'★☆☆☆☆ (거의없음)',
	'★★☆☆☆ (별로없음)',
	'★★☆☆☆ (없음)',
	'★★★☆☆ (적당히 있음)',
	'★★★★☆ (많이있음)',
	'★★★★★ (매우많음)'
]





































