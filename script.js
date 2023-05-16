function ingreso() {
    const edad = prompt("Ingresa tu edad:");

    if (edad >= 18) {
        let main = document.getElementById('ingreso');
        if (confirm('Hola, estás por ingresar a la página de la Dra. Aramayo sobre presupuestos. Si deseas ver los servicios que ofrece, haz clic en "Aceptar"; en caso contrario, en "Cancelar"')) {
            alert("Clickeaste Aceptar. Se mostrará la página.");
            main.style.display = 'block';
        } else {
            alert("Hiciste clic en Cancelar. ¡Qué pena, te lo pierdes!");
            main.style.display = 'none';
        }

        const telefono = prompt("Ingresa tu número de teléfono (Cod. Área):");
        const regexTelefono = /^\(\d{4}\)\s*\d{6}$/;
        if (regexTelefono.test(telefono)) {
            console.log("El número de teléfono ingresado es válido.");
            alert("El número de teléfono ingresado es válido.");

            // Aquí puedes agregar el código para mostrar o almacenar el número de teléfono
            // Por ejemplo, puedes agregar un párrafo en el HTML para mostrarlo:
            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.textContent = "Número de teléfono: " + telefono;
            main.appendChild(telefonoParrafo);
        } else {
            console.error("El número de teléfono ingresado no es válido.");
            alert("El número de teléfono ingresado no es válido.");
        }
    }
}

window.onload = function () {
    ingreso();
};

ingreso();

function ingreso() {
    const edad = prompt("Ingresa tu edad:");

    if (edad >= 18) {
        let main = document.getElementById('ingreso');
        if (confirm('Hola, estas por ingresar a la pagina de la Dra. Aramayo sobre presupuestos, si desea ver los servicios que ofrece, haga click en "Aceptar", en caso contrario, en "Cancelar"')) {
            alert("Clickeo Aceptar!, se mostrará la pagina.");
            main.style.display = 'block';
        } else {
            alert("Hizo click en Cancelar!, que pena, usted se lo pierde!");
            main.style.display = 'none';
        }

        const telefono = prompt("Ingresa tu número de teléfono,Cod. Area ():");
        const regexTelefono = /^\(\d{4}\)\s*\d{6}$/;
        if (regexTelefono.test(telefono)) {
            console.log("El número de teléfono ingresado es válido.");
            alert("El número de teléfono ingresado es válido.");
        } else {
            console.error("El número de teléfono ingresado no es válido.");
            alert("El número de teléfono ingresado no es válido.");
        }
        function calcularPresupuesto() {
            let ele1 = document.getElementById('TIPO DE CONSULTA')
            let precio1 = ele1.options[ele1.selectedIndex].value;
            let ele2 = document.getElementById('INTERVENCION')
            let precio2 = ele2.options[ele2.selectedIndex].value;
            let ele3 = document.getElementById('ANALISIS')
            let precio3 = ele3.options[ele3.selectedIndex].value;
            precio1 = parseInt(precio1);
            precio2 = parseInt(precio2);
            precio3 = parseInt(precio3);
            let suma = precio1 + precio2 + precio3;
            document.getElementById('resultado').value = suma;
        }
    } else {
        alert("DEBES SER MAYOR DE 18 AÑOS PARA ACCEDER A ESTA PÁGINA.");
        window.location.replace("https://www.google.com");
    }
}

let precio = prompt("Ingrese el precio:");
let cuotas = prompt("Ingrese la cantidad de cuotas (5 o 10):");

let recargo = 0;
if (cuotas == 5) {
    recargo = 0.2;
} else if (cuotas == 10) {
    recargo = 0.3;
} else {
    alert("La cantidad de cuotas debe ser 5 o 10");
}

let precioFinal = precio * (1 + recargo);
if (recargo > 0) {
    let cuota = precioFinal / cuotas;
    alert("El precio final es: $" + precioFinal + " en " + cuotas + " cuotas de $" + cuota.toFixed(2));
}
let url = "https://link.mercadopago.com.ar/abogadamalvinaramayo" + "?preference-id=XXXXXXXXX" + "&total=" + precioFinal + "&installments=" + cuotas;
window.location.href = url;
