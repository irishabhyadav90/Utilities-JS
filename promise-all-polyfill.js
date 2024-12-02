const promise1 = new Promise((resolve) => setTimeout(() => {
    resolve("Promise 1 resolved");
}, 1000));

const promise2 = new Promise((resolve, reject) => setTimeout(() => {
    resolve("Promise 2 rejected");
}, 1000));

const promise3 = new Promise((resolve, reject) => setTimeout(() => {
    reject("Promise 3 rejected");
}, 1000));


function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject("Rejected! Not an array")
        }
        let resolve_count = 0;
        let results = new Array(promises.length);
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((result) =>  {
                    resolve_count++;
                    results[index] = result;
                    if(resolve_count === promises.length) {
                        return resolve(results);
                    }
                })
                .catch(err => reject(err))
        }); 
    });
} 

promiseAll([promise1, promise2, promise3]).then((res => console.log("Res:", res))).catch(err => console.log("Err:", err));