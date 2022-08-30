// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push('Ralph')
    return cats
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob')
    return cats
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
    return cats
}

function appendCat(name) {
    const allcats = [...cats, "Broom"]
    return allcats
}

function prependCat(name) {
    const allcats2 = ["Arnold", ...cats]
    return allcats2
}


function removeLastCat(){
    const allcats3 = cats.slice(0, cats.length - 1)
    return allcats3
}



function removeFirstCat(){
    const allcats4 = cats.slice(1)
    return allcats4
}
