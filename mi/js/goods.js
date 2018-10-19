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


//这是轮播  淡入淡出
	//现在点击右边按钮，让下一张图片出来
	var button_all = document.getElementsByTagName("button");
	var ul_nav = document.getElementsByClassName("carousel_ul")[0];
	var li_nav = ul_nav.children;
	var circle_nav = document.getElementsByClassName("circle")[0];
	var circle_div = circle_nav.children;
	
	var m=0;
	button_all[1].onclick = function(){
		img_opacity_0_circle_();
		if(m==1){
			m=0;
			set_Attr(m);
		}else{
			m++;
			set_Attr(m);
		}
	}
	//现在点击左边按钮，让下一张图片出来
	button_all[0].onclick = function(){
		img_opacity_0_circle_();
		if(m==0){
			m=1;
			set_Attr(m);
		}else{
			m--;
			set_Attr(m);
		}
	}
	//现在点击circle，让下一张图片出来
	for(var i=0;i<circle_div.length;i++){
		circle_div[i].onclick = function(){
			img_opacity_0_circle_();
			value_circle =parseInt(this.getAttribute("value"));
			set_Attr(value_circle);
			m = value_circle;
		}
	}
	
	//现在设置定时器
	var timer = setInterval(button_all[1].onclick,3000);
	
	//鼠标移入让定时器停止
	var nav =document.getElementsByClassName("carousel")[0]
	nav.onmouseover = function(){
		clearInterval(timer);
		timer=null;
	}
	
	//鼠标移出让定时器开始
	nav.onmouseout = function(){
		timer = setInterval(button_all[1].onclick,3000);
	}

//这是设置所有img的opacity的方法
function img_opacity_0_circle_(){
	for(var i=0;i<li_nav.length;i++){
		li_nav[i].setAttribute("style","opacity: 0;")
		circle_div[i].setAttribute("class","");
	}
}
function set_Attr(m){
	li_nav[m].setAttribute("style","opacity: 1;");
	circle_div[m].setAttribute("class","active_circle");
}

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
