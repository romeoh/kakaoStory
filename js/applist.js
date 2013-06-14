var appList = ''
appList += '<li data-app="42"><a href="http://goo.gl/ZojeN">두시탈출 컬투쇼 베스트 사연 모음</a></li>';
appList += '<li data-app="41"><a href="http://goo.gl/CZsWG">막장드라마</a></li>';
appList += '<li data-app="40"><a href="http://goo.gl/en4KS">내 자녀수 알아보기</a></li>';
appList += '<li data-app="39"><a href="http://goo.gl/Aa6wS">키스데이, 누구와 키스하나</a></li>';
appList += '<li data-app="38"><a href="http://goo.gl/gSloK">자기 사용설명서</a></li>';
appList += '<li data-app="37"><a href="http://goo.gl/VOm5Z">날짜 계산기</a></li>';
appList += '<li data-app="36"><a href="http://goo.gl/Ppey0">인디언식 이름 짓기</a></li>';
appList += '<li data-app="35"><a href="http://goo.gl/PPYbq">빵터지는 카톡 실수모음</a></li>';
appList += '<li data-app="34"><a href="http://goo.gl/fF9We">연예인 시구 월드컵</a></li>';
appList += '<li data-app="33"><a href="http://goo.gl/IJ4B5">내반쪽 찾기</a></li>';
appList += '<li data-app="32"><a href="http://goo.gl/iNzJa">혈액형 궁합</a></li>';
appList += '<li data-app="31"><a href="http://goo.gl/w62nY">로또 번호 생성기</a></li>';
appList += '<li data-app="30"><a href="http://goo.gl/eUdjn">명품 월드컵</a></li>';
appList += '<li data-app="29"><a href="http://goo.gl/nzwC5">내이름 연상단어</a></li>';
appList += '<li data-app="28"><a href="http://goo.gl/MVQ5y">받고싶은 생일선물</a></li>';
appList += '<li data-app="27"><a href="http://goo.gl/CRHWi">연예인 월드컵</a></li>';
appList += '<li data-app="26"><a href="http://goo.gl/yuAkj">3년뒤 나의 외제차</a></li>';
appList += '<li data-app="25"><a href="http://goo.gl/Vbd2u">3년뒤 마이카</a></li>';
appList += '<li data-app="24"><a href="http://goo.gl/fZCtx">내 애인 그려보기</a></li>';
appList += '<li data-app="23"><a href="http://goo.gl/8ns8E">내가 세상에 태어난 이유</a></li>';
appList += '<li data-app="22"><a href="http://goo.gl/LR7Lf">별자리+혈액형 성격테스트</a></li>';
appList += '<li data-app="21"><a href="http://goo.gl/HaHyR">나의 롤모델 </a></li>';
appList += '<li data-app="20"><a href="http://goo.gl/TxVbO">나에게 어울리는 예능캐릭터</a></li>';
appList += '<li data-app="19"><a href="http://goo.gl/u3vjV">손가락 루이16세</a></li> ';
appList += '<li data-app="18"><a href="http://goo.gl/wb8IF">섹시한여성을 봤을때 당신의 행동은? </a></li> ';
appList += '<li data-app="17"><a href="http://goo.gl/bOJ1a">커피로 알아보는 연예 심리테스트 </a></li> ';
appList += '<li data-app="16"><a href="http://goo.gl/DC9X8">알파벳 심리테스트</a></li> ';
appList += '<li data-app="15"><a href="http://goo.gl/r66cA">색깔로 알아보는 심리테스트</a></li> ';
appList += '<li data-app="14"><a href="http://goo.gl/lzbc5">나의 매력 포인트</a></li>';
appList += '<li data-app="13"><a href="http://goo.gl/VbOvP">내 이상형의 조건</a></li>';
appList += '<li data-app="12"><a href="http://goo.gl/37cx7">1:100 기출문제</a></li>';
appList += '<li data-app="11"><a href="http://goo.gl/Vm86D">원데이 명언</a></li>';
appList += '<li data-app="10"><a href="http://goo.gl/urccj">우리 부부는 전생에 무슨 관계였나</a></li>';
appList += '<li data-app="9"><a href="http://goo.gl/dfrtm">내애인과 나는 전생에 무슨 관계였나</a></li>';
appList += '<li data-app="8"><a href="http://goo.gl/KRPGi">내아기와 나는 전생에 무슨 관계였나</a></li>';
appList += '<li data-app="7"><a href="http://goo.gl/uxpnz">내아기 전생 알아보기</a></li>';
appList += '<li data-app="6"><a href="http://goo.gl/D9B88">10년뒤 내 아기모습</a></li>';
appList += '<li data-app="5"><a href="http://goo.gl/BCCnn">나의 주량 알아보기</a></li>';
appList += '<li data-app="4"><a href="http://goo.gl/FSBT3">나와 스캔들날 연예인</a></li>';
appList += '<li data-app="3"><a href="http://goo.gl/1945x">닮<span style="color:red">을</span>꼴 연예인 찾기</a></li>';
appList += '<li data-app="2"><a href="http://goo.gl/QWPHM">냉철한 대기업 인재 사냥꾼</a></li>';
appList += '<li data-app="1"><a href="http://goo.gl/RPVB5">나와 커피마시고 싶어하는 연예인</a></li>';

