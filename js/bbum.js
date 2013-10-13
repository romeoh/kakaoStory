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

	data.title = '뿜 엔터테인먼트';
	data.url = 'http://goo.gl/UHwPdK';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	if (userName.length === 3) {
		userName = userName.substr(1);
	}
	//nameStr = uniValue(userName) ? userName + '이' : userName + ''
	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += '잠시만요~ \n';
	post += userName + '언니 들어가실께요~ \n\n';
	post += '자기야~ 내가 죽어봐~~~야~~~ 정신차리지?\n\n';
	post += '잠시만요~  \n';
	post += userName + '언니 ' + database[idx];
	data.post = post;
	
	data.desc = '우리회사에 제대로된 연기자가 하나도 없냐!\n뿜겠네!! 진짜!!';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/bbum.png';

	sendData(data);
}


database = [
	'이빨 쑤시고 가실께요.',
	'개념 차리고 가실께요.',
	'정신줄 놓고 가실께요.',
	'애인 만들고 가실께요.',
	'어금니에 낀 김치조각 빼고 가실께요.',
	'귀밥 빼고 가실께요.',
	'콧꾸명에 송충이 빼고 가실께요.',
	'혓바닥 딲고 가실께요.',
	'손톱에 낀 땟국물 빼고 가실께요.',
	'머리에 비듬 털고 가실께요.',
	'발가락에 낀 양말털 빼고 가실께요.',
	'팬티에 누런 얼룩 빼고 가실께요.',
	'티셔츠 늘어진거 바꿔입고 가실께요.',
	'팬티랑 양말 깔맞춤 하고 가실께요.',
	'눈꼽 떼고 가실께요.',
	'5일만에 첨으로 머리 감고 가실께요.',
	'겨땀 딲고 가실께요.',
	'껴털 깎고 가실께요.',
	'콧털 빼고 가실께요.',
	'여드름 짜고 가실께요.',
	'손등에 낀 때 빼고 가실께요.',
	'발가락에 낀 태 빼고 가실께요.'
]































