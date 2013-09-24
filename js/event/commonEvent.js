
var eventList = M.storage('event_list') || 'EVENT';


// 이벤트 리스트 처리
M.storage('event_list', eventList);
if (eventList === 'EVENT') {
	M('#btnEvent').addClass('on');
	M('#eventContainer').css('display', 'block');
	M('#replyContainer').css('display', 'none');
} else if(eventList === 'REPLY') {
	M('#btnReply').addClass('on');
	M('#eventContainer').css('display', 'none');
	M('#replyContainer').css('display', 'block');
}

// 이벤트 버튼 리스너
M('#btnEvent').on('click', function(){
	eventList = 'EVENT';
	M.storage('event_list', eventList);
	M('#btnEvent').addClass('on');
	M('#btnReply').removeClass('on');
	M('#eventContainer').css('display', 'block');
	M('#replyContainer').css('display', 'none');
})

M('#btnReply').on('click', function(){
	eventList = 'REPLY';
	M.storage('event_list', eventList);
	M('#btnReply').addClass('on');
	M('#btnEvent').removeClass('on');
	M('#eventContainer').css('display', 'none');
	M('#replyContainer').css('display', 'block');
})




