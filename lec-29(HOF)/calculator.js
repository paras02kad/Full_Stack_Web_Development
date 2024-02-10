calculator = (type, initialValue, numbers) => {
  let sum = initialValue;

  for (const number of numbers) {
    sum = type(number, sum);
  }
  return sum;
};

add = (a,b) => a+b;
mul = (a,b) => a*b;

console.log(calculator(add,23,[1,2,3,4,5]));
console.log(calculator(mul,2,[1,2,3]));