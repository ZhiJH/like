/*
* @Author: THOMAS
* @Date:   2017-08-16 15:22:27
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-17 15:54:39
*/
$(function(){
	 var num = 1;
    var inp = $(".input").find('input');
    //添加
    $("body").on("click","#add",function(){
        
        var goods = inp.eq(0).val();    //商品
        var content = inp.eq(1).val();  //内容描述

        var htmls = "";
        htmls += "<li><span>" + (num++) + "</span>";
        htmls += "<span>" + goods + "</span>";
        htmls += "<span>" + content + "</span>";
        htmls += "<span>";
        htmls += "<button class='del'>删除</button>";
        htmls += "<button class='mod'>修改</button>";
        htmls += "</span></li>";

        $(".table").find("ul").append(htmls);

        inp.val('');   //清空输入框内容
    });

    //删除
    $("body").on("click",".del",function(){
        $(this).parents("li").remove();
    });

    //修改
    $("body").on("click",".mod",function(){
        var spa = $(this).parents("li").find("span");
        var index = $(this).parents("li").index();
        var goods = spa.eq(1).text(); // 商品
        var content = spa.eq(2).text(); // 描述

        inp.eq(0).val(goods); // 商品
        inp.eq(1).val(content); //描述
        inp.eq(2).val(index); //标记 返回当前li

        $("#add").remove();
        $(".input").append("<button class='add' id='mod'>修改</button>") //给类名add固定前格式不变

    })
    //返回修改
    $("body").on("click","#mod",function(){
        var goods = inp.eq(0).val(); // 商品
        var content = inp.eq(1).val(); //描述
        var index = inp.eq(2).val(); //下标

        var text = $(".table").find("li").eq(index);
        text.find("span").eq(1).text(goods);
        text.find("span").eq(2).text(content);

        inp.val('');
        $(this).remove();
        $(".input").append("<button class='add' id='add'>添加</button>");
    });
})