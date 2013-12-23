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

	data.title = '나의 플친';
	data.url = 'http://goo.gl/UaseUP';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx1 = process(database)
	idx2 = process(database)
	if (idx1 == idx2) {
		idx2 = process(database)
	}
	
	post += '[' + data.title + ']\n\n';
	post += '오늘, ' + userName + '님을 \n';
	post += '빵터지게 해줄 플친은 "' + database[idx1] + '"입니다.\n';
	post += '폭풍 감동 시켜줄 플친은 "' + database[idx2] + '"입니다.';
	data.post = post;
	
	data.desc = '자~ 이제 나를 웃겨보시오~\n';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/plchin.png';

	sendData(data);
}


database = [
	'깨알유머',
	'깨알유머',
	'깨알유머',
	'깨알유머',
	'깨알유머',
	'깨알유머',
	'깨알유머',
	'깨알유머',
	'깨알유머',
	'깨알유머',
	'깨알유머',
	'세상에서 가장 웃긴 동영상',
	'세상에서 가장 웃긴 동영상',
	'세상에서 가장 웃긴 동영상',
	'세상에서 가장 웃긴 동영상',
	'공터',
	'공터',
	'공터',
	'공터',
	'오늘의 이슈',
	'여자들이 좋아하는 공간',
	'남자들이 좋아하는 공간',
	'시터카페',
	'웃음으로 하나되는 공간',
	'훈남훈녀',
	'노리넷',
	'아이디어믹스',
	'오늘도 웃자',
	'오웃동',
	'판챗',
	'개그스토리',
	'웃긴스토리',
	'동친카',
	'미리내가게',
	'꽃집아재',
	'유머학교',
	'롤롤',
	'세상에서 가장 웃긴 짤방',
	'아티자인',
	'10대놀이터',
	'남자들의 동영상'
]































