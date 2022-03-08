const boton = document.getElementById("btnForm");
const textArea = document.getElementById("AnotacionesForm");
const titulo = document.getElementById("tituloInput");
const colorBg = document.getElementById("colorPickerBg");
const colorTx = document.getElementById("colorPickerTx");
const objetivoCard = document.getElementById("cardDestino");
const card = document.getElementById("templateCard");
const fragment = document.createDocumentFragment();




boton.addEventListener("click", e => {
    e.preventDefault();
    const colorCard = colorBg.value;
    // console.log(colorCard);
    const colorTexto = colorTx.value;
    // console.log(colorTexto); 
    const datosTitulo = titulo.value;
    // console.log(datosTitulo);
    const datosTa = textArea.value;
    // console.log(datosTa);
    const clone = card.content.cloneNode(true);
    clone.querySelector("h4").textContent = datosTitulo;
    clone.querySelector("h4").style.color = colorTexto;
    clone.querySelector("li").style.color = colorTexto;
    // console.log(clone);
    clone.querySelector("li").textContent = datosTa;
    clone.querySelector(".colorbg").style.background = colorCard;
    // console.log(clone);
    fragment.appendChild(clone);
    
    objetivoCard.appendChild(fragment);
})


