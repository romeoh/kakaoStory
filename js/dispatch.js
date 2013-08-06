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



window.addEventListener('DOMContentLoaded', function(){
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
}, false);



//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,sexType

	
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}

	if (M('#userName').val() == '') {
		alert('이름을 입력하세요.');
		return false;
	}
	
	if (boySelect.className == 'checked') {
		// 남자
		partner = dataGirl[Math.floor(Math.random() * dataGirl.length)]
	} else if (girlSelect.className == 'checked') {
		// 여자
		partner = dataBoy[Math.floor(Math.random() * dataBoy.length)]
	}

	news = dataNews[Math.floor(Math.random() * dataNews.length)]
	newsTitle = news['title'].replace(/ME/gi, M('#userName').val()).replace(/YOU/gi, partner['name'])
	newsArticle = news['article'].replace(/ME/gi, M('#userName').val()).replace(/YOU/gi, partner['name'])
	
	postMsg += newsTitle + '\n\n';
	postMsg += newsArticle + '\n\n';
	postMsg += 'http://goo.gl/gde5k \n';

	
	urlMsg = {
		title: '증권가 찌라시',
		desc: newsTitle,
		imageurl: ['http://romeoh.github.io/kakaoStory/imgEnter/' + partner['photo']],
		type:'article'
	}
	console.log(postMsg, urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '아무도 모르지만, 모두 아는 소문들',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

function getRandom(min, max){
	return Math.floor((Math.random() * (max-min) + min))
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "증권가 찌라시",
		url: "http://goo.gl/gde5k",
		appid: "funnyApp",
		appver: "1.0",
		appname: "증권가 찌라시",
		type: "link"
	});
}


dataBoy = [
	{'name':'조정석', 'photo':'boy1.png'},
	{'name':'장혁', 'photo':'boy2.png'},
	{'name':'원빈', 'photo':'boy3.png'},
	{'name':'강동원', 'photo':'boy4.png'},
	{'name':'현빈', 'photo':'boy5.png'},
	{'name':'공유', 'photo':'boy6.png'},
	{'name':'조인성', 'photo':'boy7.png'},
	{'name':'소지섭', 'photo':'boy8.png'},
	{'name':'이준기', 'photo':'boy9.png'},
	{'name':'류승범', 'photo':'boy10.png'},
	{'name':'송승헌', 'photo':'boy11.png'},
	{'name':'송중기', 'photo':'boy12.png'},
	{'name':'박재범', 'photo':'boy13.png'},
	{'name':'김현중', 'photo':'boy14.png'},
	{'name':'탑', 'photo':'boy15.png'}
]


dataGirl = [
	{'name':'아이유', 'photo':'girl1.png'},
	{'name':'수지', 'photo':'girl2.png'},
	{'name':'홍진영', 'photo':'girl3.png'},
	{'name':'김태희', 'photo':'girl4.png'},
	{'name':'송혜교', 'photo':'girl5.png'},
	{'name':'송지효', 'photo':'girl6.png'},
	{'name':'이민정', 'photo':'girl7.png'},
	{'name':'아이비', 'photo':'girl8.png'},
	{'name':'임수정', 'photo':'girl9.png'},
	{'name':'한지민', 'photo':'girl10.png'},
	{'name':'김세아', 'photo':'girl11.png'},
	{'name':'김하늘', 'photo':'girl12.png'},
	{'name':'성유리', 'photo':'girl13.png'},
	{'name':'민아', 'photo':'girl14.png'},
	{'name':'문근영', 'photo':'girl15.png'}
]



