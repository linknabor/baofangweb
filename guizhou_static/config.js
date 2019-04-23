var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
    /uat/.test(location.origin)?'https://uat.e-shequ.com':
    'https://www.e-shequ.com';
var name='/baofang';
var namepay='/pay';

window.config = {
     //团购里面用到baseurl
     baseurl:url,
    URL:url+name+'/wechat/hexie/wechat/',
    footer:{
        wuye:url+name+'/weixin/wuye/index.html?v=20162299',
        person:url+name+'/weixin/person/index.html?v=20160229',
        home:url+name+'/weixin/home/index.html?v=20160229',
    },
    //person
    gotoGroupDetail:url+name+'/weixin/group/rgroupinvite.html?',//团购
   
     //wuye支付成功
     wuye_zhifu:{
        url:url+name+'/weixin/wuye/index.html?state=123#/payEnquiry'
    },
    // 团购success页面用团购跳集市
    group_onsalesindex:{
        url:url+name+'/weixin/group/onsalesindex.html'
    },
    //团购success团购首页
    rgrops_url :{
        url:url+name+'/weixin/group/guizhourgroups.html?v=20160229'
    }


}
