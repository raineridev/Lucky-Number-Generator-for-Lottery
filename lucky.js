const fs = require('fs');
let drawnNumbers = [];

function lot(max) {
    let repeatOperation = Math.random() * max
    drawnNumbers.push(Math.floor(repeatOperation));
}
for(let moves = 1; moves <= 6; moves++) {
    lot(60)
}
console.log(drawnNumbers);


let texto = drawnNumbers.join(',');
fs.writeFileSync('lucky-numbers.txt', texto);
console.log('Text file generated successfully!');
