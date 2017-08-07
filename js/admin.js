/**
 * Created by Administrator on 2017/6/6.
 */
var data={
    labels:["周一","周二","周三","周四","周五","周六","周末"],
    datasets:[
        {
            lineItemName:"第一周访客统计",
            fillColor:"rgba(151,187,205,0.5)",
            srtokeColor:"rgba(151,187,205,1)",
            pointColor:"rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data:[100,260,480,410,600,590,500]
        },
        {
            lineItemName:"第二周访客统计",
            fillColor:"rgba(220,220,220,0.5)",
            srtokeColor:"rgba(220,220,220,1)",
            pointColor:"rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data:[300,470,750,810,1000,900,1000]
        },
        {
            lineItemName:"第三周访客统计",
            fillColor:"rgba(150,151,200,0.5)",
            srtokeColor:"rgba(150,151,200,1)",
            pointColor:"rgba(150,151,200,1)",
            pointStrokeColor : "#fff",
            data:[310,575,650,710,900,890,1000]
        }
    ]
};
$(function(){
    var ctx=$("#line").get(0).getContext("2d");
    var b=new Chart(ctx).Line(data,{bezierCurve : true});
    console.log(b)
});