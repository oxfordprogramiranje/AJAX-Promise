const map = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Map's been loaded successfully");
    }, 2000);

    // Reject code - uncomment to see error
    /* setTimeout(() => {
        reject("Map has not been loaded successfully");
    }, 250); */
});

const playerData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Player data has been loaded successfully");
    }, 750);

    // Reject code - uncomment to see error
    /* setTimeout(() => {
        reject("Player data has not been loaded successfully");
    }, 250); */
});

const textures = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Textures have been loaded successfully");
    }, 3000);

    // Reject code - uncomment to see error
    /* setTimeout(() => {
        reject("Textures has not been loaded successfully");
    }, 250); */
});

// First way (worse way)
/* map.then(result => console.log(result));
playerData.then(result => console.log(result));
textures.then(result => console.log(result));

console.log("Game's ready for playing"); // This would be printed befored everything is loaded */

// Seccond way (a little bit better)
/* Promise.all([map, playerData, textures]).then(results => {
    console.log(results);
    console.log("Game's ready for playing");
}); */

// Third way(better)
/* map.then(result => console.log(result));
playerData.then(result => console.log(result));
textures.then(result => console.log(result));

Promise.all([map, playerData, textures]).then(results => console.log("Game's ready for playing")); */

// Fourth way (the best)
map.then(result => console.log(result));
playerData.then(result => console.log(result));
textures.then(result => console.log(result));

Promise.all([map, playerData, textures])
    .then(result => console.log("Game's loaded successfully"), err => console.log("Error has occured: ", err));