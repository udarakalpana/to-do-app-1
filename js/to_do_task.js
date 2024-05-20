function createNewTask() {
    const inputTask = document.getElementById('taskInput').value

    if (inputTask === '') {
        alert('Pleaes enter new task!')
        return
    }

    // Create new task list
    const listItem = document.createElement('li')
    listItem.textContent = inputTask


    // Add Delete button
    const deleteButton = document.createElement('button')
    deleteButton.id = 'deleteBtn'
    deleteButton.textContent = 'Delete'
    deleteButton.onclick = function() {
        listItem.remove()
    }

    listItem.appendChild(deleteButton)

    document.getElementById('taskList').appendChild(listItem)


    document.getElementById('taskInput').value = '';

}