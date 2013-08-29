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
		,space = ''

	data.title = '나의 연관검색어';
	data.url = 'http://goo.gl/uAj2cA';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	
	word = shuffle(database)
	userNameLength = 36 - userName.length
	idx = process(database)

	for (var i=0; i<userNameLength; i++) {
		space += ' ';
	}

	post += '[' + data.title + ']\n\n';
	post += '┏━━━━━━━━━━━━━━━━━━━━━━━━\n';
	post += '┃' + userName + space + '▼ [검색]\n';
	post += '┡━━━━━━━━━━━━━━━━━━━━━━━━\n';

	for (var i=0; i<5; i++) {
		post += '│' + userName + ' ' + word[i]['key'] + ' \n';
		if (i != 4) {
			post += '├────────────────────────\n';
		}
	}
	post += '└────────────────────────';
	data.post = post;
	
	data.desc = '악플금지!!\n안보인다 막말마라 추적하면 다나온다.';
	data.img = 'http://romeoh.github.io/kakaoStory/img/keyword.png';

	sendData(data);
}

database = [
	{'key':'키'},
	{'key':'공항장애'},
	{'key':'야동'},
	{'key':'클라라 스캔들'},
	{'key':'욕'},
	{'key':'단신'},
	{'key':'머리크기'},
	{'key':'실제성격'},
	{'key':'멘붕'},
	{'key':'초딩몸매'},
	{'key':'입냄새'},
	{'key':'비호감'},
	{'key':'나이'},
	{'key':'동안'},
	{'key':'카카오톡주소'},
	{'key':'폐인'},
	{'key':'냄새'},
	{'key':'프로필'},
	{'key':'어장관리'},
	{'key':'썰렁'},
	{'key':'얼짱'},
	{'key':'폭풍노안'},
	{'key':'아이큐'},
	{'key':'내꺼야'},
	{'key':'재산'},
	{'key':'애교'},
	{'key':'억대연봉'},
	{'key':'안습'},
	{'key':'매너손'},
	{'key':'잠옷패션'},
	{'key':'공항패션'},
	{'key':'과거사진'},
	{'key':'성형전 사진'},
	{'key':'음모론'},
	{'key':'모태솔로'},
	{'key':'바람기'},
	{'key':'술주정'},
	{'key':'몸무게'},
	{'key':'속도위반'},
	{'key':'연락처'},
	{'key':'저질몸매'},
	{'key':'망언'},
	{'key':'몸개그'},
	{'key':'동영상'},
	{'key':'실제키'},
	{'key':'노출'},
	{'key':'개드립'},
	{'key':'변태'},
	{'key':'나온 방송'},
	{'key':'스타일'},
	{'key':'혈액형'},
	{'key':'삼각관계'},
	{'key':'못친소'},
	{'key':'깔창'}
]






















































































