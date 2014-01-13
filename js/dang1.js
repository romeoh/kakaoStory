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

	data.title = '당신이 생각하는 닮은 연예인';
	data.url = 'http://goo.gl/A3wL9v';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
		s = '여자친구'
	} else if (sexType == 'girl') {
		database = dataGirl;
		s = '남자친구'
	}
	idx1 = process(database)
	idx2 = process(database)
	idx3 = process(dataRel)
	
	post += '[' + data.title + ']\n\n';
	post += '당신이 생각하는 당신과 닮은 연예인은 "' + database[idx1].replace(/와/g, '').replace(/과/g, '') + ' 이지만,\n';
	post += dataRel[idx3] + ' ' + userName + '님을 "' + database[idx2] + ' 닮았다 생각합니다.';
	data.post = post;
	
	data.desc = '잘 봐바..좀 닮은거 같지?';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/danga1.png';

	sendData(data);
}

dataGirl = [
	'에이핑크 박초롱"과',
	'에이핑크 윤보미"와',
	'에이핑크 정은지"와',
	'에이핑크 손나은"과',
	'에이핑크 김남주"와',
	'에이핑크 오하영"과',
	'걸스데이 유라"와',
	'걸스데이 혜리"와',
	'걸스데이 소진"과',
	'걸스데이 민아"와',
	'달샤벳 세리"와',
	'달샤벳 아영"과',
	'달샤벳 지율"과',
	'달샤벳 우희"와',
	'달샤벳 가은"과',
	'달샤벳 수빈"과',
	'소녀시대 윤아"와',
	'소녀시대 수영"과',
	'소녀시대 효연"과',
	'소녀시대 유리"와',
	'소녀시대 태연"과',
	'소녀시대 제시카"와',
	'소녀시대 티파니"와',
	'소녀시대 써니"와',
	'소녀시대 서현"과',
	'미스에이 수지"와',
	'아이유"와',
	'티아라 지연"과',
	'에일리"와',
	'보아"와',
	'송은이"와',
	'김숙"과',
	'정경미"와',
	'신보라"와',
	'박미선"과',
	'신봉선"과',
	'이영자"와',
	'김영희"와',
	'김민경"과',
	'오나미"와',
	'박지선"과',
	'개콘 김혜선"과',
	'조혜련"과',
	'김신영"과',
	'허안나"와',
	'정주리"와'
]

dataBoy = [
	'비스트 윤두준"과',
	'비스트 양요섭"과',
	'비스트 장현승"과',
	'비스트 이기광"과',
	'비스트 용준형"과',
	'비스트 손동운"과',
	'인피니트 김성규"와',
	'인피니트 장동우"와',
	'인피니트 남우현"과',
	'인피니트 호야"와',
	'인피니트 이성열"과',
	'인피니트 이성종"과',
	'B1A4 산들"과',
	'B1A4 바로"와',
	'B1A4 진영"과',
	'B1A4 신우"와',
	'B1A4 공찬"과',
	'엑소 백현"과',
	'엑소 루한"과',
	'엑소 디오"와',
	'엑소 타오"와',
	'엑소 첸과"와',
	'엑소 세훈"과',
	'엑소 수호"와',
	'엑소 크리스"와',
	'엑소 시우민"과',
	'엑소 카이"와',
	'엑소 레이"와',
	'엑소 찬열"과',
	'이민호"와',
	'김우빈"과',
	'정형돈"과',
	'김준호"와',
	'송해"와',
	'김병만"과',
	'김구라"와',
	'지상렬"과',
	'신동엽"과',
	'강호동"과',
	'서경석"과',
	'유상무"와',
	'김제동"과',
	'김준현"과',
	'지석진"과',
	'김경진"과',
	'장동민"과',
	'컬투 김태균"과',
	'양상국"과',
	'옥동자"와'
]



 dataRel = [
	'당신의 친구들은',
	'당신의 엄마는',
	'당신의 선생님은',
	'당신의 학교 일진은',
	'당신의 할머니는',
	'당신의 학교 교장선생님은',
	'당신의 체육 선생님은',
	'당신의 국어 선생님은',
	'당신의 학교 학생주임 선생님은',
	'당신의 학교 학생 회장은',
	'당신의 학교 얼짱은',
	'당신의 아빠는',
	'당신의 베스트 프렌드는',
	'이 글을 보는 사람들은',
	'당신의 카스 친구들은'
]




























