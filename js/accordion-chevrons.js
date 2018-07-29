$(document).ready(function(){
  function toggleChevron(e) {
    $(e.target)
      .prev('.card-header')
      .find("i.mdi")
      .toggleClass('mdi-chevron-down mdi-chevron-up');
  }

  $('#accordion-publications').on('hide.bs.collapse', toggleChevron);
  $('#accordion-publications').on('show.bs.collapse', toggleChevron);
});
