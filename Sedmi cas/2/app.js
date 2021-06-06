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

const onClick = rxjs.fromEvent(document, 'click');
let preostaloKlikova = 3;

onClick.subscribe(getSubscriber('Subscriber1', e => `(${e.clientX}, ${e.clientY})`));

const subscription = onClick.subscribe({
    next() {
        --preostaloKlikova;

        if (preostaloKlikova === 0) {
            onClick.subscribe(
                getSubscriber('Subscriber2', e => `(${e.clientX}, ${e.clientY})`)
            );

            subscription.unsubscribe();
            console.log('Drugi posmatrac je pretplacen');
        }
        else {
            console.log(`Preostalo je jos ${preostaloKlikova} klikova do pretplacivanja drugog posmatraca...`);
        }
    }
});