class Student {
    constructor(indeks, ime, prezime) {
        this.indeks = indeks;
        this.ime = ime;
        this.prezime = prezime;
    }
};

let studenti = [
    new Student('1/2022', 'Dusan', 'Cojic'),
    new Student('2/2022', 'Emilija', 'Cvetkovic'),
    new Student('3/2022', 'Teodora', 'Zdravkovic'),
    new Student('1/2023', 'Mia', 'Stojanovic'),
    new Student('2/2023', 'Sava', 'Mihajlovic'),
    new Student('3/2023', 'Ognjen', 'Cekic')
];

/* function dohvatiIndekse(studenti) {
    let indeksi = [], student;

    for (let i = 0; i<studenti.length; i++) {
        student = studenti[i];
        indeksi.push(student.indeks);
    }

    return indeksi;
}
*/

/* function dohvatiIndekse(studenti) {
    let indeksi = [];

    studenti.forEach(student => {
        indeksi.push(student.indeks);
    });
    return indeksi;
}

console.log(dohvatiIndekse(studenti));
*/

/* function dohvatiIndekse(studenti) {
    return studenti.map(student => {
        return student.indeks;
    });
}

console.log(dohvatiIndekse(studenti));
*/

