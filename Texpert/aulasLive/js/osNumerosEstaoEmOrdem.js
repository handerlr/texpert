// Função para verificar se determinado array está em ordem
function estaEmOrdem(arr) {
    let emOrdem;
    if(arr.length === 1) {
        emOrdem = true;
    } else {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1]) {
                emOrdem = false;
                break
            }else {
                emOrdem = true;
            }
        }
    }
    return emOrdem;
}

// Validações
console.log(estaEmOrdem([10000000])) //true
console.log(estaEmOrdem([1, 1, 2, 2])) //false
console.log(estaEmOrdem([1, 2, 4, 7, 19])) //true
console.log(estaEmOrdem([1, 2, 3, 4, 5])) //true
console.log(estaEmOrdem([1, 6, 10, 18, 2, 4, 20])) //false
console.log(estaEmOrdem([9, 8, 7, 6, 5, 4, 3, 2, 1])) //false