$(document).ready(function(){
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
});
