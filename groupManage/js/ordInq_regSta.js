/**
 * Created by Administrator on 2016/5/8.
 */
var vm = avalon.define({
    $id : "Gas",
    regionalNames: ["西南区域","南方区域","北方区域"],
    kaiFa: 0,
    anZhuang: 0,
    wanCheng: 0,
    quXiao: 0
});
$(function() {
    var regChart = echarts.init(document.getElementById("regionalRatePic"));
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
                    {value:335, name:''}
                ]
            }
        ],
        color:['#00bc9c','#56ace4','#f3c700','#eb5037']
    };
    regChart.setOption(option);
    sendTime = function() {
        $('.regionalSubmit').attr('disabled',"true").attr('value','统计中');
        $.ajax({
            type: "POST",
            url: "js/1.json",
            data:$(".setTime form").serialize(),
            dataType: "json",
            success: function(data) {
                $('.regionalSubmit').removeAttr("disabled");
                $('.regionalSubmit').attr('value','统计');
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
    };
    /*请求所有大区*/
    $.ajax({
        type: "POST",
        url: "区域请求地址",
        data:"发送请求数据",
        dataType: "json",
        success: function(data) {
            vm.regionalNames = data.body;
        }
    });
    /*统计按钮点击触发查询*/
    $(".regionalSubmit").click(function(e) {
        console.log($(".setTime form").serialize());
        regChart.showLoading();
        e.preventDefault();
        sendTime();
    });

})