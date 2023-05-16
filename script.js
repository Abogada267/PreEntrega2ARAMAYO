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
