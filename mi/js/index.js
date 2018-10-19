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

$(".in_more_btn").click(function(){
	console.log($(this).html());
	if($(this).html() == "&lt;"){
		if($(".in_sgr_con>ul").css('margin-left') == "-1240px"){
			$(this).css("cursor","pointer");
			$(this).siblings().css("cursor","pointer");
			$(".in_sgr_con>ul").css('margin-left',"-248px");
		}else if($(".in_sgr_con>ul").css('margin-left') == "-248px"){
			$(this).css("cursor","default");
			$(".in_sgr_con>ul").css('margin-left',"0px");
		}else if($(".in_sgr_con>ul").css('margin-left') == "-992px"){
			$(this).css("cursor","default");
			$(".in_sgr_con>ul").css('margin-left',"0px");
		}
	}else{
		if($(".in_sgr_con>ul").css('margin-left') == "0px"){
			$(".in_sgr_con>ul").css('margin-left',"-992px");
			$(this).siblings().css("cursor","pointer");
		}else if($(".in_sgr_con>ul").css('margin-left') == "-248px"){
			$(this).css("cursor","default");
			$(".in_sgr_con>ul").css('margin-left',"-1240px");
		}else if($(".in_sgr_con>ul").css('margin-left') >= "-992px"){
			$(".in_sgr_con>ul").css('margin-left',"-1240px");
			$(this).css("cursor","default");
		}
	}
});
$(function(){
	$(".in_sj_li s").parent().parent().next().css("background","#e53935");
});

$(".in_jdtit_right ul li").mouseover(function(){
	$(this).attr("class","in_jdtit_active");
	$(this).siblings().attr("class","");
	var $i = parseInt($(this).attr("value"))+1;
//	console.log($(".in_jdcon_right ul:nth-child("+$i+")"));
	var $ul = $(".in_jdcon_right ul:nth-child("+$i+")");
	$ul.attr("class","");
	$ul.siblings().attr("class","in_jd_ulhide");
});

//小米闪购倒计时定时器
$(function(){
	timer = setInterval(function(){
		var $time = $(".in_sgl_time span").html();
//		console.log(new Date().getDate())
		var $date = new Date().getDate();
		var now = new Date();
		var nextTime = new Date("2018/10/"+$date+" "+$time+":00");
		var change = parseInt((nextTime-now)/1000);
		var hour = $(".in_sgl_shijianh");
		var minutes = $(".in_sgl_shijianm");
		var second = $(".in_sgl_shijians");
		if(change>0){
			var h = parseInt(change/3600);
			h<10 && (h = "0"+h);
			var m = parseInt(change%3600/60);
			m<10 && (m = "0"+m);
			var s = parseInt(change%60);
			s<10 && (s = "0"+s);
			hour.html(h);
			minutes.html(m);
			second.html(s);
		}else{
			second.html("00");
			clearInterval(timer);
			timer = null;
		}
	},1000);
})

