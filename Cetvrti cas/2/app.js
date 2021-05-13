const promise = new Promise((resolve, reject) => {
    throw new Error("Doslo je do greske");
});

promise.then(value => {
    document.body.appendChild(document.createTextNode(value));
})
.catch(err => {
    document.body.appendChild(document.createTextNode(err));
});