/*
    Basic example of Time Complexity
    With for -> O(n^2)
    Without for -> O(1)
*/

function addUpToWithFor(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

let t1 = performance.now();
console.log(addUpToWithFor(10000000000));
let t2 = performance.now();
console.log(`Tiempo que paso: ${(t2 - t1) / 1000} segundos`);

function addUpToWithoutFor(n) {
    return n * (n + 1) / 2;
}

let t1 = performance.now();
console.log(addUpToWithoutFor(10000000000));
let t2 = performance.now();
console.log(`Tiempo que paso: ${(t2 - t1) / 1000} segundos`);