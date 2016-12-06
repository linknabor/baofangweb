var orderId = getUrlParam("oId");
avalon.ready(function() {
	
		function queryPics(){
		common.invokeApi("GET","pageconfig2/15",null,null,function(n){
			o.pics= n.result;
		},function(){
			alert("页面获取信息错误，请稍后重试！");
		})
		}
 
	
	
    common.invokeApi("POST", "/yunxiyi/notifyPayed/"+orderId);
	common.invokeApi("POST","yunxiyi/bill/"+orderId,null,null,function(n){
		o.bill=n.result;
	},function(){
		alert("订单数据获取失败，请稍后重试！");
	})
    var o = avalon.define({
        $id: "root",
		pics:[],
        bill:{},
        gotoBack:function(){
        	location.href="../index.html";
        }
    });

	queryPics();
    avalon.scan(document.body);
});