// create an object
let person = {
  firstName: "Ahmad",
  age: 14,
  hobby: "badminton",
};
// Display some data from the object:
document.getElementById("demo").innerHTML =
  person.firstName + " is " + person["age"] + " year old. he love coding.his hobby is " + person.hobby;
  //object with objects that contain value to find
const myObject = {
  obj1: {value: 254},
  obj2: {value: 21},
  obj3: {value: 525},
  obj4: {value: 10}
};

// Variables to hold max value 
let maxValue = 0;

//converting the object to an array
const values = Object.values(myObject);

//Using the .map() method to loop the array, find maximum value
values.map((el) => {
  //getting the value from each object and 
  //comparing to existing value
  const valueFromObject = el.value;
  maxValue = Math.max(maxValue, valueFromObject);
});

//Printing out the result
console.log(maxValue); 
//Output: 525 