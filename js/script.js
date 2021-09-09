$(document).ready(function(){
    $('.spinbg').click(function(){
        $(".colors ,.spinbg").toggleClass('actives');
    
    });
    $("ul.theme-color li").click(function(){
      $('html').css("--stylecolor", $(this).css('background-color'));
    });

});







// var i = document.getElementById('increment').innerHTML;

/*

js code
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var pink = document.getElementById("pink");
var ornage = document.getElementById("orange");
var purple = document.getElementById("purple");

red.onclick = function(){
    document.body.classList.toggle("red");
}

blue.onclick = function(){
    document.body.classList.toggle("blue");
}

green.onclick = function(){
    document.body.classList.toggle("green");
}

pink.onclick = function(){
    document.body.classList.toggle("pink");
}

orange.onclick = function(){
    document.body.classList.toggle("orange");
}

purple.onclick = function(){
    document.body.classList.toggle("purple");
}
*/