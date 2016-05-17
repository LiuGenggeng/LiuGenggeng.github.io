/**
 * Created by Administrator on 2016/5/8.
 */
var vm = avalon.define({
    $id : "Gas",
    regionalName : "西南区域",
    num : "XN001",
    name : "西南地区",
    id : "xndq",
    principal : "李文",
    tel : "11111111",
    information : "天然气业务有限公司西南地区天然气业务有限公司西南地区天然气业务有限公司西南地区天然气业务有限公司西南地区天然气业务有限公司西南地区天然气业务有限公司西南地区",
    subsidiary : [
        {name:"XXXX公司",num:"ZD332",principal:"李丽丽",tel:"123456678",sum:"32"},
        {name:"XXXX公司",num:"ZD332",principal:"李丽丽",tel:"123456678",sum:"32"},
        {name:"XXXX公司",num:"ZD332",principal:"李丽丽",tel:"123456678",sum:"32"},
        {name:"XXXX公司",num:"ZD332",principal:"李丽丽",tel:"123456678",sum:"32"},
        {name:"XXXX公司",num:"ZD332",principal:"李丽丽",tel:"123456678",sum:"32"},
        {name:"XXXX公司",num:"ZD332",principal:"李丽丽",tel:"123456678",sum:"32"}
    ],
    setHref: function() {
        var localNum = this.getAttribute("Id");
        window.location.href = "subsidiary.html?Num="+localNum;
    }
});
