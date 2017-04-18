
	var parrafOrigen = document.getElementById("texto1");
	var parrafoHistoria = document.getElementById("texto2");

	function mostrarOrigen(){
		if (parrafOrigen.style.display === "none") {
			parrafOrigen.style.display = "inline-block";
		} else {
			parrafOrigen.style.display = "none";
		}
	}

	function mostrarHistoria(){
		if (parrafoHistoria.style.display === "none") {
			parrafoHistoria.style.display = "inline-block";
		} else {
			parrafoHistoria.style.display = "none";
		}
	}