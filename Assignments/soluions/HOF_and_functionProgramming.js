//Q.1
// const ordersList = [
//   { name: "Laptop", price: 12000 },
//   { name: "Mobile", price: 7000 },
//   { name: "Mobile Charger", price: 1500 },
//   { name: "Laptop Charger", price: 10500 },
// ];

// function test(ordersList)
//  {
//   let sum = 0;
//   ordersList.forEach((element) => (sum += element.price));
//   console.log(`The total price of order is Rs.${sum}`);
// }
// test(ordersList);

//--------------------------------------------------------------------------------------

//Q.2
//  let tata;
// setInterval(()=>console.log(Math.floor((Math.random()*10)+1)),2000)

//--------------------------------------------------------------------------------------

//Q.3

let expenses = [
  { amount: 100, category: "utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

// const venus = expenses.map((ele,indx,arr)=>)

//Q.4

const data = expenses
.filter((ele) => ele.category==="Groceries")
.map((ele) => ele.amount)

console.log(data);

//--------------------------------------------------------------------------------------
//Q.6
//--------------------------------------------------------------------------------------

//Q.7 and Q.8

// let originalNumbers = [2, 5, 8, 10, 3];
// let newArr = [];

// originalNumbers.forEach((element, indx, arr) => (arr[indx] = element * 2));

// originalNumbers.forEach((element) => console.log(element));

// originalNumbers.forEach(machine);

// function machine(element) {
//   if (element % 2 == 0) {
//     newArr.push(element);
//   }
// }
// newArr.forEach((element)=>console.log(element))
