const getElem = id => document.getElementById(id);
const log = txt => getElem("output").innerHTML += txt + "\n";

function* gen() {
    yield "v1";
    
    let p = yield "v2";
    log(p);
    yield "v3";
    return "v4";
}

window.onload = () => {
    let itr = gen();

    let x = itr.next().value;
    log(x);
    let y = itr.next().value;
    log(y);
    let z = itr.next("V").value;
    log(z);
    let w = itr.next().value;
    log(w);

    let proba = itr.next().value;
    log(proba);
}