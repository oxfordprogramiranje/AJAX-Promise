const url = "https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/cocktail-recepies.json";

let lista = '';
let template = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Coctails</a>
        </div>
    </nav>

    <br><br><br><br>
    
    <div class="container">
        <div id="div1" class="row"></div>
    </div>
`;
document.body.innerHTML = template;

const p = new Promise((resolve, reject) => {

    const req = new XMLHttpRequest();

    req.open('GET', url);
    req.onreadystatechange = () => {
        if(req.readyState == 4 && req.status == 200)
            resolve(JSON.parse(req.responseText));
    }

    req.send();
});

p.then((result) => {
    for (const res of result) {
        
        lista += `
            <div class="col-sm-4">
                <div class="card border-warning mb-3" style="width: 18rem;">
                    <div class="card-header bg-warning">
                        Coctail: ${res.name}
                    </div>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Glass: ${res.glass}</li>
                        <li class="list-group-item">Category: ${res.category}</li>
                        <li class="list-group-item text-wrap">Preparation: ${res.preparation}</li>
                    </ul>
                </div>
            </div>
        `;

        document.getElementById("div1").innerHTML = lista;
    }
})
.catch((err) => {
    console.log(err.message);
});