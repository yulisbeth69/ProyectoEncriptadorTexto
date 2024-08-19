function cambiaImg() {
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("tex-salida").style.display = "flex";
    document.getElementById("tex-salida").style.backgroundColor = "white";
    document.getElementById("tex-salida").style.flexDirection = "column";
    document.getElementById("tex-salida").style.justifyContent = "center";
    document.getElementById("tex-salida").style.alignItems = "center";
  }
  function borrarTexto() {
    document.querySelector(".text-area").value=''; 
}
function borrarTexto2() {
    document.querySelector(".mensaje").value=''; 
}

function validacion(input) {
    const tieneUppercase = /[A-Z]/;
    const tieneSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; 
    const hasUppercase = tieneUppercase.test(input);
    const hasSpecialChar = tieneSpecialChar.test(input);
    return hasUppercase || hasSpecialChar;
}
  function encriptar(texto) {
    const matrix = { 
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'		
    };
    return texto.split('').map(char => matrix[char] || char).join('');
}

function desencriptar(encriptadoTexto) {    
    const desMatrix = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    const regex = new RegExp(Object.keys(desMatrix).join('|'), 'g');
    return encriptadoTexto.replace(regex, match => desMatrix[match]);     
}

function Cifrar() {          
    const cifrarTexto = document.getElementById('text_insertado').value;  
    if (validacion(cifrarTexto) === false) {
        const textoEncriptado = encriptar(cifrarTexto);
        document.getElementById('texto_salida').value = textoEncriptado; 
        cambiaImg(); 
        borrarTexto(); 
      } else {
        alert('Solo minusculas sin Caracteres Especiales');
      }        
}

function decifrar() {    
    const encryptadoTexto = document.getElementById('text_insertado').value;
    const decrifradoTexto = desencriptar(encryptadoTexto);
    document.getElementById('texto_salida').value = decrifradoTexto;    
    cambiaImg(); 
}

function copiar() {
    const textarea = document.getElementById('texto_salida');
    const text = textarea.value;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Texto copiado al portapapeles');
            borrarTexto2();;
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}