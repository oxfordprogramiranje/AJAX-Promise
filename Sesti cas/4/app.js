const dugme = document.getElementById('dugme');
const clickTo = rxjs.fromEvent(dugme, 'click');

clickTo.subscribe(
    event => {
        document.body.appendChild(document.createTextNode('Click!'));
    },

    error => {
        document.body.appendChild(
            document.createTextNode(`Desila se greska: ${error.message}`)
        );
    },

    () => {
        document.body.appendChild(document.createTextNode('Gotovo!'));
    }
);