var  boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataDrink, dataMount, dataAction
	,img

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


//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
	
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}
	
	postMsg += '[내 이상형의 조건]\n\n';
	if (boySelect.className == 'checked') {
		// 남자일 경우
		dataRan = Math.floor(Math.random() * dataFemale.length)
		data = dataFemale[dataRan]
		img = 'http://romeoh.github.io/kakaoStory/img/man.jpg'
		postMsg += '내 남친은이요? 딴건 안봅니다.\n';
	} else if (girlSelect.className == 'checked') {
		// 여자일 경우
		dataRan = Math.floor(Math.random() * dataMale.length)
		data = dataMale[dataRan]
		img = 'http://romeoh.github.io/kakaoStory/img/woman.jpg'
		postMsg += '내 여친은요? 딴건 안봅니다.\n';
	}
	
	postMsg += data + '\n\n';
	postMsg += 'http://goo.gl/VbOvP\n';
	
	urlMsg = {
		title: '내 이상형의 조건',
		desc: '딴건 안봅니다.',
		imageurl: [img],
		type:'article'
	}
	console.log(postMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '내 이상형의 조건',
		urlinfo : JSON.stringify(urlMsg)
    });
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "딴건 안봅니다.",
		url: "http://goo.gl/VbOvP",
		appid: "funnyApp",
		appver: "1.0",
		appname: "내 이상형의 조건",
		type: "link"
	});
}



// 내 여친은
dataMale = [
	'키만 크면됩니다.',
	'몸매만 예쁘면 됩니다.',
	'날씬하기만 하면 됩니다.',
	'얼굴만 예쁘면 됩니다.',
	'눈만 크면 됩니다.',
	'머리만 길면 됩니다.',
	'청순하기만 하면 됩니다.',
	'쎅시하기만 하면 됩니다.',
	'부잣집 외동딸이면 됩니다.',
	'피부만 하야면 됩니다.',
	'일편단심이기만 하면 됩니다.',
	'돈만 잘벌면 됩니다.'
]

// 내 남친은
dataFemale = [
	'키만 크면됩니다.',
	'돈만 많으면 됩니다.',
	'재벌2세면 충분합니다.',
	'BMW만 있으면 되요~',
	'얼굴만 잘생기면 됩니다.',
	'근육질이면 됩니다.',
	'자상하기만 하면 됩니다.',
	'유머감각만 있으면 됩니다.',
	'목소리가 좋으면 됩니다.',
	'섹시한 엉덩이면 충분합니다.'
]



































