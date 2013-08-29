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

	data.title = '내가 세상에 태어난 이유';
	data.url = 'http://goo.gl/8ns8E';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님이 세상에 태어난 이유는 \n';
	post += database[idx]['result'];
	data.post = post;
	
	data.desc = database[idx]['result'];
	data.img = 'http://romeoh.github.io/kakaoStory/img/cake.jpg';

	sendData(data);
}



database = [
	{'result': '돈을 많이 벌어서 잘먹고 잘살기 위해서 입니다.'},
	{'result': '취직하기 위해서 입니다.'},
	{'result': '영화배우가 되기 위해서 입니다.'},
	{'result': '부모님이 시켜서 입니다.'},
	{'result': '월급을 많이 받고 싶어서 입니다.'},
	{'result': '결혼하고 싶어서 입니다.'},
	{'result': '해외여행을 하고 싶어서 입니다.'},
	{'result': '별 이유 없습니다.'},
	{'result': '내 의지가 아니었습니다.'},
	{'result': '생일빵을 받고 싶어서 입니다.'},
	{'result': '애인이랑 무인도에 놀러가고 싶어서 입니다.'},
	{'result': '우리나라를 전쟁에서 구하고 싶어서 입니다.'},
	{'result': '부모님의 실수였습니다.'},
	{'result': '연예인을 만나보고 싶어서 입니다.'},
	{'result': '최고의 가수가 되고 싶어서 입니다.'},
	{'result': '짜장면을 먹고 싶어서 입니다.'},
	{'result': '우주 여행을 하고싶어서 입니다.'},
	{'result': '군대에 가보고 싶어서 입니다.'},
	{'result': '축구 선수가 되고 싶어서 입니다.'},
	{'result': '모태솔로를 벗어나기 위해서 입니다.'},
	{'result': '국가 기밀입니다.'},
	{'result': '일진이 되고 싶어서 입니다.'},
	{'result': '주차요원이 되고 싶어서 입니다.'},
	{'result': '사랑받기 위해 태어났습니다.'},
	{'result': '욕먹고 싶어서 태어났습니다.'},
	{'result': '해적이 되고 싶어서 입니다.'}
]
































