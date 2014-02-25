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

	data.title = '별에서 온 그대';
	data.url = 'http://goo.gl/qHPzTV';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy;
	} else if (sexType == 'girl') {
		database = dataGirl;
	}
	idx = process(database);
	place = process(dataPlace);
	support = process(dataSupport);
	year = Math.floor(process(10, 1000) / 10) * 10;
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 ' + year + '년전 ' + dataPlace[place] + database[idx] + '\n';
	post += '(끝)\n\n';
	post += '제작지원: ' + dataSupport[support];
	data.post = post;
	
	data.desc = '별에서 온 그대';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/star.png';

	sendData(data);
}



dataPlace = [
	'조선',
	'일본',
	'중국',
	'미국',
	'태평양 한가운데',
	'아프리카',
	'북극',
	'달',
	'남극',
	'사막',
	'대서양 한가운데',
	'독도',
	'소치',
	'평창',
	'무인도'
]

dataSupport = [
	'카페베네',
	'노스페이스',
	'더페이스샵',
	'갤럭시노트',
	'허경환이 포차허닭',
	'여명 808',
	'우루사',
	'인사돌',
	'박카스',
	'IBK 기업은행',
	'서울우유',
	'다이소',
	'아딸',
	'국대 떡볶기',
	'네네치킨'
]

dataBoy = [
	'에 떨어져 \n천송이를 찾아헤매지만 결국 못만납니다.',
	'에 떨어져 \n천송이와 행복하게 살았습니다.',
	'에 떨어진후 \n천송이와 만나게 됩니다.',
	'에 떨어진후 \n초능력을 사용하지 못해서 몇 년후에 죽습니다.',
	'에 떨어져 \n죽습니다.',
	'에 떨어져 \n죽지않고 혼자 영원히 삽니다.',
	'에 떨어져 \n다칩니다.',
	'에 떨어져 \n바보가 됩니다.',
	'에 잘못 \n떨어집니다.',
	'에 떨어져 \n감옥에 갑니다.',
	'에 떨어져 \n초능력으로 천송이를 살려냅니다.',
	'에 떨어져 \n머리를 크게 다칩니다.',
	'에 나체로 \n떨어져 사라들에게 놀림을 받습니다.',
	'에 떨어지지만 \n관심을 못받습니다.',
	'에 떨어져 \n천송이를 잃고 그리워 합니다.',
	'에 떨어져 \n천송이와 헤어지지만 나중에 다시 만납니다.'
]

dataGirl = [
	'에 떨어진 \n도민준을 도와주다가 죽습니다.',
	'에 떨어진 \n도민준이 못생겼습니다.',
	'에 떨어진 \n도민준이 내 스타일이 아닙니다.',
	'에 떨어진 \n도민준의 초능력으로 죽지않고 함께 삽니다.',
	'에 떨어진 \n도민준의 첫사랑이 됩니다.',
	'에 떨어진 \n도민준 대신 죽지만, 나중에 다시 만납니다.',
	'에 떨어진 \n도민준을 못 만납니다.',
	'에 떨어진 \n도민준을 보고 첫눈에 반합니다.',
	'에 떨어진 \n도민준이 애타게 찾는 사람입니다.',
	'에 떨어진 \n도민준과 사랑에 빠집니다.',
	'에 떨어진 \n도민준과 그냥 친구가 됩니다.'
]
































