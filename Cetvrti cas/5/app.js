const httpGet = url => {
    return fetch(url).then(response => {
        return response.json();
    });
};

async function Oxford() {
    try {
        const students = await httpGet('https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/students.json');

        for (const student of students) {
            const node = document.createElement('p');
            node.appendChild(document.createTextNode(`${student.name} ${student.surname} (${student.index})`));
            document.body.appendChild(node);
        }
    }
    catch(err) {
        console.log("Doslo je do greske: " + err.message);
    };
};

Oxford();