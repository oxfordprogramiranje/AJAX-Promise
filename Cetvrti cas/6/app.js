const httpGet = url => {
    return fetch(url).then(response => {
        return response.json();
    });
};

async function Oxford() {
    try {
        const students = await httpGet('https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/students.json');
        const exams = await httpGet('https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/exams.json');

        for (const student of students) {
            const node = document.createElement('p');
            node.appendChild(document.createTextNode(`${student.name} ${student.surname} (${student.index})`));
            document.body.appendChild(node);
            const examNodeList = document.createElement('ul');
            document.body.appendChild(examNodeList);

            for (const exam of exams) {
                if (exam.studentId !== student.id)
                    continue;

                const examNode = document.createElement('li');
                examNode.appendChild(document.createTextNode(`${exam.final} ${exam.year} - grade: ${exam.grade}, status: ${exam.status}`));
                examNodeList.appendChild(examNode);
            }
        }
    }
    catch(err) {
        console.log("Doslo je do greske: " + err.message);
    }
}

Oxford();