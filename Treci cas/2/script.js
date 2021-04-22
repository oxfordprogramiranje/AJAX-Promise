function httpGet(url) {
    return fetch(url).then((response) => {
        return response.json();
    });
}

httpGet("https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/students.json")
    .then(students => {
        for (const student of students) {
            const node = document.createElement('p');
            node.appendChild(document.createTextNode(`${student.name} ${student.surname} (${student.index})`));
            document.body.appendChild(node);

            const examNodeList = document.createElement('ul');
            document.body.appendChild(examNodeList);
            
            // Ugnezdjavanje obrade drugog obecanja.
            // Ovaj pristup podseca na pakao funkcija povratnog poziva.
            // Kao i u tom primeru, primetimo da se ovde generise "veliki" broj nepotrebnih HTTP zahteva
            // (za svakog studenta dohvatamo podatke o svim ispitima iznova).
            // Naravno, ovo se moze ispraviti u 2 HTTP zahteva. Kako?

            httpGet("https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/exams.json").then(exams => {

                // Problem sa ovim pristupom jeste sto donji .catch() nece uhvatiti izuzetak
                // koji se mozda javi u funkciji koja se prosledjuje ovoj .then() metodi.
                // tako da bi ispravnija implementacija podrazumevala da postoji jos jedan .catch() poziv
                // za obecanje koje vrati poziv httpGet() ispod.
                // Otkomentarisati narednu liniju kako bi se u konzoli prikazao neobradjen izuzetak.
                    
                // throw new Error("Ovaj izuzetak nece biti uhvacen .catch() metodom ispod");

                for (const exam of exams) {
                    if (exam.studentId !== student.id)
                        continue;

                    const examNode = document.createElement('li');
                    examNode.appendChild(document.createTextNode(`${exam.final} ${exam.year} − Grade: ${exam.grade}, Status: ${exam.status}`));
                    examNodeList.appendChild(examNode);
                }

            });
        }
    })
    .catch(err => {
        console.log("Doslo je do greske: " + err.message);
    })