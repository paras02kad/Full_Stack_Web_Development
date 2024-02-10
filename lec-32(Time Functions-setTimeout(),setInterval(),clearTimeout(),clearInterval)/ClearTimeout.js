const data = setTimeout(()=>console.log("Hi!"),3000)

clearTimeout(data);

console.log("the data won't execute");