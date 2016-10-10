$(document).ready(function() {

	var curItemStr;
	var curItemListStr;

	$(".bigPrize-list li").click(function() {
		var curIndex = $(this).index();
		$(".pop").fadeIn('slow');
		$(".prev-btn").fadeIn('slow');
		$(".next-ptn").fadeIn('slow');
		var curItem = $(".content-haoli .window").eq(curIndex).css({
			'margin-left': '-299px',
			'margin-top': '-70px'
		});
		curItem.css('display', 'block').animate({
			marginTop: -270,
			opacity: 1
		}, 300, function() {
			curItemListStr = ".content-haoli .window";
			curItemStr = ".content-haoli .window:visible";
		});
	});

	//	限时好礼
	$(".timePrize-list li").click(function() {
		var curIndex = $(this).index();
		$(".pop").fadeIn('slow');
		$(".prev-btn").fadeIn('slow');
		$(".next-ptn").fadeIn('slow');
		var curItem = $(".content-moreInfo .window").eq(curIndex);
		curItem.css('display', 'block').animate({
			marginTop: -270,
			opacity: 1
		}, 300, function() {
			curItemListStr = ".content-moreInfo .window";
			curItemStr = '.content-moreInfo .window:visible';
		});

	});

	//	关闭按钮
	$(".close-btn").click(function() {
		$(".pop").fadeOut('slow');
		var curItem = $(this).parent();
		curItem.animate({
			marginTop: -70,
			opacity: 0
		}, 300, function() {
			$(this).css('display', 'none')
		});
	});

	////	左按钮点击
	//	$(".prev-btn").click(function(){
	//		var total = $('.content-haoli .window').length;
	//		var curIndex = $(".content-haoli .window:visible").index();
	//		var nextIndex = (curIndex == total-1) ? 0 : curIndex+1;
	//		$('.content-haoli .window:visible').animate({marginLeft:201,marginTop:-270,opacity:0},300,function(){$(this).css('display','none')});
	//		
	//		var nextItem = $(".content-haoli .window").eq(nextIndex).css({marginLeft:-799,marginTop:-270,opacity:0,display:'block'});
	//		nextItem.animate({marginLeft:-299,opacity:1},300);
	//		
	//	});
	////	有按钮点击
	//	$(".next-ptn").click(function(){
	//		var total = $(".content-haoli .window").length;
	//		var curIndex = $(".content-haoli .window:visible").index();
	//		var prevIndex = (curIndex == 0) ? total-1: curIndex-1;
	//		$(".content-haoli .window:visible").animate({marginLeft:-799,marginTop:-270,opacity:0},300,function(){$(this).css('display','none')});
	//		var nextItem = $(".content-haoli .window").eq(prevIndex).css({marginLeft:201,marginTop:-270,opacity:0,display:'block'});
	//		nextItem.animate({marginLeft:-299,opacity:1},300);
	//	});
	$(".prev-btn").click(function() {
		var total = $(curItemListStr).length;
		var curIndex = $(curItemStr).index();
		var nextIndex = (curIndex == total - 1) ? 0 : curIndex + 1;
		$(curItemStr).animate({
			marginLeft: 201,
			marginTop: -270,
			opacity: 0
		}, 300, function() {
			$(this).css('display', 'none')
		});

		var nextItem = $(curItemListStr).eq(nextIndex).css({
			marginLeft: -799,
			marginTop: -270,
			opacity: 0,
			display: 'block'
		});
		nextItem.animate({
			marginLeft: -299,
			opacity: 1
		}, 300);
	});
	$(".next-ptn").click(function() {
		var total = $(curItemListStr).length;
		var curIndex = $(curItemStr).index();
		var prevIndex = (curIndex == 0) ? total - 1 : curIndex - 1;
		$(curItemStr).animate({
			marginLeft: -799,
			marginTop: -270,
			opacity: 0
		}, 300, function() {
			$(this).css('display', 'none')
		});
		var nextItem = $(curItemListStr).eq(prevIndex).css({
			marginLeft: 201,
			marginTop: -270,
			opacity: 0,
			display: 'block'
		});
		nextItem.animate({
			marginLeft: -299,
			opacity: 1
		}, 300);
	});
});