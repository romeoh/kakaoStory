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

	data.title = '태어나서 처음한말, 죽기전에 마지막말';
	data.url = 'http://goo.gl/Jr6q0';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	firstIdx = process(dataFirst)
	lastIdx = process(dataLast)
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님이 태어나서 처음 한말은 \n';
	post += '"' + dataFirst[firstIdx] + '" 이며,\n\n';
	post += '죽기전에 하는 마지막말은 \n';
	post += '"' + dataLast[lastIdx] + '" 입니다.';
	data.post = post;
	
	data.desc = dataLast[lastIdx];
	data.img = 'http://romeoh.github.io/kakaoStory/img/last.png';

	sendData(data);
}


dataFirst = [
	'응애~',
	'뿌잉~',
	'오잉?',
	'Day One',
	'이제 시작이다!!',
	'인생 뭐있냐?',
	'출바~알~',
	'에공~ 고생 시작이구만~',
	'이거 흥미로운데~',
	'나 지금 떨고있니?',
	'날 내버려둬~',
	'거울 좀 주세요~',
	'GO! GO~',
	'대~ 한민국~'
]

dataLast = [
	'잘지내~',
	'굿바이~',
	'꺢~',
	'으악~',
	'이런 신발끈~',
	'이 게시판~',
	'아~ 사과나무 안 심었다~',
	'담에 봐~',
	'잘 살다 갑니다~',
	'역시 난 멋쪘어~',
	'그래도 지구는 돌겠네~',
	'난 혼자 못 가~',
	'뜨악~',
	'깨꾸딱~'
]































