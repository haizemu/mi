//导航条上的效果
$(document).ready(function(){				 
	$(".gwc").mouseenter(e=>{
			e.preventDefault();
   			 $(".gwc_ul").slideDown(100,"linear");
 	});
 	$(".gwc").mouseleave(e=>{
			e.preventDefault();
   			 $(".gwc_ul").slideUp(100,"linear");
 	});
 	$(".hv1").mouseenter(e=>{
			e.preventDefault();
   			 $(".us_hv").slideDown(100,"linear");
 	});
 	$(".hv1").mouseleave(e=>{
			e.preventDefault();
   			 $(".us_hv").slideUp(100,"linear");
 	});
 	
});

//搜索框的效果
$("#ipt").focus(function(){
	//找到下一个兄弟元素和父元素的父元素
	$(this).next().css("borderColor","#FF6700");
	$(this).parents().css("borderColor","#FF6700");
	$(".s_index").css("display","block");
	$(".s_a").fadeOut();
})

$("#ipt").blur(function(){
	//找到下一个兄弟元素和父元素的父元素
	$(this).next().css("borderColor","#ccc");
	$(this).parents().css("borderColor","#ccc");
	$(".s_index").css("display","none");
	$(".s_a").fadeIn();
})

$(".ddym li").click(function(){
	$(".ddym li").css("color","#666");
	$(this).css("color","#FF6700");
	$(".box-bd").css("display","none");
	let num=$(this).attr("value");
	$(".box-bd")[num].style.display="block";
	
})


$(".fnav>ul>li").mouseenter(function(){		 
	let n=$(this).attr("value");
	console.log(n)
	if(n=="no" ||n=="fl"){
		$(".tcMenu").css("display","none");
	}
	if(!isNaN(n)){
		$(".tcMenu").slideDown(100,"linear");
		$(".da").css("left",-((n-1)*1226)+"px");
	}
	
})
$(".fnav>ul").mouseleave(function(){		 
	$(".tcMenu").slideUp(100,"linear");
})
//$(".qbsp").mouseenter(function(){
//	if($(this).attr("value")=="fl"){
//		$(".shop").css("display","block");
//	}
//})
//$(".shop").mouseleave(function(){
//		$(".shop").css("display","none");
//})
//$(".fnav>ul>li").mouseenter(function(){
//	if($(this).attr("value")!="fl"){
//		$(".shop").css("display","none");
//	}
//})