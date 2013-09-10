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

	data.title = '서울대에 갈 확률';
	data.url = 'http://goo.gl/6FaoL6';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님이 서울대에 갈 확률은 ' + database[idx]['when'];
	data.post = post;
	
	data.desc = '조금만 더 노력하면 될듯~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/snu.png';

	sendData(data);
}


database = [
	{'when': '일본이 우리나라에 사과할 확률과 같습니다.'},
	{'when': '한여름에 눈이 내릴 확률과 같습니다.'},
	{'when': '3차대전이 일어날 확률과 같습니다.'},
	{'when': '북극에 사자가 살 확률과 같습니다.'},
	{'when': '화성에 생명체가 발결될 확률과 같습니다.'},
	{'when': '집앞에서 길잃어 버릴 확률과 같습니다.'},
	{'when': '백두산을 3시간만에 오를 확률과 같습니다.'},
	{'when': '열명을 동시에 사귈 확률과 같습니다.'},
	{'when': '남북이 통일될 확률과 같습니다.'},
	{'when': '시키지 않은 택배가 올 확률과 같습니다.'},
	{'when': '시키지 않은 짜장면이 배달올 확률과 같습니다.'},
	{'when': '크리스마스에 태풍이 올 확률과 같습니다.'},
	{'when': '우리나라가 브라질 월드컵 우승할 확률과 같습니다.'},
	{'when': '남극의 얼음이 모두 녹을 확률과 같습니다.'},
	{'when': '편의점에서 물건을 샀는데 알바생이 사귀자고 말할 확률과 같습니다.'},
	{'when': '해가 서쪽에서 뜰 확률과 같습니다.'},
	{'when': '당신이 슈퍼스타K에 우승할 확률과 같습니다.'},
	{'when': '외계인이랑 소개팅할 확률과 같습니다.'},
	{'when': '지하철에서 나랑 같은 옷을 입은 사람이 5명 있을 확률과 같습니다.'},
	{'when': '사람이 알에서 깨어날 확률과 같습니다.'},
	{'when': '독도가 일본땅일 확률과 같습니다.'},
	{'when': '우리나라에서 아이폰이 갤럭시보다 더 많이 팔릴 확률과 같습니다.'},
	{'when': '당신이 결혼해서 딸만 12명 낳을 확률과 같습니다.'},
	{'when': '달이 해보다 더 밝아 보일 확률과 같습니다.'},
	{'when': '똥을 쌋는데 황금알이 나올 확률과 같습니다.'},
	{'when': '한화이글스가 우승할 확률과 같습니다.'},
	{'when': '강호동이 씨름선수로 복귀할 확률과 같습니다.'},
	{'when': '아버지 가방에 들어갈 확률과 같습니다.'},
	{'when': '유재석이 무릎팍 도사가 될 확률과 같습니다.'}
] 
































