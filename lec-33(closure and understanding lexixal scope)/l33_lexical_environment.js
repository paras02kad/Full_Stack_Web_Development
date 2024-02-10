// function outer()
// {
//     let counter =0;
// return function()
// {
//     console.log(counter++);
// }
// }

// const data = outer();

// data();
// data();
// data();
// data();
// data();

function outer() 
{
  let name = "hello";
  return function ()
   {
    console.log(name);
  };
}

const data = outer();

console.log(data());