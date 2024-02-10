function test(cb1)
{
    cb1(cb2)
    {
        cb2(cb3)
        {
            cb3();
        }
    }
}

cb3 = () => console.log("hello there from inner most function");

test()