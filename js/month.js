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
		,d = new Date()
		,month = d.getMonth() + 1
		,date = d.getDate()

	if (date > 15) {
		if (month == 12) {
			month = 1;
		} else {
			month = month + 1;
		}
	}
	
	data.title = month + '월의 운세';
	data.url = 'http://goo.gl/K1vMJP';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	d1 = process(database1)
	d2 = process(database2)
	d3 = process(database3)
	d4 = process(database4)
	d5 = process(1, 31)
	d6 = process(1, 31)

	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님의 ' + month + '월 운세입니다.\n\n';
	post += '◇ 금전운: ' + database1[d1] + '\n';
	post += '◇ 연애운: ' + database2[d2] + '\n';
	post += '◇ 진로운: ' + database3[d3] + '\n';
	post += '◇ 건강운: ' + database4[d4] + '\n\n';
	post += '◆ 가장 좋은 날: ' + d5 + '일\n';
	post += '◆ 가장 안좋은 날: ' + d6 + '일';
	data.post = post;
	
	data.desc = '노력하면 바뀐다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/month.png';

	sendData(data);
}

database1 = [
	'뜻하지 않은 돈이 들어옵니다.',
	'많은 돈이 생깁니다.',
	'노력한 만큼의 결실을 얻습니다.',
	'금전적 손실이 생깁니다.',
	'저축이 필요합니다.',
	'약간의 이익이 생깁니다.',
	'많은 이익이 생깁니다.',
	'약간의 손해가 생깁니다.',
	'계속 돈이 들어옵니다.',
	'횡재합니다.',
	'일시적인 이익이 들어옵니다.',
	'막대한 이득을 봅니다.',
	'큰 손해가 있습니다.'
]

database2 = [
	'새로운 애인이 생깁니다.',
	'좋아하는 사람이 생깁니다.',
	'나를 좋아하는 사람이 있습니다.',
	'그 사람에게 고백을 받습니다.',
	'사랑이 이루어 집니다.',
	'새로운 인연을 만납니다.',
	'이상형을 만납니다.',
	'이별운이 있습니다.',
	'우연한 만남이 있습니다.',
	'동화같은 만남을 가집니다.',
	'운명적인 사랑을 처음 봅니다.',
	'스토킹을 당합니다.',
	'고백은 합니다만..',
	'그사람이 내마음을 눈치 챕니다.',
	'내가 이상형이라는 사람을 만납니다.',
	'두사람이 나 때문에 크게 싸웁니다.',
	'나에게 환심을 사려고 노력하는 사람이 있습니다.',
	'선물을 받습니다.',
	'영화같은 사랑이 시작됩니다.',
	'그사람에게 다른 애인이 생깁니다.'
]

database3 = [
	'시험운이 좋습니다.',
	'합격운이 있습니다.',
	'나를 인정해줍니다.',
	'인정을 받습니다.',
	'주위 사람들이 나를 부러워 합니다.',
	'주위 사람들을 놀라게 합니다.',
	'모두 나를 부러워 합니다.',
	'좀 더 노력해야 합니다.',
	'노력이 필요합니다.',
	'가장 큰 기쁨을 맛봅니다.',
	'사람들에게 이름을 알립니다.',
	'새로운 분야에 도전합니다.',
	'적성에 맞는 일을 찾습니다.',
	'결실을 맺습니다.',
	'위기를 넘깁니다.'
]

database4 = [
	'여전히 건강합니다.',
	'잠이 부족합니다.',
	'피곤을 느낍니다.',
	'운동이 필요합니다.',
	'해로운 음식을 멀리합니다.',
	'몸짱이 될수 있습니다.',
	'섹시한 복근을 만듭니다.',
	'섹시한 엉덩이를 만듭니다.',
	'자동차를 조심해야 합니다.',
	'소화기 계통의 건강을 요합니다.',
	'근력운동이 필요합니다.',
	'유산소 운동이 필요합니다.',
	'휴식이 필요합니다.',
	'큰 문제가 없습니다.',
	'잔병치레를 합니다.',
	'감기에 걸릴수 있습니다.'
]
































