// Bad way of using async in JS, due to the memory leak

class GetData {
    static go(url) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', url, true);

            req.onreadystatechange = () => {
                if (req.readyState == 4 && req.status == 200)
                    resolve(JSON.parse(req.responseText));
            }

            req.send();
        });
    };
};

const books = GetData.go('https://raw.githubusercontent.com/oxfordprogramiranje/Books/f3e56acaee984c8b919f688e54907f373581d0ab/books.json');

books.then(res => console.log(res), err => console.log(err));