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

	data.title = '타임인조선';
	data.url = 'http://goo.gl/1cvuIf';

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
	nameIdx = process(dataName)
	born = getRandom(1392, 1910)
	age = getRandom(20, 80)

	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님은 조선시대 ' + database[idx]['title'] + '\n\n';
	post += '조선시대 이름: ' + dataName[nameIdx] + '\n';
	post += '생존기간: ' + born +' ~ ' + (born+age);
	data.post = post;
	
	data.desc = database[idx]['desc'];
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[idx]['photo'];

	sendData(data);
}


database = [
	{'title':'임금이었습니다.', 'photo':'chosun1.png', 'desc':'안녕~ 난 임금이야'},
	{'title':'양반이었습니다.', 'photo':'chosun2.png', 'desc':'천한것들...'},
	{'title':'중인이었습니다.', 'photo':'chosun3.png', 'desc':'순위권~'},
	{'title':'상인이었습니다.', 'photo':'chosun4.png', 'desc':'짚신 공구해여~'},
	{'title':'수공업자였습니다.', 'photo':'chosun5.png', 'desc':'오타쿠~'},
	{'title':'농민이었습니다.', 'photo':'chosun6.png', 'desc':'풍년일세~'},
	{'title':'공노비였습니다.', 'photo':'chosun7.png', 'desc':'쥔님~ 뿌잉뿌잉~'},
	{'title':'사노비였습니다.', 'photo':'chosun8.png', 'desc':'예~ 마님~'},
	{'title':'백정이었습니다.', 'photo':'chosun9.png', 'desc':'웰던으로요~'},
	{'title':'무당이었습니다.', 'photo':'chosun10.png', 'desc':'정성이 부족해~'},
	{'title':'창기였습니다.', 'photo':'chosun11.png', 'desc':'만능 엔터테이너'},
	{'title':'광대였습니다.', 'photo':'chosun12.png', 'desc':'넌 다음에 뭘로 태어날래?'},
	{'title':'국모였습니다.', 'photo':'chosun13.png', 'desc':'안녕 난 조선의 국모야~'}
]

dataName = [
	'옹식이',
	'옹돌이',
	'쇠돌이',
	'개똥이',
	'돌쇠',
	'마당이',
	'개떡이',
	'순냥이',
	'칠년이',
	'언국이',
	'쌍석이',
	'만놈이',
	'용득이',
	'삼년이',
	'삼래',
	'칠떡이',
	'언년이',
	'개단이',
	'순득이',
	'순창이',
	'만갑이'
]
































