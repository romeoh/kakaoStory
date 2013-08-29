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

	data.title = '말괄량이 길들이기';
	data.url = 'http://goo.gl/WhJ2Xc';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	tomIdx = process(dataTom)
	foodIdx = process(dataFood)
	nameStr = uniValue(userName) ? userName + '은' : userName + '는'
	
	post += '[' + userName + ' 길들이기]\n\n';
	post += nameStr + ' ' + dataTom[tomIdx] + '\n';
	post += '(참고) ' + userName + ' 길들이기 음식: ' + dataFood[foodIdx];
	data.post = post;
	
	data.desc = dataFood[foodIdx] + ' 사줘~ 뿌잉뿌잉~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/tomboy2.png';

	sendData(data);
}


dataTom = [
	'커피를 사주면 아주 순해집니다.',
	'밥을 사주면 말을 아주 잘 듣습니다.',
	'소개팅을 시켜주면 바로 길듭니다.',
	'예뻐해주면 말을 아주 잘 듣습니다.',
	'음료수를 사주면 아주 순해집니다.',
	'영화를 보여주면 아주 착해집니다.',
	'같이 술을 마셔주면 완전 순한 양이 됩니다.',
	'칭찬해주면 바로 친해질 수 있습니다.',
	'맛있는거 사주면 말을 아주 잘 듣습니다.',
	'딩신이 뺨을 한대 맞아주면 영원한 우정으로 발전합니다.',
	'카스에 댓글을 달아주면 아주 착해집니다.',
	'빕스에 데려가 주면 아주 착해집니다.',
	'선물을 사주면 말을 아주 잘 듣습니다.',
	'뺨에 뽀뽀를 해주면 엄청 귀여워 집니다.',
]

dataFood = [
	'밥',
	'커피',
	'스파케티',
	'라면',
	'불고기',
	'삼겹살',
	'소주',
	'카레밥',
	'스테이크',
	'샐러드',
	'피자',
	'막걸리',
	'돼지껍데기',
	'곱창'
]






























