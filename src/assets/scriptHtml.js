            var etiqueta = document.createElement('script');
            etiqueta.src="/socket.io/socket.io.js";
            document.querySelector('head').appendChild(etiqueta);
			window.addEventListener("load", function () { //when page loads
                var socket = io(); //load socket.io-client and connect to the host that serves the page
				var equipoRojo = document.getElementById("rojo");
				var equipoVerde = document.getElementById("verde");
				var reset = document.getElementById("reset");

				equipoRojo.addEventListener("click", function () { //add event listener for when checkbox changes
					socket.emit("boton", 'rojo'); //send button status to server (as 1 or 0)
					console.log('botonRojo');
				});
				equipoVerde.addEventListener("click", function () { //add event listener for when checkbox changes
					socket.emit("boton", 'verde'); //send button status to server (as 1 or 0)
					console.log('botonVerde');
				});
				reset.addEventListener("click", function () { //add event listener for when checkbox changes
					socket.emit("botonReset", 'reset'); //send button status to server (as 1 or 0)
					console.log('botonReset');
				});
                socket.on('actualiza', function (verde, rojo) {

                    document.getElementById("puntosRojo").innerHTML = rojo;
                    document.getElementById("puntosVerde").innerHTML = verde;
                    console.log('entra actualiza');
                });
			});
			
