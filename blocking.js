//link to the file system module

var fs = require('fs');


//print food
console.log('Food:')

var food = fs.readFileSync('food.txt', 'utf8');
console.log(food);


//print drinks
console.log('\nDrinks:')

var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);