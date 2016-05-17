/**
 * Created by Administrator on 2016/5/8.
 */
var vm = avalon.define({
    $id : "Gas",
    branchName : "成都公司"
});
$(function() {
    var braChart = echarts.init(document.getElementById("braRatePic"));
    var option = {
        title: {
            text: '总订单数',
            subtext: '1525',
            x: 'center',
            y: 'center',
            itemGap: 20,
            textStyle : {
                color : 'rgba(171,171,171)',
                fontFamily : '微软雅黑',
                fontSize : 27,
                fontWeight : 'bolder'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [

            {
                name:'访问来源',
                type:'pie',
                radius: ['40%', '58%'],

                data:[
                    {value:335, name:'开发中 13%'},
                    {value:310, name:'安装中 34%'},
                    {value:234, name:'已完成 30%'},
                    {value:135, name:'已取消 23%'}
                ]
            }
        ],
        color:['#00bc9c','#56ace4','#f3c700','#eb5037']
    };
    braChart.setOption(option);
})