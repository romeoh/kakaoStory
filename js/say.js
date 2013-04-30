var  dataSay
	,hash = window.location.hash
	,idx

window.addEventListener('DOMContentLoaded', function(){
	if (hash != '') {
		// 해석보기
		document.querySelector('#result').style.display = 'block';
		idx = hash.replace('#', '')
		document.querySelector('#word').innerHTML = dataSay[idx].eng
		document.querySelector('#korean').innerHTML = dataSay[idx].kor
		document.querySelector('#speaker').innerHTML = dataSay[idx].esp + ' ' + dataSay[idx].ksp + ' (' + dataSay[idx].job + ')'
	}	
}, false);



btnStory.addEventListener('click', executeKakaoStoryLink, false);
btnKakao.addEventListener('click', executeURLLink, false);

//  카카오 스토리
function executeKakaoStoryLink(){
	var  result = getRand(dataSay)
		,postMsg = ''
		,urlMsg

	postMsg += result.eng + '\n';
	postMsg += result.esp + ' [' + result.job + ']\n\n'
	postMsg += '해석보기: ' + result.url;

	urlMsg = {
		title: '1일 1명언',
		desc: result.ksp,
		imageurl: ['http://romeoh.github.io/kakaoStory/imgSay/' + result.pho ],
		type:'article'
	}
	

	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '나와 스캔들날 연예인',
		urlinfo : JSON.stringify(urlMsg)
    });
}

function getRand(data){
	var  dataLength = data.length
		,ran = Math.floor(Math.random() * dataLength);
	return data[ran];
}


// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "커피한잔 하실래요?",
		url: "http://goo.gl/FSBT3",
		appid: "funnyApp",
		appver: "1.0",
		appname: "연예인과 커피한잔",
		type: "link"
	});
}





