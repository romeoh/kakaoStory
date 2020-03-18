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

	data.title = '대신 말해줌';
	data.url = 'http://bitly.kr/91CkndCP';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	majorIdx = process(dataMajor)
	
	post += '[' + data.title + ']\n\n';
	post += '여러분!!\n' + userName + '님은 ' + database[idx]['desc'] + '\n'
	post += '진짜예요';
	data.post = post;
	
	data.desc = '나 잘했져?';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[idx]['photo'];

	sendData(data);
}


database = [
	{'photo':'animal3.png', 'desc':'당신에게 사랑한다는 말을 듣고 싶어합니다.'},
	{'photo':'animal3.png', 'desc':'모르는 사람에게 사랑한다는 말을 듣고 싶어합니다.'},
	{'photo':'animal3.png', 'desc':'당신에게 포근하게 안기고 싶어합니다.'},
	{'photo':'animal3.png', 'desc':'당신에게 개인적으로 메세지를 받고 싶어합니다.'},
	{'photo':'animal3.png', 'desc':'카톡 아이디를 따이길 원합니다.'},
	{'photo':'animal3.png', 'desc':'당신에게 데이트 신청을 받기를 원합니다.'},
	{'photo':'animal3.png', 'desc':'오바하지 말라는 소리를 듣고 싶어합니다.'},
	{'photo':'animal3.png', 'desc':'좋아요를 눌러주시기를 원합니다.'},
	{'photo':'animal3.png', 'desc':'이 글을 공유해 주시길 원합니다.'},
	{'photo':'animal3.png', 'desc':'이 글에 답글을 해주시길 원합니다.'},
	{'photo':'animal3.png', 'desc':'인싸라는 소리 듣길 원합니다.'},
	{'photo':'animal3.png', 'desc':'당신이랑 단 둘이 여행가고 싶어 합니다.'},
	{'photo':'animal3.png', 'desc':'당신과 사귀고 싶어 합니다.'},
	{'photo':'animal3.png', 'desc':'세상이 자기 중심으로 돌아가길 원합니다.'},
	{'photo':'animal3.png', 'desc':'그냥 놀고 먹고 싶어합니다.'},
	{'photo':'animal3.png', 'desc':'맨날 맨날 관심 받고 싶어합니다.'},
	{'photo':'animal3.png', 'desc':'당신에게 고백 받고 싶어합니다.'},
	{'photo':'animal3.png', 'desc':'맨날 자기만 봐주길 원합니다.'}
]


dataMajor = [
	'법학과',
	'경영학과',
	'체육학과',
	'간호학과',
	'식품영양학과',
	'농축산학과',
	'기계공학과',
	'인터넷검색학과',
	'의학과',
	'가정학과',
	'패션디자인학과',
	'컴퓨터공학과',
	'원자력학과',
	'우주공학과',
	'물리학과',
	'화학과',
	'생명공학과',
	'실용음악과',
	'작곡과',
	'회화과',
	'작곡과',
	'경제학과',
	'정치외교학과',
	'심리학과',
	'국어교육과',
	'한문교육과'
]




























