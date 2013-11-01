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

	data.title = '애인이 생기면 제일 먼저하는 일';
	data.url = 'http://goo.gl/9cbUAp';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		sex = '여자친구'
	} else if (sexType == 'girl') {
		sex = '남자친구'
	}
	t = data.title.replace(/애인이/, sex + '가')
	idx = process(database)
	

	post += '[' + t + ']\n\n';
	post += userName + '님이 ' + sex + '가 생기면\n';
	post += '제일 먼저 ' + database[idx];
	data.post = post;
	
	data.desc = '일딴 생기고 보자구!';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/first.png';

	sendData(data);
}



database = [
	'롯데월드에서 하루종일 노는겁니다.',
	'비오는날 커피숖에서 함께 창밖을 바라봅니다.',
	'함께 삼겹살을 구워먹습니다.',
	'키스를 합니다.',
	'함께 무인도에 여행을 갑니다.',
	'함께 해외여행을 갑니다.',
	'쎄쎄쎄~를 함께 합니다.',
	'함께 노래방에 갑니다.',
	'함께 비디오방에 갑니다.',
	'함께 바다구경을 갑니다.',
	'함께 콘서트에 갑니다.',
	'함께 에버랜드에 갑니다.',
	'헤어집니다.',
	'함께 만화방에 갑니다.',
	'어깨를 주물러 줍니다.',
	'포옹을 합니다.',
	'길거리에서 키스합니다.',
	'함께 새벽기차를 타고 춘천에 갑니다.',
	'함께 소풍을 갑니다.',
	'등에 업힙니다.',
	'커플링을 합니다.',
	'함께 심야영화를 봅니다.',
	'디스코팡팡을 타러갑니다.',
	'커플티를 맞춥니다.',
	'서로 밥을 해줍니다.',
	'서로 친구를 소개합니다.',
	'서로 사탕을 먹여줍니다.',
	'거품키스를 합니다.',
	'동영상으로 편지를 만들어 줍니다.',
	'팔베게하고 잡니다.',
	'밤새도록 전화통화를 합니다.',
	'서로 집에 놀러가봅니다.',
	'함께 비를 맞습니다.',
	'궁합을 봅니다.',
	'서로 머리를 감겨줍니다.',
	'서로 부모님께 인사드립니다.',
	'함께 자전거를 타러갑니다.',
	'서로 장점 100가지를 적어줍니다.',
	'매일매일 만나서 놉니다.'
]
































