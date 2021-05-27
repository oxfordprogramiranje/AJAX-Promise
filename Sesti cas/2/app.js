const tokPrimer = rxjs.from([1, 2, 3]);

const sumObserver = {
    sum: 0,

    next(value) {
        console.log('Adding: ' + value);
        this.sum = this.sum + value;
    },
    error() {
        console.log("Ann error occured");
    },
    complete() {
        console.log('Sum equals: ' + this.sum);
    }
};

tokPrimer.subscribe(sumObserver);