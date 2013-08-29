var  hash =  decodeURIComponent(window.location.hash.split('#')[1])
	,dataIdx
	,paramData = {
		'names':[],
		'charactor':[]
	}
	,platform

if (hash != 'undefined') {
	var str = ''

	paramData['names'] = hash.split('&')[0].split('=')[1].split('|')
	paramData['charactor'] = hash.split('&')[1].split('=')[1].split('|')
	
	str += '<dl>';
	str += '	<dt>[LOL 동맹현황]</dt>';
	
	for (var i=0; i<paramData['names'].length; i++) {
		str += '	<dd>이름: ' + paramData['names'][i] + ', 챔피언: ' + paramData['charactor'][i] + '</dd>';
	}
	str += '</dl>';
	M('#result')
		.css('display', '')
		.html(str)

}

window.addEventListener("DOMContentLoaded", initPage, false);
function initPage(){
	//btnStory.addEventListener('click', makeUrl, false);
	//btnKakao.addEventListener('click', executeURLLink, false);
}

function action(_data) {
	platform = _data.media
	data = {}

	data.title = 'LOL 챔피언 동맹맺기';
	data.url = 'http://goo.gl/Zr0JGC';

	if (platform == 'talk') {
		sendData(data);
		return false;
	}

	userName = document.querySelector('#userName').value
	dataIdx = Math.floor(Math.random() * database.length)
	
	if (userName == '') {
		alert('이름을 입력해 주세요.');
		return false;
	}
	
	param = setParam();
	page = 'http://romeoh.github.io/kakaoStory/html/lol.html#' + encodeURIComponent(param);
	getShortUrl(page);
}

function setParam() {
	paramData['names'].push(userName);
	paramData['charactor'].push(database[dataIdx]['name']);
	paramN = '';
	paramC = '';
	
	for (var i=0; i<paramData['names'].length; i++) {
		paramN += '|' + paramData['names'][i];
		paramC += '|' + paramData['charactor'][i];
	}
	paramN = paramN.replace('|', '');
	paramC = paramC.replace('|', '');
	return 'n=' + paramN + '&c=' + paramC;
}


//  카카오 스토리
function executeKakaoStoryLink(url){
	var  data = {}
		,post = ''

	data.title = 'LOL 챔피언 동맹맺기';
	data.url = '';
	data.media = platform;

	post += '[' + data.title + ']\n\n';
	if (hash == 'undefined') {
		post += '⇒ ' + userName + '님의 롤 챔피언은 ' + database[dataIdx]['name'] + ' 입니다.\n';
	} else {
		for (var i=0; i<paramData['names'].length; i++) {
			if (i === paramData['names'].length-1) {
				ico = '⇒ '
			} else {
				ico = ''
			}
			post += ico + paramData['names'][i] + '님의 롤 챔피언은 ' + paramData['charactor'][i] + ' 입니다.\n';
		}
	}
	post += '\n동맹맺기: ' + url + '\n';
	data.post = post;
	
	data.desc = '동맹을 맺어보아요.';
	data.img = 'http://romeoh.github.io/kakaoStory/images/lol/' + database[dataIdx]['photo'];

	sendData(data);
}


function urlParser() {
	return names.split(',');
}

