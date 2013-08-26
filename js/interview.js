var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')

window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  idx = Math.floor(Math.random()*50) + 1
		,postMsg = ''
		,idx
	
	if (M('#question').val() == '-1') {
		idx = Math.floor(Math.random() * data.length)
	} else {
		idx = M('#question').val()
	}
	
	
	postMsg += '[섹션카스 연예통신]\n';
	postMsg += '댓글을 달아주세요.\n\n';
	postMsg += data[idx]['question'] + '\n\n';
	
	postMsg += 'http://goo.gl/jfCdVj';
	
	urlMsg = {
		title: '섹션카스 연예통신',
		desc: '댓글을 달아주세요.\n' ,
		imageurl: ['http://romeoh.github.io/kakaoStory/images/thum/interview.png'],
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
		msg: "섹션카스 연예통신",
		url: "http://goo.gl/jfCdVj",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}



data = [
	{'q':'악마의 야식은?', 'question':'참을 수 없는 야식이 있다면?'},
	{'q':'성형하고 싶은 곳', 'question':'딱 한 군데만 고칠 수 있다면 어디에 성형하고 싶은가요?'},
	{'q':'제일 보고 싶은 사람은?', 'question':'지금 제일 보고 싶은 사람은?'},
	{'q':'제일 가고 싶은 곳?', 'question':'지금 제일 가고 싶은 곳이 있다면 어디인가요?'},
	{'q':'제일 싫어하는 벌레는?', 'question':'내가 제일 싫어하는 벌레는?\n사람 말고~'},
	{'q':'제일 좋아하는 연예인은?', 'question':'내가 제일 좋아하는 연예인은?'},
	{'q':'다이어트 최대의 적은?', 'question':'내가 생각하는 다이어트 최대의 적은?'},
	{'q':'올 가을에 하고 싶은 것', 'question':'올 가을에 꼭 해보고 싶은 것은?'},
	{'q':'애인이 생기면 제일 먼저 가고 싶은 곳', 'question':'애인이 생기면 제일 먼저 함께 가보고 싶은 곳은?'},
	{'q':'배워보고 싶은 것', 'question':'꼭 배워보고 싶은 것은?'},
	{'q':'기억에 나는 에니메이션', 'question':'어렸을때 본 에니메이션중 가장 기억에 남는것은?'},
	{'q':'10년전 가장 기억나는 일', 'question':'10년전 일중에 가장 기억에 남은 일은?'},
	{'q':'훈남 훈녀의 1번 조건은?', 'question':'내가 생각하는 훈남, 훈녀의 1번 조건이 있다면?'},
	{'q':'제일 좋아하는 웹툰', 'question':'요즘 제일 좋아하는 웹툰은?'},
	{'q':'생일날 받고 싶은 선물', 'question':'생일날 제일 받고 싶은 선물'},
	{'q':'요즘 즐겨하는 스마트폰 게임', 'question':'요즘 즐겨하는 스마트폰 게임은?'},
	{'q':'한가지 초능력을 주어진다면 어떤 능력', 'question':'한가지 초능력이 주어진다면 어떤 능력을 가지고 싶은가요?'},
	{'q':'잠버릇은?', 'question':'나의 치명적인 잠버릇이 있나요?'},
	{'q':'추워지면 하고 싶은것', 'question':'추워지면 하고 싶은 것이 있나요?'},
	{'q':'키워보고 싶은 애완동물', 'question':'꼭 키워보고 싶은 애완동물이 있다면?'},
	{'q':'연상 연하 최대 나이', 'question':'내가 커버할수 있는 최대 연상의 나이\, 그리고 최대 연하의 나이는?'},
	{'q':'미안할 때 어떻게 하나?', 'question':'나는 미안할 때 꼭 이렇게 한다.'},
	{'q':'요즘 즐겨보는 케이블 방송', 'question':'요즘 즐겨보는 케이블 방송은?'},
	{'q':'나의 이름에 숨은 비밀', 'question':'나의 이름에 숨겨진 비밀이 있나요?'},
	{'q':'싫어하는 음식', 'question':'제일 싫어하는 음식은?'},
	{'q':'어렸을 때 나의 장래희망', 'question':'나 어렸을 때 장래희망은 뭐였나요?'},
	{'q':'제일 좋아하는 아이스크림', 'question':'제일 좋아하는 아이스크림은?'},
	{'q':'TV에 나온적 있나요?', 'question':'TV에 나온적 있나요?'},
	{'q':'나랑 잘 맞는 혈액형은?', 'question':'나랑 잘 맞는 혈액형은? \n동성이랑 이성'},
	{'q':'최근에 꾼 꿈중에 기억에 남는것', 'question':'최근에 꾼 꿈중에 기억에 남는것은?'},
	{'q':'20억 로또에 당첨된다면?', 'question':'로또 20억원에 당첨된다면?'},
	{'q':'세상에서 가장 무서운 귀신?', 'question':'세상에서 가장 무서운 귀신은?'},
	{'q':'제일 헛깔리는 한글 맞춤법', 'question':'제일 헛깔리는 한글 맞춤법이 있나요?'},
	{'q':'기억나는 옛날 영화', 'question':'기억나는 옛날 영화가 있다면?'},
	{'q':'제일 좋아하는 군것질거리', 'question':'제일 좋아하는 군것질거리는?'},
	{'q':'잠이 안올때?', 'question':'잠이 안올때 이렇게 한다.'},
	{'q':'매점에서 제일 맛있는 음식은?', 'question':'매점에서 제일 맛있는 음식은?'},
	{'q':'최근에 받은 선물은?', 'question':'가장 최근에 받은 선물은 뭔가요?'},
	{'q':'친구가 돈 빌려 달라고 하면?', 'question':'친구가 돈 빌려 달라고 하면 어떻게 하나?'},
	{'q':'놀이공원에서 제일 먼저 타는 기구는?', 'question':'놀이공원에서 제일 먼저 타는 기구는?'},
	{'q':'다시 태어나면 남자로? 여자로? 왜?', 'question':'다시 태어난다면 남자로 태어나고 싶나요? 여자로 태어나고 싶나요? 이유는?'},
	{'q':'우리 부모님이 나에게 매일 하는 말은?', 'question':'우리 부모님이 나에게 귀에 못이 박혀라 하는 소리는?'},
	{'q':'주머니에 만원이 있다면 무엇을 하고싶나?', 'question':'주머니에 만원이 있다면 무엇을 하고 싶나요?'},
	{'q':'요즘 힘든 일 있나요?', 'question':'요즘 가장 힘들 일이 있다면 뭔가요?'},
	{'q':'재미있게 본 미드는?', 'question':'재미있게 본 미드는?'},
	{'q':'1년후 나는 무엇을 하고있을까?', 'question':'1년후 나는 무엇을 하고 있을까요?'},
	{'q':'나의 월요병 증상은?', 'question':'나의 월요병 증상은?'},
	{'q':'하늘을 날수 있으면 어디에 가고싶나?', 'question':'하늘을 날수 있다면 어디에 가고싶나요?'},
	{'q':'라면을 맛있게 끓이는 방법?', 'question':'라면을 맛있게 끓이는 나만의 노하우는?'},
	{'q':'나는 XXX할때 질투를 느낀다.', 'question':'나는 XXX할때 질투를 느낀다.'},
	{'q':'들으면 기분 좋아지는 노래', 'question':'들으면 기분 좋아지는 노래가 있나요?'},
	{'q':'행복의 1번 조건은?', 'question':'내가 생각하는 행복의 1번 조건은?'},
	{'q':'제일 좋아하는 스포츠', 'question':'제일 좋아하는 스포츠는?'},
	{'q':'다시 태어나면 절대 태어나고 싶지 않은 나라', 'question':'다시 태어나면 절대 태어나고 싶지 않은 나라가 있나요?'},
	{'q':'나의 신체부위 중 가장 자신있는 곳', 'question':'나의 신체 부위 중 가장 자신있는 곳은?'},
	{'q':'나는 XXX할때 나도 늙었다고 느낀다.', 'question':'나는 XXX할때 나도 늙었다는 생각이 든다.'},
	{'q':'내 인생의 터닝포인트', 'question':'내 인생의 터닝포인트가 있다면'},
	{'q':'나는 전생에 무엇이었을까?', 'question':'나는 전생에 무엇이었을까요?'},
	{'q':'무인도에 간다면 데리고 가고 싶은 한 사람은?', 'question':'무인도에 간다면 데리고 가고 싶은 한 사람은?'},
	{'q':'신발을 몇 켤레 가지고 있나?', 'question':'나는 신발을 몇 켤레 가지고 있나요?'},
	{'q':'노래제목에 침대를 붙여보자', 'question':'노래 제목앞에 "침대에서"를 붙이면 야해진다.'}
]
































