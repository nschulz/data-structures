(function() {
	
	'use strict';
	
	var alphaMap = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	function NatesHashTable(customSize) {
		var _dataStorage = [],
			_storageSize = 477;
			
		if (customSize) {
			_storageSize = parseInt(customSize, 10);
		}
	
		function keyToIndex(key) {
			var keyValue = 0,
				c = 0,
				len = 0;
			for (c = 0, len = key.length; c < len; c++) {
				keyValue += alphaMap.indexOf(key[c]);
			}
			return keyValue % _storageSize;
		}
	
		function insert(anObject) {
			var aKey = anObject.getKey(),
				index = keyToIndex(aKey),
				start = index;
		
			// not exact because we want to match undefined too
			while (_dataStorage[index] != null) {
				index*=7;
				index %= _storageSize;
				if (index == start) {
					console.log("No space left");
					return false;
				}
			}
		
			_dataStorage[index] = anObject;
			return true;
		}
	
		function find(aKey) {
			var index = keyToIndex(aKey),
				start = index;
			
			while (_dataStorage[index].getKey() !== aKey) {
				index*=7;
				index %= _storageSize;
				if (index == start) return null;
			}
			return _dataStorage[index];
		}
		
		function toString() {
			var printStr = "|-----------|\n",
				i = 0;
		
			for (i = 0; i < _storageSize; i++) {
				// Inexact comparison, again because
				// we want to support undefined
				if (_dataStorage[i] == null) {
					printStr += "| " + i + "   |\n";
				} else {
					printStr += "| " + i + "   | " + _dataStorage[i].getKey() + "\n";
				}
			}
			printStr += "|-----------|\n";
			return printStr;
		}
		
		function printMap() {
			console.log(toString());
		}
		
		return {insert: insert, find: find, printMap: printMap, toString: toString};
	}

	window.NatesHashTable = NatesHashTable;

})();