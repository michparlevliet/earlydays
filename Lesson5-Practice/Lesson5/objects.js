// var myArray = [];
// var myObject = {};

var mountie = {
  // name: value
  player: "Sally",
  cash: 1275,
  space: 12,
  realEstate: [boardwalk, ventnor],
  // functions part of objects are METHODS, purpose is the change the object
  rollDice: function(){},
  payFines: function(){},
  buyHouse: function(){}

};

// var shoe = {
//   player: "Daniel",
//   cash: 1500,
//   space: 0,
//   realEstate: []
// }

var boardwalk = {
  price: 200,
  houses: 3,
  mortgage: 200
};

var ventnor = {
  price: 120,
  houses: 0,
  mortgage: 100,
};

// retrieving the boardwalk mortgage from the mountie object
// call on the index of the realEstate array
// console.log(mountie.realEstate[0].mortgage);

var customer1 = {
  name: "Peter",
  account: 500,
  cart: [],
  buy: function(thingToBuy, costOfThing){
    // subtracts cost from account total
    customer1.account = customer1.account - costOfThing;
    // adds final amount to the array
    customer1.cart.push(thingToBuy);
  }
};

console.log(customer1);
var item = prompt("What");
var cost = prompt("How much");

customer1.buy(item,cost);

console.log(customer1);


