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

	data.title = '심리테스트';
	data.url = 'https://bit.ly/2DgnWwh';

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

	//post += '[' + data.title + ']\n\n';
	post += '샤워 습관으로 알아보는 나의 연애 스타일?\n';
	post += '(결과) ' + result;
	data.post = post;
	
	data.desc = '샤워 습관으로 알아보는 나의 연애 스타일';
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
	'당신은 주변 사람들이 하자는데로 이끌려 다니는 스타일, 겉으로는 원만한 대인관계를 유지하는 것 같지만 속으론 속앓이를 하고 있음. 이런 성격은 이성을 만날때도 마찬가지이며 이성에게 휘둘리는 편임. 감정표현을 잘하는 것이 필요함!',
	'당신은 순수한 마음을 갖고 있으며, 이성에게 헌신적이고 순종적임. 배려를 잘하고 받는 것 보다 베푸는 것이 먼저인 당신. 순수한 마음에 상처를 받지 않는 것이 필요함!',
	'당신은 겉모습을 굉장히 중요하게 여기는 사람이며 이성을 볼 때도 패션감각, 얼굴 등을 중요시 함. 하지만 좋아하는 이성이 나타나면 그 사람에게 올인하는 스타일.',
	'당신은 지적 호기심이 높으며 매사에 신중한 스타일. 너무 신중한 탓에 연애 시작에 어려움이 있을수도 있으나 연애를 시작하면 지적인 탐구나 상대방에 대해 많은 것을 발견하고 싶어하는 경향이 있음'
]































