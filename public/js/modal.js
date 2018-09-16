$('#exampleModal').on('show.bs.modal', function(event) {
	console.log('test');
	var button = $(event.relatedTarget) // Button that triggered the modal
	var description = button.data('description') // Extract info from data-* attributes
	var modal = $(this)
	//modal.find('.modal-title').text('Description: ' + description)
	modal.find('.modal-body').val(description)
})