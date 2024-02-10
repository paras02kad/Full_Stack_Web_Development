const arr = [1, 2, 3, 4, 5, 6];

doubleLog = (data) => {
  const test = data * data;
  console.log(test);
};

arr.forEach(doubleLog);
