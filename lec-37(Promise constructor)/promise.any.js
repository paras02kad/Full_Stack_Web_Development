const promise_1 = new Promise((resolve,reject)=>{
    
    let err = false;

    if(err)
    {
        resolve({data:102})
    }
    else
    reject({data:'erroe'})
})
const promise_2 = new Promise((resolve,reject)=>{

    let err = false;

    if(err)
    {
        resolve({data:103})
    }
    else
    reject({data:'error'})
})
const promise_3 = new Promise((resolve,reject)=>{

    let err = true;

    if(err)
    {
        resolve({data:104})
    }
    else
    reject({data:'error'})
})

const tester = [promise_1,promise_2,promise_3];

Promise.any(tester)
.then((responce) =>console.log(responce))
.catch((data) =>console.log(data))
.finally(()=>console.log('finally done'));