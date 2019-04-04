$(window).scroll(() => {
    if ($(window).scrollTop() > 50) {
        $('.scrollTop').fadeIn();
    } else {
        $('.scrollTop').fadeOut();
    }
});

$("#scroll").click(function () {
    console.log("HELLO")
    $("html,body").animate({ scrollTop: $("body").offset().top }, "1000");
    // return false
})
