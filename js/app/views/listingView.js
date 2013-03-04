define(['jquery', 'underscore', 'backbone', 'backbone_forms', 'app/models/listingModel', 'app/collections/listingResults'], 
function($, _, Backbone, BackboneForms, ListingModel, ListingResults) {

	var ListingView = Backbone.View.extend({

		el : $('#content'),
		
		
		template_list_item 	: _.template($("#template-listing").html()),
		template_homepage 	: _.template($("#template-homepage").html()),

		  initialize : function() {
		  	console.log("init listingview");
		  	this.listingResults = new ListingResults();
		  	this.listingModel = new ListingModel({id: '1'});
    		
		  	
			
		 	//this.model.on('change', this.render, this);
			this.render();
		  }, 
		render : function(model) {
			$("#page-loader").show();
    		this.$el.html(this.template_homepage());
    		$("#page-loader").hide();
    		
			return this;
		},
		listItem: function() {
			$("#page-loader").show();
			this.form = new Backbone.Form({
        		schema: {
					category: { type: 'Select', options: ['Road Bike', 'Mountain Bike', 'Touring Bike', 'Racing Bike', 'Cruser Bike', 'Clown Bike'] },
			    	title: 'Text',
			        price: 'Number',
			        listingPicture: "Text", // { type: 'List', listType: 'Text' },
			        description : "Text",
			        condition : "Number"
				}
    		}).render();
    		this.$el.html(this.form.el);
    		this.$el.append('<button class="btn btn-primary submit-form" type="button">Save</button>');
    		
    		this.upoadImageField();
    		//this.uploadPicture
    		$("#page-loader").hide();
			return this;
		},
		events: {
			"click .submit-form" : "saveListing",
			"click #list-item" : "listItem",
			"click #listing-results" : "allListings"
		},
		allListings : function() {
			return this;
		},
		saveListing : function() {
			console.log("viewListing");
			$("#page-loader").show();
			this.listingModel.set(this.form.getValue());
			console.log(this.listingModel);
			this.listingResults.add(this.listingModel); 
			
			this.displayListing();
			$("#page-loader").hide();
			return this;
		},
		displayListing : function() {
			attributes = this.listingModel.toJSON();
			this.$el.html(this.template_list_item(attributes));
				
		},
		upoadImageField : function () {
			console.log("upload image")
			$('#listingPicture').after('<button id="image-upload-btn" class="btn btn-primary" type="button">Add image</button>');
			$('#listingPicture').hide();	
			$('#image-upload-btn').click(onUploadClick);
			
			function onSuccess(fpfiles) {
				console.log(JSON.stringify(fpfiles));
				 $(document.createElement('img')).attr("src",fpfiles[0]['url']);
				var img_url = fpfiles[0]['url'];
				console.log(img_url);
				console.log(encodeURI(img_url));
				$("#listingPicture").val(img_url);
				$('#image-upload-btn').before('<img src="'+img_url+'" class="thumbnail" />');
			}
			function onError(fperror) {
				console.log(JSON.stringify(fperror));
				alert("There was an error.  check console");
			}
			function onUploadClick() {
				filepicker.setKey('A2IsGFA5NTLW40qux7u6Qz');
				filepicker.pickAndStore({mimetype:"image/*"},
										{location:"S3"}, 
										onSuccess,
										onError);
			}
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