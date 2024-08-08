const leftTexarea = document.getElementById("left__texarea");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const munecoId = document.getElementById("munecoId");
const derechaInfo = document.getElementById("derechaInfo");
const derecha = document.getElementById("derecha");


const remplace = (newtext) => {
    mensajeFinal.innerHTML = newtext;
    mensajeFinal.classList.add("ajustar");
    derecha.classList.add("ajuste")
    leftTexarea.value ="";
    leftTexarea.style.height = "auto";
    leftTexarea.placeholder = "Ingrese el texto aqui";
    munecoId.classList.add("ocultar");
    derechaInfo.classList.add("ocultar");
    botonCopiar.classList.remove("btn__ocultar");
}


const reset =() =>{
    leftTexarea.value = "";
    leftTexarea.style.height = "auto";
    mensajeFinal.innerHTML="";
    derecha.classList.remove("ajuste");
    mensajeFinal.classList.remove("ajustar");
    munecoId.classList.remove("ocultar");
    mensajeFinal.placeholder = "Ningun mensaje fue encontrado";
    derechaInfo.classList.remove("ocultar");
    botonCopiar.classList.add("btn__ocultar");
    leftTexarea.focus();
}


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

    const texto = leftTexarea.value.toLowerCase();

    if (texto != "" ){
        function encriptar(newText) {
            for(let i = 0; i <remplazar.length; i++){
                if (newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            };    
            return newText;
        };
        remplace(encriptar(texto));
    } else{
        alert("Ingrese texto a encriptar");
        reset();
    };
});






botonDesencriptar.addEventListener("click",()=>{

    const texto = leftTexarea.value.toLowerCase();

    if (texto != "" ){
        function encriptar(newText) {
            for(let i = 0; i <remplazar.length; i++){
                if (newText.includes(remplazar[i][1])){
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };    
            return newText;
        };
        remplace(encriptar(texto));
    } else{
        alert("Ingrese texto a desencriptar");
        reset();
    };
});


botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy");
    alert("texto copiado");
    reset();
});

// ajuste textarea

leftTexarea.addEventListener("change", e =>{
    leftTexarea.style.height = "auto";
    let scHeight = e.target.scrollHeigth;
    leftTexarea.style.height = `${scHeight}px`;
});

leftTexarea.addEventListener("keyup", e =>{
    leftTexarea.style.height = "auto";
    let scHeight = e.target.scrollHeigth;
    leftTexarea.style.height = `${scHeight}px`;
});
