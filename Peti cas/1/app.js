const praviIterator = niz => {
    let i = 0;
    return {
        next() {
            if (i < niz.length)
                return {
                    value:  niz[i++],
                    done: false
                }

            return { done: true }
        }
    };
};

const iterator = praviIterator(['Oxford', 'Leskovac']);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);