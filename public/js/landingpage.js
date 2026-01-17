$(document).ready(function() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            offset: 120, 
            delay: 0,
            duration: 1500, 
            easing: 'ease', 
            once: true, 
            disable: "mobile"
        });
    }

    // Smooth Scroll
    $(".nav-link").click(function(e) {
        var t = $(this).attr("href");
        if (t && t.startsWith("#")) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $(t).offset().top - 70 // Offset for fixed header
            }, 1000);
        }
    });
});

// Keep your existing scrollFunction for the header
window.onscroll = function() {scrollFunction()};
var element = document.getElementById("body");
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      $(".navbar").addClass("fixed-top");
      element.classList.add("header-small");
      $("body").addClass("body-top-padding");
  } else {
      $(".navbar").removeClass("fixed-top");
      element.classList.remove("header-small");
      $("body").removeClass("body-top-padding");
  }
}
