url = "https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/cocktail-recepies.json";

const p = new Promise((resolve, reject) => {
	
    const req = new XMLHttpRequest();
	
    req.open('get', url);
    req.onreadystatechange = () => {
        if(req.readyState == 4 && req.status == 200)
            resolve(JSON.parse(req.responseText));
    }
	
    req.send();
});

p.then(result => {
    for (const res of result) {
		
        const node1 = document.createElement("h3");
        node1.appendChild(document.createTextNode(`Coctail - ${res.name}`));
        document.body.appendChild(node1);
		
        const node2 = document.createElement("p");
        node2.appendChild(document.createTextNode(`Glass: ${res.glass}`));
		
        document.body.appendChild(node2);
        const node3 = document.createElement("p");
        node3.appendChild(document.createTextNode(`Category: ${res.category}`));
		
        document.body.appendChild(node3);
        const node4 = document.createElement("p");
        node4.appendChild(document.createTextNode(`Preparation: ${res.preparation}`));
		
        document.body.appendChild(node4);
        const node5 = document.createElement("p");
        node5.appendChild(document.createTextNode(`Ingredients: ${res.ingredients[0].ingredient}, ${res.ingredients[1].ingredient}, ${res.ingredients[2].ingredient}`));
		
        document.body.appendChild(node5);
		
    }
}).catch((err) => {
    console.log(err.message);
});

//https://raw.githubusercontent.com/oxfordprogramiranje/APIs/main/cocktail-recepies.json
