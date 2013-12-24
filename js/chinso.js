var leng = 3
window.addEventListener('DOMContentLoaded', function(){
	viewInput();
	M('#btnPlus').on('click', function(){
		if (leng < 9) {
			leng++;
			viewInput();
		} else {
			alert('더이상 추가할 수 없습니다.');
			return false
		}
	})
	M('#btnMinus').on('click', function(){
		if (leng > 2) {
			leng--;
			viewInput()
		} else {
			alert('더이상 삭제할 수 없습니다.');
			return false;
		}
	})
})

function viewInput() {
	for (var i=0; i<9; i++) {
		var n = i+1;
		if (i>=leng) {
			M('[data-chin="' + n + '"]').css('display', 'none');
		} else {
			M('[data-chin="' + n + '"]').css('display', 'inline-block');
		}
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
		,database = []

	data.title = '쓸친소';
	data.url = 'http://goo.gl/5XpBg7';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	for (var i=0; i<leng; i++) {
		var n = i+1
		if (M('[data-chin="' + n + '"]').val() == '') {
			alert(n + '번째 쓸친의 이름을 입력하세요.');
			return false
		}
		database.push(M('[data-chin="' + n + '"]').val())
	}
	idx = process(database)
	
	post += '[' + data.title + ']\n';
	post += '────────────────────\n'
	post += userName + '님이 뽑은 쓸친은 \n';
	for (var i=0; i<leng; i++) {
		if (i != 0) {
			post += ', ';
		}
		post += database[i]
	}
	post += '이며, \n';
	post += '그중에 갑은 '+database[idx]+' 입니다.';
	data.post = post;
	
	data.desc = '내 쓸쓸한 친구를 소개힙니다.\n';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/chinso.png';

	sendData(data);
}

































