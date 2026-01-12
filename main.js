let input = document.getElementById('input');
let button = document.getElementById('button');
let text = document.getElementById('numero');
let option = document.getElementById('option');
let option2 = document.getElementById('option2');

let sobra = 0;
let loop = true;
let convertido = '';
let hexa = '0123456789ABCDEF';
let octa = '012345678';

input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '');
});

button.addEventListener('click', ()=> {
    let num = Number(input.value);
    convertido = '';
    sobra = 0;

    if(option.value == 'bin') {
        if(option2.value == 'oct') {

        } else if(option2.value == 'dec') {

        } else if(option2.value == 'hex') {

        }
    } else if(option.value == 'oct') {
        if(option2.value == 'bin') {

        } else if(option2.value == 'dec') {

        } else if(option2.value == 'hex') {

        }
    } else if(option.value == 'dec') {
        if(option2.value == 'bin') {
            while(num > 0) {
                sobra = num%2;
                convertido = sobra + convertido;
                num = Math.floor(num / 2);
                if(num == 1) {
                    convertido = 1 + convertido;
                    break;
                }
            }
        } else if(option2.value == 'oct') {
            while(num > 0) {
                sobra = num%8;
                sobra = hexa[sobra];
                convertido = sobra + convertido;
                num = Math.floor(num / 8);
                if(num <= 8) {
                    num = hexa[num];
                    convertido = num + convertido;
                    break;
                }
            }
        } else if(option2.value == 'hex') {
            while(num > 0) {
                sobra = num%16;
                sobra = hexa[sobra];
                convertido = sobra + convertido;
                num = Math.floor(num / 16);
                if(num <= 16) {
                    num = hexa[num];
                    convertido = num + convertido;
                    break;
                }
            }
        }
    } else if(option.value == 'hex') {
        if(option2.value == 'bin') {

        } else if(option2.value == 'oct') {

        } else if(option2.value == 'dec') {

        }
    }
    if(convertido.startsWith('0')) {
        convertido = convertido.slice(1);
    }
    console.log(convertido);
    text.innerHTML = convertido;
})
