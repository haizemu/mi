$(".login_way a").click(function(){
	$(".login_way a").css("color","#666");
	var index=$(".login_way a").index($(this));
	$(this).css("color","#F56600");
	$(".type").css("display","none");
	$(".type")[index].style.display="block";
})

//点击手机短信登录/注册
$(".sms_login").click(function(){
	$(".typeThree").show();
	$(".typeOne").hide();
})

//点击用户名密码登录
$(".psd_login").click(function(){
	$(".typeThree").hide();
	$(".typeOne").show();
})

//账号密码登录验证
//账号验证
var reg= /^1[34578][0-9]{9}$|^[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}$|^1[0-9]{9}$/;
$("#form_one").submit(function(){
	if(reg.test(username_one.value)){
		if(password_one.value!=""){
			return true;
		}else{
			$(".form_tips").show();
			$(".tip_text").get(0).innerHTML="请输入密码";
			$("#password_one").get(0).focus();
			return false;
		}
		
	}else{
		$(".form_tips").show();
		$(".tip_text").get(0).innerHTML="用户名不正确";
		$("#username_one").get(0).style.border="1px solid #f00";
		$("#username_one").get(0).focus();
		return false;
	}
})

//键盘按下，提示消失
$(".inp_one").keydown(function(){
	$(".form_tips").hide();
})

//手机短信登录
var regsms=/^1[34578][0-9]{9}$/;

//点击获取验证码的验证
$(".get_sms_code").click(function(){
	if(username_three.value==""){
		$(".form_tips").show();
		$(".tip_text_three").get(0).innerHTML="请输入手机号";
		$("#username_three").get(0).style.border="1px solid #f00";
		$("#username_three").get(0).focus();
		return false;
	}else{
		if(regsms.test(username_three.value)){
			$("#sms_code_three").get(0).focus();
			$("#username_three").get(0).style.border="1px solid #e0e0e0";
			return true;
		}else{
			$(".form_tips").show();
			$(".tip_text_three").get(0).innerHTML="手机号格式不正确";
			$("#username_three").get(0).style.border="1px solid #f00";
			$("#username_three").get(0).focus();
			return false;
		}
	}
	
})

//点击“立即登录/注册”的验证
$("#form_three").submit(function(){
	if(username_three.value==""){
		$(".form_tips").show();
		$(".tip_text_three").get(0).innerHTML="请输入手机号";
		$("#username_three").get(0).style.border="1px solid #f00";
		$("#username_three").get(0).focus();
		return false;
	}else if(regsms.test(username_three.value)){
		if(sms_code_three.value!=""){
			return true;
		}else{
			console.log(1);
			$(".form_tips").show();
			$(".tip_text_three").get(0).innerHTML="请输入验证码";
			$("#sms_code_three").get(0).focus();
			return false;
		}
	}else{
		$(".form_tips").show();
		$(".tip_text_three").get(0).innerHTML="手机号格式不正确";
		$("#username_three").get(0).style.border="1px solid #f00";
		$("#username_three").get(0).focus();
		return false;
	}
})

//键盘按下，提示消失
$(".inp_three").keydown(function(){
	$(".form_tips").hide();
})

//短信验证码正则验证，只能是数字
var regs=/^[0-9]{4,}$/;
$("#sms_code_three").keydown(function(){
	if(regs.test(sms_code_three.value)){
		$("#sms_code_three").get(0).innerHTML=sms_code_three.value;
	}else{
		$("#sms_code_three").get(0).innerHTML="";
		
	}
})
