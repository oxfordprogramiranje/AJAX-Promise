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

const source = rxjs.interval(1000);
const publisher = source.pipe(rxjs.operators.publish());

publisher.subscribe(getSubscriber('Observer 1'));
publisher.subscribe(getSubscriber('Observer 3'));

publisher.connect();

setTimeout(() => {
    publisher.subscribe(getSubscriber('Observer 2'));
}, 5000)