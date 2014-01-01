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

	data.title = '택배왔어요';
	data.url = 'http://goo.gl/LLRD7v';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy;
	} else if (sexType == 'girl') {
		database = dataGirl;
	}
	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post += '✉ ' + userName + '고객님이 주문하신 ' + database[idx]['a'] + ' 배송준비 완료되었습니다.\n';
	post += '본 상품은 주문제작 상품이므로 취소&환불&교환이 불가하니 주의해 주세요.\n';
	post += '단, 2014년 특별 이벤트가 진행중이니 원하시면 ' + database[idx]['b'] + ' 무료로 교환해 드릴수 있습니다.\n';
	post += '그럼 좋은 시간 보내시고, 새해 복 많이 받으세요.';
	data.post = post;
	
	data.desc = '아, 택배비는 후불입니다.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/delivery.png';

	sendData(data);
}



dataBoy = [
	{'a':'"나이 한살"이', 'b':'"나이 두살"로'},
	{'a':'"나이 한살"이', 'b':'"나이 세살"로'},
	{'a':'"나이 한살"이', 'b':'"나이 네살"로'},
	{'a':'"나이 한살"이', 'b':'"나이 다섯살"로'},
	{'a':'"나이 한살"이', 'b':'"나이 열살"로'},
	{'a':'"예쁜 여친"이', 'b':'"못생긴 여친"으로'},
	{'a':'"예쁜 여친"이', 'b':'"뚱뚱한 여친"으로'},
	{'a':'"진정한 친구"가', 'b':'"뒷통수 치는 친구"로'},
	{'a':'"최신 스마트폰"이', 'b':'"2G폰"으로'}
]

dataGirl = [
	{'a':'"나이 한살"이', 'b':'"나이 두살"로'},
	{'a':'"나이 한살"이', 'b':'"나이 세살"로'},
	{'a':'"나이 한살"이', 'b':'"나이 네살"로'},
	{'a':'"나이 한살"이', 'b':'"나이 다섯살"로'},
	{'a':'"나이 한살"이', 'b':'"나이 열살"로'},
	{'a':'"잘생긴 남친"이', 'b':'"못생긴 남친"으로'},
	{'a':'"잘생긴 남친"이', 'b':'"비호감 남친"으로'},
	{'a':'"진정한 친구"가', 'b':'"뒷통수 치는 친구"로'},
	{'a':'"최신 스마트폰"이', 'b':'"2G폰"으로'}
]
































