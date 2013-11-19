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

	data.title = '아이돌의 새멤버';
	data.url = 'http://goo.gl/1NnHVG';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	partIdx = process(dataPart)
	if (sexType == 'boy') {
		database = dataBoy
	} else if (sexType == 'girl') {
		database = dataGirl
	}
	gidx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님은 ' + database[gidx]['idol'] + '의 새멤버로 영입되어\n';
	post += dataPart[partIdx] + ' 담당하게 됩니다.\n';
	data.post = post;
	
	data.desc = '저희 새멤버를 소개할께요~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/idol/' + database[gidx]['photo'];

	sendData(data);
}


dataPart = [
	'댄스를',
	'비쥬얼을',
	'보컬을',
	'예능을',
	'카리스마를',
	'귀여움을',
	'섹시를',
	'몸개그를',
	'연기를',
	'랩을',
	'작사\,작곡을',
	'다리 각선미를',
	'깝죽을'
]


dataBoy = [
	{'photo':'idolB1.png', 'idol':'인피니트'},
	{'photo':'idolB2.png', 'idol':'EXO'},
	{'photo':'idolB3.png', 'idol':'비스트'},
	{'photo':'idolB4.png', 'idol':'B.A.P'},
	{'photo':'idolB5.png', 'idol':'에이젝스'},
	{'photo':'idolB6.png', 'idol':'방탄소년단'},
	{'photo':'idolB7.png', 'idol':'B1A4'},
	{'photo':'idolB8.png', 'idol':'블락비'},
	{'photo':'idolB9.png', 'idol':'샤이니'},
	{'photo':'idolB10.png', 'idol':'마이네임'},
	{'photo':'idolB11.png', 'idol':'틴탑'},
	{'photo':'idolB12.png', 'idol':'제국의 아이들'},
	{'photo':'idolB13.png', 'idol':'유키스'},
	{'photo':'idolB14.png', 'idol':'엠블랙'},
	{'photo':'idolB15.png', 'idol':'보이프렌드'},
	{'photo':'idolB16.png', 'idol':'슈퍼주니어'}
]


dataGirl = [
	{'photo':'idolG1.png', 'idol':'소녀시대'},
	{'photo':'idolG2.png', 'idol':'카라'},
	{'photo':'idolG3.png', 'idol':'에이핑크'},
	{'photo':'idolG4.png', 'idol':'달샤벳'},
	{'photo':'idolG5.png', 'idol':'티아라'},
	{'photo':'idolG6.png', 'idol':'에프터스쿨'},
	{'photo':'idolG7.png', 'idol':'씨스타'},
	{'photo':'idolG8.png', 'idol':'씨크릿'},
	{'photo':'idolG9.png', 'idol':'미스에이'},
	{'photo':'idolG10.png', 'idol':'에프엑스'},
	{'photo':'idolG11.png', 'idol':'포미닛'},
	{'photo':'idolG12.png', 'idol':'스피카'},
	{'photo':'idolG13.png', 'idol':'2NE1'},
	{'photo':'idolG14.png', 'idol':'걸스데이'},
	{'photo':'idolG15.png', 'idol':'레인보우'},
	{'photo':'idolG16.png', 'idol':'쥬얼리'},
	{'photo':'idolG17.png', 'idol':'나인뮤지스'},
	{'photo':'idolG18.png', 'idol':'쇼콜라'}
]







































































