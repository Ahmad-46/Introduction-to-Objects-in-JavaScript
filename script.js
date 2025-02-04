// create an object
let person = {
  firstName: "Ahmad",
  age: 14,
};
// Display some data from the object:
document.getElementById("demo").innerHTML =
  person.firstName + " is " + person["age"] + "year old";

function findMax() {
  let max = 0;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
        max = arguments[i];
    }
  }
  return max;
}
document.getElementById("result").innerHTML = findMax(491,122,322,153,243);
