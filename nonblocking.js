//link to the file system module

var fs = require('fs');


//print food
console.log('Food:')
fs.readFile('food.txt', 'utf8', function (err, food) {
	if (err) {
		console.log('Error:' + err);
		return;
	}
	
	console.log(food);
});

//drinks


fs.readFile('drinks.txt', 'utf8', function (err, drinks) {
	console.log('\nDrinks:')
	console.log(drinks);
})