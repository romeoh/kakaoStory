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

	data.title = '예쁜게 죄라면';
	data.url = 'http://goo.gl/7g0kn1';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		b = '잘생긴게'
	} else if (sexType == 'girl') {
		b = '예쁜게'
	}
	idx = process(database);
	
	post += '[' + data.title + ']\n\n';
	post += b + ' 죄라면 ' + userName + '님' + database[idx] + '\n\n';
	data.post = post;
	
	data.desc = '대법원은 오늘 ' + userName + '에게 최종 판결을 내렸습니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/crime2.png';

	sendData(data);
}



database = [
	'은 무죄 입니다.',
	'의 형량은 무죄입니다.',
	'은 청렴결백청합니다.',
	'은 당장 석방입니다.',
	'은 모범시민입니다.',
	'은 훈방조치입니다.',
	'은 감옥에 가지 않습니다.',
	'은 죄가 없습니다.',
	'은 감옥근처에 얼씬도 못합니다.',
	'은 무죄에 포상금까지 받습니다.',
	'은 정말 착하십니다.',
	'처럼 착한사람은 한번도 못봤습니다.',
	'은 벌금형입니다.',
	'은 감옥에서 하루있다가 석방됩니다.',
	'은 징역 1년입니다.',
	'은 징역 1주일입니다.',
	'은 중죄입니다.',
	'은 징역 10년입니다.',
	'은 징역 100년입니다.',
	'은 징역 200년입니다.',
	'은 징역 999+년입니다.',
	'은 무기징역입니다.',
	'은 사형입니다.',
	'은 상습범입니다.',
	'은 즉결사형입니다.',
	'은 평생 감옥에서 못나옵니다.',
	'은 자손대대로 사형입니다.'
]
































