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

	data.title = '당신이 생각하는 당신의 체형';
	data.url = 'http://goo.gl/aW0pob';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	
	tall = process(140, 199)
	weight = process(35, 150)
	tall2 = process(140, 199)
	weight2 = process(35, 150)
	idx3 = process(dataRel)
	
	post += '[' + data.title + ']\n\n';
	post += '당신이 생각하는 당신의 키는 ' + tall + 'cm이고,\n';
	post += '당신의 몸무게는 ' + weight + 'kg이지만,\n';
	post += dataRel[idx3] + ' ' + userName + '님을 ' + tall2 + 'cm에 ' + weight2 + 'kg 정도 된다고 생각합니다.';
	data.post = post;
	
	data.desc = '그렇게 안보이는데..';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/dang2.png';

	sendData(data);
}




 dataRel = [
	'당신의 친구들은',
	'당신의 엄마는',
	'당신의 선생님은',
	'당신의 학교 일진은',
	'당신의 할머니는',
	'당신의 학교 교장선생님은',
	'당신의 체육 선생님은',
	'당신의 국어 선생님은',
	'당신의 학교 학생주임 선생님은',
	'당신의 학교 학생 회장은',
	'당신의 학교 얼짱은',
	'당신의 아빠는',
	'당신의 베스트 프렌드는',
	'이 글을 보는 사람들은',
	'당신의 카스 친구들은'
]




























