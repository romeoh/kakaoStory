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

	data.title = '인사이드아웃';
	data.url = 'http://goo.gl/YgbqtY';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 지금 감정은\n';
	post += '"' + database[idx].char + '" 입니다.';
	data.post = post;
	
	data.desc = database[idx].desc;
	data.img = 'http://romeoh.github.io/kakaoStory/images/insideout/' + database[idx].img;

	sendData(data);
}


database = [
	{'char': '기쁨', 'img': 'insideout1.png', 'desc': '모든게 다 잘될꺼야'},
	{'char': '슬픔', 'img': 'insideout2.png', 'desc': '세상은 너무 슬퍼'},
	{'char': '버럭', 'img': 'insideout3.png', 'desc': '화가 난다 화가 나!'},
	{'char': '까칠', 'img': 'insideout4.png', 'desc': '어쩌라고?'},
	{'char': '소심', 'img': 'insideout5.png', 'desc': '앉으나 서나 걱정이군...'}
]































