//Função Heroi pora verificar se ele ira sobreviver
function heroi(balas, dragoes){
    if(balas >= dragoes * 2){
        return true;
    } else {
        return false
    }
}

// Validações
console.log(heroi(10, 5)); //true
console.log(heroi(7, 4)); //fals e
console.log(heroi(4, 5)); //false
console.log(heroi(100, 40)); //true
console.log(heroi(1500, 751)); //false
console.log(heroi(0, 1)); //false