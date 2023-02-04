# What we need to do ?
This functionnality move the task selected in the list of task complete, so we need to : 
    - Know what task is slected.
    - take the title task and put it in the form where user can edit it.
    - save the change.

# How can we do that?

        1.  
        2. 

## Tell me what task is selected

    Steps :
    - 
    Codes :

## Create all element what we need

    Steps :
    - 
    Codes :

## edit title task and save the change.

    Steps :
    - 
    Codes :
    
## Some Explicatiions 

## Final code
```js
    function removeClassHidden(element){
        element.classList.remove('hidden')
    }

    function addClassHidden(element) {
        element.classList.add('hidden')
    }

    function hiddenTwofirstElement(params) {
        params.forEach((element, index) => index < 2 ? addClassHidden(element) : removeClassHidden(element));
    }

    function editTitleTask() {
        const firstGrandChildOfGrandsParent = this.parentElement.parentElement.firstElementChild.firstElementChild
        const lastGrandChildOfGrandsParent = this.parentElement.parentElement.firstElementChild.lastElementChild
        if(this.nextElementSibling) {
            lastGrandChildOfGrandsParent.value = firstGrandChildOfGrandsParent.innerHTML
            hiddenTwofirstElement([this, firstGrandChildOfGrandsParent, this.nextElementSibling, lastGrandChildOfGrandsParent])
        } else {
            firstGrandChildOfGrandsParent.innerHTML = lastGrandChildOfGrandsParent.value
            hiddenTwofirstElement([this, lastGrandChildOfGrandsParent, this.previousElementSibling, firstGrandChildOfGrandsParent])
        }
    }

    function createElement(element, className) {
        const newElement = document.createElement(element)
        newElement.classList.add( element == 'li' || element == 'div' || element == 'button' ? className : element)
        if(element.includes('span') || element.includes('svg')) newElement.innerHTML = className
        return newElement
    }

    function createNewTask(){
        if(taskTilte.value != '') {
            const li = createElement('li', 'list-item')
            const containTaskTitle = createElement('div', 'contain')
            const span = createElement('span', taskTilte.value)
            const input = createElement('input', taskTilte.value)
            const editContainer = createElement('button', 'contain')
            const svgEdit = createElement('svg', buttonEdit)
            const svgEditSave = createElement('svg', buttonSave)
            const svgDelete = createElement('svg', buttonDelete)
            const svgSave = createElement('svg', buttonSave)

            // disposition of all element in the task and value default
            editContainer.append(svgEdit,svgEditSave)
            containTaskTitle.append(span, input)
            hiddenTwofirstElement([svgEditSave, input])
            li.append(containTaskTitle, editContainer, svgDelete, svgSave)
            listTaskToDo.insertBefore(li, taskTilte)

            // task functionnality : delete, complete and edit
            svgDelete.addEventListener('click', deleteTask)
            svgSave.addEventListener('click', moveToComplete)
            svgEdit.addEventListener('click', editTitleTask)
            svgEditSave.addEventListener('click', editTitleTask)
        }
    }
```
## [Next Step](editTask.md)