function convertirTemperatura() {
    const input = document.getElementById("inputCelsius");
    const boton = document.getElementById("convertirBtn");

    // Obtener el valor del input
    let celsius = input.value;

    // Convertir a número y validar si es un número válido
    celsius = Number(celsius);

    if (isNaN(celsius)) {
        alert("Por favor, ingresa un número válido.");
        return; // Salir de la función si no es un número
    }

    // Cambiar el fondo dinámicamente según la temperatura
    const body = document.body;
    if (celsius < 13) {
        body.style.background = "linear-gradient(to bottom, #292994, #87ceeb)"; // Azul frío
    } else {
        body.style.background = "linear-gradient(to bottom, #ff9966, #ff5e62)"; // Naranja cálido
    }

    // Deshabilitar el botón al hacer clic
    boton.disabled = true;

    // Realizar las conversiones
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvins = celsius + 273.15;

    // Mostrar los resultados en el DOM
    const resultado = `
        Grados Fahrenheit: ${fahrenheit.toFixed(2)}<br>
        Kelvins: ${kelvins.toFixed(2)}
    `;
    document.getElementById("resultado").innerHTML = resultado;

    // Volver a habilitar el botón después de 2 segundos
    setTimeout(() => {
        boton.disabled = false;
    }, 2000);
}