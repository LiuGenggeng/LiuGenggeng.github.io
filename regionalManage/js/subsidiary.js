/**
 * Created by Administrator on 2016/5/8.
 */
var vm = avalon.define({
    $id : "Gas",
    regionalName:"西南区域",
    company:[
        {id:"ZD332",name:"成都港华",region:"西南地区",principal:"马丽丽",tel:"1234567890",information:"西南地区天然气业务有",
            businessPer:[
                {name:"王某某",id:"XDFF34",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF35",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF36",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF37",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF38",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF39",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF310",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF311",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"},
                {name:"王某某",id:"XDFF312",sex:"男",tel:"123456789123",email:"123#123.com",job:"业务员"}
            ]}
    ],
    setDataHref: function() {
        var dataHref = this.getAttribute("Id");
        window.location.href = "subsidiaryDataChange.html?Num="+dataHref;
    },
    setPasswordHref: function() {
        var dataHref = this.getAttribute("Id");
        window.location.href = "subsidiaryChangePass.html?Num="+dataHref;
    }
});
