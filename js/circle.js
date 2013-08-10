var  allCount
	,lists = []
	,lastMan
	,isRotate = false

window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	allCount = parseInt(M('[data-setting]').data('setting'), 10)
	setDefault(allCount);
	setButtons()

	M('[data-enter]').on('blur', function(evt, mp){
		var thisInput = mp.data('enter')
		M('[data-entry="' + thisInput + '"]').text(mp.val())
	})
	M('#title').on('change', function(evt, mp){
		if (mp.val() === '직접입력') {
			M('#inputTitle').css('display', 'inline-block')
		} else {
			M('#inputTitle').css('display', 'none')
		}
	})
	M('#turn').on('click', turn);
	M('#btnStory').on('click', executeKakaoStoryLink);
	M('#btnKakao').on('click', executeURLLink);
}

function turn() {
	var  randomDeg

	if (isRotate) {
		return false;
	}
	lists.length = 0;
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
	randomDeg = getRandom(2160, 2520)
	//var randomDeg = getRandom(0, 360)
	M('.roulette').css('rotate', '0deg')
	M('.roulette').animate({
		'rotate': randomDeg + 'deg',
		'time': '4s'
	}, function(evt, mp) {
		for (var i=0; i<allCount; i++) {
			var n = i + 1
			lists.push(M('[data-enter="' + n + '"]').val())
		}

		isRotate = false
		result = randomDeg - 2160
		mp.attr('style', '')
			.css('rotate', result + 'deg');
		
		if (allCount === 2) {
			if (result >= 88 && result < 270) {
				lastMan = lists[1]
			} else {
				lastMan = lists[0]
			}
		}
		if (allCount === 3) {
			if (result >= 90 && result < 210) {
				lastMan = lists[1]
			} else if (result >= 210 && result < 330) {
				lastMan = lists[2]
			} else {
				lastMan = lists[0]
			}
		}
		if (allCount === 4) {
			if (result >= 134 && result < 225) {
				lastMan = lists[1]
			} else if (result >= 225 && result < 314) {
				lastMan = lists[2]
			} else if (result >= 44 && result < 314) {
				lastMan = lists[3]
			} else {
				lastMan = lists[0]
			}
		}
		if (allCount === 5) {
			if (result >= 217 && result < 288) {
				lastMan = lists[1]
			} else if (result >= 71 && result < 142) {
				lastMan = lists[2]
			} else if (result >= 142 && result < 216) {
				lastMan = lists[3]
			} else if (result >= 0 && result < 70) {
				lastMan = lists[4]
			} else {
				lastMan = lists[0]
			}
		}
		if (allCount === 6) {
			if (result >= 150 && result < 210) {
				lastMan = lists[1]
			} else if (result >= 29 && result < 88) {
				lastMan = lists[2]
			} else if (result >= 88 && result < 149) {
				lastMan = lists[3]
			} else if (result >= 211 && result < 270) {
				lastMan = lists[5]
			} else if (result >= 270 && result < 330) {
				lastMan = lists[0]
			} else {
				lastMan = lists[4]
			}
		}
		if (allCount === 7) {
			if (result >= 51 && result < 101) {
				lastMan = lists[0]
			} else if (result >= 0 && result < 50) {
				lastMan = lists[2]
			} else if (result >= 258 && result < 308) {
				lastMan = lists[3]
			} else if (result >= 154 && result < 206) {
				lastMan = lists[4]
			} else if (result >= 102 && result < 154) {
				lastMan = lists[5]
			} else if (result >= 206 && result < 258) {
				lastMan = lists[6]
			} else {
				lastMan = lists[1]
			}
		}
		if (allCount === 8) {
			if (result >= 0 && result < 43) {
				lastMan = lists[0]
			} else if (result >= 271 && result < 315) {
				lastMan = lists[1]
			} else if (result >= 226 && result < 271) {
				lastMan = lists[3]
			} else if (result >= 89 && result < 134) {
				lastMan = lists[4]
			} else if (result >= 44 && result < 89) {
				lastMan = lists[5]
			} else if (result >= 180 && result < 226) {
				lastMan = lists[6]
			} else if (result >= 134 && result < 180) {
				lastMan = lists[7]
			} else {
				lastMan = lists[2]
			}
		}
		alert('축하합니다!\n' + lastMan + '님이 당첨되었습니다.\n카스에 공유해 보세요.')
	})
}

function setDefault(allCount) {
	for (var i=0; i<allCount; i++) {
		M('[data-button-box="' + i + '"]').css('display', 'none')
	}
	for (var i=allCount+1; i<9; i++) {
		M('[data-input="' + i + '"]').css('display', 'none');
	}
	M('[data-button-box="' + allCount + '"]').css('display', '')
	M('#roulette').attr('src', '../imgApp/bg_circle' + allCount + '.png')
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

//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,listMans = ''
		,gameTitle = ''

	if (lists.length === 0) {
		return false;
	}

	if (M('#title').val() === '직접입력') {
		gameTitle = M('#inputTitle').val()
	} else {
		gameTitle = M('#title').val()
	}

	postMsg += '[원판돌리기]\n\n';
	for (var i=0; i<allCount; i++) {
		listMans += ', ' + lists[i];
	}
	postMsg += listMans.replace(', ', '') + ' 중에서\n';
	postMsg += gameTitle + '\n';
	postMsg += lastMan + ' 입니다.\n\n';

	postMsg += 'http://goo.gl/Gpld3p';
	
	urlMsg = {
		title: '원판돌리기',
		desc: lastMan + '님은 결과를 겸허히 받아들이시게!',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/circle.png'],
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

    showad();
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "원판돌리기",
		url: "http://goo.gl/Gpld3p",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}

function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}































