/**
 * Created by Administrator on 2016/5/11.
 */
var vm = avalon.define({
    $id : "Gas",
    branchName : "成都公司",
    successRankList : [
        {ranking:"1",staff:"王丽丽",number:"380"}
    ],
    successRate : [
        {ranking:"1",staff:"王丽丽",number:"387"}
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