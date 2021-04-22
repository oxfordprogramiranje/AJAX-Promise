function httpGet(url) {
    return fetch(url).then(function (response) {
        return response.json();
    });
}

//U ovom pristupu imamo tacno 2 HTTP poziva, sto je znacajno unapredjenje u odnosu na prethodni primer.
httpGet("https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/students.json")
    .then(function (students) {
        return new Promise(function (resolve, reject) {

        // Problem sa ovim pristupom jeste sto donji .catch() nece uhvatiti izuzetak
        // koji se mozda javi u funkciji koja se prosledjuje ovoj .then() metodi.
        // tako da bi ispravnija implementacija podrazumevala da postoji jos jedan .catch() poziv
        // za obecanje koje vrati poziv httpGet() ispod.

            httpGet("https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/exams.json").then(function (exams) {
                // Otkomentarisati narednu liniju kako bi se u konzoli prikazao neobradjen izuzetak.

                // throw new Error("Ovaj izuzetak nece biti uhvacen .catch() metodom ispod");
                
                resolve([students, exams]);
            });
        });
    })
    .then(function ([students, exams]) {

        for (const student of students) {
            const node = document.createElement("p");
            node.appendChild(document.createTextNode(`${student.name} ${student.surname} (${student.index})`));
            document.body.appendChild(node);
            const examNodeList = document.createElement("ul");
            document.body.appendChild(examNodeList);
            
            for (const exam of exams) {
                if (exam.studentId !== student.id) {
                    continue;
                }
                const examNode = document.createElement("li");
                examNode.appendChild(document.createTextNode(`${exam.final} ${exam.year} − grade: ${exam.grade},status: ${exam.status}`));
                examNodeList.appendChild(examNode);
            }
        }

    })
    .catch(function (err) {
        console.log("Doslo je do greske: " + err.message);
    });