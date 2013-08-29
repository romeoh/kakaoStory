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

	data.title = '내반쪽은 어디있나?';
	data.url = 'http://goo.gl/IJ4B5';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(dataJob)
	distance = process(1, 300)

	if (sexType == 'boy') {
		data.title = '내 남친은 어디있나?';
		post += '[' + data.title + ']\n\n';
		post += userName + '님의 남친의 직업은 ' + dataJob[idx] + '입니다.\n';
	} else if (sexType == 'girl') {
		data.title = '내 여친은 어디있나?';
		post += '[' + data.title + ']\n\n';
		post += userName + '님의 남친의 직업은 ' + dataJob[idx] + '입니다.\n';
	}
	
	
	post += '현재 ' + userName + '님과 ' + distance + 'km 떨어진곳에 있으며,\n';
	post += getRandom(1, 36) + '개월 뒤 처음으로 만날 예정입니다.';
	data.post = post;
	
	data.desc = distance + 'km 전방에 있습니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/img/where.jpg';

	sendData(data);
}



dataJob = [
	'의사',
	'판사',
	'국회의원',
	'검사',
	'공무원',
	'청소부',
	'군인',
	'백수',
	'고시생',
	'편의점 알바생',
	'컴퓨터 프로그래머',
	'디자이너',
	'펀드매니저',
	'경찰',
	'도둑놈',
	'사기꾼',
	'이마트 캐셔',
	'경비원',
	'간호사',
	'선생님',
	'건달',
	'조직폭려배 행동대장',
	'학생',
	'당구장 알바생',
	'택배기사',
	'종합병원 환자',
	'예술가',
	'사업가',
	'슈퍼마켓 판매원',
	'호프집 알바생',
	'거지'
]






























