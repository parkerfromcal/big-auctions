$(() => {
	const searchButton = document.getElementById('searchLink');
	searchButton.onclick = () => {
		searchButton.classList.toggle('open');
    }
    for (const form of document.getElementsByClassName('searchForm')) {
        form.querySelector('input[type="search"]').addEventListener('blur', () => {
			searchButton.classList.toggle('open');
		});
    }
})

$('.searchForm input').on('click', (e) => {
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