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

$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();

    $('[data-section]').each(function() {
        var topDistance = $(this).offset().top-100;

        if ( (topDistance) < scrollTop ) {
                 console.log(typeof 'href=#'+$(this).attr('id'));
                  $('a[href^="#"]').removeClass('active');
                 var id = $(this).attr('id');
                 $("[href='#"+id+"']").addClass('active') ;
        }
    });
});
