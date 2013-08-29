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

	data.title = '이모티콘 투하';
	data.url = 'http://goo.gl/lvj1TZ';

	if (media == 'talk') {
		sendData(data);
		return false;
	}

	idx = process(database)
	
	post += '[' + data.title + ']\n\n';
	post +=  database[idx];
	data.post = post;
	
	data.desc = userName + '님과 ' + database[idx]['name'] + '님의 스캔들 사건';
	data.img = 'http://romeoh.github.io/kakaoStory/images/thum/emoticon.png';

	sendData(data);
}


var emoticon1  = '';
emoticon1 += '║＼ \n';
emoticon1 += '║▒＼ \n';
emoticon1 += '║▒▒＼ \n';
emoticon1 += '║❀▒║ \n';
emoticon1 += '║❀▒║ \n';
emoticon1 += '║❀▒║ \n';
emoticon1 += '║❀▒║ \n';
emoticon1 += '║❀▒║ \n';
emoticon1 += '║❀▒║ \n';
emoticon1 += '║❀▒║ \n';
emoticon1 += '║❀▒║ \n';
emoticon1 += '▓▓▓▓ \n';
emoticon1 += '[█▓] \n';
emoticon1 += '[█▓] \n';
emoticon1 += '[█▓] 장미칼\n';

var emoticon2  = '';
emoticon2 += '|＼＿＿＿／|\n';
emoticon2 += '| ノ o　o ヽ \n';
emoticon2 += 'ミ 　 ㅗ　 ㅗ ミ \n';
emoticon2 += 'ミ 　　 　▼ 관심종자다 쏴라\n';
emoticon2 += '彡、 ＿人_ノ＼\n';
emoticon2 += '/　＿＿___/＿＿|_ )___)___/| \n';
emoticon2 += '(＿＿＿）_________(_(______|====>>>>>>>>>\n';
emoticon2 += '　|　[]　　(___( \n';
emoticon2 += '　|　　／＼　＼\n';
emoticon2 += '두두두두두두두\n';


var emoticon3  = '';
emoticon3 += '（｡･ω･｡)つ━☆・*。\n';
emoticon3 += '⊂　　 ノ 　　　・゜+.\n';
emoticon3 += '　しーＪ　　　°。+ *´¨)\n';
emoticon3 += '　　　　　　　　　.· ´¸.·*´¨) ¸.·*¨)\n';
emoticon3 += '　　　　　　　　　　(¸.·´ (¸.·\'* 뾰로롱~\n';

var emoticon4  = '';
emoticon4 += '成元　|＼＿＿＿／|\n';
emoticon4 += '　| ノ o　o　 ヽ\n';
emoticon4 += '　ミ 　 ●　 　● ミ\n';
emoticon4 += '　ミ 　　　　▼　 ミ\n';
emoticon4 += '　彡、 　 ＿人_ノ ＼\n';
emoticon4 += '/　＿＿　＿＿ノ ´>　 )\n';
emoticon4 += '(＿＿＿）　　　/(_／\n';
emoticon4 += '　|　　　　　 /\n';
emoticon4 += '　|　　／＼　＼\n';
emoticon4 += '　) (　　 )　 )\n';
emoticon4 += '( / （　 ＼\n';
emoticon4 += '　<__ )　 　 ＼＿)\n';
emoticon4 += '멍멍멍\n';

var emoticon5  = '';
emoticon5 += '　　／⌒ヽ\n';
emoticon5 += '　／　　　＼\n';
emoticon5 += '/　　　　丶 ＼\n';
emoticon5 += '( /　　　　 丶　)\n';
emoticon5 += '/　　　　　丶”\n';
emoticon5 += 'f　　　　　　i\n';
emoticon5 += '| ●　　●　 ｜\n';
emoticon5 += '|　 ▽　　　｜\n';
emoticon5 += 'ヽ＿＿ 　 　ノ\n';
emoticon5 += '丿ﾉﾉ丁丁￣l＼\n';
emoticon5 += 'く(_(_(＿L＿)ノ\n';
emoticon5 += '오징오징어\n';

