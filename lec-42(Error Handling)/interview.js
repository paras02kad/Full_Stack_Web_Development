//Q.1
// const fetchData = (url) => 
// {
//   return new Promise((reject, resolve) => 
//   {
//     setTimeout(() => 
//     {
//       if (Math.random() > 0.5) 
//       {
//         resolve("data");
//       } 
//       else 
//       {
//         reject(new Error("error"));
//       }
//     },3000);
//   });
// };

// fetchData('url')
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))


const fetchData = (url) => 
{
  return new Promise((reject, resolve) => 
  {
    setTimeout(() => 
    {
      if (Math.random() > 0.5) 
      {
        resolve("api data");
      } 
      else 
      {
        reject(new Error(`custom error ${url}`));
      }
    },1000);
  });
};

Promise.all([fetchData('url 1'),fetchData('url 2')])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))