// Definir la lista de países (puedes agregar más países aquí)
const countryList = [
    "camisas",
    "jeans",
    "busos",
    "faldas",
    "pantalones",
    "camisetas",
    "zapatos",
    "ropa",
    "vestidos",
    "calzado",
    "ropa de cama",
    // Agrega más países si es necesario
];

// Obtener los elementos del DOM
const resultBox = document.querySelector(".results");
const inputBox = document.querySelector(".search-bar");

// Verificamos si los elementos están correctamente seleccionados
console.log(inputBox, resultBox); // Si estos son null, es que no están siendo seleccionados correctamente

// Función para mostrar los resultados
const displayResults = function (result) {
    const resultHTML = result.map(function (country) {
        // Crear el HTML dinámicamente para cada país
        return `<li onclick="selectInput('${country}')">${country}</li>`;
    });

    // Insertamos la lista de resultados dentro del contenedor resultBox
    resultBox.innerHTML = '<ul>' + resultHTML.join('') + '</ul>';
};

// Evento de entrada del usuario en la barra de búsqueda
inputBox.addEventListener("keyup", function () {
    const input = inputBox.value.toLowerCase(); // Obtener el valor del input y convertirlo a minúsculas

    // Si no hay texto, limpiamos los resultados
    if (input.length === 0) {
        resultBox.innerHTML = ""; // Limpiar los resultados cuando no hay texto
    } else {
        // Filtramos los países que coinciden con lo ingresado
        const result = countryList.filter(function (country) {
            return country.toLowerCase().includes(input);
        });

        // Mostramos los resultados
        displayResults(result);
    }
});

// Función para seleccionar un país de la lista de resultados
function selectInput(country) {
    // Establecemos el valor del input con el país seleccionado
    inputBox.value = country;
    
    // Limpiamos los resultados de la lista
    resultBox.innerHTML = "";
}
