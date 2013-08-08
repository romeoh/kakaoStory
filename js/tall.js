var  ua = navigator.userAgent
	,os = (/iphone|ipad|ipod/gi).test(ua) ? "ios" : 
		(/android/gi).test(ua) ? "android" :
		(/mac/gi).test(ua) ? "macOS" : 
		(/windows/gi).test(ua) ? "Windows" : "other"
	,boy = document.getElementById('boy')
	,girl = document.getElementById('girl')
	,boySelect = document.querySelector('#boyBox a')
	,girlSelect = document.querySelector('#girlBox a')
	,btnStory = document.querySelector('#btnStory')
	,btnKakao = document.querySelector('#btnKakao')
	,dataDrink, dataMount, dataAction
	,img



window.addEventListener('DOMContentLoaded', function(){
	btnStory.addEventListener('click', executeKakaoStoryLink, false);
	btnKakao.addEventListener('click', executeURLLink, false);
	boySelect.addEventListener('click', function(){
		boySelect.className = 'checked';
		girlSelect.className = '';
		selected(0)
	}, false);
	girlSelect.addEventListener('click', function(){
		boySelect.className = '';
		girlSelect.className = 'checked';
		selected(1)
	}, false);
}, false);

function selected(idx){
	var  selTall = document.querySelector('#selTall')
		,str = ''

	if (idx === 0) {
		// 남자
		str += '<option value="">나의 키를 선택하세요.</option>'
		str += '<option value="0.1">195 cm 이상</option>'
		str += '<option value="0.1">194 cm</option>'
		str += '<option value="0.2">193 cm</option>'
		str += '<option value="0.35">192 cm</option>'
		str += '<option value="0.5">191 cm</option>'
		str += '<option value="0.75">190 cm</option>'
		str += '<option value="1">189 cm</option>'
		str += '<option value="1.5">188 cm</option>'
		str += '<option value="2">187 cm</option>'
		str += '<option value="3.5">186 cm</option>'
		str += '<option value="5">185 cm</option>'
		str += '<option value="7.5">184 cm</option>'
		str += '<option value="10">183 cm</option>'
		str += '<option value="13">182 cm</option>'
		str += '<option value="16">181 cm</option>'
		str += '<option value="20">180 cm</option>'
		str += '<option value="23">179 cm</option>'
		str += '<option value="26">178 cm</option>'
		str += '<option value="30">177 cm</option>'
		str += '<option value="36">176 cm</option>'
		str += '<option value="43">175 cm</option>'
		str += '<option value="50">174 cm</option>'
		str += '<option value="56">173 cm</option>'
		str += '<option value="63">172 cm</option>'
		str += '<option value="70">171 cm</option>'
		str += '<option value="75">170 cm</option>'
		str += '<option value="80">169 cm</option>'
		str += '<option value="83">168 cm</option>'
		str += '<option value="86">167 cm</option>'
		str += '<option value="90">166 cm</option>'
		str += '<option value="92.5">165 cm</option>'
		str += '<option value="95">164 cm</option>'
		str += '<option value="96.5">163 cm</option>'
		str += '<option value="98">162 cm</option>'
		str += '<option value="98.5">161 cm</option>'
		str += '<option value="99">160 cm 이하</option>'
		selTall.innerHTML = str
	} else {
		// 여자
		str += '<option value="">나의 키를 선택하세요.</option>'
		str += '<option value="0.1">181 cm 이상</option>'
		str += '<option value="0.15">180 cm</option>'
		str += '<option value="0.2">179 cm</option>'
		str += '<option value="0.35">178 cm</option>'
		str += '<option value="0.5">177 cm</option>'
		str += '<option value="0.75">176 cm</option>'
		str += '<option value="1">175 cm</option>'
		str += '<option value="1.5">174 cm</option>'
		str += '<option value="2">173 cm</option>'
		str += '<option value="3.5">172 cm</option>'
		str += '<option value="5">171 cm</option>'
		str += '<option value="7.5">170 cm</option>'
		str += '<option value="10">169 cm</option>'
		str += '<option value="15">168 cm</option>'
		str += '<option value="20">167 cm</option>'
		str += '<option value="25">166 cm</option>'
		str += '<option value="30">165 cm</option>'
		str += '<option value="36">164 cm</option>'
		str += '<option value="43">163 cm</option>'
		str += '<option value="50">162 cm</option>'
		str += '<option value="56">161 cm</option>'
		str += '<option value="63">160 cm</option>'
		str += '<option value="70">159 cm</option>'
		str += '<option value="75">158 cm</option>'
		str += '<option value="80">157 cm</option>'
		str += '<option value="85">156 cm</option>'
		str += '<option value="90">155 cm</option>'
		str += '<option value="92.5">154 cm</option>'
		str += '<option value="95">153 cm</option>'
		str += '<option value="96.5">152 cm</option>'
		str += '<option value="98">151 cm</option>'
		str += '<option value="98.5">150 cm</option>'
		str += '<option value="99">149 cm 이하</option>'
		selTall.innerHTML = str
	}
	
}

//  카카오 스토리
function executeKakaoStoryLink(){
	var  postMsg = ''
		,selTall = document.querySelector('#selTall')
		,data
	
	if (boySelect.className != 'checked' && girlSelect.className != 'checked') {
		alert('성별을 선택해 주세요.');
		return false;
	}

	if (selTall.value == '') {
		alert('나의 키를 고르세요.');
	}
	
	
	postMsg += '[내 키는 몇%에 해당할까]\n\n';

	if (boySelect.className == 'checked') {
		// 남자일 경우
		postMsg += '내 키는 평균 남자 키에서 \n';
		postMsg += '상위 약 ' + selTall.value + '%에 속합니다.\n\n';
	} else if (girlSelect.className == 'checked') {
		// 여자일 경우
		postMsg += '내 키는 평균 여자 키에서 \n';
		postMsg += '상위 약 ' + selTall.value + '%에 속합니다.\n\n';
	}

	postMsg += 'http://goo.gl/WvTTE\n';
	
	urlMsg = {
		title: '내 키는 몇%에 해당할까',
		desc: '전체에서 ' + selTall.value + '% 입니다.',
		imageurl: ['http://romeoh.github.io/kakaoStory/img/tall.png'],
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
		msg: "내 키는 몇%에 해당할까",
		url: "http://goo.gl/WvTTE",
		appid: "funnyApp",
		appver: "1.0",
		appname: "깨알유머:",
		type: "link"
	});
}



































