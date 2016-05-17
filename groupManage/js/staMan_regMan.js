/**
 * Created by Administrator on 2016/5/8.
 */
var vm = avalon.define({
    $id : "Gas",
    regional : [
        {name:"西南地区",id:"XNDQ",head:"王丽丽",tel:"1234567789",number:"4"},
        {name:"西北地区",id:"ABCD",head:"柳伊岚",tel:"1234567789",number:"3"},
        {name:"东南地区",id:"XNDQ",head:"李文靖",tel:"1234567789",number:"2"},
        {name:"中部地区",id:"XNDQ",head:"刘庚",tel:"1234567789",number:"1"},
        {name:"西南地区",id:"XNDQ",head:"王丽丽",tel:"1234567789",number:"4"},
        {name:"西北地区",id:"ABCD",head:"柳伊岚",tel:"1234567789",number:"3"},
        {name:"东南地区",id:"XNDQ",head:"李文靖",tel:"1234567789",number:"2"},
        {name:"中部地区",id:"XNDQ",head:"刘庚",tel:"1234567789",number:"1"}
    ],
    setHref : function() {
        var id = this.getAttribute('id');
        window.location.href = "staMan_regData.html?id="+id;
    }
});
$(function() {
    /*请求所有大区*/
    $.ajax({
        type: "POST",
        url: "区域请求地址",
        data:"发送请求数据",
        dataType: "json",
        success: function(data) {
            vm.regional = data.body;
        }
    });
})