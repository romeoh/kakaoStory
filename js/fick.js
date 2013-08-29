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

	data.title = '연애의 온도';
	data.url = 'http://goo.gl/Xr6KF';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	var  test1 = process(1, 99)
		,test2 = process(1, 99)
		,test3 = process(1, 99)
		,test4 = process(1, 99)
		,test5 = process(1, 99)
		,total = Math.round( (test1 + test2 + test3 + test4 + test5) / 5 )

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 연애의 온도: \n\n';
	post += '첫만남 : ' + test1 + '도씨 (' + getString(test1, 0) + ')\n';
	post += '고백 : ' + test2 + '도씨 (' + getString(test2, 1) + ')\n';
	post += '시킨쉽 : ' + test3 + '도씨 (' + getString(test3, 2) + ')\n';
	post += '권태기 : ' + test4 + '도씨 (' + getString(test4, 3) + ')\n';
	post += '이별 : ' + test5 + '도씨 (' + getString(test5, 4) + ')\n';
	post += '연애의 온도 : ' + total + '도씨';
	data.post = post;
	
	data.desc = total + '도씨';
	data.img = 'http://romeoh.github.io/kakaoStory/img/fick.png';

	sendData(data);
}


function getString(str, idx) {
	if (str <= 35) {
		return strData[idx][0]
	}
	if (str > 35 && str <= 45) {
		return strData[idx][1]
	}
	if (str > 45 && str <= 55) {
		return strData[idx][2]
	}
	if (str > 55 && str <= 65) {
		return strData[idx][3]
	}
	if (str > 65) {
		return strData[idx][4]
	}
}


// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "연애의 온도",
		url: "http://goo.gl/Xr6KF",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}

function getRandom(min, max){
	return Math.floor((Math.random() * (max-min) + min))
}



strData = [
	['매우 소극적으로 대쉬', '소극적으로 대쉬', '적당한 시기에 대쉬', '적극적으로 대쉬', '매우 적극적으로 대쉬'],
	['매우 소극적으로 고백', '소극적으로 고백', '적당한 시기에 고백', '적극적으로 고백', '매우 적극적으로 고백'],
	['매우 소극적 스킨십', '소극적 스킨십', '적당한 시기에 스킨십', '적극적으로 스킨십', '매우 적극적으로 스킨십'],
	['이미 다른 이성을 찾음', '매우 무관심', '상대방에게 별로 관심 없음', '극복하기 위해 노력함', '극복하기 위해 매우 노력함'],
	['이미 다른 이성이 있는 경우가 많음', '냉정하게 이별함', '차분하게 이별함', '상대방을 배려함', '상대방을 매우 배려함']
]



























