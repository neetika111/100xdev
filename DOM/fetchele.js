// <!-- There are 5 popular methods available for fetching DOM elements - 
// querySelector
// querySelectorAll
// getElementById
// getElementByClassName
// getElementsByClassName -->

const title = document.querySelector('h1');
console.log(title.innerHTML)

const secondTodo = document.querySelectorAll('h4')[1];
console.log(secondTodo.innerHTML)

const firstTodo = document.querySelector("h4");
firstTodo.innerHTML = "Dont' take class"