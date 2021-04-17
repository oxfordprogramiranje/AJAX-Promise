const promise = new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 0; i<10000000; i++)
        sum += i;

    resolve(sum);
});

promise.then(result => {
    console.log("Result of the primse: ", result);
});

console.log("This line would be printed first");