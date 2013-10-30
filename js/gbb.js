var  hash = window.location.hash.replace('#', '')
	,frame = 0

window.addEventListener('DOMContentLoaded', function(){
	if (hash === '') {
		// 공격전용
		return false;
	}
	M('#dettack').css('display', 'block');
	countGbb()
}, false);

function countGbb() {
	var frameId = setInterval(function() {
		if (frame === 0) {
			txt = '가위~'
		} else if (frame === 1) {
			txt = '바위~'
		} else if (frame === 2) {
			txt = '보!!';
			clearInterval(frameId);
		}
		M('#msg')
			.text(txt)
			.css('opacity', '1')
			.css('scale', '1')
		
		setTimeout(function(){
			M('#msg').animate({
				'opacity': 0,
				'scale': '2',
				'time': '.1s'
			}, function(){
				resultGbb()
			});
		}, 800)
		frame++
	}, 1000)
}

function resultGbb() {
	if (frame === 3) {
		setTimeout(function(){
			var  rst
				,yougbb = process(1, 4)+''

			M('#you img')
				.attr('src', '../imgApp/youg' + yougbb + '.png')
				.next()
				.text('친구')
			M('#my img')
				.attr('src', '../imgApp/myg' + hash + '.png')
				.next()
				.text('나')
			
			if (yougbb === '1') {
				if (hash === '1') {
					rst = '비겼습니다.'
				} else if (hash === '2') {
					rst = '이겼습니다.'
				} else if (hash === '3') {
					rst = '졌습니다.'
				}
			} else if (yougbb === '2') {
				if (hash === '1') {
					rst = '졌습니다.'
				} else if (hash === '2') {
					rst = '비겼습니다..'
				} else if (hash === '3') {
					rst = '이겼습니다.'
				}
			} else if (yougbb === '3') {
				if (hash === '1') {
					rst = '이겼습니다.'
				} else if (hash === '2') {
					rst = '졌습니다.'
				} else if (hash === '3') {
					rst = '비겼습니다..'
				}
			}
			M('#msg')
			.text(rst)
			.css('opacity', '1')
			.css('scale', '1')
		}, 500)

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

	data.title = '가위! 바위! 보!';
	data.url = 'http://goo.gl/BHqxmx';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	post += '[' + data.title + ']\n\n';
	post += '나랑 가위!바위!보! 한번해~\n';
	post += '안내면 술래~ 가위! 바위! 보!!!\n\n';
	post += '① 가위: http://goo.gl/LZCE0L\n'
	post += '② 바위: http://goo.gl/3Abysh\n'
	post += '③ 보: http://goo.gl/XW5jSR\n\n'
	post += '※ 가위, 바위, 보 중에 하나를 선택하세요.';
	data.post = post;
	
	data.desc = '다함께! 가위바위보!!';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/gbb.png';

	sendData(data, '1');
}



































