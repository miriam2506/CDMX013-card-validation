import validator from './validator.js';
const btn = document.getElementById('donar');
const input= document.getElementById('cardNumber');

btn.addEventListener ('click', function (e){
e.preventDefault()

if (validator.isValid (input.value)===true){
  document.getElementById('donar').innerHTML = "<span style='color: green;'>'DONACIÓN EXITOSA'</span>";
}
  else{
    
         document.getElementById('donar').innerHTML = "<span style='color: red;'>'VUELVE A INTENTARLO'</span>";
         }
         input.value= validator.maskify(input.value);
 
    });
    
  
    
 //alert ("Tarjeta rechazada");
// input.addEventListener('keyup',function (e){
//e.preventDefault()
  
// })

 

 /*function soloNumeros(e) {

    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key);
    numeros = "0,1,2,3,4,5,6,7,8,9"
    especiales = "8-37-38-46";
    teclado_especial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            teclado_especial = true
        }
        if (numeros.indexOf(teclado) == -1 && !teclado_especial) {
            return false;
        }
    }
}
    
}
*/




//validador.addEventListener('donar',function(){

  //)


/*
  */



