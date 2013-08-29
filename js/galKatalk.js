var  imgWidth = M('#wrapper').css('clientWidth')
	,screenX = M.screen().width/2 - 23
	,cuIdx = 0
	,indiCount = 0



window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
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
	
	M('#btnNext').on('click', function(){
		if (cuIdx == data.length-1) {
			alert('마지막입니다\n카스에 추천 부탁드려요~^^')
			return;
		}
		cuIdx++;
		appendImg()
	})
	M('#btnPrev').on('click', function(){
		if (cuIdx == 0) {
			alert('첫번째 사진입니다\n카스에 추천 부탁드려요~^^')
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
	if (M('#kimg').selector.length != 0) {
		M('#kimg').remove();
	}
	M('#wrapper').append('img', {
		 'src':'../imgKatalk/'+data[cuIdx]['photo']
		,'id':'kimg'
	})
	M('#kimg').css('width', imgWidth+'px');
}


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

	data.title = '빵터지는 카톡실수모음';
	data.url = 'http://goo.gl/PPYbq';

	if (media == 'talk') {
		sendData(data);
		return false;
	}
	
	post += '[' + data.title + ']\n\n';
	post += '너무 웃겨서 배꼽이 빠지면 \n가까운 병원을 방문하세요.';
	data.post = post;
	
	data.desc = '대박~';
	data.img = 'http://romeoh.github.io/kakaoStory/imgKatalk/thum.png';

	sendData(data);
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "빵터지는 카톡실수모음",
		url: "http://goo.gl/PPYbq",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}


data = [
	{'photo': 'katalk01.jpeg', 'name': ''},
	{'photo': 'katalk02.jpeg', 'name': ''},
	{'photo': 'katalk03.jpeg', 'name': ''},
	{'photo': 'katalk04.jpeg', 'name': ''},
	{'photo': 'katalk05.jpeg', 'name': ''},
	{'photo': 'katalk06.jpeg', 'name': ''},
	{'photo': 'katalk07.jpeg', 'name': ''},
	{'photo': 'katalk08.jpeg', 'name': ''},
	{'photo': 'katalk09.jpeg', 'name': ''},
	{'photo': 'katalk10.jpeg', 'name': ''},
	{'photo': 'katalk11.jpeg', 'name': ''},
	{'photo': 'katalk12.jpeg', 'name': ''},
	{'photo': 'katalk13.jpeg', 'name': ''},
	{'photo': 'katalk14.jpeg', 'name': ''},
	{'photo': 'katalk15.jpeg', 'name': ''},
	{'photo': 'katalk16.jpeg', 'name': ''},
	{'photo': 'katalk17.jpeg', 'name': ''},
	{'photo': 'katalk18.jpeg', 'name': ''},
	{'photo': 'katalk19.jpeg', 'name': ''},
	{'photo': 'katalk20.jpeg', 'name': ''},
	{'photo': 'katalk21.jpeg', 'name': ''},
	{'photo': 'katalk22.jpeg', 'name': ''},
	{'photo': 'katalk23.jpeg', 'name': ''},
	{'photo': 'katalk24.jpeg', 'name': ''},
	{'photo': 'katalk25.jpeg', 'name': ''},
	{'photo': 'katalk26.jpeg', 'name': ''},
	{'photo': 'katalk27.jpeg', 'name': ''},
	{'photo': 'katalk28.jpeg', 'name': ''},
	{'photo': 'katalk29.jpeg', 'name': ''},
	{'photo': 'katalk30.png', 'name': ''},
	{'photo': 'katalk31.jpeg', 'name': ''},
	{'photo': 'katalk32.jpeg', 'name': ''},
	{'photo': 'katalk33.png', 'name': ''},
	{'photo': 'katalk34.jpeg', 'name': ''},
	{'photo': 'katalk35.jpeg', 'name': ''},
	{'photo': 'katalk36.jpeg', 'name': ''},
	{'photo': 'katalk37.jpeg', 'name': ''},
	{'photo': 'katalk38.jpeg', 'name': ''},
	{'photo': 'katalk39.jpeg', 'name': ''}
]
































