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

	data.title = '나의 형상동물';
	data.url = 'http://goo.gl/yi3PU';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	anidx = process(database)
	mat = process(30, 100)

	post += '[' + data.title + ']\n\n';
	post += userName + '님과 어울리는 동물은 "' + database[anidx]['ani'] + '"입니다.\n';
	post += '매치율: ' + mat + '%';
	data.post = post;
	
	data.desc = database[anidx]['ani'] + '과';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[anidx]['photo'];

	sendData(data);
}


database = [
	{'photo':'animal1.png', 'ani':'코끼리'},
	{'photo':'animal2.png', 'ani':'개'},
	{'photo':'animal3.png', 'ani':'고양이'},
	{'photo':'animal4.png', 'ani':'기린'},
	{'photo':'animal5.png', 'ani':'염소'},
	{'photo':'animal6.png', 'ani':'토끼'},
	{'photo':'animal7.png', 'ani':'양'},
	{'photo':'animal8.png', 'ani':'말'},
	{'photo':'animal9.png', 'ani':'쥐'},
	{'photo':'animal10.png', 'ani':'소'},
	{'photo':'animal11.png', 'ani':'뱀'},
	{'photo':'animal12.png', 'ani':'호랑이'},
	{'photo':'animal13.png', 'ani':'거북이'},
	{'photo':'animal14.png', 'ani':'돼지'},
	{'photo':'animal15.png', 'ani':'원숭이'},
	{'photo':'animal16.png', 'ani':'코뿔소'},
	{'photo':'animal17.png', 'ani':'사자'},
	{'photo':'animal18.png', 'ani':'하이에나'},
	{'photo':'animal19.png', 'ani':'얼룩말'},
	{'photo':'animal20.png', 'ani':'표범'},
	{'photo':'animal21.png', 'ani':'치타'},
	{'photo':'animal22.png', 'ani':'캥거루'},
	{'photo':'animal23.png', 'ani':'부엉이'},
	{'photo':'animal24.png', 'ani':'박쥐'},
	{'photo':'animal25.png', 'ani':'너구리'},
	{'photo':'animal26.png', 'ani':'여우'},
	{'photo':'animal27.png', 'ani':'늑대'},
	{'photo':'animal28.png', 'ani':'재규어'}
]



























