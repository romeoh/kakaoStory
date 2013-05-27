var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,data
	//,arr16
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
	//arr16 = []
	arr16 = []
	arr8 = []
	arr4 = []
	arr2 = []
	arr1 = []
	cuRound = 0
	cuStage = 16
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
		settle(data, 16)
		start(0)
	})
	
}


function start(flag) {
	M('#start').css('display', 'none');
	M('#game').css('display', 'block');
	

	M('.first').on('click', selPic)
	M('.second').on('click', selPic)

	fight(cuRound, 16);
}

function selPic(evt, mp){
	M('#first').attr('src', '')
	M('#second').attr('src', '')
	M('#firstPhoto').text('')
	M('#secondPhoto').text('')

	if (cuStage === 16) {
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
		M('#winnerTitme').text( M('#userName').val() + '님이 뽑은 명품시구');
		
		M('#winnerPhoto').attr('src', '../img/'+data[mp.data('idx')]['photo'])
		M('#winnerName').text(data[mp.data('idx')]['name']+'의 시구');
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
	//console.log(data[ arr16[left] ])
	//console.log(data[ arr16[right] ])
	//console.log(round)
	
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



function settle(data, leng) {
	ranValue = Math.floor(Math.random() * data.length)
	if (arr16.length === 0) {
		arr16.push(ranValue);
		settle(data, leng)
	} else {
		if (arr16.length >= leng) {
			return arr16;
		} else {
			for (var i=0; i<arr16.length; i++) {
				if (arr16[i] === ranValue) {
					settle(data, leng);
					break;
				}
			}
			
			if (arr16.length <= leng-1) {
				arr16.push(ranValue);
				settle(data, leng)
			}
		}
	}
	return arr16
	
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
	
	postMsg += '[연예인 시구 월드컵]\n';
	postMsg += M('#userName').val() + '님이 뽑은 명품 시구는\n';
	postMsg += winner.names + '의 시구입니다. \n\n';
	postMsg += 'http://goo.gl/fF9We\n';

	urlMsg = {
		title: '연예인 시구 월드컵',
		desc: winner.names,
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
		msg: "연예인 시구 월드컵",
		url: "http://goo.gl/fF9We",
		appid: "funnyApp",
		appver: "1.0",
		appname: "월드컵",
		type: "link"
	});
}


dataBrand = [
	{'photo': 'sigu01.jpg', 'name': '클라라'},
	{'photo': 'sigu02.jpg', 'name': '이수정'},
	{'photo': 'sigu03.jpg', 'name': '강예빈'},
	{'photo': 'sigu04.jpg', 'name': '신소율'},
	{'photo': 'sigu05.jpg', 'name': '홍수아'},
	{'photo': 'sigu06.jpg', 'name': '민아'},
	{'photo': 'sigu07.jpg', 'name': '김태희'},
	{'photo': 'sigu08.jpg', 'name': '구하라'},
	{'photo': 'sigu09.jpg', 'name': '수지'},
	{'photo': 'sigu10.jpg', 'name': '박신혜'},
	{'photo': 'sigu11.jpg', 'name': '박한별'},
	{'photo': 'sigu12.jpg', 'name': '보아'},
	{'photo': 'sigu13.jpg', 'name': '박은지'},
	{'photo': 'sigu14.jpg', 'name': '강민경'},
	{'photo': 'sigu15.jpg', 'name': '손연재'},
	{'photo': 'sigu16.jpg', 'name': '공현주'},
	{'photo': 'sigu17.jpg', 'name': '남규리'},
	{'photo': 'sigu18.jpg', 'name': '박시연'},
	{'photo': 'sigu19.jpg', 'name': '오연서'},
	{'photo': 'sigu20.jpg', 'name': '박수진'},
	{'photo': 'sigu21.jpg', 'name': '박화선'}
]
































