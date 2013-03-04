define(["jquery", "underscore", "backbone", 'backbone_forms'], function($, _, Backbone, BackboneForm) {

var ListingModel = Backbone.Model.extend({
		
	schema: {
        catagory:      { type: 'Select', options: ['Road Bike', 'Mountain Bike', 'Touring Bike', 'Racing Bike', 'Cruser Bike'] },
        title:       'Text',
        user_id:      'Text',
        price:   'Number',
        listing_picture: "Text", // { type: 'List', listType: 'Text' },
        description : "Text",
        condition : "Number"
	},
	defaults: function() {
		return {
			//'date' : new Date(),
			'catagory' : "your_email@here.com",
			'title' : 'Firstname Lastname Here',
			'listing_picture': "http://reqwip.jackrabbitmobile.com/img/images.jpeg",
			'participant_role': "role",
			'price': 200,
			'description': "text text text",
			'condition': 9
		}
	}
});

return ListingModel;
});