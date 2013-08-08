var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataDrink, dataMount, dataAction
	,img
	,title



window.addEventListener('DOMContentLoaded', function(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
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
				M('#selYear').attr('value', '2013')
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


//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,selAlpha = document.querySelector('#selAlpha')
		,data
	
	if (selTitle.value == '') {
		alert('주제를 선택하세요.');
		return;
	}
	if (selTitle.value == 'direct') {
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
	if (selMonth.value == '') {
		alert('월을 선택하세요.');
		return;
	}
	if (selDate.value == '') {
		alert('일을 선택하세요.');
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
	
	//dateCheck(start, end)


	postMsg += '[날짜 계산기]\n\n';
	postMsg += title + '\n';
	postMsg += dateCheck(start, end) + '\n\n',
	//postMsg += result + '\n\n';
	
	postMsg += 'http://goo.gl/VOm5Z\n';
	
	urlMsg = {
		title: '날짜 계산기',
		desc: dateCheck(start, end),
		imageurl: ['http://romeoh.github.io/kakaoStory/img/cal.jpg'],
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
		msg: "날짜 계산기",
		url: "http://goo.gl/VOm5Z",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}
































