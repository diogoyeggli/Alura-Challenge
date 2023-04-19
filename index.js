const textoDeEntrada = document.querySelector("#entrada");

const criptografar = () => {
    let texto = textoDeEntrada.value;

    let textoCriptografado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    document.getElementById('caixa-de-saida').innerHTML = '<textarea readonly id="saida">' + textoCriptografado +
        '</textarea>' + '<button onclick="copiar()" class="botao-copiar" id="copiar">Copiar</button>'

}

const descriptografar = () => {
    let texto = textoDeEntrada.value;

    let textoDescriptografado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('caixa-de-saida').innerHTML = '<textarea readonly id="saida">' + textoDescriptografado +
        '</textarea>' + '<button onclick="copiar()" class="botao-copiar" id="copiar">Copiar</button>'
}

const copiar = () => {
    var textoCop = document.getElementById('caixa-de-saida').querySelector('textarea');
    textoCop.select();
    document.execCommand('copy');
}