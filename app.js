// Activity1

const repeat5Times = () => {
    for (let i = 0; i < 5; i++) {
    simpleFunction();
    }
}

const simpleFunction = () => {
    console.log("Hello Code Nation");
}

repeat5Times();

// Activity2
const myNums = [1, 2, 3, 4, 5];

const timesThree = myNums.map(num => num * 3);
console.log(timesThree);