const input = document.getElementById('inputField');

const dataNode = document.createElement('ul');
document.body.appendChild(dataNode);

const httpGet = (url) => {
    return fetch(url).then(response => {
        return response.json();
    });
};

document.onkeyup = (event) => {
    if (event.keyCode === 13) {
        
        httpGet(`https://api.nationalize.io/?name=${input.value}`)
            .then(result => {
                
                let countryCodes = [], probabilities = [];
                for (const country of result.country) {
                    countryCodes.push(country.country_id);
                    probabilities.push(country.probability);
                }

                let countryCodesMix = '';
                for (let i = 0; i<countryCodes.length; i++) {
                    countryCodesMix += i !== countryCodes.length-1 ? countryCodes[i] + ";" : countryCodes[i];
                }

                let countryAPI = `https://restcountries.eu/rest/v2/alpha?codes=${countryCodesMix}`;
                httpGet(countryAPI)
                    .then(countries => {
                        let j = 0;
                        for (const country of countries)  {
                            const dataArray = ["Name: " + country.name, "Code: " + country.alpha2Code, "Capital: " + country.capital, "Region: " + country.subregion, "Population: " + country.population, "Area: " + country.area + " km2", "Language: " + country.languages[0].name, "Currency: " + country.currencies[0].name];
                            for (let i = 0; i<dataArray.length; i++) {
                                const dataNodeElement = dataNode.appendChild(document.createElement('li'));
                                dataNodeElement.appendChild(document.createTextNode(dataArray[i]));
                                dataNode.appendChild(dataNodeElement);
                            }
                            const dataNodeElement = dataNode.appendChild(document.createElement('li'));
                            dataNodeElement.appendChild(document.createTextNode(`Probability: ${probabilities[j++]}`));
                            dataNode.appendChild(dataNodeElement);

                            const br = dataNode.appendChild(document.createElement('br'));
                            dataNode.appendChild(br);
                        }
                    })
                    .catch(err => {
                        console.log("An error has occured: " + err.message);
                    });

                    dataNode.innerHTML = "";

            })
            .catch(err => {
                console.log("An error has occured: " + err.message);
            });
    }
}