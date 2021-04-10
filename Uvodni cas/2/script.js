const req1 = new XMLHttpRequest();

// request 1
req1.open('GET', 'https://raw.githubusercontent.com/oxfordprogramiranje/Bands/main/bands.json', true);
req1.onreadystatechange = () => {
    if (req1.readyState == 4 && req1.status == 200)
        displayBands(JSON.parse(req1.responseText));
}

req1.send(null);


// request 2
const req2 = new XMLHttpRequest();

req2.open('GET', 'https://raw.githubusercontent.com/oxfordprogramiranje/Books/f3e56acaee984c8b919f688e54907f373581d0ab/books.json', true);
req2.onreadystatechange = () => {
    if (req2.readyState == 4 && req2.status == 200)
        displayBooks(JSON.parse(req2.responseText));
}

req2.send(null);

// display functions
const displayBands = (res) => { console.log(res) }

const displayBooks = (res) => { console.log(res) }
