/***********************scdd_header*************************/
$(".scdd_list_userName").mouseover(function(){
	$(".scdd_line").css("opacity",0);
})
$(".scdd_list_userName").mouseout(function(){
	$(".scdd_line").css("opacity",1);
})

/***********************scdd_cancle*************************/
$(".scdd_cancle").click(function(e){
	e.stopPropagation();
	$(this).parents(".scdd_couponBox").find(".scdd_tabcontent").removeAttr("style");
	$(this).parents(".scdd_couponBox").find(".scdd_codecontent").removeAttr("style");
	$(this).parents(".scdd_couponBox").find("li").removeClass();
	if($(this).parents(".scdd_couponBox").find("li")[0]){
		$(this).parents(".scdd_couponBox").find("li")[0].className="scdd_tabactive";
	}
	
	$(".scdd_couponBox").hide();
	$(".scdd_fapiao").fadeOut(500);
	$(".scdd_fapiao").css("top","-440px");
	$(".f1body input").val("");	
	$(".f1body input").removeAttr("style");
	$(".f1body input").prev().removeAttr("style");
	$(".mtk").hide();	
})

/***********************scdd_trigger*************************/
$(".scdd_trigger").click(function(e){
	e.stopPropagation();
	$(".scdd_couponBox").css("display","none");
	$(this).children(".scdd_couponBox").css("display","block");
	if(!$(".scdd_ecardBox").is(":hidden")){
		$(".mtk").show();
	}

})

$(document).click(function (e) {
    var drag = $(".scdd_codeBox"),
        dragel = $(".scdd_codeBox")[0],
        i=$(".scdd_trigger>i")[0],
        trigger=$(".scdd_trigger")[0],
        trigger1=$(".scdd_trigger")[1],
        target = e.target;
    if (target !== dragel && !$.contains(dragel, target)&& target !== trigger && target !== i) {
    	drag.find(".scdd_tabcontent").removeAttr("style");
    	drag.find(".scdd_codecontent").removeAttr("style");
    	drag.find("li").removeClass();
		drag.find("li")[0].className="scdd_tabactive";
        drag.hide();
    }
});
	
$(".scdd_tabswitch li").click(function(){
	$(this).parent().children().removeAttr("class");
	$(this).addClass("scdd_tabactive");
	
	switch($(this).attr("sq")){
		case "0":
			$(this).parent().next().next().hide();
			$(this).parent().next().show();
			break;
		case "1":
			$(this).parent().next().hide();
			$(this).parent().next().next().show();
	}
})

/***********************placeholder*************************/
$(".scdd_formSection input").focus(function(){
	console.log($(this)[0])
	if($(this)[0].className=="scdd_fapiaokk"){
		$(this).css("border-color","#FF6700");
	}else{
		$(".scdd_code").css("top","-8px");
		$(".scdd_code").css("font-size","12px");
		$(".scdd_code").css("color","#FF6700");
		$(this).css("z-index","2");
		$("#scdd_code").css("border-color","#FF6700");
	}
})
$(".scdd_formSection input").blur(function(){
	if(!$(this).val()){
		$(this).css("z-index","20");
		$(".scdd_code").removeAttr("style");
		$("#scdd_code").removeAttr("style");
		$(".scdd_fapiaokk").removeAttr("style");
	}else{
		$(this).removeAttr("style");
	}
	
})


$("#scdd_pwd").focus(function(){
	$("#scdd_pwd").attr("placeholder","请输入礼品卡密码");
	$("#scdd_pwd").addClass("scdd_inputactive");
})
$("#scdd_pwd").blur(function(){
	$("#scdd_pwd").removeAttr("placeholder");
	$("#scdd_pwd").removeClass("scdd_inputactive");
})
$("#scdd_yzm").focus(function(){
	$("#scdd_yzm").attr("placeholder","请输入验证码");
	$("#scdd_yzm").addClass("scdd_inputactive");
})
$("#scdd_yzm").blur(function(){
	$("#scdd_yzm").removeAttr("placeholder");
	$("#scdd_yzm").removeClass("scdd_inputactive");
})
/***********************captcha*************************/
var arr=["img/captcha (1).jpg","img/captcha (2).jpg","img/captcha (3).jpg","img/captcha (4).jpg","img/captcha (5).jpg","img/captcha (6).jpg"];
$(".captcha").click(function(){
	var i=0;
	if(i<5){
		i++;
		console.log($(".captcha").children())
		$(".captcha img").attr("src",arr[i]);
		
	}else{
		i=0;
		$(".captcha img").attr("src",arr[i]);
	}
})

