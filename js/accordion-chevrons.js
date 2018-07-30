$(document).ready(function(){
  var activeAccordionGroup = sessionStorage.getItem('activeAccordionGroup');
  if (activeAccordionGroup != null) {
    // $('#accordion-publications .collapse.show').collapse('hide');
    // $('#' + activeAccordionGroup).collapse('show');
    $('accordion-publications .collapse.show').removeClass('show');
    $('#' + activeAccordionGroup).addClass('show');
  }

  // Add up/down chevron icons to accordion, similar to https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html
  function toggleChevron(e) {
    $(e.target)
      .prev('.card-header')
      .find("i.mdi")
      .toggleClass('mdi-chevron-down mdi-chevron-up');
  }

  // Services section
  $('#accordion').on('hide.bs.collapse', toggleChevron);
  $('#accordion').on('show.bs.collapse', toggleChevron);

  // Publications section
  $('#accordion-publications').on('hide.bs.collapse', toggleChevron);
  $('#accordion-publications').on('show.bs.collapse', toggleChevron);

  $('.card-header button').hover(
    function() {
      $(this).find('i.mdi').removeClass('text-muted');
    },
    function() {
      $(this).find('i.mdi').addClass('text-muted');
    }
  );

  $('#accordion-publications').on('shown.bs.collapse', function(event) {
    var active = $(event.target).attr('id');
    sessionStorage.setItem('activeAccordionGroup', active);
  });
});
