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

if (os == 'ios' || os == 'android') {
	//init();
} else {
	var  adTop = document.querySelector('#adTop')
		,adBottom = document.querySelector('#adBottom')
		,adMiddle = document.querySelector('#adMiddle')
	document.querySelector('body').removeChild(adTop)
	document.querySelector('body').removeChild(adBottom)
	document.querySelector('body').removeChild(adMiddle)
}

window.addEventListener('DOMContentLoaded', function(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}, false);


//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,selAlpha = document.querySelector('#selAlpha')
		,data
	
	if (selMonth.value == '') {
		alert('태어난 월을 선택하세요.');
		return;
	}
	if (selDate.value == '') {
		alert('태어난 일을 선택하세요.');
		return;
	}
	if (selBlood.value == '') {
		alert('혈액형을 선택하세요.');
		return;
	}
	
	idx = getStar(selMonth.value, selDate.value, selBlood.value)
	result = dataBlood[idx].blood[selBlood.value]
	starName = dataBlood[idx]['name']
	birth = dataBlood[idx]['date']
	img = dataBlood[idx]['img']

	postMsg += '[별자리+혈액형 성격테스트]\n\n';
	postMsg += starName + '(' + birth + '), ' + selBlood.value + '형 입니다.\n',
	postMsg += result + '\n\n';
	
	postMsg += 'http://goo.gl/LR7Lf\n';
	
	urlMsg = {
		title: '별자리+혈액형 성격테스트',
		desc: starName + '(' + birth + ')',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/'+img],
		type:'article'
	}
	console.log(urlMsg)

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '별자리+혈액형 성격테스트',
		urlinfo : JSON.stringify(urlMsg)
    });
}


// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "뭐 내세울게 있나요?",
		url: "http://goo.gl/LR7Lf",
		appid: "funnyApp",
		appver: "1.0",
		appname: "색깔로 알아보는 심리테스트",
		type: "link"
	});
}


function getStar(month, date, blood){
	switch(month){
		case '1':
			if (date >= 20) {
				return 0;
			} else {
				return 11;
			}
		break;
		case '2':
			if (date >= 19) {
				return 1;
			} else {
				return 0;
			}
		break;
		case '3':
			if (date >= 21) {
				return 2;
			} else {
				return 1;
			}
		break;
		case '4':
			if (date >= 20) {
				return 3;
			} else {
				return 2;
			}
		break;
		case '5':
			if (date >= 21) {
				return 4;
			} else {
				return 3;
			}
		break;
		case '6':
			if (date >= 22) {
				return 5;
			} else {
				return 4;
			}
		break;
		case '7':
			if (date >= 23) {
				return 6;
			} else {
				return 5;
			}
		break;
		case '8':
			if (date >= 23) {
				return 7;
			} else {
				return 6;
			}
		break;
		case '9':
			if (date >= 23) {
				return 8;
			} else {
				return 7;
			}
		break;
		case '10':
			if (date >= 23) {
				return 9;
			} else {
				return 8;
			}
		break;
		case '11':
			if (date >= 23) {
				return 10;
			} else {
				return 9;
			}
		break;
		case '12':
			if (date >= 22) {
				return 11;
			} else {
				return 10;
			}
		break;

	}
}

