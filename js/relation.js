var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,userName
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataDrink, dataMount, dataAction



window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  sexType
		,userName = document.querySelector('#userName').value
		,resultName, resultPhoto, resultMsg
		,message
		,postMsg = ''
		,dataRelationRan = Math.floor(Math.random() * dataRelation.length)
		
	
	if (userName == '') {
		alert('아기 이름을 입력해 주세요.');
		return false;
	}

	postMsg += '나는 전생에 내아기 ' + userName + dataRelation[dataRelationRan]['name'] + '\n';
	postMsg += '관계: ' + dataRelation[dataRelationRan]['relation'] + '\n\n';
	postMsg += 'http://goo.gl/KRPGi';

	urlMsg = {
		title: '내아기와 나는 전생에 무슨 관계였나.',
		desc: '나와 내아기는 ' + dataRelation[dataRelationRan]['relation'] + '관계 였습니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/relation.jpg' ],
		type:'article'
	}
console.log(postMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '내아기 전생 알아보기',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "내아기 전생 알아보기",
		url: "http://goo.gl/KRPGi",
		appid: "funnyApp",
		appver: "1.0",
		appname: "내아기 전생 알아보기",
		type: "link"
	});
}




dataRelation = [
	{'name':'에게 돈을 빌려 안 갑고 죽었습니다.', 'relation':'채권 채무자'},
	{'name':'의 말썽꾸러기 딸이었습니다.', 'relation':'부모자식'},
	{'name':'의 바람둥이 남편이었습니다.', 'relation':'부부'},
	{'name':'에게 큰 사기를 치고 죽었습니다.', 'relation':'친구'},
	{'name':'(을)를 매일 괴롭히는 학교 친구였습니다.', 'relation':'학교친구'},
	{'name':'(이)가 항상 부러워 하는 엄친딸이었습니다.', 'relation':'엄마친구딸'},
	{'name':'(을)를 매일 때리는 동네 깡패였습니다.', 'relation':'동네 형아'},
	{'name':'(와)과 아무관계 없었습니다.', 'relation':'근데 지금 왜?..'},
	{'name':'의 부모였습니다.', 'relation':'끈질긴 인연'},
	{'name':'의 말 안듣는 동생이었습니다.', 'relation':'형제'},
	{'name':'의 부모를 죽인 원수였습니다.', 'relation':'원수'},
	{'name':'(와)과 의리 좋은 친구였습니다.', 'relation':'친구'},
	{'name':'(와)과 사랑하는 사이였습니다.', 'relation':'애인'},
	{'name':'인생의 스승이었습니다.', 'relation':'멘토'}
]





























