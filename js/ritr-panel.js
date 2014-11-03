/**
 * Created by Administrator on 2014/11/3.
 */
$(document).ready(function(){
    $(".panel-fold").css("backgroundImage","url(../css/img/foldUp.png)");
    $(".panel-fold").click(function(){
        if($(this).attr("isShown")){
            $(this).parent().next().hide(300);
            (function (dom) {
                window.setTimeout(function () {
                    $(dom).css("backgroundImage","url(../css/img/foldDown.png)");
                },200);
            })(this);
            $(this).attr("isShown","")
        }else{
            $(this).parent().next().show(300);
            (function (dom) {
                window.setTimeout(function () {
                    $(dom).css("backgroundImage","url(../css/img/foldUp.png)");
                },200);
            })(this);
            $(this).attr("isShown","true")
        }
    });
});

