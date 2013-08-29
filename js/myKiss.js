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

	data.title = '키스의 세기';
	data.url = 'http://goo.gl/bmTFF';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님과 맞는 키스는?\n';
	post += '◇ 종류: ' + database[idx]['kiss'] + '\n';
	post += '◇ 로멘스: ' + process(1,99) + '점\n';
	post += '◇ 무드: ' + process(1,99) + '점\n';
	post += '◇ 에로틱: ' + process(1,99) + '점\n';
	post += '◇ 큐티: ' + process(1,99) + '점\n';
	post += '◇ 러블리: ' + process(1,99) + '점\n\n';
	post += '※' + database[idx]['kiss'] + '란?\n';
	post += database[idx]['exp'] + '\n';

	data.post = post;
	
	data.desc = database[idx]['kiss'] + '\n느낌 아니깐~';
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + database[idx]['photo'];

	sendData(data);
}

database = [
	{'photo':'kiss0.png', 'kiss':'버드키스', 'exp':'새가 부리를 부딪히는 것과 비슷합니다. \n키스보다는 가벼운 뽀뽀에 가깝죠. \n외국에서는 친구들끼리도 흔히 하는 키스입니다.'},
	{'photo':'kiss1.png', 'kiss':'크로스키스', 'exp':'TV에서 주인공들끼리 자주하는 45도 각도의 키스, 서로 입술을 교차시켜 입맞춤을 합니다.'},
	{'photo':'kiss2.png', 'kiss':'햄버거키스', 'exp':'입술을 벌려서 상대방의 윗입술과 아랫입술을 동시에 깨물어 주는 키스입니다.'},
	{'photo':'kiss3.png', 'kiss':'에어크리닝키스', 'exp':'키스를 하면서 상대방의 입안에 공기를 불어 넣어주는 키스입니다.\n너무 강하게 하면 상대방이 사래에 걸릴 수 있으니, 꼭 하시기 전에 신호를 주셔야 합니다.\n참고로 자신의 입냄새도 체크해 주시고요.'},
	{'photo':'kiss4.png', 'kiss':'슬라이딩키스', 'exp':'서로의 입술을 밀착시키고 누르면서 하는 키스입니다.'},
	{'photo':'kiss5.png', 'kiss':'인사이드키스', 'exp':'상대방의 혀를 가볍게 받아주는 키스입니다.'},
	{'photo':'kiss6.png', 'kiss':'프렌치키스', 'exp':'상대방의 혀를 가볍게 받아주면서 더 길고 열정적으로 하는 키스입니다. \n이때 상대방의 얼굴을 감싸 안아주면 더 자극적일 수 있습니다.'},
	{'photo':'kiss7.png', 'kiss':'사탕키스', 'exp':'영화나 드라마에서 남자가 여자에게 키스를 통해 입에서 입으로 사탕을 선물하는 키스입니다.'},
	{'photo':'kiss8.png', 'kiss':'거품키스', 'exp':'입술에 묻은 카푸치노 거품을 키스로 닦아줍니다.'}
	
]































