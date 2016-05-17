/**
 * Created by Administrator on 2016/5/11.
 */
var vm = avalon.define({
    $id : "Gas",
    regionalName : "西南区域",
    successRankList : [
        {"ranking":"1","company":"A公司","number":"387"},
        {"ranking":"2","company":"A公司","number":"350"},
        {"ranking":"3","company":"A公司","number":"200"},
        {"ranking":"4","company":"A公司","number":"187"},
        {"ranking":"5","company":"A公司","number":"165"},
        {"ranking":"6","company":"A公司","number":"132"},
        {"ranking":"7","company":"A公司","number":"112"},
        {"ranking":"8","company":"A公司","number":"108"},
        {"ranking":"9","company":"A公司","number":"102"},
        {"ranking":"10","company":"A公司","number":"100"},
        {"ranking":"11","company":"A公司","number":"96"}
    ],
    installRankList : [
        {"ranking":"1","company":"A公司","number":"387"},
        {"ranking":"2","company":"A公司","number":"350"},
        {"ranking":"3","company":"A公司","number":"200"},
        {"ranking":"4","company":"A公司","number":"187"},
        {"ranking":"5","company":"A公司","number":"165"},
        {"ranking":"6","company":"A公司","number":"132"},
        {"ranking":"7","company":"A公司","number":"112"},
        {"ranking":"8","company":"A公司","number":"108"},
        {"ranking":"9","company":"A公司","number":"102"},
        {"ranking":"10","company":"A公司","number":"100"},
        {"ranking":"11","company":"A公司","number":"96"}
    ]
});
$(function() {
    $.ajax({
        type: "POST",
        url: "js/successRankLists.json",
        dataType: "json",
        success: function(data) {
            vm.successRankList = data.body;
            var basicWidth = $("#success1").width();
            var firstNumber = data.body[0].number;
            var secondNumber= data.body[1].number;
            var thirdNumber = data.body[2].number;
            var rate1 = firstNumber/secondNumber;
            var rate2 = firstNumber/thirdNumber;
            $("#success2").width(basicWidth/rate1);
            $('#success3').width(basicWidth/rate2);
        }
    });
    $.ajax({
        type: "POST",
        url: "js/installRankLists.json",
        dataType: "json",
        success: function(data) {
            vm.installRankList = data.body;
            var basicWidth = $("#install1").width();
            var firstNumber = data.body[0].number;
            var secondNumber= data.body[1].number;
            var thirdNumber = data.body[2].number;
            var rate1 = firstNumber/secondNumber;
            var rate2 = firstNumber/thirdNumber;
            $("#install2").width(basicWidth/rate1);
            $('#install3').width(basicWidth/rate2);
        }
    });
});