//Q.1

// function sumAsync (a,b,callback)
// {
//     setInterval(()=>
//     {
//         const data = a + b;
//         callback(data)
//     }
//     ,1000)
// }

// sumAsync(3,4,(result)=>{
//     console.log(`answer is ${result}`)
// })

//-------------------------------------------------------

//Q.2

// function getData() 
// {
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve("data fetched successfully");
//     }, 2000);
//   });
// }

// getData()
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//-------------------------------------------------------

//Q.3

// async function test()
// {
//     try{
//         const obj1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const obj2 = await obj1.json()
//         return obj2;
//     }
//     catch(error)
//     {
//         console.log(error);
//         throw('error while fetching api')
//     }
// }

// test()
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))


//-------------------------------------------------------

//Q.4

// async function test ()
// {
// try
// {
//  const obj1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//  const obj2 = await obj1.json()
// return obj2;
// }
// catch(error)
// {
//     console.log(error)
//     throw('error while fetching API')
// }
// }


// async function fetchData() 
// {
//     try 
//     {
//         const data = await test();
//         console.log(data);
//     }

//     catch (error) 
//     {
//         console.error(error);
//     }
// }

// fetchData();


//-------------------------------------------------------

//Q.5