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

//开始写点击事件的js
$(function(){
	$(".people_thinking li").click(function(){
		$(this).siblings().removeClass()
		$(this).addClass("people_thinking_active")
		var j = $(this).val()
		$(".message_evaluation").removeClass("showing")
		$(".message_evaluation")[j].setAttribute("class","message_evaluation showing")
	})
})


//只显示带图评价 
$(function(){
	var bool_ = true
	$(".Show_only_Picture").click(function(){
		if(bool_){
			$(this).css("color","#ff6700")
			bool_ = false
			$(".Show_only_Picture i").css("display","block")
			$(".evaluation_make_sure").css("border","1px solid #ff6700")
		}else{
			$(this).css("color","#ccc")
			$(".Show_only_Picture i").css("display","none")
			$(".evaluation_make_sure").css("border","1px solid #ccc")
			bool_ = true
		}
	})
})
	
	
//滚动监听
$(function(){
	var bool_sub_nav = false
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		console.log(top)
		if(top>190 && !bool_sub_nav){
			$(".sub_nav_scroll").css("display","block")
			$(".sub_nav_scroll").css("height","0")
			$(".sub_nav_scroll").animate({
				"height":"62px"
			},300)
			bool_sub_nav = true
		}else if(top<190 && bool_sub_nav){
			$(".sub_nav_scroll").animate({
				"height":"0px"
			},500)
			setTimeout(function(){
				$(".sub_nav_scroll").css("display","none")
			},500)
			bool_sub_nav = false
		}
	})
})

$(function(){
	$(".product_all_").mouseover(function(){
		$(".in_leftMenu").css("display","block")
	})
	$(".product_all_").mouseleave(function(){
		$(".in_leftMenu").css("display","none")
	})
	$(".in_leftMenu").mouseover(function(){
		$(".in_leftMenu").css("display","block")
	})
	$(".in_leftMenu").mouseleave(function(){
		$(".in_leftMenu").css("display","none")
	})
})