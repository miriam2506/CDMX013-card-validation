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
    
  
    

