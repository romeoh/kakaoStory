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

	data.title = '나의 전생 알아보기';
	data.url = 'http://goo.gl/qFVp55';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	sexIdx = process(dataSex)
	born = process(1000, 1900)
	life = process(15, 100)
	die = born + life

	jobIdx = process(dataJob)
	dieIdx = process(dataDie)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 전생에 ' + dataSex[sexIdx] + '였으며,\n';
	post += born + '년에 출생하여 ' + die + '년에 사망했습니다.\n';
	post += '직업은 ' + dataJob[jobIdx] +'였으며,\n';
	post += '사망원인은 ' + dataDie[dieIdx];
	data.post = post;
	
	data.desc = dataJob[jobIdx].replace(/이/, '');
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/before.png';

	sendData(data);
}



dataSex = [
	'남자',
	'여자'
]

dataJob = [
	'농민이',
	'농노',
	'하인이',
	'사노비',
	'의원이',
	'백정이',
	'군주',
	'병사',
	'법사',
	'전사',
	'무사',
	'자객이',
	'궁수',
	'힐러',
	'딜러',
	'황제',
	'왕이',
	'옆집개'
]

dataDie = [
	'병으로 죽었습니다.',
	'바람피다 걸려서 맞아 죽었습니다.',
	'전쟁터에서 적군의 칼에 죽었습니다.',
	'반역을 일으켜 죽임을 당했습니다.',
	'늙어 죽었습니다.',
	'사랑이 이뤄지지 않아 상사병으로 죽었습니다.',
	'넘 웃다가 웃겨 죽었습니다.',
	'배고파 죽었습니다.',
	'짜증나 죽었습니다.',
	'피곤해 죽었습니다.',
	'친구가 배신에 죽임을 당했습니다.',
	'맞아 죽었습니다.',
	'도둑질을 하다가 걸려서 죽었습니다.',
	'나라를 구하다 죽었습니다.',
	'길거리에서 객사했습니다.',
	'개한테 물려죽었습니다.',
	'사자에 물려죽었습니다.',
	'자다가 편하게 죽었습니다.',
	'무좀으로 간지려워 죽었습니다.'
]


































