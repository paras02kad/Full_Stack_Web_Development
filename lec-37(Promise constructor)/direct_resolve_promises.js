const promise_1  = Promise.resolve('first');

const promise_2  = Promise.resolve('Second');

const promise_3  = Promise.resolve('Third');

const promise = [promise_1,promise_2,promise_3];

Promise.all(promise)
.then((responce)=>console.log(responce))
.catch((error)=>console.log(error))
.finally(()=>console.log("finally done"))