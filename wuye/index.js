var page = 0;
avalon.ready(function() {
	function query(type){
		
		var n = "GET",
        a = "messages/"+page,
        i = null,
        e = function(n) {
			console.log(JSON.stringify(n));
			o.zixuns = n.result;
			page++;
		},
        r = function() {
        	alert("加载消息失败！");
        };
        common.invokeApi(n, a, i, null, e, r)
	}
	function getBannerType() {
        var n = "GET",
        a = "banner/"+o.bannerType,
        i = null,
        e = function(n) {
            o.banners = n.result;
        },
        r = function() {
    		alert("获取banner异常");
        };
        common.invokeApi(n, a, i, null, e, r)
    }
	
	function getAnnoucementList(){
		
		var n = "POST",
        a = "annoucement/getAnnoucementList/",
        i = null,
        e = function(n) {
			console.log(JSON.stringify(n));
			o.annoucements = n.result;
			o.annoucement_count = n.result.length;
			
        },
        r = function() {
        	//alert("加载消息失败！");
        };
        common.invokeApi(n, a, i, null, e, r)
	}
	
    var a = 0,
    o = avalon.define({
        $id: "root",
        banners:[],
        bannerType:3,
      
       jumpToDetail:function(mid) {
    	   if(mid==3){
    		   window.location.href="http://mp.weixin.qq.com/s?__biz=MzIyODI2NDM0Nw==&mid=100000005&idx=3&sn=46020924ab058382466d6899ef75ec55&scene=0&previewkey=koIZjFK%2FvSTLuEWTZbl26MwqSljwj2bfCUaCyDofEow%3D#wechat_redirect";
    	   }else if(mid==4){
    		   window.location.href="http://mp.weixin.qq.com/s?__biz=MzIyODI2NDM0Nw==&mid=100000005&idx=4&sn=eeb1642cd9ed91b40b018fab77d09567&scene=0&previewkey=koIZjFK%2FvSTLuEWTZbl26MwqSljwj2bfCUaCyDofEow%3D#wechat_redirect";
    	   }else if(mid==5){
    		   window.location.href="http://mp.weixin.qq.com/s?__biz=MzIyODI2NDM0Nw==&mid=100000005&idx=2&sn=bfcfba52f1efdade6cb03a2d498f4803&scene=0&previewkey=koIZjFK%2FvSTLuEWTZbl26MwqSljwj2bfCUaCyDofEow%3D#wechat_redirect";
    	   }else if(mid==6){
    		   window.location.href="http://mp.weixin.qq.com/s?__biz=MzIyODI2NDM0Nw==&mid=100000005&idx=1&sn=8ce7d193d50794a9645dfdae2eb03ef0&scene=0&previewkey=koIZjFK%2FvSTLuEWTZbl26MwqSljwj2bfCUaCyDofEow%3D#wechat_redirect";
       	   }else{
    		   window.location.href="message.html?messageId="+mid;
    	   }
       },
       zixuns:[],
       zixun_page:0,
       annoucements: [],
       annoucement_count :0,
       
    });
    query();
	getBannerType();
	getAnnoucementList();
    initSwiper();    
    avalon.scan(document.body),
    FastClick.attach(document.body),
    common.setTitle("社区物业");
    initWechat(['onMenuShareTimeline','onMenuShareAppMessage']);
    initShareConfig("互帮、互助、分享的社区大家庭，尽在我家大楼邻里之家!",MasterConfig.C("basePageUrl")+"wuye/index.html?v=20160229",MasterConfig.C("basePageUrl")+"/static/images/share_logo3.png","邻里趣事，快来分享");
    checkFromShare();
    
});