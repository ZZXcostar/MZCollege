/**
 * Created by Administrator on 2017/5/9.
 */
$(function(){
    $("#form").validate({ //插件获取的是name值
        wrapper:"li",//将默认的label 包裹在li标签里 自定义在任何标签里
        errorLabelContainer:"ol.error-box", //把所有的错误用容器装起来
        rules:{    //对username制定规则
           username:{
               required:true,
               minlength:6,
               maxlength:12
           },
            psd:{
                required:true,
                minlength:6,
                maxlength:12
            },
            rpsd:{
                required:true,
                equalTo:"#pwd1"
            },
            email:{
                required:true,
                email:true
            }
        },

        messages: {
            username: {
                required: "账号不能为空",
                minlength: "账号长度不得低于6位",
                maxlength: "账号长度不得大于12位"
            },
            psd: {
                required: "密码不能为空",
                minlength: "密码长度不得低于6位",
                maxlength: "密码长度不得大于12位"
            },
            rpsd:{
            required: "确认密码不能为空",
            equalTo:"密码和确认密码必须一致"
            },
            email:{
                required:"邮箱必填",
                email:"邮箱格式不正确"
            }
        }
    })
})

