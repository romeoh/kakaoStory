var ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,data
	,likesList
	,totalLength = 10
	,current = 0
	,myLikes = []
	,likes = {}
	,ename
	,mylike
	,thum
	
window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	init()
	initStart();

	M('[data-id="btnKakao"]').on('click', function(){
		var d = {}
		d.media = 'talk'
		action(d)
	})
}

// 초기화
function init() {
	likesList = []
	arr16 = []
	arr8 = []
	arr4 = []
	arr2 = []
	arr1 = []
	cuRound = 0
	cuStage = 32
}


function initStart() {
	M('#userName').on('keyup', function(evt, mp){
		//M('h1').text('연예인 이상형 '+mp.val()+'컵')
	})

	M('#btnStart').click(function(){
		if (M('#userName').val() == '') {
			alert('이름을 입력하세요.');
			return;
		}
		insertLikes(data, totalLength)
		start(0)
	})
}


function start(flag) {
	M('#start').css('display', 'none');
	M('#game').css('display', 'block');
	
	M('#btnLike').on('click', function(){
		likes.ename = ename
		likes.result = '좋아합니다.'
		myLikes.push(likes)
		if (current < totalLength) {
			choice()
		} else {
			choiceResult()
		}
	})
	M('#btnHate').on('click', function(){
		likes.ename = ename
		likes.result = '싫어합니다.'
		myLikes.push(likes)
		if (current < totalLength) {
			choice()
		} else {
			choiceResult()
		}
	})
	choice();
}

function choice() {
	likes = {}
	edata = data[likesList[current]]
	ename = edata['ename']
	photo = thum = edata['photo']
	current++;
	//M('#ask').text(ename.replace('을', '').replace('를', ''))
	str = ''
	str += '<img src="../img/' + photo + '" alt=""><p>' + ename.replace('을', '').replace('를', '') + '</p>'
	M('#ask').html(str)
}

function choiceResult() {
	var  str = '<li>' + M('#userName').val() + '님은 </li>'

	M('#game').css('display', 'none');
	M('#likeResult').css('display', 'block');
	for (var i=0; i<totalLength; i++) {
		n = i+1
		str += '<li>' + n + '. ' + myLikes[i]['ename'] + ' ' + myLikes[i]['result'] + '</li>';
	}
	M('#myResult').html(str)
}

function insertLikes(data, leng) {
	ranValue = Math.floor(Math.random() * data.length)
	if (likesList.length === 0) {
		likesList.push(ranValue);
		insertLikes(data, leng)
	} else {
		if (likesList.length >= leng) {
			return likesList;
		} else {
			for (var i=0; i<likesList.length; i++) {
				if (likesList[i] === ranValue) {
					return insertLikes(data, leng);
					break;
				}
			}
			
			if (likesList.length <= leng-1) {
				likesList.push(ranValue);
				return insertLikes(data, leng)
			}
		}
	}
	return likesList
	
}

function getRanNum(arr, val){
	for (var arrVal in arr) {
		val
	}
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
		,twit = ''

	data.title = '아이돌 좋아! 싫어!';
	data.url = 'http://goo.gl/n6gU3j';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	post += '[' + data.title + ']\n\n';
	post += M('#userName').val() + '님은 \n';

	twit += '[아이돌 싫어/좋아]\n';

	for (var i=0; i<totalLength; i++) {
		n = i+1
		post += n + '. ' + myLikes[i]['ename'] + ' ' + myLikes[i]['result'] + '\n';
		twit += '※ ' + myLikes[i]['ename'].replace(/을/g, '').replace(/를/g, '') + ' ' + myLikes[i]['result'].replace(/좋아합니다./g, '좋아').replace(/싫어합니다./g, '싫어') + '\n';
	}

	data.post = post;
	data.twit = twit;
	
	data.desc = '꺆~~';
	data.img = 'http://romeoh.github.io/kakaoStory/img/' + thum;

	sendData(data);
}


data = [
	{'photo':'idol1.png', 'ename':'소녀시대를'},
	{'photo':'idol2.png', 'ename':'원더걸스를'},
	{'photo':'idol3.png', 'ename':'브레이브걸스를'},
	{'photo':'idol4.png', 'ename':'포미닛을'},
	{'photo':'idol5.png', 'ename':'에프엑스를'},
	{'photo':'idol6.png', 'ename':'에이핑크를'},
	{'photo':'idol7.png', 'ename':'레인보우를'},
	{'photo':'idol8.png', 'ename':'2NE1을'},
	{'photo':'idol9.png', 'ename':'쥬얼리를'},
	{'photo':'idol10.png', 'ename':'씨야를'},
	{'photo':'idol11.png', 'ename':'다비치를'},
	{'photo':'idol12.png', 'ename':'애프터스쿨을'},
	{'photo':'idol13.png', 'ename':'티아라를'},
	{'photo':'idol14.png', 'ename':'시크릿을'},
	{'photo':'idol15.png', 'ename':'씨스타를'},
	{'photo':'idol16.png', 'ename':'쇼콜라를'},
	{'photo':'idol17.png', 'ename':'미쓰에이를'},
	{'photo':'idol18.png', 'ename':'걸스데이를'},
	{'photo':'idol19.png', 'ename':'나인뮤지스를'},
	{'photo':'idol20.png', 'ename':'달샤벳을'},
	{'photo':'idol21.png', 'ename':'카라를'},
	{'photo':'idol22.png', 'ename':'브라운아이드걸스를'},
	{'photo':'idol23.png', 'ename':'인피니트를'},
	{'photo':'idol24.png', 'ename':'엑소를'},
	{'photo':'idol25.png', 'ename':'비스트를'},
	{'photo':'idol26.png', 'ename':'B.A.P를'},
	{'photo':'idol27.png', 'ename':'씨클라운을'},
	{'photo':'idol28.png', 'ename':'뉴이스트를'},
	{'photo':'idol29.png', 'ename':'에이프린스를'},
	{'photo':'idol30.png', 'ename':'에이젝스를'},
	{'photo':'idol31.png', 'ename':'방탄소년단을'},
	{'photo':'idol32.png', 'ename':'B1A4를'},
	{'photo':'idol33.png', 'ename':'블락비를'},
	{'photo':'idol34.png', 'ename':'샤이니를'},
	{'photo':'idol35.png', 'ename':'2PM을'},
	{'photo':'idol36.png', 'ename':'2AM을'},
	{'photo':'idol37.png', 'ename':'동방신기를'},
	{'photo':'idol38.png', 'ename':'틴탑을'},
	{'photo':'idol39.png', 'ename':'씨엔블루를'},
	{'photo':'idol40.png', 'ename':'FT아일랜드를'},
	{'photo':'idol41.png', 'ename':'제국의 아이들을'},
	{'photo':'idol42.png', 'ename':'유키스를'},
	{'photo':'idol43.png', 'ename':'엠블랙을'},
	{'photo':'idol44.png', 'ename':'슈퍼주니어를'}
]

	





























