/*
Variables on javascript before ES6 were only conformed by the global variable "var".
This type of variable can be changed and seen all over the code, and that can 
lead to some trouble when the code become more complex and we need to take care of
memory management and accesibility of data, for that ES6 added new variables, named
let and const. 
Let, works only in the function that is declared in, meaning that if we want to have 
access to that variable in a line of code out of the function that it was declared in,
the variable will no longer be available. Const, on the other hand, works like the let
variable and, in addition, the variable const can not be changed completely, but if it
is an object or array, the changes can be only in a particular part of the variable.
*/

//Some examples of code

"use strict";

var allowsCreatingDogs = true;
var allowsChangingDogs = false;

function createDog() {

   if (allowsCreatingDogs) {
   
    dog = "Firulais";
    var secretDog = "Bolt";
    var inmortalDog = "Krypto";
    console.log("Before Change: " + dog);
    
    allowsChangingDogs = true;
    
    if (allowsChangingDogs) {
      var dog = "Lassie";
      secretDog = "Laika";
      console.log(secretDog);
      console.log(inmortalDog);
    }
  }
  console.log(dog);
}

createDog(); 

/*
Extra credit:
  Doing my research on Hoisting I found that it is an specific function on 
  javascript. This conduct, that we can see before is used on the var 
  "dog", dog can be used and printed before it is declared (I declare dog 
  after the second if). This only works on Var and only has relation
  on how js reads the codes. 
*/
