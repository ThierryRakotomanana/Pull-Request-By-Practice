# What we need to do ?

This functionnality create a new task, this task will be display in the index.html file, so we need to interact with it to :
    - Create a task
    - display the task created

## How can we do that?

    - Interact with the HTML file by the DOM
        1. we need to create variables and elements that tell us, when the user want create a task and what he write. 
        2. And after display it in the task TO DO.

## Tell me when user wanna create the task

First create a file "app.js" and link this with the HTML file by the `<script>` tag. This file will contain all the code we will write in each step.
    Steps :
    How to known when the user click the button that create a task
    - create a variable `buttonAddNewTask`
    - add an EventListener for buttonAddNewTask
    - create a funcion ``createNewTask()`` called when the button is clicked

    Codes :

## Show the task created

After that, we need to take the value write by user in the form to set it to the title task and after dispaly it in the list of Task TO DO:
    Steps :
    - create a variable that contain the value of title task(text)
    - in the function ``createNewTask()`` :
        - create a variable who have the same proprety of the list items
        - create another variable who take the value of title task and append it in the list items.
        - display the list items in the TO DO section
    Codes :

## Some Explicatiions

Apply the DRY principle to write less code and to be more readable by using the ``function createElement``
Add a condition to avoid an empty title task(you can even do better than this simple condition ;) ).
Insert the Task create before the last element in the list items(the button element)

## Final code

```js
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
        li.append(span)
        listTaskToDo.insertBefore(li, taskTilte)
    }
}

buttonAddNewTask.addEventListener('click', createNewTask)
```

## [Next Step](deleteTask.md)