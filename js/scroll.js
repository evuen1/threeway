$(document).ready(function() {
 
   $("a.anchor").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
   $("a.anchor1").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top-150 + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
 
});