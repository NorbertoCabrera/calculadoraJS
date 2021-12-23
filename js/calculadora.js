window.addEventListener('load',()=>{
    const display = document.querySelector('.calculator-display');
    const keyPadButtons = document.getElementsByClassName('keypad-button');

    const keyPadButtonsArray = Array.from(keyPadButtons);

    keyPadButtonsArray.forEach((boton)=>{

        boton.addEventListener('click',()=>{
            console.log(boton.innerHTML);
        })
    });




})