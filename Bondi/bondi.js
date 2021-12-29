document.addEventListener("DOMContentLoaded",function(){
    var navbar = $(".navbar");
    $(window).scroll(function(){
        var oTop = $(".portfolio").offset().top-window.innerHeight;
        if($(window).scrollTop()>oTop){
            navbar.addClass("sticky");
        }else{
             navbar.removeClass("sticky");
        }
    });
    var li = $(".nav-item");
    
},false)