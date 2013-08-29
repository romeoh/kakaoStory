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

	data.title = '나는 언제까지 솔로인가?';
	data.url = 'http://goo.gl/GOIAaR';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님은 ' + database[idx]['when'] + '까지만 솔로입니다.\n\n';
	post += '그 후로 부터는 쭉~ 커플입니다.';
	data.post = post;
	
	data.desc = '조금만 참자!!\n' + database[idx]['when'] + '까지만...';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/solo.png';

	sendData(data);
}


database = [
	{'when': '남북이 통일되는 날'},
	{'when': '일본이 역사를 진심으로 반성하는 날'},
	{'when': '이번 여름'},
	{'when': '올해'},
	{'when': '내년'},
	{'when': '이번 달'},
	{'when': '다음 달'},
	{'when': '로또에 당첨되는 날'},
	{'when': '이번 추석'},
	{'when': '내년 발렌타인데이'},
	{'when': '내년 화이트데이'},
	{'when': '갤럭시S8이 출시되는 날'},
	{'when': '아이폰9S가 출시되는 날'},
	{'when': '올해 첫눈 오는날'},
	{'when': '다음 대통령선거 날'},
	{'when': '내년 만우절'},
	{'when': '퇴직금 받는 날'},
	{'when': '이번 수능일'},
	{'when': '이번 크리스마스'},
	{'when': '이번 생애'}
] 
































