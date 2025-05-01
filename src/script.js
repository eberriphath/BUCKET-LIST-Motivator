
const taskInput = document.querySelector('input[type="text"]');
const addButton = document.querySelector('button');

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
document.body.appendChild(mainContainer);

const taskList = document.createElement('ul');
const quoteDisplay = document.createElement('div');
mainContainer.appendChild(taskList);
mainContainer.appendChild(quoteDisplay);


taskList.style.padding = '20px';
taskList.style.fontSize = '1.2em';

quoteDisplay.style.fontSize = '1.5em';
quoteDisplay.style.color = '#f88973';
quoteDisplay.style.marginTop = '20px';
quoteDisplay.style.textAlign = 'center';

// Motivational quotes array
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


function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const newTask = document.createElement('li');
  newTask.textContent = taskText;

  taskList.appendChild(newTask);
  taskInput.value = '';

  displayMotivationalQuote();
}

function displayMotivationalQuote() {
  const quote = getRandomQuote();
  quoteDisplay.textContent = quote;
}

addButton.addEventListener('click', addTask);







