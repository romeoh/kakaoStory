var selEye
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

	data.title = '눈썹관상';
	data.url = 'http://goo.gl/dp5IlS';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	if (!selEye) {
		alert('자신의 눈썹과 비슷한 모양을 선택하세요.');
		return false;
	}
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 눈썹은 "' + database[selEye]['title'] + '" 입니다.\n\n';
	post += database[selEye]['desc'];
	data.post = post;
	
	data.desc = database[selEye]['title'];
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + database[selEye]['photo'];

	sendData(data);
}

M('[data-eye]').on('click', function(evt, mp){
	selEye = parseInt(mp.data('eye'), 10);
	M('[data-eye] img').removeClass('sel');
	M('[data-eye="' + selEye + '"] img').addClass('sel');
})


database = [
	{'photo':'eyebrowthum1.png', 'title':'위를 향한 두꺼운 눈썹', 'desc':'스테미너가 왕성하고 피로를 모르는 정열적인 사람입니다.\n매사가 분명하고 확실한걸 좋아하는 성격이며, 결혼 후 원만한 가정을 꾸리는 관상입니다.'},
	{'photo':'eyebrowthum2.png', 'title':'아래로 향한 눈썹', 'desc':'자신의 의견을 확실히 말하는 성격입니다.\n또한 자신의 의견이 받아질 때까지 노력하는 강한 성격의 소유자입니다.'},
	{'photo':'eyebrowthum3.png', 'title':'짧은 눈썹', 'desc':'여성의 경우 내조하는 스타일이며,\n남성의 경우 밖으로 드러나는 성격은 급하지만 내면은 부드러운 사람입니다.'},
	{'photo':'eyebrowthum4.png', 'title':'긴 눈썹', 'desc':'어른스럽고 보수적인 성격의 소유자입니다.\n무엇인가를 연구하는 학자 스타일이에요.'},
	{'photo':'eyebrowthum5.png', 'title':'점 사마귀가 있는 눈썹', 'desc':'30세에 인생의 커다란 전환점이 생길 수 있습니다.\n일에서 성공수가 있지만 가족들의 도움을 받거나 혜택을 입을 일은 없어 보입니다.'},
	{'photo':'eyebrowthum6.png', 'title':'이어지지 않고 짤린 눈썹', 'desc':'직감력이 뛰어나고 아이디어 발상이 뛰어난 사람입니다.\n하지만 인내력이 없어 일을 끝까지 잘못해내는 편이에요.'},
	{'photo':'eyebrowthum7.png', 'title':'짙은 눈썹', 'desc':'이성상대를 단지 "놀이"상대로 보지 않는 성실한 타입입니다.\n또한 부모님을 돌보면서 어려운 일을 도맡아 해나가야 할 운명을 가지고 있습니다.'},
	{'photo':'eyebrowthum8.png', 'title':'좌우가 이어진 눈썹', 'desc':'결단력이 있고 강한 의지의 소유자입니다.\n사회적인 성취욕이 매우 강해 결혼 후 가정에는 소홀하기 쉽니다.'}
]



















