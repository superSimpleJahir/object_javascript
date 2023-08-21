// singleton 
// Object.create

// object literals
let mySym = Symbol('Hello');

let user = {
  name: 'Jahir',
  'full name': 'Md Jahirul Islam',
  [mySym]: 'myKey1',
  age: 23,
  location: 'Dhaka',
  email: 'jahir@google.com',
  isLoggedIn: false,
  lastLoggingDays: ['Monday', 'Saturday']
}
console.log(user.email);
console.log(user['email']);
console.log(user["full name"]);
console.log(user[mySym]);
console.log(typeof (user[mySym]));

// object ar value change korar jonne 
user.email = 'jahir@meta.com';
console.log(user);

// jodi Object ke lock or freeze korte chai tahole freeze use korte hobe 
Object.freeze(user);
user.location = 'Barishal';
console.log(user);// no change 


let jsUser = {
  name: 'Jahir',
  'full name': 'Md Jahirul Islam',
  [mySym]: 'myKey1',
  age: 23,
  location: 'Dhaka',
  email: 'jahir@google.com',
  isLoggedIn: false,
  lastLoggingDays: ['Monday', 'Saturday']
}


jsUser.greeting = function () {
  console.log('Hello JS user.');
}
jsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}.`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());