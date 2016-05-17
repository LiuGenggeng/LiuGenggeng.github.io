/**
 * Created by Administrator on 2016/5/17.
 */
var vm = avalon.define({
    $id : "Gas",
    id: "XN001",
    name: "西南地区",
    account: "xndq",
    principal: "李文靖",
    tel: "13253463",
    information: "这里是区域其他信息",
    company: [
        {name:"XXXX公司",id:"ZD332",principal:"柳伊岚",tel:"123123123",num:"32"},
        {name:"XXXX公司",id:"ZD332",principal:"柳伊岚",tel:"123123123",num:"32"},
        {name:"XXXX公司",id:"ZD332",principal:"柳伊岚",tel:"123123123",num:"32"},
        {name:"XXXX公司",id:"ZD332",principal:"柳伊岚",tel:"123123123",num:"32"},
        {name:"XXXX公司",id:"ZD332",principal:"柳伊岚",tel:"123123123",num:"32"},
        {name:"XXXX公司",id:"ZD332",principal:"柳伊岚",tel:"123123123",num:"32"}
    ],
    viewData: function() {
        var id = this.getAttribute('id');
        window.location.href = "subsidiary.html?id="+id;
    },
    setDataHref: function() {
        var id = this.getAttribute('id');
        window.location.href = "staMan_regDataChange.html?id="+id;
    },
    setPasswordHref: function() {
        var id = this.getAttribute('id');
        window.location.href = "staMan_regChangePass.html?id="+id;
    }
});
