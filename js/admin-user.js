/**
 * Created by Administrator on 2017/6/6.
 */

$(function(){
    /*选项卡*/
    /*var vLen = 0;
    var vIndex = [];
    $("#user-tab").each(function(){
        console.log(vLen = vLen + 1);// index就是索引值
        console.log(vIndex.push($(this).index()));//domEle 表示获取遍历每一个dom对象
    });
    console.log(vIndex);
    $("#user-tab li").click(function(){
        $("#user-tab li").eq($(this).index()).addClass('active');
        $("#user-tab li").eq($(this).index()).siblings().removeClass('active');
        $("#user-content:eq("+vIndex[1]+")").addClass("shopping1").siblings().removeClass("shopping1");
        $("#user-content:eq("+vIndex[2]+")").addClass("shopping1").siblings().removeClass("shopping1");
    });
*/
       /* if($("#user-list").css("display")=='block' ){
            $("#a1").addClass('active');
            $("#a2").removeClass('active');
            $("#a3").removeClass('active');
        }
*/
/*模态框*/
    $("#add-user").on("click",function(){
        $("#myModal").modal("show");
        return true
    });

    /*表单验证 （bootstrapValidator插件）*/
    $('#defaultForm').bootstrapValidator({ //为表单进行初始化
        message: 'This value is not valid',
        feedbackIcons: { //输入框的不同状态，用bootstrap的图标样式
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: '用户名无效',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '用户名长度必须大于6，小于30'
                    },

                    regexp: { //正则表达式
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '用户名只能包含大小写字母数字下划线，点'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '邮箱不能为空'
                    },
                    emailAddress: {
                        message: '不是有效的邮箱地址'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    }
                }
            }
        }
    });
});
/*添加用户*/
/*点击保存本地储存并取出打印到table下*/
function savaUser(){
    var data=new Object;//获取input数据中的数据
    data.name=document.getElementById('name').value;
    data.psd=document.getElementById('psd').value;
    data.repsd=document.getElementById('re-psd').value;
    data.email=document.getElementById('email').value;
    var str=JSON.stringify(data);//转换为json格式的文本数据
    sessionStorage.setItem('right'+sessionStorage.length,str);//setItem 进行数据的保存
    var userTab=$("#table");
    var strl=''
    for(var i=0;i<sessionStorage.length;i++){
        var obj = sessionStorage.getItem('right'+i);//获取当前键值的对象
        objPar = JSON.parse(obj);//解析对象 JSON对象不能直接通过JS操作，要转化为JS的对象才行
        strl+="<tr><td><span class='glyphicon glyphicon-user'></span></td><td>"+objPar.name+"</td><td>"+objPar.email+"</td><td><div class='dropdown '><button class='btn btn-default' data-toggle='dropdown'>"+"操作"+"<span class='caret'></span></button></button><ul class='dropdown-menu dropdown-menu-left'><li><a href='#'>"+"编辑"+"</a></li><li><a href='#' onclick='del(this)'>"+"删除"+"</a></li><li><a href='#'>"+"锁定"+"</a></li><li><a href='#'>"+"修改密码"+"</a></li></ul></div></tr>"
    }
    userTab.append(strl);
}
function del(el){
    if (confirm("确认删除？")){
        var time=parseInt(el.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("value"));
        sessionStorage.removeItem(time);
        var s=el.parentNode.parentNode.parentNode.parentNode.parentNode;
        s.remove();
    }
}
function update(el) {
    var newText=prompt("请输入要修改的内容");
    if(newText!=""&&newText!=null){
        var time=el.getAttribute("value");
        localStorage[time]=newText;
        var p=el.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.nextSibling;
        p.innerHTML=newText;
        alert("修改成功");
    }else if(newText==null){
        alert("未做修改");
    }
}
