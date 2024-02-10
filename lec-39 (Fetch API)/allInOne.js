
//M-1

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

//M-2
async function machine()
{
try{
    
    const data_1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data_2 = await data_1.json()
    
    console.log(data_2);
}
catch(err)
{
    console.log('error')
}
finally
{
console.log('finally Done')
}
}

machine();