function getShortUrl(url) {
	var tdata = '{"longUrl": "' + url + '"}';
	$.support.cors = true;

	$.ajax({
		url: "https://www.googleapis.com/urlshortener/v1/url",
		type: "POST",
		dataType: "json",
		data: tdata,
		contentType: "application/json",
		success: function (result) {
			var shortUrl  = result.id;
			executeKakaoStoryLink(shortUrl)
			//return ;
		},
		error : function(request,status,error) {
			//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		} 
	});
}



database = [
	{'photo':'jpeg-0.jpeg', 'name':'가렌'},
	{'photo':'jpeg-1.jpeg', 'name':'갈리오'},
	{'photo':'jpeg-2.jpeg', 'name':'갱플랭크'},
	{'photo':'jpeg-3.jpeg', 'name':'그라가스'},
	{'photo':'jpeg-4.jpeg', 'name':'그레이브즈'},
	{'photo':'jpeg-5.jpeg', 'name':'나미'},
	{'photo':'jpeg-6.jpeg', 'name':'나서스'},
	{'photo':'jpeg-7.jpeg', 'name':'노틸러스'},
	{'photo':'jpeg-8.jpeg', 'name':'녹턴'},
	{'photo':'jpeg-9.jpeg', 'name':'누누'},
	{'photo':'jpeg-10.jpeg', 'name':'니달리'},
	{'photo':'jpeg-11.jpeg', 'name':'다리우스'},
	{'photo':'jpeg-12.jpeg', 'name':'다이애나'},
	{'photo':'jpeg-13.jpeg', 'name':'드레이븐'},
	{'photo':'jpeg-14.jpeg', 'name':'라이즈'},
	{'photo':'jpeg-15.jpeg', 'name':'람머스'},
	{'photo':'jpeg-16.jpeg', 'name':'럭스'},
	{'photo':'jpeg-17.jpeg', 'name':'럼블'},
	{'photo':'jpeg-18.jpeg', 'name':'레넥톤'},
	{'photo':'jpeg-19.jpeg', 'name':'레오나'},
	{'photo':'jpeg-20.jpeg', 'name':'렝가'},
	{'photo':'jpeg-21.jpeg', 'name':'룰루'},
	{'photo':'jpeg-22.jpeg', 'name':'르블랑'},
	{'photo':'jpeg-23.jpeg', 'name':'리 신'},
	{'photo':'jpeg-24.jpeg', 'name':'리븐'},
	{'photo':'jpeg-25.jpeg', 'name':'리산드라'},
	{'photo':'jpeg-26.jpeg', 'name':'마스터 이'},
	{'photo':'jpeg-27.jpeg', 'name':'마오카이'},
	{'photo':'jpeg-28.jpeg', 'name':'말자하'},
	{'photo':'jpeg-29.jpeg', 'name':'말파이트'},
	{'photo':'jpeg-30.jpeg', 'name':'모데카이저'},
	{'photo':'jpeg-31.jpeg', 'name':'모르가나'},
	{'photo':'jpeg-32.jpeg', 'name':'문도 박사'},
	{'photo':'jpeg-33.jpeg', 'name':'미스 포츈'},
	{'photo':'jpeg-34.jpeg', 'name':'바루스'},
	{'photo':'jpeg-35.jpeg', 'name':'바이'},
	{'photo':'jpeg-36.jpeg', 'name':'베이가'},
	{'photo':'jpeg-37.jpeg', 'name':'베인'},
	{'photo':'jpeg-38.jpeg', 'name':'볼리베어'},
	{'photo':'jpeg-39.jpeg', 'name':'브랜드'},
	{'photo':'jpeg-40.jpeg', 'name':'블라디미르'},
	{'photo':'jpeg-41.jpeg', 'name':'블리츠크랭크'},
	{'photo':'jpeg-42.jpeg', 'name':'빅토르'},
	{'photo':'jpeg-43.jpeg', 'name':'뽀삐'},
	{'photo':'jpeg-44.jpeg', 'name':'사이온'},
	{'photo':'jpeg-45.jpeg', 'name':'샤코'},
	{'photo':'jpeg-46.jpeg', 'name':'세주아니'},
	{'photo':'jpeg-47.jpeg', 'name':'소나'},
	{'photo':'jpeg-48.jpeg', 'name':'소라카'},
	{'photo':'jpeg-49.jpeg', 'name':'쉔'},
	{'photo':'jpeg-50.jpeg', 'name':'쉬바나'},
	{'photo':'jpeg-51.jpeg', 'name':'스웨인'},
	{'photo':'jpeg-52.jpeg', 'name':'스카너'},
	{'photo':'jpeg-53.jpeg', 'name':'시비르'},
	{'photo':'jpeg-54.jpeg', 'name':'신 짜오'},
	{'photo':'jpeg-55.jpeg', 'name':'신드라'},
	{'photo':'jpeg-56.jpeg', 'name':'신지드'},
	{'photo':'jpeg-57.jpeg', 'name':'쓰레쉬'},
	{'photo':'jpeg-58.jpeg', 'name':'아리'},
	{'photo':'jpeg-59.jpeg', 'name':'아무무'},
	{'photo':'jpeg-60.jpeg', 'name':'아칼리'},
	{'photo':'jpeg-61.jpeg', 'name':'아트록스'},
	{'photo':'jpeg-62.jpeg', 'name':'알리스타'},
	{'photo':'jpeg-63.jpeg', 'name':'애니'},
	{'photo':'jpeg-64.jpeg', 'name':'애니비아'},
	{'photo':'jpeg-65.jpeg', 'name':'애쉬'},
	{'photo':'jpeg-66.jpeg', 'name':'엘리스'},
	{'photo':'jpeg-67.jpeg', 'name':'오공'},
	{'photo':'jpeg-68.jpeg', 'name':'오리아나'},
	{'photo':'jpeg-69.jpeg', 'name':'올라프'},
	{'photo':'jpeg-70.jpeg', 'name':'요릭'},
	{'photo':'jpeg-71.jpeg', 'name':'우르곳'},
	{'photo':'jpeg-72.jpeg', 'name':'워윅'},
	{'photo':'jpeg-73.jpeg', 'name':'이렐리아'},
	{'photo':'jpeg-74.jpeg', 'name':'이블린'},
	{'photo':'jpeg-75.jpeg', 'name':'이즈리얼'},
	{'photo':'jpeg-76.jpeg', 'name':'자르반 4세'},
	{'photo':'jpeg-77.jpeg', 'name':'자이라'},
	{'photo':'jpeg-78.jpeg', 'name':'자크'},
	{'photo':'jpeg-79.jpeg', 'name':'잔나'},
	{'photo':'jpeg-80.jpeg', 'name':'잭스'},
	{'photo':'jpeg-81.jpeg', 'name':'제드'},
	{'photo':'jpeg-82.jpeg', 'name':'제라스'},
	{'photo':'jpeg-83.jpeg', 'name':'제이스'},
	{'photo':'jpeg-84.jpeg', 'name':'직스'},
	{'photo':'jpeg-85.jpeg', 'name':'질리언'},
	{'photo':'jpeg-86.jpeg', 'name':'초가스'},
	{'photo':'jpeg-87.jpeg', 'name':'카르마'},
	{'photo':'jpeg-88.jpeg', 'name':'카사딘'},
	{'photo':'jpeg-89.jpeg', 'name':'카서스'},
	{'photo':'jpeg-90.jpeg', 'name':'카시오페아'},
	{'photo':'jpeg-91.jpeg', 'name':'카직스'},
	{'photo':'jpeg-92.jpeg', 'name':'카타리나'},
	{'photo':'jpeg-93.jpeg', 'name':'케넨'},
	{'photo':'jpeg-94.jpeg', 'name':'케이틀린'},
	{'photo':'jpeg-95.jpeg', 'name':'케일'},
	{'photo':'jpeg-96.jpeg', 'name':'코그모'},
	{'photo':'jpeg-97.jpeg', 'name':'코르키'},
	{'photo':'jpeg-98.jpeg', 'name':'퀸'},
	{'photo':'jpeg-99.jpeg', 'name':'타릭'},
	{'photo':'jpeg-100.jpeg', 'name':'탈론'},
	{'photo':'jpeg-101.jpeg', 'name':'트런들'},
	{'photo':'jpeg-102.jpeg', 'name':'트리스타나'},
	{'photo':'jpeg-103.jpeg', 'name':'트린다미어'}
]



















