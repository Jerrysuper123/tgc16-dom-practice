// PLACE YOUR CODE HERE
let emphasisElements = document.querySelectorAll('.emphasis');
for (let el of emphasisElements){
    el.style.fontFamily = 'Verdana';
}

let finishElements = document.querySelectorAll('li.finished');
for (let el of finishElements){
    el.style.textDecoration = 'line-through';
}

let toDoElements = document.querySelectorAll('#low-priority>li.todo');
for (let el of toDoElements){
    el.style.backgroundColor = 'blue';
}


let alertElements = document.querySelectorAll('#alert');
for (let el of toDoElements){
    el.style.color = 'red';
}