//轮播
$(function(){
		var btnr = document.getElementsByClassName("in_carRight")[0];
		var btnl = document.getElementsByClassName("in_carLeft")[0];
		var in_car=document.getElementsByClassName("in_car")[0];
		var carli = document.getElementsByClassName("in_carul")[0];
		var lii =carli.getElementsByTagName("li");
		var imgs = in_car.getElementsByTagName("a");
		var in_section=document.getElementsByClassName("in_section")[0];
		var j=0;
		btnr.onclick=function(){
		    for(var i=0;i<imgs.length;i++){
		        imgs[i].style.opacity="0";//清空所有的显示
		        lii[i].setAttribute("class","");//清空lis的红点样式
		    }
		    if(j<4){
		        j++;//不大于图片张数让下一张显示
		        imgs[j].style.opacity="1";
		            lii[j].className="in_caractive";
		    }else{//如果大于图片的张数则返回第一张
		        j=0;
		        imgs[j].style.opacity="1";
		            lii[j].className="in_caractive";
		    }
		}
		btnl.onclick = function(){//右按键 循环图片张数
		    for(var i=0;i<imgs.length;i++){
		        imgs[i].style.opacity="0";//清空所有的显示
		        lii[i].setAttribute("class","");//清空lis的红点样式
		    }
		    if(j>0){
		        j--;//不大于图片张数让下一张显示
		        imgs[j].style.opacity="1";
		            lii[j].className="in_caractive";
		    }else{//如果大于图片的张数则返回第一张
		        j=4;
		        imgs[j].style.opacity="1";
		            lii[j].className="in_caractive";
		    }
		}
		function lb(){
		    for(var i=0;i<lii.length;i++){
		        lii[i].value = i;
		        lii[i].onclick = function (){
		            var value = this.getAttribute("value");
		            for(var j=0;j<lii.length;j++){
		                lii[j].className="";
		                imgs[j].style.opacity = "0";
		            }
		            this.className="in_caractive";
		            imgs[value].style.opacity = "1";
		        }
		    }
		}
		lb();
		var timer=setInterval(btnr.onclick,5000);	
		in_section.onmouseover=function(){
		    clearInterval(timer);
		    timer=null;
		}
		in_section.onmouseout=function(){
		    timer=setInterval(btnr.onclick,5000);
		}
		
//		console.log(1);
})
$(window).scroll(function(){
	var topp = $(document).scrollTop();
	if(topp > 300){
		$(".in_right_fixed li:last-child").css("opacity","1")
	}else{
		$(".in_right_fixed li:last-child").css("opacity","0")
	}
});


//*********************************************
var i=0;
$(".in_Recommend_rbtn").click(function(){
	i++;
	if(i<=3){
		$(".in_Recommend_lunbo").css({
			left:-1240*i+"px",
			transition:"all 0.25s"
		});
		$(".in_Recommend_lbtn i").css({
	       color: '#b0b0b0'
		});
		$(".in_Recommend_lbtn i").mouseover(function(){
			$(".in_Recommend_lbtn i").css({
		       color: '#FF6700'
			});
		});
	}else{
		i=3;
		$(".in_Recommend_rbtn i").css({
	       color: '#e0e0e0'
		});
		return false;
	}
	console.log(i);
});
$(".in_Recommend_lbtn").click(function(){
	i--;
	if(i>=0){
		$(".in_Recommend_lunbo").css({
			left:-1240*i+"px",
			transition:"all 0.25s"
		});
		$(".in_Recommend_lbtn i").css({
	       color: '#b0b0b0'
		});
		$(".in_Recommend_rbtn i").mouseover(function(){
			$(".in_Recommend_rbtn i").css({
		       color: '#FF6700'
			});
		});
	}else{
		i=0
		$(".in_Recommend_lbtn i").css({
	       color: '#e0e0e0'
		});
		return false;
	}
	
		console.log(i);
});
//内容
var k=0;
$(".bhf1 .in_Contents_include_rbtn").click(function(){
	k++
	if(k<3){
//		$(".dw_point li").attr("class","");
		$(this).next().children().attr("class","");
		$(this).prev().prev().css({
			left:-296*k+"px",
			transition:"all 0.25s"
		});
		$(this).next().children()[k].setAttribute("class","active");
		
	}else{
		k=3;
		return false;
	}
});
$(".bhf1 .in_Contents_include_lbtn").click(function(){
	if(k>0){
		$(this).next().next().children().attr("class","");
		$(this).prev().css({
			left:-296*(k-1)+"px",
			transition:"all 0.25s"
		});
		$(this).next().next().children()[k-1].setAttribute("class","active");
	}else{
		k=0;
		return false;
	}
	k--;
});
$(".bhf1 .dw_point li").click(function(e){
	$(this).parent().children().attr("class","");
	e.target.setAttribute("class","active");
	let xh=e.target.value;
	k=xh;
	$(this).parent().prev().prev().prev().css({
		left:-296*xh+"px",
		transition:"all 0.25s"
	});
});
//2
var m=0;
$(".bhf2 .in_Contents_include_rbtn").click(function(){
	m++
	if(m<=3){
//		$(".dw_point li").attr("class","");
		$(this).next().children().attr("class","");
		$(this).prev().prev().css({
			left:-296*m+"px",
			transition:"all 0.25s"
		});
		$(this).next().children()[m].setAttribute("class","active");
		
	}else{
		m=3;
		return false;
	}
	
	console.log(m)
});
$(".bhf2 .in_Contents_include_lbtn").click(function(){
	m--;
	if(m>=0){
		$(this).next().next().children().attr("class","");
		$(this).prev().css({
			left:-296*m+"px",
			transition:"all 0.25s"
		});
		$(this).next().next().children()[m].setAttribute("class","active");
	}else{
		m=0;
		return false;
	}
	console.log(m)
});
$(".bhf2 .dw_point li").click(function(e){
	$(this).parent().children().attr("class","");
	e.target.setAttribute("class","active");
	let xh=e.target.value;
	m=xh;
	$(this).parent().prev().prev().prev().css({
		left:-296*xh+"px",
		transition:"all 0.25s"
	});
});
//3
var n=0;
$(".bhf3 .in_Contents_include_rbtn").click(function(){
	n++
	if(n<=3){
//		$(".dw_point li").attr("class","");
		$(this).next().children().attr("class","");
		$(this).prev().prev().css({
			left:-296*n+"px",
			transition:"all 0.25s"
		});
		$(this).next().children()[n].setAttribute("class","active");
		
	}else{
		n=3;
		return false;
	}
	
	console.log(n)
});

