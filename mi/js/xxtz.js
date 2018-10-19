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

//修改
$(".fnav>ul>li").mouseenter(function(){		 
	let n=$(this).attr("value");
	console.log(n)
	if(n=="no" ||n=="fl"){
		$(".tcMenu").css("display","none");
	}
	if(!isNaN(n)){
		$(".tcMenu").css("display","block");
		if(n==1){
			$(".da").css("left","0px");
		}
		if(n==2){
			$(".da").css("left","-1230px");
		}
		if(n==3){
			$(".da").css("left","-2450px");
		}
		if(n==4){
			$(".da").css("left","-3843px");
		}
		if(n==5){
			$(".da").css("left","-5068px");
		}
		if(n==6){
			$(".da").css("left","-6376px");
		}
		if(n==7){
			$(".da").css("left","-7644px");
		}
		if(n==8){
			$(".da").css("left","-8643px");
		}
	}
	
})
$(".fnav>ul").mouseleave(function(){		 
	$(".tcMenu").slideUp(100,"linear");
})