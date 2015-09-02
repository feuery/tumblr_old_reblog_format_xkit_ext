//paste this to the https://www.tumblr.com/xkit_editor if you can't find feuermerpg_experiment there

//* TITLE feuermerpg_experiment **//
//* VERSION 1.0 REV A **//
//* DESCRIPTION	**//
//* DEVELOPER feuermerpg **//
//* FRAME false **//
//* BETA false **//
//* DETAILS This might be nothing, this might be something *//

XKit.extensions.feuermerpg_experiment = new Object({

	running: false,

	run: function() {
	    try
	    {
		    this.running = true;
		    
		    var list_items = [];
		    
		    $(".post_wrapper").each(
		        function()
		        {
		            // alert("Amount of rb-list-items: "+ $(this).find(".reblog-list-item").size());
		            
		            var interesting_children = $(this).find(".reblog-list-item");
		            var root = $("div").attr("name", "trolololooooo").children(interesting_children);
		            
		           $ (this).replaceWith(root);
		            
		        });
		    
	    	alert("Finished!");
	    }
	    catch(ex)
	    { 
	        alert(ex);
	        alert(ex.stack);
	    }
	},

	destroy: function() {
		this.running = false;
	}

});
