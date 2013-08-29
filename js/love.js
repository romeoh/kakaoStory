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

	data.title = '나는 결국 누구와 결혼하나';
	data.url = 'http://goo.gl/DPb6h';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
	} else if (sexType == 'girl') {
		database = dataGirl;
	}
	who = database[process(database)]['name']
	photo = database[process(database)]['photo']
	when = dataWhen[process(dataWhen)]
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 결국 ' + who + ' ' + when + '에 결혼하게 됩니다.';
	data.post = post;
	
	data.desc = who + ' 결혼합니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + photo;

	sendData(data);
}


dataBoy = [
	{'photo': 'loveM01.jpg', 'name': '여자친구와', 'msg':''},
	{'photo': 'loveM02.jpg', 'name': '클럽에서 만난 여성과', 'msg':''},
	{'photo': 'loveM03.jpg', 'name': '길거리에서 헌팅한 여성과', 'msg':''},
	{'photo': 'loveM04.jpg', 'name': '소개팅에서 만나는 여성과', 'msg':''},
	{'photo': 'loveM05.jpg', 'name': '선본 여성과', 'msg':''},
	{'photo': 'loveM06.jpg', 'name': '단골 호프집 알바녀와', 'msg':''},
	{'photo': 'loveM07.jpg', 'name': '초등학교 동창과', 'msg':''},
	{'photo': 'loveM08.jpg', 'name': '기억속의 첫사랑과', 'msg':''},
	{'photo': 'loveM09.jpg', 'name': '회사 경리팀 직원과', 'msg':''},
	{'photo': 'loveM10.jpg', 'name': '학교 조교와', 'msg':''},
	{'photo': 'loveM11.jpg', 'name': '인터넷 채팅녀와', 'msg':''},
	{'photo': 'loveM12.jpg', 'name': '나이트클럽 부킹녀와', 'msg':''},
	{'photo': 'loveM13.jpg', 'name': '지금 짝사랑하는 그녀와', 'msg':''},
	{'photo': 'loveM14.jpg', 'name': '아는 누나와', 'msg':''},
	{'photo': 'loveM15.jpg', 'name': '학교 후배와', 'msg':''},
	{'photo': 'loveM16.jpg', 'name': '오나미와', 'msg':''},
	{'photo': 'loveM17.jpg', 'name': '박지선과', 'msg':''},
	{'photo': 'loveM18.jpg', 'name': '정주리와', 'msg':''},
	{'photo': 'loveM19.jpg', 'name': '이민정과', 'msg':''},
	{'photo': 'loveM20.jpg', 'name': '아아유와', 'msg':''},
	{'photo': 'loveM21.jpg', 'name': '이시영과', 'msg':''},
	{'photo': 'loveM22.jpg', 'name': '고준희와', 'msg':''}
]

dataGirl = [
	{'photo': 'loveF01.jpg', 'name': '남자친구와', 'msg':''},
	{'photo': 'loveF02.jpg', 'name': '클럽에서 만난 남자와', 'msg':''},
	{'photo': 'loveF03.jpg', 'name': '길거리 자나가는 남자와', 'msg':''},
	{'photo': 'loveF04.jpg', 'name': '소개팅한 남자와', 'msg':''},
	{'photo': 'loveF05.jpg', 'name': '선본 남자와', 'msg':''},
	{'photo': 'loveF06.jpg', 'name': '단골 호프집 사장님과', 'msg':''},
	{'photo': 'loveF07.jpg', 'name': '초등학교 동창과', 'msg':''},
	{'photo': 'loveF08.jpg', 'name': '기억속의 첫사랑과', 'msg':''},
	{'photo': 'loveF09.jpg', 'name': '회사 영업팀 과장님과', 'msg':''},
	{'photo': 'loveF10.jpg', 'name': '학교 조교와', 'msg':''},
	{'photo': 'loveF11.jpg', 'name': '인터넷 채팅남과', 'msg':''},
	{'photo': 'loveF12.jpg', 'name': '나이트클럽 부킹남과', 'msg':''},
	{'photo': 'loveF13.jpg', 'name': '지금 짝사랑하는 그와', 'msg':''},
	{'photo': 'loveF14.jpg', 'name': '아는 오빠와', 'msg':''},
	{'photo': 'loveF15.jpg', 'name': '학교 후배와', 'msg':''},
	{'photo': 'loveF16.jpg', 'name': '김제동과', 'msg':''},
	{'photo': 'loveF17.jpg', 'name': '김영철과', 'msg':''},
	{'photo': 'loveF18.jpg', 'name': '원빈과', 'msg':''},
	{'photo': 'loveF19.jpg', 'name': '강동원과', 'msg':''},
	{'photo': 'loveF20.jpg', 'name': '소지섭과', 'msg':''},
	{'photo': 'loveF21.jpg', 'name': '장혁과', 'msg':''}
]

dataWhen = [
	'6개월내',
	'9개월내',
	'1년내',
	'1년 6개월내',
	'2년내',
	'3년내',
	'5년내',
	'7년내',
	'10년내',
	'15년내',
	'20년내'
]




























