
//订单详情点击事件
var bool=true;
//$('.section_top_display').css('display','none')
$('.fr a').click(function(){
	if(bool==true){
//		$('.section_top_display').css('display','block')
		$('.order_user').css('opacity','0')
		$('.section_top_display').css('height','165px')
		$('.section_top_display').css('margin-top','10px')
		$('.section_top_display').css('padding-top','20px')
		$('.section_top_display').css('opacity','1')
		$('.section_top_display ul li').css('height','30px')
		$('.section_top_display ul li').css('opacity','1')
		bool=false;
	}else if(bool==false){
		$('.order_user').css('opacity','1')
		$('.section_top_display').css('margin-top','0px')
		$('.section_top_display').css('padding-top','0px')
		$('.section_top_display').css('height','0px')
		$('.section_top_display').css('opacity','0')
		$('.section_top_display ul li').css('height','0px')
		$('.section_top_display ul li').css('opacity','0')
		bool=true;
	}
	
	
//	if(bool==false){
//			$('.section_top_display').css('display','block')
//		}
//	
//	if(bool==true){
//			$('.section_top_display').css('display','none')
//		}
})