dataSay= [

{
	'idx': '001',
	'eng': 'To marry is to halve your rights and double your duties. ',
	'kor': '결혼을 한다는 것은 당신의 권리를 반감시키고 의무를 배가시키는 것이다.',
	'esp': 'Arthur Schopenhaur',
	'ksp': '아더 쇼펜하우어',
	'job': '독일 철학자, 1788-1860',
	'pho': 's01.jpg',
	'url': 'http://goo.gl/ksCrq'
},

{
	'idx': '002',
	'eng': 'He makes no friend who never made a foe.',
	'kor': '원수를 만들어보지 않은 사람은 친구도 사귀지 않는다.',
	'esp': 'Alfred, Lord Tennyson',
	'ksp': '알프레드 테니슨 경',
	'job': '英시인, 1809-92',
	'pho': 's02.jpg',
	'url': 'http://goo.gl/MKxyO'
},

{
	'idx': '003',
	'eng': 'Common sense is the collection of prejudices acquired by age 18.',
	'kor': '상식은 18세 때까지 후천적으로 얻은 편견의 집합이다.',
	'esp': 'Albert Einstein',
	'ksp': '앨버트 아인슈타인',
	'job': '미국 물리학자, 1879-1955',
	'pho': 's03.jpg',
	'url': 'http://goo.gl/UlT20'
},

{
	'idx': '004',
	'eng': 'The unleashed power of the atom has changed everything save our modes of thinking, and we thus drift toward unparalleled catastrophes.',
	'kor': '고삐풀린 원자의 힘은 우리의 사고방식을 제외한 모든 것을 바꾸어놓았으며 우리는 미증유의 재난을 향해 표류하고 있다.',
	'esp': 'Albert Einstein',
	'ksp': '앨버트 아인슈타인',
	'job': '美물리학자, 1879-1955',
	'pho': 's03.jpg',
	'url': 'http://goo.gl/eDFMj'
},

{
	'idx': '005',
	'eng': 'Nothing is more despicable than respect based on fear.',
	'kor': '두려움 때문에 갖는 존경심만큼 비열한 것은 없다.',
	'esp': 'Albert Camus',
	'ksp': '알베르 카뮈',
	'job': '프랑스 작가, 1913-1960',
	'pho': 's05.jpg',
	'url': 'http://goo.gl/4lQM6'
},

{
	'idx': '006',
	'eng': 'Television has proved that people will look at anything rather than each other. ',
	'kor': 'TV는 사람들이 서로 얼굴을 마주보느니 기꺼이 다른 것을 보려 한다는 것을 입증했다.',
	'esp': 'Ann Landers',
	'ksp': '앤 랜더스',
	'job': '미국 칼럼니스트, 1918-',
	'pho': 's06.jpg',
	'url': 'http://goo.gl/guxKq'
},

{
	'idx': '007',
	'eng': 'It is only with the heart that one can see rightly. what is essential is invisible to the eye.',
	'kor': '사람은 오로지 가슴으로만 올바로 볼 수 있다. 본질적인 것은 눈에 보이지 않는다.',
	'esp': 'Antoine de Saint-Exupery',
	'ksp': '앙뜨완느 드 쌩떽쥐베리',
	'job': '프랑스 작가/비행사, 1900-44',
	'pho': 's07.jpg',
	'url': 'http://goo.gl/mVVLJ'
},

{
	'idx': '008',
	'eng': 'Love does not consist in gazing at each other, but in looking together in the same direction.',
	'kor': '사랑은 두 사람이 마주 쳐다보는 것이 아니라 함께 같은 방향을 바라보는 것이다.',
	'esp': 'Antoine de Saint-Exupery',
	'ksp': '앙뜨완느 드 쌩떽쥐베리',
	'job': '프랑스 작가/비행가, 1900-44',
	'pho': 's07.jpg',
	'url': 'http://goo.gl/z6xwi'
},

{
	'idx': '009',
	'eng': 'Business? It\'s quite simple. It\'s other people\'s money.',
	'kor': '사업? 그건 아주 간단하다. 다른 사람들의 돈이다.',
	'esp': 'Alexandre Dumas',
	'ksp': '알렉산드르 듀마',
	'job': '',
	'pho': 's09.jpg',
	'url': 'http://goo.gl/n1LRz'
},

{
	'idx': '010',
	'eng': 'I would as soon leave my son a curse as the almighty dollar.',
	'kor': '아들에게 돈을 물려주는 것은 저주를 하는 것이나 다름없다.',
	'esp': 'Andrew Carnegie',
	'ksp': '앤드류 카네기',
	'job': '미국 작가, 1835-1919',
	'pho': 's10.jpg',
	'url': 'http://goo.gl/oSyDa'
},

{
	'idx': '011',
	'eng': 'A great writer is, so to speak, a second government in his country. And for that reason no regime has ever loved great writers,only minor ones.',
	'kor': '위대한 작가는 말하자면 그의 나라에서는 제2의 정부이다. 그렇기 때문에 어떤 정권도 별볼일 없는 작가라면 몰라도 위대한 작가를 좋아한 적이 없다.',
	'esp': 'Alexander Solzhenitsyn',
	'ksp': '알렉산더 솔제니친',
	'job': '작가, 1918-',
	'pho': 's11.jpg',
	'url': 'http://goo.gl/M3tS1'
},

{
	'idx': '012',
	'eng': 'You don\'t live in a world all alone. Your brothers are here too.',
	'kor': '당신은 이 세상에서 혼자 사는 것이 아닙니다. 당신의 형제들도 있습니다. ',
	'esp': 'Albert Schweitzer',
	'ksp': '알버르트 슈바이처',
	'job': '의사 선교사, 1875-1965',
	'pho': 's12.jpg',
	'url': 'http://goo.gl/lLW3a'
},

{
	'idx': '013',
	'eng': 'A hungry man is not a free man.',
	'kor': '배고픈 사람은 자유로운 사람이 아니다.',
	'esp': 'Adlai Stevenson',
	'ksp': '아들라이 스티븐슨',
	'job': '미국 정치가, 1900-1965',
	'pho': 's13.jpg',
	'url': 'http://goo.gl/e6sqO'
},

{
	'idx': '014',
	'eng': 'To know is nothing at all; to imagine is everything.',
	'kor': '안다는 것은 전혀 중요하지 않다; 상상하는 것이 가장 중요하다.',
	'esp': 'Anatole France',
	'ksp': '아나톨 프랑스',
	'job': '佛작가, 1844-1924',
	'pho': 's14.jpg',
	'url': 'http://goo.gl/aRNTT'
},

{
	'idx': '015',
	'eng': 'Truth is generally the best vindication against slander.',
	'kor': '일반적으로 진실이 중상모략에 대한 최선의 해명이다.',
	'esp': 'Abraham Lincoln',
	'ksp': '에이브러햄 링컨',
	'job': '미국 대통령, 1809-1865',
	'pho': 's15.jpg',
	'url': 'http://goo.gl/SzINf'
},

{
	'idx': '016',
	'eng': 'The computer is only a fast idiot. it has noit cannot originate action. It is, and will remain, only a tool of man.',
	'kor': '컴퓨터는 민첩한 바보이다, 상상력도 없고 스스로 행동할 수도 없다. 현재에도 미래에도 컴퓨터는 단지 인간의 도구일 뿐이다.',
	'esp': 'American Library Association\'s 1964 statement about the Univac',
	'ksp': '미국도서관협회의 Univac[전자계산기 상품명]에 관한 1964년도 성명서',
	'job': '미국도서관협회의, 1964년',
	'pho': 's16.jpg',
	'url': 'http://goo.gl/KKsFv'
},

{
	'idx': '017',
	'eng': 'It is my intention to present - through the medium of photography - intuitive observations of the natural world which may have meaning to the spectators.',
	'kor': '내가 의도하는 것은 관객에게 의미가 있을 것 같은 자연에 대한 직관적인 관찰을 사진이라는 매체를 통해 보여주는 것이다.',
	'esp': 'Ansel Adams',
	'ksp': '앤셀 애덤스',
	'job': '미국 풍경사진작가, 1902-1984',
	'pho': 's17.jpg',
	'url': 'http://goo.gl/8vuKF'
},

{
	'idx': '018',
	'eng': 'America is a large, friendly dog in a very small room. Every time it wags its tail it knocks over a chair.',
	'kor': '미국은 아주 작은 방 속에 있는 크고 다정한 개 같아서 꼬리를 흔들 때마다 의자를 넘어뜨린다.',
	'esp': 'Arnold Toynbee',
	'ksp': '아놀드 토인비',
	'job': '영국史家, 1889-1975',
	'pho': 's18.jpg',
	'url': 'http://goo.gl/RMbnv'
},

{
	'idx': '019',
	'eng': 'The secret of business is to know something that nobody else knows. ',
	'kor': '사업의 비결은 다른 사람들은 아무도 모르고 있는 무엇인가를 아는 것이다.',
	'esp': 'Aristotle Onassis',
	'ksp': '아리스토틀 오나시스',
	'job': '그리스 해운업자, 1906-1975',
	'pho': 's19.jpg',
	'url': 'http://goo.gl/iFwnW'
},

{
	'idx': '020',
	'eng': 'One man with courage makes a majority.',
	'kor': '용기있는 한 사람이 다수의 힘을 갖느다.',
	'esp': 'Andrew Jackson',
	'ksp': '앤드류 잭슨',
	'job': '美대통령, 1767-1845',
	'pho': 's20.jpg',
	'url': 'http://goo.gl/r6Elo'
},

{
	'idx': '021',
	'eng': 'Television has a real problem. They have no page two.',
	'kor': '텔레비전은 한가지 심각한 문제를 안고 있다. 바로 두번째 페이지가 없다는 것이다.',
	'esp': 'Art Buchwald',
	'ksp': '아트 버크윌드',
	'job': '美칼럼니스트, 1925-',
	'pho': 's21.jpg',
	'url': 'http://goo.gl/FFCMN'
},

{
	'idx': '022',
	'eng': 'Man is born to live, not to prepare for life. Life itself, the phenomenon of life, the gift of life,is so breathtakingly serious!',
	'kor': '사람은 살려고 태어나는 것이지 인생을 준비하려고 태어나는 것은 아니다. 인생 그 자체, 인생의 현상, 인생이 가져다 주는 선물은 숨이 막히도록 진지하다!',
	'esp': 'Boris Pasternak',
	'ksp': '보리스 파스테르나크',
	'job': '러시아 시인/소설가, 1890-1960',
	'pho': 's22.jpg',
	'url': 'http://goo.gl/k6Gi2'
},

{
	'idx': '023',
	'eng': 'Like all great travellers, I have seen more than I remember, and remember more than I have seen.',
	'kor': '훌륭한 여행가들이 흔히 그렇듯이 나는 내가 기억하는 것보다 많은 것을 보았고 또한 본 것보다 많은 것을 기억한다.',
	'esp': 'Benjamin Disraeli',
	'ksp': '벤자민 디즈렐리',
	'job': '영국 정치인/작가, 1804-81',
	'pho': 's23.jpg',
	'url': 'http://goo.gl/YLk6V'
},

{
	'idx': '024',
	'eng': 'The magic of first love is our ignorance that it can ever end.',
	'kor': '첫사랑이 신비로운 것은 우리가 그것이 끝날 수 있다는 것을 모르기 때문이다.',
	'esp': 'Benjamin Disraeli',
	'ksp': '벤자민 디즈렐리',
	'job': '영국 정치인/작가, 1804-81',
	'pho': 's23.jpg',
	'url': 'http://goo.gl/4oDi7'
},

{
	'idx': '025',
	'eng': 'When men are employed, they are best contented.',
	'kor': '사람들은 고용되었을 때 최상의 만족을 느낀다.',
	'esp': 'Benjamin Franklin',
	'ksp': '벤자민 프랭크린',
	'job': '美정치가/철학자, 1706-1790',
	'pho': 's25.jpg',
	'url': 'http://goo.gl/5bnsC'
},

{
	'idx': '026',
	'eng': 'When she finally stopped conforming to the conventional picture of femininity she finally began to enjoy being a woman. ',
	'kor': '전통적인 여성의 모습대로 살지 않게 되었을 때 그녀는 비로소 자신이 여자임을 즐겁게 생각할 수 있게 되었다.',
	'esp': 'Betty Friedan',
	'ksp': '베티 프리단',
	'job': '여권운동가이자 작가, 1921-',
	'pho': 's26.jpg',
	'url': 'http://goo.gl/RBQhX'
},

{
	'idx': '027',
	'eng': 'Anything you\'re good at contributes to happiness.',
	'kor': '당신이 잘 하는 일이라면 무엇이나 행복에 도움이 된다.',
	'esp': 'Bertrand Russell',
	'ksp': '버트랜드 러셀',
	'job': '英 철학자, 1872-1970',
	'pho': 's27.jpg',
	'url': 'http://goo.gl/oHR94'
},

{
	'idx': '028',
	'eng': 'Accurst be he that first invented war.',
	'kor': '전쟁을 처음 생각해낸 자는 저주를 받을지어다.',
	'esp': 'Christopher Marlowe',
	'ksp': '크리스토퍼 말로우',
	'job': '영국 시인/극작가, 1564-1593',
	'pho': 's28.jpg',
	'url': 'http://goo.gl/2TiD1'
},

{
	'idx': '029',
	'eng': 'Since a politician never believes what he says, he is surprised when others believe him.',
	'kor': '정치가는 자신이 한 말을 믿지 않기 때문에, 다른 사람들이 자신을 믿으면 놀랜다.',
	'esp': 'Charles de Gaulle',
	'ksp': '샤를르 드골',
	'job': '프랑스 정치가, 1890-1970',
	'pho': 's29.jpg',
	'url': 'http://goo.gl/7bGnn'
},

{
	'idx': '030',
	'eng': 'A woman means by unselfishness chiefly taking trouble for others. a man means not giving trouble to others. Thus each sex regards the other as basically selfish.',
	'kor': '이타적이라는 말을 할 때 여자는 주로 남을 대신해 고생하는 것을 뜻하며 남자는 남에게 고통을 주지 않는 것을 뜻한다. 그래서 각기 서로 근본적으로 이기적이라 생각한다.',
	'esp': 'C.S. Lewis',
	'ksp': 'C.S. 루이스',
	'job': '영국 작가, 1898-1963',
	'pho': 's30.jpg',
	'url': 'http://goo.gl/QxkAY'
},

{
	'idx': '031',
	'eng': 'Freedom is a system based on courage.',
	'kor': '자유는 용기에 근거를 둔 제도이다.',
	'esp': 'Charles Peguy',
	'ksp': '샤를르 페기',
	'job': '佛사상가/시인, 1873-1914',
	'pho': 's31.jpg',
	'url': 'http://goo.gl/opnNt'
},

{
	'idx': '032',
	'eng': 'Happiness is a warm puppy.',
	'kor': '행복이란 포근한 강아지 한마리다.',
	'esp': 'Charles M. Schulz',
	'ksp': '찰스 M. 슐츠',
	'job': '미국 만화가, 1922-',
	'pho': 's32.jpg',
	'url': 'http://goo.gl/FWzKr'
},

{
	'idx': '033',
	'eng': 'If a man takes no thought about what is distant, he will find sorrow near at hand.',
	'kor': '사람이 먼 일을 생각하지 않으면 바로 앞에 슬픔이 닥치는 법이다.',
	'esp': 'Confucius',
	'ksp': '공자',
	'job': '중국 교육자, 551 B.C.-479 B.C.',
	'pho': 's33.jpg',
	'url': 'http://goo.gl/cKV2Y'
},

{
	'idx': '034',
	'eng': 'We are an intelligent species and the use of our intelligence quite properly gives us pleasure. In this respect the brain is like a muscle. When it is in use we feel very good. Understanding is joyous.',
	'kor': '사람은 지성적 존재이므로 당연히 지성을 사용할 때 기쁨을 느낀다. 이런 의미에서 두뇌는 근육과 같은 성격을 갖는다. 두뇌를 사용할 때 우리는 기분이 매우 좋다. 이해한다는 것은 즐거운 일이다.',
	'esp': 'Carl Sagan',
	'ksp': '칼 세이건',
	'job': '',
	'pho': 's34.jpg',
	'url': 'http://goo.gl/Hftc9'
},

{
	'idx': '035',
	'eng': 'Man with all his noble qualities...with his godlike intellect which has penetrated into the movements and constitution of the solar system...still bears in his bodily frame the indelible stamp of his lowly origin.',
	'kor': '인간은 고상한 품격을 갖고 신과 같은 지성으로 태양계의 움직임과 구성을 간파하였음에도 불구하고 그 몸 속에는 아직도 지울 수 없는 미천한 근본의 흔적을 지니고 있다.',
	'esp': 'Charles Darwin',
	'ksp': '찰스 다윈',
	'job': '영국의 박물학자, 1809-1882',
	'pho': 's35.jpg',
	'url': 'http://goo.gl/oG5dh'
},

{
	'idx': '036',
	'eng': 'You can learn a little from victory; you can learn everything from defeat.',
	'kor': '승리하면 조금 배울 수 있고 패배하면 모든 것을 배울 수 있다.',
	'esp': 'Christy Mathewson',
	'ksp': '크리스티 매튜슨',
	'job': '미국 야구스타, 1880-1925',
	'pho': 's36.jpg',
	'url': 'http://goo.gl/DHX9W'
},

{
	'idx': '037',
	'eng': 'In the country of the blind, the one-eyed man is king.',
	'kor': '맹인들의 나라에서는 애꾸가 왕이다.',
	'esp': 'Desiderius Erasmus',
	'ksp': '데시데리우스 에라스무스',
	'job': '네덜란드 인문주의자, 1466-1536',
	'pho': 's37.jpg',
	'url': 'http://goo.gl/5t7iA'
},

{
	'idx': '038',
	'eng': 'Old soldiers never die. They just fade away.',
	'kor': '노병은 죽지 않는다. 다만 사라질 뿐이다.',
	'esp': 'Douglas MacArthur',
	'ksp': '더글라스 맥아더',
	'job': '미국 육군 원수, 1880-1964',
	'pho': 's38.jpg',
	'url': 'http://goo.gl/GRgm4'
},

{
	'idx': '039',
	'eng': 'If you want to be happy for a year, plant a garden; if you wnat to be happy for life, plant a tree.',
	'kor': '1년간의 행복을 위해서는 정원을 가꾸고, 평생의 행복을 원한다면 나무를 심어라.',
	'esp': 'English Proverb',
	'ksp': '영국 속담',
	'job': '',
	'pho': 's39.jpg',
	'url': 'http://goo.gl/KKc8o'
},

{
	'idx': '040',
	'eng': 'I was never less alone than when by myself.',
	'kor': '나는 혼자 있을 때 가장 외롭지 않았다.',
	'esp': 'Edward Gibbon',
	'ksp': '에드워드 기본',
	'job': '영국 역사가, 1737-94',
	'pho': 's40.jpg',
	'url': 'http://goo.gl/CVpLL'
},

{
	'idx': '041',
	'eng': 'The winds and waves are always on the side of the ablest navigators.',
	'kor': '바람과 파도는 항상 가장 유능한 항해자의 편에 선다.',
	'esp': 'Edward Gibbon',
	'ksp': '에드워드 기본',
	'job': '영국 역사가, 1737-94',
	'pho': 's40.jpg',
	'url': 'http://goo.gl/jDPMH'
},

{
	'idx': '042',
	'eng': 'Only the person who has faith in himself is able to be faithful to others.',
	'kor': '스스로를 신뢰하는 사람만이 다른 사람들에게 성실할 수 있다.',
	'esp': 'Erich Fromm',
	'ksp': '에릭 프롬',
	'job': '미국 정신분석학자, 1900-1980',
	'pho': 's42.jpg',
	'url': 'http://goo.gl/1DvI8'
},

{
	'idx': '043',
	'eng': 'There are two ways of spreading light:to be the candle or the mirror that reflects it.',
	'kor': '빛을 퍼뜨릴 수 있는 두 가지 방법이 있다. 촛불이 되거나 또는 그것을 비추는 거울이 되는 것이다.',
	'esp': 'Edith Wharton',
	'ksp': '이디스 워튼',
	'job': '미국 작가, 1862-1937',
	'pho': 's43.jpg',
	'url': 'http://goo.gl/x65ZF'
},

{
	'idx': '044',
	'eng': 'We hold these truths to be self-evident, that all men and women are created equal.',
	'kor': '우리는 모든 남자와 여자가 평등하게 태어났음을 자명한 진실로 생각한다.',
	'esp': 'Elizabeth Cady Stanton',
	'ksp': '엘리자베스 케이디 스탠튼',
	'job': '미국 혁명가, 1815-1902',
	'pho': 's44.jpg',
	'url': 'http://goo.gl/zOz34'
},

{
	'idx': '045',
	'eng': 'Two cheers for democracy: one because it admit variety and two because it permits criticism. Two cheers are quite enough: There is no occasion to give three.',
	'kor': '민주주의를 찬양하는 두 가지 이유: 첫째는 다양성을 인정하고 둘째는 비판을 허용하기 때문이다. 두 번의 찬양이면 매우 족하며 세 번의 찬양은 필요치 않다.',
	'esp': 'E.M. Foster',
	'ksp': 'E.M. 포스터',
	'job': '작가, 1879-1970',
	'pho': 's45.jpg',
	'url': 'http://goo.gl/L8QRI'
},

{
	'idx': '046',
	'eng': 'Democracy is the recurrent suspicion that more than half of the people are right more than half of the time.',
	'kor': '민주주의는 반수 이상의 사람들이 반수 이상의 경우에 옳다는 데 대해 반복되는 의혹이다.',
	'esp': 'E.B. White',
	'ksp': 'E.B. 화이트',
	'job': '미국 작가, 1899-1985',
	'pho': 's46.jpg',
	'url': 'http://goo.gl/B7iDw'
},

{
	'idx': '047',
	'eng': 'Life improves slowly and goes wrong fast, and only catastrophe is clearly visible.',
	'kor': '삶은 천천히 나아지고 빨리 나빠지며, 큰 재난만 분명히 눈에 보인다.',
	'esp': 'Edward Teller',
	'ksp': '에드워드 텔러',
	'job': '물리학자, 1908-',
	'pho': 's47.jpg',
	'url': 'http://goo.gl/BYzfJ'
},

{
	'idx': '048',
	'eng': 'Since when was genius found respectable?',
	'kor': '언제부터 천재가 존경받았는가?',
	'esp': 'Elizabeth Barrett Browning',
	'ksp': '엘리자베스 바렛 브라우닝',
	'job': '영국시인, 1806-1861',
	'pho': 's48.jpg',
	'url': 'http://goo.gl/Gh6ho'
},

{
	'idx': '049',
	'eng': 'My own art is a negation of society, an affirmation of the individual, outside all rules and demands of society.',
	'kor': '내 예술은 사회의 부정, 즉 사회의 모든 규칙과 요구 바깥에 존재하는 개인의 확인이다.',
	'esp': 'Emile Zola',
	'ksp': '에밀 졸라',
	'job': '佛작가, 1840-1902',
	'pho': 's49.jpg',
	'url': 'http://goo.gl/yjDHV'
},

{
	'idx': '050',
	'eng': 'First you take a drink, then the drink takes a drink, then the drink takes you.',
	'kor': '처음에는 네가 술을 마시고, 다음에는 술이 술을 마시고, 다음에는 술이 너를 마신다.',
	'esp': 'F. Scott Fitzgerald',
	'ksp': 'F. 소코트 피츠제랄드',
	'job': '미국 작가, 1896-1940',
	'pho': 's50.jpg',
	'url': 'http://goo.gl/8zcLG'
},

{
	'idx': '051',
	'eng': 'Television is chewing gum for the eyes.',
	'kor': '텔레비전은 마치 츄잉검 같아 쉬지 않고 보게된다.',
	'esp': 'Frank Lloyd Wright',
	'ksp': '프랭크 로이드 라이트',
	'job': '美건축가, 1869-1959',
	'pho': 's51.jpg',
	'url': 'http://goo.gl/ufx31'
},

{
	'idx': '052',
	'eng': 'A politician divides mankind into two classes: tools and enemies.',
	'kor': '정치인은 인류를 두 부류로 나눈다: 도구와 적으로.',
	'esp': 'Friedrich Nietzsche',
	'ksp': '프리드리히 니체',
	'job': '독일 철학자, 1844-1900',
	'pho': 's52.jpg',
	'url': 'http://goo.gl/hpGYE'
},

{
	'idx': '053',
	'eng': 'A sudden, bold, and unexpected question doth many times surprise a man and lay him open.',
	'kor': '갑작스럽고 대담한 그리고 예상밖의 질문은 한 인간을 여러 차례 놀라게 해서 정체를 드러내게 한다.',
	'esp': 'Francis Bacon',
	'ksp': '프랜시스 베이컨',
	'job': '영국 철학자/수필가, 1561-1626',
	'pho': 's53.jpg',
	'url': 'http://goo.gl/Z5KUw'
},

{
	'idx': '054',
	'eng': 'If a man will begin with certainties, he shall end in doubt. but if he will be content to begin with doubts he shall end in certainties.',
	'kor': '확신을 가지고 시작하는 사람은 회의로 끝나고 기꺼이 의심하면서 시작하는 사람은 확신을 가지고 끝내게 된다.',
	'esp': 'Francis Bacon',
	'ksp': '프랜시스 베이컨',
	'job': '영국 철학자, 1561-1626',
	'pho': 's53.jpg',
	'url': 'http://goo.gl/kH1Rx'
},

{
	'idx': '055',
	'eng': 'The test of our progress is not whether we add more to the abundance of those who have much. it is whether we provide enough for those who have too little.',
	'kor': '발전의 기준은 우리가 부유한 사람들에게 더 많은 것을 주는 것이 아니고 없는 사람들에게 충분히 주는 데 있다.',
	'esp': 'Franklin Delano Roosevelt',
	'ksp': '프랭클린 델라노 루스벨트',
	'job': '미국 대통령, 1882-1945',
	'pho': 's55.jpg',
	'url': 'http://goo.gl/hJkkW'
},

{
	'idx': '056',
	'eng': 'There is nothing I love as much as a good fight.',
	'kor': '좋은 싸움만큼 내가 사랑하는 것은 없다.',
	'esp': 'Franklin Delano Roosevelt',
	'ksp': '프랭클린 델라노 루즈벨트',
	'job': '美대통령, 1882-1945',
	'pho': 's55.jpg',
	'url': 'http://goo.gl/3Tn0z'
},

{
	'idx': '057',
	'eng': 'He who rises from prayer a better man, his prayer is answered.',
	'kor': '기도를 함으로써 더 나은 사람이 되는 이의 기도는 응답을 받는다.',
	'esp': 'George Meredith',
	'ksp': '조지 메리디스',
	'job': '영국 시인/소설가, 1828-1909',
	'pho': 's57.jpg',
	'url': 'http://goo.gl/OOLgm'
},

{
	'idx': '058',
	'eng': 'Who controls the past controls the future. Who controls the present controls the past.',
	'kor': '과거를 지배하는 자가 마래를 지배하며 현재를 지배하는 자가 과거를 지배한다.',
	'esp': 'George Orwell',
	'ksp': '조지 오웰',
	'job': '영국 작가, 1903-50',
	'pho': 's58.jpg',
	'url': 'http://goo.gl/cTtqK'
},

{
	'idx': '059',
	'eng': 'How wonderful opera would be if there were no singers.',
	'kor': '가수들이 없다면 오페라는 정말 멋질 텐데.',
	'esp': 'Gioacchino Rossini',
	'ksp': '죠아키노 로시니',
	'job': '이태리 작곡가, 1792-1868',
	'pho': 's59.jpg',
	'url': 'http://goo.gl/VWjta'
},

{
	'idx': '060',
	'eng': 'Work banishes those three great evils, boredom, vice and poverty.',
	'kor': '노동은 세개의 큰 악, 즉, 지루함, 부도덕, 그리고 가난을 제거한다.',
	'esp': 'Goethe',
	'ksp': '괴테',
	'job': '독일 작가, 1749-1832',
	'pho': 's60.jpg',
	'url': 'http://goo.gl/NIRme'
},

{
	'idx': '061',
	'eng': 'No human being can really understand another, and no one can arrange another\'s happiness.',
	'kor': '사람은 아무도 다른 사람을 정말로 이해할 수 없고 아무도 다른 사람의 행복을 만들어 줄 수 없다.',
	'esp': 'Graham Greene',
	'ksp': '그레이엄 그린',
	'job': '영국 작가, 1904-1991',
	'pho': 's61.jpg',
	'url': 'http://goo.gl/B62Ro'
},

{
	'idx': '062',
	'eng': 'One man who has a mind and knows it can always beat ten men who haven\'t and don\'t.',
	'kor': '지성을 소유하고 또 그렇다는 것을 아는 사람은 그렇지 못한 열 사람에게 언제나 승리한다.',
	'esp': 'George Bernard Shaw',
	'ksp': '조지 버나드 쇼',
	'job': '영국 극작가, 1856-1950',
	'pho': 's62.jpg',
	'url': 'http://goo.gl/Cw0PL'
},

{
	'idx': '063',
	'eng': 'We have no more right to consume happiness without producing it than to consume wealth without producing it." ',
	'kor': '재물을 스스로 만들지 않는 사람에게는 쓸 권리가 없듯이 행복도 스스로 만들지 않는 사람에게는 누릴 권리가 없다.',
	'esp': 'George Bernard Shaw',
	'ksp': '조지 버나드 쇼',
	'job': '영국 극작가, 1856-1950',
	'pho': 's62.jpg',
	'url': 'http://goo.gl/U6fUD'
},

{
	'idx': '064',
	'eng': 'He knows nothing; he thinks he knows everything - that clearly points to a political career.',
	'kor': '그는 아는 게 없다; 그는 모든 것을 다 안다고 생각한다.그것은 명백하게 정치에 입문해야 한다는 것을 가리킨다.',
	'esp': 'George Bernard Shaw',
	'ksp': '조지 버너드 쇼',
	'job': '영국 극작가, 1856-1950',
	'pho': 's62.jpg',
	'url': 'http://goo.gl/Mp8TI'
},

{
	'idx': '065',
	'eng': 'Education has produced a vast population able to read but unable to distinguish what is worth reading.',
	'kor': '교육은 수많은 사람들에게 글씨는 가르치면서 읽을 가치가 있는 것을 가리는 능력은 길러주지 못했다.',
	'esp': 'George Macauley Trevelyan',
	'ksp': '조지 매컬리 트리블리안',
	'job': '영국의 역사가, 1876-1962',
	'pho': 's65.jpg',
	'url': 'http://goo.gl/5AlvL'
},

{
	'idx': '066',
	'eng': 'What experience and history teach is this - that people and government never have learned anything from history, or acted on principles deduced from it.',
	'kor': '경험과 역사가 가르치는 것은 이러한데, 즉 국민과 정부는 역사로부터 아무 것도 배운 적이 없고 혹은 역사로부터 연역한 원칙에 따라 행동한 적도 없다는 것이다.',
	'esp': 'Gerog Wilhelm Friedrich Hegel',
	'ksp': '게오르그 빌헬름 프리드리히 헤겔',
	'job': '독일 철학자, 1779-1831',
	'pho': 's66.jpg',
	'url': 'http://goo.gl/9aMWk'
},

{
	'idx': '067',
	'eng': 'The more you sweat in peace, the less you bleed in war.',
	'kor': '평화로울 때 땀을 더 흘리면 전쟁에서 피를 덜 흘린다.',
	'esp': 'Hyman Rickover',
	'ksp': '하이먼 리코버',
	'job': '美제독/교육자, 1900-1986',
	'pho': 's67.jpg',
	'url': 'http://goo.gl/aCRsJ'
},

{
	'idx': '068',
	'eng': 'A friend in power is a friend lost.',
	'kor': '힘 있을 때 친구는 친구가 아니다.',
	'esp': 'Henry Brooks Adams',
	'ksp': '헨리 브룩스 애덤스',
	'job': '美작가/역사가, 1838-1918',
	'pho': 's68.jpg',
	'url': 'http://goo.gl/joKtd'
},

{
	'idx': '069',
	'eng': 'Knowledge of human nature is the beginning and end of political education.',
	'kor': '인간 본성에 대한 지식이 정치적 교육의 시작이자 끝이다.',
	'esp': 'Henry Brooks Adams',
	'ksp': '헨리 브룩스 애덤스',
	'job': '미국 역사가, 1838-1918',
	'pho': 's68.jpg',
	'url': 'http://goo.gl/8IRLR'
},

{
	'idx': '070',
	'eng': 'Time is a great teacher, but unfortunately it kills all its pupils.',
	'kor': '시간은 위대한 스승이기는 하지만 불행히도 자신의 모든 제자를 죽인다.',
	'esp': 'Hector Berlioz',
	'ksp': '헥토르 베를리오즈',
	'job': '프랑스 작곡가, 1803-69',
	'pho': 's70.jpg',
	'url': 'http://goo.gl/KJO2q'
},

{
	'idx': '071',
	'eng': 'History is more or less bunk.',
	'kor': '역사란 얼마간은 터무니없는 속임수이다.',
	'esp': 'Henry Ford',
	'ksp': '헨리 포드',
	'job': '미국 기업인, 1863-1947',
	'pho': 's71.jpg',
	'url': 'http://goo.gl/NuVbK'
},

{
	'idx': '072',
	'eng': 'It is not the employer who pays wages - he only handles the money. It is the product that pays wages.',
	'kor': '임금을 지불하는 것은 고용주가 아니며 그는 단지 돈을 관리할 뿐이다. 임금을 주는 것은 제품이다.',
	'esp': 'Henry Ford',
	'ksp': '헨리 포드',
	'job': '미국 기업인, 1863-1947',
	'pho': 's71.jpg',
	'url': 'http://goo.gl/3Dvhq'
},

{
	'idx': '073',
	'eng': 'The mystery of language was revealed to me. I knew then that "water" meant the wonderful cool something that was flowing over my hand. That living word awakened my soul, gave it light, joy, set it free!',
	'kor': '언어의 신비성이 내게 나타났다. 그때 나는 "물"이 내 손위로 흐르는 멋지고 시원한 그 어떤 것임을 알았다. 그같이 살아 있는 말이 내 영혼을 일깨우고 빛과 기쁨을 주고 자유롭게 만들어 주었다.',
	'esp': 'Hellen Keller',
	'ksp': '헬렌 켈러',
	'job': '미국 교육가/작가, 1880-1968',
	'pho': 's73.jpg',
	'url': 'http://goo.gl/h0gpv'
},

{
	'idx': '074',
	'eng': 'Although the world is full of suffering, it is full also of the overcoming of it.',
	'kor': '세상은 고통으로 가득하지만 한편 그것을 이겨내는 일로도 가득차 있다.',
	'esp': 'Helen Keller',
	'ksp': '헬렌 켈러',
	'job': '美 작가/연사, 1880-1968',
	'pho': 's73.jpg',
	'url': 'http://goo.gl/vQHLu'
},

{
	'idx': '075',
	'eng': 'I think that we should be men first, and subjects afterward. It is not desirable to cultivate a respect for the law, so much as for the right.',
	'kor': '우리는 먼저 인간이 된 다음 국민이 되어야 한다. 법을 정의만큼 존중하게 되는 것은 바람직하지 않은 일이다.',
	'esp': 'Henry David Thoreau',
	'ksp': '헨리 데이비드 소로',
	'job': '미국 사상가/작가, 1817-62',
	'pho': 's75.jpg',
	'url': 'http://goo.gl/xtISz'
},

{
	'idx': '076',
	'eng': 'Every generation laughs at the old fashions but religiously follows the new.',
	'kor': '모든 세대는 지난 유행을 비웃는다 그러나 새 유행은 종교처럼 따른다.',
	'esp': 'Henry David Thoreau',
	'ksp': '헨리 데이빗 소로',
	'job': '미국 사상가, 1817-1862',
	'pho': 's75.jpg',
	'url': 'http://goo.gl/9aHIJ'
},

{
	'idx': '077',
	'eng': 'Hear that lonesome whippoorwill? He sounds too blue to fly. The midnight train is whining low, I\'m so lonesome I could cry.',
	'kor': '저 외로운 쏙독새 소리가 들리는가? 너무 우울해 날지도 못하는 소리가. 한밤의 기적소리가 고요히 흐느끼고, 나는 외로워 울고 싶어라.',
	'esp': 'Hank Williams',
	'ksp': '행크 월리엄스',
	'job': '미국 작곡가/가수, 1923-1953',
	'pho': 's77.jpg',
	'url': 'http://goo.gl/5g7Fq'
},

{
	'idx': '078',
	'eng': 'It takes a great deal of history to produce a little literature.',
	'kor': '약간의 문학을 만들어 내기 위해 아주 많은 역사가 필요하다.',
	'esp': 'Henry James',
	'ksp': '헨리 제임스',
	'job': '美작가, 1843-1916',
	'pho': 's78.jpg',
	'url': 'http://goo.gl/sQJuP'
},

{
	'idx': '079',
	'eng': 'Children and dogs are as necessary to the welfare of this country as Wall Street and the railroads.',
	'kor': '아이들과 개들도 이 나라의 복지를 위해 월스트리트나 철도만큼 필요하다.',
	'esp': 'Harry S. Truman',
	'ksp': '해리 S. 트루만',
	'job': '美대통령, 1884-1972',
	'pho': 's79.jpg',
	'url': 'http://goo.gl/oB5Pn'
},

{
	'idx': '080',
	'eng': 'You will kill 10 of our men, and we will kill one of yours, and in the end it will be you who tires of it.',
	'kor': '너희가 우리 군인 10명을 죽일 때 우리는 너희편 1명을 죽일 테지만 결국 지치는 것은 너희들일 것이다.',
	'esp': 'Ho Chi Minh',
	'ksp': '호치민',
	'job': '베트남 지도자, 1890-1969',
	'pho': 's80.jpg',
	'url': 'http://goo.gl/pzamL'
},

{
	'idx': '081',
	'eng': 'He who does not hope to win has already lost.',
	'kor': '승리를 바라지 않는다면 이미 패배한 것이다.ㅊ',
	'esp': 'Jose Joaquin Olmedo',
	'ksp': '호세 호아킨 데 올메도',
	'job': '에콰도르의 정치인',
	'pho': 's81.jpg',
	'url': 'http://goo.gl/89fBb'
},

{
	'idx': '082',
	'eng': 'Art produces ugly things which frequently become beautiful with time.',
	'kor': '예술이 만드는 추한 것들은 종종 시간이 흐르면서 아름다와진다.',
	'esp': 'Jean Cocteau',
	'ksp': '장 꼭또',
	'job': '프랑스 극작가, 1889-1963',
	'pho': 's82.jpg',
	'url': 'http://goo.gl/dKONS'
},

{
	'idx': '083',
	'eng': 'I met a lot of people in Europe, I even encountered myself.',
	'kor': '나는 유럽에서 많은 사람들을 만났다. 심지어 나 자신과도.',
	'esp': 'James Baldwin',
	'ksp': '제임스 볼드윈',
	'job': '미국 작가, 1924-',
	'pho': 's83.jpg',
	'url': 'http://goo.gl/iiiZN'
},

{
	'idx': '084',
	'eng': 'The hardest work is to go idle.',
	'kor': '가장 하기 힘든 일은 아무 일도 안하는 것이다.',
	'esp': 'Jewish proverb',
	'ksp': '유대인 격언',
	'job': '',
	'pho': 's84.jpg',
	'url': 'http://goo.gl/eyHsB'
},

{
	'idx': '085',
	'eng': 'I want nothing to do with any religion concerned with keeping the masses satisfied to live in hunger, filth and ignorance.',
	'kor': '나는 민중이 기아와 더러움과 무지 속에 만족하고 살도록 하는 어떤 종교와도 관련을 갖고 싶지 않다.',
	'esp': 'Jawaharlal Nehru',
	'ksp': '자와하를랄 네루',
	'job': '인도 정치가, 1889-1964',
	'pho': 's85.jpg',
	'url': 'http://goo.gl/4y4mr'
},

{
	'idx': '086',
	'eng': 'The richest peach is highest on the tree.',
	'kor': '제일 잘 익은 복숭아는 제일 높은 가지에 달려 있다.',
	'esp': 'James Whitcomb Riley',
	'ksp': '제임스 휘트컴 라일리',
	'job': '미국 시인, 1849-1916',
	'pho': 's86.jpg',
	'url': 'http://goo.gl/0bSR6'
},

{
	'idx': '087',
	'eng': 'A writer must refuse to allow himself to be transformed into an institution.',
	'kor': '작가는 스스로 제도화되기를 거부해야 한다.',
	'esp': 'Jean-Paul Sartre',
	'ksp': '장 폴 사르트르',
	'job': '프랑스 철학자/작가, 1905-80',
	'pho': 's87.jpg',
	'url': 'http://goo.gl/qflEY'
},

{
	'idx': '088',
	'eng': '3 O\'clock is always too early for anything you want to do.',
	'kor': '3시는 하고 싶은 일을 시작하기에는 언제나 너무 이른 때이다.',
	'esp': 'Jean-Paul Sartre',
	'ksp': '장 폴 사르트르',
	'job': '프랑스 철학자, 1905-1980',
	'pho': 's87.jpg',
	'url': 'http://goo.gl/0I155'
},

{
	'idx': '089',
	'eng': 'The happiness of society is the end of government.',
	'kor': '사회의 행복이 정부의 목표다.',
	'esp': 'John Adams',
	'ksp': '존 애덤스',
	'job': '미국 대통령, 1735-1826',
	'pho': 's89.jpg',
	'url': 'http://goo.gl/Kb8MA'
},

{
	'idx': '090',
	'eng': 'Liberty without learning is always in peril and learning without liberty is always in vain.',
	'kor': '배움이 없는 자유는 언제나 위험하며 자유가 없는 배움은 언제나 헛된 일이다.',
	'esp': 'John F. Kennedy',
	'ksp': '존 F. 케네디',
	'job': '미국 대통령, 1917-1963',
	'pho': 's90.jpg',
	'url': 'http://goo.gl/I6Qqh'
},

{
	'idx': '091',
	'eng': 'Ask not what your country can do for you; ask what you can do for your country.',
	'kor': '국가가 당신을 위해 무엇을 할 수 있는지 묻지 말고 당신이 국가를 위해 무엇을 할 수 있는지 물어보라.',
	'esp': 'John F. Kennedy',
	'ksp': '존 F. 케네디',
	'job': '미국 대통령, 1917-1963',
	'pho': 's90.jpg',
	'url': 'http://goo.gl/24hH0'
},

{
	'idx': '092',
	'eng': 'Once you say you\'re going to settle for second, that\'s what happens to you in life, I find.',
	'kor': '당신이 자신은 2위로 만족한다고 일단 말하면, 당신의 인생은 그렇게 되기 마련 이라는 것을 나는 깨달았다.',
	'esp': 'John F. Kennedy',
	'ksp': '존 F. 케네디',
	'job': '미국 대통령, 1917-63',
	'pho': 's90.jpg',
	'url': 'http://goo.gl/x7vBo'
},

{
	'idx': '093',
	'eng': 'We\'re more popular than Jesus now. I don\'t know which will go first - rock \'n\' roll or Christianity.',
	'kor': '지금 우리는 예수보다도 더 인기가 있다. 로큰롤이 더 먼저인지 기독교가 더 먼저인지 알 수 없을 정도다.',
	'esp': 'John Lennon',
	'ksp': '존 레논',
	'job': '가수/작곡가/전 비틀스 멤버, 1940-1980',
	'pho': 's93.jpg',
	'url': 'http://goo.gl/Mscj9'
},

{
	'idx': '094',
	'eng': 'Intelligence recognizes what has happened. Genius recognizes what will happen.',
	'kor': '지성은 일어난 일을 알고 천재는 일어날 일을 안다.',
	'esp': 'John Ciardi',
	'ksp': '존 치아디',
	'job': '미국 시인/비평가, 1916-1986',
	'pho': 's94.jpg',
	'url': 'http://goo.gl/e464o'
},

{
	'idx': '095',
	'eng': 'I believe there are more instances of the abridgment of the freedom of the people by gradual and silent encroachments of those in power than by violent and sudden usurpations.',
	'kor': '나는 폭력적이고 갑작스런 찬탈행위에 의해서보다는 권력을 쥐고 있는 이들의 점진적이고도 소리없는 침입에 의해 사람들의 자유가 축소되는 사례가 더 많다고 믿는다.',
	'esp': 'James Madison',
	'ksp': '제임스 메디슨',
	'job': '미국 대통령, 1751-1836',
	'pho': 's95.jpg',
	'url': 'http://goo.gl/Wkbbn'
},

{
	'idx': '096',
	'eng': 'A man of genius makes no mistakes. His errors are volitional and are portals of discovery.',
	'kor': '천재는 실수하지 않는다. 발견을 위해 의도적으로 할 뿐이다.',
	'esp': 'James Joyce',
	'ksp': '제임스 조이스',
	'job': '영국 작가, 1882-1941',
	'pho': 's96.jpg',
	'url': 'http://goo.gl/fKXbD'
},

{
	'idx': '097',
	'eng': 'I love treason but hate a traitor.',
	'kor': '나는 반역은 좋아하지만 반역자는 싫어한다.',
	'esp': 'Julius Caesar',
	'ksp': '줄리어스 시저',
	'job': '로마 정치가/장군, 102? B.C.-44 B.C.',
	'pho': 's97.jpg',
	'url': 'http://goo.gl/IWFal'
},

{
	'idx': '098',
	'eng': 'It is these well-fed long-haired men that I fear, but the pale and the hungry-looking.',
	'kor': '내가 두려워하는 것은 이처럼 잘 먹은 얼굴에 긴 머리를 가진 사람들이 아니고 창백하고 배고파 보이는 사람들이다.',
	'esp': 'Julius Caesar',
	'ksp': '줄리어스 시저',
	'job': '로마 정치가, 100 B.C.-44 B.C.',
	'pho': 's97.jpg',
	'url': 'http://goo.gl/mr137'
},

{
	'idx': '099',
	'eng': 'New opinions are always suspected, and usually opposed, without any other reason but because they are not already common.',
	'kor': '새로운 의견은 항상 그것이 이미 보편적이 아니라는 것 외에는 아무 다른 이유도 없이 의심받거나 반대를 당한다.',
	'esp': 'John Locke',
	'ksp': '존 로크',
	'job': '영국 철학자, 1632-1704',
	'pho': 's99.jpg',
	'url': 'http://goo.gl/P3ec1'
},

{
	'idx': '100',
	'eng': 'We live as we dream - alone.',
	'kor': '우리가 사는 것도 꿈꿀 때나 마찬가지다, 혼자이기는.',
	'esp': 'Joseph Conrad',
	'ksp': '조세프 콘라드',
	'job': '영국 작가, 1857-1924',
	'pho': 's100.jpg',
	'url': 'http://goo.gl/b27q2'
}

]
































