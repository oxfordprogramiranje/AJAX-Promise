async function loadUsers() {
    const response  = (await fetch("data/users.json")).json();
    //const users = await response.json();

    return response;
    console.log(response);
};

document.addEventListener('DOMContentLoaded', async () => {
    let users = [];
    try {
        users = await loadUsers();
    }
    catch (err) {
        console.log("Doslo je do greske: " + err.message);
    }

    console.log(users);
});