/*************************fapiao****************************/
$(".fp_change").click(function(){
	$(".mtk").show();
	$(".scdd_fapiao").fadeIn(50);
	$(".scdd_fapiao").css("top","50%");
})
$(".icon-cha").click(function(){
	$(".f1body input").val("");	
	$(".f1body input").removeAttr("style");
	$(".f1body input").prev().removeAttr("style");
	$(".mtk").hide();
	$(".scdd_fapiao").css("top","15%");
	$(".scdd_fapiao").fadeOut(50);
})


/**************************fixde1*****************************/
$(".scdd_section_body").click(function(){
	$(".mtk").show();
	$(".fixde1").fadeIn(50);
	$(".fixde1").css("top","26%");
})
$(".ftopright").click(function(){
	$(".fixde1").fadeOut(50);
	$(".f1body input").removeAttr("value");
	$(".f1body input").prev().removeAttr("style");
	$(".fixde1").css("top","-440px");
	$(".mtk").hide();
	
})
$(".f1body input").focus(function(){
	if($(this).prev().hasClass("slname")){
		$(this).prev().css("color","#F25807");
		$(this).prev().css("font-size","12px");
		$(this).prev().css("top","-10px");
		$(this).css("border-color","#F25807");
		if($(this).prev().html()=="姓名"){
			$(this).attr("placeholder","收货人姓名");
		}else if($(this).prev().html()=="手机号"){
			$(this).attr("placeholder","手机号");
		}else if($(this).prev().html()=="详细地址"){
			$(this).attr("placeholder","详细地址，路名或街道名称，门牌号");
		}else if($(this).prev().html()=="邮政编码"){
			$(this).attr("placeholder","邮政编码");
		}else if($(this).prev().html()=="地址标签"){
			$(this).attr("placeholder","地址标签");
		}
	}	
});
$(".f1body input").blur(function(){
	if($(this).val()){
	}
	else{
		$(this).prev().css("color","#b0b0b0");
		$(this).prev().css("font-size","12px");
		$(this).prev().css("top","11px");
		$(this).attr("placeholder","");
		$(this).css("border-color","#e0e0e0");
	}
		
});

$(".tcity").focus(function(){
	$(".ck_search").val("");
	$(".tcity").val("");
	$(".checkbox").css("display","block");
})
$(".checkbox_top i").click(function(){
	$(".checkbox").css("display","none");
	
})
$(".sure").click(function(){
	if($(".ck_search").val()){
		$(".tcity").val($(".ck_search").val());
		$(".checkbox").css("display","none");
	}
	if($(".auto").val()){
		$(".tcity").val($(".auto").val());
		$(".checkbox").css("display","none");
	}
	
});
$(".tcity").blur(function(){
	$(this).attr("placeholder","选择省 / 市 / 区 / 街道");
})
$(".shoudong span").click(function(){
	$(".qiehuan1").css("display","none");
	$(".qiehuan2").css("display","block");
})

