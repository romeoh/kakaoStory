var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataDrink, dataMount, dataAction
	,img

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
	boySelect.addEventListener('click', function(){
		boySelect.className = 'checked';
		girlSelect.className = '';
		selected(0)
	}, false);
	girlSelect.addEventListener('click', function(){
		boySelect.className = '';
		girlSelect.className = 'checked';
		selected(1)
	}, false);
}, false);

function selected(idx){
	var  selColor = document.querySelector('#selColor')
		,str = ''

	if (idx === 0) {
		// 남자
		str += '<option value="">좋아하는 색상을 고르세요.</option>'
		str += '<option value="0">빨간색</option>'
		str += '<option value="1">주황색</option>'
		str += '<option value="2">노란색</option>'
		str += '<option value="3">초록색</option>'
		str += '<option value="4">연두색</option>'
		str += '<option value="5">파랑색</option>'
		str += '<option value="6">보라색</option>'
		str += '<option value="7">연보라색</option>'
		str += '<option value="8">갈색</option>'
		str += '<option value="9">검정색</option>'
		str += '<option value="10">하늘색</option>'
		str += '<option value="11">금색</option>'
		str += '<option value="12">은색</option>'
		str += '<option value="13">분홍색</option>'
		selColor.innerHTML = str
	} else {
		// 여자
		str += '<option value="">좋아하는 색상을 고르세요.</option>'
		str += '<option value="0">빨간색</option>'
		str += '<option value="1">주황색</option>'
		str += '<option value="2">노란색</option>'
		str += '<option value="3">초록색</option>'
		str += '<option value="4">연두색</option>'
		str += '<option value="5">파란색</option>'
		str += '<option value="6">보라색</option>'
		str += '<option value="7">연보라색 </option>'
		str += '<option value="8">갈색</option>'
		str += '<option value="9">검정색</option>'
		str += '<option value="10">하늘색</option>'
		str += '<option value="11">흰색</option>'
		str += '<option value="12">분홍색</option>'
		selColor.innerHTML = str
	}
	
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,selColor = document.querySelector('#selColor')
		,data
	
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}

	if (selColor.value == '') {
		alert('좋아하는 색상을 고르세요.');
	}
	
	
	if (boySelect.className == 'checked') {
		// 여자일 경우
		data = dataMale[selColor.value]
	} else if (girlSelect.className == 'checked') {
		// 남자일 경우
		data = dataFemale[selColor.value]
	}
	
	postMsg += '[색깔로 알아보는 심리테스트]\n\n';
	postMsg += '나는 ' + data.color + '을 좋아하는\n';
	postMsg += data.result + '입니다.\n\n';
	
	postMsg += 'http://goo.gl/r66cA\n';
	
	urlMsg = {
		title: '색깔로 알아보는 심리테스트',
		desc: '나는 ' + data.result + '입니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + data.img],
		type:'article'
	}
	console.log(urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : data.color,
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "색깔로 알아보는 심리테스트",
		url: "http://goo.gl/r66cA",
		appid: "funnyApp",
		appver: "1.0",
		appname: "색깔로 알아보는 심리테스트",
		type: "link"
	});
}


// 남자
dataMale = [
	{'img': 'colorM0.jpg', 'color': '빨간색', 'result': '유머있는 남자'},
	{'img': 'colorM1.jpg', 'color': '주황색', 'result': '싱그러운 남자'},
	{'img': 'colorM2.jpg', 'color': '노란색', 'result': '귀여운 남자'},
	{'img': 'colorM3.jpg', 'color': '초록색', 'result': '센스있는 남자'},
	{'img': 'colorM4.jpg', 'color': '연두색', 'result': '상큼한 남자'},
	{'img': 'colorM5.jpg', 'color': '파랑색', 'result': '씩씩한 남자'},
	{'img': 'colorM6.jpg', 'color': '보라색', 'result': '깔끔한 남자'},
	{'img': 'colorM7.jpg', 'color': '연보라색', 'result': '못생긴 남자'},
	{'img': 'colorM8.jpg', 'color': '갈색', 'result': '고독한 남자'},
	{'img': 'colorM9.jpg', 'color': '검정색', 'result': '남자다운 남자'},
	{'img': 'colorM10.jpg', 'color': '하늘색', 'result': '시원한 남자'},
	{'img': 'colorM11.jpg', 'color': '금색', 'result': '터프한 남자'},
	{'img': 'colorM12.jpg', 'color': '은색', 'result': '은은한 남자'},
	{'img': 'colorM13.jpg', 'color': '분홍색', 'result': '순진한 남자'}
]

// 여자
dataFemale = [
	{'img': 'colorF0.jpg', 'color': '빨간색', 'result': '참을성이 없는 여자'},
	{'img': 'colorF1.jpg', 'color': '주황색', 'result': '멍청하고 미련한 여자'},
	{'img': 'colorF2.jpg', 'color': '노란색', 'result': '이쁜 여자'},
	{'img': 'colorF3.jpg', 'color': '초록색', 'result': '씩씩한 여자'},
	{'img': 'colorF4.jpg', 'color': '연두색', 'result': '상큼한 여자'},
	{'img': 'colorF5.jpg', 'color': '파란색', 'result': '시원한 여자'},
	{'img': 'colorF6.jpg', 'color': '보라색', 'result': '섹시한 여자'},
	{'img': 'colorF7.jpg', 'color': '연보라색', 'result': '펑퍼짐한 여자'},
	{'img': 'colorF8.jpg', 'color': '갈색', 'result': '고독한 여자'},
	{'img': 'colorF9.jpg', 'color': '검정색', 'result': '카리스마 있는 여자'},
	{'img': 'colorF10.jpg', 'color': '하늘색', 'result': '싱그러운 여자'},
	{'img': 'colorF11.jpg', 'color': '흰색', 'result': '마음이 넓은 여자'},
	{'img': 'colorF12.jpg', 'color': '분홍색', 'result': '순진한 여자'}
]
































