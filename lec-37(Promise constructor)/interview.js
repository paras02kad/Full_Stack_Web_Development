
const promise_1 = Promise.resolve(30);
const promise_2 = Promise.resolve(40);

//Method-1

// const promise = new Promise((resolve)=>{

//     let num1,num2;

//     promise_1.then((test_1)=>{
//         num1 = test_1;
        
//     if(num1 && num2)
//     {
//         resolve(num1+num2);
//     }
//     })

//     promise_2.then((test_2)=>{
//         num2 = test_2;
        
//     if(num1 && num2)
//     {
//         resolve(num1+num2);
//     }
//     })

// })

// promise
// .then((data)=>console.log(data));

//Method-2



const promise_3 = new Promise((resolve)=>{

    Promise.all([promise_1,promise_2])
    .then((res)=>{
        resolve(res.reduce((sum,num)=>sum+num))

    })
})

promise_3.then((data)=>console.log(data))