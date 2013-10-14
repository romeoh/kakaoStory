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

	data.title = '내가 유학갈 대학교';
	data.url = 'http://goo.gl/zru5pG';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	majorIdx = process(dataMajor)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 ' + database[idx]['school'] + '에 유학갑니다.\n'
	post += '전공: ' + dataMajor[majorIdx] + '\n\n';
	post += '열공하고 오세요~';
	data.post = post;
	
	data.desc = '우와~ ' + database[idx]['school'] + ' 나오셨네요~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[idx]['photo'];

	sendData(data);
}


database = [
	{'photo':'university1.png', 'school':'하버드 대학교'},
	{'photo':'university2.png', 'school':'스탠포드 대학교'},
	{'photo':'university3.png', 'school':'옥스포드 대학교'},
	{'photo':'university4.png', 'school':'캠브리지 대학교'},
	{'photo':'university5.png', 'school':'콜럼비아 대학교'},
	{'photo':'university6.png', 'school':'버클리 대학교'},
	{'photo':'university7.png', 'school':'버클리 음악대학교'},
	{'photo':'university8.png', 'school':'프린스턴 대학교'},
	{'photo':'university9.png', 'school':'시카고 대학교'},
	{'photo':'university10.png', 'school':'예일 대학교'},
	{'photo':'university11.png', 'school':'캘리포니아 공과 대학교'},
	{'photo':'university12.png', 'school':'펜실베니아 대학교'},
	{'photo':'university13.png', 'school':'코넬 대학교'},
	{'photo':'university14.png', 'school':'도쿄 대학교'},
	{'photo':'university15.png', 'school':'교토 대학교'},
	{'photo':'university16.png', 'school':'캘리포니아 대학교'},
	{'photo':'university17.png', 'school':'존스홉킨스 대학교'},
	{'photo':'university18.png', 'school':'취리히 대학교'},
	{'photo':'university19.png', 'school':'뉴욕 대학교'},
	{'photo':'university20.png', 'school':'샌디에고 대학교'},
	{'photo':'university21.png', 'school':'위스콘신매디슨 대학교'},
	{'photo':'university22.png', 'school':'매사추세츠 공과 대학교'},
	{'photo':'university23.png', 'school':'듀크 대학교'},
	{'photo':'university24.png', 'school':'토론토 대학교'},
	{'photo':'university25.png', 'school':'오사카 대학교'},
	{'photo':'university26.png', 'school':'제네바 대학교'},
	{'photo':'university27.png', 'school':'코펜하겐 대학교'},
	{'photo':'university28.png', 'school':'시드니 대학교'},
	{'photo':'university29.png', 'school':'와세다 대학교'}
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




























