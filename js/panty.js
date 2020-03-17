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

	data.title = '나에게 어울리는 팬티색깔?';
	data.url = 'http://bitly.kr/uxg8GLtN';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	majorIdx = process(dataMajor)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 지금 ' + database[idx]['color'] + '를 입고 계십니다.\n'
	post += '딱 좋아~';
	data.post = post;
	
	data.desc = '쉿 비밀이야.. ' + database[idx]['color'];
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[idx]['photo'];

	sendData(data);
}


database = [
	{'photo':'panty.png', 'color':'빨간색 망사 팬티'},
	{'photo':'panty.png', 'color':'핑크색 망사 팬티'},
	{'photo':'panty.png', 'color':'노랑색 망사 팬티'},
	{'photo':'panty.png', 'color':'검정색 망사 팬티'},
	{'photo':'panty.png', 'color':'빨간색 물방울 도트 팬티'},
	{'photo':'panty.png', 'color':'핑크색 물방울 도트 팬티'},
	{'photo':'panty.png', 'color':'노란색 뽀로로 물방울 도트 팬티'},
	{'photo':'panty.png', 'color':'검정색 펭수 물방울 도트 팬티'},
	{'photo':'panty.png', 'color':'찢어진 나일론 팬티'},
	{'photo':'panty.png', 'color':'펑크 가죽 팬티'},
	{'photo':'panty.png', 'color':'노란색 모시 팬티'},
	{'photo':'panty.png', 'color':'찢어진 면 팬티'},
	{'photo':'panty.png', 'color':'노란색 얼룩 면 팬티'},
	{'photo':'panty.png', 'color':'핑크 네온사인 팬티'},
	{'photo':'panty.png', 'color':'파란 야광 팬티'},
	{'photo':'panty.png', 'color':'투명한 노 팬티'},
	{'photo':'panty.png', 'color':'하얀색 부직포 팬티'},
	{'photo':'panty.png', 'color':'아방가르드 폴리우레탄 데님 팬티'},
	{'photo':'panty.png', 'color':'지 동생 팬티'}
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




























