class Student {
    constructor (indeks, ime, prezime) {
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

studenti
    .filter(student => {
        let godina = student.indeks.substr(student.indeks.indexOf('/') + 1);
        return godina === '2022';
    })
    .map(student => {
        return ` ${student.ime} ${student.prezime} `;
    })
    .forEach(imePrezime => {
        console.log(imePrezime);
    });


let smerovi = [
    [
        new Student('1/2022', 'Dusan', 'Cojic'),
        new Student('2/2022', 'Emilija', 'Cvetkovic'),
        new Student('3/2022', 'Teodora', 'Zdravkovic')
    ],
    [
        new Student('1/2023', 'Mia', 'Stojanovic'),
        new Student('2/2023', 'Sava', 'Mihajlovic'),
        new Student('3/2023', 'Ognjen', 'Cekic')
    ]
];

smerovi.forEach(smer => {
    smer.forEach(student => {
        console.log(student.indeks);
    })
});