let test = [1, 2, 3, 4, 5, 6, 7];
let initial = 0;

const data = test.reduce((sum, num, indx,arr) => {
  sum += num;
  //console.log(`${indx}   ${arr[indx]}   ${num}`)
  console.log(`${num} ----> ${sum}`)
  return sum;
}, initial);

console.log(data);
