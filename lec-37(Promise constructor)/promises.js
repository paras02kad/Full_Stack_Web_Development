const promiseOne = new Promise((resolve, reject) => {
    let test = false;
  
    console.log("starts here");
  
    if (!test) {
      resolve({
        name: "paras Kadela",
        rollNo: 23,
      });
    } else
      reject({
        type: "error",
        number: 404,
      });
  });
  
  promiseOne
  .then((response)=>console.log(response))
  .catch((data)=>console.log(data))
  .finally(()=>console.log('finally done'))