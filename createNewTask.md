# What we need to do ?
This functionnality create a new task, this task will be display in the index.html file, so we need to interact with it to : 
    - Create a task
    - display the task created

# How can we do that?
    - Interact with the HTML file by the DOM
        1. we need to create an element that tell us, when the user want create a task 
        2. And after display it.

## Create new task
Create a file "app.js" and link this with the HTML file with the `script` tag.
In this file, create a funcion called ``createNewTask()``
## Show the task created

# Final code

const buttonAddNewTask = document.querySelector('.add')
const taskTilte = document.querySelector('#taskTitle')
const listTaskToDo = document.querySelector('.list-items.toDo')

function createElement(element, className) {
    const newElement = document.createElement(element)
    newElement.classList.add( element == 'li' ? className : element)
    if(element.includes('span')) newElement.innerHTML = className
    return newElement
}

function createNewTask(){
    if(taskTilte.value != '') {
        const li = createElement('li', 'list-item')
        const span = createElement('span', taskTilte.value)
        const input = createElement('input', taskTilte.value)
        li.append(span, input)
        listTaskToDo.insertBefore(li, taskTilte)
    }
}

buttonAddNewTask.addEventListener('click', createNewTask)

# [Next Step](deleteTask.md)