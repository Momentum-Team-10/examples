/* globals fetch, moment */
console.log('Hello, World!')

// Save the request URL in a variable
// so that you only need to update it in one place
const url = 'http://localhost:3000/todos'

// Grab the todo-list ul element from the DONM
const todoList = document.getElementById('todo-list')

// Grab the form element from the DOM
const form = document.querySelector('#todo-form')


/* Event listeners */

// Have form element listen for a submit event
// Once submit event is triggered, render my newly created todo item on the DOM
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoText = document.getElementById('todo-text').value
    console.log(todoText)
    createTodo(todoText)
    // Clear form after a todo has been created
    form.reset()
})


// Add event lisenters to the 'x' and pencil 
// icons in my UI
todoList.addEventListener('click', (e) => {

    // delete todo if I click on the 'x' icon
    if (e.target.classList.contains('delete')) {
        console.log('todo deleted!')
        deleteTodo(e.target)
    }

    // delete todo if I click on the pencil icon
    if (e.target.classList.contains('edit')) {
        console.log('editing todo')
        updateTodo(e.target)
    }

})

/* DOM manipulation */

function renderTodoItem(todoObj) {
    // Create an li to hold the body of my todo
    const li = document.createElement('li')
    // make the id of the li element the id of my todo object
    li.id = todoObj.id
    li.classList.add(
        // These strings are TACHYONS class names
        'lh-copy',
        'pv3',
        'ba',
        'bl-0',
        'bt-0',
        'br-0',
        'b--dotted',
        'b--black-3'
    )

    renderTodoText(li, todoObj)
    todoList.appendChild(li)
}

// Set the innerHTML of the li render
// the value at the key of body in my todo objects
function renderTodoText(li, todoObj) {
    li.innerHTML = `
    <span class="dib w-60">${todoObj.body}</span>${todoObj.updated_at ? moment(todoObj.updated_at).format('MMM DD, YYYY') : ""
        }<i class="ml2 dark-red fas fa-times delete" ></i > <i class="ml3 fas fa-edit edit"></i>
`
}

// Run this function to render
// elements to DOM
listTodos()

/* API requests */

// GET Request: get all of the todos in the db
function listTodos() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for (let item of data) {
                renderTodoItem(item)
            }
        })
}

// POST request: add a new todo to the db
function createTodo(todoText) {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: todoText,
            body: todoText,
            created_at: moment().format()
        })
    })
        .then(res => res.json())
        .then(data => renderTodoItem(data))
}


// DELETE request: delete a todo based on id
function deleteTodo(todoEl) {
    fetch(url + '/' + `${todoEl.id} `, {
        method: 'DELETE'
    }).then(() => todoEl.parentElement.remove())
}


// PUT request: update a todo based on id
function updateTodo(todoEl) {
    const todoText = document.getElementById('todo-text').value
    fetch(url + '/' + `${todoEl.parentElement.id} `, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: todoText,
            body: todoText,
            updated_at: moment().format()
        })
    })
        .then(res => res.json())
        .then(data => {
            renderTodoText(todoEl.parentElement, data)
        })
}
