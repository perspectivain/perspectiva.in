jQuery(document).ready(function(){
  var fixNavigationBackground = function(){
    120 < jQuery(window).scrollTop() ? jQuery(".bg-inverse").removeClass("bg-transparent") : jQuery(".bg-inverse").addClass("bg-transparent")
  };

  jQuery(window).scroll(fixNavigationBackground);
  fixNavigationBackground();
});
