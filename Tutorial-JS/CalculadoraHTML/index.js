const inptxtnumero1 = document.getElementById("Numero1")
const inptxtnumero2 = document.getElementById("Numero2")
const inptxtoperador = document.getElementById("Operador")
const btnCalcular = document.getElementById("BotonCalcular")
const outtxtresultado = document.getElementById("Resultado")

btnCalcular.addEventListener('click',calcular)

function calcular(){
    //Todo lo q obtengamos de los objetos se guarda como txt
    const operador = inptxtoperador.value
    const numero1 = parseFloat(inptxtnumero1.value)
    const numero2 = parseFloat(inptxtnumero2.value)

    if ((operador == "+" || operador == "-" || operador == "*" || operador == "/" ) && (!isNaN(numero1) && !isNaN(numero2))) {
        let resultado
        switch (operador) {
            case "+":
                resultado = numero1 + numero2
                break;
            case "-":
                resultado = numero1 - numero2
                break;
            case "*":
                resultado = numero1 * numero2
                break;
            case "/":
                resultado = numero1 / numero2
                break;
        }
        outtxtresultado.innerText = "Resultado: " + resultado
    } else {
        outtxtresultado.style = "color:red"
        outtxtresultado.innerText = "Cálculo imposible"
    }
}