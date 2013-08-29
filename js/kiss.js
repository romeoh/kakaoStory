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

	data.title = '누구와 키스하나';
	data.url = 'http://goo.gl/Aa6wS';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
		idx = process(database)
	} else if (sexType == 'girl') {
		database = dataGirl
		idx = process(database)
	}

	who = database[idx]['name']
	photo = database[idx]['photo']
	howIdx = process(dataHow)
	whereIdx = process(dataWhere)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 ' + who + '\n';
	post += dataWhere[whereIdx] + ' ' + dataHow[howIdx] + ' 키스합니다.';
	data.post = post;
	
	data.desc = who + ' 키스합니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + photo;

	sendData(data);
}



dataWhere = [
	'길거리에서',
	'차 안에서',
	'버스에서',
	'지하철에서',
	'명동 한복판에서',
	'테헤란로에서',
	'클럽에서',
	'해장국집에서',
	'호프집에서',
	'회사에서',
	'숲속에서',
	'집에서',
	'회의실에서',
	'집앞에서'
]

dataHow = [
	'가볍게',
	'진하게',
	'열정적으로',
	'온힘을 다해',
	'이마에 살짝',
	'볼에 살짝',
	'입술에',
	'로멘틱하게',
	'나도 모르게',
	'술김에',
	'의도치 않게',
	'미친듯이'
]

dataBoy = [
	{'photo': 'kissM01.jpg', 'name': '여자친구와', 'msg':''},
	{'photo': 'kissM02.jpg', 'name': '클럽에서 만난 여성과', 'msg':''},
	{'photo': 'kissM03.jpg', 'name': '길거리 지나가는 여성과', 'msg':''},
	{'photo': 'kissM04.jpg', 'name': '지하철 옆자리에 앉은 여성과', 'msg':''},
	{'photo': 'kissM05.jpg', 'name': '출근할때 마주치던 그 여성과', 'msg':''},
	{'photo': 'kissM06.jpg', 'name': '직장 동료와', 'msg':''},
	{'photo': 'kissM07.jpg', 'name': '강아지와', 'msg':''},
	{'photo': 'kissM08.jpg', 'name': '모기와', 'msg':''},
	{'photo': 'kissM09.jpg', 'name': '호떡파는 아주머니와', 'msg':''},
	{'photo': 'kissM10.jpg', 'name': '호프집 알바녀와', 'msg':''},
	{'photo': 'kissM01.jpg', 'name': '동생친구와', 'msg':''},
	{'photo': 'kissM01.jpg', 'name': '아는 동생과', 'msg':''},
	{'photo': 'kissM01.jpg', 'name': '아는 누나와', 'msg':''},
	{'photo': 'kissM11.jpg', 'name': '해장국집에서 일하시는 아주머니와', 'msg':''},
	{'photo': 'kissM01.jpg', 'name': '짝사랑하는 그녀와', 'msg':''},
	{'photo': 'kissM12.jpg', 'name': '오나미와', 'msg':''},
	{'photo': 'kissM13.jpg', 'name': '박지선과', 'msg':''},
	{'photo': 'kissM14.jpg', 'name': '정주리와', 'msg':''},
	{'photo': 'kissM15.jpg', 'name': '신봉선과', 'msg':''},
	{'photo': 'kissM16.jpg', 'name': '이민정과', 'msg':''},
	{'photo': 'kissM17.jpg', 'name': '아이유와', 'msg':''},
	{'photo': 'kissM18.jpg', 'name': '김태희와', 'msg':''}
]

dataGirl = [
	{'photo': 'kissF01.jpg', 'name': '남자친구와', 'msg':''},
	{'photo': 'kissM02.jpg', 'name': '클럽에서 만난 남자와', 'msg':''},
	{'photo': 'kissM03.jpg', 'name': '길거리 지나가는 남자와', 'msg':''},
	{'photo': 'kissM04.jpg', 'name': '지하철 옆자리에 앉은 남자와', 'msg':''},
	{'photo': 'kissM05.jpg', 'name': '출근할때 마주치는 그 남자와', 'msg':''},
	{'photo': 'kissF02.jpg', 'name': '부장님과', 'msg':''},
	{'photo': 'kissF03.jpg', 'name': '팀장님과', 'msg':''},
	{'photo': 'kissM07.jpg', 'name': '강아지와', 'msg':''},
	{'photo': 'kissM08.jpg', 'name': '모기와', 'msg':''},
	{'photo': 'kissF01.jpg', 'name': '직장 동료와', 'msg':''},
	{'photo': 'kissF04.jpg', 'name': '편의점 알바남과', 'msg':''},
	{'photo': 'kissF01.jpg', 'name': '동생친구와', 'msg':''},
	{'photo': 'kissF01.jpg', 'name': '아는 동생과', 'msg':''},
	{'photo': 'kissF01.jpg', 'name': '아는 오빠와', 'msg':''},
	{'photo': 'kissF01.jpg', 'name': '짝사랑 하는 그 남자와', 'msg':''},
	{'photo': 'kissF01.jpg', 'name': '나한테 작업거는 작업남과', 'msg':''},
	{'photo': 'kissF05.jpg', 'name': '김제동과', 'msg':''},
	{'photo': 'kissF06.jpg', 'name': '김영철과', 'msg':''},
	{'photo': 'kissF07.jpg', 'name': '옥동자와', 'msg':''},
	{'photo': 'kissF08.jpg', 'name': '이승기와', 'msg':''},
	{'photo': 'kissF09.jpg', 'name': '원빈과', 'msg':''},
	{'photo': 'kissF10.jpg', 'name': '강동원과', 'msg':''}
]






























