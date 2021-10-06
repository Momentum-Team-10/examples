let display = document.getElementById('display')

let button1 = document.getElementById('button-1')
let button2 = document.getElementById('button-2')
let button3 = document.getElementById('button-3')

console.log(button1.innerText)

// button1.addEventListener('click', (event) => {
//     display.innerText += button1.innerText
// })

// button2.addEventListener('click', (event) => {
//     display.innerText += button2.innerText
// })

// button3.addEventListener('click', (event) => {
//     display.innerText += button3.innerText
// })

let buttons = document.querySelectorAll('.number-button')
console.log(buttons)

for (let button of buttons) {
    button.addEventListener('click', () => {
        display.innerText += button.innerText
    })
}

let equals = document.getElementById('equals')

equals.addEventListener('click', () => {
   display.innerText = eval(display.innerText)
})