/**
 * Created by Administrator on 2016/5/17.
 */
var vm = avalon.define({
    $id : "Gas",
    regId: "ZD332",
    name: "西南区域",
    id: "xndq",
    principal: "李丽丽",
    tel: "123456678",
    otherMes: "这里是其他信息哦",
    changePassword: function(e) {
        e.preventDefault();
        var Href  = window.location.href;
        var id = Href.substring(Href.indexOf('?')+1);
        window.location.href = "staMan_regChangePass.html?"+id;
    }
});