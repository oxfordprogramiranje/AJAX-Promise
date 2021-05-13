async function Oxford() {
    
    function getPromise() {
        return new Promise((resolve, reject) => {
            throw new Error('Obecanje nije ispunjeno');
        });
    };

    try {
        const value = await getPromise();
        document.body.appendChild(document.createTextNode(value));
    }
    catch(err) {
        document.body.appendChild(document.createTextNode(err));
    }
}

Oxford();