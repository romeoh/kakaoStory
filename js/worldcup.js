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
	M('#userName').on('keyup', function(evt, mp){
		//M('h1').text('연예인 이상형 '+mp.val()+'컵')
	})

	M('#btnBoy').click(function(){
		if (M('#userName').val() == '') {
			alert('이름을 입력하세요.');
			return;
		}
		data = dataMale;
		insert32(data, 32)
		start(0)
	})
	M('#btnGirl').click(function(){
		if (M('#userName').val() == '') {
			alert('이름을 입력하세요.');
			return;
		}
		data = dataFemale;
		insert32(data, 32)
		start(1)
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
		M('#winnerTitme').text( M('#userName').val() + '배 월드컵 최종 우승자');
		
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

	data.title = '연예인 월드컵';
	data.url = 'http://goo.gl/CRHWi';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '배 연예인 월드컵 \n';
	post += '영광의 최종 우승자는 ' + winner.names + '입니다.';
	data.post = post;
	
	data.desc = '최종 우승자: ' + winner.names;
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + winner.photo;

	sendData(data);
}


dataMale = [
	{'name': '강민경', 'photo': 'f01.jpeg', 'msg':''},
	{'name': '정유미', 'photo': 'f02.jpeg', 'msg':''},
	{'name': '가인',  'photo': 'f03.jpeg', 'msg':''},
	{'name': '고준희', 'photo': 'f04.jpeg', 'msg':''},
	{'name': '김현아', 'photo': 'f05.jpeg', 'msg':''},
	{'name': '이유비', 'photo': 'f06.jpeg', 'msg':''},
	{'name': '태연',  'photo': 'f07.jpeg', 'msg':''},
	{'name': '임수향', 'photo': 'f08.jpeg', 'msg':''},
	{'name': '박은지', 'photo': 'f09.jpeg', 'msg':''},
	{'name': '한선화', 'photo': 'f10.jpeg', 'msg':''},
	{'name': '박초롱', 'photo': 'f11.jpeg', 'msg':''},
	{'name': '오인혜', 'photo': 'f12.jpeg', 'msg':''},
	{'name': '이연희', 'photo': 'f13.jpeg', 'msg':''},
	{'name': '신세경', 'photo': 'f14.jpeg', 'msg':''},
	{'name': '정은채', 'photo': 'f15.jpeg', 'msg':''},
	{'name': '한효주', 'photo': 'f16.jpeg', 'msg':''},
	{'name': '박보영', 'photo': 'f17.jpeg', 'msg':''},
	{'name': '신보라', 'photo': 'f18.jpeg', 'msg':''},
	{'name': '박봄',  'photo': 'f19.jpeg', 'msg':''},
	{'name': '한지혜', 'photo': 'f20.jpeg', 'msg':''},
	{'name': '백아연', 'photo': 'f21.jpeg', 'msg':''},
	{'name': '김하은', 'photo': 'f22.jpeg', 'msg':''},
	{'name': '에일리', 'photo': 'f23.jpeg', 'msg':''},
	{'name': '고두림', 'photo': 'f24.jpeg', 'msg':''},
	{'name': '제시카', 'photo': 'f25.jpeg', 'msg':''},
	{'name': '윤아',  'photo': 'f26.jpeg', 'msg':''},
	{'name': '로지', 'photo': 'f27.jpeg', 'msg':''},
	{'name': '박은빈', 'photo': 'f28.jpeg', 'msg':''},
	{'name': '이태림', 'photo': 'f29.jpeg', 'msg':''},
	{'name': '유빈', 'photo': 'f30.jpeg', 'msg':''},
	{'name': '김재경', 'photo': 'f31.jpeg', 'msg':''},
	{'name': '김효진', 'photo': 'f32.jpeg', 'msg':''},
	{'name': '민효린', 'photo': 'f33.jpeg', 'msg':''},
	{'name': '민지아', 'photo': 'f34.jpeg', 'msg':''},
	{'name': '소진', 'photo': 'f35.jpeg', 'msg':''},
	{'name': '이다해', 'photo': 'f36.jpeg', 'msg':''},
	{'name': '윤은혜', 'photo': 'f37.jpeg', 'msg':''},
	{'name': '유이', 'photo': 'f38.jpeg', 'msg':''},
	{'name': '신소율', 'photo': 'f39.jpeg', 'msg':''},
	{'name': '강소라', 'photo': 'f40.jpeg', 'msg':''},
	{'name': '유하나', 'photo': 'f41.jpeg', 'msg':''},
	{'name': '전효성', 'photo': 'f42.jpeg', 'msg':''},
	{'name': '한소영', 'photo': 'f43.jpeg', 'msg':''},
	{'name': '김보미', 'photo': 'f44.jpeg', 'msg':''},
	{'name': '은정',  'photo': 'f45.jpeg', 'msg':''},
	{'name': '손성윤', 'photo': 'f46.jpeg', 'msg':''},
	{'name': '김보경', 'photo': 'f47.jpeg', 'msg':''},
	{'name': '고아라', 'photo': 'f48.jpeg', 'msg':''},
	{'name': '보람',  'photo': 'f49.jpeg', 'msg':''},
	{'name': '수지',  'photo': 'f50.jpeg', 'msg':''}
]

dataFemale = [
	{'name': '정석원', 'photo': 'm01.jpeg', 'msg':''},
	{'name': '이승기', 'photo': 'm02.jpeg', 'msg':''},
	{'name': '홍대광', 'photo': 'm03.jpeg', 'msg':''},
	{'name': '유연석', 'photo': 'm04.jpeg', 'msg':''},
	{'name': '이현우', 'photo': 'm05.jpeg', 'msg':''},
	{'name': '서인국', 'photo': 'm06.jpeg', 'msg':''},
	{'name': '황광희', 'photo': 'm07.jpeg', 'msg':''},
	{'name': '유아인', 'photo': 'm08.jpeg', 'msg':''},
	{'name': '최진혁', 'photo': 'm09.jpeg', 'msg':''},
	{'name': '김수현', 'photo': 'm10.jpeg', 'msg':''},
	{'name': '미르', 'photo': 'm11.jpeg', 'msg':''},
	{'name': '박재범', 'photo': 'm12.jpeg', 'msg':''},
	{'name': '송중기', 'photo': 'm13.jpeg', 'msg':''},
	{'name': '주원', 'photo': 'm14.jpeg', 'msg':''},
	{'name': '이민호', 'photo': 'm15.jpeg', 'msg':''},
	{'name': '이종석', 'photo': 'm16.jpeg', 'msg':''},
	{'name': '윤시윤', 'photo': 'm17.jpeg', 'msg':''},
	{'name': '시완', 'photo': 'm18.jpeg', 'msg':''},
	{'name': '연우진', 'photo': 'm19.jpeg', 'msg':''},
	{'name': '김민찬', 'photo': 'm20.jpeg', 'msg':''},
	{'name': '김현중', 'photo': 'm21.jpeg', 'msg':''},
	{'name': '이수혁', 'photo': 'm22.jpeg', 'msg':''},
	{'name': '박기웅', 'photo': 'm23.jpeg', 'msg':''},
	{'name': '정진운', 'photo': 'm24.jpeg', 'msg':''},
	{'name': '이광수', 'photo': 'm25.jpeg', 'msg':''},
	{'name': '종현', 'photo': 'm26.jpeg', 'msg':''},
	{'name': '정용화', 'photo': 'm27.jpeg', 'msg':''},
	{'name': '이홍기', 'photo': 'm28.jpeg', 'msg':''},
	{'name': '윤두준', 'photo': 'm29.jpeg', 'msg':''},
	{'name': '김기리', 'photo': 'm30.jpeg', 'msg':''},
	{'name': '안재현', 'photo': 'm31.jpeg', 'msg':''},
	{'name': '박형식', 'photo': 'm32.jpeg', 'msg':''},
	{'name': '곽정운', 'photo': 'm33.jpeg', 'msg':''},
	{'name': '유천', 'photo': 'm34.jpeg', 'msg':''},
	{'name': '민호', 'photo': 'm35.jpeg', 'msg':''},
	{'name': '이제훈', 'photo': 'm36.jpeg', 'msg':''},
	{'name': '택연', 'photo': 'm37.jpeg', 'msg':''},
	{'name': '최우식', 'photo': 'm38.jpeg', 'msg':''},
	{'name': '임슬옹', 'photo': 'm39.jpeg', 'msg':''},
	{'name': '백성현', 'photo': 'm40.jpeg', 'msg':''},
	{'name': '김동준', 'photo': 'm41.jpeg', 'msg':''},
	{'name': '용준형', 'photo': 'm42.jpeg', 'msg':''},
	{'name': '홍종현', 'photo': 'm43.jpeg', 'msg':''},
	{'name': '이성열', 'photo': 'm44.jpeg', 'msg':''},
	{'name': '김혜성', 'photo': 'm45.jpeg', 'msg':''},
	{'name': '호야', 'photo': 'm46.jpeg', 'msg':''},
	{'name': '박서준', 'photo': 'm47.jpeg', 'msg':''},
	{'name': '김범', 'photo': 'm48.jpeg', 'msg':''},
	{'name': '류덕환', 'photo': 'm49.jpeg', 'msg':''},
	{'name': '노민우', 'photo': 'm50.jpeg', 'msg':''}
]