if (M('[data-list]').selector.length > 0) {
	var currentApp = M('[data-list]').data('list')
	M('[data-list]').html(appList);
	M('[data-app="' + currentApp + '"]').remove();
}



var appListMin = ''
appListMin += '<li data-app-min="8"><a href="http://goo.gl/ZojeN">두시탈출 컬투쇼 베스트 사연 모음</a></li>';
appListMin += '<li data-app-min="7"><a href="http://goo.gl/CZsWG">막장드라마</a></li>';
appListMin += '<li data-app-min="6"><a href="http://goo.gl/en4KS">내 자녀수 알아보기</a></li>';
appListMin += '<li data-app-min="5"><a href="http://goo.gl/Aa6wS">키스데이, 누구와 키스하나</a></li>';
appListMin += '<li data-app-min="4"><a href="http://goo.gl/gSloK">자기 사용설명서</a></li>';
appListMin += '<li data-app-min="3"><a href="http://goo.gl/VOm5Z">날짜 계산기</a></li>';
appListMin += '<li data-app-min="2"><a href="http://goo.gl/Ppey0">인디언식 이름 짓기</a></li>';
appListMin += '<li data-app-min="1"><a href="http://goo.gl/PPYbq">빵터지는 카톡 실수모음</a></li>';
appListMin += '<li data-app-min=""><a href="http://goo.gl/iNzJa">혈액형 궁합</a></li>';
appListMin += '<li data-app-min=""><a href="http://goo.gl/MVQ5y">받고싶은 생일선물</a></li>';
appListMin += '<li data-app-min=""><a href="http://goo.gl/CRHWi">연예인 월드컵</a></li>';
appListMin += '<li data-app-min=""><a href="http://goo.gl/yuAkj">3년뒤 나의 외제차</a></li> ';
appListMin += '<li data-app-min=""><a href="http://goo.gl/fZCtx">내 애인 그려보기</a></li>';
appListMin += '<li data-app-min=""><a href="http://goo.gl/LR7Lf">별자리+혈액형 성격테스트</a></li>';
appListMin += '<li data-app-min=""><a href="http://goo.gl/TxVbO">내가하면 더 잘할 예능캐릭터</a></li>';
appListMin += '<li data-app-min=""><a href="http://goo.gl/lzbc5">나의 매력 포인트</a></li>';
appListMin += '<li data-app-min=""><a href="http://goo.gl/VbOvP">내 이상형의 조건</a></li>';
appListMin += '<li data-app-min=""><a href="http://goo.gl/FSBT3">나와 스캔들날 연예인</a></li>';
appListMin += '<li data-app-min=""><a href="http://goo.gl/1945x">닮<span style="color:red">을</span>꼴 연예인 찾기</a></li>';
appListMin += '<li data-app-min=""><a href="http://goo.gl/QWPHM">냉철한 대기업 인재 사냥꾼</a></li>';
appListMin += '<li data-app-min=""><a href="http://goo.gl/RPVB5">나와 커피마시고 싶어하는 연예인</a></li>';

if (M('[data-list-min]').selector.length > 0) {
	var currentApp = M('[data-list-min]').data('list-min');
	M('[data-list-min]').html(appListMin);
	M('[data-app-min="' + currentApp + '"]').remove();
}


var bannerData;
function showad() {
	bannerData = dataBanner[Math.floor(Math.random() * dataBanner.length)]
	if (M('#goStore').selector.length != 0) {
		return false;
	}
	M('body').append('div', {
		'id': 'goStore'
	})
	M('#goStore').html('<iframe src="'+bannerData['url']+'"></iframe>')
}

function closeBanner(){
	M('#goStore').animate({
		'opacity':'0'
	})
	console.log('closeBanner()')
}

function goStore() {
	M('#goStore').animate({
		'opacity':'0'
	})
	window.location.href = bannerData['link']
	console.log('goStore()')
}

dataBanner = [
	{'url': 'bnnr_hippop.html', 'link': 'http://goo.gl/NBHk9'}
]









