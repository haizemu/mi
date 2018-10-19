//减商品数量
$(".gwc_change_num").children(":first-child").click(reduce);
function reduce(){
	var num=$(this).next();
	var total=$(this).parent().parent().next().children(":first-child");
	var price=$(this).parent().parent().prev().children(":first-child");
	var price_val=parseInt(price.html());
	var num_val=num.html();
	if(num_val>1){
		num_val--;
	}
	num.html(num_val);
	total.html(price_val*num_val+"元");
	Total_add();
	num_add();
}
//加商品数量
$(".gwc_change_num").children(":last-child").click(plus);
function plus(){
	var num=$(this).prev();
	var total=$(this).parent().parent().next().children(":first-child");
	var price=$(this).parent().parent().prev().children(":first-child");
	var price_val=parseInt(price.html());
	var num_val=num.html();
	num_val++;
	num.html(num_val);
	total.html(price_val*num_val+"元");
	Total_add();
	num_add();
}

//总价相加
function Total_add(){
	var Total=0;
	var total_list=$(".gwc_list_show .gwc_total");
	total_list.each(function(){
		if($(this).parent().children(":first").children(":first").is(':checked')){//选中商品才计算
		Total+=parseInt($(this).children(":first").html());
		}
	});
	$("#gwc_total").html(Total);
	if(gwc_total.innerHTML==0){
		btn.style.background="#adadad";
	}
	else{
		btn.style.background="#ff6700";
	}
}

//数量相加
function num_add(){
	var num=0;
	var num2=0;
	var num_list=$(".gwc_change_num");
	num_list.each(function(){
		num+=parseInt($(this).children(":nth-child(2)").html());
		if($(this).parent().parent().children(":first").children(":first").is(':checked')){//选中商品才计算
		num2+=parseInt($(this).children(":nth-child(2)").html());
		}
	});
	$("#gwc_num1").html(num);
	$("#gwc_num2").html(num2);
}
//勾选
$("[type=checkbox]").click(checkbox);
function checkbox(){
	var one = document.getElementsByName('cheack');
	if($(this).attr("name")=="All_cheack"){
		if($(this).is(':checked')){
		for(i=0;i<one.length;i++){
			one[i].checked=true;
			}

		}
		else{
			for(i=0;i<one.length;i++){
			one[i].checked=false;
			}
		}
	}
	else{
		if(!$(this).is(':checked')){
			All_cheack.checked=false;
		}
	}
	Total_add();
	num_add();
}


//删除
$(".gwc_cuowu").click(delete_goods);

function delete_goods(){
	$list=$(this).parent().parent().parent();
	$(".gwc_mtk").show(200);
	var timer=setTimeout(function(){
		$(".gwc_modal-bd").animate({
		top:"200px"
	});
	},200);
	$(".gwc_modal-bd").css("position","fixed");
	$(".gwc_close").click(function(){
		$(".gwc_mtk").hide(200);
		$(".gwc_modal-bd").attr("style","top:-270px;");
	});
	
	$(".gwc_quxiao").click(function(){
		$(".gwc_mtk").hide(200);
		$(".gwc_modal-bd").attr("style","top:-270px;");
	});
	
	$(".gwc_queding").click(function(){
		$(".gwc_mtk").hide(200);
		$list.remove();
		Total_add();
		num_add();
	});
}

$(".gwc_add").click(add);

function add(){
	$(this).parent().parent().prev().animate({
		top:"0",
	},300);
	$name=$(this).parent().prev().prev().html();
	$price=$(this).parent().prev().html();
	$img=$(this).parent().prev().prev().prev().children(":first").attr("src");
	create_goods($name,$price,$img)
	num_add();
	Total_add();
	setTimeout(()=>$(this).parent().parent().parent().remove(),800);
	setTimeout(create_list,800);
}

