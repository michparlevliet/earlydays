//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
var userName = "monkey";
var passWord = "banana";

//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var userName = prompt("Please input your username");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(userName);

//5. CREATE POPUP BOX FOR PASSWORD
var passWord = prompt("Please input your password");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(passWord);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if (userName === "monkey" && passWord === "banana"){
  alert("Welcome back " + userName);
  console.log("Login successful");
}
else {
  alert("Invalid username/password");
  console.log("Login fail");
}
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE


//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE