
//设置轮播高度
$(document).ready(function() {
	$("#index .out").css({
		"height": $(window).height() + "px"
	});
	$("#index .inbox").css({
		"width": $(window).width() + "px"
	});
	$("#index .inbox img").css({
		"width": $(window).width()-100 + "px",
		"height": $(window).height()-100 + "px"
	});
});

//轮播

var index=1;
$("#box .inbox").click(function(){
	var boxLeft=$("#box").offset().left;
	if(!$("#box").is(":animated")){
	index++;
	if(index<5){
		$("#box").animate({"left":boxLeft-$(window).width()+"px"},500);
		}
	}
})

//点击跳转
$("#box .inbox .btn").click(function(){
	window.location.href="page/test.html";
})