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

	data.title = '나와 어울리는 겨울왕국 캐릭터';
	data.url = 'http://goo.gl/XGgVXB';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	anidx = process(database)
	mat = process(30, 100)

	post += '[' + data.title + ']\n\n';
	post += userName + '님과 어울리는 겨울왕국 캐릭터는 "' + database[anidx]['charac'] + '"입니다.\n';
	post += '매치율: ' + mat + '%';
	data.post = post;
	
	data.desc = database[anidx]['charac'];
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[anidx]['photo'];

	sendData(data);
}


database = [
	{'photo':'frozen1.png', 'charac':'안나공주'},
	{'photo':'frozen2.png', 'charac':'엘사공주'},
	{'photo':'frozen3.png', 'charac':'크리스토프'},
	{'photo':'frozen4.png', 'charac':'한스'},
	{'photo':'frozen5.png', 'charac':'울라프'},
	{'photo':'frozen6.png', 'charac':'스벤'},
	{'photo':'frozen7.png', 'charac':'왕'},
	{'photo':'frozen8.png', 'charac':'왕비'},
	{'photo':'frozen9.png', 'charac':'오큰'},
	{'photo':'frozen10.png', 'charac':'위즐턴공작'},
	{'photo':'frozen11.png', 'charac':'마시멜로'},
	{'photo':'frozen12.png', 'charac':'트롤'}
]



