var emoticon6  = '';
emoticon6 += '⊂_ヽ\n';
emoticon6 += '　 ＼＼ Λ＿Λ \n';
emoticon6 += '　　 ＼( \‘ㅅ\' ) 두둠칫\n';
emoticon6 += '　　　 >　⌒ヽ\n';
emoticon6 += '　　　/ 　 へ＼\n';
emoticon6 += '　　 /　　/　＼＼ \n';
emoticon6 += '　　 ﾚ　ノ　　 ヽ_つ\n';
emoticon6 += '　　/　/두둠칫\n';
emoticon6 += '　 /　/|\n';
emoticon6 += '　(　(ヽ\n';
emoticon6 += '　|　|、＼\n';
emoticon6 += '　| 丿 ＼ ⌒)\n';
emoticon6 += '　| |　　) /\n';
emoticon6 += '`ノ )　　Lﾉ\n';

var emoticon7  = '';
emoticon7 += '　　　　　／-　-＼\n';
emoticon7 += '　　　　／(●　●)＼\n';
emoticon7 += '　　　 ｜　(_人_)　｜\n';
emoticon7 += '　　　　＼　`⌒′ ／\n';
emoticon7 += '　　　　/⌒　　　 ＼\n';
emoticon7 += '　　　 ∩　/　　　ﾉ｜\n';
emoticon7 += '　　 ⊂ﾆ Ｙ　　 ｢｢｢|⊃\n';
emoticon7 += '　　／ヽ三) _ノ ヽ_ノ\n';
emoticon7 += '　 /　　  덤벼 ｜\n';
emoticon7 += '　｜ ＿＿_　　　/＼\n';
emoticon7 += '　 Ｖ　　 ヽ　／　 \n';
emoticon7 += '　　＼　　 |＜　　　|\n';
emoticon7 += '　　 /　　ノ　￣/　ノ\n';
emoticon7 += '　　｜　 /　　 / ／\n';
emoticon7 += '　　｜\n';

var emoticon8  = '';
emoticon8 += '             fﾆヽ \n';
emoticon8 += '　　　 |_|| \n';
emoticon8 += '　　　 |= | \n';
emoticon8 += '　　　 |_ | \n';
emoticon8 += '　　/⌒|~ |⌒i-、 \n';
emoticon8 += '　 /|　|　|　| ｜\ \n';
emoticon8 += '　｜(　(　(　(　｜\n';
emoticon8 += '　｜　　　　　 ｜ 　\n';
emoticon8 += '　 ＼　　　　　/ \n';
emoticon8 += '　 ＼　　 　 /\n';
emoticon8 += '    l     l\n';



emoticon9  = '';
emoticon9 += '      ∧＿∧ \n';
emoticon9 += '　　　 (´∀｀) \n';
emoticon9 += '　　　 (　つ　つ \n';
emoticon9 += '　　　 人　　Ｙ \n';
emoticon9 += '　　　(　ヽ　ﾉ \n';
emoticon9 += '　　 人　 Ｙ \n';
emoticon9 += '　　 (　 ヽ ﾉ \n';
emoticon9 += '　　 人　 Ｙ \n';
emoticon9 += '　　( ヽ ﾉ \n';
emoticon9 += '　 人　 ＼ \n';
emoticon9 += '　 (＿)､＿) \n';
emoticon9 += '돌돌돌\n';

var emoticon10  = '';
emoticon10 += '　▼￣＞-―-＜￣▼\n';
emoticon10 += '　　Ｙ　。 _ 。 Ｙ\n';
emoticon10 += '/＼,/ 　● Å ●）\n';
emoticon10 += '＼ ｜　 つ　 ヽつ\n';
emoticon10 += '피카피카츄\n';


