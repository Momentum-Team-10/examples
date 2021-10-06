let root = document.getElementById('root')
console.log(root)
let name = 'Keanya'
let newElement = document.createElement('h1')

let object = {
    name: 'Jeanette',
    location: 'Raleigh',
    age: 33,
    hobbies: []
}

let personName = object.name

newElement.innerText = `${personName}`
root.appendChild(newElement)
// newElement.remove()

let newDiv = document.createElement('div')
root.appendChild(newDiv)
newDiv.innerHTML = `<p>Hello ${personName}!</p>`

let button = document.getElementById('button')

button.addEventListener('click', (event) => {
    console.log(event)
    // newDiv.style.border = '5px solid yellow'
})