dataNews = [
	{'title':'[단독] ME·YOU, 열애 포착…"최강 비쥬얼 커플 탄생"', 'article':'ME과 YOU가 4개월째 열애중이다. \n올해 초, 지인들과의 만남에서 마음을 열었고, \n이달 초 밀렸던 사랑을 나누고 있다. \n그리고 본지가 두 사람의 만남을 단독으로 포착했다.\nME과 YOU의 데이트는 "극비"에 가까웠다. \n둘의 관계를 아는 사람이 손에 꼽힐 정도였다. \n그 만큼 비밀스럽고, 조심스러웠다. \n대부분의 만남은 차 안에서 이루어졌다. \n밖에서 움직일 때는 시간차를 유지했다.'},
	{'title':'[단독] ME·YOU, 비밀 데이트 포착…"신비주의 커플 탄생" ', 'article':'"한류스타" ME의 "TOP"는 YOU이었다. \n둘은 은밀하게, 그리고 철저하게 만남을 이어왔다. \n그 흔한(?) 측근들도 눈치재치 못할 만큼, \n두 사람의 사랑은 비밀스러웠다.\n본지가 ME과 YOU의 비밀 데이트를 단독으로 포착했다. \n지난 1달간 두 사람은 8차례 이상 같은 공간에 머물렀다. \n최소 4일에 1번 꼴이다. 데이트 시간은 12시간에서 24시간. \n대부분 1박 2일 데이트였다.'},
	{'title':'[단독] "신혼여행 아니에요"…YOU, 美 데이트 입국', 'article':'YOU이 결혼 발표 이후 처음 모습을 드러냈다. \n연인 ME과의 달콤한 미국 데이트를 즐긴 뒤 한국으로 돌아온 것. \n결혼을 약 2개월 남긴 YOU의 얼굴에는 행복한 미소가 가득했다.\nYOU은 13일 오전 3시 30분경 LA발 KE012편을 타고 돌아왔다. \n지난 7일 ME과 함께 출국, 약 1주일의 데이트를 마치고 인천공항에 도착했다. \n떠날 때는 함께였지만 올 때는 혼자였다. \nME이 국내 스케줄 관계로 하루 전인 12일 먼저 입국했기 때문이다.'},
	{'title':'[단독] ME·YOU, 비밀열애 노하우?…"은둔 데이트의 정석"', 'article':'소문난 신비주의 스타는 달랐다. 연인을 만날 때는 더 그랬다. \n일상에서와 마찬가지로, 자신의 존재를 철저하게 숨겼다. \n사람들의 시선을 차단하며 비밀 연애를 즐기는…, \n은둔형 데이트의 고수였다.\nME과 YOU이 그 주인공이다. \n약 11개월 정도 좋은 감정으로 만남을 이어오고 있다. \n둘의 열애는 연예계에도 잘 알려지지 않을 만큼 조심스럽게 이루어졌다. \n두 사람의 철저한 신비주의 전략 덕분에 가능한 일이었다.'},
	{'title':'[단독] ME, YOU, 데이트 패션은?…"아저씨룩 vs 그런지룩"', 'article':'ME과 YOU 커플의 데이트 패션은 그야말로 예상 밖이었다.\n공식석상에서 만난 두 사람은 런웨이를 방불케 할 정도로 트렌디하다. \n하지만 데이트 패션은 180도 반대. \n낡고 헐렁한 의상으로 이루어진 "그런지룩"을 즐겼다. \n그런지룩이란, 일명 노숙자 패션으로 오래돼 낡고 해진 옷을 형식에 구애받지 않고 입는 스타일을 말한다.'},
	{'title':'[단독] ME·YOU, 열애 포착…"최강 비쥬얼 커플 탄생"', 'article':'"톱스타" ME과 YOU가 그 어느 때보다 따뜻한 봄날을 보내고 있다. \n10년 전 모델로 활동하며 시작된 인연이, \n10년 후 연인이라는 이름으로 꽃을 피웠다.\n그 봄, 사랑에 빠졌다. ME과 YOU가 4개월째 열애중이다. \n올해 초, 지인들과의 만남에서 마음을 열었고, \n이달 초 밀렸던 사랑을 나누고 있다. \n그리고 본지가 두 사람의 만남을 단독으로 포착했다.'},
	{'title':'[단독] ME·YOU, 연애의 온도?…"오랜 친구, 시작 연인"', 'article':'ME과 YOU의 연애 온도는 높았다. \n약 10년 이상을 알고 지낸 사이였지만 뜨거웠다. \n두 사람은 시간이 날 때마다 만났고, \n이틀 연속 연달아 데이트를 즐기기도 했다. \n시작하는 연인, 그대로였다.\n본지 취재 결과, \nME와 YOU가 4개월째 좋은 감정을 이어가고 있다. \n두 사람 모두 바쁜 스케줄 속에서도 틈틈이 짬을 냈다. \n주로 스케줄 전후로 만났다. \n해외 일정이 있을 때는 출국 전에 만나고 귀국한 후에 또 보는 식이었다.'},
	{'title':'[단독] ME·YOU, 비쥬얼 어떨까?…"기럭지도 천생연분"', 'article':'ME과 YOU의 패션케미는 완벽했다. \n데뷔 초부터 모델 출신답게 훤칠한 키와 남다른 패션감각으로 트렌드를 주도한 공통점이 있다. \n두 사람은 데이트 때마다 시크한 스타일로 멋을 냈다.\nME·YOU는 비슷한 스타일링을 연출해 눈길을 끌었다. \n차분한 무채색 컬러에 실루엣이 드러나는 슬림핏 의상을 즐겨 입었다. \n디테일은 최대한 절제해 심플한 분위기를 강조했다. \n우월한 기럭지의 소유자인 만큼 구두 대신 운동화를 주로 신었다. '},
	{'title':'[단독] ME·YOU, 성탄절 데이트는?…"메리! 하우스~마스"', 'article':'"한류스타" ME와 "월드스타" YOU가 크리스마스 연휴를 함께 보냈다. \n둘이 함께 맞는 첫 크리스마스. \n그동안 외부 데이트를 즐겨 왔지만 이날 만큼은 집에서 오붓한 시간을 보냈다.\n크리스마스 데이트는 구랍 23일과 24일 각각 이루어졌다. \n23일에는 YOU가 ME를 픽업해 자신의 집으로 데려왔고, \n24일에는 ME가 자신의 차를 끌고 직접 YOU의 집으로 향했다. \nYOU는 크리스마스를 기념해 휴가를 받았고, \n두 사람은 삼성동 자택에서 조용히 데이트를 즐겼다. '},
	{'title':'[단독] ME, YOU에게 반한 까닭?…측근 "다정한 성격 매력"', 'article':'"월드스타" YOU의 뚝심이 통했다. 적극적인 대시로 "한류스타" ME의 마음을 사로잡았다. \n두 사람은 지난 해 9월부터 본격적으로 만났고, 3개월째 핑크빛 사랑을 나누고 있다.\nME는 YOU의 꾸준한 애정 공세에 마음이 열린 것으로 알려졌다. \n두 사람의 인연이 시작된 것은 지난 2011년 10월 "쿠팡" 광고 촬영 때. \nME는 친분을 쌓은 뒤 적극적으로 마음을 표현한 것으로 알려졌다.'},
	{'title':'[단독] ME·YOU, 몰래 데이트 비밀?…"자동차로 007 만남"', 'article':'탤런트 ME와 YOU가 목하 열애중이다. \n두 사람은 지난 2011년 11월 "쿠팡" CF 모델로 처음 만났고,  \n3개월전 연인으로 발전했다. \n본지는 연말연시를 함께 보내는 둘의 데이트 현장을 포착했다.\nME와 YOU의 만남은 "007 작전"을 방불케했다. \n비밀 데이트 첫번째 키워드는 차였다. \n두 사람은 각자의 차를 타고 미리 약속한 장소로 왔다. \n접선지에서 한 차로 옮겨탄 뒤 다른 곳으로 이동했다. \n데이트를 끝낸 후에는 다시 개인 차량으로 옮겨탔다.'},
	{'title':'[단독포착] "ME·YOU, 실제 데이트는 어떨까요?"', 'article':'12월 31일, 2012년 마지막 날입니다. \n올해도 연예계는 핑크빛으로 물들었습니다. \n수많은 스타커플이 탄생했습니다. \n그 중 가장 화제가 된 커플은 누굴까요? "한류스타" ME과 YOU의 열애 아닐까요.\n그러고 보니 가장 뜨거웠던 두 사람인데, \n정작 둘의 데이트는 단 한 번도 공개된 적이 없죠. \n분명 비주얼 커플일거라 예측은 되지만, \n실제 데이트 장면을 본 적이 없으니 답답할거라 생각이 듭니다.\n그래서, 올해가 가기 전. 본지가 특급커플의 데이트 장면을 투척합니다.'},
	{'title':'[단독] "둘이 가자, 하와이"…ME·YOU, 커플여행 포착', 'article':'ME와 YOU이 커플여행을 떠났다. 목적지는 미국 하와이. \n지난 19일 오후 7시, 대한항공 KE051편을 통해 인천공항을 빠져 나갔다. \n본지는 두 사람이 동반 출국하는 장면을 단독으로 포착했다. \n지인을 동반하지 않은 둘만의 달콤한 여행이었다.\n제18대 대통령 선거일, \nME와 YOU은 이른 아침 투표소로 향했다. \n국민의 권리를 당당하게 행사한 것. \n인증샷을 남기며 투표를 독려하기도 했다. \n특히 ME는 투표장 패션대결을 제안하며 젊은 세대의 관심을 이끌었다.'}
]













































