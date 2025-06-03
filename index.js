//callback
function logger(value) {
    console.log(value);
}
function calculate(num1, num2){
    let sum = num1 + num2
    logger(sum);
    return sum;
}
function calculateWithCallback(num1, num2, callback){
    let sum = num1 + num2;
    callback(sum);
    return sum;
}
calculate(5, 5);
calculateWithCallback(5, 5, logger);
calculateWithCallback(5, 5, () => {});

//structure of Promise
const myPromise = new Promise((resolve, reject) => {
 resolve("success")
//rejected
})
 // promise resolve caalback called
 .then (value  => {
    console.log(value)
 })
//Promise reject callback called
.catch(err => {
    console.log(err)
})

//async
function a(){
    return Promise.resolve("a")
}
async function b(){
    return "b"
}
console.log(a())
console.log(b())

// Generator
function* range(start,end){
    while(start < end){
        //return value and wait until next execution
        yield start;
        start += 1
    }
}
for (i of range(1,10)){
    console.log(i)
}