

const num1 = document.querySelector('#numero1')
const num2 = document.querySelector('#numero2')
const btn = document.querySelector('#btncalcular')
const form = document.querySelector('#formulario')
const p = document.querySelector('#parrofo')


form.addEventListener('submit', sumandobtn)



form.addEventListener('focus', quepasa)
btn.addEventListener('focus', quepasaotro)

function sumandobtn(event) {
    console.log(event)
    event.preventDefault();
    const suma = num1.value + num2.value
    num1.target.style.background = 'pink';
  
  //  p.innerText = suma
  //  p.innerText= "resultado es " + suma;
 //   num1.value + num2.value
}



function quepasa(event) {
    btn.classList.add('mirando')
    btn.event.target.style.background = 'pink';
}
function quepasaotro(event) {
    
}