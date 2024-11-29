const delay1 = () => new Promise((resolve) =>  setTimeout(() => {
    resolve("first completed");   
    console.log("first completed");
}, 4000))

const delay2 = () => new Promise((resolve) =>  setTimeout(() => {
    resolve("second completed"); 
    console.log("second completed");  
}, 1000))

const delay3 = () => new Promise((resolve) =>  setTimeout(() => {
    resolve("third completed");   
    console.log("third completed");  
}, 2000))


const sequential_run = async (arr) => {
    let i = 0;
    let j = arr.length - 1;
    for( let item of arr) {
        await item();
    }

}

sequential_run([delay1, delay2, delay3]);