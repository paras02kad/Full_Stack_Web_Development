const promise_1  = Promise.reject('first');

const promise_2  = Promise.reject('Second');

const promise_3  = Promise.reject('Third');

const promise = [promise_1,promise_2,promise_3];

Promise.all(promise)
.then((responce)=>console.log(responce))
.catch((error)=>console.log(error))
.finally(()=>console.log("finally done"))