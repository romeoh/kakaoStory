var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,index = 0
	,age

window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
	
	M('#btnStart').on('click', function() {
		
		if (M('#userName').val() === '') {
			alert('이름을 입력하세요.');
			return;
		}
		if (M('#age').val() === '') {
			alert('나이를 입력하세요.');
			return;
		}
		age = parseInt(M('#age').val(), 10)
		if (isNaN(age)) {
			alert('숫자만 입력해주세요.');
			M('#age').val('')
			return;
		}

		M('#userName').css('display', 'none')
		M('#age').css('display', 'none')
		M('#btnStart').css('display', 'none')
		M('#btnYes').css('display', 'inline-block')
		M('#btnNo').css('display', 'inline-block')
		M('.ask').css('display', 'block')

		index = 0;
		gameStart()
	})

	M('#btnYes').on('click', function() {
		age = Number(age) + Number(data[index]['yes'])
		index++
		gameStart()
	})

	M('#btnNo').on('click', function() {
		age = Number(age) + Number(data[index]['no'])
		index++
		gameStart()
	})

	function gameStart() {
		if (index == 17) {
			M('#btnYes').css('display', 'none')
			M('#btnNo').css('display', 'none')
			M('#count').text('')
			M('#ask').text(M('#userName').val()+'님의 피부 나이는 '+age+'살 입니다.');
			return;
		}

		M('#ask').text(data[index]['q'])
		M('#count').text(index+1 + '/17')
	}
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  idx = Math.floor(Math.random()*50) + 1
		,postMsg = ''
		,idx
	
	if (index != 17) {
		alert('테스트를 완료해주세요.');
		return false;
	}
	
	if (M('#age').val() > age) {
		desc = '그대는 피부동안 이군요.'
	} else if (M('#age').val() < age) {
		desc = '피부관리가 필요해 보입니다.'
	} else {
		desc = '나이에 알맞는 피부입니다.'
	}

	postMsg += '[피부나이 테스트]\n\n';
	postMsg += M('#userName').val() + '님의 피부 나이는 ' + age + '살 입니다.\n\n';

	postMsg += 'http://goo.gl/O4PZ7B';
	
	urlMsg = {
		title: '피부나이 테스트',
		desc: desc,
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/skin.png'],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
		post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '깨알유머:',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "피부나이 테스트",
		url: "http://goo.gl/O4PZ7B",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}



data = [
	{'yes':'-1', 'no':'+1', 'q':'일주일에 1시간 이상 피부 관리에 투자한다.'},
	{'yes':'-1', 'no':'0' , 'q':'매일 규칙적으로 식사한다.'},
	{'yes':'+3', 'no':'-1', 'q':'하루 3-4시간 이상 햇볕에 노출도니다.'},
	{'yes':'-1', 'no':'+2', 'q':'항상 자외선 차단제를 바른다.'},
	{'yes':'-1', 'no':'0' , 'q':'내피부 타입에 맞는 세안제를 사용한다.'},
	{'yes':'-1', 'no':'0' , 'q':'아침저녁으로 반드시 세안한다.'},
	{'yes':'+1', 'no':'-1', 'q':'날마다 메이크업을 한다.'},
	{'yes':'-1', 'no':'+1', 'q':'육류보다 채소를 좋아한다.'},
	{'yes':'-1', 'no':'+1', 'q':'하루 8시간 이상 숙면을 취한다.'},
	{'yes':'-1', 'no':'+1', 'q':'일주일에 3시간 이상 운동한다.'},
	{'yes':'+2', 'no':'-1', 'q':'담배를 피운다.'},
	{'yes':'+2', 'no':'-1', 'q':'술을 일주일에 3회 이상 마신다.'},
	{'yes':'+2', 'no':'0' , 'q':'변비가 있다'},
	{'yes':'+1', 'no':'0' , 'q':'커피를 하루 3잔 이상 마신다.'},
	{'yes':'-1', 'no':'+1', 'q':'피부에 문제가 생기면 전문의를 찾는다.'},
	{'yes':'-1', 'no':'+1', 'q':'노화 방지용 기능성 화장품을 사용한다.'},
	{'yes':'+2', 'no':'-1', 'q':'스트레스를 자주 받는다.'}
]





























