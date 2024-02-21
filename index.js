const submitBtn = document.getElementById('submitBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


submitBtn.disabled = true;

taskInput.addEventListener('input', function() {

  submitBtn.disabled = taskInput.value.trim() === '';
});

document.getElementById('todoForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const newTaskText = taskInput.value.trim();

  if (newTaskText !== '') {
    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = newTaskText;

    taskList.appendChild(newTaskItem);

    taskInput.value = '';

    submitBtn.disabled = true;
  }
});
