
var HelloWeyden = function() {
	return {
		myVariable: null,

		init: function() {
			alert("HelloWeyden.init()");

//			// attach an event to an HTML element
//			var self = this;
//			jQuery(".HelloWeyden .myElementClass").click(function() {
//				self.myMethod();
//				// do something
//				...
//			});
		},
		
		myMethod: function() {
			alert("HelloWeyden.myMethod()");
		}
		// no comma after last method
	};
}();

//jQuery(HelloWeyden.init()); // Run after page loads