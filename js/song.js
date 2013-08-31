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

	data.title = '나의 결혼식 축가';
	data.url = 'http://goo.gl/IO4XYf';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	songIdx = process(dataSong)
	singIdx = process(dataSing)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 결혼식 축가는 ' + dataSong[songIdx] + ' 입니다.\n';
	post += '불러주는 사람: ' + dataSing[singIdx]['sing'];
	data.post = post;
	
	data.desc = '참석 안하는 사람은 매운맛을 보리라';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + dataSing[singIdx]['photo'];

	sendData(data);
}


dataSong = [
	'노을의 "청혼"',
	'이적의 "다행이다"',
	'유리상자의 "신부에게"',
	'주영훈/이혜진의 "우리 사랑 이대로"',
	'김동률의 "기적"',
	'포맨의 "청혼"',
	'성시경의 "내게오는 길"',
	'박선주의 "남과여"',
	'럼블피쉬의 "청혼"',
	'윤종신의 "너의 결혼식"',
	'개코의 "I Can Control You"',
	'엑소의 "으르렁"',
	'슈퍼주니어의 "쏘리쏘리쏘리"',
	'크레용팝의 "빠빠빠"',
	'승리의 "지지베(GG Be)"',
	'빅뱅의 "하루하루"',
	'2NE1의 "Do You Love Me"',
	'샤이니의 "누난 너무 예뻐"',
	'형돈이와 대준이의 "꺼져"',
	'지나의 "꺼져줄께 잘 살아"',
	'거미의 "그만 헤어져"'
]

dataSing = [
	{'photo':'song1.png', 'sing':'직접 부름'},
	{'photo':'song1.png', 'sing':'베프'},
	{'photo':'song3.png', 'sing':'맹승지'},
	{'photo':'song4.png', 'sing':'오나미'},
	{'photo':'song5.png', 'sing':'신보라'},
	{'photo':'song6.png', 'sing':'김지민'},
	{'photo':'song7.png', 'sing':'김구라'},
	{'photo':'song8.png', 'sing':'송해'},
	{'photo':'song9.png', 'sing':'김국진'},
	{'photo':'song10.png', 'sing':'서태지'},
	{'photo':'song11.png', 'sing':'데프콘'},
	{'photo':'song12.png', 'sing':'지드래곤'},
	{'photo':'song13.png', 'sing':'승리'}
]































