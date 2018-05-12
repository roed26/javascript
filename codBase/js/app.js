var Calculadora = (function () {
    //variables
    var valorActual = 0;
    var nuevoValor = 0;
    var operadorPresionado = false;
    var teclaigualPresionada = false;
    var operador = "";
    var primerValor = 0;
    var valorFinal = 0;
    var valorTemporal = 0;
    var tecla1 = document.getElementById('1');
    var tecla2 = document.getElementById('2');
    var tecla3 = document.getElementById('3');
    var tecla4 = document.getElementById('4');
    var tecla5 = document.getElementById('5');
    var tecla6 = document.getElementById('6');
    var tecla7 = document.getElementById('7');
    var tecla8 = document.getElementById('8');
    var tecla9 = document.getElementById('9');
    var tecla0 = document.getElementById('0');
    var teclaMas = document.getElementById('mas');
    var teclaMenos = document.getElementById('menos');
    var teclaPor = document.getElementById('por');
    var teclaPunto = document.getElementById('punto');
    var teclaOn = document.getElementById('on');
    var teclaIgual = document.getElementById('igual');
    var teclaMasMenos = document.getElementById('sign');
    var teclaRaiz = document.getElementById('raiz');
    var teclaDividir = document.getElementById('dividido');


    tecla1.addEventListener("mousedown", function () {
        reducirTamanoBotonAccion(tecla1);
    });
    tecla1.addEventListener("mouseup", function () {
        tamanoBotonAccion(tecla1);
    });

    tecla2.addEventListener("mousedown", function () {
        reducirTamanoBotonAccion(tecla2);
    });
    tecla2.addEventListener("mouseup", function () {
        tamanoBotonAccion(tecla2);
    });
    tecla3.addEventListener("mousedown", function () {
        reducirTamanoBotonAccion(tecla3);
    });
    tecla3.addEventListener("mouseup", function () {
        tamanoBotonAccion(tecla3);
    });
    tecla4.addEventListener("mousedown", function () {
        reducirTamanoBotonAccionf2(tecla4);
    });
    tecla4.addEventListener("mouseup", function () {
        tamanoBotonAccionf2(tecla4);
    });
    tecla5.addEventListener("mousedown", function () {
        reducirTamanoBotonAccionf2(tecla5);
    });
    tecla5.addEventListener("mouseup", function () {
        tamanoBotonAccionf2(tecla5);
    });
    tecla6.addEventListener("mousedown", function () {
        reducirTamanoBotonAccionf2(tecla6);
    });
    tecla6.addEventListener("mouseup", function () {
        tamanoBotonAccionf2(tecla6);
    });
    tecla7.addEventListener("mousedown", function () {
        reducirTamanoBotonAccionf2(tecla7);
    });
    tecla7.addEventListener("mouseup", function () {
        tamanoBotonAccionf2(tecla7);
    });

    tecla8.addEventListener("mousedown", function () {
        reducirTamanoBotonAccionf2(tecla8);
    });
    tecla8.addEventListener("mouseup", function () {
        tamanoBotonAccionf2(tecla8);
    });

    tecla9.addEventListener("mousedown", function () {
        reducirTamanoBotonAccionf2(tecla9);
    });
    tecla9.addEventListener("mouseup", function () {
        tamanoBotonAccionf2(tecla9);
    });

    teclaMas.addEventListener("mousedown", function () {
        reducirTamanoBotonAccionMas();
    });
    teclaMas.addEventListener("mouseup", function () {
        tamanoBotonAccionMas();
    });

    teclaPor.addEventListener("mousedown", function () {
        reducirTamanoBotonAccionf2(teclaPor);
    });
    teclaPor.addEventListener("mouseup", function () {
        tamanoBotonAccionf2(teclaPor);
    });
    teclaMenos.addEventListener("mousedown", function () {
        reducirTamanoBotonAccionf2(teclaMenos);
    });
    teclaMenos.addEventListener("mouseup", function () {
        tamanoBotonAccionf2(teclaMenos);
    });

    teclaOn.addEventListener("mousedown", function () {
        reducirTamanoBotonAccionf2(teclaOn);
    });
    teclaOn.addEventListener("mouseup", function () {
        tamanoBotonAccionf2(teclaOn);
    });
    teclaIgual.addEventListener("mousedown", function () {
        reducirTamanoBotonAccion(teclaIgual);
    });
    teclaIgual.addEventListener("mouseup", function () {
        tamanoBotonAccion(teclaIgual);
    });

    teclaPunto.addEventListener("mousedown", function () {
        reducirTamanoBotonAccion(teclaPunto);
    });
    teclaPunto.addEventListener("mouseup", function () {
        tamanoBotonAccion(teclaPunto);
    });

    tecla0.addEventListener("mousedown", function () {
        reducirTamanoBotonAccion(tecla0);
    });
    tecla0.addEventListener("mouseup", function () {
        tamanoBotonAccion(tecla0);
    });

    teclaMasMenos.addEventListener("mousedown", function () {
        reducirTamanoBotonAccionf2(teclaMasMenos);
    });
    teclaMasMenos.addEventListener("mouseup", function () {
        tamanoBotonAccionf2(teclaMasMenos);
    });

    teclaRaiz.addEventListener("mousedown", function () {
        reducirTamanoBotonAccionf2(teclaRaiz);
    });
    teclaRaiz.addEventListener("mouseup", function () {
        tamanoBotonAccionf2(teclaRaiz);
    });
    teclaDividir.addEventListener("mousedown", function () {
        reducirTamanoBotonAccionf2(teclaDividir);
    });
    teclaDividir.addEventListener("mouseup", function () {
        tamanoBotonAccionf2(teclaDividir);
    });

    function reducirTamanoBotonAccion(tecla) {
        tecla.style.width = "27%";
        tecla.style.height = "61.91px";
    }

    function tamanoBotonAccion(tecla) {
        tecla.style.width = "28%";
        tecla.style.height = "64.91px";
    }

    function reducirTamanoBotonAccionf2(tecla) {
        tecla.style.width = "21%";
        tecla.style.height = "61.91px";
    }

    function tamanoBotonAccionf2(tecla) {
        tecla.style.width = "22%";
        tecla.style.height = "62.91px";
    }


    function reducirTamanoBotonAccionMas() {
        teclaMas.style.width = "89%";
        teclaMas.style.height = "98%";
    }

    function tamanoBotonAccionMas() {
        teclaMas.style.width = "90%";
        teclaMas.style.height = "100%";
    }

    function validarDisplay() {
        var contenido = document.getElementById("display").innerText;

        if (contenido == 0) {
            return true;
        } else {
            return false;
        }

    }

    function actionkey(teclaPresionada) {
        if (teclaigualPresionada == true) {
            //operadorPresionado=false;
            document.getElementById("display").innerHTML = "0";
        }
        if (validarDisplay()) {
            document.getElementById("display").innerHTML = teclaPresionada;
            valorActual = document.getElementById("display").innerText;
        } else {
            if (operadorPresionado) {
                if (parseInt(valorTemporal) == 0) {
                    document.getElementById("display").innerHTML = teclaPresionada;
                    valorActual = document.getElementById("display").innerText;
                    valorFinal = valorActual;
                    valorTemporal = 1;
                } else {
                    if (document.getElementById("display").innerText.length < 8) {
                        valorActual = document.getElementById("display").innerText;
                        var nuevoValor = valorActual.concat(teclaPresionada);
                        valorFinal = nuevoValor;
                        document.getElementById("display").innerHTML = nuevoValor;
                    }

                }

            } else {
                if (document.getElementById("display").innerText.length < 8) {
                    valorActual = document.getElementById("display").innerText;
                    var nuevoValor = valorActual.concat(teclaPresionada);
                    document.getElementById("display").innerHTML = nuevoValor;
                }
            }

        }

    }

    function asignarSigno(signo) {
        operadorPresionado = true;
        operador = signo;
        primerValor = document.getElementById("display").innerText;
        valorTemporal = 0;
    }

    document.getElementById('mas').addEventListener('click', function (e) {
        asignarSigno("+");
    });

    document.getElementById('menos').addEventListener('click', function (e) {
        asignarSigno("-");
    });
    document.getElementById('por').addEventListener('click', function (e) {
        asignarSigno("x");
    });
    document.getElementById('dividido').addEventListener('click', function (e) {
        asignarSigno("/");
    });

    document.getElementById('igual').addEventListener('click', function (e) {
        if (operadorPresionado == true) {
            switch (operador) {
                case '+':
                    document.getElementById("display").innerHTML = parseFloat(primerValor) + parseFloat(valorFinal);
                    operadorPresionado = false;
                    teclaigualPresionada = true;
                    break;
                case '-':
                    document.getElementById("display").innerHTML = parseFloat(primerValor) - parseFloat(valorFinal);
                    operadorPresionado = false;
                    teclaigualPresionada = true;
                    break;
                case 'x':
                    document.getElementById("display").innerHTML = parseFloat(primerValor) * parseFloat(valorFinal);
                    operadorPresionado = false;
                    teclaigualPresionada = true;
                    break;
                case '/':
                    document.getElementById("display").innerHTML = parseFloat(primerValor) / parseFloat(valorFinal);
                    operadorPresionado = false;
                    teclaigualPresionada = true;
                    break;
            }
        } else {
            switch (operador) {
                case '+':
                    valorActual = document.getElementById("display").innerText;
                    document.getElementById("display").innerHTML = parseInt(valorActual) + parseFloat(valorFinal);
                    teclaigualPresionada = true;
                    break;
            }

        }
    });

    document.getElementById('on').addEventListener('click', function (e) {
        document.getElementById("display").innerHTML = "0";
        primerValor = 0;
        valorFinal = 0;
        teclaigualPresionada = false;

    });

    document.getElementById('1').addEventListener('click', function (e) {
        actionkey("1");
    });

    document.getElementById('2').addEventListener('click', function (e) {
        actionkey("2");
    });
    document.getElementById('3').addEventListener('click', function (e) {
        actionkey("3");
    });
    document.getElementById('4').addEventListener('click', function (e) {
        actionkey("4");
    });
    document.getElementById('5').addEventListener('click', function (e) {
        actionkey("5");
    });
    document.getElementById('6').addEventListener('click', function (e) {
        actionkey("6");
    });
    document.getElementById('7').addEventListener('click', function (e) {
        actionkey("7");
    });
    document.getElementById('8').addEventListener('click', function (e) {
        actionkey("8");
    });

    document.getElementById('9').addEventListener('click', function (e) {
        actionkey("9");
    });

    document.getElementById('0').addEventListener('click', function (e) {
        actionkey("0");
    });
})();