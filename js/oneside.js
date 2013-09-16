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

	data.title = '나에게 관심있는 사람은';
	data.url = 'http://goo.gl/KShKyt';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType === 'boy') {
		sex = '여자'
	} else if (sexType === 'girl') {
		sex = '남자'
	}

	total = process(0, 30)
	high = process(0, total)
	last = process(0, high)
	when = Math.round(process(10, 60)/10)*10
	
	post += '[' + data.title.replace(/사람은/g, sex+'는') + ']\n\n';

	if (total === 0) {
		post += '현재 ' + userName + '님에게 관심있는 ' + sex + '가 없습니다.';
	} else {
		post += '현재 ' + userName + '님에게 관심있는 ' + sex + '는 모두 ' + total + '명입니다.\n';
		
		if (high === 0) {
			post += '하지만 ' + userName + '님에게 매우 관심 있는 ' + sex + '는 없어보입니다.';
		} else {
			post += '그 중에 ' + high + '명은 당신에게 이성적으로 매우 관심이 ';

			if (last === 0) {
				post += '많지만 \n';
				post += '조만간 ' + userName + '님에게 고백할 '+sex+'는 없어 보입니다.';
			} else {
				post += '많으며, \n';
				post += '특히 ' + last + '명은 약 ' + when + '여일내에 ' + userName + '님에게 고백할 것으로 보입니다.';
			}
		}
	}
	
	data.post = post;
	
	data.desc = '줄을 서시오~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/oneside.png';

	sendData(data);
}


































