//make the remove button work by removing itself and the task
const todoList = document.querySelector('#todo-list');
const taskForm = document.querySelector('.add-task-form');
const form = document.querySelector('.new-task-input');
const retrieveTask = JSON.parse(localStorage.getItem('addNewTask')) || [];//retrieve from localStorage - [] is for new users


todoList.addEventListener('click', function(task){
    if(task.target.tagName === 'BUTTON'){
        task.target.parentElement.remove();
    }

})
//Mark Todo as complete(cross)
todoList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.className = 'finished-task'
    }
    
})

//prevent the page from reloading when a new task is added
taskForm.addEventListener('submit',function(event){
    event.preventDefault();

//append new taks + button  onto list
    const addNewTask = document.createElement('li');
    const removeTaskBtn =  document.createElement('button');
    
    removeTaskBtn.innerText = 'X';
    retrieveTask.push(form.value); // Push the new taks value to the retrieveTask array
    localStorage.setItem('addNewTask', JSON.stringify(retrieveTask));// Store the updated tasks in localStorage
    console.log(retrieveTask);

    addNewTask.innerText = form.value;
    addNewTask.appendChild(removeTaskBtn);
    todoList.appendChild(addNewTask);
    form.value = '';    
});

for(let i= 0; i < retrieveTask.length; i++){
    const addNewTask = document.createElement('li');
    const removeTaskBtn =  document.createElement('button');
    
    removeTaskBtn.innerText = 'X';
    addNewTask.innerText = retrieveTask[i];
    addNewTask.appendChild(removeTaskBtn);
    todoList.appendChild(addNewTask);

}
