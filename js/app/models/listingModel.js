define(["jquery", "underscore", "backbone", 'backbone_forms'], function($, _, Backbone, BackboneForm) {

var ListingModel = Backbone.Model.extend({
		
	defaults: function() {
		return {
			//'date' : new Date(),
			'category' : "your_email@here.com",
			'title' : 'Firstname Lastname Here',
			'listingPicture': "http://reqwip.jackrabbitmobile.com/img/images.jpeg",
			'price': 200,
			'description': "text text text",
			'condition': 9,
      'location' : "austin, Texas",
      'phone' : '0000000000'
		}
	}
});

return ListingModel;
});