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

	data.title = '나에게 어울리는 대학교는?';
	data.url = 'http://bitly.kr/ExB9lqhb';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	majorIdx = process(dataMajor)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님과 어울리는 대학교는 ' + database[idx]['school'] + '입니다.\n'
	post += '전공: ' + dataMajor[majorIdx] + '\n\n';
	post += '딱 맞네요~';
	data.post = post;
	
	data.desc = '우와~ ' + database[idx]['school'] + ' 나오셨네요~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[idx]['photo'];

	sendData(data);
}


database = [
	{'photo':'univ1.png', 'school':'서울대학교'},
	{'photo':'univ2.png', 'school':'고려대학교'},
	{'photo':'univ3.png', 'school':'연세대학교'},
	{'photo':'univ4.png', 'school':'성균관대학교'},
	{'photo':'univ5.png', 'school':'KAIST'},
	{'photo':'univ6.png', 'school':'POSTECH'},
	{'photo':'univ7.png', 'school':'경희대학교'},
	{'photo':'univ8.png', 'school':'한양대학교'},
	{'photo':'univ9.png', 'school':'세종대학교'},
	{'photo':'univ10.png', 'school':'중앙대학교'},
	{'photo':'univ11.png', 'school':'이화여자대학교'},
	{'photo':'univ12.png', 'school':'건국대학교'},
	{'photo':'univ13.png', 'school':'부산대학교'},
	{'photo':'univ14.png', 'school':'울산대학교'},
	{'photo':'univ15.png', 'school':'한국외국어대학교'},
	{'photo':'univ16.png', 'school':'서강대학교'},
	{'photo':'univ17.png', 'school':'가톨릭대학교'},
	{'photo':'univ18.png', 'school':'노인대학교'},
	{'photo':'univ18.png', 'school':'노인대학교'},
	{'photo':'univ18.png', 'school':'노인대학교'},
	{'photo':'univ18.png', 'school':'노인대학교'},
	{'photo':'univ18.png', 'school':'노인대학교'},
	{'photo':'univ18.png', 'school':'노인대학교'},
	{'photo':'univ18.png', 'school':'노인대학교'},
	{'photo':'univ18.png', 'school':'노인대학교'}
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




























