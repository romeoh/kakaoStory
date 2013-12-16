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

	data.title = '신이 나를 만들때';
	data.url = 'http://goo.gl/kL2DDo';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	database = shuffle(database)
	idx0 = process(dataSpoon)
	idx1 = process(dataSpoon)
	idx2 = process(dataSpoon)
	
	post += '[' + data.title + ']\n';
	post += '────────────────────\n'
	post += '👻 신이 ' + userName + '님을 만들때 \n\n';
	post += '"' + database[0] + '", ' + dataSpoon[idx0] + '~\n';
	post += '"' + database[1] + '", ' + dataSpoon[idx1] + '~\n';
	post += '"' + database[2] + '", ' + dataSpoon[idx2] + '~\n\n';
	
	post += '그리고, 실수로 "'+database[3] + '" 와장창~ Y.Y';
	data.post = post;
	
	data.desc = '앗..실수로 ' + database[3] + ' 쏟아부음..ㅠㅠ';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/makeme.png';

	sendData(data);
}


database = [
	'잘생김',
	'못생김',
	'키큼',
	'키작음',
	'예쁨',
	'개념',
	'싸가지',
	'똑똑함',
	'착함',
	'이기주의',
	'돈복있음',
	'노래잘함',
	'춤잘춤',
	'인기많음',
	'짝사랑함',
	'일류대학 합격',
	'커플됨',
	'평생 쏠로',
	'모태쏠로',
	'일찍 결혼함',
	'예쁜 눈',
	'예쁜 얼굴형태',
	'예쁜 코',
	'착한 얼굴',
	'착한 키',
	'착한 손',
	'개그',
	'손재주',
	'개드립',
	'유머감각',
	'말만하면 썰렁함'
]

dataSpoon = [
	'반 수푼',
	'반 수푼',
	'반 수푼',
	'반 수푼',
	'반 수푼',
	'반 수푼',
	'반 수푼',
	'반 수푼',
	'반 수푼',
	'반 수푼',
	'한 수푼',
	'한 수푼',
	'한 수푼',
	'한 수푼',
	'한 수푼',
	'한 수푼',
	'한 수푼',
	'한 수푼',
	'한 수푼',
	'한 수푼',
	'한 수푼',
	'두 수푼',
	'두 수푼',
	'두 수푼',
	'두 수푼',
	'두 수푼',
	'세 수푼',
	'네 수푼',
	'다섯 수푼',
	'여섯 수푼',
	'일곱 수푼',
	'여덞 수푼',
	'열 수푼',
	'열다섯 수푼',
	'스무 스푼'
]






























