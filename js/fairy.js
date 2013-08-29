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

	data.title = '동화속 주인공';
	data.url = 'http://goo.gl/oBhFz2';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
	} else if (sexType == 'girl') {
		database = dataGirl;
	}
	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님의 동화속 주인공은\n';
	post += database[idx]['name'] + ' 입니다.';
	data.post = post;
	
	data.desc = database[idx]['ment'];
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + database[idx]['photo'];

	sendData(data);
}


dataBoy = [
	{'photo':'fairyB1.png',  'name':'흥부', 'ment':'기가 막힌다..기가..'},
	{'photo':'fairyB2.png',  'name':'혹부리영감', 'ment':'노래방 100점 보장 혹부리 팔아요.'},
	{'photo':'fairyB3.png',  'name':'놀부', 'ment':'부대찌개좀 많이 잡숴~'},
	{'photo':'fairyB4.png',  'name':'알라딘', 'ment':'망할 램프, 살 빼야 되는데.'},
	{'photo':'fairyB5.png',  'name':'슈렉', 'ment':'진실한 사랑의 프렌치 키스'},
	{'photo':'fairyB6.png',  'name':'타잔', 'ment':'가자, 치타.'},
	{'photo':'fairyB7.png',  'name':'야수', 'ment':'옛날에는 잘 나갔는데..'},
	{'photo':'fairyB8.png',  'name':'헤라클레스', 'ment':'다이어트 중이야.'},
	{'photo':'fairyB9.png',  'name':'피노키오', 'ment':'니들은 내말을 뻥이라고 하지만, 나는 LTE-A라고 한다.'},
	{'photo':'fairyB10.png', 'name':'피터팬', 'ment':'피터의 팬.'},
	{'photo':'fairyB11.png', 'name':'걸리버', 'ment':'이건 모험이야.'},
	{'photo':'fairyB12.png', 'name':'네로', 'ment':'파트라슈 새끼 분양해요~'},
	{'photo':'fairyB13.png', 'name':'해님', 'ment':'짱나..멍청한 달님..'},
	{'photo':'fairyB14.png', 'name':'여섯번째 난장이', 'ment':'여름에는 열대야, 내키는 이게 뭐야?'},
	{'photo':'fairyB15.png', 'name':'나무꾼', 'ment':'옷절도: 3년이하의 징역 또는 500만원 이하의 벌금'},
	{'photo':'fairyB16.png', 'name':'후크선장', 'ment':'또 낚았다..'}
]

dataGirl = [
	{'photo':'fairyG1.png',  'name':'신데렐라', 'ment':'아~ 짜증나 이번에 인쇼에서 델꼬온 신상 킬힐, 클럽에서 벗어놓고 왔나봐.'},
	{'photo':'fairyG2.png',  'name':'백설공주', 'ment':'많은면 뭐해.. 다들 150이 안되는데..'},
	{'photo':'fairyG3.png',  'name':'콩쥐', 'ment':'내가 착한애야, 나쁜애야?'},
	{'photo':'fairyG4.png',  'name':'심청이', 'ment':'울 아빠 라식 시켜주게.'},
	{'photo':'fairyG5.png',  'name':'인어공주', 'ment':'잠깐만요. 저 자연산 맞거든요.'},
	{'photo':'fairyG6.png',  'name':'잠자는 숲속의 공주', 'ment':'힝~ 또 지각이다.ㅠㅠ'},
	{'photo':'fairyG7.png',  'name':'이상한 나라의 앨리스', 'ment':'사유리 너 자꾸 내 캐릭 도용할래?'},
	{'photo':'fairyG8.png',  'name':'라푼젤', 'ment':'탑에서 하루종일 카스질 중..'},
	{'photo':'fairyG9.png',  'name':'엄지공주', 'ment':'몸매 좋으면 뭐해..키가..'},
	{'photo':'fairyG10.png', 'name':'도로시', 'ment':'깡통, 사자, 허수아비 합쳐놓은 남자 찾아요.'},
	{'photo':'fairyG11.png', 'name':'달님', 'ment':'핸님아~'},
	{'photo':'fairyG12.png', 'name':'춘향이', 'ment':'변사또, 너 내스탈 아니라구, 꺼져~'},
	{'photo':'fairyG13.png', 'name':'빨간머리앤', 'ment':'언니 뿌리 염색만 얼마에요?'},
	{'photo':'fairyG14.png', 'name':'팅커벨', 'ment':'솔까, 피터팬보다 내가 주인공 아냐?'},
	{'photo':'fairyG15.png', 'name':'벨(미녀와 야수)', 'ment':'전 얼굴 안봐요..'}
]

































