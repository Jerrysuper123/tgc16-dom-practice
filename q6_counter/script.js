let count = 0;
changeColor(count);

function changeColor (counter){
    let bg = document.querySelector('#box');
    if(counter%2===0){
        bg.style.backgroundColor = 'green';
    } else {
        bg.style.backgroundColor = 'red';
    }
}

document.querySelector('#increment').addEventListener('click',function(){
    count++;
    document.querySelector('#box').innerHTML = count;
    changeColor(count);
})

document.querySelector('#decrement').addEventListener('click',function(){
    count--;
    if(count<0){
        count=0;
    }
    document.querySelector('#box').innerHTML = count;
    changeColor(count);
})

document.querySelector('#reset').addEventListener('click',function(){
    count=0;
    document.querySelector('#box').innerHTML = count;
    changeColor(count);
})