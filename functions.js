let X = 300
let x = 3.14
let y = Math.round(x)
// Math.ceil, Math.floor

console.log('Efter Math.round, x==', x, 'y==', y);
console.log('X: ', X, x);

let str = 'Detta Är En Sträng Som Drabbats Av Buzzfeed-Sjukan'
str = str.toUpperCase()
console.log(str);


// camelCase - tänk på en kamel som har pucklar
// to upper case -> toUpperCase
let Function = 'fun' // funkar, men okonventionellt

greeting()

function greeting() {
	console.log('Hej!');
}

greeting()  // anropa (kalla på) funktionen

// Detta är fel syntax, greeting finns redan
// let greeting
// greeting = 100
console.log('Greeting: ', greeting);

// Identifier = namn på en variabel eller en funktion


let f1 = function() {
	console.log('Jag är en anonym funktion');
}
let f2 = f1
let f3 = () => {
	console.log('Jag är en arrow function');
}
let f4 = function(x) { return x - 1 }
let f5 = x => x - 1

f1()
f2()
f3()
