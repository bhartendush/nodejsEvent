$(document).ready(function(){
	$('#deleteEvent').on('click', function(e){
		e.preventDefault();
		var deleteId = $('#deleteEvent').data('delete');
		$.ajax({
			url: '/myevents/delete/'+deleteId,
			type:'DELETE',
			success: function(result){
				console.log(result);
			}
		});
		window.location = '/myevents';
	});
});