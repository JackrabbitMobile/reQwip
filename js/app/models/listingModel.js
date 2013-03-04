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
	},
	defaults: function() {
		return {
			//'date' : new Date(),
			
			'email' : "your_email@here.com",
			'name' : 'Firstname Lastname Here',
			'profile_picture': "/img/3dslogo.png",
			'participant_role': "role"
		}
	}
});
return ListingModel;
/*
 var listing = new Listing({
 id: "1.json"
 // name:"Dirty Harry",
 // email:"bro@freeemail.net",
 // company:"3 Day Startup",
 // portfolio:"thebest.com"
 });

 listing.fetch({
 error: function(model, response) {
 console.log("error response");
 console.log(response);
 },
 success: function(model, response){
 console.log("sucess response");
 console.log(response);
 console.log("fetch name "+listing.get('email'));
 console.dir(listing.toJSON());
 }
 });

 console.log("1st name "+listing.get('email'));
 console.dir(listing.toJSON());
 //listing.set({company:"Jackrabbit Mobile"});
 listing.fetch();
 console.log("2nd name "+listing.get('email'));
 console.dir(listing.toJSON());
 */
});