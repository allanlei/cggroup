$(document).ready(function(){
    $(window).on('resize',function(){location.reload();});
    $('.menu-icon').click(function() {
        $(".full-menu").show();
      });
      $('.btn-close').click(function() {
        $(".full-menu").hide();
      });
});