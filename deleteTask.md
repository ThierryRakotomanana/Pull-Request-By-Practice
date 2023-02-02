# What we need to do ?
This functionnality delete the task selected in the list of TO DO, so we need to : 
    - Know what task is slected
    - remove it.

# How can we do that?
We use Eventlistner to know what task is selected.
        1. Create an element where to apply the EventListner, and attached it with the task when it create. 
        2. Create function to delete the task selected, who is called when the eventlistener catch the event.

## Tell me what task is selected
 
    Steps :
    - Create a buton on the left of the task
    Codes :
```js
    const buttonDelete = `<svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="svg delete">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>`
    function createElement(element, className) {
        const newElement = document.createElement(element)
        newElement.classList.add( element == 'li' ? className : element)
        if(element.includes('span') || element.includes('svg')) newElement.innerHTML = className
        return newElement
    }

    function createNewTask(){
        if(taskTilte.value != '') {
            const li = createElement('li', 'list-item')
            const span = createElement('span', taskTilte.value)
            const svgDelete = createElement('svg', buttonDelete)
            li.append(span, svgDelete)
            listTaskToDo.insertBefore(li, taskTilte)
        }
    }
```
## Delete the task

    Steps :
    - add an EventListner for for the button created, to indicate when user click on it.
    - create a function `deleteTask()` for deleting the task selected.
    Codes :
```js
    function deleteTask() {
        this.parentElement.remove()
    }
    
    function createNewTask(){
        if(taskTilte.value != '') {
            const li = createElement('li', 'list-item')
            const span = createElement('span', taskTilte.value)
            const svgDelete = createElement('svg', buttonDelete)
            li.append(span, svgDelete)
            listTaskToDo.insertBefore(li, taskTilte)

            svgDelete.addEventListener('click', deleteTask)
        }
    }
```
## Some Explicatiions 

## Final code
```js

```

## [Next Step](completeTask.md)