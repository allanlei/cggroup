$(document).ready(function(){
    $(window).on('resize',function(){location.reload();});
    $('.menu-icon').click(function() {
        $(this).addClass("turn");
        $(".full-menu").fadeIn("fast");
        $('.btn-close').addClass("turn");
        $(".menu-wrapper").addClass("show");
        $(".main-menu li, .side-menu li").addClass("animate");

      });
      $('.btn-close').click(function() {
        $('.menu-icon, .btn-close').removeClass("turn");
        $(".full-menu").fadeOut("fast");
        $(".menu-wrapper").removeClass("show");
        $(".main-menu li, .side-menu li").removeClass("animate");
      });
});