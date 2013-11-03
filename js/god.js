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

	data.title = '나는 무슨 신(神)일까?';
	data.url = 'http://goo.gl/WwlvAa';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 \n';
	post += database[idx]['desc'] + ' "' + database[idx]['god'] + '"입니다.';
	data.post = post;
	
	data.desc = database[idx]['desc'] + ' "' + database[idx]['god'] + '"';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/god.png';

	sendData(data);
}


database = [
	{'god':'여신(神)', 'desc':'절정의 미모를 가진'},
	{'god':'저주의 신(神)', 'desc':'모든사람에게 저주를 걸수 있는'},
	{'god':'날씨의 신(神)', 'desc':'날씨를 지배하는'},
	{'god':'애교의 신(神)', 'desc':'애교를 떨면 모두 넘어가는'},
	{'god':'춤의 신(神)', 'desc':'춤을 지배하는'},
	{'god':'노래의 신(神)', 'desc':'노래를 지배하는'},
	{'god':'축구의 신(神)', 'desc':'축구를 지배하는'},
	{'god':'체육의 신(神)', 'desc':'체육을 지배하는'},
	{'god':'말빨의 신(神)', 'desc':'언어의 마술사인'},
	{'god':'싸움의 신(神)', 'desc':'싸움을 지배하는'},
	{'god':'공기의 신(神)', 'desc':'공기를 엄청 잘하는'},
	{'god':'큐브의 신(神)', 'desc':'큐브를 엄청 잘하는'},
	{'god':'노력의 신(神)', 'desc':'노력을 지배하는'},
	{'god':'정보의 신(神)', 'desc':'정보를 지배하는'},
	{'god':'인기의 신(神)', 'desc':'인기를 지배하는'},
	{'god':'부정의 신(神)', 'desc':'모든것을 부정적으로 생각하는'},
	{'god':'고무 신(神)', 'desc':'드립을 지배하는'},
	{'god':'친절의 신(神)', 'desc':'친절을 지배하는'},
	{'god':'만능의 신(神)', 'desc':'모든것을 다 잘하는'},
	{'god':'허기의 신(神)', 'desc':'항상 배고픈'},
	{'god':'남신(神)', 'desc':'엄청 잘생긴'},
	{'god':'물건의 신(神)', 'desc':'모든 물건을 다 가지고 있는'},
	{'god':'동물의 신(神)', 'desc':'동물과 말할수 있는'},
	{'god':'식물의 신(神)', 'desc':'식물을 지배하는'},
	{'god':'생명의 신(神)', 'desc':'모든생명을 되살릴수 있는'},
	{'god':'패션의 신(神)', 'desc':'패션을 지배하는'},
	{'god':'파괴의 신(神)', 'desc':'파괴를 지배하는'},
	{'god':'부상의 신(神)', 'desc':'항상 부상당하는'},
	{'god':'치료의 신(神)', 'desc':'모든 생명을 치료할수 있는'},
	{'god':'잠의 신(神)', 'desc':'잠의 세계를 지배하는'},
	{'god':'복수의 신(神)', 'desc':'복수를 지배하는'},
	{'god':'거래의 신(神)', 'desc':'거래를 지배하는'},
	{'god':'아부의 신(神)', 'desc':'아부를 지배하는'},
	{'god':'모범의 신(神)', 'desc':'신(神)중에 가장 모범생인'},
	{'god':'게임의 신(神)', 'desc':'게임을 지배하는'},
	{'god':'카리스마의 신(神)', 'desc':'눈빛으로 한 번에 애들 제압해버리는'},
	{'god':'4차원의 신(神)', 'desc':'4차원인 사람들을 지배하는'},
	{'god':'피아노의 신(神)', 'desc':'피아노를 지배하는'},
	{'god':'사랑의신(神)', 'desc':'사랑을 지배하는'},
	{'god':'연애의신(神)', 'desc':'연애를 지배하는'},
	{'god':'병신(神)', 'desc':'병신들을 지배하는'}
]

















































































































