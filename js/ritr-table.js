/**
 * Created by Administrator on 2014/11/4.
 */
$(document).ready(function(){
    var tr=$(".ritr-table tr");
    tr.click(function(){
        ritrTableSelected(this);
    });
    tr.mouseover(function(){
        ritrtTableHover(this);
    });
    tr.mouseout(function(){
        ritrTableOut(this);
    });
});
function ritrTableOut(dom){
    if(dom.className!="ritr-tableSelected"){
        dom.className="";
    }
}
function ritrtTableHover(dom){
    if(dom.className=="ritr-tableSelected"){
        return false;
    }
    if(dom.parentNode.nodeName=="THEAD"){
        return false;
    }
    var borthers=dom.parentNode.children;
    for(var i=0;i<borthers.length;i++){
        if(borthers[i].className!="ritr-tableSelected"){
            borthers[i].className="";
        }
    }
    dom.className="ritr-tableHovered";
}
function ritrTableSelected(dom) {
    if($(dom).parent()[0].nodeName=="THEAD"){
        return false;
    }
    $(dom).parent().children().attr("class","");
    dom.className="ritr-tableSelected";
    //dom.isSelected="selected";
$(".ritr-table").test=function(){
    alert("");
}
}