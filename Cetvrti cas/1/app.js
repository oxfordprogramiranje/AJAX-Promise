const promise = new Promise((resolve, reject) => {
    throw new Error('Doslo je do greske');
});

try {
    promise.then(value => {
        document.body.appendChild(document.createTextNode(value));
    });
}
catch (err) {
    document.body.appendChild(document.createTextNode(err));
};

// try-catch mehanizam radi sa sinhronim funkciijama