const getSubscriber = (() => {
    function Subscriber(id, transoformFn) {
        this.id = id;
        this.transoformFn = transoformFn;

        this.next = emmitedValue => {
            if (typeof this.transoformFn === 'function')
                console.log(`${this.id}: ${this.transoformFn(emmitedValue)}`);
            else
                console.log(`${this.id}: ${emmitedValue}`);
        };

        this.error = error => {
            console.log(`${this.id}: An Error occured - ${error.message || error}`)
        };

        this.complete = () => {
            console.log(`${this.id}: Completed`);
        }
    }

    return (id, transoformFn) => {
        return new Subscriber(id, transoformFn);
    };
})();

const source = rxjs.interval(500);

source
    .pipe(
        rxjs.operators.take(50),
        rxjs.operators.filter(x => x % 2 === 0),
        rxjs.operators.map(x => x + x),
        rxjs.operators.scan((acc, x) => acc + x, 0)
    )
    .subscribe(getSubscriber('Pipe example'));