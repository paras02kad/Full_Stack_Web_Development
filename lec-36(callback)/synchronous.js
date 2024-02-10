function cb1 (test) 
{
test()
};

function cb2()
{
console.log('hello there from cb-2');
};

cb1(cb2);

/*

In the given code, the callback `cb2` is synchronous. Let's break down the code to understand why:

1. You have a function `cb1` that takes a callback function `test` as a parameter and immediately invokes it with `test()`.

2. The callback function `cb2` simply logs a message to the console synchronously.

3. When you call `cb1(cb2);`, it means you are passing the `cb2` function as a callback to `cb1`, and `cb1` then immediately invokes it.

Since there are no asynchronous operations involved, the execution flows synchronously, and the message "hello there from cb-2" will be logged to the console right away. If `cb2` had involved asynchronous operations, it might have been considered an asynchronous callback.


*/