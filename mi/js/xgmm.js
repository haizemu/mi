$(".nav ul li").click(function(){
	$(".nav ul li a").removeClass("active");
	$(".nav ul li .sjx").css("display","none");
	$(this).children("a").addClass("active");
	$(this).children(".sjx").css("display","block");
	if($(this).attr("class")=="d1"){
		$(".content1").css("display","block");
		$(".content2").css("display","block");
		$(".content3").css("display","none");
		$(".content4").css("display","none");
		$(".content5").css("display","none");
	}else if($(this).attr("class")=="d2"){
		$(".content1").css("display","none");
		$(".content2").css("display","none");
		$(".content3").css("display","block");
		$(".content4").css("display","none");
		$(".content5").css("display","none");
	}else if($(this).attr("class")=="d3"){
		$(".content1").css("display","none");
		$(".content2").css("display","none");
		$(".content3").css("display","none");
		$(".content4").css("display","block");
		$(".content5").css("display","none");
	}else if($(this).attr("class")=="d4"){
		$(".content1").css("display","none");
		$(".content2").css("display","none");
		$(".content3").css("display","none");
		$(".content4").css("display","none");
		$(".content5").css("display","block");
	}
})

$(".changepwd").click(function(){
	$(".fixed").fadeIn(100);
	$(".fixed-box").css("margin-top","-200px");
	$("html").css("overflow","hidden");
})
$(".close1").click(function(){
	$(".fixed").fadeOut(100);
	$(".fixed-box").css("margin-top","-400px");
	$("html").css("overflow","");
})
$(".no").click(function(){
	$(".fixed").fadeOut(100);
	$("html").css("overflow","");
})

$(".change1").click(function(){
	$(".fixed1").fadeIn(100);
	$(".fixed1-box").css("margin-top","-200px");
	$("html").css("overflow","hidden");
})
$(".close1").click(function(){
	$(".fixed1").fadeOut(100);
	$(".fixed1-box").css("margin-top","-400px");
	$("html").css("overflow","");
})
$(".no").click(function(){
	$(".fixed1").fadeOut(100);
	$("html").css("overflow","");
})

//表单
var reg=document.getElementById("reg");
var pwd=document.getElementById("pwd");
var ispwd="";
pwd.onblur=function(){
	var upwd=this.value.trim();
	var error1=document.getElementById("error1");
	var erro1=document.getElementById("ee1");
	if(upwd==""){
		error1.innerHTML="原密码不能为空";
		erro1.style.display="block";
		return ispwd=false;
	}else{
		erro1.style.display="none";				
		return ispwd=true;
	}
}
var pwd1=document.getElementById("pwd1");
var ispwd1;
var reg1=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
pwd1.onblur=function(){
	var upwd1=this.value.trim();
	var error2=document.getElementById("error2");
	var erro2=document.getElementById("ee2");
	if(upwd1=="" || !reg1.test(upwd1)){
		error2.innerHTML="密码长度8~16位，包含数字、字母";
		erro2.style.display="block";
		return ispwd1=false;	
	}else{
		erro2.style.display="none";
		return ispwd1=true;
	}
}
var pwd2=document.getElementById("pwd2");
var ispwd2;
pwd2.onblur=function(){
	var upwd2=this.value.trim();
	var error4=document.getElementById("error4");
	var erro4=document.getElementById("ee4");
	var upwd1=document.getElementById("pwd1").value.trim();	
	if(upwd2!=upwd1){
		error4.innerHTML="两次输入不一致";
		erro4.style.display="block";
		return ispwd2=false;			
	}else{
		erro4.style.display="none";
		return ispwd2=true;	
	}
}
var yzm=document.getElementById("yzm");
var isyzm;
var verifyCode = new GVerify("v_container");	
yzm.onblur=function(){
	var uyzm=verifyCode.validate(document.getElementById("yzm").value);
	var error3=document.getElementById("error3");
	var erro3=document.getElementById("ee3");	
	if(!uyzm){
		error3.innerHTML="验证码输入错误";
		erro3.style.display="block";
		return isyzm=false;		
	}else{
		erro3.style.display="none";
		return isyzm=true;					
	}
}

document.getElementById("yes").onclick=function(){
	if(ispwd && ispwd1 && ispwd2 && isyzm){
		alert("修改成功");
		window.location.href="xgmm.html";
	}else{
		alert("修改失败，请核对信息");
	}
}
