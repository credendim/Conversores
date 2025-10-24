let num = 42;
let sobra = 0;
let loop = true;
let convertido = '';
let hexa = '0123456789ABDEF';
let oct = '012345678';

// Decimal(10) para Binario(2)
while(loop == true) {
    sobra = num%2;
    convertido = sobra + convertido;
    num = Math.floor(num / 2);
    if(num == 1) {
        convertido = 1 + convertido;
        loop = false;
    }
}

console.log(convertido);

// Decimal(10) para Hexa(16)
while(loop == true) {
    sobra = num%16;
    sobra = hexa[sobra];
    convertido = sobra + convertido;
    num = Math.floor(num / 16);
    if(num <= 16) {
        num = hexa[num];
        convertido = num + convertido;
        loop = false;
    }
}

console.log(convertido);

// Decimal(10) para Octal(8)
while(loop == true) {
    sobra = num%8;
    sobra = hexa[sobra];
    convertido = sobra + convertido;
    num = Math.floor(num / 8);
    if(num <= 8) {
        num = hexa[num];
        convertido = num + convertido;
        loop = false;
    }
}

console.log(convertido);