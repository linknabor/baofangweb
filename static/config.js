var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
    /uat/.test(location.origin)?'https://uat.e-shequ.com':
    'https://www.e-shequ.com';
var name='/baofang';
var namepay='/baofang/weixin';
window.config={
     
    //公共的请求地址
         URL:url+name+'/wechat/hexie/wechat/',
    //公共的底部跳转
    footer:{
        wuye:url+name+'/weixin/wuye/index.html?v=20162299',
        person:url+name+'/weixin/person/index.html?v=20160229',
        home:url+name+'/weixin/home/index.html?v=20160229',
    },
    //现金券
    person_coupons:{
        coupon:url+name+'/weixin/group/onsalesindex.html',
    },
    //person跳转支付页
    person_zhifu:{
        orderpays:url+namepay+'/guizhouorderpay.html?state=123#/repairPay?',//跳转支付
        comment:url+namepay+'/guizhouorderpay.html?state=123#/commentxiu',//跳转评论
        order:url+namepay+'/guizhouorderpay.html?start=123#/',//全部订单
        grouporders:url+namepay+'/guizhouorderpay.html?start=123#/grouporders',//团购订单
        homeorders:url+namepay+'/guizhouorderpay.html?start=123#/homeorders',//服务订单
    },
    //报修
    person_repair:{
        url:url+name+'/weixin/wuye/index.html?state=123#/butler?category=2',//报修
        fuwux:url+name+'/weixin/wuye/index.html?state=123#/butler?category=0',//服务需求 
        butler:url+name+'/weixin/wuye/index.html?state=123#/butler?category=1',//建议
    },
     //物业绑定房子
     house_domain: {
        domain:/127|test/.test(location.origin)?'test.e-shequ.com':
        /uat/.test(location.origin)?'at.e-shequ.com':
        'www.e-shequ.com'
    },
    //物业支付跳转
    wuye_payment:{
        payment:url+namepay+'/guizhouwuyepay.html?#/?'//物业支付成功跳转
    },

    //保洁
    home_baojie:{
        url1:url+namepay+'/guizhoubaojiepay.html?v=20160229/order',//支付订单
        url2:url+namepay+'/guizhoubaojiepay.html?v=20160229/'//立即预约
    },
    

    



   
}

