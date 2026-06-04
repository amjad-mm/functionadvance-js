function add (...count){
    console.log(count)
}
add(12,34,56,75,54)

const arr=[10,30,80,70,60]
console.log(...arr)

const frontend = ["HTML","CSS"];
const backend = ["Node","MongoDB"];

const fullStack = [...frontend, ...backend];

console.log(fullStack);

//spreak items with the spread opretaors