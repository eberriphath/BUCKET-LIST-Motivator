const taskInput = document.getElementById('new-task');
const addButton = document.querySelector('.add-task-btn');
const taskList = document.getElementById('task-list');
const quoteDisplay = document.getElementById('quote-display');
const showCompletedBtn = document.getElementById('show-completed-btn');
const clearAllBtn = document.getElementById('clear-all-btn');

let tasks = JSON.parse(localStorage.getItem('bucketTasks')) || [];

const quotes = [
  "You’re doing better than you think.",
  "Keep going — your dreams are cheering for you!",
  "Every small step counts. Keep stepping.",
  "You’ve got this. Seriously.",
  "The best view comes after the hardest climb.",
  "Progress, not perfection.",
  "Believe in your journey.",
  "One step closer — and that's amazing.",
  "The fact that you're trying means you're winning.",
  "You’re building something beautiful.",
  "Today’s effort is tomorrow’s success.",
  "You are capable of incredible things.",
  "Keep moving — even tiny steps matter.",
  "You’re braver than you feel right now.",
  "Trust your pace. It’s perfect for you.",
  "Every effort you make matters.",
  "Don’t quit. Great things take time.",
  "You’re writing a story worth telling.",
  "Be proud of how far you’ve come.",
  "Keep aiming for the stars — you’re closer than ever.",
  "You’re stronger than any obstacle.",
  "One day, you’ll be so glad you kept going.",
  "Let today be another brick in your masterpiece.",
  "Your journey matters — every step of it.",
  "Courage doesn’t always roar — sometimes it whispers 'try again.'",
  "You already have everything you need inside you.",
  "Stay hopeful — you’re closer than ever.",
  "Even slow progress is progress.",
  "You are doing an incredible job.",
  "One brave step at a time.",
  "Your growth is something to celebrate.",
  "Celebrate the courage it took to begin.",
  "You're more powerful than your doubts.",
  "Don’t give up — your dreams are counting on you.",
  "Keep dreaming, keep daring, keep doing."
];

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function displayMotivationalQuote() {
  quoteDisplay.textContent = getRandomQuote();
}

function saveTasks() {
  localStorage.setItem('bucketTasks', JSON.stringify(tasks));
}

function renderTasks(showOnlyCompleted = false) {
  taskList.innerHTML = '';
  const filteredTasks = showOnlyCompleted
    ? tasks.filter(task => task.completed)
    : tasks;

  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    taskText.classList.add('task-text');
    if (task.completed) taskText.classList.add('completed');

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('task-actions');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.className = 'complete-btn';
    completeBtn.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks(showOnlyCompleted); 
      displayMotivationalQuote(); 
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks(showOnlyCompleted); 
      displayMotivationalQuote(); 
    };

    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);

    taskItem.appendChild(taskText);
    taskItem.appendChild(actionsDiv);
    taskList.appendChild(taskItem);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === '') return;

  tasks.push({ text, completed: false });
  saveTasks();
  renderTasks();
  taskInput.value = '';
  displayMotivationalQuote();
}

function clearAllTasks() {
  if (confirm('Are you sure you want to delete ALL tasks?')) {
    tasks = [];
    saveTasks();
    renderTasks();
    displayMotivationalQuote();
  }
}

addButton.addEventListener('click', addTask);
showCompletedBtn.addEventListener('click', () => renderTasks(true)); 
clearAllBtn.addEventListener('click', clearAllTasks);

window.addEventListener('DOMContentLoaded', () => renderTasks()); 







