$(".start").click(function(){
    $(".startmenu").slideToggle({
        direction:"bottom"
    },1000);
});

$(".file-explore").click(function(){
    $(".file-explorer").toggle();
})