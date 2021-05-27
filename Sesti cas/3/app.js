const tokPrimer = rxjs.interval(1000);

const posmatrac = {
    next(x) {
        console.log('Dobijena vrednost: ', x);
    }
};

const pretplata = tokPrimer.subscribe(posmatrac);
setTimeout(() => {
    pretplata.unsubscribe();
}, 10000);