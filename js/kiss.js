var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataMale, dataFemale



window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
	boySelect.addEventListener('click', function(){
		boySelect.className = 'checked';
		girlSelect.className = '';
	}, false);
	girlSelect.addEventListener('click', function(){
		boySelect.className = '';
		girlSelect.className = 'checked';
	}, false);
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  userName = document.querySelector('#userName').value
		,idx = Math.floor(Math.random()*50) + 1
		,resultName, resultPhoto, resultMsg
		,message
		,postMsg = ''
		,how = dataHow[Math.floor(Math.random() * dataHow.length)]
		,where = dataWhere[Math.floor(Math.random() * dataWhere.length)]
	
	//idx < 10 ? idx = '0' + idx : idx
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	
	if (boySelect.className == 'checked') {
		kissData = dataMale[Math.floor(Math.random() * dataMale.length)]
		who = kissData['name']
		photo = kissData['photo']
	} else if (girlSelect.className == 'checked') {
		kissData = dataFemale[Math.floor(Math.random() * dataFemale.length)]
		who = kissData['name']
		photo = kissData['photo']
	}
	
	postMsg += '[누구와 키스하나]\n\n';
	postMsg += userName + '님은 ' + who + '\n';
	postMsg += where + ' ' + how + ' 키스합니다.\n\n';
	
	postMsg += 'http://goo.gl/Aa6wS';
	
	urlMsg = {
		title: '누구와 키스하나',
		desc: who + ' 키스합니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/' + photo],
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
		msg: "누구와 키스하나",
		url: "http://goo.gl/Aa6wS",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}




dataWhere = [
	'길거리에서',
	'차 안에서',
	'버스에서',
	'지하철에서',
	'명동 한복판에서',
	'테헤란로에서',
	'클럽에서',
	'해장국집에서',
	'호프집에서',
	'회사에서',
	'숲속에서',
	'집에서',
	'회의실에서',
	'집앞에서'
]

dataHow = [
	'가볍게',
	'진하게',
	'열정적으로',
	'온힘을 다해',
	'이마에 살짝',
	'볼에 살짝',
	'입술에',
	'로멘틱하게',
	'나도 모르게',
	'술김에',
	'의도치 않게',
	'미친듯이'
]

dataMale = [
	{'photo': 'kissM01.jpg', 'name': '여자친구와', 'msg':''},
	{'photo': 'kissM02.jpg', 'name': '클럽에서 만난 여성과', 'msg':''},
	{'photo': 'kissM03.jpg', 'name': '길거리 지나가는 여성과', 'msg':''},
	{'photo': 'kissM04.jpg', 'name': '지하철 옆자리에 앉은 여성과', 'msg':''},
	{'photo': 'kissM05.jpg', 'name': '출근할때 마주치던 그 여성과', 'msg':''},
	{'photo': 'kissM06.jpg', 'name': '직장 동료와', 'msg':''},
	{'photo': 'kissM07.jpg', 'name': '강아지와', 'msg':''},
	{'photo': 'kissM08.jpg', 'name': '모기와', 'msg':''},
	{'photo': 'kissM09.jpg', 'name': '호떡파는 아주머니와', 'msg':''},
	{'photo': 'kissM10.jpg', 'name': '호프집 알바녀와', 'msg':''},
	{'photo': 'kissM01.jpg', 'name': '동생친구와', 'msg':''},
	{'photo': 'kissM01.jpg', 'name': '아는 동생과', 'msg':''},
	{'photo': 'kissM01.jpg', 'name': '아는 누나와', 'msg':''},
	{'photo': 'kissM11.jpg', 'name': '해장국집에서 일하시는 아주머니와', 'msg':''},
	{'photo': 'kissM01.jpg', 'name': '짝사랑하는 그녀와', 'msg':''},
	{'photo': 'kissM12.jpg', 'name': '오나미와', 'msg':''},
	{'photo': 'kissM13.jpg', 'name': '박지선과', 'msg':''},
	{'photo': 'kissM14.jpg', 'name': '정주리와', 'msg':''},
	{'photo': 'kissM15.jpg', 'name': '신봉선과', 'msg':''},
	{'photo': 'kissM16.jpg', 'name': '이민정과', 'msg':''},
	{'photo': 'kissM17.jpg', 'name': '아이유와', 'msg':''},
	{'photo': 'kissM18.jpg', 'name': '김태희와', 'msg':''}
]

dataFemale = [
	{'photo': 'kissF01.jpg', 'name': '남자친구와', 'msg':''},
	{'photo': 'kissM02.jpg', 'name': '클럽에서 만난 남자와', 'msg':''},
	{'photo': 'kissM03.jpg', 'name': '길거리 지나가는 남자와', 'msg':''},
	{'photo': 'kissM04.jpg', 'name': '지하철 옆자리에 앉은 남자와', 'msg':''},
	{'photo': 'kissM05.jpg', 'name': '출근할때 마주치는 그 남자와', 'msg':''},
	{'photo': 'kissF02.jpg', 'name': '부장님과', 'msg':''},
	{'photo': 'kissF03.jpg', 'name': '팀장님과', 'msg':''},
	{'photo': 'kissM07.jpg', 'name': '강아지와', 'msg':''},
	{'photo': 'kissM08.jpg', 'name': '모기와', 'msg':''},
	{'photo': 'kissF01.jpg', 'name': '직장 동료와', 'msg':''},
	{'photo': 'kissF04.jpg', 'name': '편의점 알바남과', 'msg':''},
	{'photo': 'kissF01.jpg', 'name': '동생친구와', 'msg':''},
	{'photo': 'kissF01.jpg', 'name': '아는 동생과', 'msg':''},
	{'photo': 'kissF01.jpg', 'name': '아는 오빠와', 'msg':''},
	{'photo': 'kissF01.jpg', 'name': '짝사랑 하는 그 남자와', 'msg':''},
	{'photo': 'kissF01.jpg', 'name': '나한테 작업거는 작업남과', 'msg':''},
	{'photo': 'kissF05.jpg', 'name': '김제동과', 'msg':''},
	{'photo': 'kissF06.jpg', 'name': '김영철과', 'msg':''},
	{'photo': 'kissF07.jpg', 'name': '옥동자와', 'msg':''},
	{'photo': 'kissF08.jpg', 'name': '이승기와', 'msg':''},
	{'photo': 'kissF09.jpg', 'name': '원빈과', 'msg':''},
	{'photo': 'kissF10.jpg', 'name': '강동원과', 'msg':''}
]






























