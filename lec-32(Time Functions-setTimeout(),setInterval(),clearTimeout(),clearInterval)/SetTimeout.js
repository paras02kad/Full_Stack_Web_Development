

// setTimeout(()=>console.log("Hi!"),3000)

// for(var i = 0; i<5; i++)
// {
//     setTimeout(()=>{console.log(i)},1000);
// }
// console.log();

// for(let i = 0; i<5; i++)
// {
//     setTimeout(()=>{console.log(i)},1000);
// }



for(var i = 0; i<5; i++)
{
    setTimeout(

        (
            (i_local)
            =>
            {
                console.log(i_local);
            }
        )
        (i),1000
        )

}