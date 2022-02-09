
function generateRandom(){
    return Math.floor(Math.random()*6);
}

let btnRoll = document.querySelector('#btnRoll');
btnRoll.addEventListener('click', function(){
    let leftBox = document.querySelector('#left');
    let leftResult = generateRandom();
    leftBox.innerHTML = leftResult;

    let rightBox = document.querySelector('#right');
    let rightResult = generateRandom();
    rightBox.innerHTML = rightResult;

    let result = (leftResult + rightResult)/2;
    document.querySelector('#result').innerHTML = result;

})