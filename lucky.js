const fs = require('fs');
let jogadas = 1;
let numeros = [];

function lot(max) {
    let ar = Math.random() * max
    numeros.push(Math.floor(ar));
}
while (jogadas <= 6) {
    jogadas++;
    lot(60)
}
console.log(numeros)


let texto = numeros.join(',');
fs.writeFileSync('lucky-numbers.txt', texto);
console.log('Text file generated successfully!');