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
		if (M('#title').val() == '-1') {
			alert('타이틀을 선택하세요.');
			return;
		}
		data = dataBrand;
		settle(data, 12)
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
		if (cuRound <= 4) {
			cuRound++
			fight(cuRound, 16);
		} else {
			cuStage = 8;
			cuRound = 0
			fight(cuRound, 8);
		}
	} else if (cuStage === 8) {
		arr4.push(mp.data('idx'));
		if (cuRound <= 1) {
			cuRound++
			fight(cuRound, 8);
		} else {
			cuStage = 4;
			cuRound = 0
			fight(cuRound, 4);
		}
	} else if (cuStage === 4) {
		arr2.push(mp.data('idx'));
		arr2.push(arr4[2]);
		// if (cuRound <= 0) {
		// 	cuRound++
		// 	fight(cuRound, 4);
		// } else {
			cuStage = 2;
			cuRound = 0
			fight(cuRound, 2);
		//}
	} else if (cuStage === 2) {
		M('#game').css('display', 'none');
		M('#result').css('display', 'block');
		//M('#winnerTitme').text( '님이 뽑은 ');
		
		M('#winnerPhoto').attr('src', '../images/exo/'+data[mp.data('idx')]['photo'])
		M('#winnerName').text( M('#title').val() + ' ' + data[mp.data('idx')]['name'] + ' 입니다.');
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
		M('#first').attr('src', '../images/exo/' + data[ arr16[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr16[left] ]['name'])
			.parent()
			.data('idx', arr16[left])
		M('#second').attr('src', '../images/exo/' + data[ arr16[right] ]['photo'])
		M('#secondPhoto')
			.text(data[ arr16[right] ]['name'])
			.parent()
			.data('idx', arr16[right])

		M('#round').text('12강전');
		M('#stage').text('('+(cuRound+1)+'/6)');
	}

	if (final === 8) {
		M('#first').attr('src', '../images/exo/' + data[ arr8[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr8[left] ]['name'])
			.parent()
			.data('idx', arr8[left])
		M('#second').attr('src', '../images/exo/' + data[ arr8[right] ]['photo'])
		M('#secondPhoto')
			.text(data[ arr8[right] ]['name'])
			.parent()
			.data('idx', arr8[right])

		M('#round').text('6강전');
		M('#stage').text('('+(cuRound+1)+'/3)');
	}

	if (final === 4) {
		M('#first').attr('src', '../images/exo/' + data[ arr4[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr4[left] ]['name'])
			.parent()
			.data('idx', arr4[left])
		M('#second').attr('src', '../images/exo/' + data[ arr4[right] ]['photo'])
		M('#secondPhoto')
			.text(data[ arr4[right] ]['name'])
			.parent()
			.data('idx', arr4[right])

		M('#round').text('준결승');
		M('#stage').text('('+(cuRound+1)+'/1)');
	}

	if (final === 2) {
		M('#first').attr('src', '../images/exo/' + data[ arr2[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr2[left] ]['name'])
			.parent()
			.data('idx', arr2[left])
		M('#second').attr('src', '../images/exo/' + data[ arr2[right] ]['photo'])
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
		,postMsg = ''
	
	postMsg += '[엑소 월드컵]\n';
	//postMsg += M('#userName').val() + '님이 뽑은 명품 시구는\n';
	postMsg += M('#title').val() + ' ' + winner.names + ' 입니다. \n\n';
	postMsg += 'http://goo.gl/omEoZI\n';

	urlMsg = {
		title: '엑소 월드컵',
		desc: winner.names,
		imageurl: ['http://romeoh.github.io/kakaoStory/images/exo/' + winner.photo ],
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
		msg: "엑소 월드컵",
		url: "http://goo.gl/omEoZI",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}


dataBrand = [
	{'photo': 'exo01.png', 'name': '카이'},
	{'photo': 'exo02.png', 'name': '루한'},
	{'photo': 'exo03.png', 'name': '타오'},
	{'photo': 'exo04.png', 'name': '첸'},
	{'photo': 'exo05.png', 'name': '세훈'},
	{'photo': 'exo06.png', 'name': '레이'},
	{'photo': 'exo07.png', 'name': '시우민'},
	{'photo': 'exo08.png', 'name': '백현'},
	{'photo': 'exo09.png', 'name': '디오'},
	{'photo': 'exo10.png', 'name': '수호'},
	{'photo': 'exo11.png', 'name': '크리스'},
	{'photo': 'exo12.png', 'name': '찬열'}
]
































