var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,cf = '0'

if (os == 'ios' || os == 'android') {
	//init();
} else {
	var  adTop = document.querySelector('#adTop')
		,adBottom = document.querySelector('#adBottom')
		,adMiddle = document.querySelector('#adMiddle')
	document.querySelector('body').removeChild(adTop)
	document.querySelector('body').removeChild(adBottom)
	document.querySelector('body').removeChild(adMiddle)
}

window.addEventListener('DOMContentLoaded', function(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);

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


//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
	
	if (cf === '0') {
		data = data0
		dataRan = Math.floor(Math.random() * data.length)
		artcle = data[dataRan]['article']

		postMsg += '그에게 짜기만 했던 시간\n\n';
		postMsg += '"누가 내 ' + artcle + '에 소금쳤어!!!"\n\n';
		postMsg += '내' + artcle + '의 반전\n\n';

		desc = '누가 내' + artcle + '에 소금쳤어!!!'
		img = 'cf_pay_thum.png'
		appname = '누가 내 시급에 소금쳤어!!'
	}

	if (cf === '1') {
		data = data1
		dataRan = Math.floor(Math.random() * data.length)
		artcle = data[dataRan]['article']
		check1 = data[dataRan]['check1']
		check2 = data[dataRan]['check2']

		postMsg += artcle + '에게도 영혼이 있다면\n';
		postMsg += '물불을 두려워 않고 뛰어드는 용기와 \n';
		postMsg += '어떤 시련에도 상처받지 않는 강인함 \n\n';
		postMsg += '단언컨대, ' + artcle + check1 + ' 가장 완벽 합니다. \n\n';

		desc = '단언컨대, ' + artcle + check1 + ' 가장 완벽 합니다.'
		img = 'cf_pay_thum2.png'
		appname = '단언컨대, 메탈은 가장 완벽한 물질입니다.'
	}

	if (cf === '2') {
		data = data2
		dataRan = Math.floor(Math.random() * data.length)
		artcle = data[dataRan]['article']
		check1 = data[dataRan]['check1']
		check2 = data[dataRan]['check2']

		postMsg += '작작 좀 써!!\n\n';
		postMsg += '작작 쫌!!\n\n';
		postMsg += '하루종일 스마트폰으로 드라마만 보고\n\n';
		postMsg += artcle + check2 + ' 남아 돌아?\n\n';
		postMsg += '그래요 남아 돌아요.\n\n';
		postMsg += '뭐~어?\n\n';
		postMsg += '난 ' + artcle + check2 + ' 두배라고요.\n\n';
		postMsg += '두배?\n\n';
		postMsg += '리...리얼리?\n\n\n';

		desc = artcle + check2 + ' 남아 돌아?'
		img = 'cf_pay_thum3.png'
		appname = '데이터가 남아 돌아?'
	}
	
	
	postMsg += 'http://goo.gl/WQrwI\n';
	
	urlMsg = {
		title: 'CF 패러디',
		desc: desc,
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + img ],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : appname,
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "CF 패러디",
		url: "http://goo.gl/WQrwI",
		appid: "funnyApp",
		appver: "1.0",
		appname: "CF 패러디",
		type: "link"
	});
}


data0 = [
	{'check1':'은', 'check2':'이', 'article': '월급'},
	{'check1':'은', 'check2':'이', 'article': '결혼'},
	{'check1':'은', 'check2':'이', 'article': '가정'},
	{'check1':'는', 'check2':'가', 'article': '회사'},
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
	{'check1':'는', 'check2':'가', 'article': '나이'},
	{'check1':'은', 'check2':'이', 'article': '이름'},
	{'check1':'은', 'check2':'이', 'article': '인생'},
	{'check1':'는', 'check2':'가', 'article': '친구에게'},
	{'check1':'은', 'check2':'이', 'article': '연금'},
	{'check1':'은', 'check2':'이', 'article': '사진'}
]

data1 = [
	{'check1':'은', 'check2':'이', 'article': '내 콩팥'},
	{'check1':'은', 'check2':'이', 'article': '내 멘탈'},
	{'check1':'는', 'check2':'가', 'article': '내 똘끼'},
	{'check1':'은', 'check2':'이', 'article': '내 자신감'},
	{'check1':'는', 'check2':'가', 'article': '내 친구'},
	{'check1':'는', 'check2':'가', 'article': '내 궁뎅이'},
	{'check1':'은', 'check2':'이', 'article': '내 첫사랑'},
	{'check1':'은', 'check2':'이', 'article': '내 이름'},
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
	{'check1':'는', 'check2':'가', 'article': '친구'}
]
























