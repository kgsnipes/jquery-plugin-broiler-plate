/*
author: author_name
email: email_address

*/

//this is a utility to have Object.create() work on browsers that do not support
(function( $ ) {
 
    $.fn.myNewPlugin = function(options ) {
	var defaults={property:"value"};
	 var settings = $.extend(defaults, options );
		
    return this.each(function() {
        // Do something to each element here.
    });
 
	};
 
}( jQuery ));

