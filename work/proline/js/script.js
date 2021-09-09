$('#toggle').click(function () {
    $('ul').slideToggle();
});

$('.mission').click(function () {
    $('#mission').show();
    $('#vision').hide();
    $('.vision').css({
        background: "#c7c7c7",
        border: "1px solid"
    }, "slow");
    $('.mission').css({
        background: "#fff",
        border: "0"
    }, "slow");

});

$('.vision').click(function () {
    $('#vision').show();
    $('#mission').hide();
    $('.mission').css({
        background: "#c7c7c7",
        border: "1px solid"
    }, "slow");
    $('.vision').css({
        background: "#fff",
        border: "0"
    }, "slow");
});