// Getting and rendering data from an API

let pokedex = new Promise((resolve, reject) => {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.open('GET', 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json', true);

    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            resolve(JSON.parse(xmlHttp.responseText));
    }

    xmlHttp.send();
});

const row = document.getElementById('row');
let rowContent = '';
let index = 1;

let checkIndex = (index) => {
    if (index > 0 && index < 10)
        return `00${index}`;
    
    if (index >=10 && index < 100)
        return `0${index}`;

    if (index >= 100)
        return `${index}`;
}

pokedex.then((res) => {
    res.forEach((element) => {
        rowContent += `
            <div class="col" style="margin-bottom: 1rem;">
                <div class="card" style="width: 10rem; align-items: center;">
                    <img src="https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/${checkIndex(element.id)}.png" class="card-img-top" style="width: 120px; height: 120px; margin-top: 0.5rem;">
                    <div class="card-body" style="align-items: center;">
                        <h5 class="card-title" id="name">${element.name.english}</h5>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#moreInfo${element.id}">More info</button>
                    </div>
                </div>
            </div>

            <div class="modal fade" tabindex="-1" id="moreInfo${element.id}" aria-labelledby="moreInfo" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${element.name.english}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <img src="https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${checkIndex(element.id)}.png" style="width: 13rem; height: 13rem; margin-top: 2rem;">
                                    </div>

                                    <div class="col">
                                        <table class="table table-striped">
                                            <tbody style="text-align: center;">
                                                <tr>
                                                    <td>Type:</td>
                                                    <td>${element.type}</td>
                                                </tr>
                                                <tr>
                                                    <td>Health:</td>
                                                    <td>${element.base.HP}</td>
                                                </tr>
                                                <tr>
                                                    <td>Attack:</td>
                                                    <td>${element.base.Attack}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sp. Attack:</td>
                                                    <td>${element.base["Sp. Attack"]}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sp. Defense</td>
                                                    <td>${element.base["Sp. Defense"]}</td>
                                                </tr>
                                                <tr>
                                                    <td>Speed:</td>
                                                    <td>${element.base.Speed}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        `;
    });

    row.innerHTML = rowContent;
}, (err) => {
    console.log(err);
});