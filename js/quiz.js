var  dataQuiz
	,login = 'o_2i5b4gmien'
	,api_key = 'R_866372890d3c61b40dcf2f91c0f5ba8f'
	,answerUrl
	,idx
	,hash = window.location.hash
	,questionIdx
	,selectAnswer
	,perIdx
	,count = 5
	,intervalID
	,quiz
	,qid = getRandId()
	,answer1, answer2, answer3

window.addEventListener('DOMContentLoaded', function(){
	quiz = getRand(dataQuiz);
	
	getUrl(quiz.idx + '1' + qid, 1)
	getUrl(quiz.idx + '2' + qid, 2)
	getUrl(quiz.idx + '3' + qid, 3)

	if (hash != '') {
		// 정답보기
		idx = hash.replace('#', '');
		questionIdx = parseInt(idx.substr(0, 3), 10);
		selectAnswer = idx.substr(3, 1);
		perIdx = idx.substr(4);
		
		// 문제 보기
		document.querySelector('#result').style.display = 'block';
		document.querySelector('#qResult').innerHTML = selectAnswer + '번을 선택했습니다. 과연 정답은? (5초)'
		document.querySelector('#disQuestion').innerHTML = dataQuiz[questionIdx].que;
		document.querySelector('#disOne').innerHTML = dataQuiz[questionIdx].one;
		document.querySelector('#disTwo').innerHTML = dataQuiz[questionIdx].two;
		document.querySelector('#disThr').innerHTML = dataQuiz[questionIdx].thr;

		if (localStorage.getItem(perIdx) === 'true') {
			document.querySelector('#qResult').innerHTML = '이미 정답을 맞추셨습니다.';
			// 보기 클래스 변경
			if (dataQuiz[questionIdx].ans == '1') {
				document.querySelector('#disOne').className = 'select correct'
			} else if (dataQuiz[questionIdx].ans == '2') {
				document.querySelector('#disTwo').className = 'select correct'
			} else if (dataQuiz[questionIdx].ans == '3') {
				document.querySelector('#disThr').className = 'select correct'
			}

			return false;
		} else if(localStorage.getItem(perIdx) === 'false') {
			document.querySelector('#qResult').innerHTML = '이미 틀렸기 때문에 이 문제에는 기회가 없어요.ㅠ';
			return false;
		}

		// 카운터
		intervalID = setInterval(function(){
			count--
			document.querySelector('#qResult').innerHTML = selectAnswer + '번을 선택했습니다. 과연 정답은? ('+count+'초)';
			
			// 정답표시
			if (count == 0) {
				clearInterval(intervalID);
				
				// 보기 클래스 변경
				if (dataQuiz[questionIdx].ans == '1') {
					document.querySelector('#disOne').className = document.querySelector('#disOne').className  + ' correct';
				} else if (dataQuiz[questionIdx].ans == '2') {
					document.querySelector('#disTwo').className = document.querySelector('#disTwo').className  + ' correct';
				} else if (dataQuiz[questionIdx].ans == '3') {
					document.querySelector('#disThr').className = document.querySelector('#disThr').className  + ' correct';
				}

				// 안내멘트 변경
				if (dataQuiz[questionIdx].ans == selectAnswer) {
					// 정답
					document.querySelector('#qResult').innerHTML = '정답입니다.';
					localStorage.setItem(perIdx, 'true');
				} else {
					document.querySelector('#qResult').innerHTML = '오답입니다.';
					localStorage.setItem(perIdx, 'false');
				}
			}
		}, 1000)

		if (selectAnswer == '1') {
			document.querySelector('#disOne').className = 'select';
		} else if (selectAnswer == '2') {
			document.querySelector('#disTwo').className = 'select';
		} else if (selectAnswer == '3') {
			document.querySelector('#disThr').className = 'select';
		}
	}
}, false);



btnStory.addEventListener('click', executeKakaoStoryLink, false);
btnKakao.addEventListener('click', executeURLLink, false);

//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,urlMsg
		
	postMsg += '[1:100 기출문제]\n';
	postMsg += 'Q: ' + quiz.que + '\n\n'; 

	postMsg += '① ' + quiz.one + ' (선택: ' + answer1 + ')\n';
	postMsg += '② ' + quiz.two + ' (선택: ' + answer2 + ')\n';
	postMsg += '③ ' + quiz.thr + ' (선택: ' + answer3 + ')\n';
	//postMsg += '정답: ' + quiz.idx + quiz.ans + qid + '\n';

	console.log(postMsg)

	urlMsg = {
		title: '하루에 하나씩 외우는 명언',
		desc: result.ksp + ' (' + result.job + ')',
		imageurl: ['http://romeoh.github.io/kakaoStory/imgSay/' + result.pho ],
		type:'article'
	}
	

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '원데이 명언',
		urlinfo : JSON.stringify(urlMsg)
    });
}