$(".sousuo span").click(function(){
	$(".qiehuan2").css("display","none");
	$(".qiehuan1").css("display","block");
})
$(".quxiao").click(function(){
	$(".mtk").css("display","none");
	$(".fixde1").css("top","-440px");
	$(".f1body input").val("");	
	$(".f1body input").removeAttr("style");
})
$(".baocun").click(function(){
	var arr=[],
	str="";
	if($("#sname").val()&&$("#phone").val()&&$(".tcity").val()&&$("#useradd").val()&&$("#bianma").val()&&$("#biaoqian").val()){
		$(".mtk").hide();
		$(".fixde1").fadeOut(500);
		$(".fixde1").css("top","-400px");
		var newdiv=$("<div class='scdd_section_bodyN'></div>");
		var newdiv1=$("<div class='d1'></div>");
		var newp=$("<p class='scname'></p>");
		var newphone=$("<p class='scphone'></p>");
		var newl=$("<p class='scadd'></p>");
		var newdiv=$("<div class='scdd_section_bodyN'></div>");
		newdiv.prepend(newdiv1);
		newdiv1.append(newp);
		newdiv1.append(newphone);
		newdiv1.append(newl);
		newp.html($("#sname").val());
		var strphone=$("#phone").val();
		var newstr=strphone.replace(strphone.slice(3,7),"****");
		newphone.html(newstr);
		arr=$(".tcity").val().split("/");
		for(var key in arr){
			str+=arr[key]+"&nbsp;";
		}
		newl.html(str);
		$(".scdd_max").prepend(newdiv);
		
		if($(".ttop").length==0){
			$("body").prepend("<div class='ttop'></div>");
			$(".ttop").prepend("<div class='topmid'></div>");
			$(".topmid").append("<div class='topmid_name'></div>");
			$(".topmid_name").html($("#sname").val());
			$(".topmid").append("<div class='topmid_phone'></div>");
			$(".topmid_phone").html(newstr);
			$(".topmid").append("<div class='topmid_add'></div>");
			$(".topmid_add").append($(".tcity").val());
			$(".topmid").append("<div class='topmid_right'>选择该收获地址</div>");
		}
		
		$(".f1body input").val("");	
		$(".city-picker-span span").html("例如： 北京华润五彩城");	
		$(".f1body input").removeAttr("style");
		$(".f1body input").prev().removeAttr("style");
		
		
	}
});
$(window).scroll(function(){
	var topp = $(document).scrollTop();
	if($(".topmid_name").html()){
		if(topp>100){
			$(".ttop").css("top","0");
			$(".ttop").fadeIn(100);
		}else{
			$(".ttop").fadeOut(100);
			$(".ttop").css("top","-80px");
		}
	}
})
/***********************scdd_header*************************/
$(".scdd_list_userName").mouseover(function(){
	$(".scdd_line").css("opacity",0);
})
$(".scdd_list_userName").mouseout(function(){
	$(".scdd_line").css("opacity",1);
})

/***********************scdd_cancle*************************/
$(".scdd_cancle").click(function(e){
	e.stopPropagation();
	$(this).parents(".scdd_couponBox").find(".scdd_tabcontent").removeAttr("style");
	$(this).parents(".scdd_couponBox").find(".scdd_codecontent").removeAttr("style");
	$(this).parents(".scdd_couponBox").find("li").removeClass();
	if($(this).parents(".scdd_couponBox").find("li")[0]){
		$(this).parents(".scdd_couponBox").find("li")[0].className="scdd_tabactive";
	}
	
	$(".scdd_couponBox").hide();
	$(".scdd_fapiao").fadeOut(500);
	$(".scdd_fapiao").css("top","-440px");
	$(".f1body input").val("");	
	$(".f1body input").removeAttr("style");
	$(".f1body input").prev().removeAttr("style");
	$(".mtk").hide();	
})

/***********************scdd_trigger*************************/
$(".scdd_trigger").click(function(e){
	e.stopPropagation();
	$(".scdd_couponBox").css("display","none");
	$(this).children(".scdd_couponBox").css("display","block");
	if(!$(".scdd_ecardBox").is(":hidden")){
		$(".mtk").show();
	}

})

$(document).click(function (e) {
    var drag = $(".scdd_codeBox"),
        dragel = $(".scdd_codeBox")[0],
        i=$(".scdd_trigger>i")[0],
        trigger=$(".scdd_trigger")[0],
        trigger1=$(".scdd_trigger")[1],
        target = e.target;
    if (target !== dragel && !$.contains(dragel, target)&& target !== trigger && target !== i) {
    	drag.find(".scdd_tabcontent").removeAttr("style");
    	drag.find(".scdd_codecontent").removeAttr("style");
    	drag.find("li").removeClass();
		drag.find("li")[0].className="scdd_tabactive";
        drag.hide();
    }
});
	
