async function machine() 
{

  const promise = new Promise
   (
     (resolve, reject) => 
      {
         setInterval( 
            () => 
          {
             console.log("hello there!");
          }, 2000);
  }
  );

  console.log("from between");

  const data = await promise;

  console.log(data);
}

machine();
