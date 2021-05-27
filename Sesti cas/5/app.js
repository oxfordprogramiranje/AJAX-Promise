const unos = document.getElementById('unos');
const keyupTok = rxjs.fromEvent(unos, 'keyup');

keyupTok.subscribe(
    event => {
        document.getElementById('rezultat').textContent = event.target.value;
    }
);