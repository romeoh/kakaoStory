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

	data.title = '미래 애인 추적기';
	data.url = 'http://goo.gl/lmysH';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy
		part = '아내는';
	} else if (sexType == 'girl') {
		database = dataGirl;
		part = '남편은';
	}

	partner = database[process(database)]
	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님의 미래의 ' + part + '\n';
	post += partner['name'] + '입니다.';
	data.post = post;
	
	data.desc = '미리 알아보는 내 미래의 ' + part.replace(/는/g, '').replace(/은/g, '');
	data.img = 'http://romeoh.github.io/kakaoStory/imgEnter/' + partner['photo'];

	sendData(data);
}


dataGirl = [
	{'name':'조정석', 'photo':'boy1.png'},
	{'name':'장혁', 'photo':'boy2.png'},
	{'name':'원빈', 'photo':'boy3.png'},
	{'name':'강동원', 'photo':'boy4.png'},
	{'name':'현빈', 'photo':'boy5.png'},
	{'name':'공유', 'photo':'boy6.png'},
	{'name':'조인성', 'photo':'boy7.png'},
	{'name':'소지섭', 'photo':'boy8.png'},
	{'name':'이준기', 'photo':'boy9.png'},
	{'name':'류승범', 'photo':'boy10.png'},
	{'name':'송승헌', 'photo':'boy11.png'},
	{'name':'송중기', 'photo':'boy12.png'},
	{'name':'박재범', 'photo':'boy13.png'},
	{'name':'김현중', 'photo':'boy14.png'},
	{'name':'탑', 'photo':'boy15.png'},
	{'name':'김제동', 'photo':'boy16.jpg'},
	{'name':'김영철', 'photo':'boy17.jpg'},
	{'name':'옥동자', 'photo':'boy18.jpg'}
]


dataBoy = [
	{'name':'아이유', 'photo':'girl1.png'},
	{'name':'수지', 'photo':'girl2.png'},
	{'name':'홍진영', 'photo':'girl3.png'},
	{'name':'김태희', 'photo':'girl4.png'},
	{'name':'송혜교', 'photo':'girl5.png'},
	{'name':'송지효', 'photo':'girl6.png'},
	{'name':'이민정', 'photo':'girl7.png'},
	{'name':'아이비', 'photo':'girl8.png'},
	{'name':'임수정', 'photo':'girl9.png'},
	{'name':'한지민', 'photo':'girl10.png'},
	{'name':'김세아', 'photo':'girl11.png'},
	{'name':'김하늘', 'photo':'girl12.png'},
	{'name':'성유리', 'photo':'girl13.png'},
	{'name':'민아', 'photo':'girl14.png'},
	{'name':'문근영', 'photo':'girl15.png'},
	{'name':'오나미', 'photo':'girl16.jpg'},
	{'name':'박지선', 'photo':'girl17.jpg'},
	{'name':'정주리', 'photo':'girl18.jpg'},
	{'name':'신봉선', 'photo':'girl19.jpg'}
]













































