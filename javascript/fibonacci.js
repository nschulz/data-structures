function Fibonacci( entry ) {
	var _temp = [];
	_temp.push(0);
	_temp.push(1);
	if (entry < 2 ) return _temp[entry];
	
	for (var i = 1; i < entry; i++) {
		_temp[2] = _temp[1] + _temp[0];
		_temp.shift();
	}
	return _temp[1];
}

var sequence = [
Fibonacci(0),
Fibonacci(1),
Fibonacci(2),
Fibonacci(3),
Fibonacci(4),
Fibonacci(5),
Fibonacci(6),
Fibonacci(7),
Fibonacci(8),
Fibonacci(9),
Fibonacci(10),
Fibonacci(11),
Fibonacci(12),
];

console.log("Fibonacci:");
console.log( sequence );

// Factorial

function Factorial( n ) {
	var result = n;
	for (var i = n-1; i > 0; i--){
		result *= n-i;
	}
	return result;
}

console.log("Factorials:");
seq2 = [
Factorial(0),
Factorial(1),
Factorial(2),
Factorial(3),
Factorial(4),
Factorial(5),
Factorial(6),
Factorial(7),
Factorial(8),
Factorial(9),
Factorial(10),
Factorial(11)
];
console.log(seq2);

// Spiral
var kVectors = {
//	NE: { x: 1, y: 1 },
	E: { x: 1, y: 0 },
//	SE: { x:1, y: -1 },
	S: { x: 0, y: -1 },
//	SW: { x: -1, y: -1 },
	W: { x: -1, y: 0 },
//	NW: { x: -1, y: 1 },
	N: { x: 0, y: 1 }
};

function Spiral( endNumber ) {
	this._start = { row: 0, col: 0 };
	this._size = 0;
	this._endNumber = endNumber;
	this._matrix = [];
	this.init();
};
Spiral.prototype = {
	init: function() {
		this._size = Math.floor( Math.sqrt( this._endNumber )) + 1;
		this._start.row = Math.floor( this._size / 2 );
		this._start.col = Math.floor( this._size / 2 );
		for (var i = 0; i < this._size; i++) {
			this._matrix[i] = [];
			for (var j = 0; j < this._size; j++) {
				this._matrix[i][j] =  "";
			}
		}
		this._matrix[this._start.row][this._start.col] = 0;
	},
	calculate: function() {
		var spaces = 1, increment = false, number = 1;
		var currentPosition = { row: this._start.row, col: this._start.col };

		while ( number < this._endNumber ) {
			for ( var dir in kVectors ) {
				for (var i = 0; i < spaces; i++) {

					currentPosition.row = currentPosition.row - (kVectors[dir].y);
					currentPosition.col = currentPosition.col + (kVectors[dir].x);
															
					this._matrix[ currentPosition.row ][ currentPosition.col ] = number;
					number++;
					if (number >= this._endNumber) return;
				}
				if (increment) {
					spaces++;
				}
				increment = !increment;
			}
		}
	},
	toString: function() {
		var string = "";
		for (var i = 0; i < this._size; i++) {
			string += "[";
			for (var j = 0; j < this._size; j++) {
				string += " "+this._matrix[i][j] + " ";
				string += ", ";
			}
			string += "]\n";
		}
		console.log(string);
	},
	draw: function( elementId ) {
		var targetElem = $E(elementId);
		targetElem.innerHTML = "";
		
		var table = new Elem('table');
		for (var i = 0, rowLen = this._matrix.length; i < rowLen; i++) {
			var row = new Elem('tr');
			for (var j = 0, colLen = this._matrix[i].length; j < colLen; j++) {
				var cell = new Elem('td');
				cell.innerHTML = this._matrix[i][j];
				row.appendChild( cell );
			}
			table.appendChild( row );
		}
		targetElem.appendChild( table );
	}
}

function Elem( type ) {
	return document.createElement( type );
};
function $E( id ) {
	return document.getElementById( id );
};

var spiral = new Spiral( 25 );
spiral.calculate();
setTimeout( function() {
	spiral.draw( 'output1' );
}, 500);


var spiral2 = new Spiral( 64 );
spiral2.calculate();
setTimeout( function() {
	spiral2.draw( 'output2' );
}, 500);