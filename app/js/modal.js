$('#exampleModal').on('show.bs.modal', function(event) {
	console.log('test');
	const button = $(event.relatedTarget) // Button that triggered the modal
	const description = button.data('description') // Extract info from data-* attributes
	const title = button.data('title');
	const modal = $(this)
	modal.find('.modal-title').text(title)
	modal.find('.modal-body').text(description)
})
