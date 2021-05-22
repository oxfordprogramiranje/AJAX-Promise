let niz = [2, 1, -2, 3];
console.log(niz);

let r = niz.reduce((k, x) => k * x, 3);
console.log(r);

let imena = ["aleksandara", "aleksandar", "bojana", "bojan", "milena", "milan", "milan"];
let brojMilana = imena.reduce((broj, ime) => broj + (ime == 'milan' ? 1 : 0), 0);
console.log(brojMilana);