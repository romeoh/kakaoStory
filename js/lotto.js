var lottoNum = []
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
	
	lottoNum.length = 0

	data.title = '행운의 로또번호 생성기';
	data.url = 'http://goo.gl/w62nY';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	settle(dataLotto, 7)
	bonus = lottoNum[6]
	lottoNum.pop();
	lottoNum.sort(function(a, z){
		return a - z
	})

	
	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '의 행운의 번호는 \n';
	post += lottoNum[0]+1 + ', ';
	post += lottoNum[1]+1 + ', ';
	post += lottoNum[2]+1 + ', ';
	post += lottoNum[3]+1 + ', ';
	post += lottoNum[4]+1 + ', ';
	post += lottoNum[5]+1 + '\n';
	post += '그리고 보너스 번호 ' + (Number(bonus) + Number(1)) + ' 입니다.';
	data.post = post;
	
	data.desc = '기부 안해요~';
	data.img = 'http://romeoh.github.io/kakaoStory/img/lotto.jpg';

	sendData(data);
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
































