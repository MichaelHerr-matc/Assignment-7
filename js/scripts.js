// array to hold task
var tasks = [];

// task status 'enum'
var taskStatus = {
  active: 'active',
  completed: 'completed'
}

// task constructor function
function Task (id, name, status) {
  this.id = id;
  this.name = name;
  this.status = status;
}

// create a new task element and add it to the DOM
function addTaskElement (task) {
  // create elements
  var listEl = document.getElementById('active-list');
  var taskEl = document.createElement('li');
  var textEl = document.createTextNode(task.name);

  // set attributes
  taskEl.setAttribute('id', task.id);

  // set task as task element
  taskEl.appendChild(textEl);

  // set task element to list
  listEl.appendChild(taskEl);
}

// click handler to add to new tasks
function addTask (event) {
  // get input
  var inputEl = document.getElementById('input-task');
  if (inputEl.value !== '') {
    // create a unique id
    var id = 'task-' + tasks.length;

    // create a new task
    var task = new Task(id, inputEl.value, taskStatus.active);
    tasks.push(task);

    // add the task to the DOM
    addTaskElement(task);

    // reset the input
    inputEl.value = '';
  }
}

// click handler to complete a task
function completeTask (event) {
  // get the task element
  var taskEl = event.target;
  var id = taskEl.id;

  // find corresonding task in task array and update status
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].status = taskStatus.completed;
      break;
    }
  }

  // move task element from active list to completed list
  taskEl.remove();
  document.getElementById('completed-list').appendChild(taskEl);
}

function init () {
  // wire in the add task button click handler
  document.getElementById('add-task').onclick = addTask;

  // wire in the task completed list item click handler
  document.getElementById('active-list').onclick = completeTask;
}

init();
