// singleton object 
const tinderUser = new Object();
tinderUser.Id = '123abc';
tinderUser.Name = 'Jahir';
tinderUser.Age = 23;
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: 'some@gmail.com',
  fullName: {
    name: 'jahir',
    userFullName: {
      firstName: 'Md Jahirul',
      lastName: 'Islam'
    }
  }
}

// console.log(regularUser.fullName.name);

// onek gula object ak sathe add korar jonne ai mathode use kora hoi
const obj1 = { a: 1, b: 2 };
const obj2 = { d: 4, c: 3 };
const obj3 = { e: 5, f: 6 };

const obj4 = { obj1, obj2, obj3 };// this is bad practices
// console.log(obj4); 

const obj5 = Object.assign(obj1, obj2, obj3); // jodi akane obj1 ke print kori tahole { a: 1, b: 2, d: 4, c: 3, e: 5, f: 6 } ati return kore jar karone akti sommasa hoi .ai somasa somadaner jonne {} use kora hoi
// console.log(obj1);
const obj6 = Object.assign({}, obj1, obj2, obj3);// akhane obj1 ar kono poriborton hobena 
// console.log(obj5);
// console.log(obj1);
const obj7 = { ...obj1, ...obj2, ...obj3 }; //atta hochhe best practices. object add korar jonne.
// console.log(obj6);

// vary vary importent topic

const userData = [
  {
    Id: '1',
    email: 'user1@gomail.com'
  },
  {
    Id: '2',
    email: 'user2@gomail.com'
  },
  {
    Id: '3',
    email: 'user3@gomail.com'
  },
  {
    Id: '4',
    email: 'user4@gomail.com'
  }
]

// console.log(userData[1].Id);
console.log(tinderUser);

// akti object ar bitore jotogula object propaty / object keys ace ati akti arrayte rupantor jorar jonne object.keys() use korte hobe
console.log(Object.keys(tinderUser));// return keys [ 'Id', 'Name', 'Age', 'isLoggedIn' ];

// apni chaile value o ber korte parben je kono object ar 
console.log(Object.values(tinderUser)); // return valus [ '123abc', 'Jahir', 23, false ]


//jodi object ar every propatys ke akti kore array te rupantor korte chai tahole entries() methods use kor hoi
console.log(Object.entries(tinderUser));