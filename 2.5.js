let x = 10

// x += 1, x++
let count = 0
while( count < 5 ) {
	x = x + 1
	count = count + 1

	if( x === 13 ) {
		console.log('Inuti if-blocket: x är ', x);
	}
}

console.log('x ska vara 5, är: ', x);
