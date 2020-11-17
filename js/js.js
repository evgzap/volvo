window.onload = function () {
    $('.ontop').click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
    $('a').click(function (event) {
        var scroll = $(this).attr('href');
        if (scroll[0] == '#') {
            event.preventDefault();
            console.log($(scroll).offset().top, this)
            
            window.scrollTo({
                top: $(scroll).offset().top-100,
                behavior: "smooth"
            });
        }

    })
}
