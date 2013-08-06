var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,btnStory1 = document.querySelector('#btnStory1')
	,btnStory2 = document.querySelector('#btnStory2')
	,btnKakao = document.querySelector('#btnKakao')
	,jogeun0, jogeun1, jogeun2, jogeun3



window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory1.addEventListener('click', executeKakaoStoryLink, false);
	btnStory2.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  message
		,postMsg = ''
	
	postMsg += '[긴급보안 공유]\n\n';
	postMsg += '안녕하세요. 카스 친구여러분~\n'
	postMsg += '혹시 오늘\n\n'
	postMsg += '"우리준이가 태어난지 벌서일년이 되었어요\n'
	postMsg += '축하해주세요^^(모시는글)\n'
	postMsg += 'captur.in/XUcD"\n\n'
	postMsg += '라는 문자 메세지를 받으셨나요?\n'
	postMsg += '이 링크를 누르면 비공인 앱이 스마트폰에 다운로드 받아지는데\n'
	postMsg += '제가 확인해본 결과 사용자의 전화번호를 빼내는 불법앱인거 같습니다.\n'
	postMsg += '이런 문자 받으면 절대! 절대! 설치하지 마세요~\n'
	postMsg += '피해 입지 마시라고 카스 친구들과 무한 공유 해주세요.\n\n'
	
	postMsg += '스크린샷보기: http://goo.gl/hJpgvO\n'

	
	urlMsg = {
		title: '긴급보안 공유',
		desc: '모르는 사람에게 받은 문자의 링크는 열지마세요.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/noticeIcon.png'],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
		post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '무한공유 해주세요~',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: '"우리준이가 태어난지 벌서일년이 되었어요..." 이런 문자 받으면 절대 클릭하지 마세요. 불법으로 개인정보를 빼가는 앱입니다.',
		url: "http://goo.gl/hJpgvO",
		appid: "funnyApp",
		appver: "1.0",
		appname: "긴급보안 공유",
		type: "link"
	});
}






























