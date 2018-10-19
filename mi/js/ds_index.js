//首页头部js 到 41行结束
$(function(){//个人
	$(".in_first").mouseenter(function(){
		$(".in_firstMenu").slideDown(200);
	});
	$(".in_first").mouseleave(function(){
		$(".in_firstMenu").slideUp(200);
	});
	$(".in_last").mouseenter(function(){
		$(".in_lastMenu").slideDown(200);
	});
	$(".in_last").mouseleave(function(){
		$(".in_lastMenu").slideUp(200);
	});
})
$(function(){
	$(".in_navNav>li").mouseover(function(){
		var i =$(this).attr("value");
//		console.log(i);	
		if(i){
			$(".in_tcMenu").slideDown(200);
			$(".da").css("margin-left",-1226*i+"px");
		}else{
			$(".in_tcMenu").slideUp(200);
		}
	});
	$(".in_navNav").mouseleave(function(){
		$(".in_tcMenu").slideUp(200);
	});
})
$(function(){
	$("#in_search").focus(function(){
		$("#in_search").css("border","1px solid #FF6700");
		$("#in_sub1").css("border","1px solid #FF6700");
		$(".in_On").fadeOut(500);
		$(".in_ser").css("display","block");
	})
	$("#in_search").blur(function(){
		$("#in_search").css("border","1px solid #e0e0e0");
		$("#in_sub1").css("border","1px solid #e0e0e0");
		$(".in_On").fadeIn(500);
		$(".in_ser").css("display","none");
	})
})
//首页头部js 到 41行结束












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
		console.log($(".ttop"))
		if(!$(".topmid")){
			console.log(1)
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