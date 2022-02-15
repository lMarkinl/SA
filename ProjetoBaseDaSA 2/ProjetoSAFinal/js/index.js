//NAV BAR
$('.navAni').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#link").toggleClass("show_list");
    $("#link").fadeIn();

});

function começar() {
    window.location = ".html"
}
