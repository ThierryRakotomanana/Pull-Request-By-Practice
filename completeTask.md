# What we need to do ?
This functionnality move the task selected in the list of task complete, so we need to : 
    - Know what task is slected
    - Move it.

# How can we do that?

        1.  
        2. 

## Tell me what task is selected
 
    Steps :
    - 
    Codes :
    
    const buttonSave = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svg save">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
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
            const svgSave = createElement('svg', buttonSave)
            li.append(span, svgDelete)
            listTaskToDo.insertBefore(li, taskTilte)

            svgDelete.addEventListener('click', deleteTask)
        }
    }
## Move Task to complete section

    Steps :
    - 
    Codes :
    const boxContainTaskComplete = document.querySelector('.task.complete')
    const listTaskComplete = document.querySelector('.list-items.complete')

    boxContainTaskComplete.classList.add('hidden')

    function hiddentElement(params) {
        params.forEach(element => addClassHidden(element));
    }

    function moveToComplete(){
        listTaskComplete.append(this.parentElement)
        hiddenElement([this, boxContainTaskComplete])
    }
    
    function createNewTask(){
        if(taskTilte.value != '') {
            const li = createElement('li', 'list-item')
            const span = createElement('span', taskTilte.value)
            const svgDelete = createElement('svg', buttonDelete)
            const svgSave = createElement('svg', buttonSave)
            li.append(span, svgDelete)
            listTaskToDo.insertBefore(li, taskTilte)

            svgDelete.addEventListener('click', deleteTask)
            svgSave.addEventListener('click', moveToComplete)
        }
    }
## Some Explicatiions 

## Final code

## [Next Step](editTask.md)