const search = document.getElementById('search');

const dataNode = document.createElement('ul');
document.body.appendChild(dataNode);

const httpGet = (url) => {
    return fetch(url).then(response => {
        return response.json();
    });
};

document.onkeyup = (event) => {
    if (event.keyCode === 13) {
        let searchText = search.value;

        httpGet("https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/coutrycodes.json")
            .then(countryCodeList => {

                let code = "";
                countryCodeList.forEach(element => {
                    if (element.name.toLowerCase().includes(searchText.toLowerCase())) {
                        if (element.code == "CS") {
                            if ("serbia".includes(searchText.toLowerCase()))
                                code = "RS";
                            
                            if ("montenegro".includes(searchText.toLowerCase()))
                                code = "ME";
                        }
                        else
                            code = element.code;
                    }
                });
                
                
                httpGet(`https://restcountries.eu/rest/v2/alpha/${code}`)
                    .then(countryData => {
                        const dataArray = ["Name: " + countryData.name, "Code: " + countryData.alpha2Code, "Capital: " + countryData.capital, "Region: " + countryData.subregion, "Population: " + countryData.population, "Area: " + countryData.area + " km2", "Language: " + countryData.languages[0].name, "Currency: " + countryData.currencies[0].name];

                        for (let i = 0; i<dataArray.length; i++) {
                            const dataNodeElement = dataNode.appendChild(document.createElement('li'));
                            dataNodeElement.appendChild(document.createTextNode(dataArray[i]));
                            dataNode.appendChild(dataNodeElement);
                        }

                    })
                    .catch(err => {
                        console.log("Error has occured: " + err.message);
                    });

                    dataNode.innerHTML = "";
                
            })
            .catch(err => {
                console.log("Error has occured: " + err.message);
            });


    }
};