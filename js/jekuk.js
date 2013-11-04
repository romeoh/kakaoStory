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
		,str = ''

	data.title = '나는 제국고에 전학갈수 있나?';
	data.url = 'http://goo.gl/iPUfA4';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	tf = process(0, 4)
	if (tf === 0) {
		str += userName + '님은 제국고에 전학갈 수 없습니다.';
		dc = '그냥 지금 학교에서 열심히 하세요.'
	} else {
		idx = process(database);
		str += userName + '님은 ' + database[idx]['le'] + '에 속합니다.\n\n'
		str += database[idx]['dec']
		dc = database[idx]['d']
	}
	age = process(5, 100)

	post += '[' + data.title + ']\n\n';
	post += str;
	data.post = post;
	
	data.desc = dc;
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/jekuk.png';

	sendData(data);
}


database = [
	{'le': '경영상속집단', 'dec':'소위말해 재벌 아들, 재벌 딸로써 제국고에 전학갈 자격이 충분히 있습니다.', 'd':'완관을 쓰려는자, 그 무게를 견뎌라'},
	{'le': '주식상속집단', 'dec':'즉, 부모님이 대주주인 자녀로써 제국고에 전학갈 자격이 충분히 있습니다.', 'd':'완관을 쓰려는자, 그 무게를 견뎌라'},
	{'le': '명예상속집단', 'dec':'즉, 장관, 국회의원, 대법원장 같은 명예직 자제로써 제국고에 전학갈 자격이 충분히 있습니다.', 'd':'완관을 쓰려는자, 그 무게를 견뎌라'},
	{'le': '졸부집단', 'dec':'갑자기 많은 부를 얻은 집안 자녀로써 제국고에 전학갈 자격이 충분히 있습니다.', 'd':'완관을 쓰려는자, 그 무게를 견뎌라'},
	{'le': '사회배려자집단', 'dec':'사회배려자로써 제국고에 전학갈 기회가 있습니다.', 'd':'교복값은 있니?'}
]





























