/**
 * Created by Administrator on 2016/5/8.
 */
var vm = avalon.define({
    $id : "Gas",
    company:[
        {id:"XN001002",name:"成都港华",region:"西南地区",principal:"马丽丽",tel:"1234567890",information:"西南地区天然气业务有",
            businessPer:[
                {name:"王某某",id:"XDFF34",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF34",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF34",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF34",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF34",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF34",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF34",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF34",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF34",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"}
            ]}
    ]
});
$(function() {
    /*请求所有大区*/
    var Href  = window.location.href;
    var id = Href.substring(Href.indexOf('?')+1);
    $.ajax({
        type: "POST",
        url: "公司请求地址",
        data:id,
        dataType: "json",
        success: function(data) {
            vm.regional = data.body;
        }
    });
})