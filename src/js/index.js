$(
    function ajaxLoading(){
        $("<div class=\"datagrid-mask\"></div>").css({display:"block",width:"100%",height:$(window).height()}).appendTo("body");
        $("<div class=\"datagrid-mask-msg\"></div>").html("正在处理，请稍候。。。").appendTo("body").css({display:"block",left:($(document.body).outerWidth(true) - 190) / 2,top:($(window).height() - 45) / 2});
    },
    function ajaxLoadEnd(){
        $(".datagrid-mask").remove();
        $(".datagrid-mask-msg").remove();
    }



//这里有先后的问题,header先加载出来,body还没有初始化;所以这个时候需要用户自己去设置
//这个是定义的界面
//添加新的Tab页
//     $("#navmenu").on("click", "a[data-url]", function(e) {
//         e.preventDefault();
//         var tabTitle = $(this).text();
//         var tabUrl = $(this).data("url");
//
//         if($("#tt").tabs("exists", tabTitle)) { //判断该Tab页是否已经存在
//             $("#tt").tabs("select", tabTitle);
//         }else {
//             $("#tt").tabs("add", {
//                 title: tabTitle,
//                 href: tabUrl,
//                 closable: true
//             });
//         }
//         $("#navmenu .active").removeClass("active");
//         $(this).parent().addClass("active");
//     });
//
// //解决闪屏的问题
// window.setTimeout(function() {
//     $("#layout").css("visibility", "visible");
// }, 800)
//



);