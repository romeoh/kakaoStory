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

	data.title = '나의 할로윈데이 캐릭터';
	data.url = 'http://goo.gl/kb813M';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 할로윈데이 캐릭터는 "' + database[idx]['char'] + '" 입니다.';
	data.post = post;
	
	data.desc = '10월 31일은 할로윈데이~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[idx]['photo'];

	sendData(data);
}


database = [
	{'photo':'halloween1.png', 'char':'천년의 마법사'},
	{'photo':'halloween2.png', 'char':'깜찍 푸걸'},
	{'photo':'halloween3.png', 'char':'큐티 헤르미온느'},
	{'photo':'halloween4.png', 'char':'잠자는 숲속의 공주'},
	{'photo':'halloween5.png', 'char':'섹시 베트걸'},
	{'photo':'halloween6.png', 'char':'원더망토'},
	{'photo':'halloween7.png', 'char':'팅커벨 망토'},
	{'photo':'halloween8.png', 'char':'클레오파트라'},
	{'photo':'halloween9.png', 'char':'앨리스'},
	{'photo':'halloween10.png', 'char':'섹시 프렌치메이드'},
	{'photo':'halloween11.png', 'char':'빨간 두건 소녀'},
	{'photo':'halloween12.png', 'char':'백설공주'},
	{'photo':'halloween13.png', 'char':'몬스터'},
	{'photo':'halloween14.png', 'char':'드라큐라'},
	{'photo':'halloween15.png', 'char':'다스베이더'},
	{'photo':'halloween16.png', 'char':'각시탈'},
	{'photo':'halloween17.png', 'char':'브이포벤데타'},
	{'photo':'halloween18.png', 'char':'큐티 유령'},
	{'photo':'halloween19.png', 'char':'호박유령'},
	{'photo':'halloween20.png', 'char':'오렌지스타'},
	{'photo':'halloween21.png', 'char':'럭셔리 망토'},
	{'photo':'halloween22.png', 'char':'빨간마스크'},
	{'photo':'halloween23.png', 'char':'홍콩할매귀신'},
	{'photo':'halloween24.png', 'char':'캐리비언 해적'},
	{'photo':'halloween25.png', 'char':'해적'},
	{'photo':'halloween26.png', 'char':'호박귀신'}
]































