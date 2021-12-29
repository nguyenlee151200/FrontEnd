
document.addEventListener("DOMContentLoaded",function(){
    var navbar = $(".navbar");
    $(window).scroll(function(){
        var oTop = $(".team").offset().top-window.innerHeight;
        if($(window).scrollTop()>oTop){
            navbar.addClass('navbar_fixed');
        }else{
             navbar.removeClass('navbar_fixed');
        }
    });
	
	$(function(){
		new WOW().init();
		
	});

	$(function() {
		$('.chart').easyPieChart({
			easing: 'easeOutElastic',
				delay: 400000,
					trackColor: '#dfe8ed',
					scaleColor: false,
					lineWidth: 15,
					trackWidth: 15,
					size: 180,
					linCap:'',  
		});
	
		$('.button-group button').click(function(event){
			var x=$(this).data('filter');
			console.log(x);
			$('.grid .element-item .our-project').each(function(index, el){
				if($(this).hasClass(x)){
					$(this).show(300);
				}
				else{
					$(this).hide(300);
				}
			});
			// return false;
		});
	});
},false)

