//obtenemos elementos
const numero1 = document.getElementById("number1");
const numero2 = document.getElementById("number2");
const numero3 = document.getElementById("number3");

const button = document.getElementById("compareButton"); //obtenemos el boton


//resultados
const descending = document.getElementById("descending");
const ascending = document.getElementById("ascending");
const message = document.getElementById("message");


//numero mayor
function findLargest(value1, value2, value3) {

    if (value1 >= value2 && value1 >= value3) {
        return value1;

    } else if (value2 >= value1 && value2 >= value3) {
        return value2;

    } else {
        return value3;
    }
}


//numero menor
function findSmallest(value1, value2, value3) {

    if (value1 <= value2 && value1 <= value3) {
        return value1;

    } else if (value2 <= value1 && value2 <= value3) {
        return value2;

    } else {
        return value3;
    }
}


//boton comparar
button.addEventListener("click", function () {

    //obtenemos los numeros
    const value1 = Number(numero1.value);
    const value2 = Number(numero2.value);
    const value3 = Number(numero3.value);

    //buscamos el mayor y el menor
    const largest = findLargest(value1, value2, value3);
    const smallest = findSmallest(value1, value2, value3);

    //sacamos el numero del medio
    const middle = value1 + value2 + value3 - largest - smallest;

    //mostramos los resultados
    descending.textContent = `${largest}, ${middle}, ${smallest}`;
    ascending.textContent = `${smallest}, ${middle}, ${largest}`;

      //comprobamos si hay numeros iguales
    if (value1 === value2 && value2 === value3) {
        message.textContent = "Los tres números son iguales!";

    } else if (value1 === value2 || value1 === value3 || value2 === value3) {
        message.textContent = "Hay dos números iguales!";

    } else {
        message.textContent = "Los tres números son diferentes!";
    }

});



