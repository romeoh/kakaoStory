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
		,twit = ''

	data.title = '너는 어느별에서 왔니?';
	data.url = 'http://goo.gl/X8VBsn';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	planet = process(dataPlanet)
	nameStr = uniValue(userName) ? userName + '이' : userName + ''
	point = shuffle(dataPoint)
	
	post += '[' + data.title + ']\n\n';
	post += '안녕\n';
	post += '나는 ' + dataPlanet[planet]['planet'] + '에서 온 ' + nameStr + '라고해\n';
	post += '내가 온 곳은 여기서 약 ' + dataPlanet[planet]['distance'] + ' 정도 떨어져 있어.\n\n';
	post += '그 곳에서는 \n';
	post += point[0]['and'] + '\n';
	post += point[1]['and'] + '\n';
	post += point[2]['end'];


	twit += '[' + data.title + ']\n\n';
	twit += '안녕, 나는 여기서 ' + dataPlanet[planet]['distance'] + ' 정도 떨어진 ' + dataPlanet[planet]['planet'] + '에서 온 ' + nameStr + '라고해\n';
	twit += '내가 온 곳은\n';
	twit += point[0]['and'] + '\n';
	twit += point[1]['end'];
	
	data.twit = twit;
	data.post = post;
	
	data.desc = '날 이해하려 하지마.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/planet.png';

	sendData(data);
}


dataPlanet = [
	{'planet':'수성', 'distance':'9천만km'},
	{'planet':'금성', 'distance':'4,500만km'},
	{'planet':'달', 'distance':'38만km'},
	{'planet':'화성', 'distance':'8천만km'},
	{'planet':'목성', 'distance':'6억km'},
	{'planet':'토성', 'distance':'12억km'},
	{'planet':'천왕성', 'distance':'27억km'},
	{'planet':'해왕성', 'distance':'45억km'},
	{'planet':'안드로메다', 'distance':'250만 광년'},
	{'planet':'마젤란 은하', 'distance':'20만 광년'},
	{'planet':'카시오페아', 'distance':'1만 광년'},
	{'planet':'페가수스', 'distance':'150광년'},
	{'planet':'안드로이드', 'distance':'500광년'},
	{'planet':'소행성 B612', 'distance':'3억km'}
]

dataPoint = [
	{'and':'싸이코들의 집합소고,', 'end':'싸이코들의 집합소이야.'},
	{'and':'모두 베개랑 사귀고 결혼도 베개랑 하고,', 'end':'모두 베개랑 사귀고 결혼도 베개랑 해.'},
	{'and':'소주에 밥말아 먹고,', 'end':'소주에 밥말아 먹어.'},
	{'and':'모두 노출 중독자들이고,', 'end':'모두 노출 중독자들이야.'},
	{'and':'나이 들어도 절대 늙지 않고,', 'end':'나이 들어도 절대 늙지 않아.'},
	{'and':'절대 가위바위보를 해서 지지 않고,', 'end':'절대 가위바위보를 해서 지지 않아.'},
	{'and':'모든 여자들이 G컵, H컵이고,', 'end':'모든 여자들이 G컵, H컵이야.'},
	{'and':'모든 생명체들이 다 수지를 닮았고,', 'end':'모든 생명체들이 다 수지를 닮았어.'},
	{'and':'모두 성형중독에 걸려서 욕만 먹고,', 'end':'모두 성형중독에 걸려서 욕만 먹어.'},
	{'and':'주식이 청양고추고,', 'end':'주식이 청양고추야.'},
	{'and':'모두 평생 치과를 절대 가지 않아 이가 모두 썩었고,', 'end':'모두 평생 치과를 절대 가지 않아 이가 모두 썩었어.'},
	{'and':'130kg가 넘는 여자들만 살고,', 'end':'130kg가 넘는 여자들만 살아.'},
	{'and':'조인성 닮은 남자들만 살고,', 'end':'조인성 닮은 남자들만 살아.'},
	{'and':'모두 재벌3세지만 가업을 물려받지 않고 살려고 하고,', 'end':'모두 재벌3세지만 가업을 물려받지 않고 살아.'},
	{'and':'하루 벌어서 그날 모두 다 써버리고,', 'end':'하루 벌어서 그날 모두 다 써버려.'},
	{'and':'30대지만 모두 10대의 얼굴이고,', 'end':'30대지만 모두 10대의 얼굴이야.'},
	{'and':'포토샵빨, 사진빨로 사기얼짱녀들만 살고,', 'end':'포토샵빨, 사진빨로 사기얼짱녀들만 살아.'},
	{'and':'너무 예뻐서 모든 사진을 도용당한 미녀들만 살고,', 'end':'너무 예뻐서 모든 사진을 도용당한 미녀들만 살아.'},
	{'and':'청순한 얼굴이지만 온몸에 타투로 뒤덮힌 여자들만 살고,', 'end':'청순한 얼굴이지만 온몸에 타투로 뒤덮힌 여자들만 살아.'},
	{'and':'7년동안 1억원을 들여 성형을 120번 한 여자들만 살고,', 'end':'7년동안 1억원을 들여 성형을 120번 한 여자들만 살아.'},
	{'and':'성형을 너무 많이 해서 모두 인조인간들이고,', 'end':'성형을 너무 많이 해서 모두 인조인간들이야.'},
	{'and':'남친들이 여친 겨드랑이 제모에, 코딱지까지 파주고,', 'end':'남친들이 여친 겨드랑이 제모에, 코딱지까지 파줘.'},
	{'and':'길거리에 풍기문란 스킨쉽 커플이 널려있고,', 'end':'길거리에 풍기문란 스킨쉽 커플이 널려있어.'},
	{'and':'생크림에 밥 말아 먹고,', 'end':'생크림에 밥 말아 먹어.'},
	{'and':'콜라에 밥 말아 먹고,', 'end':'콜라에 밥 말아 먹어.'},
	{'and':'21살에 모두 억대 연봉을 받고,', 'end':'21살에 모두 억대 연봉을 받아.'},
	{'and':'22살에 모두 로스쿨 변호사들이고,', 'end':'22살에 모두 로스쿨 변호사들이야.'},
	{'and':'아까운 거리도 항상 택시만 타고 다니고,', 'end':'아까운 거리도 항상 택시만 타고 다녀.'},
	{'and':'모두 너무 예쁜데 무일푼들이고,', 'end':'모두 너무 예쁜데 무일푼들이야.'},
	{'and':'100명의 애인에게 5년동안 모두 차인 사람들만 살고,', 'end':'100명의 애인에게 5년동안 모두 차인 사람들만 살아.'},
	{'and':'22살인데 전신 노안들만 살고,', 'end':'22살인데 전신 노안들만 살아.'},
	{'and':'네일아트 한다고 손으로 아무것도 안하는 사람들만 살고,', 'end':'네일아트 한다고 손으로 아무것도 안하는 사람들만 살아.'},
	{'and':'향수를 먹는 남자들만 살고,', 'end':'향수를 먹는 남자들만 살아.'},
	{'and':'모든 남자들이 매일 화장을 하고,', 'end':'모든 남자들이 매일 화장을 해.'},
	{'and':'된장녀를 혐오하는 남자들만 살고,', 'end':'된장녀를 혐오하는 남자들만 살아.'}
]



























