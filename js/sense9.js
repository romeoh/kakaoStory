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
	data.url = 'https://bit.ly/2W0aHqh';

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
	post += '풍선색으로 알아보는 나의 연애 스타일?\n';
	post += '(결과) ' + result;
	data.post = post;
	
	data.desc = '풍선색으로 알아보는 나의 연애 스타일!';
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
	'당신은 과거의 아픈 기억이나 다른 사람에게 뒤통수를 맞았던 기억을 가지고 있을 가능성이 높음. 겉으로는 활발해보이나, 솔직해지기 힘들어하는 타입.',
	'당신은 적극적이고 순수한 모습을 가지고 있고 상대방이 당신을 어리게 볼 수도 있으나 대인관계가 좋은 타입.',
	'당신은 매우 솔직한 타입. 다른 사람보다 이용 당할 가능성이 높으니 조심하는게 좋다.',
	'당신은 자신에게 조차도 솔직할 수 없는 타입. 자신을 위해서라도 솔직해지는 연습을 해야함.'
]































