let count = 1;

machine =()=>
{
    console.log(count++)
    if(count==5)
    {
        clearInterval(tata)
    }
   return;
}

const tata = setInterval(machine,2000);


