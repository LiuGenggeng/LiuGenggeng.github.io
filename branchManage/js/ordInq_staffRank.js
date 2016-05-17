/**
 * Created by Administrator on 2016/5/11.
 */
var vm = avalon.define({
    $id : "Gas",
    branchName : "成都公司",
    successRankList : [
        {"ranking":"1","staff":"王丽丽","number":"387"},
    {"ranking":"2","staff":"王丽丽","number":"350"},
    {"ranking":"3","staff":"王丽丽","number":"200"},
    {"ranking":"4","staff":"王丽丽","number":"187"},
    {"ranking":"5","staff":"王丽丽","number":"165"},
    {"ranking":"6","staff":"王丽丽","number":"132"},
    {"ranking":"7","staff":"王丽丽","number":"112"},
    {"ranking":"8","staff":"王丽丽","number":"108"},
    {"ranking":"9","staff":"王丽丽","number":"102"},
    {"ranking":"10","staff":"王丽丽","number":"100"},
    {"ranking":"11","staff":"王丽丽","number":"96"}
    ],
    successRate : [
        {"ranking":"1","staff":"王丽丽","number":"387"},
    {"ranking":"2","staff":"王丽丽","number":"350"},
    {"ranking":"3","staff":"王丽丽","number":"200"},
    {"ranking":"4","staff":"王丽丽","number":"187"},
    {"ranking":"5","staff":"王丽丽","number":"165"},
    {"ranking":"6","staff":"王丽丽","number":"132"},
    {"ranking":"7","staff":"王丽丽","number":"112"},
    {"ranking":"8","staff":"王丽丽","number":"108"},
    {"ranking":"9","staff":"王丽丽","number":"102"},
    {"ranking":"10","staff":"王丽丽","number":"100"},
    {"ranking":"11","staff":"王丽丽","number":"96"}
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
        url: "js/successRate.json",
        dataType: "json",
        success: function(data) {
            vm.successRate = data.body;
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