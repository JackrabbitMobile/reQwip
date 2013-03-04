define(['jquery', 'underscore', 'backbone', 'firebase', 'backfire', 'app/models/listingModel'], 
	function($, _, Backbone, Firebase, Backfire, ListingModel) {
	
	console.log("ListingResults");
	var ListingResults = Backbone.Firebase.Collection.extend({
		model : ListingModel,
		firebase: "https://reqwip-launch.firebaseio.com"
	});
	return ListingResults;
}); 