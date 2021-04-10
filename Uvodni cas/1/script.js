const btn = document.getElementById('btn');
const mainUL = document.getElementById('mainUL');
let text = '';

btn.addEventListener('click', () => {
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            data(xmlHttp);
    }

    xmlHttp.open('GET', 'http://mysafeinfo.com/api/data?list=presidents&format=json', true);
    xmlHttp.send();
});

let data = (dataJSON) => {
    const allData = JSON.parse(dataJSON.responseText);
    allData.forEach((element, i) => {
        text += '<li>' + element.FullName + ':' + ' ' + element.Party + '</li>';
    });
    
    mainUL.innerHTML = text;
}