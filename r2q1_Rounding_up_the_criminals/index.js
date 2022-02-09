let boxes = document.querySelectorAll('.a');
for(let box of boxes){
    box.style.backgroundColor = 'red';
    box.innerText = box.innerText + '(jailed)';
}

// to select multiple classes AND .className.className
let underCoverBoxes = document.querySelectorAll('div.undercover.a');
for(let el of underCoverBoxes){
    el.style.backgroundColor = 'yellow';
}