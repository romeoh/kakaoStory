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

	data.title = '1학기 추억남기기';
	data.url = 'http://goo.gl/ou7igd';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	post += '**' + data.title + '**\n\n';
	post += '제일 잘생긴남자애: \n';
	post += '겁나 예쁜친구: \n';
	post += '세상에서 하나밖에 없는 친구: \n';
	post += '제일 쿨하고 시크한 친구: \n';
	post += '세상에서 제일 친한 친구: \n';
	post += '가장 든든한 친구: \n';
	post += '개성있는 친구: \n';
	post += '눈웃음이 예쁜 친구: \n';
	post += '매력있는 친구: \n';
	post += '열정있는 친구: \n';
	post += '박력터지는 친구: \n';
	post += '정있는 친구: \n';
	post += '웃음을 주는 친구: \n';
	post += '고민을 털수 있는 있구: \n';
	post += '자뻑이 엄청난 친구: \n';
	post += '제일 마른 친구: \n';
	post += '가족같은 친구: \n';
	post += '나랑 잘 맞는 친구: \n';
	post += '키가 큰 친구: \n';
	post += '날 너무 좋아하는 친구: \n';
	post += '편안한 친구: \n';
	post += '형제같은 친구: \n';
	post += '정신나간 친구: \n';
	post += '때리고 싶은 친구: \n';
	post += '놀리기 편한 친구: \n';
	post += '달리기 잘하는 친구: \n';
	post += '어색한 친구: \n';
	post += '애교가 많은 친구: \n';
	post += '평범한 친구: \n';
	post += '놀지 좋은 친구: \n';
	post += '4차원 친구: \n';
	post += '공부 잘하는 친구: \n';
	post += '알수없는 친구: \n';
	post += '못난이 친구: \n';
	post += '보고싶은 친구: \n';
	post += '평생 내꺼 같은 친구: \n';
	post += '머리 큰 친구: \n';
	post += '미친 친구: \n';
	post += '수업시간에 잠만 자는 친구: \n';
	post += '빡빡이 친구: \n';
	post += '안경벗으면 누군지 모를거같은 친구: \n';
	post += '모델친구: \n';
	post += '오덕인 친구: \n';
	post += '별로 친하지 않은 친구: \n';
	post += '운동잘하는 친구: \n';
	post += '동생같은 친구: \n';
	post += '연락길게 안되는 친구: \n';
	post += '많이 변한 친구: \n';
	post += '전혀 안변한 친구: \n';
	post += '변태같은 친구: \n';
	post += '귀여운 친구: \n';
	post += '짱시른 친구: \n';
	post += '제일 사랑하는 친구: \n';
	
	data.post = post;
	
	data.desc = data.title;
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/hakki.png';

	sendData(data);
}






