emoticon11  = '';
emoticon11 += '　 ﾍ^ヽ､　 /⌒､　　_,_\n';
emoticon11 += '　 |　　￣7　 (⌒r⌒7/\n';
emoticon11 += '　 レ　　　＼_/￣＼_｣\n';
emoticon11 += '＿/　　　　　　　　 {\n';
emoticon11 += '_ﾌ　●　　　　　　　ゝ\n';
emoticon11 += '_人　　　ο　　●　 ナ\n';
emoticon11 += '　 `ト､＿　　　　　メ\n';
emoticon11 += '　　　 /　 ￣ ーィﾞ\n';
emoticon11 += '　　 〈ﾟ･｡｡｡･ﾟ 　丶\n';
　
var emoticon12  = '';
emoticon12 += '　　 +_ \n';
emoticon12 += '　　+／+|　 \n';
emoticon12 += '　　+|　|.　 \n';
emoticon12 += '　+　|　|. ∧＿∧ \n';
emoticon12 += '　,─　　＼(๑¯ิ∀¯ิ๑) \n';
emoticon12 += '　|＿＿)　+|　　ノ \n';
emoticon12 += '　|＿＿)　+|+)＿) \n';
emoticon12 += '　|＿＿)　+| \n';
emoticon12 += '　+ヽ＿)_／\n';

var emoticon13  = '';
emoticon13 += '　　　*\'``・*。 \n';
emoticon13 += '　　　 |　　　 `*。 \n';
emoticon13 += '　　,。∩　　　　* \n';
emoticon13 += '+　 (´∀｀ ) *。+゜‘ \n';
emoticon13 += '`*。 ヽ、　つ *゜* \n';
emoticon13 += '　 `・+。*・\'⊃+゜ \n';
emoticon13 += '　 ☆　　∪~。*゜ \n';
emoticon13 += '　　 `・+。*・\n';


var emoticon15  = '';
emoticon15 += '_Π___＿。 ˚ ˚ ˛ ˚ ˛ ·˛ ·˚\n';
emoticon15 += '/____＿/ ＼。˚ ˚ ˛ ˚ ˛ ·˛\n';
emoticon15 += 'l 田田｜門｜ ˚ ˛ ˚ ˛ ·\n';

emoticon16  = '';
emoticon16 += '　　 ∧,_,∧\n';
emoticon16 += '　　(`･ω･´)　 ｎ__\n';
emoticon16 += '　η ＞　 ⌒＼/ ､_∃\n';
emoticon16 += '(∃)/ ∧　　＼_/\n';
emoticon16 += '　＼_/　＼　　丶 씰룩씰룩\n';
emoticon16 += '　　　　／ 　 ﾉ\n';
emoticon16 += '　　　／ ／　／\n';
emoticon16 += '　　 (　(　〈\n';
emoticon16 += '　　　＼ ＼　＼\n';
emoticon16 += '　　 　(＿(＿＿)\n';

var emoticon17  = '';
emoticon17 += '○　　 ○┤口├　　 L┤ \n';
emoticon17 += '┬ Z│　口　　 ┐├　　　\n';
emoticon17 += '　 　　　　　　 　 \n';
emoticon17 += '　 　　　　ㅁ\n';
emoticon17 += '　 　　　　┴ ㅅH ㄱㅕㄷ├┤ \n';
emoticon17 += '　　　　　 ㅅ　ㅇ ㅅ\n';

var emoticon18  = '';
emoticon18 += '■□□□□■□□■□□□□■□□□□■\n';
emoticon18 += '■■■■■■■■■□□□□■□□□□■\n';
emoticon18 += '■□□□□■□□■□□□■□■□□□■\n';
emoticon18 += '■□□□□■■■■□□□■□□■□□■\n';
emoticon18 += '■■■■■■□□■□□■□□□□■□■\n';
emoticon18 += '□□□□□□□□□□■□□□□□□□■\n';
emoticon18 += '□□■■■■■■□□□□□□□□□□■\n';
emoticon18 += '□■□□□□□□■□□■□□□□□□□\n';
emoticon18 += '□■□□□□□□■□□■□□□□□□□\n';
emoticon18 += '□□■■■■■■□□□■■■■■■■■\n';



database = [
	emoticon1,
	emoticon2,
	emoticon3,
	emoticon4,
	emoticon5,
	emoticon6,
	emoticon7,
	emoticon8,
	emoticon9,
	emoticon10,
	emoticon11,
	emoticon12,
	emoticon13,
	emoticon15,
	emoticon16,
	emoticon17,
	emoticon18
]




































