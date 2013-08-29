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

	data.title = '내장 나이 알아보기';
	data.url = 'http://goo.gl/AatVA';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 내장중 가장 건강한것은 ' + database[idx]['viscus'] + '입니다.\n';
	post += userName + '님의 ' + database[idx]['viscus'] + '나이는 ' + process(5, 40) + '세 입니다.';
	data.post = post;
	
	data.desc = userName + '님은 ' + database[idx]['viscus'] + '미인입니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/img/viscus.png';

	sendData(data);
}



database = [
	{'viscus':'우폐', 'article': ''},
	{'viscus':'간', 'article': ''},
	{'viscus':'담낭', 'article': ''},
	{'viscus':'췌장', 'article': ''},
	{'viscus':'상행결장', 'article': ''},
	{'viscus':'심장', 'article': ''},
	{'viscus':'좌폐', 'article': ''},
	{'viscus':'횡격막', 'article': ''},
	{'viscus':'비장', 'article': ''},
	{'viscus':'위', 'article': ''},
	{'viscus':'횡행결장', 'article': ''},
	{'viscus':'소장', 'article': ''},
	{'viscus':'S상결장', 'article': ''},
	{'viscus':'방광', 'article': ''},
	{'viscus':'신장', 'article': ''},
	{'viscus':'하행결장', 'article': ''},
	{'viscus':'항문관', 'article': ''},
	{'viscus':'요관', 'article': ''},
	{'viscus':'장골', 'article': ''}
]




































