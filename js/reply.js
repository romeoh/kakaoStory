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

	data.title = '마법의 댓글';
	data.url = 'http://goo.gl/DuqqNh';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx1 = process(database);
	idx2 = process(database);
	if (idx1 == idx2) {
		idx2 = process(database);
	}
	idxReply = process(dataReply);

	post += '[' + data.title + ']\n\n';
	post += dataReply[idxReply] + ' 당신은 ' + database[idx1] + '\n';
	post += '또한 ' + userName + '님은 ' + database[idx2];
	data.post = post;
	
	data.desc = '드디어, 우리의 마법이 풀렸어~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/reply.png';

	sendData(data);
}


dataReply = [
	'이 곳에 댓글을 달면',
	'이 글을 "공유"를 하면',
	'이 글에 "좋아요"를 하면',
	'이 글에 "멋져요"를 하면',
	'이 글에 "기뻐요"를 하면',
	'이 글에 "슬퍼요"를 하면',
	'이 글에 "힘내요"를 하면'
]

database = [
	'한달안에 애인이 생깁니다.',
	'조만간 애인이 생깁니다.',
	'시험 성적이 오릅니다.',
	'서울대에 합격합니다.',
	'미국에 유학을 갑니다.',
	'나쁜일이 생기지 않습니다.',
	'친한 친구가 생깁니다.',
	'크게 칭찬을 받습니다.',
	'생각치 않은 돈이 생깁니다.',
	'큰 돈이 생깁니다.',
	'베프가 생깁니다.',
	'저주가 풀립니다.',
	'부모님과 해외여행을 갑니다.',
	'이번 방학때 해외 여행을 갑니다.',
	'죽을때까지 함께할 사람을 만납니다.',
	'EXO 수호와 포옹을 합니다.',
	'수지와 악수를 합니다.',
	'걸스데이 민아랑 함께 사진을 찍습니다.',
	'아이유와 악수를 합니다.',
	'SM의 연습생이 됩니다.',
	'YG의 연습생이 됩니다.',
	'달샤벳 아영이와 사진을 찍습니다.',
	'날씬해 집니다.',
	'키가 커집니다.',
	'죽음의 저주가 풀립니다.'
]



























