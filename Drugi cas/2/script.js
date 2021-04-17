const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = (Math.random() * 5).toFixed(0);
        number = Number.parseInt(number);

        if (number <= 2)
            reject("Invalid result!");

        resolve(number);
    }, 1000);
});

// One way
/* promise.then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
}); */

// Other way
promise
    .then(number => console.log(number))
    .catch(err => console.log(err));

promise
    .then(number => console.log("Number + 1: ", number+1));