

sqr = (n) => n*n;
dbl = (n) => n*2;


sqrThenDbl = (func_1,func_2) => value => func_1(func_2(value));

const data = sqrThenDbl(sqr,dbl);

console.log(data(2));