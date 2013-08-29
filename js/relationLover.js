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

	data.title = '내 애인과 나는 전생에 무슨 관계였나';
	data.url = 'http://goo.gl/FSBT3';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		loverType = '남자친구'
	} else if (sexType == 'girl') {
		loverType = '여자친구';
	}

	data.title = '내 ' + loverType + '과 나는 전생에 무슨 관계였나';

	idx = process(dataRelation)
	
	post += '[' + data.title + ']\n\n';
	post += '나는 전생에 지금의 내' + loverType + dataRelation[idx]['name'] + '\n';
	post += '관계: ' + dataRelation[idx]['relation'];
	data.post = post;
	
	data.desc = '나와 내'+loverType+'는 ' + dataRelation[idx]['relation'] + '관계 였습니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/img/relationLover.jpg';

	sendData(data);
}



dataRelation = [
	{'name':'에게 돈을 빌려 안갑고 죽었습니다.', 'relation':'채권 채무자'},
	{'name':'의 말썽꾸러기 딸이었습니다.', 'relation':'부모자식'},
	{'name':'의 바람둥이 남편이었습니다.', 'relation':'부부'},
	{'name':'에게 큰 사기를 치고 죽었습니다.', 'relation':'친구'},
	{'name':'를 매일 괴롭히는 학교 친구였습니다.', 'relation':'학교친구'},
	{'name':'가 항상 부러워 하는 엄친딸이었습니다.', 'relation':'엄마친구딸'},
	{'name':'를 매일 때리는 동네 깡패였습니다.', 'relation':'동네 형아'},
	{'name':'와 아무관계 없었습니다.', 'relation':'근데 지금 왜?..'},
	{'name':'의 부모였습니다.', 'relation':'부모자식'},
	{'name':'의 말 안듣는 동생이었습니다.', 'relation':'형제'},
	{'name':'의 부모를 죽인 원수였습니다.', 'relation':'원수'},
	{'name':'와 의리 좋은 친구였습니다.', 'relation':'친구'},
	{'name':'와 사랑하는 사이였습니다.', 'relation':'애인'},
	{'name':'인생의 스승이었습니다.', 'relation':'멘토'}
]





























