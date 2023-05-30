const mensaje = document.querySelector(".mensaje");
const respuesta = document.querySelector(".respuesta");

function btnEncriptar(){
    const textoEncriptado = encriptar(mensaje.value);
    respuesta.value = textoEncriptado;
    mensaje.value = "";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(mensaje.value);
    respuesta.value = textoEncriptado;
    mensaje.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado
}
function btncopiar(){
    navigator.clipboard.writeText(respuesta.value);
}
function btnpegar(){
    navigator.clipboard.readText().then(Text => {
        mensaje.value=Text;
    })
}
