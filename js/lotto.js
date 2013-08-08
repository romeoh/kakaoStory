var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,data
	,lottoNum = []
	,bonus



window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
}


//  카카오 스토리
function executeKakaoStoryLink(){
	var  sexType
		,userName = document.querySelector('#userName').value
		,postMsg = ''
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}

	settle(dataLotto, 7)
	bonus = lottoNum[6]
	lottoNum.pop();
	lottoNum.sort(function(a, z){
		return a - z
	})

	postMsg += '[행운의 로또번호 생성기]\n';
	postMsg += M('#userName').val() + '의 행운의 번호는 \n';
	postMsg += lottoNum[0]+1 + ', ';
	postMsg += lottoNum[1]+1 + ', ';
	postMsg += lottoNum[2]+1 + ', ';
	postMsg += lottoNum[3]+1 + ', ';
	postMsg += lottoNum[4]+1 + ', ';
	postMsg += lottoNum[5]+1 + '\n';
	postMsg += '그리고 보너스 번호 ' + (Number(bonus) + Number(1)) + ' 입니다.\n\n';
	
	postMsg += 'http://goo.gl/w62nY\n\n\n';
	
	postMsg += '월욜부터 연락 안되면 인생역전 했구나 생각해줘~\n';

	urlMsg = {
		title: '로또번호 생성기',
		desc: '기부 안해요~' ,
		imageurl: ['http://romeoh.github.io/kakaoStory/img/lotto.jpg' ],
		type:'article'
	}
console.log(postMsg, urlMsg)
	kakao.link("story").send({   
        post : postMsg,
        appid : 'funnyApp',
		appver : '1.0',
		appname : '깨알유머:',
		urlinfo : JSON.stringify(urlMsg)
    });

    showad()
}

// 카톡
function executeURLLink() {
	kakao.link("talk").send({
		msg: "로또번호 생성기",
		url: "http://goo.gl/w62nY",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}


function settle(data, leng) {
	ranValue = Math.floor(Math.random() * data.length)
	if (lottoNum.length === 0) {
		lottoNum.push(ranValue);
		settle(data, leng)
	} else {
		if (lottoNum.length >= leng) {
			return lottoNum;
		} else {
			for (var i=0; i<lottoNum.length; i++) {
				if (lottoNum[i] === ranValue) {
					settle(data, leng);
					break;
				}
			}
			
			if (lottoNum.length <= leng-1) {
				lottoNum.push(ranValue);
				settle(data, leng)
			}
		}
	}
	return lottoNum
}



dataLotto = [
	{'num': '1'},
	{'num': '2'},
	{'num': '3'},
	{'num': '4'},
	{'num': '5'},
	{'num': '6'},
	{'num': '7'},
	{'num': '8'},
	{'num': '9'},
	{'num': '10'},
	{'num': '11'},
	{'num': '12'},
	{'num': '13'},
	{'num': '14'},
	{'num': '15'},
	{'num': '16'},
	{'num': '17'},
	{'num': '18'},
	{'num': '19'},
	{'num': '20'},
	{'num': '21'},
	{'num': '22'},
	{'num': '23'},
	{'num': '24'},
	{'num': '25'},
	{'num': '26'},
	{'num': '27'},
	{'num': '28'},
	{'num': '29'},
	{'num': '30'},
	{'num': '31'},
	{'num': '32'},
	{'num': '33'},
	{'num': '34'},
	{'num': '35'},
	{'num': '36'},
	{'num': '37'},
	{'num': '38'},
	{'num': '39'},
	{'num': '40'},
	{'num': '41'},
	{'num': '42'},
	{'num': '43'},
	{'num': '44'},
	{'num': '45'}
]
































