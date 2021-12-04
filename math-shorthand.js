var burgerPrice = 31;
var coldCoffeePrice = 10;
var sum = burgerPrice + coldCoffeePrice;
var difference = coldCoffeePrice - burgerPrice;
var multiplication = burgerPrice * coldCoffeePrice;
var division = burgerPrice / coldCoffeePrice;

// console.log(sum);
// console.log(difference);
// console.log(multiplication);
// console.log(division);

var doublePrice = coldCoffeePrice * 2;
var newPrice = burgerPrice + 10;

// console.log(doublePrice);
// console.log(newPrice);


// now original shorthand js using start
burgerPrice = burgerPrice + 20;
// console.log(burgerPrice);


// more useful shorthand code for that
burgerPrice += 20;
// console.log(burgerPrice);



// same rule for negetive
coldCoffeePrice = coldCoffeePrice - 2;
// console.log(coldCoffeePrice);

coldCoffeePrice -= 2;
// console.log(coldCoffeePrice);



// more shorthand for changing 1
var age = 25;
// age = age + 1;
// age += 1;
age++;
console.log(age);


// neg: shorthand same
var potatoPrice = 100;
// potatoPrice = potatoPrice - 1;
// potatoPrice -= 1;
potatoPrice--;
console.log(potatoPrice);