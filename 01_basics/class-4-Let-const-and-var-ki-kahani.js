// topic : variables

const userAccoundId = 12233445;
let userAccoundEmail = "umair@google.com";
var userAccountPassword = "1223459";
let userAccountType;
userAccountCity = "Uk";

// userAccoundId = 9887654; // not allowed, Uncaught TypeError: Assignment to constant
// console.log(userAccoundId);

userAccoundEmail = "umair@meta.com";
userAccountPassword = "55664478";
userAccountCity = "USA";

console.table([
  userAccoundId,
  userAccoundEmail,
  userAccountPassword,
  userAccountCity,
  userAccountType,
]);

/*
prefer not to use var b/c of issue in block and functional scope. 
*/

