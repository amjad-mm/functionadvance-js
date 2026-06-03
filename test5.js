function outer() {
    let name = "Amjad";

    function inner() {
        console.log(name);
    }

    return inner;
}

const myFunction = outer();

myFunction();