function create_goods(name,price,img){
	$gwc_cuowu=$("<span class='gwc_cuowu'><i class='iconfont icon-cuowu' style='font-size: 18px;'></i></span>").click(delete_goods);
	$gwc_action=$('<div class="gwc_action"></div>');//1
	$gwc_action.append($gwc_cuowu);
	
	$gwc_total=$('<div class="gwc_total"></div>');//2
	$total=$("<span></span>").html(price);
	$gwc_total.append($total);
	
	
	
	$icon_jianhao=$('<span><i class="iconfont icon-jianhao " style="font-size: 20px;"></i></span>').click(reduce);
	$num=$("<span>1</span>");
	$icon_jiahao=$('<span><i class="iconfont icon-jiahao " style="font-size: 20px;"></i></span>').click(plus);
	$gwc_change_num=$('<div class="gwc_change_num clear"></div>').append($icon_jianhao).append($num).append($icon_jiahao)
	$gwc_num=$('<div class="gwc_num"></div>').append($gwc_change_num);//3
	
	$price=$("<span></span>").html(price);
	$gwc_price=$('<div class="gwc_price"></div>').append($price);//4
	
	$name=$('<a href="#"></a>').html(name);
	$span_name=$('<span></span>').append($name);
	$gwc_commodity_name=$('<div class="gwc_commodity_name"></div>').append($span_name);//5
	
	$img=$('<img />').attr("src",img);
	$gwc_img=$('<div class="gwc_img"></div>').append($img);//6
	
	$checkbox=$('<input type="checkbox" name="cheack" id="cheack" checked/>').click(checkbox);
	$gwc_cheack=$('<div class="gwc_cheack"></div>').append($checkbox);//7
	
	$gwc_list_head=$('<div class="gwc_list_head clear"></div>');
	$gwc_list_head.append($gwc_cheack).append($gwc_img).append($gwc_commodity_name).append($gwc_price).append($gwc_num).append($gwc_total).append($gwc_action);
	
	$gwc_list_show=$('<div class="gwc_list_show"></div>').append($gwc_list_head);
	$('#gwc_form_list').append($gwc_list_show);

}

var arr=[[{img:"img/pms_1527240178.74386819!140x140.jpg",name:"小米降噪耳机Type-C版",pirce:"299元",pelope:"8755人好评"}],
		[{img:"img/pms_1479795811.90232017!140x140.jpg",name:"小米家用台灯",pirce:"249元",pelope:"527人好评"}]	,		
		[{img:"img/pms_1480563690.92225606!140x140.jpg",name:"小米手表",pirce:"219元",pelope:"5527人好评"}],		
		[{img:"img/pms_1522395460.24274957!140x140.jpg",name:"小米T桖",pirce:"199元",pelope:"1.5万人好评"}],		
		[{img:"img/pms_1537237102.41069374!140x140.jpg",name:"小米闹钟",pirce:"89元",pelope:"2.5万人好评"}],		
		[{img:"img/pms_1496833357.9528722!140x140.jpg",name:"小米充电线",pirce:"39元",pelope:"3.5万人好评"}],		
		[{img:"img/pms_1532592241.10593403!140x140.jpg",name:"车用后视镜",pirce:"239元",pelope:"5000人好评"}]		
]
console.log(arr[0][0].img);
function create_list(){
	var r=parseInt(Math.random()*(6+1));
	$gwc_add=$("<div class='gwc_add'>加入购物车</div>").click(add);
	$pelope=$("<dd></dd>").html(arr[r][0].pelope);//1
	$pelope.append($gwc_add);
	$price=$("<dd></dd>").html(arr[r][0].pirce);//2
	$name=$("<dd></dd>").html(arr[r][0].name);//3
	$img=$("<img/>").attr("src",arr[r][0].img);
	$dt=$("<dt></dt>").append($img);//4
	$dl=$("<dl></dl>").append($dt).append($name).append($price).append($pelope);
	$gwc_succes=$("<div class='gwc_succes'>成功加入购物车</div>");
	$gwc_recommend_list=$("<li class='gwc_recommend_list'>").append($gwc_succes).append($dl);
	$(".gwc_row").append($gwc_recommend_list);
}

btn.onclick=function(){
	if(gwc_total.innerHTML>0){
	location.href="scdd.html";
	}
}



$top_max=445;
$(window).scroll(function(){
	$top=$(".gwc_clearfix").offset().top;
	if($top>$top_max){
		$top_max=$top;
	}
	$btn_top=$top_max+50-$(window).scrollTop();
	$scrren=$(window).height();
	 if($btn_top>$scrren){
	 	$(".gwc_clearfix").css("position","fixed").css("bottom","0").css("box-shadow",'#adadad 0px 0px 6px');
	 }
	 else{
	 	$(".gwc_clearfix").css("position","static").css("box-shadow",'#adadad 0px 0px 0px');
	 }
})