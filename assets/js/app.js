window.addEventListener("load", function(evento){
	evento.preventDefault();

	var imagenes = document.getElementById("imagenes");

	for (var i = 1; i <= 4; i++) {
		var urlImg = 'assets/img/panda' + i + '.jpg';
		var figure = document.createElement('figure');
		var img = document.createElement('img');
		var span = document.createElement('span');

		img.setAttribute('src',urlImg);

		figure.appendChild(img);
		figure.setAttribute('class','img-panda');

		span.innerText = "X";
		figure.appendChild(span);

		imagenes.appendChild(figure);
	};

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

	var mostrarRestaurar = document.getElementById("restaurar");

	mostrarRestaurar.addEventListener("click", function (){
		imagenes.style.display = "block";
	});

})
