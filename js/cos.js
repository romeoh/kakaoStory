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

	data.title = '나에게 어울리는 코스프레';
	data.url = 'http://goo.gl/8Ty7nM';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 "' + database[idx] + '" 코스프레를 하면 포토라인이 생깁니다.';
	data.post = post;
	
	data.desc = database[idx];
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/cos.png';

	sendData(data);
}


database = [
	'쿠로네코',
	'알라딘(마기)',
	'알리바바(마기)',
	'쿠로코',
	'키세',
	'나루토',
	'루피',
	'상디',
	'조로',
	'잔저스',
	'스쿠알로',
	'고쿠데라',
	'쟝',
	'엘런',
	'리바이',
	'일호(이영싫)',
	'이호(이영싫)',
	'오수',
	'다나',
	'청와',
	'가오나시',
	'이누야샤',
	'셋쇼마루',
	'코난',
	'실루엣(범인)',
	'도라에몽',
	'짱구',
	'알렌워커',
	'칸다(디그레이맨)',
	'여성형거인',
	'세일러문',
	'트레시(이영싫)',
	'메두사ts(이영싫)',
	'시엘(흑집사)',
	'세바스찬(흑집사)',
	'마담레드',
	'그렐서트클리프',
	'긴토키',
	'가구라(은혼)',
	'사스케',
	'무라사키바라(쿠농)',
	'아카시(쿠농)',
	'아오미네(쿠농)',
	'산고(이누야샤)',
	'흑형',
	'레이디가가',
	'우치하마다라',
	'쥬다르(마기)',
	'마르가레타(마기)',
	'쟈파르(마기)',
	'하루카(free)',
	'약장수(모노노케)',
	'코니(진격)',
	'무쿠로',
	'크롬',
	'당신의 최애',
	'미쿠 기본',
	'미쿠 칸타렐라',
	'미쿠 컬러풀멜로디',
	'미쿠 1925',
	'미쿠 로미오와 신데렐라',
	'시유 각개전투',
	'시유  Run',
	'시유 천년의시',
	'시우 한복',
	'시우 트러블메이커',
	'시유 트러블메이커',
	'린 컬러풀멜로디',
	'린 악의딸',
	'린 사랑빛병동',
	'미쿠 사랑빛병동',
	'린 spice',
	'렌 spice',
	'렌 악의하인',
	'렌 lovelessxxx',
	'미쿠 흑의맹세',
	'린 너를찾는하늘',
	'렌 너를찾는하늘',
	'린 종이비행기',
	'렌 죄수',
	'잭 프로스트',
	'샌디맨(가디언즈)',
	'히바리(가히리)',
	'고우(free)',
	'미카제 아이',
	'고토부키 란(슈퍼갤즈)',
	'란마루(우타프리)',
	'레이지(우타프리)',
	'타마키(오란고교)',
	'후지오카 하루히(오란고교)',
	'오오토리 쿄우야(오란고교)',
	'히타치인 히카루',
	'히타치인 카오루',
	'하니노즈카 미츠쿠니',
	'모리노즈카 타카시',
	'렌게(오란고교)',
	'미카사(진격)',
	'스폰지밥',
	'루이(브라컨)',
	'시노미야 나츠키(우타프리)'
]


































































































































