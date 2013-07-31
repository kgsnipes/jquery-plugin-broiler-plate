/*
author: author_name
email: email_address

*/

//this is a utility to have Object.create() work on browsers that do not support
if(typeof Object.create !=='function'){
	Object.create=function(obj){
		function F(){};
		f.prototype=obj;
		return new F();
	};
}


(function( $ ,window, document,undefined){

var methods={

	init:function(options,elem)
	{
		self=this;
		self.$elem=$(elem);

		
	},
	function1:function(params){

		
		return null;
	}
};

$.fn.plugin = function( options ) {
    
    return this.each(function(){

    	var obj=Object.create(methods);
    	
    	
    	obj.init(options,this);
    });
  
 };

$.fn.plugin.options={
	width:100,
	height:100
};

})( jQuery ,window,document);



