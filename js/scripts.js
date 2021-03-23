$(function() {
    $('#searchLink').on('click', function(e) {
        $(this).toggleClass('open');
    });
});

$('.searchForm input').click(function(e) {
    e.stopPropagation(); //This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes.
});

$(function() {
    $( "#newsletterButton" ).on('click', function() {
      $("#newsletterModal").modal('show');
    });
    $( "#newsletterButton" ).on('click', function() {
        $("#newsletterModal").modal('hide');
    });
});

$(document).on('click', function(e) { 
  const $target = $(e.target);
  if(!$target.closest('searchForm').length && 
  $('searchForm').is(":visible")) {
    $('searchForm').hide();
  }        
});