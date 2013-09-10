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
		,str = ''
		,tstr = ''

	data.title = '이성을 만나는 시기';
	data.url = 'http://goo.gl/HoznT';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	
	birthYear = parseInt( M('#userAge').val(), 10)
	firstYear = birthYear + 17
	for (var i=0; i<53; i++) {
		var value = getRandom(0, 99)
		str += (firstYear + i) +'년('+(18+i)+'세) ' + getGraph(value) + ' '+value+'%\n'
		tstr += (18+i)+'세 '+value+'%\n'
	}

	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님이 이성을 만나는 시기입니다.\n\n';
	post += str;

	twit += '[' + data.title + ']\n\n';
	twit += tstr;
	
	data.post = post;
	data.twit = twit;
	
	data.desc = '이성을 만나는 시기';
	data.img = 'http://romeoh.github.io/kakaoStory/img/relationLover.jpg';

	sendData(data);
}


function getGraph(value){
	return data[Math.round(value/10)];
}

data = [
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









