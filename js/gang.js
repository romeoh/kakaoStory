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
		,countyName = data.countyName
		,post = ''

	data.title = '건달식 별명짓기';
	data.url = 'https://bit.ly/2ZaXbCA';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	paIdx = process(database1)
	nickIdx = process(database2)
	
	post += '[' + data.title + ']\n\n';
	post += '나는 ' + countyName + ' ' + database1[paIdx].paname + ', \n' + database2[nickIdx].nickname + ' ' + userName + '입니다.';
	data.post = post;
	
	data.desc = '';
	data.img = '';

	sendData(data);
}


database1 = [
	{'paname':'육성파'},
	{'paname':'오징어파'},
	{'paname':'따식이파'},
	{'paname':'까불이파'},
	{'paname':'연합파'},
	{'paname':'이글스파'},
	{'paname':'라이온파'},
	{'paname':'센터파'},
	{'paname':'터미널파'},
	{'paname':'깻잎파'},
	{'paname':'꽃돼지파'},
	{'paname':'까톡파'},
	{'paname':'줌마파'},
	{'paname':'아재파'},
	{'paname':'사랑파'},
	{'paname':'사대강파'},
	{'paname':'역세권파'},
	{'paname':'동양파'},
	{'paname':'왕관파'},
	{'paname':'지하철파'},
	{'paname':'학주파'},
	{'paname':'운동장파'},
	{'paname':'엔조이파'},
	{'paname':'원나잇파'},
	{'paname':'추천파'},
	{'paname':'아싸파'},
	{'paname':'인싸파'},
	{'paname':'조중동파'}
]

database2 = [
	{'nickname':'불타는 오징어'},
	{'nickname':'고장난 퀵보드'},
	{'nickname':'칠성급 장미꽃'},
	{'nickname':'삐딱한 아기의자'},
	{'nickname':'삐뚤어진 타투'},
	{'nickname':'지독한 떡볶이'},
	{'nickname':'속도위반 중고차'},
	{'nickname':'마스크 떠리'},
	{'nickname':'구멍난 스타킹'},
	{'nickname':'침묵의 카톡'},
	{'nickname':'텅빈 지하철'},
	{'nickname':'키작은 롯데타워'},
	{'nickname':'붉은 지구본'},
	{'nickname':'평평한 운동장'},
	{'nickname':'금간 유리창'},
	{'nickname':'언발란스 타이어'},
	{'nickname':'방탄 갤럭시'},
	{'nickname':'밑빠진 화분'},
	{'nickname':'알없는 옥수수'},
	{'nickname':'달콤한 팝콘'},
	{'nickname':'끓는 부대찌개'},
	{'nickname':'노란 덧니'},
	{'nickname':'화려한 짜파게티'},
	{'nickname':'눅눅한 튀김'},
	{'nickname':'침묵의 트위터'},
	{'nickname':'텅빈 인스타'},
	{'nickname':'밤에 피는 장미'},
	{'nickname':'루돌프 네온코'},
	{'nickname':'빡친 트럼프'},
	{'nickname':'넘치는 자신감'},
	{'nickname':'타투한 아기상어'}
]































