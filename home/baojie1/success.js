avalon.ready(function() {
	
	
	function queryPics(){
		common.invokeApi("GET","pageconfig2/15",null,null,function(n){
			o.pics= n.result;
		},function(){
			alert("页面获取信息错误，请稍后重试！");
		})
		}
 
	
	
	
	function getBillId(){
		o.billId=getUrlParam("oId");
	}
	function query(){
		common.invokeApi("GET","/baojie/get/"+o.billId,null,null,
		function(n){
			console.log(JSON.stringify(n));
			o.bill=n.result;
		},
		function(){
			alert('获取订单信息失败，返回首页！')
	    });
	}
		
		var o = avalon.define({
        $id: "root",
    	bill:{},
		pics:[],
        billId:"",
		});
	getBillId();
	query();
	queryPics();
	avalon.scan(document.body);
    common.setTitle("预约成功");
});