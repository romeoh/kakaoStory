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

	data.title = 'CF 패러디';
	data.url = 'http://goo.gl/WQrwI';

	if (cf === '0') {
		database = data0
		idx = process(database)

		post += '[' + data.title + ']\n\n';
		post += '그에게 짜기만 했던 시간\n\n';
		post += '"누가 내 ' + database[idx]['article'] + '에 소금쳤어!!!"\n\n';
		post += '내' + database[idx]['article'] + '의 반전';

		data.desc = '누가 내' + database[idx]['article'] + '에 소금쳤어!!!';
		data.img = 'http://romeoh.github.io/kakaoStory/img/cf_pay_thum.png';
	}

	if (cf === '1') {
		database = data1
		idx = process(database)
		artcle = database[idx]['article']
		check1 = database[idx]['check1']
		check2 = database[idx]['check2']

		post += '[' + data.title + ']\n\n';
		post += artcle + '에게도 영혼이 있다면\n';
		post += '물불을 두려워 않고 뛰어드는 용기와 \n';
		post += '어떤 시련에도 상처받지 않는 강인함 \n\n';
		post += '단언컨대, ' + artcle + check1 + ' 가장 완벽 합니다.';

		data.desc = '단언컨대, ' + artcle + check1 + ' 가장 완벽 합니다.';
		data.img = 'cf_pay_thum2.png';
	}

	if (cf === '2') {
		database = data2
		idx = process(database)
		artcle = database[idx]['article']
		check1 = database[idx]['check1']
		check2 = database[idx]['check2']

		post += '작작 좀 써!!\n\n';
		post += '작작 쫌!!\n\n';
		post += '하루종일 스마트폰으로 드라마만 보고\n\n';
		post += artcle + check2 + ' 남아 돌아?\n\n';
		post += '그래요 남아 돌아요.\n\n';
		post += '뭐~어?\n\n';
		post += '난 ' + artcle + check2 + ' 두배라고요.\n\n';
		post += '두배?\n\n';
		post += '리...리얼리?';

		data.desc = artcle + check2 + ' 남아 돌아?';
		data.img = 'cf_pay_thum3.png';
	}

	data.post = post;
	sendData(data);
}

var cf = '0'
window.addEventListener('DOMContentLoaded', function(){
	M('#selCf').on('change', function(evt, mp){
		if (mp.val() === '0') {
			cf = '0'
			M('h1').text('누가 내 시급에 소금쳤어!!')
			M('#img').attr('src', '../img/cf_pay.png')
		} else if (mp.val() === '1') {
			cf = '1'
			M('h1').text('메탈은 가장 완벽한 물질입니다.')
			M('#img').attr('src', '../img/cf_pay2.png')
		} else if (mp.val() === '2') {
			cf = '2'
			M('h1').text('데이터가 남아 돌아?')
			M('#img').attr('src', '../img/cf_pay3.png')
		}
	})
}, false);


data0 = [
	{'check1':'은', 'check2':'이', 'article': '월급'},
	{'check1':'은', 'check2':'이', 'article': '결혼'},
	{'check1':'은', 'check2':'이', 'article': '자존심'},
	{'check1':'은', 'check2':'이', 'article': '밥'},
	{'check1':'는', 'check2':'가', 'article': '카카오 스토리'},
	{'check1':'은', 'check2':'이', 'article': '카톡'},
	{'check1':'은', 'check2':'이', 'article': '집'},
	{'check1':'은', 'check2':'이', 'article': '용돈'},
	{'check1':'은', 'check2':'이', 'article': '스마트폰'},
	{'check1':'는', 'check2':'가', 'article': '궁뎅이'},
	{'check1':'는', 'check2':'가', 'article': '다리'},
	{'check1':'은', 'check2':'이', 'article': '마음'},
	{'check1':'는', 'check2':'가', 'article': '연애'},
	{'check1':'은', 'check2':'이', 'article': '첫사랑'},
	{'check1':'은', 'check2':'이', 'article': '시험'},
	{'check1':'은', 'check2':'이', 'article': '멘탈'},
	{'check1':'은', 'check2':'이', 'article': '양말'},
	{'check1':'은', 'check2':'이', 'article': '패션'},
	{'check1':'은', 'check2':'이', 'article': '이름'},
	{'check1':'은', 'check2':'이', 'article': '인생'},
	{'check1':'은', 'check2':'이', 'article': '셀카'},
	{'check1':'은', 'check2':'이', 'article': '사진'}
]

data1 = [
	{'check1':'은', 'check2':'이', 'article': '내 멘탈'},
	{'check1':'는', 'check2':'가', 'article': '내 똘끼'},
	{'check1':'은', 'check2':'이', 'article': '내 자신감'},
	{'check1':'은', 'check2':'이', 'article': '내 잘난척'},
	{'check1':'는', 'check2':'가', 'article': '내 궁뎅이'},
	{'check1':'은', 'check2':'이', 'article': '내 섹시함'},
	{'check1':'은', 'check2':'이', 'article': '내 스타일'},
	{'check1':'은', 'check2':'이', 'article': '내 패션'},
	{'check1':'는', 'check2':'가', 'article': '내 뇌'},
	{'check1':'은', 'check2':'이', 'article': '내 허풍'},
	{'check1':'은', 'check2':'이', 'article': '내 인생'},
	{'check1':'은', 'check2':'이', 'article': '내 학창시절'},
	{'check1':'은', 'check2':'이', 'article': '내 얼굴'},
	{'check1':'는', 'check2':'가', 'article': '내 미모'}
]


data2 = [
	{'check1':'은', 'check2':'이', 'article': '자신감'},
	{'check1':'은', 'check2':'이', 'article': '개념'},
	{'check1':'는', 'check2':'가', 'article': '아이큐'},
	{'check1':'는', 'check2':'가', 'article': '몸무게'},
	{'check1':'는', 'check2':'가', 'article': '키'},
	{'check1':'은', 'check2':'이', 'article': '애인'},
	{'check1':'은', 'check2':'이', 'article': '머리카락'},
	{'check1':'은', 'check2':'이', 'article': '멘탈'},
	{'check1':'는', 'check2':'가', 'article': '친구'}
]
























