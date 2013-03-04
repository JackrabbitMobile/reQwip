define(['jquery', 'underscore', 'backbone', 'backbone_forms', 'app/models/listingModel', 'app/collections/listingResults'], 
function($, _, Backbone, BackboneForms, ListingModel, ListingResults) {

	var ListingView = Backbone.View.extend({

		el : $('#content'),
		
		
		template : _.template($("#listing-template").html()),

		  initialize : function() {
		  	console.log("init listingview");
		  	this.listingResults = new ListingResults();
		  	this.listingModel = new ListingModel({id: '1'});
    		
		  	
			
		 	//this.model.on('change', this.render, this);
			this.render();
		  }, 
		render : function(model) {
			this.form = new Backbone.Form({
        		schema: {
					catagory:      { type: 'Select', options: ['Road Bike', 'Mountain Bike', 'Touring Bike', 'Racing Bike', 'Cruser Bike', 'Clown Bike'] },
			    	title: 'Text',
			        price: 'Number',
			        listing_picture: "Text", // { type: 'List', listType: 'Text' },
			        description : "Text",
			        condition : "Number"
				}
    		}).render();
    		this.$el.html(this.form.el);
    		this.$el.append('<button class="btn btn-primary submit-form" type="button">Save</button>');
    		$("#page-loader").hide();
    		
			return this;
		},
		events: {
			"click .submit-form" : "saveListing"
		},
		saveListing : function() {
			console.log("viewListing");
			
			this.listingModel.set(this.form.getValue());
			console.log(this.listingModel);
			this.listingResults.add(this.listingModel); 
			
			return this;
		},
		displayListing : function() {
			attributes = this.listingModel.toJSON();
			this.$el.html(this.template(attributes));
				
		}
		
		/*,
		events : {
			"click .view" : "edit",
			"keypress .edit" : "updateOnEnter",
			"blur .edit" : "close"
		},
		edit : function() {
			console.log("modelView.event.edit");
			this.body.addClass("editing");
			this.input.focus();
		},
		close : function() {
			console.log("modelView.event.close");
			var value = this.input.val();
			if (!value) {
				console.log("clear");
				this.clear();
			} else {
				console.log(this.body);
				this.model.set({
					email : value
				});
				this.body.removeClass("editing");
				
			}
		},
		updateOnEnter : function(e) {
			console.log("modelView.event.updateOnEnter");
			if (e.keyCode == 13) this.close();
		}*/
	});
	return ListingView;
}); 