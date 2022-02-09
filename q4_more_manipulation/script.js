document.querySelector('h1').style.color = 'green';
document.querySelector('li.finished').innerText = 'Repay credit card debt';

//3
let liUrgent = document.querySelector('li#urgent');
liUrgent.style.borderColor = 'black';
liUrgent.style.borderWidth = '2px';
// liUrgent.style.border = 'black 2px'
// liUrgent.style.borderStyle = 'solid';

//4
document.querySelector('.emphasis').style.textDecoration = "underline";

//5
let pEmphasis = document.querySelector('p.emphasis');
pEmphasis.style.backgroundColor = 'orange';
pEmphasis.style.fontSize = '32px';
pEmphasis.style.lineHeight = '24px';

//6
let toDo = document.querySelector('#urgent>span');
toDo.style.backgroundColor = 'yellow';

//7
let header = document.querySelector('h2');
header.innerHTML = `<span class="greetings">About Us</span>`;

