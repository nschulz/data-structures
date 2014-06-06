(function() {

	'use strict';
	
	function NatesDataObject(aKey) {
		
		var keyString = aKey;
		
		function getKey() {
			return keyString;
		}
		
		return {getKey:getKey};
	};
	
	window.NatesDataObject = NatesDataObject;
	
})();