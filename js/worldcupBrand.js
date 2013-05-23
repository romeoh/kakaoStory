var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,data
	,arr32
	,arr16
	,arr8
	,arr4
	,arr2
	,arr1
	,cuRound
	,cuStage
	,winner = {}

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
	init()
	initStart();

	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}

// 초기화
function init() {
	arr32 = []
	arr16 = []
	arr8 = []
	arr4 = []
	arr2 = []
	arr1 = []
	cuRound = 0
	cuStage = 32
}


function initStart() {
	M('#userName').on('keyup', function(evt, mp){
		//M('h1').text('연예인 이상형 '+mp.val()+'컵')
	})

	M('#btnBoy').click(function(){
		if (M('#userName').val() == '') {
			alert('이름을 입력하세요.');
			return;
		}
		data = dataBrand;
		insert32(data, 32)
		start(0)
	})
	
}


function start(flag) {
	M('#start').css('display', 'none');
	M('#game').css('display', 'block');
	

	M('.first').on('click', selPic)
	M('.second').on('click', selPic)

	fight(cuRound, 32);
}

function selPic(evt, mp){
	M('#first').attr('src', '')
	M('#second').attr('src', '')
	M('#firstPhoto').text('')
	M('#secondPhoto').text('')

	if (cuStage === 32) {
		arr16.push(mp.data('idx'));
		if (cuRound <= 14) {
			cuRound++
			fight(cuRound, 32);
		} else {
			cuStage = 16;
			cuRound = 0
			fight(cuRound, 16);
		}
	} else if (cuStage === 16) {
		arr8.push(mp.data('idx'));
		if (cuRound <= 6) {
			cuRound++
			fight(cuRound, 16);
		} else {
			cuStage = 8;
			cuRound = 0
			fight(cuRound, 8);
		}
	} else if (cuStage === 8) {
		arr4.push(mp.data('idx'));
		if (cuRound <= 2) {
			cuRound++
			fight(cuRound, 8);
		} else {
			cuStage = 4;
			cuRound = 0
			fight(cuRound, 4);
		}
	} else if (cuStage === 4) {
		arr2.push(mp.data('idx'));
		if (cuRound <= 0) {
			cuRound++
			fight(cuRound, 4);
		} else {
			cuStage = 2;
			cuRound = 0
			fight(cuRound, 2);
		}
	} else if (cuStage === 2) {
		M('#game').css('display', 'none');
		M('#result').css('display', 'block');
		M('#winnerTitme').text( M('#userName').val() + '님이 뽑은 최고의 브랜드');
		
		M('#winnerPhoto').attr('src', '../img/'+data[mp.data('idx')]['photo'])
		M('#winnerName').text(data[mp.data('idx')]['name']);
		//console.log('winner', data[mp.data('idx')]['name'])
		winner.photo = data[mp.data('idx')]['photo']
		winner.names = data[mp.data('idx')]['name']
	}
}

