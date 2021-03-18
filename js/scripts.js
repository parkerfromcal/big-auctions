$(function() {
    $('#searchLink').on('click', function(e) {
        $(this).toggleClass('open');
    });
});

$('.searchForm input').click(function(e) {
    e.stopPropagation(); //This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes.
});