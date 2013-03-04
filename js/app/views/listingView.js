define(['jquery', 'underscore', 'backbone', 'backbone_forms', 'app/models/listingModel'], 
function($, _, Backbone, BackboneForms, ListingModel) {

	var ListingView = Backbone.View.extend({

		el : $('#content'),
		

		//template : _.template($("#listing-template").html()),

		  initialize : function() {
		  	console.log("init listingview");
		  	
		  	console.dir(this.el);
		  	this.listingModel = new ListingModel();
		  	console.log(this.listingModel);
		  	var form = new Backbone.Form({
        		model: this.listingModel
    		}).render();
    		this.$el.html(form.el);
    		$("#page-loader").hide();
    		
    		
    		form.on('blur', function(form) {
    			form.commit();
    			console.log("blur");
    			console.log(form.getValue());
    			this.listingModel = new ListingModel(form.getValue());
    			console.log(this.listingModel);
    			this.listingModel.sync();
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