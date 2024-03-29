// An example Backbone application contributed by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
// [LocalStorage adapter](backbone-localstorage.html)
// to persist Backbone models within your browser.

// Load the application once the DOM is ready, using `jQuery.ready`:

  // Todo Model
  // ----------
define([
	"jquery", "underscore", "backbone", "filepicker",
	"app/models/listingModel", "app/models/userModel", 
	"app/collections/listingResults", "app/collections/userList", 
	"app/views/listingView", "app/views/listingResultsView", "app/views/userView", "app/views/userListView"
], function($, _, Backbone, filepicker,
	ListingModel, UserModel, 
	ListingResults, UserList, 
	ListingView, ListingResultsView, UserView, UserListView) {
	
	var AppRouter = Backbone.Router.extend({
		routes: {
			"user/:id" : "showUser",
			"(/)user-board.html#user/:id" : "showUser",
			//default
			"*path" : "index"
		},
		
		initialize: function(){
			console.log("$$$$$$ router init");
			this.listingView = new ListingView();  
			//this.userList = new UserList();
			
			//this.userModel = new UserModel();
			//console.log(this.userModel);
			//this.userList.add(this.userModel.toJSON());
		},
		start: function() {
			Backbone.history.start({pushState: true});
		},
		index: function() {
			this.listingView
			//this.userListView = new UserListView({collection: this.userList});
			
		},
		showUser: function(id) {
			console.log("------ showuder: "+id);
		}
	});
	
	return AppRouter;
});

