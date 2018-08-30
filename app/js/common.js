$(function() {
	// Configuration menu for mobile
	$("#my-menu").mmenu({
		"extensions": [
            "pagedim-black"
		 ]
	});      

	var api = $("#my-menu").data( "mmenu" );

	api.bind( "closed", function() {
		console.log( "This panel is now opening: #" );
	 });

	// Configuration rating
	$('.starrr').starrr({
		rating: 4,
	})
	
});
