const boton = document.getElementById('boton');
const valor  = document.getElementById('valor');
let counter = 0;

boton.addEventListener('click', () =>{
  counter++;
  boton.innerText = `Counter: ${counter}`;
  valor.innerText = counter;
})

