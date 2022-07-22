window.addEventListener("load", inicio);
window.addEventListener("load",mostrarComunidades);

function inicio() {
    // Se ocultan los select de provincias y municipios.
    var elements = document.body.children;
    for(var i=2;i<elements.length; i++){
        elements[i].style.visibility = "hidden";
    }
    // Eventos frente a cambios en el select de comunidades y provincias que hacen mostrar 
    // el siguiente select correspondiente con los datos cargados de la base de datos.
    document.getElementById("comunidades").addEventListener("change", mostrarProvincias);
    document.getElementById("provincias").addEventListener("change", mostrarMunicipios);
}   

// Función que muestra el select de las comunidades y lo rellena con los datos de las comunidades
// tras realizar consulta en la base de datos.
function mostrarComunidades(){
    var objeto = {
        "tabla": "comunidades"
    };
    var xhttp = new XMLHttpRequest();

    // Se crean los elementos option del select con value = id_comunidad y innerHTML = nombre de la comunidad.
    xhttp.onreadystatechange = function () { 
        if ((this.readyState == 4) && (this.status == 200)) {
            var array = JSON.parse(this.responseText);  

            var selectCom = document.getElementById("comunidades");
            var option=document.createElement("option");
            option.innerHTML = "";
            selectCom.appendChild(option) 
            for (x in array) {
                var option=document.createElement("option");
                option.value = array[x].id_comunidad
                option.innerHTML = array[x].nombre;
                selectCom.appendChild(option) // Se añaden los elementos option al select de las comunidades.
            }
        }
    }
    // Se realiza la consulta.
    var parametros = JSON.stringify(objeto);
    xhttp.open("GET", "consultaCOM.php?objeto="+parametros, true);
    xhttp.send();  
}

// Función que escoge la comunidad seleccionada, realiza una consulta GET y escribe las provincias correspondientes.
function mostrarProvincias(){
    // Se esconden los municipios en caso de un change en el select de la comunidad.
    document.getElementById("etiq_municipios").style.visibility ="hidden";
    document.getElementById("municipios").style.visibility ="hidden";

    // Se hace visible el downdrop list de provincias.
    document.getElementById("etiq_provincias").style.visibility ="visible";
    document.getElementById("provincias").style.visibility ="visible";

    document.getElementById("provincias").options.length = 0; // Elimina los elementos anteriores de provincias.
    var idComunidadSel = document.getElementById("comunidades").value; // Obtiene el ID de la comunidad seleccionada.

    var objeto = {
        "tabla": "provincias",
        "valor": idComunidadSel
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () { 
        if ((this.readyState == 4) && (this.status == 200)) {
            var array = JSON.parse(this.responseText);  

            var selectCom = document.getElementById("provincias");
            var option=document.createElement("option");
            option.innerHTML = "";
            selectCom.appendChild(option) 
            for (x in array) {
                var option=document.createElement("option");
                option.value = array[x].id_provincia;
                option.innerHTML = array[x].provincia;
                selectCom.appendChild(option) 
            }
        }
    }
    // Petición GET a la base de datos con nombre de la provincia y el ID.
    var parametros = JSON.stringify(objeto);

    xhttp.open("GET", "consultaPRO.php?objeto="+parametros, true);
    xhttp.send(); 
}


// Función que muestra los municipios en función de la provincia seleccionada.
function mostrarMunicipios(){
    // Hace visible el select de municipios.
    document.getElementById("etiq_municipios").style.visibility ="visible";
    document.getElementById("municipios").style.visibility ="visible";

    document.getElementById("municipios").options.length = 0; // Elimina los municipios que había anteriormente.
    var idProvinciaSel = document.getElementById("provincias").value;

    var objeto = {
        "tabla": "municipios",
        "valor": idProvinciaSel
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () { 
        if ((this.readyState == 4) && (this.status == 200)) {
            var array = JSON.parse(this.responseText);  

            var selectCom = document.getElementById("municipios");
            var option=document.createElement("option");
            option.innerHTML = "";
            selectCom.appendChild(option) 
            for (x in array) {
                var option=document.createElement("option");
                option.value = array[x].id_municipio;
                option.innerHTML = array[x].nombre;
                selectCom.appendChild(option) 
            }
        }
    }
    // Realiza la consulta GET con los id de municipios y el nombre.
    var parametros = JSON.stringify(objeto);
    xhttp.open("GET", "consultaMUN.php?objeto="+parametros, true);
    xhttp.send(); 
}