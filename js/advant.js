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

	data.title = '나의 장점/단점';
	data.url = 'http://goo.gl/AigRi';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	database = shuffle(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 \n';
	post += database[0]['constinue'] + ', ';
	post += database[1]['constinue'] + ', ';
	post += database[2]['last'] + ', \n\n';
	post += '단 한가지 아쉬운점... \n';
	post += database[3]['fault'];
	data.post = post;
	
	data.desc = '다 좋은데 말이야..\n' + database[3]['fault'];
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/advant.png';

	sendData(data);
}


database = [
	{'constinue':'키가 크고', 'last':'휀칠하게 키가 크지만', 'fault':'키가...Y.Y'},
	{'constinue':'진정한 시대의 얼짱이고', 'last':'얼굴만은 자신있지만', 'fault':'얼굴이 죄송합니다.T.T'},
	{'constinue':'돈이 많고', 'last':'가진 돈이 많지만', 'fault':'돈이 없어요.'},
	{'constinue':'인기가 많고', 'last':'인기가 많지만', 'fault':'사람들한테 왕따 당해요.'},
	{'constinue':'머리가 좋고', 'last':'머리가 엄청 좋지만', 'fault':'머리에 든게 없어요.'},
	{'constinue':'유머가 있고', 'last':'유머러스 하지만', 'fault':'유머 감각이 없어요.'},
	{'constinue':'싸움을 잘하고', 'last':'누구와 싸움에서 지지는 않지만', 'fault':'싸움을 못해요.'},
	{'constinue':'노래를 잘하고', 'last':'노래를 정말 잘하지만', 'fault':'음치박치에요.'},
	{'constinue':'매너 있고', 'last':'매너 짱이지만', 'fault':'매너가 똥이랍니다.'},
	{'constinue':'배려심이 많고', 'last':'배려심이 아주 많지만', 'fault':'배려심이 없어요.'},
	{'constinue':'일편단심 스타일이고', 'last':'한사람만 바라보는 일편단심 스타일 이지만', 'fault':'바람둥이에요.'},
	{'constinue':'옷을 잘 입고', 'last':'돋보이는 패셔니스타지만', 'fault':'패션이 촌스러워요.'},
	{'constinue':'몸매가 좋고', 'last':'몸매에 자신있지만', 'fault':'몸매가 나빠요..'},
	{'constinue':'섹시 하고', 'last':'섹시가 철철 넘치지만', 'fault':'섹시하지 않아요.'},
	{'constinue':'능력 있고', 'last':'능력 있지만', 'fault':'능력없는 백수랍니다.'},
	{'constinue':'세련 되고', 'last':'온몸이 세련되어 보이지만', 'fault':'촌스러워요.'},
	{'constinue':'영리해 보이고', 'last':'똑똑해 보이지만', 'fault':'띨 해보여요~'}
]































