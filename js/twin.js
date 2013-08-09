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
	,data
	,img



window.addEventListener('DOMContentLoaded', function(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
	boySelect.addEventListener('click', function(){
		boySelect.className = 'checked';
		girlSelect.className = '';
		data = dataMale;
	}, false);
	girlSelect.addEventListener('click', function(){
		boySelect.className = '';
		girlSelect.className = 'checked';
		data = dataFemale;
	}, false);
}, false);


//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,twin = Math.floor(Math.random() * data.length)
		,userName = document.querySelector('#userName').value
		,percent = getRandom(50, 99)

	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}
	if (userName === '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	
	postMsg += '[닮은꼴 연예인 찾기]\n\n';
	postMsg += userName + '님과 닮은 연예인은 ' + data[twin]['name'] + ' 입니다.\n';
	postMsg += '매치율: ' + percent + '%\n\n';
	
	postMsg += 'http://goo.gl/rhEs43\n';
	
	urlMsg = {
		title: '닮은꼴 연예인 찾기',
		desc: percent + '%의 ' + data[twin]['name'],
		imageurl: ['http://romeoh.github.io/kakaoStory/imgEnter/' + data[twin]['photo']],
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
		msg: "닮은꼴 연예 찾기",
		url: "http://goo.gl/rhEs43",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}

function getRandom(min, max){
	return Math.floor(Math.random() * (max-min) + min)
}



// 남자
dataMale = [
	{'photo':'tm1.png', 'name':'박진영'},
	{'photo':'tm2.png', 'name':'차태현'},
	{'photo':'tm3.png', 'name':'박상민'},
	{'photo':'tm4.png', 'name':'문희준'},
	{'photo':'tm5.png', 'name':'동방신기 유노윤호'},
	{'photo':'tm6.png', 'name':'현빈'},
	{'photo':'tm7.png', 'name':'권상우'},
	{'photo':'tm8.png', 'name':'JYJ 김준수'},
	{'photo':'tm9.png', 'name':'잔든건'},
	{'photo':'tm10.png', 'name':'브라이언'},
	{'photo':'tm11.png', 'name':'슈퍼주니어 예성'},
	{'photo':'tm12.png', 'name':'휘성'},
	{'photo':'tm13.png', 'name':'비'},
	{'photo':'tm14.png', 'name':'유재석'},
	{'photo':'tm15.png', 'name':'소지섭'},
	{'photo':'tm16.png', 'name':'정형돈'},
	{'photo':'tm17.png', 'name':'천명훈'},
	{'photo':'tm18.png', 'name':'강동원'},
	{'photo':'tm19.png', 'name':'임창정'},
	{'photo':'tm20.png', 'name':'소지섭'},
	{'photo':'tm21.png', 'name':'지성'},
	{'photo':'tm22.png', 'name':'김래원'},
	{'photo':'tm23.png', 'name':'이준기'},
	{'photo':'tm24.png', 'name':'JYJ 김재중'},
	{'photo':'tm25.png', 'name':'인피니티 김성규'},
	{'photo':'tm26.png', 'name':'소지섭'},
	{'photo':'tm27.png', 'name':'차인표'}
]

// 여자
dataFemale = [
	{'photo':'tf1.png', 'name':'씨야 이보람'},
	{'photo':'tf2.png', 'name':'원더걸수 선미'},
	{'photo':'tf3.png', 'name':'김보민'},
	{'photo':'tf4.png', 'name':'채연'},
	{'photo':'tf5.png', 'name':'홍수아'},
	{'photo':'tf6.png', 'name':'빈'},
	{'photo':'tf7.png', 'name':'윤은혜'},
	{'photo':'tf8.png', 'name':'김태희'},
	{'photo':'tf9.png', 'name':'전지현'},
	{'photo':'tf10.png', 'name':'소녀시대 유리'},
	{'photo':'tf11.png', 'name':'원더걸스 소희'},
	{'photo':'tf12.png', 'name':'보아'},
	{'photo':'tf13.png', 'name':'김선아'},
	{'photo':'tf14.png', 'name':'송혜교'},
	{'photo':'tf15.png', 'name':'고현정'},
	{'photo':'tf16.png', 'name':'씨스타 효린'},
	{'photo':'tf17.png', 'name':'아이비'},
	{'photo':'tf18.png', 'name':'김아중'},
	{'photo':'tf19.png', 'name':'김민희'},
	{'photo':'tf20.png', 'name':'임수정'},
	{'photo':'tf21.png', 'name':'이수영'},
	{'photo':'tf22.png', 'name':'아이유'},
	{'photo':'tf23.png', 'name':'소녀시대 서현'},
	{'photo':'tf24.png', 'name':'소녀시대 효연'},
	{'photo':'tf25.png', 'name':'구혜선'},
	{'photo':'tf26.png', 'name':'김희선'},
	{'photo':'tf27.png', 'name':'옥주현'},
	{'photo':'tf28.png', 'name':'황보'},
	{'photo':'tf29.png', 'name':'장윤주'},
	{'photo':'tf30.png', 'name':'전인화'},
	{'photo':'tf31.png', 'name':'아사다마오'}
]
































