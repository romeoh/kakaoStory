var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,allCount
	,isPlay = false
	,result = []
	,resultName = []
	,intervalID = null
	,rText

window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	init()
	M('#btnStory').on('click', executeKakaoStoryLink);
	M('#btnKakao').on('click', executeURLLink);
	
	// 설정완료
	M('#btnOk').on('click', playGame);
	
	// 새게임
	M('#btnNew').on('click', function(){
		if (!confirm('새게임을 시작할까요?')) {
			return false;
		}
		clearInterval(intervalID)
		intervalID = null;
		isRotate = true;
		result.length = 0
		resultName.length = 0
		M('#setting').css('display', 'block')
		M('#btnNew').css('display', 'none')
		M('#btnOk').css('display', 'inline-block')
		M('#btnChoice').css('display', 'none');
		M('#resultInfo').css('display', 'none');
		M('[data-enter]').val('')
		for (var i=1; i<allCount+1; i++) {
			M('.num'+i).css('display', 'block')
		}
	})

	// 설정완료
	M('#btnChoice').on('click', function() {
		if (result.length == allCount-1) {
			M('#btnChoice').css('display', 'none');
		}
		selNum = selectedNumber();
	});

	// 타이틀
	M('#title').on('change', function(evt, mp){
		if (mp.val() === '직접입력') {
			M('#inputTitle').css('display', 'inline-block')
		} else {
			M('#inputTitle').css('display', 'none')
		}
	})
}

function selectedNumber() {
	n = getRandom(1, allCount+1)
	if (result.length == allCount) {
		return result;
	} else {
		if (result.length == 0) {
			result.push(n);
			resultName.push( M('[data-enter="' + n + '"]').val() )
			setResult(n)
		} else {
			for (var i=0; i<result.length; i++) {
				if (n == result[i]) {
					return selectedNumber();
				}
			}
			result.push(n);
			resultName.push( M('[data-enter="' + n + '"]').val() )
			setResult(n)
		}
	}
}

function setResult(n){
	M('.num'+n).css('display', 'none');
	M('#result')
		.append('p', {})
		.last()
		.html('<span class="rnum' + n +' noPosition">' + n + '</span><span class="uname">' + M('[data-enter="' + n + '"]').val() + '</span>')
}

function init() {
	allCount = parseInt(M('[data-setting]').data('setting'), 10)
	setDefault(allCount);
	setButtons()
}

function setDefault(allCount) {
	for (var i=0; i<allCount; i++) {
		n = i+1
		M('[data-button-box="' + i + '"]').css('display', 'none');
		M('.num'+n).css('display', 'block');
	}
	for (var i=allCount+1; i<9; i++) {
		M('[data-input="' + i + '"]').css('display', 'none');
		M('.num'+i).css('display', 'none');
	}
	M('[data-button-box="' + allCount + '"]').css('display', '')
	
	M('#entry')
		.attr('class', '')
		.addClass('entry')
		.addClass('pp'+allCount)
}

function setButtons() {
	M('[data-minus]').on('click', function(evt, mp){
		if (allCount == 2) {
			return false;
		}
		allCount = parseInt(mp.data('minus'), 10) - 1;
		//M('[data-input="'+allCount+'"]').css('display', 'block')
		setDefault(allCount);
	})
	M('[data-plus]').on('click', function(evt, mp){
		if (allCount == 8) {
			return false;
		}
		allCount = parseInt(mp.data('plus'), 10) + 1;
		M('[data-input="'+allCount+'"]').css('display', 'block')
		setDefault(allCount);
	})
}


function playGame(evt, mp) {
	if (isPlay) {
		return false;
	}
	// 유효성검사
	for (var i=0; i<allCount; i++) {
		var n = i + 1
		if (M('[data-input="' + n + '"] input').val() === '') {
			alert('이름을 입력해주세요.')
			return false;
		}
	}
	
	if (M('#title').val() === '-1') {
		alert('타이틀을 선택하세요.');
		return false;
	}
	if (M('#title').val() === '직접입력') {
		if (M('#inputTitle').val() === '') {
			alert('타이틀을 직접 입력하세요.');
			return false;
		}
	}
	isRotate = true;
	result.length = 0
	M('#setting').css('display', 'none')
	M('#btnNew').css('display', 'inline-block')
	M('#btnOk').css('display', 'none')
	M('#btnChoice').css('display', 'inline-block');
	M('#resultInfo').css('display', 'block');
	M('#result').text('');
	rText = M('#title').val()
	if (rText === '직접입력') {
		rText = M('#inputTitle').val()
	}
	M('.resultTxt').text( rText )
	lotteryBall()
}


