var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	//,btnStory = document.querySelector('#btnStory')
	//,btnKakao = document.querySelector('#btnKakao')
	,gradeLang
	,full = 'g5'



window.addEventListener('DOMContentLoaded', function(){
	//btnStory.addEventListener('click', executeKakaoStoryLink, false);
	//btnKakao.addEventListener('click', executeURLLink, false);
	
	// 초기화
	M('#grid5 a').addClass('checked');
	gradeLang = 0
	addGrade5();
	addGrade5();
	addGrade5();


	M('#grid5 a').on('click', function(evt, mp){
		M('#grid5 a').addClass('checked');
		M('#grid3 a').removeClass('checked');
		full = 'g5';

		gradeLang = 0;
		removeGrade();
		addGrade5();
		addGrade5();
		addGrade5();
	})
	M('#grid3 a').on('click', function(evt, mp){
		M('#grid3 a').addClass('checked');
		M('#grid5 a').removeClass('checked');
		full = 'g3';

		gradeLang = 0;
		removeGrade();
		addGrade3();
		addGrade3();
		addGrade3();
	})

	M('#btnAdd').on('click', function(evt, mp){
		if (full == 'g5') {
			addGrade5();
		} else {
			addGrade3();
		}
	})

	M('#btnProcess').on('click', function(evt, mp){
		process();
	})

}, false);

function removeGrade() {
	M('.section2').html('');
}

function addGrade5() {
	var  str = ''
		,num = gradeLang + 1
	
	str += '	<span data-num>' + num + '. </span>';
	str += '	<select data-id="score">';
	str += '		<option value="-1" selected>점수선택</option>';
	str += '		<option value="4.5">A+</option>';
	str += '		<option value="4">A</option>';
	str += '		<option value="3.5">B+</option>';
	str += '		<option value="3">B</option>';
	str += '		<option value="2.5">C+</option>';
	str += '		<option value="2">C</option>';
	str += '		<option value="1.5">D+</option>';
	str += '		<option value="1">D</option>';
	str += '		<option value="0">F</option>';
	str += '	</select>';
	str += '	<select data-id="grade">';
	str += '		<option value="-1" selected>학점선택</option>';
	str += '		<option value="4">4</option>';
	str += '		<option value="3">3</option>';
	str += '		<option value="2">2</option>';
	str += '		<option value="1">1</option>';
	str += '	</select>';
	str += '	<button data-delete class="def">삭제</button>';
	
	M('.section2').append('div', {
		 'data-item': gradeLang
		,'className':'grid'
	})
	M('[data-item="'+gradeLang+'"]').html(str)
	gradeLang++;
	eventDel();
}

function addGrade3() {
	var  str = ''
		,num = gradeLang + 1
	
	str += '	<span data-num>' + num + '. </span>';
	str += '	<select data-id="score">';
	str += '		<option value="-1" selected>점수선택</option>';
	str += '		<option value="4.3">A+</option>';
	str += '		<option value="4">A</option>';
	str += '		<option value="3.7">A-</option>';
	str += '		<option value="3.3">B+</option>';
	str += '		<option value="3">B</option>';
	str += '		<option value="2.7">B-</option>';
	str += '		<option value="2.3">C+</option>';
	str += '		<option value="2">C</option>';
	str += '		<option value="1.7">C-</option>';
	str += '		<option value="1.3">D+</option>';
	str += '		<option value="1">D</option>';
	str += '		<option value="0.7">D-</option>';
	str += '		<option value="0">F</option>';
	str += '	</select>';

	str += '	<select data-id="grade">';
	str += '		<option value="-1" selected>학점선택</option>';
	str += '		<option value="4">4</option>';
	str += '		<option value="3">3</option>';
	str += '		<option value="2">2</option>';
	str += '		<option value="1">1</option>';
	str += '	</select>';
	str += '	<button data-delete class="def">삭제</button>';
	
	M('.section2').append('div', {
		 'data-item': gradeLang
		,'className':'grid'
	})
	M('[data-item="'+gradeLang+'"]').html(str)
	gradeLang++;
	eventDel();
}

function eventDel() {
	M('[data-delete]').on('click', function(evt, mp){
		mp.parent().remove();
		gradeLang--;
		reArrage()
	})
}

function reArrage() {
	var leng = document.querySelectorAll('[data-item]');
	for (var i=0; i<leng.length; i++) {
		leng[i].setAttribute('data-item', i);
		leng[i].children[0].innerHTML = i+1+'.'
	}
}

function process() {
	var  leng = document.querySelectorAll('[data-item]')
		,gradeLeng = 0
		,grade = 0
		,score = 0
		,totalGrade = 0
		,totalScore = 0
		,everage = 0
		,unitScore
		,result
		,postMsg = ''
		,urlMsg
		,fullScore = ''

	for (var i=0; i<leng.length; i++) {
		
		if (leng[i].children[1].value != -1) {
			if (leng[i].children[2].value == -1) {
				alert('학점이 비어있습니다.')
				return false;
			} else {
				grade = Number(leng[i].children[1].value)
				score = Number(leng[i].children[2].value)
				totalGrade += score * grade
				totalScore += score
				gradeLeng++;
			}
		}
	}
	if (totalScore == 0) {
		alert('점수를 입력하세요.')
		return false;
	}
	if (full == 'g5') {
		fullScore = '4.5'
	} else {
		fullScore = '4.3'
	}

	result = Math.round(totalGrade/totalScore*100)/100
	
	var  data = {}
		,post = ''

	data.title = '학점계산기';
	data.url = 'http://goo.gl/tqgF1';

	post += '[학점계산기]\n\n';
	post += '내 학점은 ' + fullScore + '점 만점에\n';
	post += '평점 ' + result + '점,\n';
	post += '취득학점은 ' + totalScore + '점 입니다.';
	data.post = post;

	data.desc = '나는 총 평점은 ' + result + '점 입니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/img/grade.png';

	sendData(data);
	
	//console.log('총평점:' + result + ' 취득학점: ' + totalScore)
}


































