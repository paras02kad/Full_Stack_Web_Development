
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
    },3000);
  });
};

Promise.all([fetchData('url 1'),fetchData('url 2')])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))