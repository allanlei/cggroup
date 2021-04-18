// Get titles from the DOM
var titleMain  = $("#animatedHeading");
var titleSubs  = titleMain.find("slick-active");
if ($(window).width() > 960) {


  if (titleMain.length) {

    titleMain.slick({
      autoplay: false,
      arrows: true,
      dots: false,
      slidesToShow:5,
      centerPadding: "0",
      draggable: false,
      infinite: true,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      vertical: true,
      speed: 1000,
      autoplaySpeed: 2000,
      useTransform: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      adaptiveHeight:true
    });

    // On init
    $(".slick-dupe").each(function(index, el) {
      $("#animatedHeading").slick('slickAdd', "<div class=" +"slick-dupe" + ">" + el.innerHTML + "</div>");
    });

    // Manually refresh positioning of slick
    titleMain.slick('slickPlay');
  };
  
}