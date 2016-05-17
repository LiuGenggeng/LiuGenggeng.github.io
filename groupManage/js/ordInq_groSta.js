/**
 * Created by Administrator on 2016/5/8.
 */
var vm = avalon.define({
    $id : "Gas",
    kaiFa: 0,
    anZhuang: 0,
    wanCheng: 0,
    quXiao: 0
});
$(function() {
    var groupChart = echarts.init(document.getElementById("groupRatePic"));
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
                name:'总订单数',
                type:'pie',
                radius: ['40%', '58%'],

                data:[
                    {"value":"335","name":"开发中 13%"},
                    {"value":"300","name":"安装中 34%"},
                    {"value":"225","name":"已完成 30%"},
                    {"value":"155","name":"已取消 23%"}
                ]
            }
        ],
        color:['#00bc9c','#56ace4','#f3c700','#eb5037']
    };
    groupChart.setOption(option);
    sendTime = function() {
        $('.groupSubmit').attr('disabled',"true");
        $('.groupSubmit').attr('value','统计中');
        $.ajax({
            type: "POST",
            url: "js/1.json",
            data:$(".setTime form").serialize(),
            dataType: "json",
            success: function(data) {
                $('.groupSubmit').removeAttr("disabled");
                $('.groupSubmit').attr('value','统计');
                vm.kaiFa = data.body.data[0].value;
                vm.anZhuang = data.body.data[1].value;
                vm.wanCheng = data.body.data[2].value;
                vm.quXiao = data.body.data[3].value;
                groupChart.hideLoading();
                groupChart.setOption({
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
    };
    $(".groupSubmit").click(function(e) {
        groupChart.showLoading();
        e.preventDefault();
        sendTime();
    });

})