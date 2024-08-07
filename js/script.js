const ingreseTexto = document.getElementById("ingreseTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const munecoId = document.getElementById("munecoId");
const derechaInfo = document.getElementById("derechaInfo");
const derecha = document.getElementById("derecha");


/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]


botonEncriptar.addEventListener("click",()=>{
    const texto = ingreseTexto.value.toLowerCase()
    function encriptar(newText) {
        for(let i = 0; i <remplazar.length; i++){
            if (newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
            };
        };
        return newText;
    }
    const textoEncriptado = encriptar(texto);
    
    mensajeFinal.innerHTML = textoEncriptado;
    
    munecoId.style.display = "none";
    derechaInfo.style.display = "none";
    botonCopiar.style.display = "block";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar")

});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingreseTexto.value.toLowerCase();
    function desencriptar(newText) {
        for (let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar [i][1])){
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
            };
        };
        return newText
    }
    const textoDesencriptado = desencriptar(texto);

    mensajeFinal.innerHTML = textoDesencriptado;

})

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy");
    alert("texto copiado");
})


