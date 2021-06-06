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

const nums = [1, 2, 3, 4, 5];
const nums2 = rxjs.from(nums);

nums2.subscribe(getSubscriber('Nums1'));

setTimeout(() => {
    nums2.subscribe(getSubscriber('Nums2'));
}, 1000);