// 남자
dataBlood = [
	{'name': '물병자리', 'date':'1/20~2/18', 'img':'star0.jpg', 'blood': {
		'A':'사람만나는걸 좋아하는 친철한 사람입니다.',
		'B':'밝고 꾸밈없으며 개성이 넘쳐서 이성들에게 인기 캡입니다.',
		'O':'주위에 활력을 주는 보스 타입입니다.',
		'AB':'지적이고 냉정한 면이 있으며 유능한 사람입니다.'
	}},
	{'name': '물고기자리', 'date':'2/19~3/20', 'img':'star1.jpg', 'blood': {
		'A':'우유부단하고 싸우는걸 싫어하고, 인간관계가 좋습니다.',
		'B':'상대방의 입장을 존중해주는 스타일로 친구가 많은 편입니다.',
		'O':'요령 부리는 것을 싫어해 처세에 서툰 스타일입니다.',
		'AB':'말을 재미있게 하고 배려심이 있는 카운슬러 타입입니다.'
	}},
	{'name': '양자리', 'date':'3/21~4/19', 'img':'star2.jpg', 'blood': {
		'A':'윗사람들의 신임이 두텁고 예의가 아주 바릅니다.',
		'B':'낯가림이 없는 밝은성격이며 자존심이 의외로 센편입니다.',
		'O':'남을 잘 돌봐주고 책임감이 강합니다.',
		'AB':'상대에 따라 유연하게 대응하는 사교성이 뛰어나지만 다소 신경질적입니다.'
	}},
	{'name': '황소자리', 'date':'4/20~5/20', 'img':'star3.jpg', 'blood': {
		'A':'온화하고 성실한 규칙적인 사람입니다.',
		'B':'일단 친해진 상대는 결코 배신하지 않는 성실성의 소유자입니다.',
		'O':'남을 배려할줄 아는 따뜻한 마음의 소유자입니다.',
		'AB': '남이 뭐라든 개의치 않고 마이페이스를 유지하는 매력자입니다.'
	}},
	{'name': '쌍둥이자리', 'date':'5/21~6/21', 'img':'star4.jpg', 'blood': {
		'A':'부드럽고 근면해 윗사람들이 좋아합니다.',
		'B':'즐겁고 재미있는 전형적인 인기있는 사람입니다.',
		'O':'낙천적이고 잘 노는 분위기 메이커입니다.',
		'AB': '사교적이고 남을 즐겁게 해주지만 다가가기 힘든 타입입니다.'
	}},
	{'name': '게자리', 'date':'6/22~7/22', 'img':'star5.jpg', 'blood': {
		'A':'온화하고 포용력이 있음. 남의 문제를 잘 해결해주는 해결사 타입입니다.',
		'B':'좋고 싫은게 분명해서 한 번 틀어지면 끝입니다.',
		'O':'항상 남을 배려하고 협조하는편이며, 의리와 인정에 목숨겁니다.',
		'AB': '동료나 친구를 먼저 생각하는 의리파입니다.'
	}},
	{'name': '사자자리', 'date':'7/23~8/22', 'img':'star6.jpg', 'blood': {
		'A':'온화한 인품과 리더쉽의 소유자입니다.',
		'B':'언제나 사람들의 중심이 되는 분위기 메이커입니다.',
		'O':'리더쉽이 강해 주의 사람들이 많이 따르는 타입입니다.',
		'AB':'스마트한 사교술로 사람들에게 인기가 있습니다.'
	}},
	{'name': '처녀자리', 'date':'8/23~9/22', 'img':'star7.jpg', 'blood': {
		'A':'꼼꼼하고 책임감 강하고 협조적인 타입입니다.',
		'B':'허술해 보이지만 친해질수록 좋은 점을 많이 보여주는 타입입니다.',
		'O':'상대방의 부탁을 거절하지 못하고 사람좋다는 말을 자주듣습니다.',
		'AB': '붙임성이 좋고 말 잘하는 인기있는 타입입니다.'
	}},
	{'name': '천칭자리', 'date':'9/23~10/22', 'img':'star8.jpg', 'blood': {
		'A':'사교적이며 악의가 없으며, 스마트한 인상으로 이성들에게 인기가 높습니다.',
		'B':'사람만나는 걸 좋아하는 밝은 성격의 소유자입니다.',
		'O':'균형 잡힌 성격으로 여성들에겐 나이를 불문하고 호감을 받습니다.',
		'AB': '냉정하고 세심하며 약간 타산적이란 말을 듣기도 합니다.'
	}},
	{'name': '전갈자리', 'date':'10/23~11/22', 'img':'star9.jpg', 'blood': {
		'A':'만나는 사람에겐 항상 친절하고 믿음직스러운 성격입니다.',
		'B':'개성이 워낙 강하고 싫고 좋은게 분명합니다.',
		'O':'너그럽고 소박하며 의지가 되는 타입입니다.',
		'AB': '인간 관계는 원만하지만 속마음을 털어놓을 친구는 별로 없습니다.'
	}},
	{'name': '사수자리', 'date':'11/23~12/21', 'img':'star10.jpg', 'blood': {
		'A':'친절하고 밝은 성격으로 신뢰하는 사람들이 많습니다.',
		'B':'밝고 즐거워서 모임에 없어서는 안될 인물입니다.',
		'O':'밝고 솔직해서 누구에게나 호감을 주는 타입입니다.',
		'AB': '냉정함이 매력으로 보이는 타입입니다.'
	}},
	{'name': '염소자리', 'date':'12/22~1/19', 'img':'star11.jpg', 'blood': {
		'A':'자신이 적극적으로 행동하진 않지만 상대의 청은 거절하지 않습니다.',
		'B':'처음만나는 사람에게도 거리낌없이 말해서 오해를 사는 타입입니다.',
		'O':'매사를 호탕하게 받아들이지만 붙임성을 별로 없는 편입니다.',
		'AB':'남의 생각에 구애 안받고 마이페이스로 밀고 나가는 타입입니다.'
	}}
]
































