/*toggle nsvbar*/

$('#toggle').click(function(){
    $('.navaside').toggle({
        direction:"right"
    },1000)
});

$("#contact , .cancel").click(function(){
    $('.contactsus').toggle()
})

/*sticky navbar*/
window.onscroll = function() {
    myFunction(),
    scrollFunction()
    
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
        
function myFunction() {
  if (window.pageYOffset != sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/*sticky call*/

var contact = document.getElementById("contact");

const stickyContact = contact.offsetTop;
function scrollFunction() {
  if (window.pageYOffset != stickyContact) {
    contact.style.display = "block";
  } else {
    contact.style.display = "none";
  }
}



 /*typing effect*/

const txt = ["Connecting People","Spreading Happiness", "Creating Stories","Creating Memories", " Fulfilling Adventure"];
let txtIndex=0;
const speed = 200;
let i=0;
let timedelay = 1000;

function typeeffects(){
    if (i < txt[txtIndex].length) {
            document.querySelector(".cursor").textContent+=txt[txtIndex].charAt(i);
            i++;
            setTimeout(typeeffects,speed);
    }
    else{
        setTimeout(eraseeffects, timedelay);
    }
}
function eraseeffects(){
    if (i > 0) {
            document.querySelector(".cursor").textContent=txt[txtIndex].substring(0,i-1);
            i--;
            setTimeout(eraseeffects,speed);
    }
    else{
        txtIndex++;
        if (txtIndex>=txt.length)
            txtIndex=0;
            setTimeout(typeeffects, timedelay);
        
    }
}


document.addEventListener("DOMContentLoaded",function(){
    if(txt.length) setTimeout(typeeffects,200);
})

/*owl carousel*/
$(".carouse .owl-carousel").owlCarousel({
    nav:true,
    navText: ["←","→"],
    responsive:{
        0:{
            items:1,
            nav:false
            
        },
        300:{
            items:1.5,
            merge:true,
            nav:false
        },
        500:{
            items:3
        },
        900:{
            items:4
        }
    }
});
 
 $(".customise .owl-carousel").owlCarousel({
    
    nav:true,
    navText: ["←","→"],
    responsive:{
        0:{
            items:1,
            nav:false,
            merge:true
        },
        300:{
            items:1.5,
            merge:true,
            nav:false
        },
        768:{
            items:3.5,
            merge:true
        }
    }
 });

  
 $(".testimonials .owl-carousel").owlCarousel({
     items:1,
     nav:true,
     loop:true,
     video:true,
     autoplay:true
 });




