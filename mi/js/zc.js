var reg=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
function one(){
	if(!$(".zc_inp").val()){
		$(".zc_alert1").css("display","block");
		$(".zc_btn").attr("type","button");
		$(".zc_inp").attr("ll","false");
	    $(".zc_alert1 span").html("请输入手机号码");
		$(".zc_inp").css("border","0.5px solid #f66")
		
	}
	if($(".zc_inp").val()){
		var str=$(".zc_inp").val();
		if(!reg.test(str)){
		    $(".zc_alert1").css("display","block");
			$(".zc_alert1 span").html("手机号码格式错误");
			$(".zc_btn").attr("type","button");
			$(".zc_inp").css("border","0.5px solid #f66")
		}
		else{
			$(".zc_alert1").css("display","none");
			$(".zc_inp").attr("ll","true");
			$(".zc_inp").css("border","none")
			
		}
	}
	
	
	
}
function two(){
	if($(".zc_privacy i").attr("class")=="zc_iconselect1"){
	    	$(".zc_alert2").css("display","none");
	    	$(".zc_privacy").attr("ll","true");
			
		    
	}
	else{
		$(".zc_alert2").css("display","block");
			$(".zc_btn").attr("type","button");
		    $(".zc_privacy").attr("ll","false");
	}
}
var str=$(".zc_inp").val();
$(".zc_inp").on('input',function() {
	var str1=$(".zc_inp").val();
	    if(str1!=str){
	    	$(".zc_alert1").css("display","none");
	    }
	$(".zc_inp").css("border","none")
})
$(".zc_inp").blur(function(){
	one();
})
$(".zc_privacy").click(function(){
	if($(".zc_privacy i").attr("class")=="zc_iconselect1"){
		$(".zc_privacy i").attr("class","zc_iconselect2")
        
		
	}
	else{
		$(".zc_privacy i").attr("class","zc_iconselect1")
		$(".zc_alert2").css("display","none");
		
	}
})

$(".zc_btn").click(function(){
	one();
	two();
	if($(".zc_privacy").attr("ll")=="true"&&$(".zc_inp").attr("ll")=="true"){
			$(".zc_btn").attr("type","submit");
		
	}
	
})
