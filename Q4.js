function Board(b){
	this.board = b;
}

Board.prototype.find = function(board, word){
	for(var row=0;row<board.length; row++){
		for(var col=0; col<board[row].length; col++){
			if(word === board[row][col]){
				board[row][col] = '#';
				return true;
				break;
			}
		}
	}
}

Board.prototype.check = function(word) {
	var that = this,
	    b = this.board;
    for(var w = 0; w<word.length; w++){
    	if(!that.find(b, word[w])) {
    		return false;
    	}
    }
    return true;
}

var b = new Board([ 
  ['A','B','C','E'], 
  ['S','F','C','S'], 
  ['A','D','E','E'] 
]);
console.log("word = 'ABCCED': "+b.check('ABCCED'));
console.log("word = 'SEE': "+b.check('SEE'));
console.log("word = 'ABCB': "+b.check('ABCB'));
