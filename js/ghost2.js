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

	data.title = '난 무슨귀신이 될까?';
	data.url = 'http://goo.gl/VtKRql';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 죽어서\n';
	post += database[idx];
	data.post = post;
	
	data.desc = '무섭쥐~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/ghost.png';

	sendData(data);
}


database = [
	'미라가 됩니다.',
	'프랑켄슈타인이 됩니다.',
	'처녀귀신이 됩니다.',
	'뱀파이어가 됩니다.',
	'좀비가 됩니다.',
	'강시가 됩니다.',
	'늑대인간이 됩니다.',
	'홍콩할매귀신이 됩니다.',
	'디스맨이 됩니다.',
	'도깨비가 됩니다.',
	'마녀가 됩니다.',
	'몽달귀신이 됩니다.',
	'유령이 됩니다.',
	'처키가 됩니다.',
	'구미호가 됩니다.',
	'물귀신이 됩니다.',
	'팔척귀신이 됩니다.',
	'빨간마스크가 돕니다.',
	'달걀귀신이 됩니다.',
	'마성터널귀신이 됩니다.',
	'옥수역귀신이 됩니다.',
	'식신귀신이 됩니다.',
	'저승사자가 됩니다.',
	'여고귀신이 됩니다.',
	'봉천동귀신이 됩니다.'
]































