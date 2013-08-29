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

	data.title = '나에게 붙어있는 귀신';
	data.url = 'http://goo.gl/qy9Yj2';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	ghost = process(1, 100)
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님에게 붙어있는 귀신은 모두 ' + ghost + '마리 입니다.\n\n';
	post += '그 중에 갑은 ' + database[idx]['name'] + ' 입니다.';
	data.post = post;
	
	data.desc = database[idx]['name'];
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[idx]['photo'];

	sendData(data);
}



database = [
	{'photo':'ghosta1.png', 'name':'달걀귀신'},
	{'photo':'ghosta2.png', 'name':'처녀귀신'},
	{'photo':'ghosta3.png', 'name':'드라큐라'},
	{'photo':'ghosta4.png', 'name':'강시'},
	{'photo':'ghosta5.png', 'name':'마성터널귀신'},
	{'photo':'ghosta6.png', 'name':'옥수역귀신'},
	{'photo':'ghosta7.png', 'name':'몽달귀신'},
	{'photo':'ghosta8.png', 'name':'물귀신'},
	{'photo':'ghosta9.png', 'name':'식신귀신'},
	{'photo':'ghosta10.png', 'name':'도깨비'},
	{'photo':'ghosta11.png', 'name':'저승사자'},
	{'photo':'ghosta12.png', 'name':'좀비'},
	{'photo':'ghosta13.png', 'name':'여고귀신'},
	{'photo':'ghosta14.png', 'name':'봉천동귀신'}
]
































