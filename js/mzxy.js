/**
 * Created by Administrator on 2017/6/5.
 */
$(function(){
    /*点击出弹框*/
    $("#btn").on("click",function(){
        $("#myModal").modal("show")
    });

    /*导航跳转效果插件*/
    $('.nav').singlePageNav({
        offset:10
    });
    /*小屏幕导航点击关闭菜单
     $('.navbar-collapse a').click(function(){
     $('.navbar-collapse').collapse('hide');
     });*/
    new WOW().init();

    /*导航栏变色*/
    window.onscroll=function () {
        var scrollTop=document.body.scrollTop;
        showMove(scrollTop);
    };
    function  showMove(scrollTop) {
        var moveTop=document.getElementById("nav");
        if(scrollTop>=530){
            moveTop.className ="nav-color1 nav navbar navbar-default navbar-fixed-top";
        }
        else {
            moveTop.className ="nav navbar navbar-default navbar-fixed-top";
        }
    }

    /*画布雪花****************/
    var can = document.getElementById("mycanvas");//获取mycanvas画布
    var ctx = can.getContext("2d");
    var wid = window.innerWidth;  //画布宽度
    var hei = window.innerHeight;   //画布高度
    can.width = wid;
    can.height = hei;
    var snow = 100; //雪花数目, 雪花数量固定
    //雪花坐标、半径
    var arr = []; //保存各圆坐标及半径
    for (var i = 0; i < snow; i++) {
        arr.push({
            x: Math.random() * wid,
            y: Math.random() * hei,
            r: Math.random() * 10 + 1
        })
    }
    //画雪花
    function DrawSnow() {
        ctx.clearRect(0, 0, wid, hei);//DrawSnow()函数体内必须在前面执行clearRect()函数，
        ctx.fillStyle = "white";
        ctx.beginPath();
        for (var i = 0; i < snow; i++) {
            var p = arr[i];
            ctx.moveTo(p.x, p.y);  //  arc(x,y,r,start,stop)；
            ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false); //(x坐标,y坐标,半径,开始弧度,结束弧度,旋转方向);
        }
        ctx.fill();//填充路径
        SnowFall();
        ctx.closePath();
    }
    //雪花飘落
    function SnowFall() {  //用一个函数SnowFall()定义雪花飘过规则
        for (var i = 0; i < snow; i++) {
            var p = arr[i];
            p.y += Math.random() * 2 + 1; //随机数产生不同半径、坐标的圆形雪花
            if (p.y > hei) {
                p.y = 0;
            }
            p.x += Math.random() * 2 + 1;
            if (p.x > wid) {
                p.x = 0;
            }
        }
    }
    setInterval(DrawSnow, 50); // 定时器 间隔时间为50毫秒：setInterval(DrawSnow,50);
                               // 最后执行setInterval(DrawSnow, 50);
});