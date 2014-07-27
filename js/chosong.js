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

	data.title = '초성 노래제목 맞추기';
	data.url = 'http://goo.gl/w3Wd0J';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += database[idx].singer + '의 노래 \n';
	post += '"' + database[idx].song + '"은 뭘까요?';
	data.post = post;
	
	data.desc = data.title;
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/chosong.png';

	sendData(data);
}

database = [
	{'singer': '빅뱅', 'song': 'ㄱㅈㅁ'},
	{'singer': '빅뱅', 'song': 'ㅍㅌㅅㅌㅂㅇㅂ'},
	{'singer': '빅뱅', 'song': 'ㅂㅇㄴㅇ'},
	{'singer': '빅뱅', 'song': 'ㅎㄹㅎㄹ'},
	{'singer': '빅뱅', 'song': 'ㅁㅈㅁㅇㄴ'},
	{'singer': '빅뱅', 'song': 'ㅁㅅㅌ'},
	{'singer': '빅뱅', 'song': 'ㄹㄹㅍ'},
	{'singer': '빅뱅', 'song': 'ㅅㅌㄹㅂㅇㅂ'},
	{'singer': '슈퍼주니어', 'song': 'ㅁㄹㅋ'},
	{'singer': '슈퍼주니어', 'song': 'ㅇㅈㅁㅇㄴ'},
	{'singer': '슈퍼주니어', 'song': 'ㅇㄹㅇ'},
	{'singer': '슈퍼주니어', 'song': 'ㅅㅍㅇ'},
	{'singer': '슈퍼주니어', 'song': 'ㅁㅇㅁ'},
	{'singer': '슈퍼주니어', 'song': 'ㅁㅅㅌㅅㅍ'},
	{'singer': '샤이니', 'song': 'ㅅㄹ'},
	{'singer': '샤이니', 'song': 'ㄷㄹㄱ'},
	{'singer': '샤이니', 'song': 'ㅈㄹㅇ'},
	{'singer': '샤이니', 'song': 'ㅅㅌㅂㅇㅁ'},
	{'singer': '샤이니', 'song': 'ㄴㄴㄴㅁㅇㅃ'},
	{'singer': '샤이니', 'song': 'ㄹㅅㅍ'},
	{'singer': '엑소', 'song': 'ㅈㄷ'},
	{'singer': '엑소', 'song': 'ㄴㅂㅅㄴ'},
	{'singer': '엑소', 'song': 'ㄴㄷㅇㅁㄴ'},
	{'singer': '엑소', 'song': 'ㅇㄱ'},
	{'singer': '엑소', 'song': 'ㅍㅌㅍ'},
	{'singer': '비스트', 'song': 'ㅂㄱㅇㄴㄴㅇ'},
	{'singer': '비스트', 'song': 'ㅅㄷㅁㅂ'},
	{'singer': '비스트', 'song': 'ㅇㅈㅇㄴㅇ'},
	{'singer': '비스트', 'song': 'ㅂㅎㄴㅂ'},
	{'singer': '비스트', 'song': 'ㄱㄹㅈ'},
	{'singer': '비스트', 'song': 'ㅇㄹㄷㅇㅂㅇㅇ'},
	{'singer': '비스트', 'song': 'ㅍㅅ'},
	{'singer': '동방신기', 'song': 'ㅍㅅ'},
	{'singer': '동방신기', 'song': 'ㅎㄱ'},
	{'singer': '동방신기', 'song': 'ㅋㅊㅁ'},
	{'singer': '동방신기', 'song': 'ㅇ'},
	{'singer': '2PM', 'song': 'ㅎㅌㅂㅌ'},
	{'singer': '2PM', 'song': 'ㅅㅈㅁㅈㅇㅂㅈ'},
	{'singer': '2PM', 'song': 'ㅇㅇㅂㅂ'},
	{'singer': '2PM', 'song': 'ㄴㄱㅁㄷ'},
	{'singer': 'B1A4', 'song': 'ㅅㄹㄷㅇ'},
	{'singer': 'B1A4', 'song': 'ㅇㄱㄴ'},
	{'singer': 'B1A4', 'song': 'ㄱㄷㅇㅎㄲ'},
	{'singer': 'B1A4', 'song': 'ㅇㅃ'},
	{'singer': 'BAP', 'song': 'ㄷㅂㅅㄱ'},
	{'singer': 'BAP', 'song': 'ㅇㅅ'},
	{'singer': 'BAP', 'song': 'ㅂㄷㅁ'},
	{'singer': 'BAP', 'song': 'ㅎㅈㅁ'},
	{'singer': 'BAP', 'song': 'ㅇㄹㅇ'},
	{'singer': '빅스', 'song': 'ㄱㅈ'},
	{'singer': '빅스', 'song': 'ㅌㅇㄴㅈㅅㄱㅁㅇ'},
	{'singer': '빅스', 'song': 'ㄱㄹㅅㅁㅅㄴㄲ'},
	{'singer': '빅스', 'song': 'ㄷㄷㄴㄷㄴ'},
	{'singer': '빅스', 'song': 'ㄷㄷㅇㄴㄴㄲ'},
	{'singer': '방탄소년단', 'song': 'ㅍㄷㄱㅅ'},
	{'singer': '방탄소년단', 'song': 'ㅅㄴㅈ'},
	{'singer': '엠블랙', 'song': 'ㅈㅈㅇㅇ'},
	{'singer': '엠블랙', 'song': 'ㅁㄴㄹㅈ'},
	{'singer': '엠블랙', 'song': 'ㅇㅇ'},
	{'singer': '엠블랙', 'song': 'ㅋㄹㅇ'},
	{'singer': '틴탑', 'song': 'ㅁㅊㄱㅇ'},
	{'singer': '틴탑', 'song': 'ㅂㅅ'},
	{'singer': '틴탑', 'song': 'ㅁㄴㄷ'},
	{'singer': '틴탑', 'song': 'ㅈㄴㅇㅇ'},
	{'singer': '씨앤블루', 'song': 'ㅇㅌㅇㅇ'},
	{'singer': '씨앤블루', 'song': 'ㅇㅇㅅㄹ'},
	{'singer': '씨앤블루', 'song': 'ㅈㄱ'},
	{'singer': '씨앤블루', 'song': 'ㄹㅂ'},
	{'singer': '제국의 아이들', 'song': 'ㅂㄹㅇㅇㄹ'},
	{'singer': '제국의 아이들', 'song': 'ㅎㅇㅈ'},
	{'singer': '제국의 아이들', 'song': 'ㅅㅌㅂㅇㅅㅌ'},
	{'singer': '소녀시대', 'song': 'ㅇㄱㅇㅂㅇ'},
	{'singer': '소녀시대', 'song': 'ㅅㅇㅇㅁㄹㅂ'},
	{'singer': '소녀시대', 'song': 'ㅌㅇㅋ'},
	{'singer': '소녀시대', 'song': 'ㅋㅅㅇ'},
	{'singer': '소녀시대', 'song': 'ㅁㅅㅌㅁㅅㅌ'},
	{'singer': '에이핑크', 'song': 'ㅇㅈㄱㅁㅆㅇㅈ'},
	{'singer': '에이핑크', 'song': 'ㅁㅅㅌㅊ'},
	{'singer': '에이핑크', 'song': 'ㅁㄹㅇ'},
	{'singer': '에이핑크', 'song': 'ㅎㅅ'},
	{'singer': '걸스데이', 'song': 'ㅅㅌ'},
	{'singer': '걸스데이', 'song': 'ㄱㄷㅎ'},
	{'singer': '걸스데이', 'song': 'ㅇㅈㄷㅌㄹ'},
	{'singer': '걸스데이', 'song': 'ㄴㄹㅇㅈㅁㅇ'},
	{'singer': '걸스데이', 'song': 'ㅎㅂㅁㅇㅇㅈ'},
	{'singer': '걸스데이', 'song': 'ㅈㅎㅈㅂㅇ'},
	{'singer': '2NE1', 'song': 'ㅋㅂㅎ'},
	{'singer': '2NE1', 'song': 'ㄱㄹㅇㅎㅇ'},
	{'singer': '2NE1', 'song': 'ㅇㄱㄹ'},
	{'singer': '2NE1', 'song': 'ㅇㅇㄹㅂㅇ'},
	{'singer': '2NE1', 'song': 'ㅍㅇㅇ'},
	{'singer': '2NE1', 'song': 'ㄴㄱㅈㅇㅈㄴㄱ'},
	{'singer': '헬로비너스', 'song': 'ㅂㄴㅅ'},
	{'singer': '헬로비너스', 'song': 'ㅊㅁㅅㄹ'},
	{'singer': '헬로비너스', 'song': 'ㅇㄴㅁㅎ'},
	{'singer': '헬로비너스', 'song': 'ㅍㄷㅊㄹ'},
	{'singer': '씨스타', 'song': 'ㅌㅊㅁㅇㅂㄷ'},
	{'singer': '씨스타', 'song': 'ㄹㅂㅇ'},
	{'singer': '씨스타', 'song': 'ㄴㅎㅈ'},
	{'singer': '씨스타', 'song': 'ㄴㄲㅈㄱ'},
	{'singer': 'F(x)', 'song': 'ㄹㄷㄹㅇㅌ'},
	{'singer': 'F(x)', 'song': 'ㅊㅅㄹㄴ'},
	{'singer': 'F(x)', 'song': 'ㄴㅇㅃㅇ'},
	{'singer': 'F(x)', 'song': 'ㅇㄹㅌㄹㅅ'},
	{'singer': 'F(x)', 'song': 'ㄹㅊㅌ'},
	{'singer': 'F(x)', 'song': 'ㅍㄴㅋㅇ'},
	{'singer': '포미닛', 'song': 'ㅇㄴㅁㅎ'},
	{'singer': '포미닛', 'song': 'ㅇㄹㅇㅁㅇㅇ'},
	{'singer': '포미닛', 'song': 'ㅎㅌㅎ'},
	{'singer': '포미닛', 'song': 'ㄱㅇㅇㄱㅇㅇ'},
	{'singer': '포미닛', 'song': 'ㅎㅇㅅ'},
	{'singer': '크레용팝', 'song': 'ㅇㅇ'},
	{'singer': '크레용팝', 'song': 'ㄲㄹㅅㅁㅅ'},
	{'singer': '미쓰에이', 'song': 'ㅎㅅ'},
	{'singer': '미쓰에이', 'song': 'ㅌㅊ'},
	{'singer': '미쓰에이', 'song': 'ㅂㄷㅋㄱㄱ'},
	{'singer': '미쓰에이', 'song': 'ㄴㅈㅇㅇㅈㅅㅇ'},
	{'singer': '시크릿', 'song': 'ㅇㅎ'},
	{'singer': '시크릿', 'song': 'ㅂㅂㄷㅂ'},
	{'singer': '시크릿', 'song': 'ㅁㅊㄱㄴ'},
	{'singer': '시크릿', 'song': 'ㅅㅇㅂㅇ'},
	{'singer': '시크릿', 'song': 'ㅍㅇㅈ'},
	{'singer': '시크릿', 'song': 'ㅅㄹㅇㅁㅂ'},
	{'singer': '애프터스쿨', 'song': 'ㄴㄸㅁㅇ'},
	{'singer': '애프터스쿨', 'song': 'ㅍㄹㅅㅂ'},
	{'singer': '애프터스쿨', 'song': 'ㅇㅁㄹㄷ'},
	{'singer': '달샤벳', 'song': 'ㅂㅂㅂ'},
	{'singer': '달샤벳', 'song': 'ㅇㄱㅇㄱ'},
	{'singer': '달샤벳', 'song': 'ㅎㅌㅇ'},
	{'singer': '달샤벳', 'song': 'ㄴㄷㄹㄹㅂ'},
	{'singer': '레인보우', 'song': 'ㅌㅁㅌㅁ'},
	{'singer': '레인보우', 'song': 'ㅆㅅㅇ'},
	{'singer': '레인보우', 'song': 'ㅇㅇ'},
	{'singer': '레인보우', 'song': 'ㄹㅂㅌㄷㅇ'},
	{'singer': '레인보우', 'song': 'ㅅㅇㄷㄹ'}
]































