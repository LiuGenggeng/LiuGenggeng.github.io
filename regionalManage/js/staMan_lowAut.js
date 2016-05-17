/**
 * Created by Administrator on 2016/5/8.
 */
var vm = avalon.define({
    $id : "Gas",
    gongsiId: "XN001002",
    regionalName: "西南区域"
});
$(function() {
    $(".shouQuan form").validate({
        rules:{
            name:{
                required:true
            },
            id:{
                required:true
            },
            password:{
                required:true
            },
            rePassword:{
                required:true,
                equalTo:".password"
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
            password:{
                required:"请输入密码"
            },
            rePassword:{
                required:"请输入确认密码",
                equalTo:"两次输入的密码不一致"
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
            $('.subShouquan').click(function(e) {
                e.preventDefault();
                $.ajax({
                    type: "POST",
                    url: "发送授权信息地址",
                    data: $('.shouQuan form').serialize(),
                    success: function () {

                    }
                })
            })
        }
    });
})