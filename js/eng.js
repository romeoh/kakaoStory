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

	data.title = '영어이름 만들기';
	data.url = 'http://goo.gl/gl4nkd';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	if (sexType == 'boy') {
		database = dataBoy;
		photo = 'eng1.png'
	} else if (sexType == 'girl') {
		database = dataGirl;
		photo = 'eng2.png'
	}
	idx = process(database);
	if (userName.length == 4 || userName.length == 3 || userName.length == 2) {
		fName = userName.substr(0, 1);
	} else {
		fName = userName;
	}
	
	post += '[' + data.title + ']\n\n';
	post += userName + '님의 영어이름은 "' + database[idx]['k'] + ' ' + fName + '" 입니다.';
	data.post = post;
	
	data.desc = 'hi, ' + database[idx]['e'];
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/' + photo;

	sendData(data);
}




// 남자
dataBoy = [
	{'e':'Albert', 'k':'알버트'},
	{'e':'Alex', 'k':'알렉스'},
	{'e':'Alfred', 'k':'알프레드'},
	{'e':'Alvin', 'k':'앨빈'},
	{'e':'Andy', 'k':'앤디'},
	{'e':'Anthony', 'k':'안토니'},
	{'e':'Arnold', 'k':'아놀드'},
	{'e':'Arthur', 'k':'아서'},
	{'e':'Benjamin', 'k':'벤자민'},
	{'e':'Billy', 'k':'빌리'},
	{'e':'Brandon', 'k':'브랜든'},
	{'e':'Brian', 'k':'브라이언'},
	{'e':'Calvin', 'k':'캘빈'},
	{'e':'Calix', 'k':'칼릭스'},
	{'e':'Charles', 'k':'찰스'},
	{'e':'Charlie', 'k':'찰리'},
	{'e':'Colin', 'k':'콜린'},
	{'e':'Conner', 'k':'코너'},
	{'e':'Daniel', 'k':'다니엘'},
	{'e':'David', 'k':'데이비드'},
	{'e':'Dennis', 'k':'데니스'},
	{'e':'Darron', 'k':'대런'},
	{'e':'Dexter', 'k':'덱스터'},
	{'e':'Donald', 'k':'도널드'},
	{'e':'Douglas', 'k':'더글라스'},
	{'e':'Drake', 'k':'드레이크'},
	{'e':'Duke', 'k':'듀크'},
	{'e':'Dustin', 'k':'더스틴'},
	{'e':'Edward', 'k':'에드워드'},
	{'e':'Elvis', 'k':'엘비스'},
	{'e':'Enoch', 'k':'에녹'},
	{'e':'Eric', 'k':'에릭'},
	{'e':'Eugene', 'k':'유진'},
	{'e':'Evan', 'k':'에반'},
	{'e':'Frances', 'k':'프란시스'},
	{'e':'Fred', 'k':'프레드'},
	{'e':'Gabriel', 'k':'가브리엘'},
	{'e':'George', 'k':'조지'},
	{'e':'Gilbert', 'k':'길버트'},
	{'e':'Gregory', 'k':'그레고리'},
	{'e':'Harry', 'k':'해리'},
	{'e':'Harold', 'k':'해럴드'},
	{'e':'Henry', 'k':'헨리'},
	{'e':'Hubert', 'k':'휴버트'},
	{'e':'Hugh', 'k':'휴'},
	{'e':'Humphery', 'k':'험프리'},
	{'e':'Ian', 'k':'이안'},
	{'e':'Issac', 'k':'이삭'},
	{'e':'Jacob', 'k':'제이콥'},
	{'e':'Jason', 'k':'제이슨'},
	{'e':'Jasper', 'k':'제스퍼'},
	{'e':'Jeffrey', 'k':'제프리'},
	{'e':'Jeremy', 'k':'제레미'},
	{'e':'Jonathan', 'k':'조나단'},
	{'e':'Josh', 'k':'조쉬'},
	{'e':'Justin', 'k':'저스틴'},
	{'e':'Kevin', 'k':'케빈'},
	{'e':'Leo', 'k':'레오'},
	{'e':'Lukas', 'k':'루카스'},
	{'e':'Luke', 'k':'루크'},
	{'e':'Max', 'k':'맥스'},
	{'e':'Matthew', 'k':'매튜'},
	{'e':'Moris', 'k':'모리스'},
	{'e':'Neal', 'k':'닐'},
	{'e':'Nicholas', 'k':'니콜라스'},
	{'e':'Noel', 'k':'노엘'},
	{'e':'Oliver', 'k':'올리버'},
	{'e':'Oscar', 'k':'오스카'},
	{'e':'Patric', 'k':'패트릭'},
	{'e':'Paul', 'k':'폴'},
	{'e':'Peter', 'k':'피터'},
	{'e':'Phillip', 'k':'필립'},
	{'e':'Ralph', 'k':'랄프'},
	{'e':'Ray', 'k':'레이'},
	{'e':'Richard', 'k':'리차드'},
	{'e':'Robert', 'k':'로버트'},
	{'e':'Robin', 'k':'로빈'},
	{'e':'Roger', 'k':'로저'},
	{'e':'Ryan', 'k':'라이언'},
	{'e':'Samuel', 'k':'사무엘'},
	{'e':'Simon', 'k':'사이먼'},
	{'e':'Steven', 'k':'스티븐'},
	{'e':'Ted', 'k':'테드'},
	{'e':'Victor', 'k':'빅터'},
	{'e':'Vincent', 'k':'빈센트'},
	{'e':'William', 'k':'윌리엄'},
	{'e':'Zachary', 'k':'재커리'}
]

