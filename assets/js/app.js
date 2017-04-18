window.addEventListener("load", function(evento){
	evento.preventDefault();

	var parrafOrigen = document.getElementById("texto1");
	var parrafoHistoria = document.getElementById("texto2");

	var mostrarOrigen = document.getElementById("origen");
	var mostrarHistoria = document.getElementById("historia");


	mostrarOrigen.addEventListener("click", function(){
		if (parrafOrigen.style.display === "none") {
			parrafOrigen.style.display = "inline-block";
		} else {
			parrafOrigen.style.display = "none";
		}
	})
	
	mostrarHistoria.addEventListener("click", function(){
		if (parrafoHistoria.style.display === "none") {
			parrafoHistoria.style.display = "inline-block";
		} else {
			parrafoHistoria.style.display = "none";
		}
	})

})