function lotteryBall() {
	var dir = [
			{'x': getRandom(0, 2), 'y': getRandom(0, 2)},
			{'x': getRandom(0, 2), 'y': getRandom(0, 2)},
			{'x': getRandom(0, 2), 'y': getRandom(0, 2)},
			{'x': getRandom(0, 2), 'y': getRandom(0, 2)},
			{'x': getRandom(0, 2), 'y': getRandom(0, 2)},
			{'x': getRandom(0, 2), 'y': getRandom(0, 2)},
			{'x': getRandom(0, 2), 'y': getRandom(0, 2)},
			{'x': getRandom(0, 2), 'y': getRandom(0, 2)},
			{'x': getRandom(0, 2), 'y': getRandom(0, 2)}
		]
		intervalID = setInterval(function(){

		for (var i=1; i<allCount+1; i++) {
			
			var  xPos = parseInt(M('.num'+i).css('left'), 10)
				,yPos = parseInt(M('.num'+i).css('top'), 10)
				,xDir = dir[i]['x']
				,yDir = dir[i]['y']
				,xSpeed = getRandom(5, 10)
				,ySpeed = getRandom(5, 10)
			
			if (xPos <= 10) {
				dir[i]['x'] = 1
			} else if (xPos >= 170) {
				dir[i]['x'] = 0
			}
			if (xDir === 0) {
				xPos = xPos - xSpeed
			} else if (xDir === 1) {
				xPos = xPos + xSpeed
			}

			if (yPos <= 10) {
				dir[i]['y'] = 1
			} else if (yPos >= 130) {
				dir[i]['y'] = 0
			}
			if (yDir === 1) {
				yPos = yPos + ySpeed
			} else if (yDir === 0) {
				yPos = yPos - ySpeed
			}
			M('.num'+i)
				.css('left', xPos + 'px')
				.css('top', yPos + 'px')
			//console.log(i, xPos, yPos)
		}
	}, 100)
}

function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
	
	if (result.length == 0) {
		alert('추첨해주세요.');
		return false;
	}

	
	postMsg += '[순서 정하기]\n\n';
	postMsg += rText + '\n\n';
	for (var i=0; i<resultName.length; i++) {
		n = i + 1
		if (i == resultName.length-1) {
			postMsg += '\n그리고, 꼴등은 ' + resultName[i] + ' 입니다.\n\n';
		} else {
			postMsg += n + '등: ' + resultName[i] + '\n';
		}
	}
	
	postMsg += 'http://goo.gl/n7lwvv';
	
	urlMsg = {
		title: '순서 정하기',
		desc: '',
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/lottery2.png'],
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
		msg: "순서 정하기",
		url: "http://goo.gl/n7lwvv",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}



data = [
	{'constinue':'키가 크고', 'last':'휀칠하게 키가 크지만', 'fault':'키가...Y.Y'},
	{'constinue':'진정한 시대의 얼짱이고', 'last':'얼굴만은 자신있지만', 'fault':'얼굴이 죄송합니다.T.T'},
	{'constinue':'돈이 많고', 'last':'가진 돈이 많지만', 'fault':'돈이 없어요.'},
	{'constinue':'인기가 많고', 'last':'인기가 많지만', 'fault':'사람들한테 왕따 당해요.'},
	{'constinue':'머리가 좋고', 'last':'머리가 엄청 좋지만', 'fault':'머리에 든게 없어요.'},
	{'constinue':'유머가 있고', 'last':'유머러스 하지만', 'fault':'유머 감각이 없어요.'},
	{'constinue':'싸움을 잘하고', 'last':'누구와 싸움에서 지지는 않지만', 'fault':'싸움을 못해요.'},
	{'constinue':'노래를 잘하고', 'last':'노래를 정말 잘하지만', 'fault':'음치박치에요.'},
	{'constinue':'매너 있고', 'last':'매너 짱이지만', 'fault':'매너가 똥이랍니다.'},
	{'constinue':'배려심이 많고', 'last':'배려심이 아주 많지만', 'fault':'배려심이 없어요.'},
	{'constinue':'일편단심 스타일이고', 'last':'한사람만 바라보는 일편단심 스타일 이지만', 'fault':'바람둥이에요.'},
	{'constinue':'옷을 잘 입고', 'last':'돋보이는 패셔니스타지만', 'fault':'패션이 촌스러워요.'},
	{'constinue':'몸매가 좋고', 'last':'몸매에 자신있지만', 'fault':'몸매가 나빠요..'},
	{'constinue':'섹시 하고', 'last':'섹시가 철철 넘치지만', 'fault':'섹시하지 않아요.'},
	{'constinue':'능력 있고', 'last':'능력 있지만', 'fault':'능력없는 백수랍니다.'},
	{'constinue':'세련 되고', 'last':'온몸이 세련되어 보이지만', 'fault':'촌스러워요.'},
	{'constinue':'영리해 보이고', 'last':'똑똑해 보이지만', 'fault':'띨 해보여요~'}
]































