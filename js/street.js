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

	data.title = '스트리트파이터2';
	data.url = 'http://goo.gl/4bxN0D';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 스트리터파이터 캐릭은\n';
	
	post += database[idx]['charactor'] + '입니다.';
	data.post = post;
	
	data.desc = '';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[idx]['photo'];

	sendData(data);
}


database = [
	{'photo':'street1.png', 'charactor':'캔'},
	{'photo':'street2.png', 'charactor':'류'},
	{'photo':'street3.png', 'charactor':'혼다'},
	{'photo':'street4.png', 'charactor':'춘리'},
	{'photo':'street5.png', 'charactor':'블랑카'},
	{'photo':'street6.png', 'charactor':'장기에프'},
	{'photo':'street7.png', 'charactor':'가일'},
	{'photo':'street8.png', 'charactor':'달심'},
	{'photo':'street9.png', 'charactor':'사가트'},
	{'photo':'street10.png', 'charactor':'바이슨'},
	{'photo':'street11.png', 'charactor':'베가'}
]































