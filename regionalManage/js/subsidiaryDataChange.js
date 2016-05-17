/**
 * Created by Administrator on 2016/5/10.
 */
var vm = avalon.define({
    $id : "Gas",
    regionalName:"西南区域",
    companyId: "ZD332",
    name: "西南区域",
    id: "xndq",
    principal: "李丽丽",
    tel: "123456678",
    otherMes: "这里是其他信息哦",
    setDataHref: function() {
        var dataHref = this.getAttribute("Id");
        window.location.href = "subsidiaryDataChange.html?Num="+dataHref;
    },
    changePassword: function(e) {
        e.preventDefault();
        var Href  = window.location.href;
        var num = Href.substring(Href.indexOf('?')+1);
        window.location.href = "subsidiaryChangePass.html?"+num;
    }
});