const getElem = id => document.getElementById(id);
const log = txt => getElem("output").innerHTML += txt + "\n";

function* gen() {
    let a = 0, b = 1;
    while(true) {
        let x = a + b;
        a = b;
        b = x;
        yield a;
    }
}

window.onload = () => {
    let fib = gen();

    for (let i = 0; i<10; i++)
        log(fib.next().value);
}