var selList = null

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

	data.title = '성격 심리테스트';
	data.url = 'http://goo.gl/r5fTS';

	if (media == 'talk') {
		sendData(data);
		return false;
	}


	if (selList === null) {
		alert('보기중 하나를 선택하세요.');
		return false;
	}
	result = dataList[selList]

	if (M('#userName').val() !== '') {
		result = result.replace(/당신은/gi, M('#userName').val()+'님은');
	}

	post += '[' + data.title + ']\n\n';
	post += '- 장밋빛 미래를 위한 나의 노력은 무엇인가?\n';
	post += '# 미래에 사용하고 싶은 색상은 꿈을 위해 준비하는 당신의 현재 모습을 보여줍니다.\n\n';
	post += '(결과) ' + result;
	data.post = post;
	
	data.desc = '장밋빛 미래를 위한 나의 노력은 무엇인가?';
	data.img = 'http://romeoh.github.io/kakaoStory/img/person1.png';

	sendData(data);
}

window.addEventListener('DOMContentLoaded', function(){
	M('.checkList').on('click', function(evt, mp){
		M('.checkList').removeClass('sel')
		mp.addClass('sel');
		selList = mp.data('value')
	})
}, false);


dataList = [
	'지금 당신이 꿈꾸고 있는 미래는 어떤것 인가요? 욕심 많고 하고 싶은 것도 많은 당신은 그 꿈을 성취할 수 있을 겁니다. 다만, 꿈을 꿨다면 노력을 해야 합니다. 노력 없이 얻을 수 있는 것은 아무것도 없습니다.',
	'아직 꿈이 확실하지 않은 당신은 현재 아무런 노력도 하지 않고 있습니다. 당신이 그렇게 시간을 보낼 때 다른 사람들은 꿈을 이루기 위해 엄청난 투자를 하고 있다는 것을 잊지 마세요. 밝은 미래는 지금 당신의 노력에 달려있습니다.',
	'당신의 꿈을 이루기 위해 넘어야 할 산은 매우 높습니다. 하지만 긍정적인 생각을 가지고 포기하지 않는다면 아무리 어렵고 불가능해 보이는 꿈이라도 반드시 이뤄질 것입니다.',
	'직업이나 일에 대한 욕심보다는 편하게 살고 싶어하는 당신은 친구들보다 일찍 결혼할 수도 있습니다. 하지만 결혼생활이 무조건 편할 것이라는 생각은 버리는 것이 좋아요.'
]































