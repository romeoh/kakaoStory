var  d = new Date();
	yy = d.getFullYear()
	mm = d.getMonth() + 1
	dd = d.getDate()

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

	data.title = '매일 매일 오늘의 운세';
	data.url = 'http://goo.gl/vza69y';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	yearIdx = (bornYear - 1936) % 12
	animal = ani[yearIdx]
	dataVal = yy + mm + dd
	forInx = ( dataVal + getUni(userName) + yearIdx ) % database.length
	
	post += '[' + data.title + ']\n\n';
	post += yy + '년 ' + mm + '월 ' + dd + '일 \n'
	post += userName + '님의 (' + animal['ani'] + '띠)운세입니다.\n\n';
	post += database[forInx];
	data.post = post;
	
	data.desc = '매일 매일 보는 오늘의 운세~';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + animal['photo'];

	sendData(data);
}

M('h2').text(mm + '월 ' + dd + '일 오늘의 운세');

function getUni(_val) {
	if (!_val) {
		return;
	}
	var unival = 0
	for (var i=0; i<_val.length; i++) {
		char = _val.substr(i, 1)
		unival = Math.abs(unival + char.charCodeAt(0) - 0xAC00)
	}
	return unival;
}

ani = [
	{'photo':'fortune1.png', 'ani': '쥐'},
	{'photo':'fortune2.png', 'ani': '소'},
	{'photo':'fortune3.png', 'ani': '호랑이'},
	{'photo':'fortune4.png', 'ani': '토끼'},
	{'photo':'fortune5.png', 'ani': '용'},
	{'photo':'fortune6.png', 'ani': '뱀'},
	{'photo':'fortune7.png', 'ani': '말'},
	{'photo':'fortune8.png', 'ani': '양'},
	{'photo':'fortune9.png', 'ani': '원숭이'},
	{'photo':'fortune10.png', 'ani': '닭'},
	{'photo':'fortune11.png', 'ani': '개'},
	{'photo':'fortune12.png', 'ani': '돼지'}
]