$(".scdd_tabswitch li").click(function(){
	$(this).parent().children().removeAttr("class");
	$(this).addClass("scdd_tabactive");
	
	switch($(this).attr("sq")){
		case "0":
			$(this).parent().next().next().hide();
			$(this).parent().next().show();
			break;
		case "1":
			$(this).parent().next().hide();
			$(this).parent().next().next().show();
	}
})

/***********************placeholder*************************/
$(".scdd_formSection input").focus(function(){
	console.log($(this)[0])
	if($(this)[0].className=="scdd_fapiaokk"){
		$(this).css("border-color","#FF6700");
	}else{
		$(".scdd_code").css("top","-8px");
		$(".scdd_code").css("font-size","12px");
		$(".scdd_code").css("color","#FF6700");
		$(this).css("z-index","2");
		$("#scdd_code").css("border-color","#FF6700");
	}
})
$(".scdd_formSection input").blur(function(){
	if(!$(this).val()){
		$(this).css("z-index","20");
		$(".scdd_code").removeAttr("style");
		$("#scdd_code").removeAttr("style");
		$(".scdd_fapiaokk").removeAttr("style");
	}else{
		$(this).removeAttr("style");
	}
	
})


$("#scdd_pwd").focus(function(){
	$("#scdd_pwd").attr("placeholder","请输入礼品卡密码");
	$("#scdd_pwd").addClass("scdd_inputactive");
})
$("#scdd_pwd").blur(function(){
	$("#scdd_pwd").removeAttr("placeholder");
	$("#scdd_pwd").removeClass("scdd_inputactive");
})
$("#scdd_yzm").focus(function(){
	$("#scdd_yzm").attr("placeholder","请输入验证码");
	$("#scdd_yzm").addClass("scdd_inputactive");
})
$("#scdd_yzm").blur(function(){
	$("#scdd_yzm").removeAttr("placeholder");
	$("#scdd_yzm").removeClass("scdd_inputactive");
})
/***********************captcha*************************/
var arr=["img/captcha (1).jpg","img/captcha (2).jpg","img/captcha (3).jpg","img/captcha (4).jpg","img/captcha (5).jpg","img/captcha (6).jpg"];
$(".captcha").click(function(){
	var i=0;
	if(i<5){
		i++;
		console.log($(".captcha").children())
		$(".captcha img").attr("src",arr[i]);
		
	}else{
		i=0;
		$(".captcha img").attr("src",arr[i]);
	}
})

/*************************fapiao****************************/
$(".fp_change").click(function(){
	$(".mtk").show();
	$(".scdd_fapiao").fadeIn(50);
	$(".scdd_fapiao").css("top","50%");
})
$(".icon-cha").click(function(){
	$(".f1body input").val("");	
	$(".f1body input").removeAttr("style");
	$(".f1body input").prev().removeAttr("style");
	$(".mtk").hide();
	$(".scdd_fapiao").css("top","15%");
	$(".scdd_fapiao").fadeOut(50);
})


/**************************fixde1*****************************/
$(".scdd_section_body").click(function(){
	$(".mtk").show();
	$(".fixde1").fadeIn(50);
	$(".fixde1").css("top","26%");
})
$(".ftopright").click(function(){
	$(".fixde1").fadeOut(50);
	$(".f1body input").removeAttr("value");
	$(".f1body input").prev().removeAttr("style");
	$(".fixde1").css("top","-440px");
	$(".mtk").hide();
	
})
$(".f1body input").focus(function(){
	if($(this).prev().hasClass("slname")){
		$(this).prev().css("color","#F25807");
		$(this).prev().css("font-size","12px");
		$(this).prev().css("top","-10px");
		$(this).css("border-color","#F25807");
		if($(this).prev().html()=="姓名"){
			$(this).attr("placeholder","收货人姓名");
		}else if($(this).prev().html()=="手机号"){
			$(this).attr("placeholder","手机号");
		}else if($(this).prev().html()=="详细地址"){
			$(this).attr("placeholder","详细地址，路名或街道名称，门牌号");
		}else if($(this).prev().html()=="邮政编码"){
			$(this).attr("placeholder","邮政编码");
		}else if($(this).prev().html()=="地址标签"){
			$(this).attr("placeholder","地址标签");
		}
	}	
});
$(".f1body input").blur(function(){
	if($(this).val()){
	}
	else{
		$(this).prev().css("color","#b0b0b0");
		$(this).prev().css("font-size","12px");
		$(this).prev().css("top","11px");
		$(this).attr("placeholder","");
		$(this).css("border-color","#e0e0e0");
	}
		
});

