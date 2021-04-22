function httpGet(url) {
    return fetch(url).then(function (response) {
        return response.json();
    });
}

// Ovaj pristup resava sve probleme prethodna dva primera.
// Gresku mozemo simulirati promenom naziva jedne od datoteka ispod

const promises = [httpGet("https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/students.json"),httpGet("https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/exams.json"),];

// Metod Promise.all() vraca obecanje koje ce biti ispunjeno samo ako je svako obecanje u nizu ispunjeno.
// Ako je makar jedno obecanje odbaceno, onda ce i Promise.all() obecanje takodje biti odbaceno.
// Ako je ispunjeno, onda ce biti prosledjen niz vrednosti kojima su ispunjena obecanja iz datog niza.

Promise.all(promises)
    .then(function ([students, exams]) {
        for (const student of students) {

            const node = document.createElement("p");
            node.appendChild(document.createTextNode(`${student.name} ${student.surname} (${student.index})`));
            document.body.appendChild(node);
            const examNodeList = document.createElement("ul");
            document.body.appendChild(examNodeList);

            for (const exam of exams) {
                if (exam.studentId !== student.id)
                    continue;

                const examNode = document.createElement("li");
                examNode.appendChild(document.createTextNode(`${exam.final} ${exam.year} − grade: ${exam.grade},status: ${exam.status}`));
                examNodeList.appendChild(examNode);
            }

        }
    })
    .catch(function (err) {
        console.log("Doslo je do greske: " + err.message);
    });