function getRand(data){
	var  dataLength = data.length
		,ran = Math.floor(Math.random() * dataLength);
	return data[ran];
}

function getRandId(){
	return Math.floor(Math.random() * 99999999)
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "원데이 명언",
		url: "http://goo.gl/Vm86D",
		appid: "funnyApp",
		appver: "1.0",
		appname: "원데이 명언",
		type: "link"
	});
}


answerUrl = "http://romeoh.github.io/kakaoStory/html/relationCouple.html";

function getUrl(hash, idx) {
	var url = 'http://romeoh.github.io/kakaoStory/html/quiz.html#' + hash
	get_short_url(url, login, api_key, function(short_url) {
		if (idx == '1') {
			answer1 = short_url
		} else if (idx == '2') {
			answer2 = short_url
		} else if (idx == '3') {
			answer3 = short_url
		}
		console.log(short_url, idx)
		//return short_url;
	});
}

function get_short_url(long_url, login, api_key, func){
	$.getJSON(
		"http://api.bitly.com/v3/shorten?callback=?", 
		{ 
			"format": "json",
			"apiKey": api_key,
			"login": login,
			"longUrl": long_url
		},
		function(response){
			func(response.data.url);
		}
	);
}





dataQuiz= [

{
	'idx': '000',
	'day': '2008. 3. 11',
	'cou': '44',
	'que': '쪽의 의미가 다른 하나는?',
	'one': '쪽빛',
	'two': '쪽박',
	'thr': '쪽문',
	'ans': '2'
},
{
	'idx': '001',
	'day': '',
	'cou': '',
	'que': '동화 <해님과 달님>에서 썩은 동아줄을 타고 올라가던 호랑이가 떨어진 곳은?',
	'one': '보리밭',
	'two': '수수밭',
	'thr': '갈대밭',
	'ans': '2'
},
{
	'idx': '002',
	'day': '',
	'cou': '',
	'que': '봄동은 무엇의 종류인가?',
	'one': '콩나물',
	'two': '무',
	'thr': '배추',
	'ans': '3'
},
{
	'idx': '003',
	'day': '',
	'cou': '',
	'que': '도난당한 적이 없는 작품은?',
	'one': '미켈란젤로의 천지창조',
	'two': '세잔의 빨간 조끼를 입은 소년',
	'thr': '뭉크의 절규',
	'ans': '1'
},
{
	'idx': '004',
	'day': '',
	'cou': '',
	'que': '비틀즈의 노래 <헤이 주드(Hey Jude)>에서 주드는?',
	'one': '존 레논',
	'two': '존 레논의 부인',
	'thr': '존 레논의 아들',
	'ans': '3'
},
{
	'idx': '005',
	'day': '',
	'cou': '',
	'que': '파이(∏)는?',
	'one': '3.1415925...',
	'two': '3.1415926...',
	'thr': '3.1415927...',
	'ans': '2'
},
{
	'idx': '006',
	'day': '',
	'cou': '',
	'que': '<우디 앨런 영화, 크리스타 볼프, 예언자, 트로이전쟁>에서 연상되는 것은?',
	'one': '크로노스',
	'two': '카산드라',
	'thr': '미네르바',
	'ans': '2'
},
{
	'idx': '007',
	'day': '',
	'cou': '',
	'que': '<수수방관>에서 첫 번째 수의 뜻은?',
	'one': '수염',
	'two': '손',
	'thr': '소매',
	'ans': '3'
},
{
	'idx': '008',
	'day': '',
	'cou': '',
	'que': '못을 뽑는 도구는?',
	'one': '목도리',
	'two': '고도리',
	'thr': '장도리',
	'ans': '3'
},
{
	'idx': '009',
	'day': '',
	'cou': '',
	'que': '식물은?',
	'one': '하룻강아지',
	'two': '버들강아지',
	'thr': '복슬강아지',
	'ans': '2'
},
{
	'idx': '010',
	'day': '',
	'cou': '',
	'que': '동요 <나비야>에 나오지 않는 나비는?',
	'one': '흰나비',
	'two': '호랑나비',
	'thr': '노랑나비',
	'ans': '2'
},
{
	'idx': '011',
	'day': '',
	'cou': '',
	'que': '한,일 라이벌이 아닌 두 사람은?',
	'one': '김동성 - 안톤 오노',
	'two': '김연아 - 아사다 마오',
	'thr': '홍명보 - 이하라 마사미',
	'ans': '1'
},
{
	'idx': '012',
	'day': '',
	'cou': '',
	'que': '<국보 2호>가 있는 곳은?',
	'one': '국립중앙박물관',
	'two': '불국사',
	'thr': '탑골공원',
	'ans': '3'
},
{
	'idx': '013',
	'day': '',
	'cou': '',
	'que': '우리나라에 없는 것은?',
	'one': '동서울대학',
	'two': '서서울대학',
	'thr': '남서울대학교',
	'ans': '2'
},
{
	'idx': '014',
	'day': '',
	'cou': '',
	'que': '뱁새는?',
	'one': '흰눈썹붉은배지빠귀',
	'two': '붉은머리오목눈이',
	'thr': '흰죽지솔잣새',
	'ans': '2'
},
{
	'idx': '015',
	'day': '',
	'cou': '',
	'que': '가장 큰 그림은?',
	'one': '밀레의 <만종>',
	'two': '고흐의 <해바라기>',
	'thr': '마네의 <풀밭위의 점심식사>',
	'ans': '3'
},
{
	'idx': '016',
	'day': '',
	'cou': '',
	'que': '<석봉아, 나는 (이것을 어떻게 할)테니 너는 글을 쓰거라>에서 괄호에 들어 갈 말은?',
	'one': '먹을 갈',
	'two': '옷을 기울',
	'thr': '떡을 썰',
	'ans': '3'
},
{
	'idx': '017',
	'day': '',
	'cou': '',
	'que': '1에서 10까지 수를 모두 더했을 때 끝자리 수는?',
	'one': '0',
	'two': '5',
	'thr': '9',
	'ans': '2'
},
{
	'idx': '018',
	'day': '',
	'cou': '',
	'que': '일반적으로 맹장이 위치한 자리는? ',
	'one': '오른쪽 아랫배',
	'two': '오른쪽 윗배',
	'thr': '왼쪽 아랫배 ',
	'ans': '1'
},
{
	'idx': '019',
	'day': '',
	'cou': '',
	'que': '저작권법에 의해 보호되지 않는 것은? ',
	'one': '초등학생이 쓴 일기',
	'two': '취재기자의 기사 ',
	'thr': '국가기관이 만든 법령',
	'ans': '3'
},
{
	'idx': '020',
	'day': '',
	'cou': '',
	'que': '군가 <멋진 사나이> 중 <싸움에는 천하무적, (이것)~~>에서 이것은? ',
	'one': '사랑은 뜨겁게',
	'two': '명예는 드높게',
	'thr': '삽질은 드세게 ',
	'ans': '1'
},
{
	'idx': '021',
	'day': '',
	'cou': '',
	'que': '<서유기>에서 삼장법사 일행이 지나간 사막은? ',
	'one': '고비사막',
	'two': '타르사막',
	'thr': '타클라마칸사막 ',
	'ans': '3'
},
{
	'idx': '022',
	'day': '',
	'cou': '',
	'que': '미국의 전설적인 듀오 <사이먼&가펑클>의 데뷔 당시 이름은?',
	'one': '톰&제리',
	'two': '미키&도널드',
	'thr': '찰리&스누피',
	'ans': '1'
},
{
	'idx': '023',
	'day': '',
	'cou': '',
	'que': '제2의 노벨상이라 불리며 민주주의와 인권보호를 위해 힘써온 사람이나 단체에 수여하는 상은? ',
	'one': '국제인권상',
	'two': '자유인간상',
	'thr': '바른생활상 ',
	'ans': '3'
},
{
	'idx': '024',
	'day': '',
	'cou': '',
	'que': '실제 부모 자식관계가 아닌 것은?',
	'one': '주호성 - 장나라',
	'two': '김용건 - 하정우',
	'thr': '최불암 - 유인촌 ',
	'ans': '3'
},
{
	'idx': '025',
	'day': '',
	'cou': '',
	'que': '가장 진한 것은?',
	'one': '2B연필',
	'two': '4B연필',
	'thr': 'HB연필 ',
	'ans': '2'
},
{
	'idx': '026',
	'day': '',
	'cou': '',
	'que': '문화체육관광부(문화부, 문화관광부) 장관이 아니었던 사람은?',
	'one': '이어령',
	'two': '손숙',
	'thr': '김한길 ',
	'ans': '2'
},
{
	'idx': '027',
	'day': '',
	'cou': '',
	'que': '나훈아의 잡초 중 <(이것)이라도 있으면은 님 찾아갈텐데 (이것)이라도 있으면은 님 부를텐데~~>에서 이것은?',
	'one': '돈 - 집',
	'two': '다리 - 입',
	'thr': '발 - 손',
	'ans': '3'
},
{
	'idx': '028',
	'day': '',
	'cou': '',
	'que': '세계 최초의 인공위성인 스푸트니크 1호는?',
	'one': '대기권에서 소멸했다',
	'two': '러시아에서 회수했다',
	'thr': '아직도 돌고 있다',
	'ans': '1'
},
{
	'idx': '029',
	'day': '',
	'cou': '',
	'que': '<남대문>이라는 상표로 처음 출원된 제품은?',
	'one': '성냥',
	'two': '화투',
	'thr': '메리야스',
	'ans': '2'
},
{
	'idx': '030',
	'day': '',
	'cou': '',
	'que': '축구선수 펠레는?',
	'one': '에드손 아란테스 도 나스시멘토',
	'two': '히카르도 아이잭슨 산토스 라이데',
	'thr': '루이스 카를로스 알메이다 다 쿤하',
	'ans': '1'
},
{
	'idx': '031',
	'day': '',
	'cou': '',
	'que': '빙부상은 누구의 상(喪)인가? ',
	'one': '장인어른',
	'two': '할아버지',
	'thr': '큰아버지 ',
	'ans': '1'
},
{
	'idx': '032',
	'day': '',
	'cou': '',
	'que': '<당구, 클림트, 록그룹, 시네마 천국>과 공통적으로 관계된 것은? ',
	'one': '터치(Touch)',
	'two': '허그(Hug)',
	'thr': '키스(Kiss) ',
	'ans': '3'
},
{
	'idx': '033',
	'day': '',
	'cou': '',
	'que': '김춘수의 시 <나는 시방 위험한 이것이다. 나의 손이 닿으면 너는 미지의 까마득한 어둠이 된다>에서 이것은?',
	'one': '바람',
	'two': '여인',
	'thr': '짐승 ',
	'ans': '3'
},
{
	'idx': '034',
	'day': '',
	'cou': '',
	'que': '없는 것은? ',
	'one': '삼척의 황영조 기념공원',
	'two': '공주의 박찬호 동상',
	'thr': '수원의 박지성 도로',
	'ans': '2'
},
{
	'idx': '035',
	'day': '',
	'cou': '',
	'que': 'TV 홈쇼핑에서 판매할 수 있는 것은? ',
	'one': '기저귀',
	'two': '젖병',
	'thr': '조제분유',
	'ans': '1'
},
{
	'idx': '036',
	'day': '',
	'cou': '',
	'que': '<만, 억, 조, 경, 해> 다음은?',
	'one': '극',
	'two': '자',
	'thr': '정',
	'ans': '2'
},
{
	'idx': '037',
	'day': '',
	'cou': '',
	'que': '기차 <새마을호>의 원래 이름은? ',
	'one': '관광호',
	'two': '태극호',
	'thr': '재건호 ',
	'ans': '1'
},
{
	'idx': '038',
	'day': '',
	'cou': '',
	'que': '동요 <사과같은 내 얼굴>에서 반짝이지 않는 것은? ',
	'one': '입',
	'two': '코',
	'thr': '귀',
	'ans': '3'
},
{
	'idx': '039',
	'day': '',
	'cou': '',
	'que': '백결선생이 떡방아 찧는 소리를 연주해 부인을 달래준 악기는?',
	'one': '거문고',
	'two': '가야금',
	'thr': '장구',
	'ans': '1'
},
{
	'idx': '040',
	'day': '',
	'cou': '',
	'que': '유로화 지폐 뒷면에 공통적으로 그려져 있는 그림은? ',
	'one': '다리',
	'two': '창문',
	'thr': '기둥',
	'ans': '1'
},
{
	'idx': '041',
	'day': '',
	'cou': '',
	'que': '전압의 단위는? ',
	'one': 'A',
	'two': 'C',
	'thr': 'V',
	'ans': '3'
},
{
	'idx': '042',
	'day': '',
	'cou': '',
	'que': '<삭신이 쑤시다>에서 삭신의 뜻은? ',
	'one': '몸의 근육과 뼈마디',
	'two': '어깨와 허리',
	'thr': '오장육부 ',
	'ans': '1'
},
{
	'idx': '043',
	'day': '',
	'cou': '',
	'que': '송창식의 노래 <우리는 소리 없는 침묵으로도 말할 수 있는 우리는~>에서 우리는 누구인가? ',
	'one': '연인',
	'two': '부부',
	'thr': '친구 ',
	'ans': '1'
},
{
	'idx': '044',
	'day': '',
	'cou': '',
	'que': '없는 것은? ',
	'one': '봄처녀나비',
	'two': '도시처녀나비',
	'thr': '산골처녀나비',
	'ans': '3'
},
{
	'idx': '045',
	'day': '',
	'cou': '',
	'que': '지명(地名)이 들어가지 않은 것은? ',
	'one': '조생감귤',
	'two': '영광굴비',
	'thr': '이동갈비',
	'ans': '1'
},
{
	'idx': '046',
	'day': '',
	'cou': '',
	'que': '김상용의 시 <남으로 창을 내겠소> 중 <강냉이가 익걸랑 함께 와 자셔도 좋소, 왜 사냐<이것>지요>에서 이것은? ',
	'one': '(울)지요',
	'two': '(웃)지요',
	'thr': '(먹)지요 ',
	'ans': '2'
},
{
	'idx': '047',
	'day': '',
	'cou': '',
	'que': '나무에 달리는 열매는? ',
	'one': '멜론',
	'two': '수박',
	'thr': '포도',
	'ans': '3'
},
{
	'idx': '048',
	'day': '',
	'cou': '',
	'que': '<혼인을 하고 나서 친구들에게 한턱내는 일>을 뜻하는 우리말은? ',
	'one': '살풀이',
	'two': '댕기풀이 ',
	'thr': '저고리풀이 ',
	'ans': '2'
},
{
	'idx': '049',
	'day': '',
	'cou': '',
	'que': '인도 뭄바이의 영화산업을 할리우드에 빗대 발리우드라고 한다. 그렇다면 <놀리우드>는 어느나라와 할리우드의 합성어인가? ',
	'one': '노르웨이',
	'two': '뉴질랜드',
	'thr': '나이지리아',
	'ans': '3'
},
{
	'idx': '050',
	'day': '',
	'cou': '',
	'que': '언론단체 <관훈클럽>에서 관훈이란? ',
	'one': '동네이름',
	'two': '식당이름',
	'thr': '기자이름',
	'ans': '1'
},
{
	'idx': '051',
	'day': '',
	'cou': '',
	'que': '<흥정은 붙이고 이것은 말리랬다>에서 이것은? ',
	'one': '빨래',
	'two': '고추',
	'thr': '싸움 ',
	'ans': '3'
},
{
	'idx': '052',
	'day': '',
	'cou': '',
	'que': '세계랭킹 10위권에 든 적이 없는 스포츠 스타는? ',
	'one': '김연아',
	'two': '이형택',
	'thr': '최경주',
	'ans': '2'
},
{
	'idx': '053',
	'day': '',
	'cou': '',
	'que': '천상병의 시 <나 하늘로 돌아가리라 아름다운 이 세상 <이것> 끝내는 날 가서 아름다웠다고 말하리라>에서 이것은? ',
	'one': '여정',
	'two': '연극',
	'thr': '소풍',
	'ans': '3'
},
{
	'idx': '054',
	'day': '',
	'cou': '',
	'que': '최근 숭례문 복원용 목재로 거론된 살아서 1000년, 죽어서 1000년을 간다고 하는 소나무는? ',
	'one': '한라송',
	'two': '금강송',
	'thr': '태백송',
	'ans': '2'
},
{
	'idx': '055',
	'day': '',
	'cou': '',
	'que': '홈쇼핑, 대형마트, 신용카드 회사의 미끼상품이나 혜택만을 이용하는 얌체소비자를 일컫는 말은?',
	'one': '체리 피커',
	'two': '오렌지 피커',
	'thr': '그레이프 피커',
	'ans': '1'
},
{
	'idx': '056',
	'day': '',
	'cou': '',
	'que': '배우 장미희는 이 영화로 대종상 여우주연상을 받고 <참 아름다운 밤이에요>라는 수상소감을 발표했다. 이 영화는? ',
	'one': '깊고 푸른 밤',
	'two': '애니깽',
	'thr': '사의 찬미',
	'ans': '3'
},
{
	'idx': '057',
	'day': '',
	'cou': '',
	'que': '멍텅구리가 아닌 것은?',
	'one': '물고기',
	'two': '통통배',
	'thr': '되들이 병',
	'ans': '2'
},
{
	'idx': '058',
	'day': '',
	'cou': '',
	'que': '아버지와 아들의 관계가 아닌 두 사람은? ',
	'one': '황순원과 황동규',
	'two': '박목월과 박동규',
	'thr': '조지훈과 조동규',
	'ans': '3'
}

]
































