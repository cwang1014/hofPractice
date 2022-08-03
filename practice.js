// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var countOfMultiples = 0;

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      countOfMultiples++;
    }
  });

  return countOfMultiples;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  return _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });

};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

  return _.filter(fruits, function(fruit) {
    if (fruit[0] === letter) {
      return fruits;
    }
  });

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert;
    }
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  return _.reduce(products, function(memo, num) {
    return memo + Number((num.price).slice(1));
  }, 0);

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var dessertSummary = {};

  _.reduce(desserts, function(memo, dessert) {
    if (dessertSummary[dessert.type] === undefined) {
      dessertSummary[dessert.type] = 0;
      dessertSummary[dessert.type]++;
    } else {
      dessertSummary[dessert.type]++;
    }
  }, 0);

  return dessertSummary;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var accumulator = [];

  _.reduce(movies, function(memo, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      accumulator.push(movie.title);
    }
  }, 0);

  return accumulator;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  // set shorterThanTimeLimit variable equal to false
  var shorterThanTimeLimit = false;

  _.reduce(movies, function(memo, movie) {
    if (movie.runtime < timeLimit) {
      shorterThanTimeLimit = true;
      return shorterThanTimeLimit;
    }
  }, 0);

  // return shorterThanTimeLimit
  return shorterThanTimeLimit;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit) {
    fruit = fruit.toUpperCase();
    return fruit;
  });

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var glutenFreeObj = {};

  return _.map(desserts, function(dessert) {
    if (dessert.ingredients.includes('flour')) {
      glutenFreeObj.glutenFree = false;
      return glutenFreeObj;
    } else {
      glutenFreeObj.glutenFree = true;
      return glutenFreeObj;
    }
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(grocery) {
    var priceNum = Number(grocery.price.slice(1));
    var salePrice = priceNum - (priceNum * coupon);
    var saleString = '$' + salePrice.toFixed(2);
    grocery.salePrice = saleString;
    return grocery;
  });
};
