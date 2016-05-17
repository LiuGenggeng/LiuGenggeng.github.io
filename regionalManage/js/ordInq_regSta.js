/**
 * Created by Administrator on 2016/5/8.
 */
var vm = avalon.define({
    $id : "Gas",
    regionalName : "西南区域",
    kaiFa: 0,
    anZhuang: 0,
    wanCheng: 0,
    quXiao: 0
});
$(function() {
    var regChart = echarts.init(document.getElementById("regRatePic"));
    var option = {
        title: {
            text: '总订单数',
            subtext: '',
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
                name:'区域统计',
                type:'pie',
                radius: ['40%', '58%'],

                data:[
                    {value:335, name:'开发中 13%'}
                ]
            }
        ],
        color:['#00bc9c','#56ace4','#f3c700','#eb5037']
    };
    regChart.setOption(option);
    regChart.showLoading();
    $.ajax({
        type: "POST",
        url: "js/regRank.json",
        dataType: "json",
        success: function(data) {
            vm.kaiFa = data.body.data[0].value;
            vm.anZhuang = data.body.data[1].value;
            vm.wanCheng = data.body.data[2].value;
            vm.quXiao = data.body.data[3].value;
            regChart.hideLoading();
            regChart.setOption({
                title:{
                    subtext: data.body.subtext
                },
                series:[
                    {
                        data:data.body.data
                    }
                ]
            });
        }
    });
    var bars = $(".bar");
    console.log(bars);
    $.ajax({
        type: "POST",
        url: "js/regRanktime.json",
        dataType: "json",
        success: function(data) {

        }
    });
});