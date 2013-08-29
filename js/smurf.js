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

	data.title = '개구쟁이 스머프';
	data.url = 'http://goo.gl/5yqyOY';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님은 스머프 마을의\n';
	post += database[idx]['name'] + '입니다.';
	data.post = post;
	
	data.desc = database[idx]['name'];
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + database[idx]['photo'];

	sendData(data);
}

database = [
	{'photo':'smurf1.png', 'name':'파파 스머프', 'talk':''},
	{'photo':'smurf2.png', 'name':'스머패트', 'talk':''},
	{'photo':'smurf3.png', 'name':'화가 스머프', 'talk':''},
	{'photo':'smurf4.png', 'name':'똘똘이 스머프', 'talk':''},
	{'photo':'smurf5.png', 'name':'편리 스머프', 'talk':''},
	{'photo':'smurf6.png', 'name':'조화 스머프', 'talk':''},
	{'photo':'smurf7.png', 'name':'낭만 스머프', 'talk':''},
	{'photo':'smurf8.png', 'name':'투덜이 스머프', 'talk':''},
	{'photo':'smurf9.png', 'name':'시인 스머프', 'talk':''},
	{'photo':'smurf10.png', 'name':'익살이 스머프', 'talk':''},
	{'photo':'smurf11.png', 'name':'자연이 스머프', 'talk':''},
	{'photo':'smurf12.png', 'name':'사세트 스머프', 'talk':''},
	{'photo':'smurf13.png', 'name':'요리사 스머프', 'talk':''},
	{'photo':'smurf14.png', 'name':'욕심이 스머프', 'talk':''},
	{'photo':'smurf15.png', 'name':'게으름이 스머프', 'talk':''},
	{'photo':'smurf16.png', 'name':'껑충이 스머프', 'talk':''},
	{'photo':'smurf17.png', 'name':'허영이 스머프', 'talk':''},
	{'photo':'smurf18.png', 'name':'할아버지 스머프', 'talk':''},
	{'photo':'smurf19.png', 'name':'덩치스머프', 'talk':''},
	{'photo':'smurf20.png', 'name':'퍼피', 'talk':''},
	{'photo':'smurf21.png', 'name':'빅노우스', 'talk':''},
	{'photo':'smurf22.png', 'name':'가가멜', 'talk':''},
	{'photo':'smurf23.png', 'name':'아즈라엘', 'talk':''}
]
































