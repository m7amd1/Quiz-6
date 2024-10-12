let tasks = [];

console.log(`Task Manager Menu 
    1. Add Task
    2. View Tasks
    3. Toggle Task Completion
    4. Edit Task
    5. Delete Task
    6. Exit`);

    function showMenu() {
  const input = prompt("Please enter a number from 1 to 6");

  if (input === null) {
    console.log("No input provided. Exiting.");
    return;
  }

  const choice = Number(input);

  switch (choice) {
    case 1:
      addTask();
      break;
    case 2:
      viewTasks();
      break;
    case 3:
      toggleTaskCompletion();
      break;
    case 4:
      editTask();
      break;
    case 5:
      deleteTask();
      break;
    case 6:
      console.log("Exiting the application.");
      return;
    default:
      console.error("Invalid input. Please enter a number between 1 and 6.");
      showMenu();
  }

  showMenu(); 
}

// add task
function addTask() {
  const taskName = prompt("Enter The Task Name:");
  if (taskName) {
    tasks.push({ name: taskName, completed: false });
    console.log(`Task "${taskName}" added.`);
  } else {
    console.error("Task Name cannot be empty.");
  }
}

// view tasks
function viewTasks() {
  if (tasks.length === 0) {
    console.log("No tasks to display.");
  } else {
    console.log("Tasks:");
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.name} [${
          task.completed ? "Completed" : "Pending"
        }]`
      );
    });
  }
}

// toggle task completion
function toggleTaskCompletion() {
  const taskIndex = prompt("Enter the task number to toggle completion:");
  const index = Number(taskIndex) - 1;

  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = !tasks[index].completed;
    console.log(
      `Task "${tasks[index].name}" is now marked as ${
        tasks[index].completed ? "Completed" : "Pending"
      }.`
    );
  } else {
    console.error("Invalid task number.");
  }
}

// edit task
function editTask() {
  const taskIndex = prompt("Enter the task number to edit:");
  const index = Number(taskIndex) - 1;

  if (index >= 0 && index < tasks.length) {
    const newTaskName = prompt("Enter the new task name:");
    if (newTaskName) {
      console.log(`Task "${tasks[index].name}" renamed to "${newTaskName}".`);
      tasks[index].name = newTaskName;
    } else {
      console.error("New task name cannot be empty.");
    }
  } else {
    console.error("Invalid task number.");
  }
}

// delete a task
function deleteTask() {
  const taskIndex = prompt("Enter the task number to delete:");
  const index = Number(taskIndex) - 1;

  if (index >= 0 && index < tasks.length) {
    console.log(`Task "${tasks[index].name}" deleted.`);
    tasks.splice(index, 1);
  } else {
    console.error("Invalid task number.");
  }
}

showMenu();
