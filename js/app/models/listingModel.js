define(["jquery", "underscore", "backbone",  'backbone_forms'], function($, _, Backbone, BackboneForm) {

var ListingModel = Backbone.Model.extend({
		
	schema: {
        catagory:      { type: 'Select', options: ['Road Bike', 'Mountain Bike', 'Touring Bike', 'Racing Bike', 'Cruser Bike'] },
        title:       'Text',
        user_id:      'Text',
        price:   { validators: [/d+/] },
        listing_picture: { type: 'List', listType: 'Text' },
        description : "Text",
        condition : "Number"
	},
	defaults: function() {
		return {
			//'date' : new Date(),
			
			'catagory' : "your_email@here.com",
			'title' : 'Firstname Lastname Here',
			'profile_picture': "/img/3dslogo.png",
			'participant_role': "role"
		}
	}
});

return ListingModel;
});