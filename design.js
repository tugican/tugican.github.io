$(function() {
			$("#dlistele").jCarouselLite({
			vertical: false, //dikey yapmak için
			hoverPause:true, //üzerine gelince durması için
			visible: 11, //5 adet li
			auto:1500, //bekleme süresi
			speed:500, //hareket hızı
				btnNext: ".ileri-no-style",
				btnPrev: ".geri-no-style"
			});
		});
	
		$(function() {
			$(".duyr").jCarouselLite({
			vertical: true, //dikey yapmak için
			hoverPause:true, //üzerine gelince durması için
			visible: 1, //5 adet li
			auto:4500, //bekleme süresi
			speed:500, //hareket hızı
				btnNext: ".ileri-no-style2",
				btnPrev: ".geri-no-style2"
			});
		});
	
		$(function() {
			$(".dgun").jCarouselLite({
			vertical: true, //dikey yapmak için
			hoverPause:true, //üzerine gelince durması için
			visible: 4, //5 adet li
			auto:4500, //bekleme süresi
			speed:500, //hareket hızı
				btnNext: ".ileri-no-style4",
				btnPrev: ".geri-no-style4"
			});
		});
		$(function() {
			$(".fbil").jCarouselLite({
			vertical: true, //dikey yapmak için
			hoverPause:true, //üzerine gelince durması için
			visible: 4, //5 adet li
			auto:4500, //bekleme süresi
			speed:500, //hareket hızı
				btnNext: ".ileri-no-style5",
				btnPrev: ".geri-no-style5"
			});
		});
	
			$(window).scroll(function(){
			if ($(this).scrollTop() > 100)    // 
			$("#yukari").fadeIn(500);    // ms/s
			else 
			$("#yukari").fadeOut(500);    // sn
			});

			$(document).ready(function(){
			$("#yukari").click(function(){    // 
			$("html, body").animate({ scrollTop: "0" }, 500);    // sn
			// 0 : top temsil
			// 500 : ms 
			return false;
			});
			});
			
			
			
			
			
			
			
			$('.mitem')
			.css({cursor: "pointer"})
			.on({
			mouseenter: function () {
				
				$(this).find('ul').show(100);

			}, mouseleave: function () {
				$(this).find('ul').hide(30);							

			}
			  
			
			})
			
			
			
			
			
			
			
			$(function() {
			$(".ylist").jCarouselLite({
			vertical: false, //dikey yapmak için
			hoverPause:true, //üzerine gelince durması için
			visible: 1, //5 adet li
			auto:4500, //bekleme süresi
			speed:500, //hareket hızı
				btnNext: ".ileri-no-style7",
				btnPrev: ".geri-no-style7"
			});
		});
		$(window).load(function() {
		setTimeout(function(){
		// Animate loader off screen
		$(".se-pre-con").fadeOut("fast");
		},0);
		});
