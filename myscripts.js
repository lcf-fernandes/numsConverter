// function converter() {
//   const numero = document.getElementById("entrar-numero");
//   if (isNaN(numero)) return alert('Somente números');
//   const decimal = parseInt(numero.value, 2);
//   document.getElementById("decimal").value = decimal;
//   const binario = parseInt(numero.value, 10);
//   document.getElementById("binario").value = decimal;
//   const octal = parseInt(numero.value, 8);
//   document.getElementById("octal").value = decimal;
//   const hexadecimal = parseInt(numero.value, 16);
//   document.getElementById("hexadecimal").value = decimal;
//   return true;
// }


function conversao(num, baseIni, baseFin) {
    var numConvertido = "";

    numConvertido = parseInt(num, baseIni);
    return numConvertido.toString(baseFin);
}

function converter(num, base) {

    // ==========================================
    // ===========CONVERTER A DECIMAL============
    // ==========================================

    document.getElementById("decimal").value = num != "" ? conversao(num, base, 10) : "";

    // ==========================================
    // ===========CONVERTER A BINÁRIO============
    // ==========================================
    document.getElementById("binario").value = num != "" ? conversao(num, base, 2) : "";

    // ==========================================
    // ============CONVERTER A OCTAL=============
    // ==========================================
    document.getElementById("octal").value = num != "" ? conversao(num, base, 8) : "";

    // ==========================================
    // ==========CONVERTER A HEXADECIMAL=========
    // ==========================================
    document.getElementById("hexadecimal").value = num != "" ? conversao(num, base, 16).toUpperCase() : "";

}


// TERMINAR DEPOIS


// function aBinario() {
//     var saida = document.getElementById("textoBin");
//     var entrada = document.getElementById("textoAscii").value;

//     saida.value = "";

//     for (var i = 0; i < entrada.length; i++) {
//         var e = entrada[i].charCodeAt(0);
//         var s = "";

//         do {
//             var a = e % 2;
//             e = (e - a) / 2;
//             s = a + s;
//         } while (e != 0);

//         while (s.length < 8) {
//             s = "0" + s;
//         }

//         saida.value += s + " ";
//     }

//     saida.value = saida.value.substr(0, saida.value.length - 1);
// }

// function aUnicode() {

//     var binario = document.getElementById("textoBin").value.split(' ');
//     var corrente = [];

//     for (var i = 0; i < binario.length; i++) {
//         corrente.push(String.fromCharCode(parseInt(binario[i], 2)));
//     }

//     document.getElementById("textoAscii").value = corrente.join('');
// }


// =============================================
//   Estudo de Javascript baseado no código em:
// https://www.davidstreams.com/baul/conversor/
// =============================================
