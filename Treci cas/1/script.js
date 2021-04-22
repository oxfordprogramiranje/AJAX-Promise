function httpGet(url) {

    // Umesto da koristimo XMLHttpRequest, veb pregledaci implementiraju tzv. Fetch API.
    // Na raspolaganju nam je funkcija fetch() kojom mozemo slati HTTP zahteve.
    // Za razliku od XMLHttpRequest objekata, funkcija fetch() podrzava rad sa obecanjima.

    return fetch(url).then(response => {
        
        // Povratna vrednost funkcije fetch() je obecanje koje ce biti ispunjeno objektom klase Response.
        // Ovaj objekat ima na raspolaganju metod .json() kojim se vrsi deserijalizacija HTTP odgovora.
        // Metod .json() takodje vraca obecanje, tako da mozemo ulancati then() metodom,
        // kao sto je prikazano ispod.

        return response.json();

    });

}

httpGet("https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/students.json")
    .then((students) => {
        for (const student of students) {
            const node = document.createElement('p');
            node.appendChild(document.createTextNode(`${student.name} ${student.surname} (${student.index})`));
            document.body.appendChild(node);
        }
    })
    .catch(err => {
        console.log("Doslo je do greske: "+ err.message);
    })