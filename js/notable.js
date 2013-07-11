var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataMale, dataFemale

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

window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  userName = document.querySelector('#userName').value
		,idx = Math.floor(Math.random()*30)
		,resultName, resultPhoto, resultMsg
		,message
		,postMsg = ''
		,urlMsg = {}
		,data
		,matchRate = Math.floor(Math.random()*50 + 50)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	
	data = dataMale;
	
	postMsg += '[평행이론]\n\n'
	postMsg += userName + '님과 비슷한 삶을 살아갈 유명인을 찾았습니다.\n\n'
	postMsg += '이름: ' + data[idx]['name'] + '\n'
	postMsg += '매치율: ' + matchRate + '%\n'
	postMsg += '평행이론: ' + data[idx]['point'] + '\n\n'
	postMsg += 'http://goo.gl/n8443'

	urlMsg = {
		title: data[idx]['name'],
		desc: data[idx]['name'] + '님과 ' + matchRate + '% 닮았습니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + data[idx]['photo'] ],
		type:'article'
	}
	
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '평행이론',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "평행이론",
		url: "http://goo.gl/n8443",
		appid: "funnyApp",
		appver: "1.0",
		appname: "평행이론",
		type: "link"
	});
}


dataMale = [
	{'photo': 'n1.png', 'name': '김연아', 		'point':'피겨스케이트로 세계적인 명성을 얻습니다.'},
	{'photo': 'n2.png', 'name': '박지성', 		'point':'한국 축구역사에 큰획을 긋습니다.'},
	{'photo': 'n3.png', 'name': '박태환', 		'point':'한국 수영역사에 큰별이 됩니다.'},
	{'photo': 'n4.png', 'name': '백남준', 		'point':'세계에서 가장 존경받는 예술가가 됩니다.'},
	{'photo': 'n5.png', 'name': '미야자키 하야오',	'point':'셰계적으로 존경받는 만화가가 됩니다.'},
	{'photo': 'n6.png', 'name': '버락오바마', 		'point':'세계에서 가장 영향력 있는 인물이 됩니다.'},
	{'photo': 'n7.png', 'name': '빌게이츠', 		'point':'세계에서 가장 영향력 있는 기업인이 됩니다.'},
	{'photo': 'n8.png', 'name': '스티브잡스', 		'point':'역사상 가장 존경받는 기업인이 됩니다.'},
	{'photo': 'n9.png', 'name': '오프라 윈프리', 	'point':'셰계에서 가장 영향력 있는 인물이 됩니다.'},
	{'photo': 'n10.png', 'name': '반기문', 		'point':'한국 역사상 가장 영향력있는 인물이 됩니다.'},
	{'photo': 'n11.png', 'name': '이건희', 		'point':'세계적인 기업을 만듭니다.'},
	{'photo': 'n12.png', 'name': '차범근', 		'point':'한국 축구역사의 큰별이 됩니다.'},
	{'photo': 'n13.png', 'name': '손연재', 		'point':'한국 체조역사의 최고 스타가 됩니다.'},
	{'photo': 'n14.png', 'name': '히딩크', 		'point':'한국에서 가장 존경받는 외국인이 됩니다.'},
	{'photo': 'n15.png', 'name': '허경영', 		'point':'가장 인기있는 대선후보가 됩니다.'},
	{'photo': 'n16.png', 'name': '공지영', 		'point':'소설을 잘씁니다.'},
	{'photo': 'n17.png', 'name': '이외수', 		'point':'트위터 스타가 됩니다.'},
	{'photo': 'n18.png', 'name': '박근혜', 		'point':'한국에서 가장 영향력 있는 인물이 됩니다.'},
	{'photo': 'n19.png', 'name': '정주영', 		'point':'가장 존경받는 기업인이 됩니다.'},
	{'photo': 'n20.png', 'name': '안철수', 		'point':'인기있는 정치인이 됩니다.'},
	{'photo': 'n21.png', 'name': '박찬호', 		'point':'한국 야구역사에서 가장 인기있는 사람이 됩니다.'},
	{'photo': 'n22.png', 'name': '김정은', 		'point':'엄청 욕을 먹습니다.'},
	{'photo': 'n23.png', 'name': '아인슈타인', 	'point':'인류최고의 천재가 됩니다.'},
	{'photo': 'n24.png', 'name': '레오나르도 다빈치', 'point':'역사상 가장 뛰어난 천재가 됩니다.'},
	{'photo': 'n25.png', 'name': '모차르트', 		'point':'음악사에 가장 뛰어난 천재가 됩니다.'},
	{'photo': 'n26.png', 'name': '베토벤', 		'point':'음악사에 가장 빛나는 별이 됩니다.'},
	{'photo': 'n27.png', 'name': '셰익스피어', 	'point':'세계문학사에서 가장 존경받는 인물이 됩니다.'},
	{'photo': 'n28.png', 'name': '달라이라마', 	'point':'세계적인 영향력 있는 인물이 됩니다.'},
	{'photo': 'n29.png', 'name': '닐 암스트롱', 	'point':'인류 최초의 업적을 남깁니다.'},
	{'photo': 'n30.png', 'name': '마이클잭슨', 	'point':'음악사에서 가장 뛰어난 천재가 됩니다.'},
	{'photo': 'n31.png', 'name': '싸이', 			'point':'한류의 선봉장이 됩니다.'},
	{'photo': 'n32.png', 'name': '마크주커버그', 	'point':'젊은 나이에 세계적인 기업을 일굽니다.'}
]




















































