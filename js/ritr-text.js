/**
 * Created by Administrator on 2014/11/3.
 */
    $(document).ready(function () {
        $(".text-necessary").after("<span class='point-red'>*</span>");
        $(".text-necessary").keyup(function(){
            if(this.value){
                $(this).next().css("color","black");
                return false;
            }else{
                $(this).next().css("color","red");
            }
        });
        $(".text-necessary").blur($(this).keyup());
    });

