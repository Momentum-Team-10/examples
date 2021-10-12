let people = ['Jeanette', 'Zack', 'Janelle', 'Trey', 'James', 'Lila', 'Jason', 'Jonathan']

function remove(array, arrayItem) {
    debugger
    if (array.indexOf(arrayItem === false)) {
        return array
    } else {
        return array.filter((item) => item !== arrayItem)
    }
}

console.log(remove(people, 'Oxford' ))