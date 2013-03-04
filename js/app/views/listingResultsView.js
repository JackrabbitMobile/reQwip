define(['jquery', 'underscore', 'backbone', 'backbone_forms', 'app/collections/listingResults', 'app/models/listingModel',  'app/views/listingView'], 
function($, _, Backbone, BackboneForms, ListingResults, ListingModel, ListingView) {
	console.log("ListingResultsView");	
	var ListingResultsView = Backbone.View.extend({
		
		el : $('#content'),
		
		template : _.template($("#listing-template").html()),

		initialize : function() {
			 this.$el.html('<ul id="listing-results" class="thumbnails"></ul>');
			 this.ul = $('#listing-results');
			 this.collection.on('add', this.addOne, this);
		 	 this.collection.on('change', this.render, this);
		 	 this.collection.on('reset', this.render, this);
		 	 this.render();
		 },

		render : function() {
			console.log("render list")
			this.collection.forEach(this.addOne, this);
			if (this.collection.length){
				$("#page-loader").hide();
			}
			this.$el.html(this.ul);
			console.log(this.ul);
			return this;
		},
		
		addOne: function(listingModel) {
			console.log(listingModel.id);
			var attributes = listingModel.toJSON();
			this.ul.append(this.template(attributes));
			var listingView = new ListingView({model : listingModel});
			this.$el.append(listingView.render().el);
			$("#page-loader").hide();
			return this;
		},
		events : {
			"click a.thumbnail" : "listingDetails"
		},
		listingDetails: function (event) {
			var id = $(event.target).closest(".thumbnail").attr("data-id");
			this.listingModel = this.collection.get(id);
      		var form = new Backbone.Form({
        		model: this.listingModel
    		}).render();
    		$('#myModal').append(form.el);
    		
    		form.on('blur', function(form) {
    			form.commit();
    			
    		
			});
			
		
			
		}

	});
	

	return ListingResultsView;
}); 