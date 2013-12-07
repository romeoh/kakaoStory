var  data
	,arr32
	,arr16
	,arr8
	,arr4
	,arr2
	,arr1
	,cuRound
	,cuStage
	,winner = {}
	,semiWinner = {}


window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	init()
	initStart();
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
	M('#btnStart').click(function(){
		data = dataMale;
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
		M('#winnerTitme').text('2014 FIFA 브라질 월드컵 최종 우승국');
		
		M('#winnerPhoto').attr('src', '../images/thum/'+data[mp.data('idx')]['photo'])
		M('#winnerName').text(data[mp.data('idx')]['name']);
		//console.log('winner', data[mp.data('idx')]['name'])
		winner.photo = data[mp.data('idx')]['photo']
		winner.names = data[mp.data('idx')]['name']
		winner.idx = mp.data('idx')

		if (winner.idx == arr2[0]) {
			semiWinner.name = data[arr2[1]]['name']
		} else {
			semiWinner.name = data[arr2[0]]['name']
		}
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
		M('#first').attr('src', '../images/thum/' + data[ arr32[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr32[left] ]['name'])
			.parent()
			.data('idx', arr32[left])
		M('#second').attr('src', '../images/thum/' + data[ arr32[right] ]['photo'])
		M('#secondPhoto')
			.text(data[ arr32[right] ]['name'])
			.parent()
			.data('idx', arr32[right])

		M('#round').text('32강전');
		M('#stage').text('('+(cuRound+1)+'/16)');
	}

	if (final === 16) {
		M('#first').attr('src', '../images/thum/' + data[ arr16[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr16[left] ]['name'])
			.parent()
			.data('idx', arr16[left])
		M('#second').attr('src', '../images/thum/' + data[ arr16[right] ]['photo'])
		M('#secondPhoto')
			.text(data[ arr16[right] ]['name'])
			.parent()
			.data('idx', arr16[right])

		M('#round').text('16강전');
		M('#stage').text('('+(cuRound+1)+'/8)');
	}

	if (final === 8) {
		M('#first').attr('src', '../images/thum/' + data[ arr8[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr8[left] ]['name'])
			.parent()
			.data('idx', arr8[left])
		M('#second').attr('src', '../images/thum/' + data[ arr8[right] ]['photo'])
		M('#secondPhoto')
			.text(data[ arr8[right] ]['name'])
			.parent()
			.data('idx', arr8[right])

		M('#round').text('8강전');
		M('#stage').text('('+(cuRound+1)+'/4)');
	}

	if (final === 4) {
		M('#first').attr('src', '../images/thum/' + data[ arr4[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr4[left] ]['name'])
			.parent()
			.data('idx', arr4[left])
		M('#second').attr('src', '../images/thum/' + data[ arr4[right] ]['photo'])
		M('#secondPhoto')
			.text(data[ arr4[right] ]['name'])
			.parent()
			.data('idx', arr4[right])

		M('#round').text('준결승');
		M('#stage').text('('+(cuRound+1)+'/2)');
	}

	if (final === 2) {
		M('#first').attr('src', '../images/thum/' + data[ arr2[left] ]['photo'])
		M('#firstPhoto')
			.text(data[ arr2[left] ]['name'])
			.parent()
			.data('idx', arr2[left])
		M('#second').attr('src', '../images/thum/' + data[ arr2[right] ]['photo'])
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

	data.title = '2014 FIFA 브라질 월드컵';
	data.url = 'http://goo.gl/428Vox';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	
	semi = dataMale[arr2[1]]['name']

	post += '[' + data.title + ']\n\n';
	post += '2014 FIFA 브라질 월드컵 결승전\n\n';
	post += '최종 우승국은 ' + winner.names + '입니다.\n';
	post += '준우승국: ' + semiWinner['name'];
	data.post = post;
	
	data.desc = '최종 우승국: ' + winner.names;
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + winner.photo;

	sendData(data);
}


dataMale = [
	{'photo': 'worldcup1.png', 'name': '브라질', 'msg':''},
	{'photo': 'worldcup2.png', 'name': '크로아티아', 'msg':''},
	{'photo': 'worldcup3.png', 'name': '멕시코', 'msg':''},
	{'photo': 'worldcup4.png', 'name': '카메룬', 'msg':''},
	{'photo': 'worldcup5.png', 'name': '스페인', 'msg':''},
	{'photo': 'worldcup6.png', 'name': '네덜란드', 'msg':''},
	{'photo': 'worldcup7.png', 'name': '칠레', 'msg':''},
	{'photo': 'worldcup8.png', 'name': '호주', 'msg':''},
	{'photo': 'worldcup9.png', 'name': '콜롬비아', 'msg':''},
	{'photo': 'worldcup10.png', 'name': '그리스', 'msg':''},
	{'photo': 'worldcup11.png', 'name': '코트디부아르', 'msg':''},
	{'photo': 'worldcup12.png', 'name': '일본', 'msg':''},
	{'photo': 'worldcup13.png', 'name': '우루과이', 'msg':''},
	{'photo': 'worldcup14.png', 'name': '코스타리카', 'msg':''},
	{'photo': 'worldcup15.png', 'name': '잉글랜드', 'msg':''},
	{'photo': 'worldcup16.png', 'name': '이탈리아', 'msg':''},
	{'photo': 'worldcup17.png', 'name': '스위스', 'msg':''},
	{'photo': 'worldcup18.png', 'name': '에콰도르', 'msg':''},
	{'photo': 'worldcup19.png', 'name': '프랑스', 'msg':''},
	{'photo': 'worldcup20.png', 'name': '온두라스', 'msg':''},
	{'photo': 'worldcup21.png', 'name': '아르헨티나', 'msg':''},
	{'photo': 'worldcup22.png', 'name': '보스니아', 'msg':''},
	{'photo': 'worldcup23.png', 'name': '이란', 'msg':''},
	{'photo': 'worldcup24.png', 'name': '나이지리아', 'msg':''},
	{'photo': 'worldcup25.png', 'name': '독일', 'msg':''},
	{'photo': 'worldcup26.png', 'name': '포르투갈', 'msg':''},
	{'photo': 'worldcup27.png', 'name': '가나', 'msg':''},
	{'photo': 'worldcup28.png', 'name': '미국', 'msg':''},
	{'photo': 'worldcup29.png', 'name': '벨기에', 'msg':''},
	{'photo': 'worldcup30.png', 'name': '알제리', 'msg':''},
	{'photo': 'worldcup31.png', 'name': '러시아', 'msg':''},
	{'photo': 'worldcup32.png', 'name': '대한민국', 'msg':''}
]































