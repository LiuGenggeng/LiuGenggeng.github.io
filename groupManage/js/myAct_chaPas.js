/**
 * Created by Administrator on 2016/5/8.
 */
var vm = avalon.define({
    $id : "Gas"
});
$(function() {
        $(".passWord form").validate({
            rules:{
                oldPass:{
                    required:true
                },
                newPass:{
                    required:true
                },
                reNewPass:{
                    required:true,
                    equalTo:".newPass"
                }
            },
            messages:{
                oldPass:{
                    required:"请输入旧密码"
                },
                newPass:{
                    required:"请输入新密码"
                },
                reNewPass:{
                    required:"请输入确认密码",
                    equalTo:"两次输入的密码不一致"
                }
            },
            //当所有的表单都验证正确后，才能点击注册进行修改行为
            submitHandler:function(){
                $('.finashChange').click(function(e) {
                    e.preventDefault();
                    $.ajax({
                        type: "POST",
                        url: "发送密码地址",
                        data: $('.passWord form').serialize(),
                        success: function () {

                        }
                    })
                })
            }
        });
})