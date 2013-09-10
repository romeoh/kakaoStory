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

	data.title = '나와 어울리는 슈퍼카';
	data.url = 'http://goo.gl/PKcvE';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	
	idx = process(database)
	price = database[idx]['price'] + ' '
	if (price == ' 짜리 ') {
		price = ''
	}

	post += '[' + data.title + ']\n\n';
	post += userName + '님의 애마는 \n';
	post += price + database[idx]['company'] + ' ' + database[idx]['car'] + '입니다.\n';
	if (price == '') {
		post += '가격정보 없음';
	}

	data.post = post;
	
	data.desc = database[idx]['company'] + ' ' + database[idx]['car'];
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + database[idx]['photo'];

	sendData(data);
}




var  imgWidth = M('#wrapper').css('clientWidth')
	,screenX = M.screen().width/2 - 23
	,cuIdx = 0
	,indiCount = 0



window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	if (window.location.hash != '#list') {
		init()
		M('#indicator').css('left', screenX+'px')
		
		setInterval(function(){
			if (indiCount == 11) {
				indiCount = 0
			} else {
				indiCount++
			}
			M('#indicator .ico').css('backgroundPositionX', -1 * 25 * indiCount+'px')
		}, 100)
		M('.description').css('display', 'none')
	} else {
		M('.content').css('min-height', '100px')
		M('#wrapper').css('display', 'none')
		M('#btnPrev').css('display', 'none')
		M('#btnNext').css('display', 'none')
		M('#indicator').css('display', 'none')
	}
	
	
	M('#btnNext').on('click', function(){
		if (cuIdx == database.length-1) {
			alert('마지막입니다\nSNS에 추천 부탁드려요~^^')
			return;
		}
		cuIdx++;
		appendImg()
	})
	M('#btnPrev').on('click', function(){
		if (cuIdx == 0) {
			alert('첫번째 사진입니다\nSNS에 추천 부탁드려요~^^')
			return;
		}
		cuIdx--;
		appendImg()
	})
}

// 초기화
function init() {
	appendImg()
}

function appendImg() {
	var  str = ''
		,price = database[cuIdx]['price'].replace(' 짜리', '')

	if (price == '') {
		price = '가격 정보 없음'
	}

	if (M('#kimg').selector.length != 0) {
		M('#kimg').remove();
	}
	setTimeout(function(){
		M('#wrapper')
			.append('img', {
				 'src':'../img/'+database[cuIdx]['gallery']
				,'id':'kimg'
			})

		str += database[cuIdx]['company'] +' '+ database[cuIdx]['car'] + '<br>'
		str += '가격: ' + price
		M('.carInfo').html(str)
		M('#kimg').css('width', imgWidth+'px');	
	}, 100)
	
}


database = [
	{'gallery':'scar0.jpg',  'photo': 'superCar0.jpg',  'price':'5억 7천 500만원 짜리', 'company':'람보르기니', 'car':'아벤타도르'},
	{'gallery':'scar1.jpg',  'photo': 'superCar1.jpg',  'price':' 짜리', 'company':'페라리', 'car':'F12 베를리네타'},
	{'gallery':'scar2.jpg',  'photo': 'superCar2.jpg',  'price':' 짜리', 'company':'람보르기니', 'car':'에고이스타 컨셉트'},
	{'gallery':'scar3.jpg',  'photo': 'superCar3.jpg',  'price':'2억 2천 750만원 짜리', 'company':'아우디', 'car':'R8 쿠페'},
	{'gallery':'scar4.jpg',  'photo': 'superCar4.jpg',  'price':'1억 360만원 짜리', 'company':'미쯔오카', 'car':'히미코'},
	{'gallery':'scar5.jpg',  'photo': 'superCar5.jpg',  'price':' 짜리', 'company':'쉘비', 'car':'슈퍼카 투아타라'},
	{'gallery':'scar6.jpg',  'photo': 'superCar6.jpg',  'price':' 짜리', 'company':'페라리', 'car':'라페라리'},
	{'gallery':'scar7.jpg',  'photo': 'superCar7.jpg',  'price':'42억 5천만원 짜리', 'company':'람보르기니', 'car':'베네노'},
	{'gallery':'scar8.jpg',  'photo': 'superCar8.jpg',  'price':'3억 5천 600만원 짜리', 'company':'람보르기니', 'car':'가야르도 스파이더'},
	{'gallery':'scar9.jpg',  'photo': 'superCar9.jpg',  'price':'3억 7천 900만원 짜리', 'company':'페라리', 'car':'458 이탈리아'},
	{'gallery':'scar10.jpg', 'photo': 'superCar10.jpg', 'price':'3억 2천 400만원 짜리', 'company':'람보르기니', 'car':'가야르도'},
	{'gallery':'scar11.jpg', 'photo': 'superCar11.jpg', 'price':'1억 1천 120만원 짜리', 'company':'포르쉐', 'car':'박스터'},
	{'gallery':'scar12.jpg', 'photo': 'superCar12.jpg', 'price':'3억 5천만원 짜리', 'company':'페라리', 'car':'캘리포니아 30'},
	{'gallery':'scar13.jpg', 'photo': 'superCar13.jpg', 'price':'1억 120만원 짜리', 'company':'BMW', 'car':'M3'},
	{'gallery':'scar14.jpg', 'photo': 'superCar14.jpg', 'price':'1억 1천 480만원 짜리', 'company':'포르쉐', 'car':'카이맨'},
	{'gallery':'scar15.jpg', 'photo': 'superCar15.jpg', 'price':'4억 2천만원 짜리', 'company':'페라리', 'car':'458 스파이더'},
	{'gallery':'scar16.jpg', 'photo': 'superCar16.jpg', 'price':' 짜리', 'company':'부가티', 'car':'베이론'},
	{'gallery':'scar17.jpg', 'photo': 'superCar17.jpg', 'price':' 짜리', 'company':'람보르기니', 'car':'아벤타도르 로드스터'},
	{'gallery':'scar18.jpg', 'photo': 'superCar18.jpg', 'price':' 짜리', 'company':'어큐라', 'car':'NSX 컨셉트'},
	{'gallery':'scar19.jpg', 'photo': 'superCar19.jpg', 'price':'2억 4천 400만원 짜리', 'company':'마세라티', 'car':'그란투리스모'},
	{'gallery':'scar20.jpg', 'photo': 'superCar20.jpg', 'price':'2억 6천 150만원 짜리', 'company':'마세라티', 'car':'그란카브리오'},
	{'gallery':'scar21.jpg', 'photo': 'superCar21.jpg', 'price':'4억 3천 600만원 짜리', 'company':'람보르기니', 'car':'가야르도'},
	{'gallery':'scar22.jpg', 'photo': 'superCar22.jpg', 'price':' 짜리', 'company':'헤네시', 'car':'베놈 GT'}
]
































