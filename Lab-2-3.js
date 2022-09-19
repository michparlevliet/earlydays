//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var mailList;
var email;

//==== LOGIC =============
mailList = confirm("Would you like to join our mailing list?");
if (mailList === true) {
  email = prompt("Insert email here", "me@example.com");
  if (email === " " || email === null || email === "me@example.com"){
    alert("Thank you, but your email was not valid");
  }
  else {
    alert("Thank you, our newsletter will be sent to" + email);
  }
} 
else {
  alert("Thank you, we will not bother you again");
}



