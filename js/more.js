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

	data.title = '비타500 한병 더';
	data.url = 'http://goo.gl/CRtZwE';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	m = process(0, 4)
	if (m == 0) {
		img = 'more1.png';
		txt = '"축"당첨 비타500 한병더!!'
		de = '앗싸 한병 더'
	} else {
		img = 'more2.png'
		txt = '비타500 다음기회에 행운을~'
		de = '다음기회에 행운을'
	}

	post += '[' + data.title + ']\n\n';
	post += userName + '님은 ' + txt;
	data.post = post;
	
	data.desc = de;
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/'+img;

	sendData(data);
}
