$(".tcity").focus(function(){
	$(".ck_search").val("");
	$(".tcity").val("");
	$(".checkbox").css("display","block");
})
$(".checkbox_top i").click(function(){
	$(".checkbox").css("display","none");
	
})
$(".sure").click(function(){
	if($(".ck_search").val()){
		$(".tcity").val($(".ck_search").val());
		$(".checkbox").css("display","none");
	}
	if($(".auto").val()){
		$(".tcity").val($(".auto").val());
		$(".checkbox").css("display","none");
	}
	
});
$(".tcity").blur(function(){
	$(this).attr("placeholder","选择省 / 市 / 区 / 街道");
})
$(".shoudong span").click(function(){
	$(".qiehuan1").css("display","none");
	$(".qiehuan2").css("display","block");
})

$(".sousuo span").click(function(){
	$(".qiehuan2").css("display","none");
	$(".qiehuan1").css("display","block");
})
$(".quxiao").click(function(){
	$(".mtk").css("display","none");
	$(".fixde1").css("top","-440px");
	$(".f1body input").val("");	
	$(".f1body input").removeAttr("style");
})
$(".baocun").click(function(){
	var arr=[];
	var str="";
	if($("#sname").val()&&$("#phone").val()&&$(".tcity").val()&&$("#useradd").val()&&$("#bianma").val()&&$("#biaoqian").val()){
		$(".mtk").hide();
		$(".fixde1").fadeOut(500);
		$(".fixde1").css("top","-400px");
		var newdiv=$("<div class='scdd_section_bodyN'></div>");
		var newdiv1=$("<div class='d1'></div>");
		var newp=$("<p class='scname'></p>");
		var newphone=$("<p class='scphone'></p>");
		var newl=$("<p class='scadd'></p>");
		var newdiv=$("<div class='scdd_section_bodyN'></div>");
		newdiv.prepend(newdiv1);
		newdiv1.append(newp);
		newdiv1.append(newphone);
		newdiv1.append(newl);
		newp.html($("#sname").val());
		var strphone=$("#phone").val();
		var newstr=strphone.replace(strphone.slice(3,7),"****");
		newphone.html(newstr);
		arr=$(".tcity").val().split("/");
		for(var key in arr){
			str+=arr[key]+"&nbsp;";
		}
		newl.html(str);
		$(".scdd_max").prepend(newdiv);
		console.log(str)
		if($(".ttop").length==0){
			console.log(str)
			$("body").prepend("<div class='ttop'></div>");
			$(".ttop").prepend("<div class='topmid'></div>");
			$(".topmid").append("<div class='topmid_name'></div>");
			$(".topmid_name").html($("#sname").val());
			$(".topmid").append("<div class='topmid_phone'></div>");
			$(".topmid_phone").html(newstr);
			$(".topmid").append("<div class='topmid_add'>"+str+"</div>");
//			console.log(str);
//			$(".topmid_add").html(str);
			$(".topmid").append("<div class='topmid_right'>选择该收获地址</div>");
		}
		
		$(".f1body input").val("");	
		$(".city-picker-span span").html("例如： 北京华润五彩城");	
		$(".f1body input").removeAttr("style");
		$(".f1body input").prev().removeAttr("style");
		
		
	}
});
$(window).scroll(function(){
	var topp = $(document).scrollTop();
	if($(".topmid_name").html()){
		if(topp>100){
			$(".ttop").css("top","0");
			$(".ttop").fadeIn(100);
		}else{
			$(".ttop").fadeOut(100);
			$(".ttop").css("top","-80px");
		}
	}
})
