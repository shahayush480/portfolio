// fixed nav bar 
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset != sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// nav bar toggle
$(".menu").click(function() {
    $(".navigation").slideToggle()
});


/*owl carousel*/
$(document).ready(function() {
    $("div.owl-carousel").owlCarousel({
        items: 1
    });
});
$(document).ready(function() {
    $(".inspired .owl-carousel").owlCarousel({
        items: 3,
        nav: true,
        dots: false,
        navText: ["←", "→"]
    });
});

// features desktop view
$(".item-1").click(function() {
    $(".item-1").addClass("active");
    $(".item-5").removeClass("active");
    $(".item-2").removeClass("active");
    $(".item-3").removeClass("active");
    $(".item-4").removeClass("active");
});
$(".item-2").click(function() {
    $(".item-2").addClass("active");
    $(".item-5").removeClass("active");
    $(".item-1").removeClass("active");
    $(".item-3").removeClass("active");
    $(".item-4").removeClass("active");
});
$(".item-3").click(function() {
    $(".item-3").addClass("active");
    $(".item-5").removeClass("active");
    $(".item-2").removeClass("active");
    $(".item-1").removeClass("active");
    $(".item-4").removeClass("active");
});
$(".item-4").click(function() {
    $(".item-4").addClass("active");
    $(".item-5").removeClass("active");
    $(".item-2").removeClass("active");
    $(".item-3").removeClass("active");
    $(".item-1").removeClass("active");
});
$(".item-5").click(function() {
    $(".item-5").addClass("active");
    $(".item-1").removeClass("active");
    $(".item-2").removeClass("active");
    $(".item-3").removeClass("active");
    $(".item-4").removeClass("active");
});

