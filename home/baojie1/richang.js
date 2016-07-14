avalon.ready(function() {
	function queryBanners(){
        common.invokeApi("GET","banner/10",null,null,function(n) {
            console.log(JSON.stringify(n));
            o.banners = n.result;
            initSwiper();
        },
        function() {
        })
    }
    function queryProduct(){
        common.invokeApi("GET","/serviceItem/6",null,null,function(n) {
            console.log(JSON.stringify(n));
            o.item=n.result;
            
        },
        function() {
        })
    }
        
    var o = avalon.define({
        $id: "root",
        banners:[],
        item:{price:0},
        gotoPay:function(){
            if(common.checkRegisterStatus()&&o.item.id){
                location.href="../../baojie_richang_pay.html?item="+o.item.id;
            }
        }
    });
    queryBanners();
    queryProduct();
    avalon.scan(document.body);
    common.setTitle("日常保洁");
});
