const display = document.querySelector('#inputText');
const btns = document.querySelectorAll('.button');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        let button = btn.value;
        let output = display.value += button;
        // let answer = eval(display.value);
        // display.value = answer;
        
        
        
    });
    
});

equal.addEventListener('click', (e) =>{
    let answer = eval(display.value);
    display.value = answer;
    
});
clear.addEventListener('click', (e) =>{
    display.value = ""
});


console.log(display.innerHTML);
