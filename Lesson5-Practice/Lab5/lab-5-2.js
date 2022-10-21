//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete Part 2 of the lab.
//6. Once everything is working, tackle the Extra Challenge!

var customer1 = {
  lastName: "Smith",
  branchNumber: 02,
  accountBalance: 500.25,
  interestRate: 1.03,
  multipleAccounts: true,
  makeDeposit: function(addAmount){
    customer1.accountBalance = customer1.accountBalance + addAmount;
    return "Thank you, your current balance is now $ " + customer1.accountBalance
  },
  makeWithdrawal: function(withdrawAmount){
    customer1.accountBalance = customer1.accountBalance - withdrawAmount;
    return "Thank you, your current balance is now $ " + customer1.accountBalance
  },
  addInterest: function(){
    if (customer1.multipleAccounts === true) {
      customer1.accountBalance = customer1.accountBalance * (customer1.interestRate + 0.005);
    }
    else {
      customer1.accountBalance = customer1.accountBalance * customer1.interestRate;
    }
    return "Thank you, your current balance is now $ " + (customer1.accountBalance).toFixed(2)
  }
};

// console.log(customer1.accountBalance);

console.log(customer1.makeDeposit(200));

// console.log(customer1.accountBalance);

console.log(customer1.makeWithdrawal(75));

// console.log(customer1.accountBalance);

console.log(customer1.addInterest());