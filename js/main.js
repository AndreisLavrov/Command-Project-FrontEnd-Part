// const owl = $('.owl-carousel');

// owl.owlCarousel({
// 	loop: true,
// margin: 30,
//  center: true,
// 	startPosition: 1,
// 	items: 3,
// });

// $('.slider_btn--prev').click(function () {
// 	owl.trigger('prev.owl.carousel');
// });

// $('.slider_btn--next').click(function () {
// 	owl.trigger('next.owl.carousel');
// });



// var div = document.getElementById('widget_code');
// var display = 0;

// function hideShow() {
// 	if (display == 1) {
// 		div.style.display = 'block';
// 		display = 0;
// 	}
// 	else {
// 		div.style.display = 'none';
// 		display = 1;
// 	}
// }



$(function() {
	function copyToClipboard(element) {
	  var $temp = $("<input>");
	  $("body").append($temp);
	  $temp.val($(element).text()).select();
	  document.execCommand("copy");
	  $temp.remove();
	}
   
	$(".btn_round").on("click", function() {
	  copyToClipboard("#widget_code");
	});
  });