$(".bhf3 .in_Contents_include_lbtn").click(function(){
	n--;
	if(n>=0){
		$(this).next().next().children().attr("class","");
		$(this).prev().css({
			left:-296*n+"px",
			transition:"all 0.25s"
		});
		$(this).next().next().children()[n].setAttribute("class","active");
	}else{
		n=0;
		return false;
	}
	
	console.log(n)
});
$(".bhf3 .dw_point li").click(function(e){
	$(this).parent().children().attr("class","");
	e.target.setAttribute("class","active");
	let xh=e.target.value;
	n=xh;
	$(this).parent().prev().prev().prev().css({
		left:-296*xh+"px",
		transition:"all 0.25s"
	});
});
//4
var j=0;
$(".bhf4 .in_Contents_include_rbtn").click(function(){
	j++
	if(j<=3){
//		$(".dw_point li").attr("class","");
		$(this).next().children().attr("class","");
		$(this).prev().prev().css({
			left:-296*j+"px",
			transition:"all 0.25s"
		});
		$(this).next().children()[j].setAttribute("class","active");
		
	}else{
		j=3;
		return false;
	}
});

$(".bhf4 .in_Contents_include_lbtn").click(function(){
	j--;
	if(j>=0){
		$(this).next().next().children().attr("class","");
		$(this).prev().css({
			left:-296*j+"px",
			transition:"all 0.25s"
		});
		$(this).next().next().children()[j].setAttribute("class","active");
	}else{
		j=0;
		return false;
	}
	
});
$(".bhf4 .dw_point li").click(function(e){
	$(this).parent().children().attr("class","");
	e.target.setAttribute("class","active");
	let xh=e.target.value;
	j=xh;
	$(this).parent().prev().prev().prev().css({
		left:-296*xh+"px",
		transition:"all 0.25s"
	});
});

//video
$(".in_Video_list1_img").click(function(){
	var img1=$(this).children("img").attr("src");
	var txt=$(this).next().children().html();
	console.log(txt);
	$(".in_Video_mtk1 p span:nth(0)").html(txt);
	$(".in_Video_mtk1 video").attr("poster",img1);
	$(".in_Video_mtk1 video source").attr("src","img/video.mp4");
	$(".in_Video_mtk").css({
		opacity:"1",
		"z-index":"20"
	
	});
	$(".in_Video_mtk1").animate({
		top:"50%",
		opacity:"1"
	},500);
});
$(".in_close").click(function(){
	$(".in_Video_mtk1").animate({
		top:"-50%",
		opacity:"0"
	},500).animate({display:"none"},10);
	
	$(".in_Video_mtk").css({
		opacity:"0",
		"z-index":"-1"
	});
});