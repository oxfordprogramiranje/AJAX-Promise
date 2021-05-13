async function Oxford() {
    const promise = new Promise((resolve, reject) => {
        resolve("Obecanje je ispunjeno");
    });

    const value = await promise;
    document.body.appendChild(document.createTextNode(value));
};

Oxford();