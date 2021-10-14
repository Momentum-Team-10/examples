/* globals fetch, moment */
console.log('Hello, World!')

const url = 'http://localhost:3000/todos'
const todoList = document.getElementById('todo-list')



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

function renderTodoItem(todoObj) {
    const li = document.createElement('li')
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

function renderTodoText(li, todoObj) {
    li.innerHTML = `
    <span class="dib w-60">${todoObj.body}</span>
    <i class="ml2 dark-red fas fa-times delete"></i><i class="ml3 fas fa-edit edit"></i>
    `
}

listTodos()