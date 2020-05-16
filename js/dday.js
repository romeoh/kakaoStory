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

	data.title = '날짜 계산기';
	data.url = 'http://goo.gl/VOm5Z';

	if (media == 'talk') {
		sendData(data);
		return false;
	}


	if (M('#selTitle').val() == '-1') {
		alert('주제를 선택하세요.');
		return;
	}
	if (M('#selTitle').val() == 'direct') {
		title = '날짜계산: ' + M('#inpTitle').val()
		if (M('#inpTitle').val() == '') {
			alert('주제를 입력하세요.');
			return;
		}
	}
	if (selYear.value == '') {
		alert('년도를 입력하세요.');
		return;
	}

	d = new Date()
	sy = d.getFullYear();
	sm = d.getMonth() + 1;
	sd = d.getDate();
	sm < 10 ? sm = '0' + sm : sm
	sd < 10 ? sd = '0' + sd : sd 
	start = sy +''+ sm +''+ sd
	ey = parseInt(M('#selYear').val(), 10);
	em = M('#selMonth').val()
	ed = M('#selDate').val()
	end = ey + '' + em + '' + ed;

	post += '[' + data.title + ']\n\n';
	post += title + '\n';
	post += dateCheck(start, end),
	data.post = post;
	
	data.desc = dateCheck(start, end);
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/dday.png';

	sendData(data);
}

window.addEventListener('DOMContentLoaded', function(){
	M('#selTitle').on('change', function(evt, mp){
		if ( mp.val() == 'direct' ) {
			M('#inpTitle').css('display', '')
		} else {
			M('#inpTitle')
				.css('display', 'none')
				.val('')
		}
		switch(mp.val()) {
			case 'day':
				M('#info').text('태어난 날짜를 입력하세요.')
				title = '내가 태어난지'
			break;
			case 'birth':
				M('#info').text('생일을 입력하세요.')
				M('#selYear').attr('value', '2020')
				title = '내 생일까지'
			break;
			case 'meet':
				M('#info').text('만난 날짜를 입력하세요.')
				title = '우리 만난지'
			break;
			case 'direct':
				M('#info').text('계산할 날짜를 입력하세요.')
			break;
		}
	})
}, false);

function dateCheck(start, end) {
    var  sy = start.substr(0, 4)
    	,sm = start.substr(4, 2)
    	,sd = start.substr(6, 2)
    	,ey = end.substr(0, 4)
    	,em = end.substr(4, 2)
    	,ed = end.substr(6, 2)

    //console.log(sy, sm, sd, ey, em, ed)
    var startDate = new Date(sy, sm - 1, sd);
    var endDate = new Date(ey, em - 1, ed);
    var milSec = endDate - startDate;
	if (milSec > 0) {
		result = M.toCurrency((milSec / 1000 / 60 / 60 / 24)) + "일 남았습니다"
		//console.log(result);
	} else {
		result = M.toCurrency(-1 * (milSec / 1000 / 60 / 60 / 24)) + "일 지났습니다"
		//console.log(result);
	}
	return result
}






























