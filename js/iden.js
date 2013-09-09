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
		,twit = ''

	data.title = '성격특징그래프';
	data.url = 'http://goo.gl/IYiDpn';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	var  value1 = getRandom(0, 99)
		,value2 = getRandom(0, 99)
		,value3 = getRandom(0, 99)
		,value4 = getRandom(0, 99)
		,value5 = getRandom(0, 99)
		,value6 = getRandom(0, 99)
		,value7 = getRandom(0, 99)
		,value8 = getRandom(0, 99)
		,value9 = getRandom(0, 99)
		,value10 = getRandom(0, 99)
	
	post += '[' + data.title + ']\n';
	post += userName + '님의 성격의 성격특징 그래프입니다. \n\n';
	post += '❋　의지력: ' + getGraph(value1) + ' '+value1 + '%\n';
	post += '❋　사교력: ' + getGraph(value2) + ' '+value2 + '%\n';
	post += '❋　인내력: ' + getGraph(value3) + ' '+value3 + '%\n';
	post += '❋　독립심: ' + getGraph(value4) + ' '+value4 + '%\n';
	post += '❋　신뢰성: ' + getGraph(value5) + ' '+value5 + '%\n';
	post += '❋　배려심: ' + getGraph(value6) + ' '+value6 + '%\n';
	post += '❋유머감각: ' + getGraph(value7) + ' '+value7 + '%\n';
	post += '❋　협동심: ' + getGraph(value8) + ' '+value8 + '%\n';
	post += '❋　표현력: ' + getGraph(value9) + ' '+value9 + '%\n';
	post += '❋　성실도: ' + getGraph(value10) + ' '+value10 + '%';

	twit += '[' + data.title + ']\n';
	twit += '의지력: '+value1 + '%\n';
	twit += '사교력: '+value2 + '%\n';
	twit += '인내력: '+value3 + '%\n';
	twit += '독립심: '+value4 + '%\n';
	twit += '신뢰성: '+value5 + '%\n';
	twit += '배려심: '+value6 + '%\n';
	twit += '유머감각: '+value7 + '%\n';
	twit += '협동심: '+value8 + '%\n';
	twit += '표현력: '+value9 + '%\n';
	twit += '성실도:  '+value10 + '%';
	
	data.post = post;
	data.twit = twit;
	
	data.desc = '성격을 파악하는 특징 10가지';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/iden.png';

	sendData(data);
}

function getGraph(value){
	return database[Math.round(value/10)];
}


database = [
	'□□□□□□□□□□',
	'■□□□□□□□□□',
	'■■□□□□□□□□',
	'■■■□□□□□□□',
	'■■■■□□□□□□',
	'■■■■■□□□□□',
	'■■■■■■□□□□',
	'■■■■■■■□□□',
	'■■■■■■■■□□',
	'■■■■■■■■■□',
	'■■■■■■■■■■'
]































