const validator = {
    isValid: function (creditCardNumber) {

        console.log(creditCardNumber)
        //INVERTIR VALORES
        //arreglo para separar valores
        const cardNumberArray = creditCardNumber.split('');
        //invertir valores
        const cardNumberInverse = cardNumberArray.reverse();
        //convertirlo a string otra vez
        const cardNumberConvert = cardNumberInverse.join('');
        let resultado = 0;
              for (let i = 0; i < cardNumberConvert.length; i++) {
            console.log(cardNumberConvert.length)
            if (i % 2 !== 0) {
                //multiplicar por dos
                const multiplicar = (cardNumberConvert[i] * 2);
                // si es mayor a 9 sumar dígitos 
                if (multiplicar >= 10) {
                    const dig1 = String(multiplicar)[0];
                    const dig2 = String(multiplicar)[1];
                    const suma = Number(dig1) + Number(dig2);

                    resultado += Number(suma);
                }
                else {
                    resultado += Number(multiplicar);
                }
            }
            else {
                resultado += Number(cardNumberConvert[i]);
            }
        }

        if (resultado % 10 === 0) {
            return true;
        }
        else {
           return false;
        }
     },

    maskify: function (cardNumberInput) {
        if (cardNumberInput.length <= 4) {
            return cardNumberInput
        }
        else {
            let guardar = cardNumberInput.slice(-4)
            let masked = cardNumberInput.slice(0, -4)
            let gato = ""
            for (let contador = 0; contador < masked.length; contador++) {
                gato += "#"
            }
            return gato + guardar
        
        }
    
    },

};

export default validator;