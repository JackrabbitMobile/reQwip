define(["jquery", "underscore", "backbone",  'backbone_forms'], function($, _, Backbone, BackboneForm) {

	var ListingModel = Backbone.Model.extend({
		
	schema: {
        catagory:      { type: 'Select', options: ['Road Bike', 'Mountain Bike', 'Touring Bike', 'Racing Bike', 'Cruser Bike'] },
        title:       'Text',
        user_id:      'Text',
        price:   { validators: ['required', [/+d/] ] },
        listing_picture: { type: 'List', listType: 'Text' },
        description : "Text",
        condition : "Number"
	}
});

return ListingModel;
});