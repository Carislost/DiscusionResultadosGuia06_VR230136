var diccionario = {
    'Árbol': 'Planta perenne, de tallo leñoso, que se ramifica a cierta altura del suelo.',
    'Bicicleta': 'Vehículo de dos ruedas propulsado por un sistema de pedales.',
    'Catar': 'Probar un alimento o una bebida para examinar su sabor o calidad.',
    'Dátil': 'Fruto de la palmera, comestible, de forma alargada y sabor dulce.',
    'Elefante': 'Mamífero de gran tamaño, con trompa larga y orejas grandes, conocido como el animal terrestre más grande.',
    'Fotografía': 'Técnica que permite capturar y almacenar imágenes utilizando la luz.',
    'Guitarra': 'Instrumento musical de cuerda con forma curvada y sonido armonioso.',
    'Helado': 'Alimento congelado hecho a base de leche y otros ingredientes, generalmente dulce.',
    'Isla': 'Porción de tierra rodeada de agua por todas partes.',
    'Jirafa': 'Mamífero africano de cuello largo y patas altas, el animal más alto del mundo.',
    'Kiwi': 'Fruta comestible de piel marrón y pulpa verde, también, ave no voladora de Nueva Zelanda.',
    'Lámpara': 'Objeto que produce luz para iluminar un espacio.',
    'Mochila': 'Bolsa que se lleva en la espalda sujeta con dos correas que pasan por encima de los hombros.',
    'Nube': 'Acumulación visible de partículas de agua o hielo en la atmósfera.',
    'Órgano': 'Instrumento musical de viento con numerosos tubos, también, parte del cuerpo con función específica.',
    'Piano': 'Instrumento musical de teclado que produce sonido al golpear cuerdas con martillos.',
    'Química': 'Ciencia que estudia la composición, propiedades y transformaciones de la materia.',
    'Reloj': 'Instrumento para medir el tiempo, con agujas o digital.',
    'Sol': 'Estrella que ilumina y calienta la Tierra, centro de nuestro sistema solar.',
    'Teclado': 'Conjunto de teclas para operar una máquina, instrumento musical o dispositivo informático.',
    'Uva': 'Fruta pequeña y dulce, generalmente morada o verde, que crece en racimos.',
    'Viento': 'Movimiento del aire en la atmósfera, percibido por el tacto y la vista.',
    'Windsurf': 'Deporte acuático que consiste en deslizarse sobre el agua en una tabla con una vela.',
    'Xilófono': 'Instrumento musical de percusión compuesto por láminas de madera o metal que se golpean con baquetas.',
    'Yoga': 'Práctica física y mental originaria de la India, que busca el equilibrio entre cuerpo y mente.',
    'Zoológico': 'Lugar donde se mantienen en cautiverio diversas especies animales con fines educativos y de conservación.'
};

function iniciar() {
    cargarLista();
    var lista = document.getElementById("lstwords");
    var texto = document.getElementById("txtword");
    var btnShowDefinition = document.getElementById("btnShowDefinition");
    
    if (lista.addEventListener) {
        lista.addEventListener("dblclick", function () {
            cargarDefinicion(this.options[this.selectedIndex].text);
        }, false);
    }
    
    if (texto.addEventListener) {
        texto.addEventListener("keyup", buscar, false);
    }
    
    if (btnShowDefinition.addEventListener) {
        btnShowDefinition.addEventListener("click", function () {
            var selectedWord = lista.options[lista.selectedIndex].text;
            cargarDefinicion(selectedWord);
        }, false);
    }
}

function cargarLista() {
    var lista = document.getElementById("lstwords");
    for (var palabra in diccionario) {
        var option = new Option(palabra);
        lista.add(option);
    }
}

function cargarDefinicion(palabra) {
    var definicion = diccionario[palabra];
    document.getElementById("txtdefinition").value = definicion;
}

function buscar() {
    var str = document.getElementById("txtword").value.toLowerCase();
    var lista = document.getElementById("lstwords");
    lista.innerHTML = '';
    for (var palabra in diccionario) {
        if (palabra.toLowerCase().includes(str)) {
            var option = new Option(palabra);
            lista.add(option);
        }
    }
}

if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}