database = [
	'감각이 살아있으면 무슨 일을 하더라도 선택의 폭이 한껏 더 넓다.',
	'약점으로 나타나는 무엇이 있다면 구태여 숨기려고 허둥대지 마라.',
	'강한 것도 좋지만 부드러운 면을 갖추지 않고서 일어날 수는 없다.',
	'몸과 마음이 피곤할 때는 만사 제치고 잠시 쉬었다가는 것이 좋다.',
	'주관대로 움직이는 것이 필요하니 가치관을 확실히 하고 넘어가자.',
	'의견충돌이 사라지고 모두가 한마음이 되어서 기뻐하는 좋은 하루.',
	'승부수를 띄울 때는 충분한 준비가 되지 않으면 크게 상하기 쉽다.',
	'마음의 뜻을 깊이 새기고 진리의 참뜻을 가슴 깊은 곳에 묻어두자.',
	'호사다마라는 말도 있으니 피해를 최소화하는 일이 가장 중요하다.',
	'애정과 관심이 희석되면 가족 간에 불편할 수 있으니 인내가 필요.',
	'늪에 빠진 사람을 도와주면 보따리 내놓으라는 말을 들을 수 있다.',
	'자세가 반듯하면 시작이 조금 부실하거나 늦어도 만회하기가 쉽다.',
	'자신의 의견을 무마시키려는 세력이 눈에 보이니 차분하게 임하라.',
	'무엇이 먼저인지를 정확하게 파악하고 행동하는 것이 시급한 문제.',
	'밀물과 썰물의 원리도 모르는 사람은 뒤에서 관망함이 바람직하다.',
	'멀리 떨어진 사람을 가까이 하려고 애를 쓰지만 쉬운 일은 아니다.',
	'낮은 곳으로 자리를 옮기지만 갖가지 추측만 난무하고 혼란스럽다.',
	'여기저기 전전하지 말고 한곳에 머무르면 행운이 나에게 찾아온다.',
	'부정한 사안에 관여하지 말고 책임을 자기혼자서 덮어쓰지도 마라.',
	'미처 생각지 못한 일 때문에 몹시 당황하기 쉬우니 항상 유념하라.',
	'저돌적인 자세를 지양하고 부드럽고 온건한 이미지를 부가시킬 때.',
	'털어서 먼지 안 나는 사람은 없으나 그런 것에 연연하면 곤란하다.',
	'마음이 가볍고 뜻밖의 소득이 발생하니 심신이 새털처럼 가볍구나.',
	'백번 듣기보다는 한번 내 눈으로 확인하는 것이 가장 현명한 모습.',
	'오랜만에 지인을 만나 즐거운 시간을 보내니 체증이 내려가는구나.',
	'감각이 떨어지면 상황판단이 흐려지니 스스로를 세심하게 살필 때.',
	'작은 힘으로 알찬 소득을 올릴 수 있는 호기를 맞이하는 시점이다.',
	'그간의 경험을 살리면서 전력을 기울이면 갈등의 소지가 사라진다.',
	'입에 달고 쓴 것에 따라서 소비량의 차이가 나는 것은 당연지사다.',
	'세상에 공짜는 없으니 줄 건 주고 취할 건 취하는 것이 바른 행위.',
	'순조롭게 진행되던 일이 갑작스레 막히면 당황하는 것은 당연지사.',
	'크게 앞서지만 마음한구석이 여전히 불안한 모습은 무엇 때문인가.',
	'드러내고 싶지 않을 때는 가만히 기다리는 것이 여러 가지로 이득.',
	'결과가 미진할 때는 계속 진행하지 말고 원인파악에 신경을 쓸 것.',
	'앙숙이던 사람과 관계 개선되고 오랜 채무관계가 해결되니 즐겁다.',
	'물어보지 않고 자신만의 생각과 판단만으로 결정하자니 힘든 하루.',
	'난처한 일로 인한 후유증이 예상되나 조력자가 나타나니 다행이다.',
	'보이는 것만 생각하고 그대로 밀고 나가면 좋은 결과를 얻는 운세.',
	'금전문제로 난감하니 눈앞의 이익을 두고도 손에 넣지 못하는구나.',
	'대세를 따르면서 결과에 순응하는 것이 현실적으로 바람직한 행동.',
	'미혼자는 좋은 인연을 만나고 주머니가 두둑해지는 행운을 맞는다.',
	'타인의 말에 일희일비하지 말고 주관을 분명하게 가지고 매진하라.',
	'새로운 시작도 좋으나 오늘은 잠시 머무는 편이 여러 가지로 좋다.',
	'수상한 것을 보고 그냥 지나치는 건 자신을 괴롭히는 우매한 행동.',
	'일관성이 부족하면 좋은 결과를 얻기 힘드니 인내심을 발휘하도록.',
	'잠시 후면 다시 활기가 솟아나니 주저앉지 말고 다시 몸을 세우자.',
	'한 가지 사안에 매진하면서 주변사람들의 시선을 자세하게 살피자.',
	'불리한 상황에서 벗어나서 점점 유리한 상황으로 변모하는 운세다.',
	'하극상의 사건이 일어날 조짐이 보이니 대인관계를 원만하게 하라.',
	'무서운 생각과 즐거운 생각이 마음을 어지럽히고 있으니 난감하다.',
	'처음에 생각했던 그대로 진행하면 잃는 것보다 얻는 것이 더 많다.',
	'빈곳이 있으면 그냥두지 말고 무언가로 채우는 것이 좋을 것 같다.',
	'둑이 무너질 때는 바늘구멍처럼 자그만 틈새가 원인이 될 수 있다.',
	'기초에 충실하지 않고서 완벽한 마무리가 될 수 없음을 잊지 마라.',
	'질환은 있지만 치료를 해도 별다른 진전 없고 여러 가지로 힘들다.',
	'허리를 굽히지 말고 반듯이 세운 모습 그대로 임하면 크게 웃는다.',
	'계획에 차질이 빚어지지 않도록 서로에게 힘이 되어주는 시점이다.',
	'약간의 무리수를 두었어도 후회하거나 두려워하지 말고 문을 열자.',
	'무리한 투자로 인한 금전손실이 우려되니 섣부른 판단은 금물이다.',
	'가까운 사람끼리 하나로 뭉치지 못하면 여러모로 상황이 불리하다.',
	'반가운 사람을 만나지만 자기본분을 망각하는 일은 절대 없어야지.',
	'필요에 의해서 구한 것도 효율성이 떨어진다면 과감하게 정리하자.',
	'원칙을 준수하지 않으면서 좋은 결과를 바라는 것은 안 좋은 모습.',
	'앞으로 나가야할지 뒤로 물러서야 할지를 확실하게 정해야하는 때.',
	'처음 시작한 것처럼 끝까지 같은 방향을 유지하는 것이 가장 좋다.',
	'감정처리는 신속하게 하고 새로운 기분으로 길을 나서야 편안하다.',
	'이해득실보다 인간관계를 다양하게 구축하는 일에 전력을 다할 때.',
	'자신의 본분을 지키는 것이 얼마나 가치 있는 일인가를 깨닫는 날.',
	'가치관의 차이를 인정하고 상대를 먼저 배려하는 마음이 필요하다.',
	'쳐진 어깨를 활짝 펴고 자신의 의지를 만천하에 알리는 것이 좋다.',
	'살그머니 다가서지 않으면 복이 달아나는 시기니 소리 내지 마라.',
	'일에 막힘이 있지만 상심하지 말고 해결방법을 찾는 일에 힘써라.',
	'수시로 일의 진행상황을 체크하지 않으면 모든 것이 사라지는 날.',
	'물레방아가 돌아가는 간단한 원리를 실생활에 응용하면 유익하다.',
	'가족끼리라도 지나친 간섭은 상대를 질리게 할 수 있으니 삼가라.',
	'마음을 열고 상대방의 진심을 가슴으로 느낄 수 있다면 금상첨화.',
	'꿈이 없다면 주검과도 같다는 말을 명심하고 가치관을 정립할 때.',
	'지금보다 조금만 더 긍정적인 사고방식을 가진다면 큰 발전 있다.',
	'눈치만 보고 망설이지 말고 속 시원하게 토로하는 것이 중요하다.',
	'변화를 기다리지 말고 스스로 다가서는 모습을 보이는 것이 중요.',
	'어떠한 방법을 택하는 것이 좋을지 명확한 판단력이 서지 않는 날.',
	'경솔한 말이나 행동 때문에 자신의 위치가 매우 좁아지기 쉬운 날.',
	'재물에 대한 욕구가 강한 것은 상관없지만 실행방법을 잘 택할 것.',
	'평범한 걸 거부하고 특별한 것을 추구하는 사람은 큰 힘을 얻는다.',
	'한산한 가운데 집안도 무탈하고 건강도 좋으니 심신이 편안하구나.',
	'이보 전진을 위한 일보후퇴는 자신에게 좋은 경험이 될 수도 있다.',
	'민감한 사안에 접근할 때는 개인적인 의견을 내세우지 말아야한다.',
	'마음이 편안하면 도모하는 일도 잘되고 집안도 그지없이 편안하다.',
	'황급히 움직일 때는 꼭 한 가지씩 잃어버리는 경우가 생기는 운세.',
	'집안문제로 하는 일에 지장을 초래할 수 있으니 각별히 주의할 것.',
	'한 번에 변화를 시도하는 것은 불리하니 서둘지 말고 천천히 하자.',
	'어디로 걸음을 옮겨야할지 시종일관 고심하지만 쉬운 일이 아니다.',
	'의심쩍은 구석이 있으면 섣불리 나서지 않는 것이 안전할 것 같다.',
	'당찬 포부를 밝히고 주변사람들의 마음을 하나로 모아야 수월하다.',
	'가족 간에 화목하고 심신이 편안하니 구하는 것을 얻기 쉬운 하루.',
	'사실이 아닌 것을 부정하지 말고 태연하게 인정하는 것이 좋은 날.',
	'산행을 계획 중이라면 가까운 곳을 택하는 것이 여러 가지로 좋다.',
	'행여나 하는 마음에 마음을 졸이지만 결과는 아무래도 부담스럽다.',
	'한곳이 비워지면 다른 걸로 보충하면 별다른 문제는 없을 것 같다.',
	'화합하는 마음으로 임하면 주변의 사람들이 나에게 호감을 갖는다.',
	'한낱 기우에 지나지 않을 일을 두고 괜한 근심에 사로잡히는 운세.',
	'어느 시점에 발을 옮길 것인가를 판단하는 일이 가장 중요한 행동.',
	'정직한 사람이 살아가기 힘든 세상이라고 생각하는 것은 편견이다.',
	'위기상황을 어떻게 대처하느냐에 따라 위치이동이 달라질 수 있다.',
	'가운데 서서 여러 방향을 주시하면 이로운 방향을 찾을 수도 있다.',
	'사소한 일에 예민하게 반응하지 말고 대충 넘기는 것이 이로울 듯.',
	'기승전결이 완벽하게 이루어지면 불가능한 일도 가능해질 수 있다.',
	'군더더기 없이 일처리하면 예상보다 많은 이익을 창출하는 운세다.',
	'희로애락이 적당히 섞인 날이니 담담하게 받아들이고 살면 편하다.',
	'꿈자리가 좋지 않을 때는 가능하면 외출을 자제하는 것이 좋을 듯.',
	'지저분한 곳에 가지 말고 개인위생에 보다 많은 신경을 써야할 때.',
	'문제의 본질을 왜곡하지 말고 동등한 시각에서 해결책을 찾아내라.',
	'어두운 곳을 밝히는 일에 앞장서면 모르는 사이에 명성을 얻는 날.',
	'반복되는 상황에 빠른 적응을 하지 않으면 여기서 벗어날 수 없다.',
	'길을 가다가 낙상의 기운이 있으니 바깥출입을 자제함이 현명하다.',
	'기본적인 준비도 하지 않고 길을 떠나려는 것은 상당히 위험한 일.',
	'느낌이 안 좋다고 외면하지 말고 일일이 따져본 후에 일을 끝내자.',
	'타인의 이목을 의식하지 않으려고 애쓰지만 현실을 그렇지가 않다.',
	'앞만 살피지 말고 좌우도 살피면서 전진하는 것이 훨씬 이로운 날.',
	'다수의 의견도 중요하지만 소수의 의견을 무시하는 것은 잘못이다.',
	'화려한 것을 추종하는 것은 내면의 부족함을 채우려는 몸부림이다.',
	'나를 아끼는 사람이 여럿이 있다면 아직 많은 기회가 있다는 증거.',
	'마음이 부자인 사람은 작은 것에 감사하고 큰 욕심 부리지 않는다.',
	'금전문제로 고심하는 사람에게 손을 건네니 많은 변화가 일어난다.',
	'수상한 것을 보고 그냥 지나치는 것은 자신을 괴롭히는 나쁜 행동.',
	'좌절이라는 단어가 나의 삶에서 사라지도록 노력하는 사람이 되자.',
	'약간의 무리수를 두지만 상승국면에 있으니 좋은 결과가 기대된다.',
	'벽이 앞을 가로막고 있어도 조력자만 나타나면 무난하게 벗어난다.',
	'디딜 자리가 어딘지 미리 알아두지 않으면 낭패당할 수 있는 운세.',
	'자손들도 번창하고 작지만 경사가 연이어 나타나니 일신이 편하다.',
	'문서상의 마무리작업이 완벽하게 처리되지 않으면 득이 없는 하루.',
	'자만은 긍정적인 면보다 부정적인 면을 더 크게 부각시킬 수 있다.',
	'개혁이란 앞장선 사람에게 고통을 안겨주지만 그만한 가치가 있다.',
	'이기적인 발상에서 벗어나면 많은 사람들의 입에서 좋게 전해진다.',
	'불만이 있어도 겉으로 표현하지 말고 속으로 삭이는 편이 더 좋다.',
	'생각과 행동이 일치하지 않으면 소망하는 것을 빨리 얻을 수 없다.',
	'크게 얻고 작게 잃으니 오늘은 행운의 여신이 나를 보고 손짓한다.',
	'편파적인 여론으로 인한 손실이 발생하지 않도록 조율하면 길하다.',
	'바닥에서 헤매지 말고 높은 데로 올라가야 모든 것이 자리 잡는다.',
	'흐트러진 마음은 단번에 바로잡기 힘드니 하나씩 천천히 해결하자.',
	'어설픈 느낌이 들어도 믿음을 잃지 말고 끝까지 손을 맞잡고 가자.',
	'정통한 소식통이 전해주는 정보라도 확인이 안 되면 믿을 수 없다.',
	'주변사람들과 많은 정보를 공유하는 것은 좋으나 과하면 실물한다.',
	'교류라는 것은 일방적이면 곤란하니 적당히 균형을 맞추면서 가자.',
	'마음의 평정을 찾지 못하면 건강에 해를 미친다는 것이 잊지 마라.',
	'상대방의 마음을 기쁘게 하려는 의도가 와전되기 쉬우니 주의하라.',
	'긍정적인 사고방식으로 임하면 모든 것이 수월하게 진행되는 운세.',
	'구성이 탄탄해도 연출력이 없으면 영화의 줄거리가 산만해지는 법.',
	'지도층에 있는 사람은 아랫사람의 목소리를 듣고 파안대소하는 날.',
	'참고 인내하는 사람은 바라던 것을 얻기 쉬우니 조금만 더 참아라.',
	'생각의 차이를 두고 서로 논쟁하는 것은 아까운 시간 허비하는 것.',
	'초라한 모습으로 다가서지 말고 당당한 모습으로 다가서야 이긴다.',
	'누군가를 보살피는 일이 힘겨울 수 있으나 누구나 하는 일 아닌가.',
	'모처럼 어깨 힘을 주고 나설 수 있으니 온가족들이 모두 기뻐한다.',
	'상충하는 것은 멀리하고 보완하는 것을 가까이하니 일신이 편하다.',
	'생각하던 일이 현실로 나타나니 기쁘기도 하지만 한편으론 슬프다.',
	'무슨 사연이 있는지 들어보지도 않고 윽박지르는 건 옳지 않은 일.',
	'내손에 없어도 내 것이라 당당하게 소리칠 수 있어야 기운이 난다.',
	'독선과 아집을 멀리하고 화합하는 모습으로 다가서니 모두 반긴다.',
	'집안에 근심이 있더라도 해결방법이 없다면 대충하고 그냥 넘기자.',
	'인연이란 몽매간에 이루어지지만 인위적인 모습은 역겨운 법이다.',
	'나의 위치가 어딘가를 정확하게 가늠하고 미리 행하는 것이 상책.',
	'중간입장에서 처신하는 일이 그리 쉬운 일이 아닌 것을 명심하라.',
	'인생이란 그리 길지 않으니 인생을 조금 더 즐기면서 보내야한다.',
	'불편한 심기를 겉으로 드러내는 것은 자신에게 득이 되지 않는다.',
	'구하는 것을 얻을 수 있고 마음먹은 일은 곧바로 실행에 옮길 것.',
	'응어리가 풀어지고 가벼운 마음으로 행하니 여러모로 만족스럽다.',
	'원리 원칙을 준수하고 나 하나쯤이야 하는 마음은 버려야 길하다.',
	'반듯한 사람이 따로 있는 것은 아니니 자기행동에 책임을 지도록.',
	'자식으로 인한 고충은 누구나 있으니 적당한 선에서 관심을 끊자.',
	'이기적인 발상에서 시작한 일이 의외로 좋은 성과를 거두는 운세.',
	'심적으로 불안할 때는 변화에 역행하지 말고 순리를 택함이 옳다.',
	'감정에 매이지 말고 터놓고 이야기하면 좋은 관계로 승화되는 날.',
	'나설 자리와 물러설 자리를 구별 못하고 경거망동하면 힘든 하루.',
	'집안문제로 부부간에 대화의 단절이 우려되니 조금씩만 양보하자.',
	'호랑이를 잡으려면 산으로 가야지 바다로 가고 있으니 답답한 일.',
	'인식의 전환이 빨리 이루어지면 지금위치에서 벗어나기 쉬워진다.',
	'기품 있게 행동하는 자체는 문제가 없지만 구설이 따르면 손해다.',
	'일에 매진하지만 생각보다 성과가 미흡하게 나타나니 답답하구나.',
	'예상과는 전혀 다른 방향으로 전개되는 운세지만 큰 문제는 없다.',
	'풍선처럼 바람만 잔뜩 들어가 있으면 누가 쿡 찌르면 금방 터진다.',
	'변함없이 하루를 시작하지만 오늘은 늦게야 다급한 일이 발생한다.',
	'끈질긴 모습으로 도전하는 사람에게는 저녁 무렵 희소식이 들린다.',
	'받은 것이 있으면 주는 것이 있어야 서로 간에 마음상하지 않는다.',
	'기선을 제압하고 녹슬지 않은 자신의 능력과 위치를 재확인시키자.',
	'긍정적인 사고방식에서 희망도 용기가 생긴다는 사실을 잊지 마라.',
	'자그만 것부터 챙기는 습관을 들이면 구하는 것을 얻을 수도 있다.',
	'보이는 건 일부분에 불과하니 함부로 판단하지 말고 심사숙고하라.',
	'산 넘고 강을 건너 점차 좋은 방향으로 약진하니 자신감이 생긴다.',
	'깊은 상념에 사로잡힌 자는 그늘에서 벗어나 광명을 찾을 수 있다.',
	'자신감이 강한 것은 좋으나 지나치면 간혹 건방지게 보일 수 있다.',
	'사교성이 부족하면 잠시 어렵지만 신뢰가 부족하면 길게 고생한다.',
	'오가는 사람은 많지만 자세히 쳐다보면 교감하기에 어려움이 많다.',
	'힘든 일을 혼자 부여잡고 있으면 아무도 그것을 알아주지 않는 법.',
	'외유내강형인 사람을 가까이하면 크게 유리하니 없다면 빨리 찾자.',
	'쉬운 것은 쉽게 처리하고 어려운 것은 어렵게 처리하는 것이 맞다.',
	'풍전등화의 위치에서 벗어나 안정된 시점으로 접어드는 편안한 날.',
	'자연스러운 욕구를 자제하는 것은 생각보다 어려운 일이 아니던가.',
	'완벽을 추구하지 말고 적당히 허술한 면을 보이는 것이 훨씬 좋다.',
	'호랑이를 잡으러 바다로 가니 아무래도 헛된 시간만 보낼 것 같다.',
	'제자리에서 바람을 등지니 앞으로 나가기가 한결 수월해지는 운세.',
	'중간에서 이간질하는 사람이 있으면 여러모로 힘든 국면에 처한다.',
	'생각은 많지만 행동에 많은 제약이 있으니 몸도 마음도 곤한 하루.',
	'마지못해 자기 것을 주지 말고 즐거운 마음으로 건네야 편안한 법.',
	'계획대로 모든 일이 진행되고 황폐한 땅이 옥토로 변하는 좋은 날.',
	'사고의 전환이 필요한 시기지만 흐름이 잘 타는 것이 중요한 대목.',
	'금전적인 소득이 따르니 하는 일마다 흡족한 결과를 얻을 수 있다.',
	'행하는 것은 어렵지 않지만 오래 지속하는 것은 쉽지 않은 일이다.',
	'말없이 실천하는 자세를 갖추면 지지부진한 일이 서서히 움직인다.',
	'지렁이도 밝으면 꿈틀한다는 말이 온종일 머리에서 떠나지 않는다.',
	'밝은 생각으로 사람을 만나고 대화를 나누면 행운을 잡을 수 있다.',
	'약간의 손해는 받아드리고 훗날을 기약하는 것이 여러모로 이롭다.',
	'스스로를 엄격하게 다루는 사람은 주변사람들에게 큰 믿음을 준다.',
	'유사한 업종에 손대지 말고 새로운 분야에 관심을 갖는 것이 옳다.',
	'필요한 것이 눈에 띄지 않을 때는 임시방편을 이용하는 것도 방법.',
	'애매한 입장에 놓이기 쉬우니 선택할 시점을 뒤로 미루는 게 좋다.',
	'감성적인 부분에 얽매이지 말고 이성적으로 판단하는 것이 이롭다.',
	'스스로에 대한 자신감을 갖고 임하면 어떤 어려움도 이길 수 있다.',
	'뱁새가 황새 따라가려면 가랑이가 찢어진다는 말을 깊이 새기도록.',
	'집안에 어두운 그림자가 드리울 때는 이동하는 것이 가장 좋을 듯.',
	'자신의 본분을 지키는 것이 얼마나 가치 있는 일인가를 깨닫는 날.',
	'고민이 많은 사람은 조력자의 힘으로 심신이 가벼워지는 시점이다.',
	'알찬성과가 기다리고 있으니 재운이 따르고 집안에 경사가 겹친다.',
	'이미 소장한 걸 덤으로 얻는 운세지만 희소가치는 떨어질 수 있다.',
	'자식문제로 집안에 근심이 깊어지지만 현재로선 별다른 길이 없다.',
	'때 아닌 횡재를 맞이하니 기쁨은 크지만 소문내는 일은 하지 마라.',
	'구심점이 없으면 선두를 지키기 어려우니 출발은 나중으로 미루자.',
	'버릴 것과 소유할 것을 세심하게 살피고 관찰하는 것이 시급한 일.',
	'앞으로 나가야할지 뒤로 물러서야 할지를 확실하게 정해야하는 때.',
	'손에 쥐고 놓을 줄 모르는 사람은 더 큰 것을 잃어버릴 수도 있다.',
	'생각만 하고 행동으로 옮기지 않으면 여러모로 고단해지는 하루다.',
	'누군가와 승부수를 띄울 때는 극도의 긴장감이 사방에서 느껴진다.',
	'목표점이 점차 가시권에 들어오니 덤벙대지 말고 조용히 움직이자.',
	'호사다마라는 말도 있으니 피해를 최소화하는 일이 가장 중요하다.',
	'마음이 불편할 때는 말도 하기 싫어지고 눈빛조차 맞출 수가 없다.',
	'듣기 싫은 말도 때로는 겸허하게 받아들이는 것이 득이 되는 운세.',
	'과도한 변화는 자제하고 자신의 능력에 맞게 움직이면서 안착하자.',
	'안되면 되게 하라는 불굴의 정신력이 있다면 힘든 것이 하나 없다.',
	'물레방아가 돌아가는 간단한 원리를 생활에 응용하면 유익한 하루.',
	'전반적인 상황이 자신에게 불리하게 변하기 쉬우니 항상 조심하라.',
	'순서에 맞게 행동하고 움직이면 생각대로 일이 잘 진행될 수 있다.',
	'기본적인 것을 완벽하게 수행하고 새로운 것에 도전하면 성공한다.',
	'개인적인 문제로 공적인 인간관계에 누를 끼치는 모습은 지양하라.',
	'뒷거래는 과감히 단절하고 정도를 택하는 것이 바람직한 방법이다.',
	'고개를 숙일 때와 들 때를 잘 파악하고 행동하면 재물이 들어온다.',
	'어떠한 방법을 택하는 것이 좋을지 명확한 판단력이 서지 않는 날.',
	'기이한 것을 목격할 수 있지만 자신에게 별다른 피해가 없는 하루.',
	'마음이 무거운 상태로 이동하거나 변화를 도모하는 것은 위험하다.',
	'감당할 수 있다면 피하지 말고 정면으로 부딪히는 것이 바른 선택.',
	'황급히 움직일 때는 한 가지씩 잃어버리는 경우가 발생할 수 있다.',
	'꾸준한 노력이 뒷받침되고 인내심이 발휘되면 많은 발전을 이룬다.',
	'의심쩍은 구석이 조금이라도 있으면 섣불리 나서지 말아야 편하다.',
	'중심을 잃지 않고 중앙에서 자기자리를 지키고 앉았으니 만사태평.',
	'말이란 함부로 하는 것이 아니니 충분히 생각한 후에 말을 내뱉자.',
	'지병이 있는 사람은 호전될 기미가 보이지만 안심할 것은 아닌 듯.',
	'비등한 상태로 오래 유지하는 것은 자신에게 상당한 부담이 될 듯.',
	'촛불처럼 주위를 환하게 밝히는 마음으로 생활하는 것이 필요하다.',
	'무리한 행동은 자제하고 순리에 맞게 움직이니 여러모로 유익하다.',
	'만반의 준비만 되어 있다면 어떤 변화에도 크게 흔들리지 않는 법.',
	'한곳이 비워지면 다른 걸로 보충하면 별다른 문제는 없을 것 같다.',
	'자신의 약점을 보완하는 일보다 장점을 극대화시키는 일이 급하다.',
	'가운데서 여러 방향을 주시하면 자신에게 이로운 방향을 찾아낸다.',
	'모든 것을 담담하게 받아드리는 것은 좋으나 안주하기에는 이르다.',
	'돈이 사람을 따라야지 사람이 돈을 따라가서는 되는 일이 없는 법.',
	'돈독한 인간관계를 유지하는 것이 자신을 위해서도 중요한 일이다.',
	'기승전결이 완벽하게 이루어지면 불가능한 일도 가능해질 수 있다.',
	'시각을 다투는 일이 눈앞에 벌어지더라도 냉정한 모습을 유지하라.',
	'작은 몸짓으로 커다란 반향을 불러일으킬 수 있는 힘이 필요한 날.',
	'마음속의 바람이 현실로 나타날 기미가 보이기 시작하니 긴장된다.',
	'애타게 기다리지 말고 느긋한 마음으로 기다리는 것이 바람직하다.',
	'같은 것이라도 사람에 따라 느끼는 감정이 달라지는 건 당연한 일.',
	'어둠을 밝히는 일에 앞장서면 나도 모르는 사이에 명성을 얻는 날.',
	'속에 감춰진 것을 겉으로 모두 드러내면 신비감이 사라질 수 있다.',
	'가랑비에 옷이 다 젖는다는 사실을 망각하면 돌이킬 수 없는 시점.',
	'가진 것을 지키는 것이 새로운 것을 취하는 것보다 손쉬운 일이다.',
	'상호 교류하는 일을 먼저 생각하고 자신이 먼저 행동하는 게 좋다.',
	'탄탄한 기반을 바탕으로 하는 변화나 이동은 긍정적으로 생각하라.',
	'힘차게 하루를 시작하지만 약간의 혼돈이 예상되니 방심하지 마라.',
	'예단하지 말고 차분하게 현실을 받아드리는 것이 여러모로 길하다.',
	'앞만 살피지 말고 좌우도 살피면서 전진하는 것이 훨씬 이로운 날.',
	'그간의 피로와 열정을 뒤로하고 안정을 취하는 것이 좋을 것 같다.',
	'인적인 드문 곳에서 귀인을 만나는 형국이지만 부족함이 다반사다.',
	'시선이 어디로 향하는지 위치부터 정확하게 파악한 후에 다가서자.',
	'나설 자리와 물러설 자리를 구별 못하고 경거망동하면 곤란해진다.',
	'사소한 문제로 다투거나 시비가 엇갈려 마음이 불편해지는 시기다.',
	'시야가 흐리면 결정하기 힘드니 주변에 도움을 청함이 바람직하다.',
	'작은 일에 급격한 감정의 변화를 일으키는 것은 안 좋은 모습이다.',
	'이보 전진을 위한 일보후퇴는 자신에게 좋은 경험이 될 수도 있다.',
	'쓸데없이 남의 입에 오르내릴 필요는 없으니 행동거지를 조심하자.',
	'지병이 있는 사람은 악화될 수 있으나 미리 준비하면 무탈한 하루.',
	'멀리 떨어진 사람을 가까이 하려고 애를 쓰지만 쉬운 일은 아니다.',
	'밀물과 썰물의 원리조차 모르는 사람에게 집요하게 다가서지 마라.',
	'계획대로 진행되던 일에 탄력이 붙거나 귀인이 나타나는 시점이다.',
	'영리를 목적으로 하는 일도 경우에 따라서 목표가 달라질 수 있다.',
	'미처 생각지 못한 일 때문에 몹시 당황하기 쉬우니 항상 유념하라.',
	'신비한 체험을 하지만 함정일지 모르니 지나친 상상력은 절대금물.',
	'옳고 그름에 과민하게 반응하지 말고 하던 대로 행하는 것이 상책.',
	'한자리에 오래 머물지 말고 여러 곳을 전전하는 것이 훨씬 득이다.',
	'인간적인 면을 중요시하고 돈보다 명예를 중시하는 것이 필요하다.',
	'생각은 깊이 하되 짧게 해야지 시간이 길어지면 시야가 흐려질 뿐.',
	'반듯한 자세로 임하면 주변사람들의 시선이 은연중에 내게 쏠린다.',
	'크게 보고 생각하면 모든 일이 편하니 괜히 어렵게 생각하지 마라.',
	'아는 것과 모르는 것을 한곳에 버무려 놓은 것과 마찬가지 모양새.',
	'어둠이 내리면 불을 밝혀야지 무턱대고 전진하는 모습은 아둔하다.',
	'집안문제로 머리가 복잡한 사람은 마음을 비우는 것이 바람직하다.',
	'모자란 부분은 서둘러 채워두고 다음순서로 넘어가야 쉽게 풀린다.',
	'좋은 자리를 두고 힘든 곳으로 가려는 의중을 헤아리는 일이 우선.',
	'약간의 압박감은 자신을 더 높은 곳에 이르게 하는 영양제와 같다.',
	'설명이 길면 상대방이 지루하게 느끼니 짧게 하는 것이 가장 좋다.',
	'사소한 문제로 인해 이웃사람과 감정상하지 말고 인정으로 대하라.',
	'갖고 싶은 것이 있다면 망설이지 말고 곧장 행동으로 옮기면 된다.',
	'앞서가는 사람과 뒤에서 쳐지는 사람의 마음이 하나가 될 수 있다.',
	'빠르게 움직이면 좋은 효과를 보지만 늦어지면 어려움에 직면하다.',
	'겸손한 태도로 초지일관하면 막힌 부분이 자연스럽게 뚫리는 운세.',
	'매사 마음먹은 것처럼 되지 않지만 용기 잃지 말고 어깨를 펼치자.',
	'평소 접하지 않던 일을 눈으로 목격하니 기운이 상승하고 기쁜 날.',
	'입지를 탄탄하게 만드는 일도 중요하지만 시기적으로 조금 이르다.',
	'소심한 성격의 소유자는 재물은 얻지만 인심을 얻기가 힘들어진다.',
	'목표지점을 눈앞에 두고 있다면 오히려 차분하게 움직여야 이롭다.',
	'적을 알고 나를 안다면 백전백승이지만 그렇지 않으면 백전백패다.',
	'내가 먼저 거하면 모두의 힘이 분산되니 때를 기다리는 것이 옳다.',
	'돌아가는 길이 있어도 잠시 쉬어가는 마음의 여유를 갖고 임할 때.',
	'마음으로 전하기 힘든 말이 있거든 글로 적어서 보내면 그저 그만.',
	'우매한 판단으로 진행이 지지부진하니 원인파악에 전력을 다할 때.',
	'소원하는 것을 이루기는 힘들어도 근접하기 어려우니 그나마 다행.',
	'멀리서 바라보지 말고 가까이 다가서서 진솔한 대화를 나누어보자.',
	'상세하게 밝혀지지 않은 일에는 관심 갖지 않는 것이 훨씬 이롭다.',
	'예상치 못한 난관에 부딪힐 수 있으니 미리 준비하는 것이 필요함.',
	'편안한 일상을 어지럽히는 사람과의 만남이 우려되니 늘 조심하라.',
	'내 것이 중요하면 남의 것도 중요하다는 사실을 한시도 잊지 마라.',
	'어느 방향으로 걸어가야 수월한지를 생각하는 것은 어리석은 모습.',
	'주변사람들의 시선을 의식하지 말고 생각대로 행하는 것이 길하다.',
	'받은 것을 모두 줄 수는 없지만 절반만 건네도 여러모로 대길하다.',
	'조용한 분위기에서 혼자서 돌출행동을 한다면 이목이 집중되는 법.',
	'많은 경험과 노하우가 있더라도 새로운 정보는 계속해서 습득하라.',
	'튀고 싶은 마음이 간절하나 지금은 때가 이르니 조금 더 기다리자.',
	'자신의 얼굴에 흐뭇한 미소가 그려지는 운세니 부지런히 움직이자.',
	'멀리 던지면 좋을 것 같지만 그것보다 정확성이 더 우선되는 시점.',
	'외향적이 사람은 사람을 멀리하고 속내를 보이지 않아야 안전하다.',
	'선심을 쓰는 것은 좋지만 감당하지 못할 거면 아예 시작을 말도록.',
	'자신을 믿는 사람과 더불어 높은 산을 오르고 있으니 힘들지 않다.',
	'크게 생각하면 잘 풀릴 것도 같지만 막상 부딪히면 만만치가 않다.',
	'높은 장소만 고집하지 말고 중간정도 높이에서 기다려야 유리하다.',
	'화합하는 마음으로 임하면 많은 사람들이 나에게 호감을 나타낸다.',
	'기선을 제압하고 녹슬지 않은 자신의 능력과 위치를 재확인시키자.',
	'촛불처럼 주위를 환하게 밝히는 마음으로 생활하는 것이 필요하다.',
	'모르면 물어보면 되지만 아무나 잡고 물어보는 건 위험할 수 있다.',
	'강하게 밀면 무너질 것 같지만 요령이 없으면 시간만 축내는 하루.',
	'내려 보는 습관을 들이면 삶은 편하나 미래에 대한 의문이 생긴다.',
	'잔잔한 호숫가에 큰 물결이 칠 수 있으니 자세를 낮추어야 편하다.',
	'마음에서 우러나는 행동과 아닌 행동은 누가 봐도 확연히 다른 법.',
	'개인적인 바람을 뒤로 하고 공적인 일부터 먼저 행하는 것이 옳다.',
	'평탄한 곳으로 걸음을 옮기지만 예상치 못한 변수가 생길 수 있다.',
	'순탄하게 시작해서 순탄하게 끝나는 날이니 무리수를 두지 말도록.',
	'무거운 것은 조금씩 나누면 가벼워진다는 간단한 원리를 이용하자.',
	'간단하게 처리할 일을 길게 늘어뜨리면 주변사람들이 빨리 지친다.',
	'어중간한 위치에서 행동하면 주변의 시선이 살갑지 않게 다가온다.',
	'원하는 것을 손에 넣기에 좋은 때지만 조력자가 없으면 힘든 하루.',
	'무엇을 먼저 손에 쥘 것인지 그것부터 정한 후에 발걸음을 옮기자.',
	'적을 알고 나를 안다면 백전백승이지만 그렇지 않으면 백전백패다.',
	'용기와 만용을 구분하지 못하는 사람에게는 커다란 불행이 닥친다.',
	'화합하지 않으면 아프고 화합하면 자신의 뜻을 펼칠 수 있는 운세.',
	'능동적으로 움직이면 원하는 것을 제대로 성취하고 높이 올라선다.',
	'조용한 분위기를 깨트리고 나타나는 사람이 누구인지 자세히 보자.',
	'믿음이란 억지로 갖는 것이 아니라 오랜 세월의 흐름 뒤에 얻는다.',
	'차가운 것을 잡고 있으나 내면의 열정이 있으니 절대 차갑지 않다.',
	'정상적인 흐름으로 진행되다가 갑작스럽게 변할 수 있는 시점이다.',
	'내가 결정할 문제를 타인에게 맡기려는 행위는 어리석은 모습이다.',
	'사람의 힘으로 되는 건 절대 포기하지 말고 끝까지 혼신을 다하자.',
	'내 마음을 몰라주는 사람들이 많지만 알아주는 사람도 부지기수다.',
	'약간의 부담감을 안고 누군가를 만나는 건 결코 좋은 일이 아니다.',
	'당차게 시작하지만 중도에 여러 가지 변수가 발생할 수 있는 운세.',
	'많은 사람들과 인적교류를 행하지 않으면 갖가지 문제가 발생한다.',
	'급하게 처리할 문제가 아니면 뒤로 넘기는 것이 여러 가지로 좋다.',
	'몸과 마음이 하나의 선상에서 움직이면 여러모로 유익한 현상이다.',
	'나누고 싶은 것이 있다면 기다리지 말고 과감하게 행동에 옮길 때.',
	'자신이 말하는 것이나 행동하는 것에는 응당한 책임감이 뒤따른다.',
	'누군가의 의견을 수용하는 일은 자존심과는 전혀 상관없는 일이다.',
	'어수선하게 움직이면 곤란하니 교통정리는 제대로 한 후에 행하자.',
	'주변이 부산하면 무슨 일이 있는 거니 눈과 귀를 커다랗게 열어라.',
	'내 마음을 몰라준다고 속상해하지 말고 다양한 방법으로 표현하자.',
	'능력이란 항상 오르내림이 있으니 한곳에 머물지 말고 꿈틀거리자.',
	'사태파악에 필요한 눈썰미가 필요한 시점이니 부족한 것은 채우자.',
	'버릴 것은 버려야지 아깝다고 모두 손에 쥐고 있으면 냄새만 난다.',
	'거칠게 뿌리치면 새것이 올 것 같지만 그런 생각은 극히 위험하다.',
	'알고 행하는 것보다 모르고 행하는 것이 오히려 안전할 수도 있다.',
	'감성에 사로잡히면 현자의 목소리도 메아리로 들리니 참으로 걱정.',
	'칼을 한번 뽑았으면 무라도 썰어야지 그냥 칼집에 넣을 수는 없다.',
	'근거지가 없으면 서둘러 마련해야지 그대로 있으면 변함이 없구나.',
	'소리 나는 곳으로 움직이는 것이 좋지만 혼자는 조금 무리가 있다.',
	'주변사람들의 눈을 피하지 말고 그대로 받아드리는 편이 현명하다.',
	'대결이란 무언가를 판가름 내는 요식행위와도 같은 것이 아니던가.',
	'어두운 곳에서 밝은 태양을 만나는 운세니 원하는 것은 얻는 하루.',
	'먹구름이 걷히고 밝은 햇살이 비치니 상승국면으로 접어드는 시점.',
	'무리하지 말고 편안하게 모든 것을 수용하는 마음을 갖고 임할 때.',
	'한곳에 묻히면 아무런 소리도 들리지 않고 아무것도 안 보이는 날.',
	'내가 결정한 장소가 아니라도 과감하게 도전하면 승리하는 운세다.',
	'물이 위에서 아래로 떨어지는 단순한 원리를 응용하면 행복해진다.',
	'사람들이 옆에 머물지 않고 멀리 떠나가지만 다시 모일 때가 있다.',
	'기억에 없는 모습들은 억지로 떠올리지 말고 편안하게 받아드리자.',
	'돈보다 소중한 것을 가졌으나 그것을 자각하지 못하니 안타깝구나.',
	'재치는 인내를 극복할 수 없으니 두 가지를 모두 취해야 성공한다.',
	'천하를 다스리는 것이 무엇인지는 생각하는 사람마다 모두 다르다.',
	'사람과 사람이 만나서 행하는 것이 유익한지 무익한지를 생각한다.',
	'걱정은 하는 사람은 매일같이 하고 안 하는 사람은 하지를 않는다.',
	'바람 부는 방향으로 가지 말고 반대방향으로 가는 것이 득이 있다.',
	'심증은 있으나 물증이 없다면 관심을 다른 곳으로 두는 것이 좋다.',
	'발없는 말이 천리를 간다고 하니 함부로 엄한 소리는 내뱉지 마라.',
	'밑으로 내려가도 좋고 올라가도 좋으나 두 가지를 다 잡지 못한다.',
	'접근하기 힘든 곳에는 얼씬하지도 말고 편안한 장소에서 머무르자.',
	'낡은 것은 그 나름대로의 의미가 있으니 뒤쪽으로 물리는 건 삼가.',
	'조신하게 움직이는 건 무방하나 지체하면 한쪽도 얻어내지 못한다.',
	'신빙성이 없는 말에 일일이 대응하지 말고 하던 대로 그냥 행하자.',
	'말하지 않아도 알 수 있듯이 무언가 특별한 느낌이 전해지는 하루.',
	'오랜 기다림 끝에 얻는 것은 그만한 값어치가 있기 마련이 아닌가.',
	'이치에 맞지 않는다고 무턱대고 무시하고 내치는 것은 불합리하다.',
	'인정하기 힘든 부분이 있어도 일단은 수긍하고 들어가야 조용하다.',
	'속단하면 사단이 나는 법이니 인내심을 갖고 지켜보면서 판단하자.',
	'계속해서 느낌이 좋지 않을 때는 그냥 있지 말고 스스로 찾아가자.',
	'급한 마음에 움직이면 실수하니 평상시처럼 그냥 편안하게 지내자.'
]























