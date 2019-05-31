// function iniciar(){
// 	botonAceptar.disabled=true;
// 	cajaCheck.addEventListener("change",activarBoton);
// 	botonAceptar.addEventListener("click",enviarDatos);
// }

// function enviarDatos(){
// 	botonAceptar.value = "Enviando...";
// 	botonAceptar.disabled=true;
// 	setTimeout(escribir,2000);
// }

// function escribir(){
// 	location.href="pagina2.html";
// }

// function activarBoton(){
// 	if(cajaCheck.checked==true){
// 		botonAceptar.disabled=false;
// 	}else{
// 		botonAceptar.disabled=true;
// 	}
	
// }
// window.addEventListener("load",iniciar);
// -----------------------------------------------------------------------------------------
// function iniciar(){
// botonEscribir.addEventListener("click",escribirTexto);
// botonResetear.addEventListener("click",resetear);
// }


// function escribirTexto(){
// parrafo.textContent= cajaTexto.value;
// }

// function resetear(){
// 	parrafo.textContent="";
// 	cajaTexto.value="";
// 	cajaTexto.focus();
// }

// window.addEventListener("load",iniciar);

function iniciar(){
    bloque.style.display="none";
    añadirAsunto.addEventListener("click",verAsunto);
    botonQuitar.addEventListener("click",quitarAsunto);
}

function quitarAsunto(){
	bloque.style.display="none";
}

function verAsunto(){
	bloque.style.display="block";
}

window.addEventListener("load",iniciar);