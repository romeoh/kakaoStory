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

	data.title = '진실의 입';
	data.url = 'http://goo.gl/mJYRGS';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (selTruth.value == '-1') {
		alert('진실의 입에 물어보세요.');
		return;
	}
	
	selTruth = document.querySelector('#selTruth')
	answer = process(0, 2)
	result = database[selTruth.value]
	if (answer === 0) {
		answer = result['yes']
		desc = '축하합니다.'
	} else {
		answer = result['no']
		desc = '힘내요.'
	}

	post += '[' + data.title + ']\n\n';
	post += '진실의 입에 물어봤습니다.\n';
	post += '진실의 입아~ "' + result['title'] + '"\n\n\n';
	post += '진실의 입의 답: "' + answer + '"';
	data.post = post;
	
	data.desc = desc;
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/truth2.png';

	sendData(data);
}


database = [
	{'title': '나는 예쁘니?', 'yes':'네, 아주 예쁩니다.', 'no':'아니요. 미안합니다.'},
	{'title': '나는 잘생겼냐?', 'yes':'네, 아주 잘생겼습니다.', 'no':'아니요. 죄송합니다.'},
	{'title': '나는 섹시하냐?', 'yes':'네, 아주 섹시합니다.', 'no':'아니요. ㅋㅋㅋ'},
	{'title': '내 여친은 예쁠것인가?', 'yes':'네, 완전 예쁩니다.', 'no':'아니요. 기대 마세요.'},
	{'title': '내 남친은 잘 생겼을것인가?', 'yes':'네, 완전 잘생겼습니다.', 'no':'아니요. 그냥 혼자 사세요.'},
	{'title': '나는 원하는 대학에 갈것인가?', 'yes':'네, 그 대학에 갑니다.', 'no':'아니요. 기술을 배워보세요.'},
	{'title': '사람들이 나를 진심으로 좋아하나?', 'yes':'네, 진심으로 좋아합니다.', 'no':'아니요. 뒤를 조심하세요.'},
	{'title': '기말고사 성적이 오를 것인가?', 'yes':'네, 성적이 오릅니다.', 'no':'아니요. 말 안할래요.'},
	{'title': '연봉 1억을 달성 할것인가?', 'yes':'네, 1억을 훨씬 넘깁니다.', 'no':'아니요. 힘들겠는데요.'},
	{'title': '나는 장수할것인가?', 'yes':'네, 무지막지하게 오래삽니다.', 'no':'아니요. 건강 챙기세요.'},
	{'title': '나는 바람둥이인가?', 'yes':'네, 여기저기 떡밥을 깝니다.', 'no':'아니요. 한명이라도 사귀면 훈륭합니다.'}
]































