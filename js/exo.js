var  data
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
		winner.thum = data[mp.data('idx')]['thum']
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

	data.title = '엑소 월드컵';
	data.url = 'http://goo.gl/omEoZI';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	post += '[' + data.title + ']\n\n';
	post += M('#title').val() + ' ' + winner.names + ' 입니다.';
	data.post = post;
	
	data.desc = winner.names;
	data.img = 'http://romeoh.github.io/kakaoStory/images/exo/' + winner.thum;

	sendData(data);
}

dataBrand = [
	{'photo': 'exoP01.png', 'thum': 'exoT01.png', 'name': '카이'},
	{'photo': 'exoP02.png', 'thum': 'exoT02.png', 'name': '루한'},
	{'photo': 'exoP03.png', 'thum': 'exoT03.png', 'name': '타오'},
	{'photo': 'exoP04.png', 'thum': 'exoT04.png', 'name': '첸'},
	{'photo': 'exoP05.png', 'thum': 'exoT05.png', 'name': '세훈'},
	{'photo': 'exoP06.png', 'thum': 'exoT06.png', 'name': '레이'},
	{'photo': 'exoP07.png', 'thum': 'exoT07.png', 'name': '시우민'},
	{'photo': 'exoP08.png', 'thum': 'exoT08.png', 'name': '백현'},
	{'photo': 'exoP09.png', 'thum': 'exoT09.png', 'name': '디오'},
	{'photo': 'exoP10.png', 'thum': 'exoT10.png', 'name': '수호'},
	{'photo': 'exoP11.png', 'thum': 'exoT11.png', 'name': '크리스'},
	{'photo': 'exoP12.png', 'thum': 'exoT12.png', 'name': '찬열'}
]
































