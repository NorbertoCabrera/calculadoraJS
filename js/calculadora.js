window.addEventListener('load',()=>{
    const display = document.querySelector('.calculator-display');
    const keyPadButtons = document.getElementsByClassName('keypad-button');

    const keyPadButtonsArray = Array.from(keyPadButtons);

    keyPadButtonsArray.forEach((button)=>{

        
            button.addEventListener('click',()=>{
                calculadora(button,display);
            })


    });




})



const calculadora = (button,display) => {


           switch (button.innerHTML) {
               case 'C':
                   borrarDisplay(display);
                   
                   break;
                case '=':
                    calcular(display);
                    break;
           
               default:
                   actualizar(display,button);
                   break;
           }



    
}


const calcular = (display) =>{
    display.innerHTML = eval(display.innerHTML);
}


const actualizar = (display,button) => {
     if(display.innerHTML==0){
        display.innerHTML='';
     }
      display.innerHTML = display.innerHTML+button.innerHTML; 
}

const borrarDisplay = (display) => {

        display.innerHTML=0;

}