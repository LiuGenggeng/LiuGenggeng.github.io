/**
 * Created by Administrator on 2016/5/8.
 */
var vm = avalon.define({
    $id : "Gas",
    regionalName: "西南区域",
    quyuId: "XN001",
    name: "西南地区",
    id:"XNDQ",
    principal:"理理理理",
    tel:"123456789",
    otherMes:"西南区域天然气公司"
});
$(function() {
    /*先获取该区域的基本信息*/
    $.ajax({
        type: "POST",
        url: "接受区域信息地址",
        data: "区域id",
        success: function (data) {
            /*赋值语句给接口在写*/
        }
    });
    $(".changeInf form").validate({
        rules:{
            name:{
                required:true
            },
            id:{
                required:true
            },
            principal:{
                required:true
            },
            tel:{
                required:true
            }
        },
        messages:{
            name:{
                required:"请输入区域名称"
            },
            id:{
                required:"请输入区域账号"
            },
            principal:{
                required:"请输入负责人"
            },
            tel:{
                required:"请输入负责人联系方式"
            }
        },
        //当所有的表单都验证正确后，才能点击注册进行修改行为
        submitHandler:function(){
            $('.finashChange').click(function(e) {
                e.preventDefault();
                $.ajax({
                    type: "POST",
                    url: "发送修改信息地址",
                    data: $('.changeInf form').serialize(),
                    success: function () {

                    }
                })
            })
        }
    });
})