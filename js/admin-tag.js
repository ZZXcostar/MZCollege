/**
 * Created by Administrator on 2017/6/9.
 */

function addTagFun(){
    $("#btn").on("click",function(){
        var tagInp=$("#text").val();//获取输入框内容
        if(tagInp==""){
            alert("请输入标签内容！");
        }else {
            localStorage.setItem("tagInp"+localStorage.length,tagInp)
        }
        location.reload();//刷新
    });
    var tag='';
    for(var o=0;o<localStorage.length;o++){
        tag+='<div class="alert alert-info alert-dismissible col-sm-2" style="margin-right:1%"><button type="button" class="close" id="tagInp'+o+'" onclick="delTagFun(this)" data-dismiss="alert" aria-label="Close"><span>&times;</span></button>'+localStorage.getItem("tagInp"+o)+'</div>'
    }
    var tagCon=$("#showUl");//获取页面显示的容器
    tagCon.append(tag);
}addTagFun();
function delTagFun(de){
        localStorage.removeItem(de.id);//删除key名为 此标签id名的 值
        location.reload();//刷新
}

