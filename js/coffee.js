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

	data.title = '커피로 알아보는 연애 심리테스트';
	data.url = 'http://goo.gl/bOJ1a';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = M('#selCoffee').val()
	
	post += '[' + data.title + ']\n\n';
	post += '주문하신 ' + dataCoffee[idx].coffee + ' 나오셨습니다.\n';
	post += dataCoffee[idx].result;
	data.post = post;
	
	data.desc = '나는 ' + dataCoffee[idx].coffee + '를 좋아합니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + dataCoffee[idx].img;

	sendData(data);
}

dataCoffee = [
	{'img': 'coffee0.jpg', 'coffee': '아이스모카', 'result': '아주 매혹적인 분이십니당~ 하지만 정작 본인은 모르고 계세요~ \n자기가 그렇게 매력적인 사람이라고는 생각도 못하고있죠 ^^'},
	{'img': 'coffee1.jpg', 'coffee': '카푸치노', 'result': '아주 정열적이고 낙천적인 분이세요~\n야심이 있는 타입이라고 할까요? 하지만 때로는 그냥 지나쳐버리는 경우도 많아요.\n그래서 이걸 잘 제어해줄사람을 좋아합니다~'},
	{'img': 'coffee2.jpg', 'coffee': '아메리카노', 'result': '아주 적극적이면서도 책임감이 강한 분이시군요 ^^\n로맨틱한 연애를 추구하고 있지는 않나요?? 그런것같은데??'},
	{'img': 'coffee3.jpg', 'coffee': '녹차 프라프치노', 'result': '뒤에서 상대를 후원해주거나 받쳐주는 그런타입이에요 \n사려가 깊고 성실한 성격이기 때문에 일에서도 연애에서도 언제나 \n키다리아저씨처럼 ^^'},
	{'img': 'coffee4.jpg', 'coffee': '카페오레', 'result': '마음이 편안한 남녀 관계를 추구하는 분이시군요.'},
	{'img': 'coffee5.jpg', 'coffee': '녹차라떼', 'result': '이것저것 걱정이 많으신 타입이네요. \n연애에 있어서도 내성적이라 상대방이 적극적으로 다가와주길 바라고있습니다.'}
]

 
 
 
 
 






























