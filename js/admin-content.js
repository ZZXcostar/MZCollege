/**
 * Created by Administrator on 2017/6/8.
 */
/*添加用户*/
/*点击保存本地储存并取出打印到table下*/

/* 初始化页面 */
/*当localStorage有json对象的时候遍历打印出来*/
var userTab = $("#table");
var strl = '';
for (var i = 0; i < localStorage.length; i++) {
    var obj = localStorage.getItem('right' + i);//获取当前键值的对象
    a = JSON.parse(obj);//解析对象 JSON对象不能直接通过JS操作，要转化为JS的对象才行
    strl = '<tr><td><strong>' + a.text + '</strong></td><td>' + a.title + '</td><td>' + "2017/06/09" + '</td><td><div class="dropdown "><button class="btn btn-default" data-toggle="dropdown">' + '操作' + '<span class="caret"></span></button><ul class="dropdown-menu dropdown-menu-left"><li><a href="#">' + '编辑' + '</a></li><li><a href="#" onclick="del()">' + '删除' + '</a></li><li><a href="#">' + '全局置顶' + '</a></li></ul></div></td></tr>';
    console.log(strl);
    userTab.append(strl);
}
/*点击获取框里的内容并将内容以json对象的方式存在本地*/
            function subAir() {
                var tit=document.getElementById('title').value;
                var tet=document.getElementById('text').value;
                var data = new Object;//获取input数据中的数据
                data.title = tit;
                data.text = tet;
                var str = JSON.stringify(data);//转换为json格式的文本数据
                localStorage.setItem('right' + localStorage.length, str);//setItem 进行数据的保存

               /* for (var i = 0; i < localStorage.length; i++) {
                    var obj = localStorage.getItem('right' + i);//获取当前键值的对象
                    a = JSON.parse(obj);//解析对象 JSON对象不能直接通过JS操作，要转化为JS的对象才行
                    strl += '<tr><td><strong>' + a.text + '</strong></td><td>' + a.title + '</td><td>' + "2017/06/09" + '</td><td><div class="dropdown "><button class="btn btn-default" data-toggle="dropdown">' + '操作' + '<span class="caret"></span></button><ul class="dropdown-menu dropdown-menu-left"><li><a href="#">' + '编辑' + '</a></li><li><a href="#" onclick="del()">' + '删除' + '</a></li><li><a href="#">' + '全局置顶' + '</a></li></ul></div></td></tr>';
                    console.log(strl);
                }
                userTab.append(strl);*/
            }
