$('.navAni').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#link").toggleClass("show_list");
    $("#link").fadeIn();

});