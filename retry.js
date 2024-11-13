/* Implement a retry function: Write a function that retries a Promise-based function n times before rejecting. */

const retry = (fn, no_of_times) => {
  if(no_of_times === 0) return Promise.reject("Rejected after retrying..."); 
  return fn()
    .then((result) => Promise.resolve(result))
    .catch(() => retry(fn, no_of_times - 1))
}


async function sequential_run() {
// Test case 1 : Promise rejection
const promise_false = () => new Promise((_, reject) => reject("Rejected"));
await retry(promise_false, 3).then((res) => console.log(res)).catch((err) => console.log(err));

// Test case 2 : Promise resolution
let retry_count = 0;
const promise = () => new Promise((resolve, reject) => {
  retry_count > 1 ? resolve("Accepted") : reject("Rejected");
  retry_count++;
});
await retry(promise, 3).then((res) => console.log(res)).catch((err) => console.log(err));
}

sequential_run();