$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - parseInt($($.attr(this, 'href')).css('padding-top'))
    }, 300);
});
