// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(newCat) {
    cats.push(newCat)
}

function destructivelyPrependCat(cat) {
    cats.unshift(cat)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

// COME BACK TO THIS
function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(cat) {
    return [...cats, cat]
}

function prependCat(cat) {
    return [cat, ...cats]
}

function removeLastCat() {
    const newArray = [...cats];
    newArray.pop()
    return newArray;
}

function removeFirstCat() {
    const newArray = [...cats];
    newArray.shift();
    return newArray;
}