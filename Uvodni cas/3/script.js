let promBooks = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.open('GET', 'https://raw.githubusercontent.com/oxfordprogramiranje/Books/f3e56acaee984c8b919f688e54907f373581d0ab/books.json', true);

    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200)
            resolve(JSON.parse(req.responseText));
            // reject("ooooo");
    }

    req.send();
});

let promBands = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.open('GET', 'https://raw.githubusercontent.com/oxfordprogramiranje/Bands/main/bands.json', true);

    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200)
            resolve(JSON.parse(req.responseText));
            // reject("ooooo");
    }

    req.send();
});

promBooks.then((res) => {
    console.log(res);
    return promBands;
}).then((res) => {
    console.log(res);
}), (err) => {
    console.log(err);
};