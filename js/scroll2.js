$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top - parseInt($(hash).css('padding-top'))
    }, 300, function() {
      if (history.pushState) {
        history.pushState(null, null, hash);
      } else {
        location.hash = hash;
      }
    });
});