function fight(round, final){
	var  left = (Number(round)+Number(1)) * 2 - 2
		,right = (Number(round)+Number(1)) * 2 - 1

	if (left == -1) {
		left = 0;
	}
	if (right == 0) {
		right = 1;
	}
	//console.log(data[ arr32[left] ])
	//console.log(data[ arr32[right] ])
	//console.log(round)
	
	if (final === 32) {
		M('#first').attr('src', '../img/' + data[ arr32[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr32[left] ]['name'])
			.parent()
			.data('idx', arr32[left])
		M('#second').attr('src', '../img/' + data[ arr32[right] ]['photo'])
		M('#secondPhoto')
			.text(data[ arr32[right] ]['name'])
			.parent()
			.data('idx', arr32[right])

		M('#round').text('32강전');
		M('#stage').text('('+(cuRound+1)+'/16)');
	}

	if (final === 16) {
		M('#first').attr('src', '../img/' + data[ arr16[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr16[left] ]['name'])
			.parent()
			.data('idx', arr16[left])
		M('#second').attr('src', '../img/' + data[ arr16[right] ]['photo'])
		M('#secondPhoto')
			.text(data[ arr16[right] ]['name'])
			.parent()
			.data('idx', arr16[right])

		M('#round').text('16강전');
		M('#stage').text('('+(cuRound+1)+'/8)');
	}

	if (final === 8) {
		M('#first').attr('src', '../img/' + data[ arr8[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr8[left] ]['name'])
			.parent()
			.data('idx', arr8[left])
		M('#second').attr('src', '../img/' + data[ arr8[right] ]['photo'])
		M('#secondPhoto')
			.text(data[ arr8[right] ]['name'])
			.parent()
			.data('idx', arr8[right])

		M('#round').text('8강전');
		M('#stage').text('('+(cuRound+1)+'/4)');
	}

	if (final === 4) {
		M('#first').attr('src', '../img/' + data[ arr4[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr4[left] ]['name'])
			.parent()
			.data('idx', arr4[left])
		M('#second').attr('src', '../img/' + data[ arr4[right] ]['photo'])
		M('#secondPhoto')
			.text(data[ arr4[right] ]['name'])
			.parent()
			.data('idx', arr4[right])

		M('#round').text('준결승');
		M('#stage').text('('+(cuRound+1)+'/2)');
	}

	if (final === 2) {
		M('#first').attr('src', '../img/' + data[ arr2[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr2[left] ]['name'])
			.parent()
			.data('idx', arr2[left])
		M('#second').attr('src', '../img/' + data[ arr2[right] ]['photo'])
		M('#secondPhoto')
			.text(data[ arr2[right] ]['name'])
			.parent()
			.data('idx', arr2[right])

		M('#round').text('결승');
		M('#stage').text('');
	}
}



function insert32(data, leng) {
	ranValue = Math.floor(Math.random() * data.length)
	if (arr32.length === 0) {
		arr32.push(ranValue);
		insert32(data, leng)
	} else {
		if (arr32.length >= leng) {
			return arr32;
		} else {
			for (var i=0; i<arr32.length; i++) {
				if (arr32[i] === ranValue) {
					insert32(data, leng);
					break;
				}
			}
			
			if (arr32.length <= leng-1) {
				arr32.push(ranValue);
				insert32(data, leng)
			}
		}
	}
	return arr32
	
}

function getRanNum(arr, val){
	for (var arrVal in arr) {
		val
	}
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  sexType
		,userName = document.querySelector('#userName').value
		,postMsg = ''
	
	postMsg += '[' + M('#userName').val() + '배 명품 월드컵]\n';
	postMsg += M('#userName').val() + '님의 사회적 지휘와 명성에 \n';
	postMsg += '걸맞는 브랜드는 ' + winner.names + '입니다.\n\n';
	postMsg += 'http://goo.gl/eUdjn\n';

	urlMsg = {
		title: '명품 월드컵',
		desc: M('#userName').val() + '님의 브랜드: ' + winner.names,
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + winner.photo ],
		type:'article'
	}
console.log(postMsg, urlMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '명품 월드컵',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "명품 월드컵",
		url: "http://goo.gl/eUdjn",
		appid: "funnyApp",
		appver: "1.0",
		appname: "명품 월드컵",
		type: "link"
	});
}


dataBrand = [
	{'photo': 'brand01.jpg', 'name': '구찌', 'msg':''},
	{'photo': 'brand02.jpg', 'name': '샤넬', 'msg':''},
	{'photo': 'brand03.jpg', 'name': '꼼데 가르송', 'msg':''},
	{'photo': 'brand04.jpg', 'name': '리바이스', 'msg':''},
	{'photo': 'brand05.jpg', 'name': '지미추', 'msg':''},
	{'photo': 'brand06.jpg', 'name': '에이치앤엠', 'msg':''},
	{'photo': 'brand07.jpg', 'name': '베라왕', 'msg':''},
	{'photo': 'brand08.jpg', 'name': '토리버치', 'msg':''},
	{'photo': 'brand09.jpg', 'name': '머버리', 'msg':''},
	{'photo': 'brand10.jpg', 'name': '발렌시아가', 'msg':''},
	{'photo': 'brand11.jpg', 'name': '마놀리블라닉', 'msg':''},
	{'photo': 'brand12.jpg', 'name': '폴스미스', 'msg':''},
	{'photo': 'brand13.jpg', 'name': '루이비통', 'msg':''},
	{'photo': 'brand14.jpg', 'name': '프라다', 'msg':''},
	{'photo': 'brand15.jpg', 'name': '크리스찬디오르', 'msg':''},
	{'photo': 'brand16.jpg', 'name': '입생로랑', 'msg':''},
	{'photo': 'brand17.jpg', 'name': '크리스찬루부탱', 'msg':''},
	{'photo': 'brand18.jpg', 'name': '펜디', 'msg':''},
	{'photo': 'brand19.jpg', 'name': '헌터', 'msg':''},
	{'photo': 'brand20.jpg', 'name': '돌체앤가바나', 'msg':''},
	{'photo': 'brand21.jpg', 'name': '살바토레페라가모', 'msg':''},
	{'photo': 'brand22.jpg', 'name': '겐조', 'msg':''},
	{'photo': 'brand23.jpg', 'name': '비비안웨스트우드', 'msg':''},
	{'photo': 'brand24.jpg', 'name': '마크제이콥스', 'msg':''},
	{'photo': 'brand25.jpg', 'name': '질스튜어트', 'msg':''},
	{'photo': 'brand26.jpg', 'name': '레페토', 'msg':''},
	{'photo': 'brand27.jpg', 'name': '토즈', 'msg':''},
	{'photo': 'brand28.jpg', 'name': '발맹', 'msg':''},
	{'photo': 'brand29.jpg', 'name': '지방시', 'msg':''},
	{'photo': 'brand30.jpg', 'name': '발렉스트라', 'msg':''},
	{'photo': 'brand31.jpg', 'name': '디케이앤와이', 'msg':''},
	{'photo': 'brand32.jpg', 'name': '안나수이', 'msg':''},
	{'photo': 'brand33.jpg', 'name': '티파니', 'msg':''},
	{'photo': 'brand34.jpg', 'name': '스와로브스키', 'msg':''},
	{'photo': 'brand35.jpg', 'name': '케이트스페이드', 'msg':''},
	{'photo': 'brand36.jpg', 'name': '레이벤', 'msg':''},
	{'photo': 'brand37.jpg', 'name': '미우미우', 'msg':''},
	{'photo': 'brand38.jpg', 'name': '록시', 'msg':''},
	{'photo': 'brand39.jpg', 'name': '쥬시꾸뛰르', 'msg':''},
	{'photo': 'brand40.jpg', 'name': '림아크라', 'msg':''},
	{'photo': 'brand41.jpg', 'name': '바비브라운', 'msg':''},
	{'photo': 'brand42.jpg', 'name': '조르지오아르마니', 'msg':''},
	{'photo': 'brand43.jpg', 'name': '벨스타프', 'msg':''},
	{'photo': 'brand44.jpg', 'name': '탑샵', 'msg':''},
	{'photo': 'brand45.jpg', 'name': '미나리치', 'msg':''},
	{'photo': 'brand46.jpg', 'name': '무인양품', 'msg':''},
	{'photo': 'brand47.jpg', 'name': '막스마라', 'msg':''},
	{'photo': 'brand48.jpg', 'name': '발리', 'msg':''},
	{'photo': 'brand49.jpg', 'name': '에스티로더', 'msg':''},
	{'photo': 'brand50.jpg', 'name': '캘빈클라인', 'msg':''},
	{'photo': 'brand51.jpg', 'name': '불가리', 'msg':''},
	{'photo': 'brand52.jpg', 'name': '자라', 'msg':''},
	{'photo': 'brand53.jpg', 'name': '에뜨로', 'msg':''},
	{'photo': 'brand54.jpg', 'name': '랑콤', 'msg':''},
	{'photo': 'brand55.jpg', 'name': '로라메르시에', 'msg':''}
]
































