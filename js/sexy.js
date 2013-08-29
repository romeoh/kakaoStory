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

	radioList = document.querySelectorAll('[type="radio"]')
	for (var i=0; i<radioList.length; i++) {
		if (radioList[i].checked) {
			selected = i
		}
	}
	
	if (selected === '') {
		alert('당신의 행동을 선택하세요.');
		return;
	}

	data.title = '섹시한여성을 봤을때 당신의 행동은?';
	data.url = 'http://goo.gl/wb8IF';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	database = dataSexy[selected]
	
	post += '[' + data.title + ']\n\n';
	post += database.title + '\n\n';
	post += '(결과)\n';
	post += database.result;
	data.post = post;
	
	data.desc = '공공장소에서 섹시한 여성을 봤을때 어떤 행동을 하나요?';
	data.img = 'http://romeoh.github.io/kakaoStory/img/sexy.jpg';

	sendData(data);
}

// 남자
dataSexy = [
	{'img': 'coffee0.jpg', 'title': '상대방이 나의 시선을 의식할 때 까지 주구장창 죽도록 쳐다본다.', 'result': '이런 사람 중엔 오히려 성실한 성격의 사람이 많다고 합니다. \n자신의 마음을 상대방에게 알리려는 성격으로 거짓이 없고 솔직한 성격의 소유자이구요. \n앞으로 누군가 나를 주구장창 쳐다본다면 상대는 성실한 사람일 가능성이 매우 높다고 생각하세요.'},
	{'img': 'coffee0.jpg', 'title': '상대방에게 한번만 시선을 주고, 일부러 눈길을 돌린다.', 'result': '이성과 대화나 맘에 드는 이성에게 한번만 시선을 주고 일부러 눈길을 돌려 다시 보려고 들지 않는 사람일 수록 성적욕구가 강한 사람일 가능성이 매우 높습니다. \n상대에게 상당한 관심을 가지고 있지만 억압이란 것이 강하게 작용하여 스스로를 자제하는 타입들이라고 합니다..'},
	{'img': 'coffee0.jpg', 'title': '상대방이 눈치 채지 못하게 계속해서 곁눈질을 한다.', 'result': '곁눈질을 하는 사람은 상대방에게 관심이 있지만 그것을 들키고 싶지 않은 타입 입니다. \n자신이 보고 있다는 것을 눈치 채이지 않게 일부로 얼굴을 움직이지 않고 시선만 옆으로 보내는 타입으로 \n계속 곁눈질을 하는 사람은 상대에 대한 관심이나 욕구가 강할수록 더욱 곁눈질을 하게 됩니다.'},
	{'img': 'coffee0.jpg', 'title': '상대방을 향해 눈을 내리 깔았다가 다시 치켜 올려보기를 반복한다.', 'result': '시선을 옆으로 돌리지 않고 올려다 봤다 내려다 봤다를 반복한다면 그것은 상대방에 대한 존경과 신뢰가 담긴 표정입니다. \n만약 여성이 남성을 이런식으로 쳐다본다면 더욱 더 그 상대방을 존경하고 있다는 표시입니다. \n혹자들은 오히려 자신이 무시당하고 있다고 기분 나빠하지만 사실은 당신을 존중한다는 것을 명심하세요.'}
]




