// 여자
dataGirl = [
	{'e':'Adela', 'k':'아델라'},
	{'e':'Agatha', 'k':'애가사'},
	{'e':'Alexia', 'k':'알레크시아'},
	{'e':'Alice', 'k':'앨리스'},
	{'e':'Alyssa', 'k':'앨리사'},
	{'e':'Amanda', 'k':'아맨다'},
	{'e':'Amber', 'k':'앰버'},
	{'e':'Amy', 'k':'에이미'},
	{'e':'Andrea', 'k':'앤드리'},
	{'e':'Angela', 'k':'안젤라'},
	{'e':'Angellina', 'k':'엔젤리나'},
	{'e':'Ann', 'k':'앤'},
	{'e':'Anna', 'k':'애나'},
	{'e':'Ashley', 'k':'아실리'},
	{'e':'Athena', 'k':'아테네'},
	{'e':'Audrey', 'k':'오드리'},
	{'e':'Aurora', 'k':'오로라'},
	{'e':'Avril', 'k':'에이브릴'},
	{'e':'Barbara', 'k':'바바라'},
	{'e':'Bella', 'k':'벨라'},
	{'e':'Bernice', 'k':'버니스'},
	{'e':'Beryl', 'k':'베릴'},
	{'e':'Bess', 'k':'베스'},
	{'e':'Beth', 'k':'베쓰'},
	{'e':'Betty', 'k':'베티'},
	{'e':'Blanche', 'k':'블란치'},
	{'e':'Bonnie', 'k':'보니'},
	{'e':'Brenda', 'k':'브렌더'},
	{'e':'Carol', 'k':'카롤'},
	{'e':'Caroline', 'k':'캐롤라인'},
	{'e':'Catherine', 'k':'캐더린'},
	{'e':'Chloe', 'k':'클로에'},
	{'e':'Chloe', 'k':'클로이'},
	{'e':'Christine', 'k':'크리스틴'},
	{'e':'Daisy', 'k':'데이지'},
	{'e':'Daisy', 'k':'데이지'},
	{'e':'Dana', 'k':'다나'},
	{'e':'Darlene', 'k':'달린'},
	{'e':'Denise', 'k':'더니즈'},
	{'e':'Diana', 'k':'다이애너'},
	{'e':'Donna', 'k':'도나'},
	{'e':'Doreen', 'k':'도린'},
	{'e':'Doris', 'k':'도리스'},
	{'e':'Dorothy', 'k':'도로시'},
	{'e':'Eileen', 'k':'아이린'},
	{'e':'Elin', 'k':'엘린'},
	{'e':'Elizabeth', 'k':'엘리자베스'},
	{'e':'Elva', 'k':'엘버'},
	{'e':'Emily', 'k':'에밀리'},
	{'e':'Emma', 'k':'에마'},
	{'e':'Erica', 'k':'에리카'},
	{'e':'Esther', 'k':'에스더'},
	{'e':'Frances', 'k':'프랜시스'},
	{'e':'Gloria', 'k':'글로리아'},
	{'e':'Hanah', 'k':'하나'},
	{'e':'Hannah', 'k':'해나'},
	{'e':'Heather', 'k':'헤더'},
	{'e':'Hilda', 'k':'힐다'},
	{'e':'Ingrid', 'k':'잉그리드'},
	{'e':'Irene', 'k':'아이린'},
	{'e':'Iris', 'k':'아이리스'},
	{'e':'Isabel', 'k':'이자벨'},
	{'e':'Jasmin', 'k':'자스민'},
	{'e':'Jennet', 'k':'제넷'},
	{'e':'Jennifer', 'k':'제니퍼'},
	{'e':'Joanna', 'k':'죠애나'},
	{'e':'Juana', 'k':'쥬아나'},
	{'e':'Julia', 'k':'줄리아'},
	{'e':'Juniper', 'k':'쥬니퍼'},
	{'e':'Karen', 'k':'카렌'},
	{'e':'Katrina', 'k':'카트리나'},
	{'e':'Kelly', 'k':'캘리'},
	{'e':'Laura', 'k':'로라'},
	{'e':'Lesley', 'k':'레즐리'},
	{'e':'Lina', 'k':'리나'},
	{'e':'Lora', 'k':'로라'},
	{'e':'Madalyn', 'k':'마다린'},
	{'e':'Mamie', 'k':'메이미'},
	{'e':'Marcia', 'k':'마샤'},
	{'e':'Margaret', 'k':'마가렛'},
	{'e':'Martina', 'k':'마티나'},
	{'e':'Melissa', 'k':'멜리사'},
	{'e':'Michelle', 'k':'미셸'},
	{'e':'Mikhaila', 'k':'미케일라'},
	{'e':'Miriam', 'k':'미리엄'},
	{'e':'Monica', 'k':'모니카'},
	{'e':'Natalie', 'k':'내털리'},
	{'e':'Nicole', 'k':'니콜'},
	{'e':'Nikita', 'k':'니키타'},
	{'e':'Olivia', 'k':'올리비아'},
	{'e':'Ophelia', 'k':'오필리아'},
	{'e':'Paige', 'k':'페이지'},
	{'e':'Rachel', 'k':'레이첼'},
	{'e':'Raye', 'k':'레이'},
	{'e':'Rebecca', 'k':'레베카'},
	{'e':'Sally', 'k':'샐리'},
	{'e':'Sara', 'k':'새라'},
	{'e':'Scarlet', 'k':'스칼렛'},
	{'e':'Serena', 'k':'세레나'},
	{'e':'Sharon', 'k':'샤론'},
	{'e':'Sharon', 'k':'섀런'},
	{'e':'Stella', 'k':'스텔라'},
	{'e':'Sunny', 'k':'써니'},
	{'e':'Susan', 'k':'수잔'},
	{'e':'Teresa', 'k':'테레사'},
	{'e':'Vanessa', 'k':'베네사'},
	{'e':'Victoria', 'k':'빅토리아'},
	{'e':'Vivian', 'k':'비비안'},
	{'e':'Whitney', 'k':'위트니'},
	{'e':'Yeriel', 'k':'예리엘'},
	{'e':'Yesica', 'k':'예시카'},
	{'e':'Zoe', 'k':'조이'}
]





































































































































































































































