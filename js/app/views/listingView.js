define(['jquery', 'underscore', 'backbone', 'backbone_forms', 'app/models/listingModel', 'app/collections/listingResults'], 
function($, _, Backbone, BackboneForms, ListingModel, ListingResults) {

	var ListingView = Backbone.View.extend({

		el : $('#content'),
		

		//template : _.template($("#listing-template").html()),

		  initialize : function() {
		  	console.log("init listingview");
		  	
		  	console.dir(this.el);
		  	console.log(this.listingModel);
		  	var form = new Backbone.Form({
        		schema: {
					catagory:      { type: 'Select', options: ['Road Bike', 'Mountain Bike', 'Touring Bike', 'Racing Bike', 'Cruser Bike', 'Clown Bike'] },
			    	title: 'Text',
			        price: 'Number',
			        listing_picture: "Text", // { type: 'List', listType: 'Text' },
			        description : "Text",
			        condition : "Number"
				}
    		}).render();
    		this.$el.html(form.el);
    		$("#page-loader").hide();
    		
    		form.on('blur', function(form) {
    			//form.commit();
    			console.log("blur");
    			console.log(form.getValue());
    			this.listingModel = new ListingModel({id: '1'});
    			this.listingModel.set(form.getValue());
    			this.listingResults = new ListingResults();
    			console.log(this.listingModel);
    			this.listingResults.add(this.listingModel); 
    			
    			// this.listingModel.sync();
			});
			
		 	//this.model.on('change', this.render, this);
			//this.render();
		  }, 
		render : function(model) {
			// console.log('render...');
			// var attributes = this.model.toJSON();
			// console.dir(attributes);
			// this.$el.html(this.template(attributes));
			// this.input = this.$('.edit');
			// this.body = this.$('.modal-body');
			// 			
			// console.log('[rendered]');
			return this;
		},
		events: {
			
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