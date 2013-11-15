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

	data.title = '나는 앞으로 어떻게 변할까?';
	data.url = 'http://goo.gl/JSLe1F';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 앞으로 ' + database[idx]['will'] + ' 변합니다.';
	data.post = post;
	
	data.desc = database[idx]['will'] + ' 변해라 뿅!!';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[idx]['photo'];

	sendData(data);
}


database = [
	{'photo':'imot1.png', 'will':'귀엽게'},
	{'photo':'imot1.png', 'will':'쿨하게'},
	{'photo':'imot1.png', 'will':'잘나가게'},
	{'photo':'imot2.png', 'will':'밝게'},
	{'photo':'imot2.png', 'will':'활발하게'},
	{'photo':'imot2.png', 'will':'착하게'},
	{'photo':'imot3.png', 'will':'훈훈하게'},
	{'photo':'imot3.png', 'will':'야하게'},
	{'photo':'imot4.png', 'will':'수줍게'},
	{'photo':'imot4.png', 'will':'바보처럼'},
	{'photo':'imot4.png', 'will':'지각 잘하게'},
	{'photo':'imot5.png', 'will':'질투 많게'},
	{'photo':'imot5.png', 'will':'잘 울게'},
	{'photo':'imot5.png', 'will':'좌절 잘하게'}
]





























