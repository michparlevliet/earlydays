//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject = {
  name: "Michelle",
  age: 23,
  birthday: "March 21st",
  favColor: "Green",
  aboutMe: function(){
    alert("My name is " + meObject.name + " and I am " + meObject.age + " years old.") 
    }
  };

// console.log(meObject.name);

// var aboutMe = alert("My name is " + meObject.name + " and I am " + meObject.age + " years old.") 

meObject.aboutMe();