if(0<M("[data-list]").selector.length){var currentApp=M("[data-list]").data("list"),alist=appList,savedName=M.storage("io.github.romeoh.user.name"),nameStr0=savedName,nameStr1=uniValue(savedName)?savedName+"\uc740":savedName+"\ub294",nameStr2=uniValue(savedName)?savedName+"\uacfc":savedName+"\uc640";savedName&&(alist=appList.replace(/@\ub098\ub294@/g,"@"+nameStr1+"@").replace(/@\ub098\uc5d0\uac8c@/g,"@"+nameStr0+"\uc5d0\uac8c@").replace(/@\ub2f9\uc2e0\uc758@/g,"@"+nameStr0+"\uc758@").replace(/@\ub098\uc758@/g,
"@"+nameStr0+"\uc758@").replace(/@\ub098\uc640@/g,"@"+nameStr2+"@").replace(/@\ub0b4@/g,"@"+nameStr0+"@").replace(/@\ub9d0\uad04\ub7c9\uc774@/g,"@"+nameStr0+"@"));alist=alist.replace(/@/g,"");M("[data-list]").html(alist);M('[data-app="'+currentApp+'"]').prepend("span",{className:"ico sel"});M("#eventContainer").before("div",{className:"listbox"}).before("a",{id:"viewCategory"});var category=M.storage("io.github.romeoh.user.category")||"all",str="",categoryText;M.storage("io.github.romeoh.user.category",
category);"all"===category?M("[data-page]").css("display","block"):(M("[data-page]").css("display","none"),M("[data-"+category+"]").css("display","block"));M("[data-new]").css("display","block");str+="<ul>";str+='<li data-category="all">\ubaa8\ub450</li>';str+='<li data-category="hot">\uc778\uae30</li>';str+='<li data-category="recommand">\ucd94\ucc9c</li>';str+='<li data-category="me">\uc790\uae30\uc560</li>';str+='<li data-category="love">\uc5f0\uc560</li>';str+='<li data-category="game">\uac8c\uc784</li>';
str+='<li data-category="fun">\uc7ac\ubbf8</li>';str+='<li data-category="heart">\uc2ec\ub9ac\ud14c\uc2a4\ud2b8</li>';str+="</ul>";M(".listbox").html(str);categoryText=M('[data-category="'+category+'"]').addClass("sel").text();M("#viewCategory").addClass("btn_rlist").data("isopen","false").text(categoryText).on("click",listBoxListener);M("[data-category]").on("click",function(a,c){M("[data-category]").removeClass("sel");category=c.addClass("sel").data("category");M("#viewCategory").removeClass("sel").data("isopen",
"false").text(c.text());M(".listbox").css("display","none");M.storage("io.github.romeoh.user.category",category);M("[data-page]").css("display","none");"all"===category?M("[data-page]").css("display","block"):M("[data-"+category+"]").css("display","block");M("[data-new]").css("display","block")})}var eventList=M.storage("event_list")||"EVENT";M.storage("event_list",eventList);
"EVENT"===eventList?(M("#btnEvent").addClass("on"),M("#eventContainer").css("display","block"),M("#replyContainer").css("display","none")):"REPLY"===eventList&&(M("#btnReply").addClass("on"),M("#eventContainer").css("display","none"),M("#replyContainer").css("display","block"),M("#viewCategory").css("display","none"));
M("#btnEvent").on("click",function(){eventList="EVENT";M.storage("event_list",eventList);M("#btnEvent").addClass("on");M("#btnReply").removeClass("on");M("#eventContainer").css("display","block");M("#replyContainer").css("display","none");M("#viewCategory").css("display","block")});
M("#btnReply").on("click",function(){eventList="REPLY";M.storage("event_list",eventList);M("#btnReply").addClass("on");M("#btnEvent").removeClass("on");M("#eventContainer").css("display","none");M("#replyContainer").css("display","block");M("#viewCategory").css("display","none");M("#viewCategory").removeClass("sel");M(".listbox").css("display","none")});
function listBoxListener(a,c){"false"===M("#viewCategory").data("isopen")?(M("#viewCategory").data("isopen","true").addClass("sel"),M(".listbox").css("display","block")):(M("#viewCategory").data("isopen","false").removeClass("sel"),M(".listbox").css("display","none"))}M("#btnMacao").on("click",function(){window.location.href="http://goo.gl/HMF8gs"});M("#btnMain").on("click",function(){randomUrl()});
function randomUrl(){idx=getRandom(1,totalApp);url=M('[data-app="'+idx+'"]').first().attr("href");window.location.href=url}function getRandom(a,c){return Math.floor(Math.random()*(c-a)+a)}eventTxt=['<a href="http://goo.gl/A2UOmW">\uae68\uc720 \ud398\uc774\uc2a4\ubd81 \ud398\uc774\uc9c0 \uc624\ud508\ud588\ub2e8\uae68\uc720~</a>'];M("nav").css("display","block").html(eventTxt[0]);
M("#userName").on("change",function(a,c){M.storage("io.github.romeoh.user.name",c.val())}).val(M.storage("io.github.romeoh.user.name")||"");M("#boyBox a").on("click",function(){M("#boyBox a").addClass("checked");M("#girlBox a").removeClass("checked")});M("#girlBox a").on("click",function(){M("#boyBox a").removeClass("checked");M("#girlBox a").addClass("checked")});M("#btnStory").on("click",function(){validation({media:"story"})});M("#btnTwitter").on("click",function(){validation({media:"twitter"})});
M("#btnFacebook").on("click",function(){validation({media:"facebook"})});M("#btnMe2day").on("click",function(){validation({media:"me2day"})});M("#btnKakao").on("click",function(){action({media:"talk"})});
function validation(a){a=a||{};M.storage("io.github.romeoh.user.platform",a.media);if(0<M("#boyBox a").selector.length){if(!M("#boyBox a").hasClass("checked")&&!M("#girlBox a").hasClass("checked"))return alert("\uc131\ubcc4\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694."),!1;M("#boyBox a").hasClass("checked")?a.sexType="boy":M("#girlBox a").hasClass("checked")&&(a.sexType="girl")}if(0<M("#userName").selector.length){if(""===M("#userName").val())return alert("\uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),
!1;a.userName=M("#userName").val()}if(0<M("#selColor").selector.length){if("-1"===M("#selColor").val())return alert("\uc88b\uc544\ud558\ub294 \uc0c9\uc0c1\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694."),!1;a.color=M("#selColor").val()}if(0<M("#selAlpha").selector.length){if("-1"===M("#selAlpha").val())return alert("\ub5a0\uc624\ub974\ub294 \uc54c\ud30c\ubcb3\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694."),!1;a.alphabet=M("#selAlpha").val()}if(0<M("#selCoffee").selector.length){if("-1"===M("#selCoffee").val())return alert("\ucee4\ud53c\ub97c \uc8fc\ubb38\ud574 \uc8fc\uc138\uc694."),
!1;a.coffee=M("#selCoffee").val()}if(0<M("#userAge").selector.length){if(""===M("#userAge").val())return alert("\uc0dd\ub144\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),!1;a.bornYear=M("#userAge").val()}if(0<M("#selYear").selector.length){if("-1"===M("#selYear").val())return alert("\uc0dd\ub144\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694."),!1;a.bornYear=M("#selYear").val()}if(0<M("#selMonth").selector.length){if("-1"===M("#selMonth").val())return alert("\ud0dc\uc5b4\ub09c \ub2ec\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),
!1;a.bornMonth=M("#selMonth").val()}if(0<M("#selDate").selector.length){if("-1"===M("#selDate").val())return alert("\ud0dc\uc5b4\ub09c \ub0a0\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),!1;a.bornDate=M("#selDate").val()}if(0<M("#selBlood").selector.length){if("-1"===M("#selBlood").val())return alert("\ud608\uc561\ud615\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),!1;a.blood=M("#selBlood").val()}if(0<M("#selSex").selector.length){if("-1"===M("#selSex").val())return alert("\uc131\ubcc4\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),
!1;a.sexType=M("#selSex").val()}if(0<M("#selActor").selector.length){if("-1"===M("#selActor").val())return alert("\uc0c1\ub300\uc5f0\uae30\uc790\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),!1;a.actor=M("#selActor").val()}if(0<M("#selTall").selector.length){if("-1"===M("#selTall").val())return alert("\ub098\uc758 \ud0a4\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),!1;a.tall=M("#selTall").val()}if(0<M("#selIndian").selector.length){if("-1"===M("#selIndian").val())return alert("\uc778\ub514\uc548 \ubd80\uc871\uc744 \uace0\ub974\uc138\uc694."),
!1;a.indian=M("#selIndian").val()}action(a)}function uniValue(a){if(a){a=a.substr(a.length-1).charCodeAt(0)-44032;var c=a%28;parseInt((a-c)/28%21,10);return 0===c?!1:!0}}var bannerData;function showad(){}function closeBanner(){M("#goStore").animate({opacity:"0",time:".3s"},function(a,c){c.css("display","none")});console.log("closeBanner()")}function goStore(){window.location.href=bannerData.link;console.log("goStore()")}
dataBanner=[{url:"bnnr_hippop.html",link:"http://goo.gl/BNYgT"},{url:"bnnr_buam.html",link:"http://goo.gl/WrRJr"},{url:"bnnr_dance.html",link:"http://goo.gl/otEy6"},{url:"bnnr_alice.html",link:"http://goo.gl/qldVb"}];
function sendData(a){var c=a||{},e=c.media||"story",f=c.id||"gaeyou",g=c.ver||"1.0",l=c.app||"\uae68\uc54c\uc720\uba38:",m=c.title||"",h=c.url||"";if("talk"==e)return m=c.msg||m||"",kakao.link("talk").send({msg:m,url:h,appid:f,appver:g,appname:l,type:"link"}),test="\u2665\u2665 [\uce74\ud1a1\uce5c\uad6c \ucd08\ub300] \u2665\u2665\n",test+="appId: "+f+"\n",test+="appVersion: "+g+"\n",test+="appName: "+l+"\n",test+="msg: \n",test+="-----------\n",test+=m+"\n",test+="-----------\n",test+="url: "+h+"\n",
test+="--------------------------------------------\n",console.log(test),!1;if("story"==e){var e=c.post||"",d=c.desc||"",c=c.img||"",k={title:m,desc:d,imageurl:[c],type:"article"},e=e+"\n\n"+h;kakao.link("story").send({appid:f,appver:g,appname:l,post:e,urlinfo:M.json(k)});test="\u2665\u2665 [\uce74\uc2a4\ub85c \uacf5\uc720] \u2665\u2665\n";test+="appId: "+f+"\n";test+="appVersion: "+g+"\n";test+="appName: "+l+"\n";test+="post: \n";test+="-----------\n";test+=e+"\n";test+="-----------\n";test+="title: "+
m+"\n";test+="desc: "+d+"\n";test+="img: "+c+"\n";test+="--------------------------------------------\n";console.log(test);return!1}if("twitter"==e)return d="",e=c.twit||c.post||"",f=h.length+5,g=e.length+f+1,c=140,twit=g>=c?e.substr(0,c-f)+"...\n"+h:e+"\n"+h,twit=twit.replace(/\n\n/g,"\n"),d=d+"https://twitter.com/intent/tweet?text="+encodeURIComponent(twit),top.location.href=d,test="\u2665\u2665 [\ud2b8\uc704\ud130\ub85c \uacf5\uc720] \u2665\u2665\n",test+="twit: \n",test+="-----------\n",test+=
twit+"\n",test+="-----------\n",console.log(test),!1;if("me2day"==e)return d="",e=c.twit||c.post||"",l=c.tag||"\ubbf8\ud22c\ub370\uc774\ub97c \ub354 \uc7ac\ubbf8\uc788\uac8c \uae68\uc54c\uc720\uba38 SNS \ud14c\uc2a4\ud2b8 \uc2ec\ub9ac\ud14c\uc2a4\ud2b8",f=h.length+5,g=e.length+f+1,c=150,me2=g>=c?e.substr(0,c-f)+"...\n"+h:e+"\n"+h,me2=me2.replace(/\n\n/g,"\n"),d+="http://me2day.net/posts/new",d+="?new_post[body]=",d+=encodeURIComponent(me2),d+="&new_post[tags]=",d+=encodeURIComponent(l),top.location.href=
d,test="\u2665\u2665 [\ubbf8\ud22c\ub370\uc774\ub85c \uacf5\uc720] \u2665\u2665\n",test+="post: \n",test+="-----------\n",test+=me2+"\n",test+="-----------\n",console.log(test),!1;if("facebookSharer"==e)return e=c.post||"",c=c.img||"",d="http://www.facebook.com/sharer.php",d+="?s=100",d+="&p[title]="+encodeURIComponent(e.replace(/\[.+\]/g,"")),d+="&p[summary]="+encodeURIComponent(m),d+="&p[url]="+encodeURIComponent(h),d+="&p[images][0]="+encodeURIComponent(c),top.location.href=d,!1;if("facebook"==
e)return M("body").prepend("script",{src:"https://connect.facebook.net/en_US/all.js",type:"text/javascript",id:"facebookScript"}),M("#facebookScript").on("load",function(c,e){var d=a||{},f=d.mode||"real",g=d.feed||"feed",m=d.method||"post",l=d.photo||d.img||"",k=d.post||"",d=d.scope||"publish_actions, user_photos",n={},k=k+"\n\n"+h;"feed"==g?n={message:k,picture:l}:"photo"==g&&(n={message:k,url:l});FB.init({appId:"real"==f?"575459299155222":"199304076906232",channelUrl:"//WWW.YOUR_DOMAIN.COM/channel.html",
status:!0,cookie:!0,xfbml:!0});FB.login(function(a){a.authResponse&&FB.api(/me/+g,m,n,function(a){console.log(a);!a||a.error?alert("\uc8c4\uc1a1\ud569\ub2c8\ub2e4.\n\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."):alert("\ud398\uc774\uc2a4\ubd81\uc5d0 \ub4f1\ub85d \ub418\uc5c8\uc2b5\ub2c8\ub2e4.")})},{scope:d});test="\u2665\u2665 [\ud398\uc774\uc2a4\ubd81\uc73c\ub85c \uacf5\uc720] \u2665\u2665\n";test+="feed: "+g+"\n";test+="method: "+m+"\n";test+="photo: "+l+"\n";test+="message: \n";test+=
"-----------\n";test+=k+"\n";test+="-----------\n";console.log(test)}),!1;if("band"==e)return k="",e=c.post||"",f=h.length+3,g=e.length+f+1,c=300,bandPost+="["+l+"]\n",bandPost+=m+": "+e,b=g>=c?bandPost.substr(0,c-f)+"..."+h:bandPost+" "+h,k=k+"bandapp://create/post?text="+encodeURIComponent(bandPost),k+="#Intent;package=com.nhn.android.band;end;",top.location=d,!1}
function process(a,c){return"object"===getDataType(a)||"array"===getDataType(a)?Math.floor(Math.random()*a.length):Math.floor(Math.random()*(c-a)+a)}function shuffle(a,c){var e=a.length;c=c||e;for(var f,g;0<e;)g=Math.floor(Math.random()*e),e--,f=a[e],a[e]=a[g],a[g]=f;a.length=c;return a}
function getDataType(a){if("string"===typeof a)return"string";if("number"===typeof a)return"number";if(a.constructor===Object)return"object";if(a.constructor===Array)return"array";if(a.constructor===Function)return"function";if(a.constructor===Boolean)return"boolean"}
if(0<M("#snsBox").selector.length){var appNo=M("[data-list]").data("list"),appName=M('[data-app="'+appNo+'"]').data("page");M("#snsBox").append("div",{className:"fb-like"});M(".fb-like").data("href","http://romeoh.github.io/kakaoStory/html/"+appName+".html").data("width","450").data("layout","button_count").data("showFaces","true").data("send","true")}
(function(a,c,e){var f=a.getElementsByTagName(c)[0];a.getElementById(e)||(a=a.createElement(c),a.id=e,a.src="//connect.facebook.net/ko_KR/all.js#xfbml=1&appId=519730578083610",f.parentNode.insertBefore(a,f))})(document,"script","facebook-jssdk");